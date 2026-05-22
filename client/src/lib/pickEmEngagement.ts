import { getMyPickStats } from "./supabaseClient";

const STORAGE_KEY = "hoops-intel-pick-em-local";
const STREAK_KEY = "hoops-intel-pick-streak";

export interface LocalPickRecord {
  date: string;
  gameId: string;
  pick: string;
  settled?: boolean;
  correct?: boolean;
}

export interface PickEmEngagement {
  picksToday: number;
  currentStreak: number;
  lastPickDate: string | null;
}

function readJson<T>(key: string, fallback: T): T {
  if (typeof localStorage === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function readLocalPicks(): LocalPickRecord[] {
  return readJson<LocalPickRecord[]>(STORAGE_KEY, []);
}

export function readPickStreak(): number {
  return readJson<number>(STREAK_KEY, 0);
}

export function getPickEmEngagement(todayIso: string): PickEmEngagement {
  const picks = readLocalPicks();
  const picksToday = picks.filter((p) => p.date === todayIso).length;
  return {
    picksToday,
    currentStreak: readPickStreak(),
    lastPickDate: picks.length ? picks[picks.length - 1]!.date : null,
  };
}

/** Guest percentile placeholder until leaderboard rank is wired on home. */
export function guestPickPercentile(streak: number): number | null {
  if (streak <= 0) return null;
  return Math.min(95, 40 + streak * 8);
}

export interface PickWinLoss {
  wins: number;
  losses: number;
  streak: number;
  source: "server" | "local";
}

export function localPickWinLoss(): PickWinLoss {
  const settled = readLocalPicks().filter((p) => p.settled);
  const wins = settled.filter((p) => p.correct).length;
  const losses = settled.filter((p) => p.correct === false).length;
  return { wins, losses, streak: readPickStreak(), source: "local" };
}

/** Prefer Supabase settled record when signed in; fall back to localStorage. */
export async function getPickWinLoss(): Promise<PickWinLoss> {
  const server = await getMyPickStats();
  if (server) {
    return {
      wins: server.wins,
      losses: server.losses,
      streak: server.streak,
      source: "server",
    };
  }
  return localPickWinLoss();
}
