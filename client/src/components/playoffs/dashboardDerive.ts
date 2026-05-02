// Client-side derivation for playoff dashboard UX (insights, momentum, ordering).

import type { PlayoffSeries, PlayoffSeriesGame } from "../../lib/playoffData";
import { nextPendingGame, scoringEdgeForSeries } from "../../lib/playoffAnalytics";

export interface TakeawaysModel {
  bullets: string[];
  mustWatch: { label: string; sub: string; seriesId: string } | null;
  playerOfNight: { name: string; line: string; team: string } | null;
}

export function usableSeries(series: PlayoffSeries[]): PlayoffSeries[] {
  return series.filter((s) => s.higherTeam !== "TBD" && s.lowerTeam !== "TBD");
}

export function lastFinalGame(series: PlayoffSeries): PlayoffSeriesGame | undefined {
  return lastFinalGameFromGames(series.games);
}

export function lastFinalGameFromGames(gameList: PlayoffSeriesGame[]): PlayoffSeriesGame | undefined {
  const finals = gameList.filter((g) => g.status === "final" && g.homeScore != null && g.awayScore != null && g.homeScore !== g.awayScore);
  if (finals.length === 0) return undefined;
  return finals.reduce((a, b) => (a.gameNumber > b.gameNumber ? a : b));
}

export function winnerAbbr(game: PlayoffSeriesGame): string | undefined {
  if (game.homeScore == null || game.awayScore == null) return undefined;
  if (game.homeScore === game.awayScore) return undefined;
  return game.homeScore > game.awayScore ? game.homeTeam : game.awayTeam;
}

export function formatShortDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

/** One actionable sentence derived from structured data — not journalistic fluff. */
export function heroSentence(series: PlayoffSeries): string {
  const last = lastFinalGame(series);
  const nx = nextPendingGame(series);
  const w = series.higherWins;
  const l = series.lowerWins;
  if (series.status === "complete" && series.winner) {
    return `${series.winner} closed it out (${Math.max(w, l)}-${Math.min(w, l)}) — rotations and shot profile held through four wins.`;
  }
  if (last) {
    const win = winnerAbbr(last)!;
    const lose = win === last.homeTeam ? last.awayTeam : last.homeTeam;
    const hi = Math.max(last.homeScore!, last.awayScore!);
    const lo = Math.min(last.homeScore!, last.awayScore!);
    const pts = `${hi}-${lo}`;
    return `${win} grabbed G${last.gameNumber} (${pts} vs ${lose})${series.eliminationGame ? " — trailing side under max pressure." : "; tempo battle tilts the edge."}`;
  }
  if (nx) return `${series.summary} · Opens ${nx.time ?? formatShortDate(nx.date)}${nx.tv ? ` (${nx.tv})` : ""}.`;
  return series.summary;
}

export function momentumLabel(series: PlayoffSeries): "hot" | "cold" | "split" {
  const finals = series.games.filter((g) => g.status === "final").sort((a, b) => a.gameNumber - b.gameNumber);
  if (finals.length === 0) return "split";
  const lastTwo = finals.slice(-2);
  const w0 = winnerAbbr(lastTwo[0]!);
  const w1 = lastTwo.length > 1 ? winnerAbbr(lastTwo[1]!) : undefined;
  if (lastTwo.length === 2 && w0 && w1 && w0 === w1) return "hot";
  if (lastTwo.length === 2 && w0 && w1 && w0 !== w1) return "split";
  return "hot";
}

export function pressureTeamAbbr(series: PlayoffSeries): string | null {
  if (series.status === "complete") return null;
  if (series.higherWins === series.lowerWins) return null;
  return series.higherWins < series.lowerWins ? series.higherTeam : series.lowerTeam;
}

export function xFactorFromSeries(series: PlayoffSeries): string {
  const last = lastFinalGame(series);
  if (last?.topPerformer) return last.topPerformer;
  if (series.higherWins > series.lowerWins) return `${series.higherTeam} roster depth`;
  if (series.lowerWins > series.higherWins) return `${series.lowerTeam} perimeter shot-making`;
  return "Half-court execution";
}

export function swingFactorText(series: PlayoffSeries): string {
  const edge = scoringEdgeForSeries(series);
  if (!edge) return "First to impose their defensive identity tilts the chess match.";
  if (edge.avgMargin <= 7) return "Margins are tight — possession count & FT-rate swing each night.";
  if (series.eliminationGame) return "Pressure optics: turnovers & empty trips multiply under elimination stress.";
  return `Efficiency duel: ${edge.higher.team} ${edge.higher.margin >= 0 ? "+" : ""}${edge.higher.margin} vs ${edge.lower.team} ${edge.lower.margin >= 0 ? "+" : ""}${edge.lower.margin} per game.`;
}

export function seriesSortPriority(series: PlayoffSeries): number {
  let pts = 0;
  if (series.status !== "complete") pts += 40;
  if (series.eliminationGame) pts += 30;
  if (lastFinalGame(series)) pts += 10;
  pts += Math.min(series.higherWins + series.lowerWins, 7);
  return pts;
}

