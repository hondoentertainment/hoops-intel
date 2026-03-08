// Box Scores — Fetch detailed player stats from ESPN API
const ESPN_BASE = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba";

export interface PlayerBoxLine {
  name: string;
  team: string;
  position: string;
  minutes: string;
  points: number;
  rebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  turnovers: number;
  fgm: number;
  fga: number;
  tpm: number;
  tpa: number;
  ftm: number;
  fta: number;
  plusMinus: string;
  starter: boolean;
}

export interface BoxScore {
  gameId: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  homePlayers: PlayerBoxLine[];
  awayPlayers: PlayerBoxLine[];
  homeTeamStats: { fgPct: string; tpPct: string; ftPct: string; rebounds: number; assists: number; turnovers: number };
  awayTeamStats: { fgPct: string; tpPct: string; ftPct: string; rebounds: number; assists: number; turnovers: number };
}

function parsePlayerStats(athlete: any, team: string): PlayerBoxLine {
  const stats = athlete.statistics?.[0]?.stats ?? [];
  // ESPN order: MIN, FG, 3PT, FT, OREB, DREB, REB, AST, STL, BLK, TO, PF, +/-, PTS
  return {
    name: athlete.athlete?.displayName ?? "Unknown",
    team,
    position: athlete.athlete?.position?.abbreviation ?? "",
    minutes: stats[0] ?? "0",
    points: parseInt(stats[13] ?? "0"),
    rebounds: parseInt(stats[6] ?? "0"),
    assists: parseInt(stats[7] ?? "0"),
    steals: parseInt(stats[8] ?? "0"),
    blocks: parseInt(stats[9] ?? "0"),
    turnovers: parseInt(stats[10] ?? "0"),
    fgm: parseInt((stats[1] ?? "0-0").split("-")[0]),
    fga: parseInt((stats[1] ?? "0-0").split("-")[1] ?? "0"),
    tpm: parseInt((stats[2] ?? "0-0").split("-")[0]),
    tpa: parseInt((stats[2] ?? "0-0").split("-")[1] ?? "0"),
    ftm: parseInt((stats[3] ?? "0-0").split("-")[0]),
    fta: parseInt((stats[3] ?? "0-0").split("-")[1] ?? "0"),
    plusMinus: stats[12] ?? "0",
    starter: athlete.starter ?? false,
  };
}

function parseTeamStats(stats: any[]): { fgPct: string; tpPct: string; ftPct: string; rebounds: number; assists: number; turnovers: number } {
  // ESPN team stats order: FG, FG%, 3PT, 3P%, FT, FT%, OREB, DREB, REB, AST, STL, BLK, TO, PF
  return {
    fgPct: stats[1] ?? "0%",
    tpPct: stats[3] ?? "0%",
    ftPct: stats[5] ?? "0%",
    rebounds: parseInt(stats[8] ?? "0"),
    assists: parseInt(stats[9] ?? "0"),
    turnovers: parseInt(stats[12] ?? "0"),
  };
}

export async function fetchBoxScore(espnGameId: string): Promise<BoxScore | null> {
  try {
    const res = await fetch(`${ESPN_BASE}/summary?event=${espnGameId}`);
    if (!res.ok) return null;
    const data = await res.json();

    const boxscore = data.boxscore;
    if (!boxscore) return null;

    const teams = boxscore.teams ?? [];
    const players = boxscore.players ?? [];

    const homeTeamData = teams[1] ?? teams[0];
    const awayTeamData = teams[0];
    const homePlayers = players[1] ?? players[0];
    const awayPlayers = players[0];

    const homeAbbr = homePlayers?.team?.abbreviation ?? "";
    const awayAbbr = awayPlayers?.team?.abbreviation ?? "";

    const homeAthletes = (homePlayers?.statistics?.[0]?.athletes ?? []).map(
      (a: any) => parsePlayerStats(a, homeAbbr)
    );
    const awayAthletes = (awayPlayers?.statistics?.[0]?.athletes ?? []).map(
      (a: any) => parsePlayerStats(a, awayAbbr)
    );

    return {
      gameId: espnGameId,
      homeTeam: homeAbbr,
      awayTeam: awayAbbr,
      homeScore: parseInt(homeTeamData?.statistics?.[0]?.stats?.[13] ?? "0"),
      awayScore: parseInt(awayTeamData?.statistics?.[0]?.stats?.[13] ?? "0"),
      homePlayers: homeAthletes,
      awayPlayers: awayAthletes,
      homeTeamStats: parseTeamStats(homeTeamData?.statistics?.[0]?.stats ?? []),
      awayTeamStats: parseTeamStats(awayTeamData?.statistics?.[0]?.stats ?? []),
    };
  } catch {
    return null;
  }
}

// Fetch box scores for a specific date (YYYYMMDD format)
export async function fetchGameIdsForDate(date: string): Promise<string[]> {
  try {
    const res = await fetch(`${ESPN_BASE}/scoreboard?dates=${date}`);
    if (!res.ok) return [];
    const data = await res.json();
    return (data.events ?? []).map((e: any) => e.id);
  } catch {
    return [];
  }
}
