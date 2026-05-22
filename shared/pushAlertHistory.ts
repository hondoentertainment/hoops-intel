/** Row shape for recent push alert dispatches (public read via API). */

export interface PushAlertHistoryItem {
  id: string;
  created_at: string;
  topic: string;
  title: string;
  body: string;
  url?: string | null;
  team_abbr?: string | null;
}

export const PUSH_ALERT_HISTORY_API_LIMIT = 20;
export const PUSH_ALERT_HISTORY_UI_LIMIT = 10;

const TEAM_CODE = /^[A-Z]{2,3}$/;

/** Normalize team codes for Supabase `in` filter (NY → NYK, etc.). */
export function normalizeTeamAbbrs(raw: string[]): string[] {
  const alias: Record<string, string> = { NY: "NYK", SA: "SAS", GS: "GSW", NO: "NOP", WSH: "WAS", BKN: "BRK" };
  const out = new Set<string>();
  for (const t of raw) {
    const up = String(t || "")
      .trim()
      .toUpperCase();
    if (!up) continue;
    const canon = alias[up] ?? up;
    if (TEAM_CODE.test(canon)) out.add(canon);
  }
  return [...out];
}

/** Parse ?teams=NYK,CLE or ?team=NYK from a URL search string. */
export function parseTeamFilterFromSearch(search: string): string[] {
  const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
  const list = params.get("teams") ?? params.get("team");
  if (!list) return [];
  return normalizeTeamAbbrs(list.split(/[,+\s]+/));
}

/**
 * Build PostgREST filter: user's teams OR league-wide alerts (null team_abbr).
 * Returns empty string when no team filter (show all).
 */
export function buildPushHistoryTeamFilter(teams: string[]): string {
  const normalized = normalizeTeamAbbrs(teams);
  if (normalized.length === 0) return "";
  const quoted = normalized.map((t) => `"${t}"`).join(",");
  return `or=(team_abbr.is.null,team_abbr.in.(${quoted}))`;
}

/** Compact relative time for alert inbox rows. */
export function formatRelativePushTime(iso: string, nowMs = Date.now()): string {
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) return iso;
  const diffMs = Math.max(0, nowMs - t);
  const mins = Math.floor(diffMs / 60_000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 48) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}
