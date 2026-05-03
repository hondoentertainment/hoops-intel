/** Educational copy for Betting Intel — not picks; explains how to read snapshots. */

import { spreadFavoriteAbbrev } from "./editionPredictionStats";

export interface BettingPreviewSlice {
  homeTeam: string;
  awayTeam: string;
  spread: string;
  overUnder?: string;
  prediction?: string;
  /** Morning line opener when pipeline includes one (optional). */
  openingSpread?: string;
}

export function summarizeLineMovementEducation(preview: BettingPreviewSlice): string[] {
  const lines: string[] = [];
  const closeFav = spreadFavoriteAbbrev(preview);
  const openSpread = preview.openingSpread?.trim();
  const openFav = openSpread
    ? spreadFavoriteAbbrev({
        ...preview,
        spread: openSpread,
        prediction: preview.prediction ?? "",
      })
    : null;

  if (openSpread && closeFav && openFav && openFav !== closeFav) {
    lines.push(
      `Line flipped: opener leaned ${openFav}; current board favors ${closeFav}. That signals money or news moved the price — worth checking injury reports before first whistle.`,
    );
  } else if (openSpread && openFav && closeFav && openFav === closeFav) {
    const o = preview.openingSpread!.replace(/\s+/g, " ");
    const c = preview.spread.replace(/\s+/g, " ");
    lines.push(`Lean held steady (${o} → ${c}). Market and books agree with the directional read; watch for totals drift if rotation news drops.`);
  } else if (!openSpread) {
    lines.push(
      `Snapshot shows the closing side only. Automated open-to-close ladders ship when generators emit an opener beside the nightly board — we still annotate injury and rest context inside the matchup note.`,
    );
  }

  lines.push(
    `Closing line value (CLV): pros benchmark their number against the closing number. Hoops Intel does not ingest live sportsbook APIs here — compare your book’s final print with this desk snapshot.`,
  );

  if (preview.overUnder) {
    lines.push(
      `Total ${preview.overUnder}: faster pace forecasts or foul-game scripts move this more than spreads; watch replay minutes and postseason whistle tightness.`,
    );
  }

  return lines;
}

export function bettingDisclaimer(): string {
  return "Gambling regulated by jurisdiction. Hoops Intel shows editorial snapshots and narratives — never bet advice. Bet responsibly.";
}
