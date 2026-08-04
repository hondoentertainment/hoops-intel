// Play-by-play — Fetch and parse ESPN's game summary `plays[]` feed.
//
// Same endpoint boxScores.ts already uses (`summary?event=`), so no new API
// surface to trust. Shot coordinates are NOT guaranteed present on every ESPN
// play object across sports/seasons — `hasShotData` feature-detects whether
// *this* game returned any, so callers (ShotChart) can render nothing rather
// than a broken or empty chart when ESPN omits them.
const ESPN_BASE = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba";

export interface ShotCoordinate {
  x: number;
  y: number;
  made: boolean;
}

export interface PlayEvent {
  id: string;
  period: number;
  clock: string;
  text: string;
  awayScore: number;
  homeScore: number;
  scoringPlay: boolean;
  teamAbbr: string | null;
  shot: ShotCoordinate | null;
}

export interface PlayByPlayResult {
  plays: PlayEvent[];
  hasShotData: boolean;
}

function parseInt0(v: unknown): number {
  const n = parseInt(String(v ?? "0"), 10);
  return Number.isFinite(n) ? n : 0;
}

function parsePlay(raw: any, teamIdToAbbr: Map<string, string>): PlayEvent {
  const coordinate = raw?.coordinate;
  const hasCoord = coordinate && typeof coordinate.x === "number" && typeof coordinate.y === "number";
  const teamId = raw?.team?.id != null ? String(raw.team.id) : null;

  return {
    id: String(raw?.id ?? raw?.sequenceNumber ?? `${raw?.period?.number ?? 0}-${raw?.clock?.displayValue ?? ""}-${Math.random()}`),
    period: raw?.period?.number ?? 0,
    clock: raw?.clock?.displayValue ?? "",
    text: raw?.text ?? "",
    awayScore: parseInt0(raw?.awayScore),
    homeScore: parseInt0(raw?.homeScore),
    scoringPlay: Boolean(raw?.scoringPlay),
    teamAbbr: teamId ? teamIdToAbbr.get(teamId) ?? null : null,
    shot: hasCoord ? { x: coordinate.x, y: coordinate.y, made: Boolean(raw?.scoringPlay) } : null,
  };
}

export async function fetchPlayByPlay(espnGameId: string): Promise<PlayByPlayResult | null> {
  try {
    const res = await fetch(`${ESPN_BASE}/summary?event=${espnGameId}`);
    if (!res.ok) return null;
    const data = await res.json();

    const rawPlays: any[] = Array.isArray(data?.plays) ? data.plays : [];
    if (rawPlays.length === 0) return null;

    const teamIdToAbbr = new Map<string, string>();
    for (const t of data?.boxscore?.teams ?? []) {
      if (t?.team?.id) teamIdToAbbr.set(String(t.team.id), t.team.abbreviation ?? "");
    }

    const plays = rawPlays.map((p) => parsePlay(p, teamIdToAbbr));
    return { plays, hasShotData: plays.some((p) => p.shot !== null) };
  } catch {
    return null;
  }
}
