# Professional Portfolio Website

Recruiter-facing portfolio platform built with React, TypeScript, and Vite, with a production chatbot backend on Cloudflare Workers.

Live website: `https://vincent-shin.github.io/portfolio/`

## Overview

This project is a single-page engineering portfolio designed to present:

- targeted resume variants
- project case studies
- contact and lead-capture flows
- a recruiter-facing AI assistant
- dual light/dark presentation modes

The site is deployed as a static frontend on GitHub Pages and connects to a Cloudflare Worker backend for chatbot, telemetry, and lead capture workflows.

## Architecture

### Frontend

- React 18
- TypeScript
- Vite 6
- Tailwind CSS 4
- Lucide React

### Backend

- Cloudflare Workers
- Cloudflare Workers AI
- Gemini API
- Cloudflare D1
- Discord webhooks

### Key product features

- light mode with a more professional recruiter-facing assistant voice
- dark mode with a more personal referral-style assistant voice
- AI provider fallback from Gemini to Workers AI
- telemetry tracking for chat, link clicks, and recruiter interactions
- chatbot lead capture with Discord notification routing
- responsive behavior for laptop, desktop, and mobile layouts

## Live Endpoints

- Frontend: `https://vincent-shin.github.io/portfolio/`
- Worker health: `https://vincent-portfolio-chatbot.vincentmai-portfolio.workers.dev/health`

## Repository Structure

```text
Dark Professional Portfolio UI/
  cloudflare/
    worker.mjs                 # production Worker backend
    migrations/                # D1 migrations
  public/
    resumes/                   # downloadable PDF resumes
    project-visuals/           # project media assets
  server/
    chat-api.mjs               # local Node backend for development
    portfolio-context.mjs      # assistant persona and prompt context
  src/
    app/
      App.tsx                  # main portfolio UI and data
    styles/
      theme.css                # theme variables
      index.css                # global imports
      tailwind.css             # Tailwind source
  package.json
  vite.config.ts
  wrangler.toml
```

## Local Development

### Requirements

- Node.js 18+ or 20+
- npm

### Install

```bash
npm install
```

### Run the frontend

```bash
npm run dev
```

Default Vite URL:

```text
http://localhost:5173
```

### Run the local backend

```bash
npm run dev:api
```

The frontend can be pointed to either:

- the local Node backend for development
- the deployed Cloudflare Worker for production-like testing

## Build

```bash
npm run build
```

Production output is generated in `dist/`.

## Cloudflare Deployment

Useful commands:

```bash
npm run cf:dev
npm run cf:deploy
npm run cf:d1:apply
```

Production configuration is defined in:

- `wrangler.toml`
- `BACKEND_DEPLOY.md`
- `MODEL_BEHAVIOR.md`

## Environment Variables

Example values are documented in `.env.example`.

Important variables include:

- `VITE_PORTFOLIO_CHAT_API_URL`
- `PORTFOLIO_CHAT_PROVIDER`
- `GEMINI_API_KEY`
- `GEMINI_MODEL`
- `DISCORD_WEBHOOK_URL`

Do not commit `.env` or any secret values.

## Chatbot Workflow

The portfolio assistant supports:

- recruiter-facing project and resume questions
- contact routing to email or LinkedIn
- direct lead submission through the chat form
- telemetry logging for interaction events
- Discord notifications for chat and lead events
- fallback inference when the primary provider is unavailable

Production flow:

1. Frontend sends requests to the Worker API.
2. The Worker attempts Gemini first.
3. If Gemini is unavailable or rate-limited, the Worker falls back to Workers AI.
4. Lead capture and interaction telemetry are stored and routed to Discord notifications.

## Main Files to Edit

If you need to update portfolio content quickly, start here:

- `src/app/App.tsx`
- `server/portfolio-context.mjs`
- `src/styles/theme.css`
- `public/resumes/*`

## Verification

The following checks have been validated during development:

- `npm run build`
- production frontend deployment on GitHub Pages
- production Worker deployment on Cloudflare
- `/health` endpoint response
- chatbot response path with provider fallback
- lead submission flow
- Discord webhook integration

## Notes

- Most portfolio content currently lives in `src/app/App.tsx`.
- If the project grows further, the next maintainability improvement is to split content and UI into smaller modules.
