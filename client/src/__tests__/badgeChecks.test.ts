import { beforeEach, describe, expect, it } from "vitest";
import {
  ENGAGEMENT_BADGE_IDS,
  evaluateEngagementBadgeIds,
  hasPickEmStreak7,
  hasVisitSeven,
  pickEmStreakProgress,
  syncEngagementBadges,
  visitSevenProgress,
} from "../lib/badgeChecks";

describe("badgeChecks", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("detects pick em streak of 7+", () => {
    localStorage.setItem("hoops-intel-pick-streak", "6");
    expect(hasPickEmStreak7()).toBe(false);
    expect(pickEmStreakProgress()).toBe(86);

    localStorage.setItem("hoops-intel-pick-streak", "7");
    expect(hasPickEmStreak7()).toBe(true);
    expect(pickEmStreakProgress()).toBe(100);
  });

  it("detects seven lifetime visits", () => {
    localStorage.setItem("hi-visit-count", "6");
    expect(hasVisitSeven()).toBe(false);
    expect(visitSevenProgress()).toBe(86);

    localStorage.setItem("hi-visit-count", "7");
    expect(hasVisitSeven()).toBe(true);
    expect(visitSevenProgress()).toBe(100);
  });

  it("awards engagement badges into badge storage", () => {
    localStorage.setItem("hi-visit-count", "7");
    localStorage.setItem("hoops-intel-pick-streak", "8");

    const ids = evaluateEngagementBadgeIds();
    expect(ids).toContain(ENGAGEMENT_BADGE_IDS.visitSeven);
    expect(ids).toContain(ENGAGEMENT_BADGE_IDS.pickemStreak7);

    syncEngagementBadges();
    const stored = JSON.parse(localStorage.getItem("hoops-intel-badges")!);
    expect(stored.earnedBadges.map((b: { id: string }) => b.id)).toEqual(
      expect.arrayContaining([ENGAGEMENT_BADGE_IDS.visitSeven, ENGAGEMENT_BADGE_IDS.pickemStreak7]),
    );
  });
});
