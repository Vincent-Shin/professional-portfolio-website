# Backend Deploy Guide

This portfolio frontend is already prepared to call a public chatbot backend.

## Current architecture

- Frontend:
  - Calls `VITE_PORTFOLIO_CHAT_API_URL`
  - Falls back to the local portfolio assistant if the API fails
- Backend:
  - File: `server/chat-api.mjs`
  - Main route: `POST /api/chat`
  - Telemetry route: `POST /api/track`
  - Health route: `GET /health`

## Required env vars

```env
VITE_PORTFOLIO_CHAT_API_URL=https://YOUR-BACKEND/api/chat

PORTFOLIO_CHAT_PROVIDER=gemini
PORTFOLIO_CHAT_PORT=8787
PORTFOLIO_CHAT_ALLOWED_ORIGIN=https://vincent-shin.github.io
GEMINI_API_KEY=YOUR_REAL_KEY
GEMINI_MODEL=gemini-2.5-flash
```

Optional OpenAI mode:

```env
PORTFOLIO_CHAT_PROVIDER=openai
OPENAI_API_KEY=YOUR_OPENAI_KEY
OPENAI_MODEL=gpt-4o-mini
```

## Local run

Terminal 1:

```bash
npm run dev:api
```

Terminal 2:

```bash
npm run dev
```

## Recommended public deployment

Recommended target:

- Cloudflare Workers for the backend
- Cloudflare D1 for persistent telemetry storage

Why:

- cheap/free-tier friendly
- easy secret management
- has `cf-ipcountry` available
- fits lightweight chatbot + telemetry well

## Cloudflare-first deploy steps

1. Install dependencies:

```bash
npm install
```

2. Login to Cloudflare:

```bash
npx wrangler login
```

3. Create the D1 database:

```bash
npx wrangler d1 create vincent-portfolio-telemetry
```

4. Copy the returned `database_id` into [wrangler.toml](/c:/Users/vince/portfolio%20websiter/Dark%20Professional%20Portfolio%20UI/wrangler.toml)

5. Apply the migration:

```bash
npm run cf:d1:apply
```

6. Set the Gemini secret:

```bash
npx wrangler secret put GEMINI_API_KEY
```

7. Deploy the Worker:

```bash
npm run cf:deploy
```

8. Copy the Worker URL and set the frontend env:

```env
VITE_PORTFOLIO_CHAT_API_URL=https://YOUR-WORKER.workers.dev/api/chat
```

9. Rebuild/redeploy the frontend.

## Minimum production checklist

1. Deploy backend with a public URL.
2. Set `GEMINI_API_KEY` as a secret.
3. Set `PORTFOLIO_CHAT_ALLOWED_ORIGIN` to your real frontend domain.
4. Set `VITE_PORTFOLIO_CHAT_API_URL` in the frontend deployment.
5. Verify:
   - `GET /health`
   - `POST /api/chat`
   - `POST /api/track`
6. Confirm the frontend shows:
   - `Live AI` when the backend is working
   - `Fallback Local Assistant` when the backend fails

## Telemetry fields currently collected

- `country`
- `referrer`
- `pageUrl`
- `theme`
- `sessionHash`
- `linkClicked`
- `label`
- `question`
- `historyLength`
- `timestamp`

## Current local telemetry storage

Local development writes telemetry to:

`server/data/telemetry.jsonl`

This directory is ignored by git.
