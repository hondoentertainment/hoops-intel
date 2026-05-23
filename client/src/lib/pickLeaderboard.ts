/** Read-only Pick'em season leaderboard from Supabase `pick_leaderboard` view. */

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

export interface PickLeaderboardRow {
  user_id: string;
  total_settled: number;
  correct_picks: number;
  accuracy_pct: number | null;
  current_streak: number;
}

export function truncateLeaderboardUserId(id: string): string {
  return `${id.slice(0, 8).toUpperCase()}...`;
}

export function leaderboardAccuracyColor(pct: number | null): string {
  if (pct === null) return "rgba(255,255,255,0.3)";
  if (pct >= 60) return "#10B981";
  if (pct >= 45) return "#F59E0B";
  return "#F43F5E";
}

/** Top season leaders by accuracy (ties broken by correct pick count). */
export async function fetchPickLeaderboard(limit = 10): Promise<PickLeaderboardRow[]> {
  if (!SUPABASE_URL) return [];
  const query =
    "select=user_id,total_settled,correct_picks,accuracy_pct,current_streak" +
    "&order=accuracy_pct.desc.nullslast,correct_picks.desc" +
    `&limit=${limit}`;
  const res = await fetch(`${SUPABASE_URL}/rest/v1/pick_leaderboard?${query}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(`Leaderboard fetch failed: ${res.statusText}`);
  return res.json() as Promise<PickLeaderboardRow[]>;
}

/** Rough guest percentile from streak when Supabase rank is unavailable. */
export function guestLeaderboardPercentile(streak: number, accuracyPct: number | null): number | null {
  if (streak <= 0 && accuracyPct === null) return null;
  const fromStreak = streak > 0 ? Math.min(95, 40 + streak * 8) : 0;
  const fromAcc = accuracyPct !== null ? Math.min(95, Math.round(accuracyPct * 0.9)) : 0;
  return Math.max(fromStreak, fromAcc) || null;
}
