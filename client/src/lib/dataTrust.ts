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

/**
 * Camp / daily companion SLA. Content older than this is labeled outdated
 * instead of wearing a fresh "Updated" stamp.
 */
export const DESK_CONTENT_SLA_DAYS = 7;

export type ContentFreshnessState = "current" | "stale" | "unknown";

export interface ContentFreshness {
  state: ContentFreshnessState;
  ageDays: number | null;
  isoDay: string | null;
}

function contentIsoDay(value: string): string | null {
  const iso = value.trim().match(/^(\d{4}-\d{2}-\d{2})/);
  if (iso) return iso[1] ?? null;
  const parsed = new Date(`${value.trim()} 12:00:00`);
  if (Number.isNaN(parsed.getTime())) return null;
  return pacificIsoDay(parsed);
}

function isoDayDelta(fromIso: string, toIso: string): number {
  const from = Date.parse(`${fromIso}T00:00:00Z`);
  const to = Date.parse(`${toIso}T00:00:00Z`);
  return Math.round((to - from) / 86_400_000);
}

/** Age of a generated companion against the Pacific calendar day. Unparseable dates stay unknown. */
export function assessContentFreshness(source?: string | null, now = new Date()): ContentFreshness {
  const raw = source?.trim();
  if (!raw) return { state: "unknown", ageDays: null, isoDay: null };
  const isoDay = contentIsoDay(raw);
  if (!isoDay) return { state: "unknown", ageDays: null, isoDay: null };
  const ageDays = isoDayDelta(isoDay, pacificIsoDay(now));
  if (ageDays > DESK_CONTENT_SLA_DAYS) return { state: "stale", ageDays, isoDay };
  return { state: "current", ageDays, isoDay };
}

/**
 * Hero stamp for companion pages.
 * Current content shows last-updated. Stale content says so. Missing dates stay blank.
 */
export function freshnessHeroMeta(
  source?: string | null,
  display?: string | null,
  now = new Date(),
): string | null {
  const fresh = assessContentFreshness(source, now);
  if (fresh.state === "stale") return "May be outdated";
  if (fresh.state === "current") {
    const shown = display?.trim() || fresh.isoDay;
    return shown ? `Last updated: ${shown}` : null;
  }
  return null;
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