export function sortSeries(a: PlayoffSeries, b: PlayoffSeries): number {
  return seriesSortPriority(b) - seriesSortPriority(a);
}

export function pickHeroPool(series: PlayoffSeries[]): PlayoffSeries[] {
  const usable = usableSeries(series);
  return [...usable].sort(sortSeries).slice(0, 8);
}

/** Home team W-L across completed games in series (host advantage read). */
export function homeCourtRecord(series: PlayoffSeries): string {
  let hw = 0;
  let hl = 0;
  for (const g of series.games) {
    if (g.status !== "final" || g.homeScore == null || g.awayScore == null || g.homeScore === g.awayScore) continue;
    if (g.homeScore > g.awayScore) hw += 1;
    else hl += 1;
  }
  if (hw + hl === 0) return "No finals logged — watch how first home game sets tone.";
  if (hw > hl) return `Hosts ${hw}-${hl} in box — protect-the-rim teams cashing altitude.`;
  if (hl > hw) return `Road teams ${hl}-${hw} in box — matchup math favors visitors.`;
  return `Hosts split ${hw}-${hl} — role players swing the hinge games.`;
}

export function keyStatLabel(series: PlayoffSeries): string {
  const edge = scoringEdgeForSeries(series);
  const last = lastFinalGame(series);
  const diff =
    edge != null ? Math.round((edge.higher.margin - edge.lower.margin) * 10) / 10 : null;
  if (diff !== null && edge)
    return `Edge index: ${edge.higher.team} ${diff >= 0 ? "+" : ""}${diff} vs ${edge.lower.team} (per-game margin delta).`;
  if (last?.topLine) return `Last ledger: ${last.topLine}`;
  return "Possession economy & turnovers are the quickest signal.";
}

export function trendLine(series: PlayoffSeries): string {
  return homeCourtRecord(series);
}

export function whyItMatters(series: PlayoffSeries, intelSentence?: string): string {
  const first = intelSentence?.split(/(?<=\.)\s/)[0]?.trim();
  if (first && first.length < 240) return first;
  const last = lastFinalGame(series);
  if (last && series.eliminationGame) return `${series.summary} — next outing shifts leverage for both coaching staffs.`;
  return heroSentence(series);
}

export function lastGameSummaryLine(series: PlayoffSeries): string {
  const g = lastFinalGame(series);
  if (!g) return "Awaiting tip — watch opening pace & paint touches.";
  const win = winnerAbbr(g)!;
  const lose = win === g.homeTeam ? g.awayTeam : g.homeTeam;
  const hi = Math.max(g.homeScore!, g.awayScore!);
  const lo = Math.min(g.homeScore!, g.awayScore!);
  return `${win} took G${g.gameNumber} over ${lose} (${hi}-${lo}).${g.topPerformer ? ` Pace driver: ${g.topPerformer}.` : ""}`;
}

export function buildTakeaways(
  series: PlayoffSeries[],
  movers: { player: string; team: string; playoffLine: string }[],
): TakeawaysModel {
  const usable = usableSeries(series);
  const bullets: string[] = [];
  const ranked = [...usable].sort(sortSeries);
  const pressured = ranked.filter((s) => s.eliminationGame && s.status !== "complete");

  if (pressured[0])
    bullets.push(`Match-point heat: ${pressured[0].higherTeam}–${pressured[0].lowerTeam} (${pressured[0].summary}).`);
  const tightest = [...usable]
    .map((s) => ({ s, e: scoringEdgeForSeries(s) }))
    .filter((x) => x.e != null)
    .sort((a, b) => (a.e!.avgMargin - b.e!.avgMargin))[0];
  if (tightest) bullets.push(`Thinnest air by margin: ${tightest.s.higherTeam}/${tightest.s.lowerTeam} (${tightest.e!.avgMargin} pts avg spread).`);

  const fin = usable.find((s) => s.status === "complete");
  if (fin?.winner && bullets.length < 3) bullets.push(`${fin.winner} punched a ticket forward — chase seeds compress.`);

  const mustWatchRow = pressured[0] ?? ranked[0];
  let mustWatch: TakeawaysModel["mustWatch"] = null;
  if (mustWatchRow) {
    const nx = nextPendingGame(mustWatchRow);
    mustWatch = {
      label: `${mustWatchRow.higherTeam} vs ${mustWatchRow.lowerTeam}`,
      sub: nx
        ? `${nx.time ?? formatShortDate(nx.date)}${nx.tv ? ` · ${nx.tv}` : ""}`
        : mustWatchRow.summary,
      seriesId: mustWatchRow.seriesId,
    };
  }

  const mover = movers[0];

  while (bullets.length < 3 && usable.length > 0) {
    bullets.push(`${usable.length} live series synced — reorder by urgency in the hero rail.`);
    break;
  }
  if (usable.length === 0) bullets.splice(0, bullets.length, "Postseason snapshots sync with daily ESPN pulls — check back after the cron.", "Trading-style board loads once matchup data arrives.", "Navigate home intel for standings context.");

  return {
    bullets: bullets.slice(0, 3),
    mustWatch,
    playerOfNight: mover ? { name: mover.player, line: mover.playoffLine, team: mover.team } : null,
  };
}
