/**
 * Filters push subscription rows by topic allow-lists + rival matchup.
 * Shared between Vercel `api/push-notify.ts` and unit tests — no DOM / React deps.
 */

export type PushTopicKind =
  | "injury"
  | "game-start"
  | "buzzer-beater"
  | "milestone"
  | "elimination-game"
  | "series-clincher"
  | "fantasy"
  | "rival";

export interface PushPrefsRow {
  endpoint: string;
  p256dh: string;
  auth_key?: string | null;
  auth?: string | null;
  team_abbr?: string | null;
  player_slug?: string | null;
  notify_topics?: string[] | null;
  rival_abbr_a?: string | null;
  rival_abbr_b?: string | null;
}

function topicAllowed(row: PushPrefsRow, topic: PushTopicKind): boolean {
  const list = row.notify_topics;
  if (!list || list.length === 0) return true;
  return list.map((t) => t.toLowerCase()).includes(topic);
}

export function normalizedRivalPair(a?: string | null, b?: string | null): Set<string> | null {
  if (!a || !b) return null;
  return new Set([a.trim().toUpperCase(), b.trim().toUpperCase()]);
}

/** True when away/home set equals stored rival pairing (either order). */
export function rivalPairMatches(row: PushPrefsRow, away: string, home: string): boolean {
  const want = normalizedRivalPair(away, home);
  const have = normalizedRivalPair(row.rival_abbr_a, row.rival_abbr_b);
  if (!want || !have || have.size !== 2 || want.size !== 2) return false;
  return [...want].every((t) => have.has(t));
}

export function filterRowsForTopic(
  rows: PushPrefsRow[],
  opts: {
    topic: PushTopicKind;
    rivalAway?: string;
    rivalHome?: string;
  },
): PushPrefsRow[] {
  return rows.filter((row) => {
    if (!topicAllowed(row, opts.topic)) return false;
    if (opts.topic === "rival") {
      const a = opts.rivalAway?.trim();
      const h = opts.rivalHome?.trim();
      if (!a || !h) return false;
      return rivalPairMatches(row, a, h);
    }
    return true;
  });
}
