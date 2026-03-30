import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { buildSystemPrompt } from "./portfolio-context.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

function loadEnvFile(filename) {
  const filePath = path.join(projectRoot, filename);
  if (!fs.existsSync(filePath)) {
    return;
  }

  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    if (!key || process.env[key]) {
      continue;
    }

    let value = trimmed.slice(separatorIndex + 1).trim();
    if ((value.startsWith("\"") && value.endsWith("\"")) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    process.env[key] = value;
  }
}

loadEnvFile(".env");
loadEnvFile(".env.local");

const port = Number.parseInt(process.env.PORTFOLIO_CHAT_PORT ?? "8787", 10);
const provider = (process.env.PORTFOLIO_CHAT_PROVIDER ?? "gemini").trim().toLowerCase();
const allowedOrigin = (process.env.PORTFOLIO_CHAT_ALLOWED_ORIGIN ?? "*").trim();
const analyticsDir = path.join(projectRoot, "server", "data");
const analyticsLogPath = path.join(analyticsDir, "telemetry.jsonl");
const jsonHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Origin": allowedOrigin,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
};

if (!fs.existsSync(analyticsDir)) {
  fs.mkdirSync(analyticsDir, { recursive: true });
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 1024 * 1024) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
}

function normalizeHistory(history) {
  return Array.isArray(history)
    ? history
        .filter((item) => item && typeof item.content === "string" && typeof item.role === "string")
        .slice(-8)
        .map((item) => ({ role: item.role === "assistant" ? "assistant" : "user", content: item.content.trim() }))
        .filter((item) => item.content)
    : [];
}

function getRequestContext(req, body = {}) {
  const sessionIdHeader = req.headers["x-session-id"];
  const rawSessionId =
    typeof body?.sessionId === "string"
      ? body.sessionId
      : typeof sessionIdHeader === "string"
        ? sessionIdHeader
        : Array.isArray(sessionIdHeader)
          ? sessionIdHeader[0]
          : "anonymous";

  return {
    country:
      (typeof req.headers["cf-ipcountry"] === "string" && req.headers["cf-ipcountry"]) ||
      (typeof body?.country === "string" && body.country) ||
      "unknown",
    referrer:
      (typeof body?.referrer === "string" && body.referrer) ||
      (typeof req.headers.referer === "string" && req.headers.referer) ||
      "",
    pageUrl: typeof body?.pageUrl === "string" ? body.pageUrl : "",
    theme: body?.theme === "dark" ? "dark" : "light",
    sessionHash: crypto.createHash("sha256").update(String(rawSessionId)).digest("hex"),
  };
}

function appendTelemetry(entry) {
  fs.appendFileSync(analyticsLogPath, `${JSON.stringify(entry)}\n`, "utf8");
}

function getPortfolioUiContext(body = {}) {
  return {
    section: typeof body?.section === "string" ? body.section : "unknown",
    resumeLabel: typeof body?.resumeLabel === "string" ? body.resumeLabel : "unknown",
    selectedProject: typeof body?.selectedProject === "string" ? body.selectedProject : "unknown",
  };
}

async function callGemini(message, theme, history, context) {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("Missing GEMINI_API_KEY");
  }

  const model = (process.env.GEMINI_MODEL ?? "gemini-2.5-flash").trim();
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: buildSystemPrompt(theme, context) }],
      },
      contents: [
        ...history.map((item) => ({
          role: item.role === "assistant" ? "model" : "user",
          parts: [{ text: item.content }],
        })),
        { role: "user", parts: [{ text: message }] },
      ],
      generationConfig: {
        temperature: theme === "dark" ? 0.9 : 0.6,
        topP: 0.9,
        maxOutputTokens: 320,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`Gemini API returned ${response.status}`);
  }

  const data = await response.json();
  const reply = data?.candidates?.[0]?.content?.parts?.map((part) => part?.text ?? "").join("").trim();
  if (!reply) {
    throw new Error("Gemini API returned an empty reply");
  }

  return reply;
}

