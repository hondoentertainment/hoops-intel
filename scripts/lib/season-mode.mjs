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
 * Can daily edition generation run meaningful content today?
 * The dead-period (late July through August) is the only true gap.
 * @param {Date} [date]
 * @returns {boolean}
 */
export function generatorActive(date = new Date()) {
  return seasonMode(date) !== "dead-period";
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
      return "generate-history.mjs"; // flashback mode for otherwise dead days
  }
}
