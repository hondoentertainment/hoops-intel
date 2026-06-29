import { archiveEditions } from "./archiveData";
import {
  eastStandings,
  westStandings,
  gameResults,
  gamePreviews,
  injuryUpdates,
  pulseIndex,
} from "./pulseData";
import { seriesForTeam, playoffSeriesOpponent } from "./playoffData";
import { nextPendingGame } from "./playoffAnalytics";
import { TEAM_NAMES, canonicalizeTeamCode } from "./identity";

type GameTeamMatchup = { homeTeam: string; awayTeam: string };

export interface TeamIntelResponse {
  abbr: string;
  fullName: string;
  standing?: (typeof eastStandings)[0];
  recentGames: GameTeamMatchup[];
  previews: typeof gamePreviews;
  injuries: typeof injuryUpdates;
  pulsePlayers: typeof pulseIndex;
  editions: typeof archiveEditions;
  playoffSummary?: string;
  updatedAt: string;
}

export function getTeamIntelByAbbr(rawAbbr: string): TeamIntelResponse | null {
  const abbr = canonicalizeTeamCode(rawAbbr);
  const fullName = TEAM_NAMES[abbr];
  if (!fullName) return null;

  const standing = [...eastStandings, ...westStandings].find((s) => s.team === abbr);
  const playoffRow = seriesForTeam(abbr);
  const playoffNext = playoffRow ? nextPendingGame(playoffRow) : undefined;
  const playoffOppAbbr = playoffRow ? playoffSeriesOpponent(playoffRow, abbr) : "";
  const oppKey = playoffOppAbbr === "NY" ? "NYK" : playoffOppAbbr === "SA" ? "SAS" : playoffOppAbbr;
  const playoffOppName = playoffOppAbbr ? TEAM_NAMES[oppKey] ?? playoffOppAbbr : "";

  let playoffSummary: string | undefined;
  if (playoffRow) {
    playoffSummary = `${playoffRow.summary}${playoffNext ? ` · Next: Game ${playoffNext.gameNumber}` : ""}${playoffOppName ? ` vs ${playoffOppName}` : ""}`;
  }

  return {
    abbr,
    fullName,
    standing,
    recentGames: (gameResults as GameTeamMatchup[]).filter((g) => g.homeTeam === abbr || g.awayTeam === abbr),
    previews: gamePreviews.filter((g) => g.homeTeam === abbr || g.awayTeam === abbr),
    injuries: injuryUpdates.filter((inj) => inj.team === abbr),
    pulsePlayers: pulseIndex.filter((p) => p.team === abbr),
    editions: archiveEditions.filter((ed: any) => (ed.teams || []).includes(abbr)),
    playoffSummary,
    updatedAt: new Date().toISOString(),
  };
}
