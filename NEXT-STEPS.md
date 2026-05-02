# Hoops Intel — Next steps (living doc)

_Last revised: May 2, 2026_

Near-term backlog is prioritized by **traffic impact during the postseason** plus **engineering hygiene**.

## Shipped baseline (recent)

| Area | Status |
|------|--------|
| Playoff dashboard (`/playoffs`) + ESPN-synced `playoffData.ts` | Shipped |
| Pick’em bracket layer + leaderboard | Shipped |
| Series intel keyed copy + fallback when `seriesId` misses | Shipped (`resolveSeriesIntel`) |
| Home ticker prepends synced playoff summaries | Shipped (`playoffTickerDerived`) |
| Pulse vs playoff edition drift CI guard | Shipped (`validate-playoff-pulse-drift.mjs`) |
| Seasonal generator file resolution check | Shipped (`content-schedule.mjs --verify-generators`) |
| Pro checkout requires sign-in + subscription refresh hook | Shipped (`/pro`, `refreshSubscription`) |
| Embed iframe loading + error boundary | Shipped (`/embed/:id`) |
| Vercel Analytics injected in-app (quiet Vite HTML warning) | Shipped |
| Trade Value gated preview (`/trade-value`) | Shipped — top six ranks for non‑Pro |
| Digest opt-out UX | `/unsubscribe` landing + `api/unsubscribe-digest` |
| Embed publisher handbook | CSP notes, iframe sandbox explainer, `HoopsIntel.mount` on `/widgets` |
| Fantasy push (medium/high urgency) | `scripts/notify-fantasy-alerts.mjs` (+ `fantasy` topic) after digest email |
| Archive full-ish text search | `archiveSearch.ts` recursive haystack matcher |
| Player compare / Betting intel / Print / Rivals / Guest Pulse | `/compare-players`, `/betting-intel`, `/print-edition`, `/rivals`, `/guest-pulse` + Home rivalry banner |

## P0 — Playoffs retention

1. **Push pipeline hardening** — Confirm `playoff-push.yml` + Supabase topics in production; add opt-in surfaced in-account (beyond header copy). Maintainer checklist: [`references/push-notifications.md`](./references/push-notifications.md).
2. **Stripe Pro** — Wire live price IDs (`STRIPE_*` env per README); 503 payloads now `{ code: "stripe_not_configured", error: "..." }` for clearer UX.
3. **seriesIntel regeneration** — Run / extend `generate-series-intel.mjs` so keyed entries match synced `seriesId`s (fallbacks cover gaps today).

## P1 — Product polish

4. **Narrative + data alignment** — Optional: derive marquee ticker strings from finals only while keeping Claude prose for tone.
5. **Trade Value expansions** — Once weekly file lists 30 names, bump preview copy + ensure Pro entitlement unlocks rationale depth consistently.
6. **SSR/SEO** — Still deferred unless Lighthouse regresses materially (SPA remains default).

## P2 — Offseason readiness

7. **`content-schedule` driver** — Ensure `daily-update.yml` loudly fails when generator script missing (CLI check now guards locally/CI).
8. **Draft / FA / SL modes** — Validate prompts in `generate-edition.mjs` match `season-mode.mjs` windows.

## Explicit non-goals (this quarter)

- Native Expo client (PWA first)
- New leagues beyond NBA editorial scope
- Repo-generated user comments / Giscus

---

_See [`ROADMAP.md`](./ROADMAP.md) for historical shipped inventory and broader horizon._
