// useBadges — React hook for badge & streak state management
// Persists to localStorage (no Supabase required for MVP)

import { useState, useEffect, useCallback } from "react";
import { allBadges, type Badge } from "./badgesData";

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

interface EarnedBadge {
  id: string;
  earnedDate: string; // ISO date string
}

interface StreakState {
  currentStreak: number;
  longestStreak: number;
  lastVisitDate: string; // YYYY-MM-DD
}

interface BadgeState {
  earnedBadges: EarnedBadge[];
  streak: StreakState;
}

// ═══════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════

const BADGE_STORAGE_KEY = "hoops-intel-badges";

function getToday(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function getYesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// ═══════════════════════════════════════════════════════════
// LOAD / SAVE
// ═══════════════════════════════════════════════════════════

function loadState(): BadgeState {
  try {
    const raw = localStorage.getItem(BADGE_STORAGE_KEY);
    if (raw) return JSON.parse(raw) as BadgeState;
  } catch {
    // ignore
  }
  return {
    earnedBadges: [],
    streak: { currentStreak: 0, longestStreak: 0, lastVisitDate: "" },
  };
}

function saveState(state: BadgeState) {
  try {
    localStorage.setItem(BADGE_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

// ═══════════════════════════════════════════════════════════
// HOOK
// ═══════════════════════════════════════════════════════════

export function useBadges() {
  const [state, setState] = useState<BadgeState>(loadState);

  // Persist on every change
  useEffect(() => {
    saveState(state);
  }, [state]);

  // Check and update streak on mount
  useEffect(() => {
    checkAndUpdateStreak();
    // Auto-earn "Day One" badge on first visit
    const earned = loadState().earnedBadges;
    if (!earned.find((b) => b.id === "day-one")) {
      earnBadge("day-one");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAndUpdateStreak = useCallback(() => {
    setState((prev) => {
      const today = getToday();
      const yesterday = getYesterday();
      const { lastVisitDate, currentStreak, longestStreak } = prev.streak;

      // Already visited today
      if (lastVisitDate === today) return prev;

      let newStreak: number;
      if (lastVisitDate === yesterday) {
        // Consecutive day
        newStreak = currentStreak + 1;
      } else {
        // Streak broken (or first visit)
        newStreak = 1;
      }

      const newLongest = Math.max(longestStreak, newStreak);

      const newState: BadgeState = {
        ...prev,
        streak: {
          currentStreak: newStreak,
          longestStreak: newLongest,
          lastVisitDate: today,
        },
      };

      // Auto-award streak badges
      const streakThresholds: [number, string][] = [
        [3, "streak-3"],
        [7, "streak-7"],
        [30, "streak-30"],
        [100, "streak-100"],
      ];

      for (const [threshold, badgeId] of streakThresholds) {
        if (newStreak >= threshold && !newState.earnedBadges.find((b) => b.id === badgeId)) {
          newState.earnedBadges = [
            ...newState.earnedBadges,
            { id: badgeId, earnedDate: today },
          ];
        }
      }

      return newState;
    });
  }, []);

  const earnBadge = useCallback((id: string) => {
    setState((prev) => {
      if (prev.earnedBadges.find((b) => b.id === id)) return prev;
      return {
        ...prev,
        earnedBadges: [...prev.earnedBadges, { id, earnedDate: getToday() }],
      };
    });
  }, []);

  const getBadges = useCallback((): (Badge & { earned: boolean; earnedDate?: string })[] => {
    return allBadges.map((badge) => {
      const earned = state.earnedBadges.find((e) => e.id === badge.id);
      // Compute progress for unearned streak badges
      let progress = badge.progress;
      if (!earned && badge.category === "streak") {
        const target = badge.id === "streak-3" ? 3 : badge.id === "streak-7" ? 7 : badge.id === "streak-30" ? 30 : 100;
        progress = Math.min(100, Math.round((state.streak.currentStreak / target) * 100));
      }
      return {
        ...badge,
        progress,
        earned: !!earned,
        earnedDate: earned?.earnedDate,
      };
    });
  }, [state]);

  const getStreak = useCallback(() => {
    return state.streak;
  }, [state]);

  const getEarnedCount = useCallback(() => {
    return state.earnedBadges.length;
  }, [state]);

  return { earnBadge, getBadges, getStreak, getEarnedCount, checkAndUpdateStreak };
}
