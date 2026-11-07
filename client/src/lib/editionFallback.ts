import { displayDateToIso, isoToDisplayDate } from "./dataTrust";
import { EDITION_CRON_UTC_HOUR, EDITION_PUBLISH_MINUTE, PACIFIC_TZ } from "./pacificTime";

/**
 * The committed `pulseEdition` is the latest edition that finished publishing.
 * A failed or skipped morning run leaves that file in place. Readers keep
 * seeing it, with an explicit note, instead of an empty desk.
 */
export type EditionGeneration = "ok" | "failed" | "missing";

export interface EditionFallbackState {
  fallback: boolean;
  reason: "current" | "missing" | "failed";
  showingDate: string;
  banner: string | null;
}

function pacificIsoDay(now: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: PACIFIC_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const get = (type: string) => Number(parts.find((part) => part.type === type)?.value);
  const year = get("year");
  const month = get("month");
  const day = get("day");
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function shiftIsoDay(iso: string, days: number): string {
  const [year, month, day] = iso.split("-").map(Number);
  const next = new Date(Date.UTC(year, (month ?? 1) - 1, (day ?? 1) + days));
  return next.toISOString().slice(0, 10);
}

function editionIsoFrom(value: string): string | null {
  const iso = value.trim().match(/^(\d{4}-\d{2}-\d{2})/);
  if (iso) return iso[1] ?? null;
  return displayDateToIso(value);
}

function editionLabel(value: string): string {
  const trimmed = value.trim();
  const iso = editionIsoFrom(trimmed);
  if (!iso) return trimmed || "the latest saved edition";
  return isoToDisplayDate(iso) ?? trimmed;
}

/**
 * Pacific calendar day readers should have after the morning publish instant
 * (13:03 UTC, which is 5:03 AM PST or 6:03 AM PDT on that same Pacific date).
 * Before that instant, yesterday's edition is still the one on the desk.
 */
export function expectedEditionIso(now = new Date()): string {
  const today = pacificIsoDay(now);
  const [year, month, day] = today.split("-").map(Number);
  const publish = Date.UTC(year, (month ?? 1) - 1, day ?? 1, EDITION_CRON_UTC_HOUR, EDITION_PUBLISH_MINUTE, 0);
  if (now.getTime() < publish) return shiftIsoDay(today, -1);
  return today;
}

export function editionFallbackState(input: {
  editionDate: string;
  now?: Date;
  generation?: EditionGeneration;
}): EditionFallbackState {
  const now = input.now ?? new Date();
  const generation = input.generation ?? "ok";
  const showingDate = editionLabel(input.editionDate ?? "");
  const editionIso = editionIsoFrom(input.editionDate ?? "");
  const expected = expectedEditionIso(now);
  const failed = generation === "failed";
  const missing = generation === "missing" || !editionIso || editionIso < expected;

  if (!failed && !missing) {
    return { fallback: false, reason: "current", showingDate, banner: null };
  }

  return {
    fallback: true,
    reason: failed ? "failed" : "missing",
    showingDate,
    banner: `Today's edition is updating, showing ${showingDate}`,
  };
}
