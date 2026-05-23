import { describe, expect, it } from "vitest";
import {
  guestLeaderboardPercentile,
  leaderboardAccuracyColor,
  truncateLeaderboardUserId,
} from "../lib/pickLeaderboard";

describe("pickLeaderboard helpers", () => {
  it("truncates user ids for privacy", () => {
    expect(truncateLeaderboardUserId("a1b2c3d4-e5f6-7890-abcd-ef1234567890")).toBe("A1B2C3D4...");
  });

  it("colors accuracy tiers", () => {
    expect(leaderboardAccuracyColor(62)).toBe("#10B981");
    expect(leaderboardAccuracyColor(50)).toBe("#F59E0B");
    expect(leaderboardAccuracyColor(40)).toBe("#F43F5E");
    expect(leaderboardAccuracyColor(null)).toBe("rgba(255,255,255,0.3)");
  });

  it("estimates guest percentile from streak or accuracy", () => {
    expect(guestLeaderboardPercentile(0, null)).toBeNull();
    expect(guestLeaderboardPercentile(3, null)).toBe(64);
    expect(guestLeaderboardPercentile(0, 70)).toBe(63);
  });
});
