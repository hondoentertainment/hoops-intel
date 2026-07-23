# Hoops Intel — Feature Roadmap

> Last updated: July 22, 2026

**Planning stack:** [`PRD.md`](./PRD.md) (requirements) → this file → [`NEXT-STEPS.md`](./NEXT-STEPS.md) (executable backlog) → [`PRODUCTION-OPS.md`](./PRODUCTION-OPS.md) (secrets & smoke).

Near-term sequencing lives in **`NEXT-STEPS.md`**. This document tracks **shipped** capabilities and horizons not yet committed to a sprint.

---

## Current focus (summer 2026)

| Priority | Theme | Status |
|----------|--------|--------|
| **P0** | Production ops flip — Stripe, VAPID, Supabase, Resend, push, migrations through `20260723_team_abbrs_published_pitch` | **Blocking** — code ready; `/api/ops-readiness` still false until secrets land |
| **P1** | Live X / Bluesky posting | Bot + dry-run shipped; needs GitHub social secrets |
| **P2** | In-season betting depth (live multi-book fills) | UI shipped; Odds API fills when slate returns |
| **Defer** | SSR/SEO, public API, native app, WNBA | See Long-term |

---

## Shipped

### Core Platform
- Daily AI-generated NBA edition with Pulse Index, game recaps, standings, injury wire
- Archive of past editions with search & pagination
- GitHub Actions daily / midday / scores / weekly pipelines (ESPN + Claude)
- Live ESPN scorebar with 30s polling / 5min idle
- Dark/light theme toggle
- Vercel deployment with SPA rewrites + deploy-config CI gate

### Pages & Navigation
- Player / team detail, Pulse History, Playoff Bracket, global search (Cmd+K)
- Ask Hoops Intel (`/ask`), Pick'em, Trivia, Trade Value / Simulator
- Momentum, Clutch Factor, Lineup Intel, Sentiment Pulse
- Draft Tracker, Ref Reports, Coach Corner, Community Pulse, Projections
- Watch Guide, History Engine, Season Performance, Podcast Companion
- Widgets (`/widgets`), publisher analytics (`/embed-stats`, `/widgets/analytics`)
- Player compare, Betting intel (opener archive + multi-book consensus UI), print packet (`/print-edition`)
- Rivals, Guest Pulse (pitch + **published feed** of accepted pitches), Creator queue (`/creator-queue`)
- Account (Pro, push topics, ops readiness panel), unsubscribe landing

### Data & Content
- ESPN box scores, standings, playoff series sync + series intel (Claude)
- Playoff ticker wire (finals scores) + CI drift / season-mode / series-intel gates
- Line movement snapshot/sync + opener archive client module
- Odds API ingest with optional `books[]` for multi-book consensus
- Offseason / summer-league season-mode switching in generators

### User Features
- Supabase auth, reactions, email digest UI + quiet hours + List-Unsubscribe
- Browser push topics: elimination, clincher, playoff tip, **game-start (30m)** for **all** My Pulse favorites (`team_abbrs`), fantasy, injury, rival (multi-pair), clincher preview, playoff close
- Guest Pulse creator queue with **edit-before-publish** (`published_pitch`)
- Pro subscription (Stripe) — code + UX; **env-dependent**
- PWA installable offline shell

### Infrastructure & Ops tooling
- Supabase migrations pack (embed analytics, push prefs, dispatch log, alert history, **rival_pairs**, **team_abbrs** / **published_pitch**)
- Social bot (`post-social.mjs`) with dry-run when X/Bluesky secrets missing
- Ops readiness API + Account panel; `ops:preflight` / `smoke:push` / deployment smoke
- Manual Supabase migrations GitHub workflow (requires `SUPABASE_ACCESS_TOKEN` + project ref)
- RSS, sitemap, OG images, Vercel Analytics, site-review agent

---

## Near-term (finish ops → flip monetization)

Executable checklist: [`NEXT-STEPS.md`](./NEXT-STEPS.md) P0.

1. Apply Supabase migrations through **`20260723_team_abbrs_published_pitch`**
2. Set production secrets (Vercel + GitHub) — Stripe, VAPID, Supabase, Resend, push, optional `ODDS_API_KEY`
3. `ops:preflight:strict` → `smoke:push` → Stripe checkout/webhook smoke
4. Archive duplicate Vercel projects `hoops-intel-1` / `hoops-intel-2`
5. Optional: X + Bluesky GitHub secrets for live social posts

---

## Mid-term (Q3–Q4 2026)

- **Live social distribution** — once secrets are set (workflow already posts or dry-runs)
- **Deeper archive search** — indexing/ranking if client haystack becomes a bottleneck
- **Dependabot hygiene** — npm group bumps on a dedicated green-CI day
- **In-season betting polish** — richer multi-book charts once Odds API runs nightly with a slate

---

## Long-term (2027+)

- Public API (`api.hoopsintel.com`) with tiered access
- Mobile native app (Expo) — only if web PWA metrics prove insufficient
- WNBA coverage (May–October window)
- SSR/SSG migration — only if Lighthouse or SEO regresses

### Non-goals
Native-first rewrite, non-NBA core product, on-site comments.

---

## Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | React 19 + Vite | Fast builds, HMR, modern React |
| Router | Wouter | Lightweight, sufficient for current routes |
| Styling | Tailwind CSS | Utility-first, no runtime cost |
| Auth | Supabase Auth | Free tier, OAuth, RLS integration |
| Database | Supabase (Postgres) | RLS, real-time, edge functions |
| Deployment | Vercel | Zero-config, preview deploys, analytics |
| AI | Claude API (Anthropic) | Superior narrative generation |
| Data Source | ESPN API (+ Odds API optional) | Real-time free tier; books when keyed |
