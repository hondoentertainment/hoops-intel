// season-mode.mjs — Determine the current Hoops Intel content mode by date.
//
// The NBA calendar breaks cleanly into content windows. Daily generators use
// this to pick the right prompt and section mix instead of producing stale
// regular-season-style editions in June or silently failing in July.

/**
 * @typedef {"regular-season" | "playoffs" | "finals" | "draft" | "free-agency" | "summer-league" | "dead-period" | "preseason"} SeasonMode
 */

/**
 * @param {Date} [date]  UTC date, defaults to now
 * @returns {SeasonMode}
 */
export function seasonMode(date = new Date()) {
  const month = date.getUTCMonth() + 1;   // 1-12
  const day = date.getUTCDate();

  // October through mid-April — regular season
  if (month >= 10 || month <= 3) return "regular-season";
  if (month === 4 && day <= 15) return "regular-season";

  // Mid-April through late May — playoffs
  if (month === 4 && day > 15) return "playoffs";
  if (month === 5) return "playoffs";

  // Early June — Finals
  if (month === 6 && day <= 22) return "finals";

  // Late June — Draft window
  if (month === 6 && day > 22) return "draft";

  // July 1-10 — free agency
  if (month === 7 && day <= 10) return "free-agency";

  // July 10-22 — Summer League
  if (month === 7 && day > 10 && day <= 22) return "summer-league";

  // Late July through Aug — dead period
  if (month === 7 && day > 22) return "dead-period";
  if (month === 8) return "dead-period";

  // September — preseason buildup
  if (month === 9) return "preseason";

  return "regular-season";
}

/**
 * @typedef {"regular" | "playoffs" | "finals" | "draft" | "free-agency" | "summer-league" | "preseason" | "dead-period"} EditionContext
 */

/**
 * Edition context written to pulseEdition.editionContext.
 *
 * Single source of truth for the calendar → context mapping. The client
 * (client/src/lib/deskMode.ts) keys its desk labels, CTAs, and the
 * OffseasonDeskStrip off this value, so collapsing offseason windows to
 * "regular" here silently disables that entire surface.
 * @param {SeasonMode} mode
 * @returns {EditionContext}
 */
export function editionContextForMode(mode) {
  return mode === "regular-season" ? "regular" : mode;
}

/** Mirrors editionContextDeskLabel in client/src/lib/deskMode.ts. */
const DESK_LABELS = Object.freeze({
  finals: "NBA Finals desk",
  playoffs: "Playoffs desk",
  draft: "Draft desk",
  "free-agency": "Free agency desk",
  "summer-league": "Summer League desk",
  preseason: "Preseason desk",
  "dead-period": "Offseason desk",
});

/**
 * @param {EditionContext} ctx
 * @returns {string}
 */
export function deskLabelForContext(ctx) {
  return DESK_LABELS[ctx] ?? "Regular season desk";
}

/**
 * Can daily edition generation run meaningful content today?
 *
 * Every window now has a season-appropriate prompt branch in
 * generate-edition.mjs, including dead-period — which otherwise froze the
 * dashboard from July 23 through August 31.
 * @param {Date} [date]
 * @returns {boolean}
 */
export function generatorActive(_date = new Date()) {
  return true;
}

/**
 * Which generator script should produce today's edition?
 * Consumed by content-schedule.mjs and (future) generate-edition.mjs.
 * @param {Date} [date]
 * @returns {string}
 */
export function primaryGenerator(date = new Date()) {
  const mode = seasonMode(date);
  switch (mode) {
    case "regular-season":
    case "playoffs":
    case "finals":
      return "generate-edition.mjs";
    case "draft":
      return "generate-draft.mjs";
    case "free-agency":
    case "summer-league":
      return "generate-edition.mjs"; // reuse with season context override
    case "preseason":
      return "generate-edition.mjs";
    case "dead-period":
    default:
      // generate-history.mjs writes historyData.ts from an already-current
      // pulseData.ts — it is a secondary section, not an edition producer.
      return "generate-edition.mjs";
  }
}
