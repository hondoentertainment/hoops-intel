// ESPN public API integration for live NBA data
// Endpoint: site.api.espn.com (no auth required)

const ESPN_BASE = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba";

/** Narrow subset of ESPN scoreboard JSON (events[].competitions[0]) */
interface ESPNScoreboardCompetition {
  status?: {
    displayClock?: string;
    period?: number;
    type?: { state?: string; completed?: boolean; shortDetail?: string };
  };
  competitors?: ESPNScoreboardCompetitor[];
  venue?: { fullName?: string };
  broadcasts?: { names?: string[] }[];
}

interface ESPNScoreboardCompetitor {
  homeAway?: string;
  score?: string;
  team?: { abbreviation?: string };
  records?: { summary?: string }[];
}

interface ESPNScoreboardEvent {
  id?: string;
  competitions?: ESPNScoreboardCompetition[];
}

export interface LiveGame {
  id: string;
  status: "pre" | "in" | "post";
  statusDetail: string;
  clock: string;
  period: number;
  homeTeam: string;
  /** `null` when the game has not started or ESPN omits scores */
  homeScore: number | null;
  homeRecord: string;
  awayTeam: string;
  awayScore: number | null;
  awayRecord: string;
  venue: string;
  tv: string;
}

export interface ESPNScoreboard {
  games: LiveGame[];
  fetchedAt: number;
}

function parseTv(broadcasts: ESPNScoreboardCompetition["broadcasts"]): string {
  const names = (broadcasts ?? []).flatMap((b) => b.names ?? []);
  return names.length ? names.join(", ") : "Local";
}

function parseOptionalScore(scoreRaw: unknown): number | null {
  const s = scoreRaw == null ? "" : String(scoreRaw).trim();
  if (s === "") return null;
  const n = parseInt(s, 10);
  return Number.isFinite(n) ? n : null;
}

/**
 * ESPN sometimes sends `"0"` for upcoming games — treat scores as unavailable until tip.
 */
function parseScoresForLiveState(
  homeRaw: unknown,
  awayRaw: unknown,
  state: "pre" | "in" | "post",
  completed: boolean,
): { homeScore: number | null; awayScore: number | null } {
  if (state === "pre") return { homeScore: null, awayScore: null };
  const hs = parseOptionalScore(homeRaw);
  const as = parseOptionalScore(awayRaw);
  if (completed || state === "post") {
    return { homeScore: hs ?? 0, awayScore: as ?? 0 };
  }
  return { homeScore: hs, awayScore: as };
}

/** Exported for unit tests */
export function parseGame(event: ESPNScoreboardEvent | Record<string, unknown>): LiveGame {
  const raw = event as ESPNScoreboardEvent;
  const comp = raw?.competitions?.[0];
  const home = comp?.competitors?.find((c) => c.homeAway === "home");
  const away = comp?.competitors?.find((c) => c.homeAway === "away");
  const status = comp?.status?.type;
  const stateStr = status?.state;
  const normalized: "pre" | "in" | "post" =
    stateStr === "pre" ? "pre" : status?.completed ? "post" : "in";
  const scores = parseScoresForLiveState(home?.score, away?.score, normalized, Boolean(status?.completed));

  const id = raw?.id ?? "";

  return {
    id,
    status: normalized,
    statusDetail: status?.shortDetail ?? "",
    clock: comp?.status?.displayClock ?? "",
    period: typeof comp?.status?.period === "number" ? comp.status.period : 0,
    homeTeam: home?.team?.abbreviation ?? "",
    homeScore: scores.homeScore,
    homeRecord: home?.records?.[0]?.summary ?? "",
    awayTeam: away?.team?.abbreviation ?? "",
    awayScore: scores.awayScore,
    awayRecord: away?.records?.[0]?.summary ?? "",
    venue: comp?.venue?.fullName ?? "",
    tv: parseTv(comp?.broadcasts),
  };
}

export async function fetchScoreboard(date?: string): Promise<ESPNScoreboard> {
  const url = date ? `${ESPN_BASE}/scoreboard?dates=${date}` : `${ESPN_BASE}/scoreboard`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`ESPN API error: ${res.status}`);
  const data = (await res.json()) as { events?: ESPNScoreboardEvent[] };
  return {
    games: (data.events ?? []).map(parseGame),
    fetchedAt: Date.now(),
  };
}

export async function fetchStandings(): Promise<unknown> {
  const res = await fetch(`${ESPN_BASE}/standings`);
  if (!res.ok) throw new Error(`ESPN standings error: ${res.status}`);
  return res.json();
}
