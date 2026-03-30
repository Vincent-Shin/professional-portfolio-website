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
