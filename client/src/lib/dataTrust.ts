import { editionPublishLabel, PACIFIC_TZ } from "./pacificTime";
import { pulseEdition } from "./pulseData";

/** Morning edition publish window (13:00 UTC cron, labeled in America/Los_Angeles). */
export const EDITION_PUBLISH_LABEL = editionPublishLabel();

export function editionUpdatedLabel(): string {
  return `Updated ${EDITION_PUBLISH_LABEL} · ${pulseEdition.date}`;
}

/** Visible desk stamp — edition date only, no live clock. */
export function lastUpdatedStamp(display = pulseEdition.date): string {
  return `Last updated: ${display}`;
}

/** Honest tool freshness — a known data date, else the morning edition date. Never a live clock. */
export function toolUpdatedLabel(source?: string | null): string {
  const stamp = source?.trim();
  if (stamp) return `Updated ${stamp}`;
  return lastUpdatedStamp();
}

function pacificIsoDay(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: PACIFIC_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

/** True when the edition display date is a Pacific calendar day behind `now`. */
export function isDeskEditionStale(now = new Date(), display = pulseEdition.date): boolean {
  const parsed = new Date(`${display} 12:00:00`);
  if (Number.isNaN(parsed.getTime())) return false;
  return pacificIsoDay(parsed) < pacificIsoDay(now);
}

/** User-facing note when /tonight or /injuries would show yesterday under today's chrome. */
export function deskStaleNote(now = new Date(), display = pulseEdition.date): string | null {
  if (!isDeskEditionStale(now, display)) return null;
  return `Desk date is ${display}. Morning edition has not landed yet — treat this as last-known, not live.`;
}

export function espnSourceLabel(fetchedAt?: number | string | null): string {
  if (fetchedAt == null) return "Source: ESPN";
  const ts = typeof fetchedAt === "number" ? fetchedAt : Date.parse(String(fetchedAt));
  if (!Number.isFinite(ts)) return "Source: ESPN";
  const t = new Date(ts).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  return `Source: ESPN · ${t}`;
}

export function liveScoresTrustLabel(fetchedAt?: number): string {
  if (!fetchedAt) return "Live scores · ESPN";
  const t = new Date(fetchedAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  return `Live scores · ESPN · ${t}`;
}
