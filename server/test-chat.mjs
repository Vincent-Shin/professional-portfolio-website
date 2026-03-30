const message = process.argv.slice(2).join(" ").trim() || "Who is Trung Tuan Mai, and what kind of roles fit him best?";
const endpoint = process.env.PORTFOLIO_CHAT_TEST_URL?.trim() || "http://localhost:8787/api/chat";

const response = await fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    message,
    theme: "light",
    history: [],
  }),
});

const text = await response.text();
console.log(`Status: ${response.status}`);
console.log(text);
