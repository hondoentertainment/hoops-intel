/** Educational copy for Betting Intel — not picks; explains how to read snapshots. */

import { spreadFavoriteAbbrev } from "./editionPredictionStats";
import { activeEditionContext, type EditionContext } from "./deskMode";

export interface BettingPreviewSlice {
  homeTeam: string;
  awayTeam: string;
  spread: string;
  overUnder?: string;
  prediction?: string;
  /** Morning line opener when pipeline includes one (optional). */
  openingSpread?: string;
}

function totalEducation(total: string, ctx: EditionContext): string {
  if (ctx === "playoffs" || ctx === "finals") {
    return `Total ${total}: pace and foul rate move this more than the spread once a series is underway.`;
  }
  if (ctx === "preseason" || ctx === "summer-league") {
    return `Total ${total}: preseason minutes and pace move this more than the spread. Treat the number as a thin-slate snapshot.`;
  }
  return `Total ${total}: pace, rotation minutes, and how tightly the game is called move this more than the spread.`;
}

export function summarizeLineMovementEducation(
  preview: BettingPreviewSlice,
  ctx: EditionContext = activeEditionContext(),
): string[] {
  const lines: string[] = [];
  const forSpread = { ...preview, prediction: preview.prediction ?? "" };
  const closeFav = spreadFavoriteAbbrev(forSpread);
  const openSpread = preview.openingSpread?.trim();
  const openFav = openSpread
    ? spreadFavoriteAbbrev({
        ...forSpread,
        spread: openSpread,
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
    `Closing line value (CLV): pros benchmark their number against the closing number. This card is the morning edition snapshot — compare your book’s final print before tip.`,
  );

  if (preview.overUnder) {
    lines.push(totalEducation(preview.overUnder, ctx));
  }

  return lines;
}

export function bettingDisclaimer(): string {
  return "Gambling regulated by jurisdiction. Hoops Intel shows editorial snapshots and narratives — never bet advice. Bet responsibly. If you or someone you know has a gambling problem, call 1-800-GAMBLER (US) or your local helpline.";
}

export interface SlateMovementRow {
  matchup: string;
  opener?: string;
  closer?: string;
  current?: string;
  moved: boolean;
}

/** Aggregate open→current movement for the nightly slate card grid. */
export function slateLineMovementSummary(
  previews: BettingPreviewSlice[],
  lookup: (away: string, home: string) => { openingSpread?: string; closingSpread?: string } | undefined,
): { comparable: number; moved: number; rows: SlateMovementRow[] } {
  const rows: SlateMovementRow[] = [];
  let comparable = 0;
  let moved = 0;

  for (const g of previews) {
    const lm = lookup(g.awayTeam, g.homeTeam);
    const opener = lm?.openingSpread ?? g.openingSpread?.trim();
    const current = lm?.closingSpread ?? g.spread;
    if (!opener || !current) continue;
    comparable += 1;
    const didMove = spreadMovedLocal(opener, current);
    if (didMove) moved += 1;
    rows.push({
      matchup: `${g.awayTeam} @ ${g.homeTeam}`,
      opener,
      closer: g.spread,
      current,
      moved: didMove,
    });
  }

  return { comparable, moved, rows };
}

function spreadMovedLocal(opening: string, closing: string): boolean {
  return opening.replace(/\s+/g, " ").trim() !== closing.replace(/\s+/g, " ").trim();
}
