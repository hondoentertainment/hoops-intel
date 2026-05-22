import { parseFavoriteFromSpreadString } from "./editionPredictionStats";

const SPREAD_RE = /^([A-Z]{2,4})\s+([+-]?\d+(?:\.\d+)?)\s*$/i;

function parseSpreadLine(spread: string): { team: string; line: number } | null {
  const m = spread.trim().match(SPREAD_RE);
  if (!m) return null;
  const line = Number(m[2]);
  if (Number.isNaN(line)) return null;
  return { team: m[1].toUpperCase(), line };
}

/** Absolute point change when the listed favorite is unchanged (e.g. -4.5 → -5.5 = 1.0). */
export function spreadPointsMoved(opening: string, closing: string): number | null {
  const o = parseSpreadLine(opening);
  const c = parseSpreadLine(closing);
  if (!o || !c) return null;
  if (o.team !== c.team) return null;
  return Math.round(Math.abs(Math.abs(c.line) - Math.abs(o.line)) * 10) / 10;
}

export function spreadFavoriteFlipped(opening: string, closing: string): boolean {
  const oFav = parseFavoriteFromSpreadString(opening);
  const cFav = parseFavoriteFromSpreadString(closing);
  return Boolean(oFav && cFav && oFav !== cFav);
}

export function formatLineMovementBadge(opening: string, closing: string): string | null {
  if (spreadFavoriteFlipped(opening, closing)) return "Line flipped";
  const pts = spreadPointsMoved(opening, closing);
  if (pts === null || pts === 0) return null;
  const cFav = parseFavoriteFromSpreadString(closing);
  const dir = cFav ? ` toward ${cFav}` : "";
  return `Moved ${pts} pt${pts === 1 ? "" : "s"}${dir}`;
}
