// ESPN public API integration for live NBA data
// Endpoint: site.api.espn.com (no auth required)

const ESPN_BASE = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba";

export interface LiveGame {
  id: string;
  status: "pre" | "in" | "post";
  statusDetail: string;
  clock: string;
  period: number;
  homeTeam: string;
  homeScore: number;
  homeRecord: string;
  awayTeam: string;
  awayScore: number;
  awayRecord: string;
  venue: string;
  tv: string;
}

export interface ESPNScoreboard {
  games: LiveGame[];
  fetchedAt: number;
}

/** Exported for unit tests (ESPN response shape is untyped at runtime). */
export function parseGame(event: any): LiveGame {
  const comp = event.competitions?.[0];
  const home = comp?.competitors?.find((c: any) => c.homeAway === "home");
  const away = comp?.competitors?.find((c: any) => c.homeAway === "away");
  const status = comp?.status?.type;

  return {
    id: event.id,
    status: status?.state === "pre" ? "pre" : status?.completed ? "post" : "in",
    statusDetail: status?.shortDetail ?? "",
    clock: comp?.status?.displayClock ?? "",
    period: comp?.status?.period ?? 0,
    homeTeam: home?.team?.abbreviation ?? "",
    homeScore: parseInt(home?.score ?? "0"),
    homeRecord: home?.records?.[0]?.summary ?? "",
    awayTeam: away?.team?.abbreviation ?? "",
    awayScore: parseInt(away?.score ?? "0"),
    awayRecord: away?.records?.[0]?.summary ?? "",
    venue: comp?.venue?.fullName ?? "",
    tv: (comp?.broadcasts ?? [])
      .flatMap((b: any) => b.names ?? [])
      .join(", ") || "Local",
  };
}

export async function fetchScoreboard(date?: string): Promise<ESPNScoreboard> {
  const url = date
    ? `${ESPN_BASE}/scoreboard?dates=${date}`
    : `${ESPN_BASE}/scoreboard`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`ESPN API error: ${res.status}`);
  const data = await res.json();
  return {
    games: (data.events ?? []).map(parseGame),
    fetchedAt: Date.now(),
  };
}

export async function fetchStandings(): Promise<any> {
  const res = await fetch(`${ESPN_BASE}/standings`);
  if (!res.ok) throw new Error(`ESPN standings error: ${res.status}`);
  return res.json();
}
