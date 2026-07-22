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
  | "clincher-preview"
  | "series-clincher"
  | "playoff-tip"
  | "playoff-close"
  | "fantasy"
  | "rival";

export type RivalPairTuple = [string, string];

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
  /** Optional multi-pair list; when present, any pair can match tonight's matchup. */
  rival_pairs?: RivalPairTuple[] | null;
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

function pairsFromRow(row: PushPrefsRow): RivalPairTuple[] {
  const out: RivalPairTuple[] = [];
  const seen = new Set<string>();
  const add = (x?: string | null, y?: string | null) => {
    const a = x?.trim().toUpperCase();
    const b = y?.trim().toUpperCase();
    if (!a || !b || a.length !== 3 || b.length !== 3 || a === b) return;
    const [p, q] = [a, b].sort() as RivalPairTuple;
    const key = `${p}-${q}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push([p, q]);
  };

  if (Array.isArray(row.rival_pairs)) {
    for (const pair of row.rival_pairs) {
      if (!Array.isArray(pair) || pair.length < 2) continue;
      add(pair[0], pair[1]);
    }
  }
  if (out.length === 0) add(row.rival_abbr_a, row.rival_abbr_b);
  return out;
}

/** True when away/home set equals any stored rival pairing (either order). */
export function rivalPairMatches(row: PushPrefsRow, away: string, home: string): boolean {
  const want = normalizedRivalPair(away, home);
  if (!want || want.size !== 2) return false;
  for (const [a, b] of pairsFromRow(row)) {
    const have = normalizedRivalPair(a, b);
    if (have && have.size === 2 && [...want].every((t) => have.has(t))) return true;
  }
  return false;
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
