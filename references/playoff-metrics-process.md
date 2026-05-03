# Playoff metrics inventory and update cadence

Canonical types live in [`references/data-schema.md`](./data-schema.md) (“Playoff Series”, “Playoff Risers / Fallers”). Implementations sit in [`client/src/lib/playoffData.ts`](../client/src/lib/playoffData.ts) (source data), [`client/src/lib/playoffAnalytics.ts`](../client/src/lib/playoffAnalytics.ts) (derived aggregates), [`client/src/lib/playoffTickerDerived.ts`](../client/src/lib/playoffTickerDerived.ts), and playoffs UI helpers under [`client/src/components/playoffs/`](../client/src/components/playoffs/).

## 1. Static / editorial playoff metrics (`playoffData.ts`)

| Metric / block | Meaning | Updated by |
|----------------|---------|------------|
| **`playoffSeries`** | Wins, schedules, finals, elimination flags per series; keyed by **`seriesId`** (`E|W|F` + round + teams). Each **final** game includes **`topPerformer`** / **`topLine`** (game-high PTS from ESPN summaries). | **Automated:** `npm run playoff:sync` (ESPN scoreboard window → JSON → hydrate box-score leaders → `sync-playoff-data.mjs` rewrites `BEGIN_PLAYOFF_SERIES_SYNC` … `END_PLAYOFF_SERIES_SYNC`). **`generate-all-daily.mjs` runs the same preflight.** |
| **`playoffMovers`** | Risers/fallers: `delta`, **`playoffLine`** (composite stat string), **`note`**. | **ESPN-backed suggestion:** `npm run playoff:movers-lines` (reads finals in `playoff-series.json`, pulls box scores, prints PPG/RPG/APG candidates). Then paste into `playoffData.ts` by hand. Editorial pass on `delta` + `note`. |
| **`seriesIntel`** | Per-**`seriesId`**: regular-season H2H, playoff history, key matchup, narrative. Keys must equal current **`seriesIds`** after each sync — otherwise UI uses `fallbackSeriesIntel`. | **`npm run playoff:intel`** (`generate-series-intel.mjs`) after **`playoff:sync`**, requires `ANTHROPIC_API_KEY`. Or patch keys/objects by hand after round changes when IDs churn (`E2-…` → `E3-…`, etc.). |

## 2. Derived metrics (`playoffAnalytics.ts`) — no separate update step

Computed at runtime from **`playoffSeries`**:

| Export | Purpose |
|--------|---------|
| **`playoffSnapshot`** | Counts: teams remaining/eliminated, games played, active/complete series, match-point series, live/scheduled-for-today, milestone string — used by Home + `/playoffs` ribbon. |
| **`scoringEdgeForSeries`** / **`sortedSeriesByCompetitiveness`** | PPG, margin, average total points, competitiveness sort. |
| **`buildLiveEliminationRows`** | Per-team urgency rows (elimination, tied, advancing, etc.). |
| **`nextPendingGame`** | Next non-final game in a series — cards, previews, ticker. |

## 3. Other postseason surfaces

- **Pulse**: `pulseEdition.editionContext` (`regular` | `playoffs` | `finals`) must agree with nonempty **`playoffSeries`** when postseason is underway — enforced by **`npm run test:drift`** (`validate-playoff-pulse-drift.mjs`). CI runs it in `.github/workflows/tests.yml`.
- **Ticker**: **`playoffTickerDerivedItems`** — built from synced series + **`nextPendingGame`**.
- **Pushes**: [`.github/workflows/playoff-push.yml`](../.github/workflows/playoff-push.yml) runs **`fetch-playoff-series.mjs`** + **`check-playoff-series.mjs`** every ~30 minutes; uses JSON snapshot only (**does not** commit **`playoffData.ts`**).

## Recommended ongoing process

1. **Daily (aligned with edition):** run full pipeline or at least **`npm run playoff:sync`**, then **`npm run test:drift`** (or rely on **`generate-all-daily.mjs` preflight**, which syncs series before AI scripts).
2. **After bracket / round changes:** rerun **`npm run playoff:intel`** so **`seriesIntel`** keys match new **`seriesId`** values from ESPN.
3. **Editorial touches:** rotate **`playoffMovers`** to match Pulse; adjust **`pulseData.ts`** postseason context when the calendar phase changes.
4. **Before merge / deploy:** **`npm run test:drift`** and **`npm run test:unit`** (includes `playoffAnalytics` tests).

## Data caveats

- ESPN sometimes lists **lookahead or placeholder games** under playoff metadata — you may briefly see overlapping future matchups involving the same team or cross-round noise. Sanity-check **`playoffSeries`** after sync; widen/narrow **`DAYS_AHEAD`** in **`fetch-playoff-series.mjs`** only if maintaining that script explicitly.
- **Seeds `99`** in JSON mean ESPN did not expose a numeric seed — display logic should treat high seeds accordingly.
