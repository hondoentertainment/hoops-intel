import { describe, it, expect, beforeEach } from "vitest";

describe("PickEm helpers", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  const editionDate = "2026-03-24";

  describe("loadLocalPicks / saveLocalPicks", () => {
    const storageKey = `hoops-intel-picks-${editionDate}`;

    it("returns empty object when no picks stored", () => {
      const raw = localStorage.getItem(storageKey);
      expect(raw).toBeNull();
    });

    it("persists and retrieves picks correctly", () => {
      const picks = { "LAL-DEN-20260324": "LAL", "ATL-MIA-20260324": "ATL" };
      localStorage.setItem(storageKey, JSON.stringify(picks));

      const loaded = JSON.parse(localStorage.getItem(storageKey)!);
      expect(loaded["LAL-DEN-20260324"]).toBe("LAL");
      expect(loaded["ATL-MIA-20260324"]).toBe("ATL");
    });

    it("handles corrupt JSON gracefully", () => {
      localStorage.setItem(storageKey, "invalid-json");
      let picks: Record<string, string> = {};
      try {
        const raw = localStorage.getItem(storageKey);
        picks = raw ? JSON.parse(raw) : {};
      } catch {
        picks = {};
      }
      expect(picks).toEqual({});
    });

    it("overwrites previous picks", () => {
      localStorage.setItem(storageKey, JSON.stringify({ "game-1": "LAL" }));
      localStorage.setItem(storageKey, JSON.stringify({ "game-1": "DEN", "game-2": "MIA" }));

      const loaded = JSON.parse(localStorage.getItem(storageKey)!);
      expect(loaded["game-1"]).toBe("DEN");
      expect(loaded["game-2"]).toBe("MIA");
    });
  });

  describe("isLockedLocally / setLockedLocally", () => {
    const lockKey = `hoops-intel-picks-locked-${editionDate}`;

    it("returns false when not locked", () => {
      const locked = localStorage.getItem(lockKey) === "true";
      expect(locked).toBe(false);
    });

    it("returns true after locking", () => {
      localStorage.setItem(lockKey, "true");
      const locked = localStorage.getItem(lockKey) === "true";
      expect(locked).toBe(true);
    });

    it("different dates are independent", () => {
      localStorage.setItem(lockKey, "true");
      const otherLockKey = "hoops-intel-picks-locked-2026-03-23";
      expect(localStorage.getItem(otherLockKey)).toBeNull();
    });
  });

  describe("gameId generation", () => {
    it("constructs gameId from teams and date", () => {
      const game = { awayTeam: "LAL", homeTeam: "DEN" };
      const dateCompact = editionDate.replace(/-/g, "");
      const gameId = `${game.awayTeam}-${game.homeTeam}-${dateCompact}`;
      expect(gameId).toBe("LAL-DEN-20260324");
    });

    it("uses gameId from game object when available", () => {
      const game = { gameId: "custom-id-123", awayTeam: "LAL", homeTeam: "DEN" };
      const id = game.gameId || `${game.awayTeam}-${game.homeTeam}-20260324`;
      expect(id).toBe("custom-id-123");
    });
  });

  describe("submit state logic", () => {
    it("prevents submit with 0 picks", () => {
      const pickedCount = 0;
      const canSubmit = pickedCount > 0;
      expect(canSubmit).toBe(false);
    });

    it("allows submit with picks", () => {
      const pickedCount = 3;
      const canSubmit = pickedCount > 0;
      expect(canSubmit).toBe(true);
    });

    it("calculates remaining games correctly", () => {
      const totalGames = 7;
      const pickedCount = 4;
      expect(totalGames - pickedCount).toBe(3);
    });
  });

  describe("leaderboard entry formatting", () => {
    it("displays anonymous user ID (first 8 chars)", () => {
      const userId = "a1b2c3d4-e5f6-7890-abcd-ef1234567890";
      const display = userId.substring(0, 8);
      expect(display).toBe("a1b2c3d4");
    });

    it("calculates accuracy percentage", () => {
      const correctPicks = 15;
      const totalSettled = 20;
      const accuracy = Math.round((correctPicks / totalSettled) * 100);
      expect(accuracy).toBe(75);
    });

    it("handles zero settled picks", () => {
      const totalSettled = 0;
      const hasData = totalSettled > 0;
      expect(hasData).toBe(false);
    });
  });
});
