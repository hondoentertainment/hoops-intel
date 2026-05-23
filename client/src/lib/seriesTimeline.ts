import { archiveEditions } from "./archiveData";
import { makeGameId } from "./gameCenter";
import { canonicalizeTeamCode } from "./identity";
import type { PlayoffSeries, PlayoffSeriesGame } from "./playoffData";

export interface SeriesTimelineEntry {
  gameNumber: number;
  gameId: string;
  date: string;
  awayTeam: string;
  homeTeam: string;
  awayScore: number | null;
  homeScore: number | null;
  status: PlayoffSeriesGame["status"];
  time?: string;
  tv?: string;
  topPerformer?: string;
  topLine?: string;
  archiveHeadline?: string;
  archiveSnippet?: string;
  gameCenterHref: string;
}

function canonTeam(t: string): string {
  return canonicalizeTeamCode(t);
}

function normalizeArchiveDate(raw: string | undefined): string {
  if (!raw) return "";
  const iso = raw.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return "";
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function archiveMatchesGame(ed: Record<string, unknown>, game: PlayoffSeriesGame): boolean {
  const teams = (ed.teams as string[] | undefined) ?? [];
  const canonTeams = teams.map(canonTeam);
  const away = canonTeam(game.awayTeam);
  const home = canonTeam(game.homeTeam);
  if (!canonTeams.includes(away) || !canonTeams.includes(home)) return false;

  const edDate = normalizeArchiveDate(String(ed.date ?? ed.displayDate ?? ""));
  const gameDate = normalizeArchiveDate(game.date);
  if (edDate && gameDate && edDate === gameDate) return true;

  const headline = String(ed.headline ?? ed.topStory ?? ed.subheadline ?? "").toUpperCase();
  return headline.includes(away) && headline.includes(home);
}

function archiveRecapForGame(game: PlayoffSeriesGame): { headline?: string; snippet?: string } {
  for (const ed of archiveEditions) {
    if (!archiveMatchesGame(ed as Record<string, unknown>, game)) continue;
    const headline = (ed as { headline?: string }).headline ?? (ed as { subheadline?: string }).subheadline;
    const snippet =
      (ed as { topStory?: string }).topStory ??
      (ed as { subheadline?: string }).subheadline ??
      (ed as { headline?: string }).headline;
    return {
      headline: headline ? String(headline) : undefined,
      snippet: snippet ? String(snippet).slice(0, 220) : undefined,
    };
  }
  return {};
}

/** Game-by-game recap strip merging synced series state with archive editions. */
export function buildSeriesTimeline(series: PlayoffSeries): SeriesTimelineEntry[] {
  return [...series.games]
    .sort((a, b) => a.gameNumber - b.gameNumber)
    .map((game) => {
      const archive = archiveRecapForGame(game);
      const gameId = makeGameId(game.awayTeam, game.homeTeam, game.date);
      return {
        gameNumber: game.gameNumber,
        gameId,
        date: game.date,
        awayTeam: game.awayTeam,
        homeTeam: game.homeTeam,
        awayScore: game.awayScore,
        homeScore: game.homeScore,
        status: game.status,
        time: game.time,
        tv: game.tv,
        topPerformer: game.topPerformer,
        topLine: game.topLine,
        archiveHeadline: archive.headline,
        archiveSnippet: archive.snippet,
        gameCenterHref: `/game/${gameId}`,
      };
    });
}
