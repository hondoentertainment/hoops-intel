import { pulseEdition } from "./pulseData";

/** Morning edition publish window (matches GitHub Actions daily update). */
export const EDITION_PUBLISH_LABEL = "5:03 AM PST";

export function editionUpdatedLabel(): string {
  return `Updated ${EDITION_PUBLISH_LABEL} · ${pulseEdition.date}`;
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
