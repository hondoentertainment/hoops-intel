# CLAUDE.md

Guidance for Claude Code sessions working on Hoops Intel (`hoopsintel.net`).
**Cursor:** see [`cursor.md`](./cursor.md) for parallel doc map and hotspots.

---

## What this is

A daily NBA intelligence dashboard. Every morning a GitHub Action fetches
yesterday's ESPN scoreboard, calls the Claude API to generate the day's
editorial content (narrative, Pulse Index, media reactions, injury wire,
fantasy alerts, tonight's previews, quizzes, etc.), and commits the result
to `main`. Vercel picks up the commit and deploys.

Stack: React 19 + TypeScript + Vite + TailwindCSS + Supabase + Wouter
(router). No Next.js, no Redux, no component library — intentionally lean.

---

## Repository layout

```
client/
  index.html                  Vite entry HTML (project root is `client/`)
  src/
    App.tsx                   Router (Wouter) + lazy-loaded routes
    main.tsx                  React root
    pages/                    One file per route — Home, PlayoffBracket,
                              PickEm, Pro, Embed, TradeValue, Trivia, …
    components/               Shared components (AskHoopsIntel, PickEm,
                              BracketPicker, ShareButton, ReactionBar, …)
    components/widgets/       Embeddable widget components (Pulse, Ticker,
                              Injury) rendered by /embed/:id
    contexts/                 ThemeContext (dark/light persistence)
    lib/                      Domain data + helpers:
                                pulseData.ts        today's edition (AI-
                                                    regenerated daily)
                                archiveData.ts      past editions
                                playoffData.ts      playoff series state
                                                    + seriesIntel + movers
                                teamColors.ts, espnApi.ts,
                                useLiveScores.ts, supabaseClient.ts,
                                useSubscription.ts, userPreferences.ts,
                                hoopsSearch.ts, searchUtils.ts
                                + one file per secondary feature
                                (momentumData, clutchData, projectionsData,
                                sentimentData, draftData, tradeSimData, …)
    __tests__/                Vitest unit tests
api/                          Vercel serverless handlers:
                                ask.ts                  Ask Hoops Intel RAG
                                push-notify.ts          Web Push dispatcher
                                subscribe-digest.ts     Email opt-in
                                og.ts, og/              OG image generation
                                create-checkout.ts      Stripe checkout
                                stripe-webhook.ts       Stripe event sink
public/                       Copied verbatim to dist/ on build
                                embed.js                widget script loader
                                feed.xml, sitemap.xml, manifest.json,
                                og-image.svg, sw.js, assets/
supabase/                     SQL migrations (schema.sql is the base,
                              each *_migration.sql adds a feature)
references/                   Style + schema docs Claude reads during
                              generation (data-schema.md, edition-examples.md)
scripts/                      Generation pipeline (see below)
  lib/                        Shared helpers (claude-client, espn-cache,
                              dates, section-runner, season-mode)
  tests/                      Pipeline tests (run in CI)
.github/workflows/            CI (`tests.yml`) + content/schedulers (daily, scores,
                              playoffs, digest, weekly, injury, social, health, …)
```

The Vite project root is `client/`, NOT the repo root. That matters when
adding imports that reach outside (they can't).

---

## Daily generation pipeline

Every morning at 5 AM PST, `.github/workflows/daily-update.yml` runs:

1. `scripts/fetch-espn-data.mjs` — pulls yesterday's + today's scoreboards
   from ESPN and caches to `.espn-cache/`, writes a snapshot to
   `.daily-data/espn-snapshot.json`
2. `scripts/generate-edition.mjs` — sends the snapshot + `references/` style
   guides + current `pulseData.ts` to Claude and rewrites `pulseData.ts`
   with today's edition. Auto-detects playoff mode via game slate hints
   (`"Game 1"`, `"playoff"` keywords) and flips the prompt to scope the
   Pulse Index to active playoff rosters.
3. `scripts/assemble-pulse-data.mjs` — merges the primary edition with the
   individual section generators' outputs (sentiment, momentum, etc.)
4. Commit + push to `main` → Vercel auto-deploys

Playoff-specific pipeline (also daily once playoffs are active):

- `scripts/fetch-playoff-series.mjs` → `.daily-data/playoff-series.json`
- `scripts/generate-series-intel.mjs` → rewrites `seriesIntel` in
  `client/src/lib/playoffData.ts`
- `scripts/check-playoff-series.mjs` → diffs series state against the
  Supabase `series_snapshots` table and fires push notifications for
  elimination games and series clinchers

Content-mode routing: `scripts/lib/season-mode.mjs` classifies the
current date into one of `regular-season | playoffs | finals | draft |
free-agency | summer-league | dead-period | preseason` and exposes
`primaryGenerator(date)`. Use this before adding new schedulers so
they behave correctly year-round.

---

## Local development

```bash
npm install              # installs React, Vite, vitest, Anthropic SDK
npm run dev              # Vite dev server at http://localhost:5173
npm run build            # production build to ./dist
npm run preview          # serve ./dist locally
npm run test:unit        # Vitest (blocking suite)
npm run test:watch       # Vitest watch
npm run test:ci          # mirrors Actions: npm ci + validators + build
npx tsc --noEmit         # typecheck (see "Known quirks" below)

# Pipeline scripts — set ANTHROPIC_API_KEY in .env first
node scripts/generate-edition.mjs
node scripts/fetch-playoff-series.mjs
node scripts/content-schedule.mjs        # prints full recurring schedule
```

`npm test` runs the content validator + assembly tests (not Vitest).
Use `npm run test:unit` for Vitest and `npm run test:ci` to mirror Actions.

---

## CI

`.github/workflows/tests.yml` runs on every push and PR with three jobs:

- **verify** — `npm ci`, `vitest run`, `vite build`, assert
  `dist/embed.js` exists. MUST pass.
- **assembly** — `scripts/tests/test-assembly.mjs`. MUST pass.
- **content** — `scripts/tests/validate-content.mjs` with
  `continue-on-error: true`. The content validator enforces strict team
  abbreviations (NYK not NY, SAS not SA, BRK not BKN) and capitalized
  injury statuses (`Day-to-Day`, not `day-to-day`). The daily AI
  generator occasionally drifts on these — fix in-band rather than
  blocking merges.

If you add a new feature, add vitest coverage in
`client/src/__tests__/`. The setup file is already wired via
`vitest.config.ts`.

---

## Key feature areas (orient quickly)

- **Pulse Index** — `pulseData.ts#pulseIndex`, rendered by
  `pages/Home.tsx#PulseIndexSection`. Daily snapshot stored in Supabase
  `pulse_snapshots` for trend charts on `/pulse-history` and player pages.
- **Playoff series** — `client/src/lib/playoffData.ts`. Empty array =
  regular season (bracket falls back to projections from standings).
  `isPlayoffsActive()` / `activeSeries()` / `seriesForTeam(abbr)` helpers.
- **PickEm / Bracket picks** — `pages/PickEm.tsx` renders
  `components/PickEm` (per-game) and `components/BracketPicker` (per-series
  during playoffs). Picks persist to Supabase `picks` +
  `bracket_picks` tables; localStorage fallback for unauthenticated users.
- **Ask Hoops Intel** — `components/AskHoopsIntel.tsx` floating widget +
  `pages/AskAI.tsx` full page, both calling `api/ask.ts` which does RAG
  over `archiveData.ts`.
- **Pro (premium)** — `pages/Pro.tsx`, `lib/useSubscription.ts`,
  `api/create-checkout.ts`, `api/stripe-webhook.ts`,
  `supabase/subscriptions_migration.sql`. Stripe routes return 503 until
  `STRIPE_SECRET_KEY` + price IDs are set in Vercel env.
- **Embed widgets** — `/embed/:id` route (`pages/Embed.tsx`) serves a
  chrome-less widget with auto-resize via postMessage. `public/embed.js`
  is the external script loader users paste into their sites.

---

## Data model conventions

- Team abbreviations: NBA-standard 3 letters (`NYK`, `SAS`, `BRK`, `NOP`,
  `GSW`) — see `TEAM_ABBRS` in `scripts/tests/validate-content.mjs` for
  the complete allowlist.
- Injury status enum: `"Out" | "Day-to-Day" | "Questionable" |
  "Probable" | "Doubtful"` (capitalized — case matters).
- Edition numbering: `Vol. {YEAR} · No. {N}`, N increments by 1 each day.
- Dates: display string (`"April 19, 2026"`) in `pulseEdition.date`;
  ISO (`"2026-04-19"`) everywhere else.
- Game IDs: `{AWAY}-{HOME}-{YYYYMMDD}` (e.g. `LAL-HOU-20260418`).

Full schemas live in [`references/data-schema.md`](./references/data-schema.md).
Keep that file in sync when adding fields — the generator reads it into
the Claude prompt every morning.

---

## Supabase

The base schema is in `supabase/schema.sql`. Feature migrations are
appended as separate files (`picks_migration.sql`,
`series_snapshots_migration.sql`, `subscriptions_migration.sql`). Apply
them manually in the Supabase SQL editor in filename order.

RLS is on for every table. Pattern: users can read/write their own rows;
public-read for aggregated views (`reaction_counts`, `pick_leaderboard`,
`bracket_leaderboard`); service role only for writes that come from
GitHub Actions (`pulse_snapshots`, `series_snapshots`, `editions`,
`subscriptions`).

Client reads use the anon key + user's JWT stored at
`localStorage["hoops-intel-auth-token"]`. There is no Supabase SDK — the
client uses a zero-dep REST helper (`client/src/lib/supabaseClient.ts`).

---

## Claude API

`scripts/lib/claude-client.mjs` wraps `@anthropic-ai/sdk` with:

- Model fallback chain (primary → alternates on overload)
- Exponential backoff with jitter
- Transient error detection (529, 503, 429, overloaded_error, x-should-retry)

The current model chain is older; the most capable Claude model for new
work is **`claude-sonnet-4-6`** (or `claude-opus-4-7` for heavy reasoning
work). If you touch `MODEL_CHAIN`, put the newest model first and keep at
least one older fallback.

`ANTHROPIC_API_KEY` is required for every `node scripts/generate-*.mjs`
call. Put it in `.env` at the repo root (`scripts/load-local-env.mjs`
reads it).

---

## Known quirks (pre-existing, do not "fix" incidentally)

- `npx tsc --noEmit` reports errors in several files (Sentiment page,
  hoopsSearch, setup.ts, a handful of `import.meta.env` references).
  These predate this branch and are not currently enforced by CI.
  `vite build` uses esbuild and passes.
- The content validator flags team abbreviation drift and lowercase
  injury statuses. These come from the daily AI generator and get
  corrected during the next regeneration. CI treats this job as
  advisory.
- `daily-update.yml` gates execution with `scripts/check-generator-active.mjs`
  (`generatorActive()` from `season-mode.mjs`), so postseason / draft /
  preseason windows run while only the **`dead-period`** slice is suppressed.
- `public/` at the repo root is wired into `vite.config.ts` via
  `publicDir`. Files there ship verbatim to `dist/`. Do not create
  `client/public/`.

---

## Conventions I care about

- **Edits over creation.** If a file can be extended, don't fork a new one.
- **No new top-level dependencies** without an explicit reason. The bundle
  budget is lean (index at 438 KB, 126 KB gzipped).
- **Tailwind utilities + inline `style={{ }}`** for theme-driven values.
  No CSS-in-JS, no component library.
- **Dark mode is default.** Colors: navy `#050D1A`, sky `#0EA5E9`,
  emerald `#10B981`, rose `#F43F5E`, amber `#F59E0B`.
- **Fonts:** Barlow Condensed (headers), DM Sans (body), JetBrains Mono
  (stats). Referenced as `display-heading`, `section-label`, and
  `mono-data` utility classes.
- **No comments explaining WHAT the code does.** Names already do that.
  Comments only for non-obvious WHY — an invariant, a workaround, a
  constraint.
- **When editing generated files** (`pulseData.ts`, `archiveData.ts`,
  sentiment/momentum/etc.) be conservative. The pipeline overwrites them
  every morning — handwritten changes vanish.

---

## Current priorities

See **`NEXT-STEPS.md`** for the live punch list.

**Planning docs:** `PRD.md` (requirements) → `ROADMAP.md` (shipped + horizons) → `NEXT-STEPS.md` → `PRODUCT-ENHANCEMENTS.md` (competitive tracker). **`cursor.md`** is the Cursor-specific entrypoint; this file carries full technical depth.
