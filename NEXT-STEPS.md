# Hoops Intel — Next Steps

> Authored: April 20, 2026 — NBA Playoffs Round 1 in progress

The existing `ROADMAP.md` and `PRODUCT-ENHANCEMENTS.md` predate the current codebase by a month and are largely shipped. AskAI, PickEm, TradeValue, Trivia, Widgets, Momentum, ClutchFactor, LineupIntel, Podcast, CommunityPulse, MyPulse, Badges, RefReports, Projections, SeasonPerformance, TradeSimulator, and HistoryEngine all exist as full pages. This document supersedes those for the next 6 weeks.

---

## P0 — This Week (Playoff Blockers)

The playoffs are the product's biggest traffic moment of the year and the current codebase is not wired for it.

### 1. Live Playoff Series State
**Gap:** `PlayoffBracket.tsx` renders *projected* first-round matchups from regular-season standings. There is no `playoffSeries` data model, no series score (e.g. "BOS leads 2-1"), no "next game" linkage, and no elimination state anywhere in the app. `grep -r playoffSeries client/src` returns nothing.

**Do:**
- Add a `PlayoffSeries` interface in `references/data-schema.md` and a `playoffSeries: PlayoffSeries[]` field to `PulseEdition`
- Extend `scripts/fetch-espn-data.mjs` to pull ESPN's playoff bracket endpoint (`/nba/playoffs`) and normalize series state
- Rewrite `PlayoffBracket.tsx` to read actual series, mark eliminated teams, and link each series to its next scheduled game
- Add a `SeriesCard` component to `Home.tsx` above "Tonight's Games" during playoffs

### 2. Playoff-Mode Pulse Index
**Gap:** Pulse Index still ranks by regular-season context even though only 16 teams are playing.

**Do:**
- Add a `context: "regular" | "playoffs"` flag to the Claude generation prompt in `scripts/generate-edition.mjs`
- When any team has played ≥1 playoff game, auto-switch context; Pulse should only include active playoff rosters and weight playoff performance heavily
- Add a "Playoff Risers / Fallers" section (reuse the `PulseHistory` sparkline pattern) scoped to post-season games only

### 3. Series-Aware Push Notifications
**Gap:** `api/push-notify.ts` exists but has no playoff triggers. Elimination games and buzzer-beaters are the highest-value push moments of the year.

**Do:**
- Add an "elimination game imminent" push (fires 2 hours before tip when one side faces elimination)
- Add a "series clincher" push after the final buzzer of a series-ending game
- Gate both behind existing `push_subscriptions` table — no new infra needed

---

## P1 — Next 2 Weeks (Playoff Round 2 Prep)

### 4. Head-to-Head Series Intel
Playoffs reward history. For each active series, generate a Claude-authored "Series Intel" card covering regular-season H2H, playoff history between the franchises, and a key-matchup callout. This is a natural extension of existing game-preview generation and the `archiveData.ts` history is already there to draw from.

### 5. PickEm → Series Brackets
`PickEm.tsx` currently handles per-game picks. Add a bracket pick layer: let users submit a full playoff bracket and track accuracy against the live bracket. This is a 30-day engagement loop vs. the current 24-hour one. Leaderboard UI already exists — extend the schema in `supabase/picks_migration.sql`.

### 6. Stale Docs Cleanup
`ROADMAP.md` still lists "Playoff Bracket", "Global Search", "PWA", "Supabase auth", and Phase 5.1–5.4 as future work — they are all shipped. `PRODUCT-ENHANCEMENTS.md` Tier 1 quick-wins ("share button", "streak indicators", "this day in history") are also built. Delete or mark them shipped so new contributors aren't misled.

---

## P2 — May (Between Rounds 2 & Finals)

### 7. Premium Tier Launch ("Hoops Intel Pro")
This is the only Phase 7 item with no code yet. The playoff traffic spike is the right moment to introduce paid. Minimum viable paid product:
- Stripe subscription ($5/mo or $40/yr)
- Ad-free (no ads exist yet, but reserve the affordance)
- 6 AM delivery vs. 8 AM for free tier (uses existing digest infra)
- Full-season archive export (CSV/JSON)
- Pro-only: Trade Value Index deep-dives, DFS-style lineup optimizer for remaining playoff games

Defer the DFS optimizer until post-finals; ship the billing + gating layer first.

### 8. Hoops Intel Embed Widgets (Phase 3.2)
`client/src/pages/Widgets.tsx` and `client/src/components/widgets/*` already exist — the page showcases them but they aren't actually embeddable. Ship the `<script>` tag embed build target: a single IIFE bundle with iframe fallback and a copy-paste snippet UI on `/widgets`. Every embed is a backlink. Target: launch before Finals tip-off.

---

## P3 — June/July (Offseason)

### 9. Multi-Content-Mode Pivot
The regular season drives ~30 pages of daily content. The offseason has no games. Without a content plan the daily pipeline breaks on June 23 (after Finals). Options, roughly ranked:
- **Draft Edition cadence** — `scripts/generate-draft.mjs` already exists; run it daily June 1–26 with prospect of the day + mock draft movement
- **Free-agency tracker** — daily "who moved, who's next" edition July 1–15
- **Summer League coverage** — July 10–20, lighter daily cadence
- **"This Week in NBA History"** flashback mode for genuinely dead weeks

Write a `scripts/content-schedule.mjs` driver (the file exists — verify it actually branches by date) that picks the right generator per date so the GitHub Action doesn't fail silently.

### 10. SSR/SSG Migration — Defer
ROADMAP.md lists this as P1/Q2. Don't do it this quarter. The Vite SPA is working, Lighthouse is reportedly fine, and the cost (rewrite Home.tsx which is 1,376 lines) dwarfs the SEO benefit during a low-traffic window. Revisit in Q4 2026 before next season.

---

## Explicit Non-Goals

- **Mobile native app (Phase 9)** — PWA already covers the 90% case; building Expo now splits engineering attention during the most important month of the year
- **Multi-league (WNBA, G-League, EuroLeague)** — dilutes the brand before NBA coverage is fully monetized
- **Comments via Giscus** — moderation burden during playoffs is high; the existing Reactions system is sufficient social proof

---

## Success Metrics (May 1 Check-in)

| Item | KPI | Target |
|---|---|---|
| Live playoff series state | % of sessions viewing `/playoffs` during Round 1 | >40% |
| Playoff-mode Pulse | DAU lift vs. last 2 weeks of regular season | +25% |
| Series push alerts | Opt-in rate among registered users | >60% |
| Bracket PickEm | Brackets submitted before Round 1 Game 2 | 500+ |
| Premium tier (if live) | Paid conversions in first 7 days | 100+ |
