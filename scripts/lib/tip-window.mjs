/** Returns true when a scheduled game tip is within `hours` of now (US Eastern heuristic). */

const ET_OFFSET_HOURS = -4; // EDT; close enough for playoff push windows

function parseTipDateTime(game) {
  const dateStr = game.date;
  const timeStr = game.time ?? "";
  if (!dateStr) return null;

  let y;
  let mo;
  let d;
  const iso = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) {
    y = Number(iso[1]);
    mo = Number(iso[2]) - 1;
    d = Number(iso[3]);
  } else {
    const parsed = new Date(dateStr);
    if (Number.isNaN(parsed.getTime())) return null;
    y = parsed.getFullYear();
    mo = parsed.getMonth();
    d = parsed.getDate();
  }

  const tm = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
  if (!tm) {
    const noon = new Date(Date.UTC(y, mo, d, 17 + ET_OFFSET_HOURS, 0, 0));
    return noon;
  }
  let hr = Number(tm[1]);
  const min = Number(tm[2]);
  const ap = tm[3]?.toUpperCase();
  if (ap === "PM" && hr < 12) hr += 12;
  if (ap === "AM" && hr === 12) hr = 0;
  return new Date(Date.UTC(y, mo, d, hr + ET_OFFSET_HOURS, min, 0));
}

export function tipWithinHours(game, hours = 2, nowMs = Date.now()) {
  const tip = parseTipDateTime(game);
  if (!tip) return false;
  const diffMs = tip.getTime() - nowMs;
  const windowMs = hours * 3600 * 1000;
  return diffMs > 0 && diffMs <= windowMs;
}
