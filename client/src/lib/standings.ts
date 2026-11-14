import { TEAM_NAMES } from "./identity";
import { normalizeTeam } from "./teamColors";

/** Seeds 1–6 clinch a playoff berth. 7–10 are the play-in. 11–15 are out. */
export const PLAYOFF_CUTOFF_SEED = 6;
export const PLAYIN_CUTOFF_SEED = 10;
export const TEAMS_PER_CONFERENCE = 15;

export type ConferenceId = "east" | "west";
export type StandingZone = "playoff" | "play-in" | "out";
export type StandingSortKey = "rank" | "wins" | "losses" | "pct" | "gb" | "streak";
export type SortDirection = "asc" | "desc";

export interface StandingRow {
  seed: number;
  team: string;
  name: string;
  shortName: string;
  wins: number;
  losses: number;
  pct: string;
  pctValue: number;
  gb: string;
  gbValue: number;
  streak: string;
  streakValue: number;
  last10: string;
  home: string;
  away: string;
  conf: ConferenceId;
  zone: StandingZone;
}

export interface NbaStandings {
  seasonLabel: string;
  east: StandingRow[];
  west: StandingRow[];
  fetchedAt: number;
}

export const STANDINGS_SOURCE_URL = "https://site.api.espn.com/apis/v2/sports/basketball/nba/standings";

const DEFAULT_SORT_DIRECTION: Record<StandingSortKey, SortDirection> = {
  rank: "asc",
  wins: "desc",
  losses: "asc",
  pct: "desc",
  gb: "asc",
  streak: "desc",
};

export function defaultSortDirection(key: StandingSortKey): SortDirection {
  return DEFAULT_SORT_DIRECTION[key];
}

export function zoneForSeed(seed: number): StandingZone {
  if (seed >= 1 && seed <= PLAYOFF_CUTOFF_SEED) return "playoff";
  if (seed <= PLAYIN_CUTOFF_SEED) return "play-in";
  return "out";
}

export function zoneLabel(zone: StandingZone): string {
  if (zone === "playoff") return "Playoff";
  if (zone === "play-in") return "Play-in";
  return "Out";
}