async function callOpenAI(message, theme, history, context) {
  const apiKey = process.env.OPENAI_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY");
  }

  const model = (process.env.OPENAI_MODEL ?? "gpt-4o-mini").trim();
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: theme === "dark" ? 0.9 : 0.6,
      max_tokens: 320,
      messages: [
        { role: "system", content: buildSystemPrompt(theme, context) },
        ...history,
        { role: "user", content: message },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API returned ${response.status}`);
  }

  const data = await response.json();
  const reply = data?.choices?.[0]?.message?.content?.trim();
  if (!reply) {
    throw new Error("OpenAI API returned an empty reply");
  }

  return reply;
}

async function generateReply(message, theme, history, context) {
  if (provider === "openai") {
    return callOpenAI(message, theme, history, context);
  }
  return callGemini(message, theme, history, context);
}

const server = http.createServer(async (req, res) => {
  if (!req.url) {
    res.writeHead(400, jsonHeaders);
    res.end(JSON.stringify({ error: "Missing request URL" }));
    return;
  }

  if (req.method === "OPTIONS") {
    res.writeHead(204, jsonHeaders);
    res.end();
    return;
  }

  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, jsonHeaders);
    res.end(JSON.stringify({ ok: true, provider }));
    return;
  }

  if (req.method === "POST" && req.url === "/api/track") {
    try {
      const body = await readJsonBody(req);
      const context = getRequestContext(req, body);
      appendTelemetry({
        eventType: typeof body?.eventType === "string" ? body.eventType : "unknown_event",
        timestamp: new Date().toISOString(),
        country: context.country,
        referrer: context.referrer,
        pageUrl: context.pageUrl,
        theme: context.theme,
        sessionHash: context.sessionHash,
        linkClicked: typeof body?.linkClicked === "string" ? body.linkClicked : null,
        label: typeof body?.label === "string" ? body.label : null,
        question: typeof body?.question === "string" ? body.question : null,
        historyLength: typeof body?.historyLength === "number" ? body.historyLength : null,
      });
      res.writeHead(202, jsonHeaders);
      res.end(JSON.stringify({ ok: true }));
      return;
    } catch (error) {
      res.writeHead(400, jsonHeaders);
      res.end(JSON.stringify({ error: error instanceof Error ? error.message : "Tracking error" }));
      return;
    }
  }

  if (req.method !== "POST" || req.url !== "/api/chat") {
    res.writeHead(404, jsonHeaders);
    res.end(JSON.stringify({ error: "Not found" }));
    return;
  }

  let body = {};

  try {
    body = await readJsonBody(req);
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const theme = body?.theme === "dark" ? "dark" : "light";
    const history = normalizeHistory(body?.history);
    const uiContext = getPortfolioUiContext(body);

    if (!message) {
      res.writeHead(400, jsonHeaders);
      res.end(JSON.stringify({ error: "Message is required" }));
      return;
    }

    const reply = await generateReply(message, theme, history, uiContext);
    res.writeHead(200, jsonHeaders);
    res.end(JSON.stringify({ reply }));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown chat error";
    const statusCode = message.startsWith("Missing ") ? 503 : 500;
    try {
      const context = getRequestContext(req, body);
      appendTelemetry({
        eventType: "fallback_question",
        timestamp: new Date().toISOString(),
        country: context.country,
        referrer: context.referrer,
        pageUrl: context.pageUrl,
        theme: context.theme,
        sessionHash: context.sessionHash,
        linkClicked: null,
        label: "chat_fallback",
        question: typeof body?.message === "string" ? body.message : null,
        historyLength: Array.isArray(body?.history) ? body.history.length : null,
        error: message,
      });
    } catch {
      // Ignore telemetry failures on chat errors.
    }
    res.writeHead(statusCode, jsonHeaders);
    res.end(JSON.stringify({ error: message }));
  }
});

server.listen(port, () => {
  console.log(`Portfolio chat API listening on http://localhost:${port}`);
  console.log(`Provider: ${provider}`);
});
