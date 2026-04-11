import { describe, it, expect, vi } from "vitest";

// Mock the data modules before importing pulseHistory
vi.mock("../lib/pulseData", () => ({
  pulseIndex: [
    { rank: 1, player: "Shai Gilgeous-Alexander", team: "OKC", indexScore: 98 },
    { rank: 2, player: "Victor Wembanyama", team: "SAS", indexScore: 96 },
    { rank: 3, player: "Cade Cunningham", team: "DET", indexScore: 94 },
  ],
}));

vi.mock("../lib/archiveData", () => ({
  archiveEditions: [
    {
      date: "2026-03-23",
      displayDate: "March 23",
      topPlayer: "Shai Gilgeous-Alexander",
      players: ["Victor Wembanyama", "Cade Cunningham", "LaMelo Ball"],
      teams: [],
      headline: "Test",
      subheadline: "",
      topStory: "",
      gamesCount: 7,
      tags: [],
    },
    {
      date: "2026-03-22",
      displayDate: "March 22",
      topPlayer: "Victor Wembanyama",
      players: ["Shai Gilgeous-Alexander", "Luka Doncic"],
      teams: [],
      headline: "Test 2",
      subheadline: "",
      topStory: "",
      gamesCount: 8,
      tags: [],
    },
  ],
}));

describe("pulseHistory", () => {
  describe("getPlayerTrends", () => {
    it("returns trends for all current Pulse Index players", async () => {
      const { getPlayerTrends } = await import("../lib/pulseHistory");
      const trends = getPlayerTrends();

      expect(trends).toHaveLength(3);
      expect(trends[0].player).toBe("Shai Gilgeous-Alexander");
      expect(trends[0].currentRank).toBe(1);
      expect(trends[0].currentScore).toBe(98);
      expect(trends[0].team).toBe("OKC");
    });

    it("builds history from archive editions", async () => {
      const { getPlayerTrends } = await import("../lib/pulseHistory");
      const trends = getPlayerTrends();

      const sga = trends.find((t) => t.player === "Shai Gilgeous-Alexander");
      expect(sga).toBeDefined();
      // History should include current day + archive entries
      expect(sga!.history.length).toBeGreaterThan(0);
    });

    it("assigns rank 1 to topPlayer in archive", async () => {
      const { getPlayerTrends } = await import("../lib/pulseHistory");
      const trends = getPlayerTrends();

      const sga = trends.find((t) => t.player === "Shai Gilgeous-Alexander");
      // SGA is topPlayer for March 23
      const march23 = sga!.history.find((h) => h.date === "2026-03-23");
      expect(march23?.rank).toBe(1);
      expect(march23?.score).toBe(95);
    });

    it("calculates weeklyChange from recent ranks", async () => {
      const { getPlayerTrends } = await import("../lib/pulseHistory");
      const trends = getPlayerTrends();

      // Each player should have a weeklyChange number
      for (const trend of trends) {
        expect(typeof trend.weeklyChange).toBe("number");
      }
    });

    it("limits history to 14 entries", async () => {
      const { getPlayerTrends } = await import("../lib/pulseHistory");
      const trends = getPlayerTrends();

      for (const trend of trends) {
        expect(trend.history.length).toBeLessThanOrEqual(14);
      }
    });
  });

  describe("getBiggestMovers", () => {
    it("returns risers and fallers arrays", async () => {
      const { getBiggestMovers } = await import("../lib/pulseHistory");
      const { risers, fallers } = getBiggestMovers();

      expect(Array.isArray(risers)).toBe(true);
      expect(Array.isArray(fallers)).toBe(true);
    });

    it("limits risers and fallers to 3 each", async () => {
      const { getBiggestMovers } = await import("../lib/pulseHistory");
      const { risers, fallers } = getBiggestMovers();

      expect(risers.length).toBeLessThanOrEqual(3);
      expect(fallers.length).toBeLessThanOrEqual(3);
    });

    it("risers have negative weeklyChange (lower rank = better)", async () => {
      const { getBiggestMovers } = await import("../lib/pulseHistory");
      const { risers } = getBiggestMovers();

      for (const riser of risers) {
        expect(riser.weeklyChange).toBeLessThan(0);
      }
    });

    it("fallers have positive weeklyChange", async () => {
      const { getBiggestMovers } = await import("../lib/pulseHistory");
      const { fallers } = getBiggestMovers();

      for (const faller of fallers) {
        expect(faller.weeklyChange).toBeGreaterThan(0);
      }
    });
  });

  describe("getPlayerSparkline", () => {
    it("returns score array for known player", async () => {
      const { getPlayerSparkline } = await import("../lib/pulseHistory");
      const sparkline = getPlayerSparkline("Shai Gilgeous-Alexander");

      expect(Array.isArray(sparkline)).toBe(true);
      expect(sparkline.length).toBeGreaterThan(0);
      for (const val of sparkline) {
        expect(val).toBeGreaterThan(0);
      }
    });

    it("returns empty array for unknown player", async () => {
      const { getPlayerSparkline } = await import("../lib/pulseHistory");
      const sparkline = getPlayerSparkline("Nonexistent Player");

      expect(sparkline).toEqual([]);
    });

    it("returns at most 7 data points", async () => {
      const { getPlayerSparkline } = await import("../lib/pulseHistory");
      const sparkline = getPlayerSparkline("Shai Gilgeous-Alexander");

      expect(sparkline.length).toBeLessThanOrEqual(7);
    });
  });
});
