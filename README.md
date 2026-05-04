# Hoops Intel — Daily NBA Intelligence

**Live at:** [hoopsintel.net](https://hoopsintel.net)

A daily NBA intelligence dashboard: ESPN-backed scores and schedules, AI-generated editions (Pulse Index, recaps, injury wire, previews, and companion sections), searchable archive, Pick ’Em, playoffs tooling, Ask Hoops Intel, embeddable widgets, and optional **Pro** (Stripe).

---

## Product & planning docs

| Document | Role |
|---------|------|
| [`PRD.md`](./PRD.md) | Product requirements & scope |
| [`ROADMAP.md`](./ROADMAP.md) | Shipped features & horizon |
| [`NEXT-STEPS.md`](./NEXT-STEPS.md) | Current prioritized backlog |
| [`PRODUCT-ENHANCEMENTS.md`](./PRODUCT-ENHANCEMENTS.md) | Competitive backlog & status |

**Agents / contributors:** [`cursor.md`](./cursor.md) (Cursor) · [`CLAUDE.md`](./CLAUDE.md) (architecture, pipelines, conventions)

---

## Overview

Hoops Intel is a dark-themed, mobile-friendly NBA dashboard built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Vite**. Data is regenerated on a schedule via **GitHub Actions**; **Vercel** builds and hosts the SPA plus `api/` serverless routes. **Supabase** powers auth, picks, reactions, snapshots, and subscriptions.

### Representative features

- Daily scores, recaps, Pulse Index, stat leaders, media reactions, injury wire, tonight’s games, fantasy alerts, rookie watch
- Playoffs: live series state, bracket UI, series intel, postseason-aware Pulse
- Archive search, `/ask` RAG over history, RSS + sitemap, OG images
- Pick ’Em (`/pick-em`), trivia, trade tools, momentum/clutch/lineups, widgets + `embed.js`
- PWA installability, theme toggle, optional web push and email digest UI

---

## Design system

| Element | Value |
|---------|-------|
| Background | Navy `#050D1A` |
| Primary accent | Sky `#0EA5E9` |
| Success / stats | Emerald `#10B981` |
| Alert / negative | Rose `#F43F5E` |
| Warning | Amber `#F59E0B` |
| Headers | Barlow Condensed |
| Body | DM Sans |
| Mono / stats | JetBrains Mono |

---

## Tech stack

| Layer | Choice |
|-------|--------|
| UI | React 19 + TypeScript + TailwindCSS |
| Build | Vite · project root **`client/`** |
| Routing | Wouter |
| Backend | Vercel serverless `api/*` |
| Auth & data | Supabase (REST from `supabaseClient.ts`) |
| AI | Claude (Anthropic SDK) · daily generators in `scripts/` |
| Scheduling | `.github/workflows/*` |

---

## Repository layout (abbrev.)

```
hoops-intel/
├── client/src/           # App, pages, components, lib/* domain data
├── api/                   # ask, push, Stripe, OG, subscribe-digest …
├── public/                # Static assets shipped to dist (embed.js, PWA …)
├── scripts/               # fetch-espn-, generate-* , season-mode, CI helpers
├── supabase/              # schema + migrations (apply in order)
├── references/            # data-schema.md, edition-examples.md (generator context)
├── PRD.md, ROADMAP.md, NEXT-STEPS.md …
├── cursor.md, CLAUDE.md
└── vite.config.ts         # Uses client/ + publicDir at repo root
```

Detailed tree and quirks: [`CLAUDE.md`](./CLAUDE.md).

---

## Local development

Requires **Node.js 24.x** (see `engines` in `package.json`).

```bash
npm install
npm run dev          # http://localhost:5173
npm run build
npm run test:unit    # Vitest
npm run test:deploy  # Vercel paths + migration files (no remote push)
npm run test:ci      # same blocking steps as GitHub Actions (install + validators + build)
```

**Lighter local check:** `npm run test` runs content validation plus assembly scripts (narrower than `test:ci`).

Pipeline scripts (`scripts/generate-*.mjs`, etc.) need **`ANTHROPIC_API_KEY`** in `.env` at repo root — see **`scripts/load-local-env.mjs`** and **`CLAUDE.md`**. For playoff series intel (`npm run playoff:intel`, `scripts/generate-series-intel.mjs`), you can optionally set **`SERIES_INTEL_MAX_TOKENS`** (256–4096, default 1200) to tune Claude cost/latency.

---

## Environment variables (reference)

Configure these on **Vercel** (Production + Preview where applicable) and/or **GitHub Actions secrets** (`Settings → Secrets and variables → Actions`).

| Scope | Variables |
|-------|-----------|
| **AI pipeline** | `ANTHROPIC_API_KEY`; optional **`SERIES_INTEL_MAX_TOKENS`** for `playoff:intel` / `scripts/generate-series-intel.mjs` |
| **Stripe / Pro** | `STRIPE_SECRET_KEY`, **`STRIPE_PRICE_MONTHLY`**, **`STRIPE_PRICE_ANNUAL`** (Dashboard → Products → Price IDs, e.g. `price_...`), `STRIPE_WEBHOOK_SECRET`, `APP_BASE_URL` (canonical site URL); webhook signing secret mirrors [`api/stripe-webhook.ts`](./api/stripe-webhook.ts). |
| **Supabase** | `SUPABASE_URL`, `SUPABASE_ANON_KEY` (prefixed **`VITE_`** when exposed to browser), `SUPABASE_SERVICE_KEY` (server/GitHub Actions only). |
| **Web Push** | `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT`, **`VITE_VAPID_PUBLIC_KEY`** (browser push subscribe; must match the public key), `PUSH_API_SECRET`, callers use `PUSH_API_URL` + secret in workflows. |
| **Email digest** | `RESEND_API_KEY`, optionally `DIGEST_EMAILS`; optional quiet window **`DIGEST_USE_QUIET_WINDOW=1`** plus `DIGEST_SEND_START_HOUR_PST` / `DIGEST_SEND_END_HOUR_PST` (Pacific) and **`DIGEST_QUIET_OVERRIDE=1`** to force a blast. See [`scripts/send-digest.mjs`](./scripts/send-digest.mjs). |
| **Guest / contact pitches** | `CONTACT_INBOUND_EMAIL` + `CONTACT_FORM_FROM_EMAIL` (`from` defaults to Resend onboarding domain). Routes via [`api/contact-intake.ts`](./api/contact-intake.ts). |
| **Unsubscribe landing** | [`/unsubscribe`](./client/src/pages/Unsubscribe.tsx) calls [`api/unsubscribe-digest.ts`](./api/unsubscribe-digest.ts) (`PATCH digest_subscribers` with service role). |

Copy [`.env.example`](./.env.example) when wiring **Vercel** (Production + Preview) and **GitHub Actions** secrets.

---

## GitHub & Vercel hosting checklist

| Step | Where |
|------|--------|
| Connect repo | Vercel → Add New → Project → Import `hondoentertainment/hoops-intel` (or your fork) |
| **Root Directory** | Vercel → Project → Settings → General: **"."** (repository root). Expect `package.json`, `vercel.json`, and `vite.config.ts` here — not the `client/` subfolder alone. |
| Production branch | Vercel → Project → Settings → Git → Production Branch = **`main`** |
| Build | Reads `vercel.json`: `npm ci` + `npm run build` → static **`dist`** + `api/` serverless |
| **Supabase migrations** | Files in `supabase/migrations/` are **not** auto-applied by Vercel. Maintainer: `supabase/config.toml` + either run `npx supabase db push` locally after `link`, **or** Actions → **Supabase migrations** workflow (requires repo secrets `SUPABASE_ACCESS_TOKEN`, `SUPABASE_PROJECT_REF`). Local layout check: `npm run test:deploy` |
| Preview deploys | Open PRs automatically get Preview URLs when Git integration is enabled |
| CI | Every push runs [`.github/workflows/tests.yml`](./.github/workflows/tests.yml); local parity is **`npm run test:ci`** |
| Dependabot | [`.github/dependabot.yml`](./.github/dependabot.yml) opens weekly grouped npm / Actions updates |

---

## Daily pipeline (summary)

Morning jobs fetch ESPN payloads, assemble snapshots, invoke Claude generators, merge section outputs into `pulseData.ts` / `archiveData.ts`, and push to production. Playoff pulls update `playoffData.ts`; optional scripts snapshot series state and trigger push dispatch.

Full workflow: **`CLAUDE.md`** § Daily generation pipeline.

---

## Data schema & writing guides

- **Types & edition fields:** [`references/data-schema.md`](./references/data-schema.md)
- **Voice / examples:** [`references/edition-examples.md`](./references/edition-examples.md)

---

## License

Private project. All rights reserved.
