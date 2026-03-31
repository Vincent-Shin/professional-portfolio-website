import { buildSystemPrompt, finalizeAssistantReply } from "../server/portfolio-context.mjs";

function parseAllowedOrigins(env) {
  const raw = env.ALLOWED_ORIGINS || env.ALLOWED_ORIGIN || "*";
  return raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function getAllowedOrigin(request, env) {
  const requestOrigin = request.headers.get("Origin");
  const allowedOrigins = parseAllowedOrigins(env);

  if (allowedOrigins.includes("*")) {
    return requestOrigin || "*";
  }

  if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
    return requestOrigin;
  }

  return allowedOrigins[0] || "*";
}

function json(data, init = {}, allowedOrigin = "*") {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Headers": "Content-Type, x-session-id",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      ...(init.headers ?? {}),
    },
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

function getUiContext(body = {}) {
  return {
    section: typeof body?.section === "string" ? body.section : "unknown",
    resumeLabel: typeof body?.resumeLabel === "string" ? body.resumeLabel : "unknown",
    selectedProject: typeof body?.selectedProject === "string" ? body.selectedProject : "unknown",
  };
}

async function sha256Hex(value) {
  const bytes = new TextEncoder().encode(String(value));
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function getRequestContext(request, body = {}) {
  const sessionId =
    typeof body?.sessionId === "string"
      ? body.sessionId
      : request.headers.get("x-session-id") || "anonymous";

  return {
    country: request.headers.get("cf-ipcountry") || (typeof body?.country === "string" ? body.country : "unknown"),
    referrer:
      (typeof body?.referrer === "string" && body.referrer) ||
      request.headers.get("referer") ||
      "",
    pageUrl: typeof body?.pageUrl === "string" ? body.pageUrl : "",
    theme: body?.theme === "dark" ? "dark" : "light",
    sessionHash: await sha256Hex(sessionId),
  };
}

async function insertTelemetry(env, entry) {
  if (!env.PORTFOLIO_DB) {
    return;
  }

  await env.PORTFOLIO_DB.prepare(
    `INSERT INTO telemetry (
      event_type,
      timestamp,
      country,
      referrer,
      page_url,
      theme,
      session_hash,
      link_clicked,
      label,
      question,
      history_length,
      error
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  )
    .bind(
      entry.eventType,
      entry.timestamp,
      entry.country,
      entry.referrer,
      entry.pageUrl,
      entry.theme,
      entry.sessionHash,
      entry.linkClicked,
      entry.label,
      entry.question,
      entry.historyLength,
      entry.error,
    )
    .run();
}

async function insertLead(env, lead) {
  if (!env.PORTFOLIO_DB) {
    return;
  }

  await env.PORTFOLIO_DB.prepare(
    `INSERT INTO leads (
      timestamp,
      session_hash,
      theme,
      page_url,
      section,
      resume_label,
      selected_project,
      name,
      email,
      company,
      role,
      message,
      source
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  )
    .bind(
      lead.timestamp,
      lead.sessionHash,
      lead.theme,
      lead.pageUrl,
      lead.section,
      lead.resumeLabel,
      lead.selectedProject,
      lead.name,
      lead.email,
      lead.company,
      lead.role,
      lead.message,
      lead.source,
    )
    .run();
}

async function sendDiscordWebhook(env, title, fields = []) {
  if (!env.DISCORD_WEBHOOK_URL) {
    return;
  }

  const cleanFields = fields
    .filter((field) => field && field.value !== undefined && field.value !== null && String(field.value).trim() !== "")
    .map((field) => ({
      name: String(field.name).slice(0, 256),
      value: String(field.value).slice(0, 1024),
      inline: Boolean(field.inline),
    }));

  await fetch(env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "Portfolio Assistant Notify",
      embeds: [
        {
          title,
          color: 0x22c55e,
          fields: cleanFields,
          timestamp: new Date().toISOString(),
        },
      ],
    }),
  });
}

async function callGemini(env, message, theme, history, context) {
  if (!env.GEMINI_API_KEY) {
    throw new Error("Missing GEMINI_API_KEY");
  }

  const model = env.GEMINI_MODEL || "gemini-2.5-flash";
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
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
        maxOutputTokens: 480,
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
  return finalizeAssistantReply(reply);
}

