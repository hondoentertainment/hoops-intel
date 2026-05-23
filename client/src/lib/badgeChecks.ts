/**
 * Client-side badge eligibility from localStorage + playoff board state.
 * Mirrors pickEmEngagement / BracketPicker storage patterns.
 */

import { readPickStreak } from "./pickEmEngagement";
import { readVisitCount } from "./visitCount";
import { playoffSeries, type PlayoffRound } from "./playoffData";

export const ENGAGEMENT_BADGE_IDS = {
  pickemStreak7: "pickem-streak-7",
  visitSeven: "visit-seven",
  bracketRoundPerfect: "bracket-round-perfect",
} as const;

interface BracketPick {
  series_id: string;
  picked_team: string;
}

function loadBracketPicks(): Record<string, BracketPick> {
  if (typeof localStorage === "undefined") return {};
  try {
    const raw = localStorage.getItem("hoops-intel-bracket-picks");
    return raw ? (JSON.parse(raw) as Record<string, BracketPick>) : {};
  } catch {
    return {};
  }
}

const PLAYOFF_ROUNDS: PlayoffRound[] = [
  "first-round",
  "conference-semifinals",
  "conference-finals",
  "finals",
];

export function roundLabel(round: PlayoffRound): string {
  switch (round) {
    case "first-round":
      return "First Round";
    case "conference-semifinals":
      return "Conference Semifinals";
    case "conference-finals":
      return "Conference Finals";
    case "finals":
      return "Finals";
  }
}

/** Rounds where every series is complete and every local pick matched the winner. */
export function perfectBracketRounds(): PlayoffRound[] {
  const picks = loadBracketPicks();
  const perfect: PlayoffRound[] = [];

  for (const round of PLAYOFF_ROUNDS) {
    const seriesInRound = playoffSeries.filter((s) => s.round === round);
    if (seriesInRound.length === 0) continue;

    const allComplete = seriesInRound.every((s) => s.status === "complete" && s.winner);
    if (!allComplete) continue;

    let hasPick = false;
    let allCorrect = true;
    for (const s of seriesInRound) {
      const pick = picks[s.seriesId];
      if (!pick) {
        allCorrect = false;
        break;
      }
      hasPick = true;
      if (pick.picked_team !== s.winner) {
        allCorrect = false;
        break;
      }
    }

    if (hasPick && allCorrect) perfect.push(round);
  }

  return perfect;
}

export function hasPickEmStreak7(): boolean {
  return readPickStreak() >= 7;
}

export function hasVisitSeven(): boolean {
  return readVisitCount() >= 7;
}

export function hasBracketRoundPerfect(): boolean {
  return perfectBracketRounds().length > 0;
}

export function pickEmStreakProgress(): number {
  return Math.min(100, Math.round((readPickStreak() / 7) * 100));
}

export function visitSevenProgress(): number {
  return Math.min(100, Math.round((readVisitCount() / 7) * 100));
}

export function bracketRoundPerfectProgress(): number {
  const rounds = PLAYOFF_ROUNDS.filter((r) => playoffSeries.some((s) => s.round === r));
  if (rounds.length === 0) return 0;
  const perfect = perfectBracketRounds().length;
  return perfect > 0 ? 100 : 0;
}

/** Badge ids that should be auto-awarded based on current client state. */
export function evaluateEngagementBadgeIds(): string[] {
  const earned: string[] = [];
  if (hasPickEmStreak7()) earned.push(ENGAGEMENT_BADGE_IDS.pickemStreak7);
  if (hasVisitSeven()) earned.push(ENGAGEMENT_BADGE_IDS.visitSeven);
  if (hasBracketRoundPerfect()) earned.push(ENGAGEMENT_BADGE_IDS.bracketRoundPerfect);
  return earned;
}

const BADGE_STORAGE_KEY = "hoops-intel-badges";

function todayIso(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** Persist engagement badges without mounting useBadges (App shell, Pick'Em). */
export function syncEngagementBadges(): void {
  if (typeof localStorage === "undefined") return;
  const toAward = evaluateEngagementBadgeIds();
  if (toAward.length === 0) return;

  try {
    const raw = localStorage.getItem(BADGE_STORAGE_KEY);
    const state = raw
      ? (JSON.parse(raw) as {
          earnedBadges: { id: string; earnedDate: string }[];
          streak?: { currentStreak: number; longestStreak: number; lastVisitDate: string };
        })
      : {
          earnedBadges: [] as { id: string; earnedDate: string }[],
          streak: { currentStreak: 0, longestStreak: 0, lastVisitDate: "" },
        };
    if (!state.earnedBadges) state.earnedBadges = [];
    const today = todayIso();
    let changed = false;
    for (const id of toAward) {
      if (!state.earnedBadges.find((b) => b.id === id)) {
        state.earnedBadges.push({ id, earnedDate: today });
        changed = true;
      }
    }
    if (changed) localStorage.setItem(BADGE_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage errors
  }
}