interface StatCell {
  display: string;
  value: number | null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function statMap(stats: unknown): Map<string, StatCell> {
  const map = new Map<string, StatCell>();
  if (!Array.isArray(stats)) return map;
  for (const raw of stats) {
    if (!isRecord(raw)) continue;
    const name = typeof raw.name === "string" ? raw.name : "";
    if (!name) continue;
    const display = raw.displayValue == null ? "" : String(raw.displayValue).trim();
    const value = typeof raw.value === "number" && Number.isFinite(raw.value) ? raw.value : null;
    map.set(name, { display, value });
  }
  return map;
}

function requireNumber(stats: Map<string, StatCell>, name: string, team: string): number {
  const cell = stats.get(name);
  const fromValue = cell?.value;
  if (typeof fromValue === "number") return fromValue;
  const parsed = Number(cell?.display);
  if (cell?.display && Number.isFinite(parsed)) return parsed;
  throw new Error(`ESPN standings omitted ${name} for ${team}`);
}

function displayOr(stats: Map<string, StatCell>, name: string, fallback: string): string {
  const display = stats.get(name)?.display ?? "";
  return display || fallback;
}

function formatPct(display: string, value: number): string {
  if (display && display !== "0" && display !== "0.000") return display;
  if (!Number.isFinite(value)) return "—";
  const fixed = value.toFixed(3);
  return fixed.startsWith("0") ? fixed.slice(1) : fixed;
}

function formatGb(display: string, value: number): { gb: string; gbValue: number } {
  const blank = !display || display === "-" || display === "—" || display === "0" || display === "0.0";
  if (blank || value === 0) return { gb: "—", gbValue: 0 };
  const numeric = Number(display);
  return { gb: display, gbValue: Number.isFinite(numeric) ? numeric : value };
}

function formatStreak(display: string, value: number | null): { streak: string; streakValue: number } {
  const match = /^([WL])(\d+)$/i.exec(display);
  if (match) {
    const sign = match[1].toUpperCase() === "W" ? 1 : -1;
    return { streak: `${match[1].toUpperCase()}${match[2]}`, streakValue: sign * Number(match[2]) };
  }
  if (typeof value === "number" && value !== 0) {
    const sign = value > 0 ? "W" : "L";
    return { streak: `${sign}${Math.abs(value)}`, streakValue: value };
  }
  return { streak: "—", streakValue: 0 };
}

function conferenceId(child: Record<string, unknown>): ConferenceId | null {
  const abbr = String(child.abbreviation ?? "").toLowerCase();
  const name = String(child.name ?? "").toLowerCase();
  if (abbr === "east" || name.includes("eastern")) return "east";
  if (abbr === "west" || name.includes("western")) return "west";
  return null;
}

function parseRow(entry: unknown, conf: ConferenceId): StandingRow {
  if (!isRecord(entry) || !isRecord(entry.team)) {
    throw new Error("ESPN standings entry was missing a team");
  }
  const rawAbbr = String(entry.team.abbreviation ?? "").trim();
  const team = normalizeTeam(rawAbbr);
  if (!TEAM_NAMES[team]) {
    throw new Error(`ESPN standings used an unknown team abbreviation "${rawAbbr}"`);
  }
  const stats = statMap(entry.stats);
  const wins = requireNumber(stats, "wins", team);
  const losses = requireNumber(stats, "losses", team);
  const seed = requireNumber(stats, "playoffSeed", team);
  if (!Number.isInteger(seed) || seed < 1 || seed > TEAMS_PER_CONFERENCE) {
    throw new Error(`ESPN standings seed for ${team} was ${seed}`);
  }
  const pctValue = stats.get("winPercent")?.value ?? (wins + losses === 0 ? 0 : wins / (wins + losses));
  const gb = formatGb(stats.get("gamesBehind")?.display ?? "", stats.get("gamesBehind")?.value ?? 0);
  const streak = formatStreak(stats.get("streak")?.display ?? "", stats.get("streak")?.value ?? null);
  const name = String(entry.team.displayName ?? TEAM_NAMES[team]).trim() || TEAM_NAMES[team];
  const shortName = String(entry.team.shortDisplayName ?? "").trim() || name;
  return {
    seed,
    team,
    name,
    shortName,
    wins,
    losses,
    pct: formatPct(stats.get("winPercent")?.display ?? "", pctValue),
    pctValue,
    gb: gb.gb,
    gbValue: gb.gbValue,
    streak: streak.streak,
    streakValue: streak.streakValue,
    last10: displayOr(stats, "Last Ten Games", "—"),
    home: displayOr(stats, "Home", "—"),
    away: displayOr(stats, "Road", "—"),
    conf,
    zone: zoneForSeed(seed),
  };
}

function parseConference(child: unknown, conf: ConferenceId): StandingRow[] {
  if (!isRecord(child) || !isRecord(child.standings) || !Array.isArray(child.standings.entries)) {
    throw new Error(`ESPN standings omitted the ${conf} conference table`);
  }
  const rows = child.standings.entries.map((entry) => parseRow(entry, conf));
  if (rows.length !== TEAMS_PER_CONFERENCE) {
    throw new Error(`ESPN standings returned ${rows.length} ${conf} teams, expected ${TEAMS_PER_CONFERENCE}`);
  }
  const seen = new Set<string>();
  for (const row of rows) {
    if (seen.has(row.team)) throw new Error(`ESPN standings repeated ${row.team}`);
    seen.add(row.team);
  }
  const seeds = new Set(rows.map((row) => row.seed));
  if (seeds.size !== TEAMS_PER_CONFERENCE) {
    throw new Error(`ESPN standings ${conf} seeds were not 1 through ${TEAMS_PER_CONFERENCE}`);
  }
  return sortStandings(rows, "rank", "asc");
}

/** Turn an ESPN v2 standings payload into both full conference tables. */
export function parseEspnStandings(data: unknown, fetchedAt = Date.now()): NbaStandings {
  if (!isRecord(data) || !Array.isArray(data.children)) {
    throw new Error("ESPN standings payload was incomplete");
  }
  const season = isRecord(data.season) ? data.season : {};
  const seasonLabel = String(season.displayName ?? "").trim();
  let east: StandingRow[] | null = null;
  let west: StandingRow[] | null = null;
  for (const child of data.children) {
    if (!isRecord(child)) continue;
    if (child.isConference === false) continue;
    const conf = conferenceId(child);
    if (conf === "east") east = parseConference(child, "east");
    if (conf === "west") west = parseConference(child, "west");
  }
  if (!east || !west) throw new Error("ESPN standings payload was incomplete");
  const overlap = east.some((row) => west.some((other) => other.team === row.team));
  if (overlap) throw new Error("ESPN standings listed a team in both conferences");
  return {
    seasonLabel: seasonLabel || "NBA",
    east,
    west,
    fetchedAt,
  };
}

export function allStandingRows(board: NbaStandings): StandingRow[] {
  return [...board.east, ...board.west];
}

function compareNumber(a: number, b: number, direction: SortDirection): number {
  const diff = a - b;
  return direction === "asc" ? diff : -diff;
}

export function sortStandings(rows: StandingRow[], key: StandingSortKey, direction: SortDirection): StandingRow[] {
  const value = (row: StandingRow): number => {
    switch (key) {
      case "wins":
        return row.wins;
      case "losses":
        return row.losses;
      case "pct":
        return row.pctValue;
      case "gb":
        return row.gbValue;
      case "streak":
        return row.streakValue;
      default:
        return row.seed;
    }
  };
  return [...rows].sort((a, b) => {
    const primary = compareNumber(value(a), value(b), direction);
    if (primary !== 0) return primary;
    if (a.seed !== b.seed) return a.seed - b.seed;
    return a.team.localeCompare(b.team);
  });
}

/** Labeled cut lines only while the table is in seed order, top to bottom. */
export function cutoffAfter(row: StandingRow, key: StandingSortKey, direction: SortDirection): "play-in" | "out" | null {
  if (key !== "rank" || direction !== "asc") return null;
  if (row.seed === PLAYOFF_CUTOFF_SEED) return "play-in";
  if (row.seed === PLAYIN_CUTOFF_SEED) return "out";
  return null;
}