export default {
  async fetch(request, env) {
    const allowedOrigin = getAllowedOrigin(request, env);
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin,
          "Access-Control-Allow-Headers": "Content-Type, x-session-id",
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        },
      });
    }

    if (request.method === "GET" && url.pathname === "/health") {
      return json({ ok: true, provider: "gemini", storage: env.PORTFOLIO_DB ? "d1" : "none" }, { status: 200 }, allowedOrigin);
    }

    if (request.method === "POST" && url.pathname === "/api/track") {
      try {
        const body = await request.json();
        const context = await getRequestContext(request, body);
        const entry = {
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
          error: typeof body?.error === "string" ? body.error : null,
        };
        await insertTelemetry(env, entry);
        if (["chat_open", "chat_message", "link_click", "fallback_question", "contact_prompt_opened"].includes(entry.eventType)) {
          await sendDiscordWebhook(env, `Portfolio ${entry.eventType}`, [
            { name: "Theme", value: entry.theme, inline: true },
            { name: "Country", value: entry.country, inline: true },
            { name: "Section", value: typeof body?.section === "string" ? body.section : "unknown", inline: true },
            { name: "Label", value: entry.label || "-", inline: true },
            { name: "Question", value: entry.question || "-", inline: false },
            { name: "Link", value: entry.linkClicked || "-", inline: false },
            { name: "Page", value: entry.pageUrl || "-", inline: false },
            { name: "Session", value: entry.sessionHash, inline: false },
          ]);
        }
        return json({ ok: true }, { status: 202 }, allowedOrigin);
      } catch (error) {
        return json({ error: error instanceof Error ? error.message : "Tracking error" }, { status: 400 }, allowedOrigin);
      }
    }

    if (request.method === "POST" && url.pathname === "/api/lead") {
      try {
        const body = await request.json();
        const context = await getRequestContext(request, body);
        const lead = {
          timestamp: new Date().toISOString(),
          sessionHash: context.sessionHash,
          theme: context.theme,
          pageUrl: context.pageUrl,
          section: typeof body?.section === "string" ? body.section : "unknown",
          resumeLabel: typeof body?.resumeLabel === "string" ? body.resumeLabel : "unknown",
          selectedProject: typeof body?.selectedProject === "string" ? body.selectedProject : "unknown",
          name: typeof body?.name === "string" ? body.name.trim() : "",
          email: typeof body?.email === "string" ? body.email.trim() : "",
          company: typeof body?.company === "string" ? body.company.trim() : "",
          role: typeof body?.role === "string" ? body.role.trim() : "",
          message: typeof body?.message === "string" ? body.message.trim() : "",
          source: typeof body?.source === "string" ? body.source : "chatbot",
        };

        if (!lead.name || !lead.email || !lead.message) {
          return json({ error: "Name, email, and message are required" }, { status: 400 }, allowedOrigin);
        }

        await insertLead(env, lead);
        await insertTelemetry(env, {
          eventType: "lead_capture",
          timestamp: lead.timestamp,
          country: context.country,
          referrer: context.referrer,
          pageUrl: context.pageUrl,
          theme: context.theme,
          sessionHash: context.sessionHash,
          linkClicked: null,
          label: lead.role || lead.company || "lead_capture",
          question: lead.message,
          historyLength: null,
          error: null,
        });
        await sendDiscordWebhook(env, "New portfolio lead", [
          { name: "Name", value: lead.name, inline: true },
          { name: "Email", value: lead.email, inline: true },
          { name: "Company", value: lead.company || "-", inline: true },
          { name: "Role", value: lead.role || "-", inline: true },
          { name: "Theme", value: lead.theme, inline: true },
          { name: "Section", value: lead.section, inline: true },
          { name: "Resume", value: lead.resumeLabel, inline: true },
          { name: "Project", value: lead.selectedProject, inline: true },
          { name: "Message", value: lead.message, inline: false },
          { name: "Page", value: lead.pageUrl || "-", inline: false },
        ]);
        return json({ ok: true }, { status: 202 }, allowedOrigin);
      } catch (error) {
        return json({ error: error instanceof Error ? error.message : "Lead capture error" }, { status: 400 }, allowedOrigin);
      }
    }

    if (request.method === "POST" && url.pathname === "/api/chat") {
      let body = {};

      try {
        body = await request.json();
        const message = typeof body?.message === "string" ? body.message.trim() : "";
        const theme = body?.theme === "dark" ? "dark" : "light";
        const history = normalizeHistory(body?.history);
        const uiContext = getUiContext(body);

        if (!message) {
          return json({ error: "Message is required" }, { status: 400 }, allowedOrigin);
        }

        const reply = await callGemini(env, message, theme, history, uiContext);
        return json({ reply }, { status: 200 }, allowedOrigin);
      } catch (error) {
        try {
          const context = await getRequestContext(request, body);
          await insertTelemetry(env, {
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
            error: error instanceof Error ? error.message : "Unknown chat error",
          });
        } catch {
          // Ignore telemetry errors.
        }

        return json(
          { error: error instanceof Error ? error.message : "Unknown chat error" },
          { status: error instanceof Error && error.message.startsWith("Missing ") ? 503 : 500 },
          allowedOrigin,
        );
      }
    }

    return json({ error: "Not found" }, { status: 404 }, allowedOrigin);
  },
};
