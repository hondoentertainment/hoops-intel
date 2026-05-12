/** Single source of truth for pulse/editorial validators and schema checks */

export const TEAM_ABBREVIATIONS = Object.freeze([
  "ATL","BOS","BRK","CHA","CHI","CLE","DAL","DEN","DET","GSW",
  "HOU","IND","LAC","LAL","MEM","MIA","MIL","MIN","NOP","NYK",
  "OKC","ORL","PHI","PHX","POR","SAC","SAS","TOR","UTA","WAS",
]);

/** @readonly */
export const TEAM_ABBR_SET = new Set(TEAM_ABBREVIATIONS);

/** ESPN scoreboard payloads sometimes abbreviate differently than our pulse lists. */
const ESPN_TEAM_ALIASES = Object.freeze({
  NY: "NYK",
  SA: "SAS",
});

/** @returns {string} */
export function canonicalNbaAbbrev(abbr) {
  if (!abbr || typeof abbr !== "string") return abbr;
  return ESPN_TEAM_ALIASES[abbr] ?? abbr;
}

export function isEspnSyncedTeamAbbrev(abbr) {
  if (!abbr || abbr === "TBD") return true;
  return TEAM_ABBR_SET.has(canonicalNbaAbbrev(abbr));
}

export const VALID_EDITION_CONTEXTS = new Set(["regular", "playoffs", "finals"]);

export const VALID_FANTASY_ACTIONS = new Set(["add", "drop", "hold", "stream"]);

/** Injury rows in pulseData use title case */
export const VALID_INJURY_STATUSES = new Set([
  "Out",
  "Day-to-Day",
  "Questionable",
  "Probable",
  "Doubtful",
  "Available",
  "Out — Season Over",
  "Out for Postseason",
  "Playing Through Injury",
]);

export const PULSE_SENTIMENTS = new Set(["hot", "cold", "neutral"]);

export const GAME_ID_PATTERN = /^[A-Z]{3}-[A-Z]{3}-\d{8}$/;
