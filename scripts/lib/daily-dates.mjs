// Shared LA-calendar date helpers for daily generators.
// Set HOOPS_EDITION_DATE=YYYY-MM-DD (or GENERATION_DATE for backfill compatibility)
// to target a specific publication day.

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Pacific calendar day. UTC `toISOString().slice(0, 10)` is already the next day after 17:00 PT. */
export function pacificIsoDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const pick = (type) => parts.find((part) => part.type === type)?.value;
  const y = pick("year");
  const mo = pick("month");
  const da = pick("day");
  if (!y || !mo || !da) return null;
  return `${y}-${mo}-${da}`;
}

function getPublicationCalendar() {
  const env =
    process.env.HOOPS_EDITION_DATE?.trim() ||
    process.env.GENERATION_DATE?.trim();
  if (env) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(env)) {
      throw new Error(`Invalid HOOPS_EDITION_DATE/GENERATION_DATE: ${env}`);
    }
    const [y, mo, da] = env.split("-").map(Number);
    return { y, mo, da };
  }
  const iso = pacificIsoDate();
  const [y, mo, da] = iso.split("-").map(Number);
  return { y, mo, da };
}

function calendarAddDays(y, mo, da, delta) {
  const t = new Date(Date.UTC(y, mo - 1, da));
  t.setUTCDate(t.getUTCDate() + delta);
  return { y: t.getUTCFullYear(), mo: t.getUTCMonth() + 1, da: t.getUTCDate() };
}

/** YYYYMMDD for ESPN scoreboard; daysOffset from publication date. */
export function toESPNDate(daysOffset = 0) {
  const cal = getPublicationCalendar();
  const c = calendarAddDays(cal.y, cal.mo, cal.da, daysOffset);
  return `${c.y}${String(c.mo).padStart(2, "0")}${String(c.da).padStart(2, "0")}`;
}

/** YYYY-MM-DD; daysOffset from publication date. */
export function toISODate(daysOffset = 0) {
  const cal = getPublicationCalendar();
  const c = calendarAddDays(cal.y, cal.mo, cal.da, daysOffset);
  return `${c.y}-${String(c.mo).padStart(2, "0")}-${String(c.da).padStart(2, "0")}`;
}

/** e.g. "April 7, 2026"; daysOffset from publication date. */
export function toDisplayDate(daysOffset = 0) {
  const cal = getPublicationCalendar();
  const c = calendarAddDays(cal.y, cal.mo, cal.da, daysOffset);
  return `${MONTHS[c.mo - 1]} ${c.da}, ${c.y}`;
}
