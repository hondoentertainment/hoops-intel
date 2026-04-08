// Shared LA-calendar date helpers for daily generators.
// Set HOOPS_EDITION_DATE=YYYY-MM-DD to target a specific publication day (backfill).

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function getPublicationCalendar() {
  const env = process.env.HOOPS_EDITION_DATE?.trim();
  if (env && /^\d{4}-\d{2}-\d{2}$/.test(env)) {
    const [y, mo, da] = env.split("-").map(Number);
    return { y, mo, da };
  }
  const d = new Date();
  const la = new Date(d.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
  return { y: la.getFullYear(), mo: la.getMonth() + 1, da: la.getDate() };
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
