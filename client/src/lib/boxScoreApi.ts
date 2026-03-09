// ESPN Box Score API — fetches detailed player stats for completed games
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
  fg3m: number;
  fg3a: number;
  ftm: number;
  fta: number;
  plusMinus: string;
  starter: boolean;
}

export interface BoxScore {
  gameId: string;
  homeTeam: string;
  awayTeam: string;
  homePlayers: PlayerBoxLine[];
  awayPlayers: PlayerBoxLine[];
  homeTeamStats: TeamTotals;
  awayTeamStats: TeamTotals;
}

export interface TeamTotals {
  points: number;
  rebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  turnovers: number;
  fgPct: string;
  fg3Pct: string;
  ftPct: string;
}

function parseStat(stats: any[], name: string): string {
  return stats?.find((s: any) => s.name === name)?.displayValue ?? "0";
}

function parsePlayer(athlete: any, teamAbbr: string): PlayerBoxLine {
  const stats = athlete.statistics?.[0]?.stats ?? [];
  // ESPN stats order: MIN, FG, 3PT, FT, OREB, DREB, REB, AST, STL, BLK, TO, PF, +/-, PTS
  return {
    name: athlete.athlete?.displayName ?? "",
    team: teamAbbr,
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
    fg3m: parseInt((stats[2] ?? "0-0").split("-")[0]),
    fg3a: parseInt((stats[2] ?? "0-0").split("-")[1] ?? "0"),
    ftm: parseInt((stats[3] ?? "0-0").split("-")[0]),
    fta: parseInt((stats[3] ?? "0-0").split("-")[1] ?? "0"),
    plusMinus: stats[12] ?? "0",
    starter: athlete.starter ?? false,
  };
}

function parseTeamTotals(teamStats: any): TeamTotals {
  const s = teamStats?.statistics ?? [];
  return {
    points: parseInt(parseStat(s, "points")),
    rebounds: parseInt(parseStat(s, "totalRebounds")),
    assists: parseInt(parseStat(s, "assists")),
    steals: parseInt(parseStat(s, "steals")),
    blocks: parseInt(parseStat(s, "blocks")),
    turnovers: parseInt(parseStat(s, "turnovers")),
    fgPct: parseStat(s, "fieldGoalPct"),
    fg3Pct: parseStat(s, "threePointFieldGoalPct"),
    ftPct: parseStat(s, "freeThrowPct"),
  };
}

const boxScoreCache = new Map<string, BoxScore>();

export async function fetchBoxScore(espnGameId: string): Promise<BoxScore | null> {
  if (boxScoreCache.has(espnGameId)) return boxScoreCache.get(espnGameId)!;

  try {
    const res = await fetch(`${ESPN_BASE}/summary?event=${espnGameId}`);
    if (!res.ok) return null;
    const data = await res.json();

    const boxscore = data.boxscore;
    if (!boxscore?.players || boxscore.players.length < 2) return null;

    const away = boxscore.players[0];
    const home = boxscore.players[1];
    const awayAbbr = away.team?.abbreviation ?? "";
    const homeAbbr = home.team?.abbreviation ?? "";

    const result: BoxScore = {
      gameId: espnGameId,
      homeTeam: homeAbbr,
      awayTeam: awayAbbr,
      homePlayers: (home.statistics?.[0]?.athletes ?? []).map((a: any) => parsePlayer(a, homeAbbr)),
      awayPlayers: (away.statistics?.[0]?.athletes ?? []).map((a: any) => parsePlayer(a, awayAbbr)),
      homeTeamStats: parseTeamTotals(boxscore.teams?.[1]),
      awayTeamStats: parseTeamTotals(boxscore.teams?.[0]),
    };

    boxScoreCache.set(espnGameId, result);
    return result;
  } catch {
    return null;
  }
}

// Search for ESPN game ID by team abbreviations and date
export async function findEspnGameId(
  homeTeam: string,
  awayTeam: string,
  date: string // YYYYMMDD
): Promise<string | null> {
  try {
    const res = await fetch(`${ESPN_BASE}/scoreboard?dates=${date}`);
    if (!res.ok) return null;
    const data = await res.json();
    for (const event of data.events ?? []) {
      const comp = event.competitions?.[0];
      const home = comp?.competitors?.find((c: any) => c.homeAway === "home");
      const away = comp?.competitors?.find((c: any) => c.homeAway === "away");
      if (
        home?.team?.abbreviation === homeTeam &&
        away?.team?.abbreviation === awayTeam
      ) {
        return event.id;
      }
    }
    return null;
  } catch {
    return null;
  }
}
