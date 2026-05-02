# Hoops Intel — Feature Roadmap

> Last updated: April 22, 2026

**Planning stack:** [`PRD.md`](./PRD.md) (requirements) → this file → [`NEXT-STEPS.md`](./NEXT-STEPS.md) (executable backlog).

Near-term sequencing lives in **`NEXT-STEPS.md`**. This document tracks shipped capabilities and horizons that are **not** yet committed to the sprint list.

---

## Shipped

### Core Platform
- Daily AI-generated NBA edition with Pulse Index, game recaps, standings, injury wire
- Archive of past editions with search & pagination
- GitHub Actions daily auto-update (5 AM PST via ESPN + Claude API)
- Live ESPN scorebar with 30s polling / 5min idle
- Dark/light theme toggle
- Vercel deployment with SPA rewrites

### Pages & Navigation
- Player detail pages (`/player/:slug`)
- Team detail pages (`/team/:abbr`)
- Pulse Index History (`/pulse-history`) with 7-day/30-day trends & biggest movers
- Playoff Bracket (`/playoffs`) — ESPN-synced series scores overlaid on bracket UI + static narrative layer
- Global search (Cmd+K) across players, teams, games, stories
- Ask Hoops Intel (`/ask`) — conversational AI Q&A over the archive
- Daily Pick'em (`/pick-em`) — per-game picks + playoff bracket picks
- Trivia / Hoops IQ (`/trivia`)
- Trade Value (`/trade-value`) and Trade Simulator (`/trade-simulator`)
- Momentum, Clutch Factor, Lineup Intel, Sentiment Pulse
- Draft Tracker, Ref Reports, Coach Corner, Community Pulse, Projections
- Watch Guide, History Engine, Season Performance, Podcast Companion
- Widgets showcase (`/widgets`)

### Data & Content
- Full ESPN box scores
- Interactive sortable standings with playoff/play-in cut lines
- Sparkline trend indicators on Pulse Index rankings
- Betting links (DraftKings, FanDuel, BetMGM)
- Live playoff series state — `PlayoffSeries` data model synced from ESPN;
  push-notification dispatch for elimination games and series clinchers
- Head-to-Head Series Intel — Claude-generated per-series narrative + matchup
- Playoff-mode Pulse Index — generation auto-switches context when playoff
  games are detected in the slate

### User Features
- Supabase auth (email/password + Google OAuth)
- Reactions system
- Browser notification & email digest subscription UI
- PWA — installable, offline shell

### Infrastructure
- Supabase schema with `user_favorites`, `reactions`, `digest_preferences`,
  `push_subscriptions`, `pulse_snapshots`, `editions`, `picks`,
  `bracket_picks`, `series_snapshots`
- Code splitting with React.lazy
- Zero-dependency Supabase REST client
- RSS feed (`/feed.xml`)
- Sitemap (`/sitemap.xml`)
- OG images, Twitter Cards, SEO meta
- Vercel Analytics
- Schema validation for daily generation

---

## Near-term (Q2 2026)

Tracked in [`NEXT-STEPS.md`](./NEXT-STEPS.md). Highlights:

- Pro tier hardening — Stripe checkout, webhooks, UI gating (code paths exist; env-dependent)
- Embed growth — publisher UX on `/widgets` atop `embed.js`; analytics on adopt
- Workflow vs `season-mode` alignment for offseason generators (daily job must not silently skip Jul–Sep)

## Mid-term (Q3 2026)

- Real email digest via Resend/SendGrid (transactional, unsubscribe, quiet hours)
- Web Push wired for favorite-team game alerts (VAPID pipeline already exists)
- Full-text search across historical editions
- Creator program — Guest Pulse Index
- Twitter/X and Bluesky distribution bots

## Long-term (Q4 2026+)

- Public API (`api.hoopsintel.com`) with tiered access
- Mobile native app (Expo) — only if web PWA metrics prove insufficient
- WNBA coverage (May–October 2027)
- SSR/SSG migration — deferred; revisit only if Lighthouse or SEO regresses

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
| Data Source | ESPN API | Comprehensive, real-time, free tier |
