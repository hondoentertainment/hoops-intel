/**
 * Parse slate spread strings and editorial prediction copy for alignment checks.
 * Market line format in Hoops Intel: "BOS -4.5" (favorite abbreviation + numeric spread).
 */

const SPREAD_RE = /^([A-Z]{2,4})\s+([+-]?\d+(?:\.\d+)?)\s*$/i;
const PRED_WIN_RE = /^([A-Z]{2,4})\s+wins\b/i;

/** Listed team favoured when spread attach is negative; positive points ⇒ that team is the dog vs the opponent pair. */
export function spreadFavoriteAbbrev(preview: GamePreviewLike): string | null {
  const m = preview.spread.trim().match(SPREAD_RE);
  if (!m) return null;
  const listed = m[1].toUpperCase();
  const n = Number(m[2]);
  if (Number.isNaN(n)) return null;
  if (n < 0) return listed;
  if (listed === preview.homeTeam.toUpperCase()) return preview.awayTeam.toUpperCase();
  if (listed === preview.awayTeam.toUpperCase()) return preview.homeTeam.toUpperCase();
  return listed;
}

export function parseWinnerFromPrediction(prediction: string): string | null {
  const m = prediction.trim().match(PRED_WIN_RE);
  return m ? m[1].toUpperCase() : null;
}

export interface GamePreviewLike {
  homeTeam: string;
  awayTeam: string;
  spread: string;
  prediction: string;
}

/** Standalone opener/closing string "BOS -4" → BOS favoured (negative attaches to listed team). */
export function parseFavoriteFromSpreadString(spread: string): string | null {
  const m = spread.trim().match(SPREAD_RE);
  if (!m) return null;
  const listed = m[1].toUpperCase();
  const n = Number(m[2]);
  if (Number.isNaN(n) || n > 0) return null;
  return listed;
}

export function spreadMatchesEditorialWinner(preview: GamePreviewLike): boolean | null {
  const fav = spreadFavoriteAbbrev(preview);
  const ed = parseWinnerFromPrediction(preview.prediction);
  if (!fav || !ed) return null;
  return fav === ed;
}

export function slateMarketVsEditorialStats(previews: GamePreviewLike[]): {
  comparable: number;
  aligned: number;
  pct: number | null;
} {
  let comparable = 0;
  let aligned = 0;
  for (const g of previews) {
    const match = spreadMatchesEditorialWinner(g);
    if (match === null) continue;
    comparable++;
    if (match) aligned++;
  }
  return {
    comparable,
    aligned,
    pct: comparable === 0 ? null : Math.round((100 * aligned) / comparable),
  };
}
