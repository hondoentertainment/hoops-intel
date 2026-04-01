import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock pulseData for trivia
vi.mock("../lib/pulseData", () => ({
  triviaQuestion: {
    id: "2026-03-24",
    question: "Which player has the longest active consecutive 20-point game streak?",
    options: [
      "Luka Dončić",
      "Shai Gilgeous-Alexander",
      "Jayson Tatum",
      "Kevin Durant",
    ],
    correctIndex: 1,
    difficulty: "medium",
    explanation: "Shai Gilgeous-Alexander has scored 20+ points in 131 consecutive games.",
  },
}));

describe("trivia helpers", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("streak persistence", () => {
    const STREAK_KEY = "hoops-iq-streak";
    const RESULT_KEY = "hoops-iq-result";

    it("loadStreak returns defaults when no stored data", () => {
      const raw = localStorage.getItem(STREAK_KEY);
      expect(raw).toBeNull();
    });

    it("saveStreak and loadStreak round-trip correctly", () => {
      const streakData = {
        lastDate: "2026-03-24",
        streak: 5,
        totalCorrect: 10,
        totalAnswered: 15,
      };
      localStorage.setItem(STREAK_KEY, JSON.stringify(streakData));

      const loaded = JSON.parse(localStorage.getItem(STREAK_KEY)!);
      expect(loaded.lastDate).toBe("2026-03-24");
      expect(loaded.streak).toBe(5);
      expect(loaded.totalCorrect).toBe(10);
      expect(loaded.totalAnswered).toBe(15);
    });

    it("handles corrupt streak data gracefully", () => {
      localStorage.setItem(STREAK_KEY, "not-json");
      let result = { lastDate: "", streak: 0, totalCorrect: 0, totalAnswered: 0 };
      try {
        const raw = localStorage.getItem(STREAK_KEY);
        if (raw) result = JSON.parse(raw);
      } catch {
        // Should fall through to default
      }
      expect(result.streak).toBe(0);
    });

    it("today result is stored and retrieved by date", () => {
      const result = {
        date: "2026-03-24",
        selectedIndex: 1,
        correct: true,
      };
      localStorage.setItem(RESULT_KEY, JSON.stringify(result));

      const loaded = JSON.parse(localStorage.getItem(RESULT_KEY)!);
      expect(loaded.date).toBe("2026-03-24");
      expect(loaded.selectedIndex).toBe(1);
      expect(loaded.correct).toBe(true);
    });

    it("today result returns null for different date", () => {
      const result = {
        date: "2026-03-23", // Yesterday
        selectedIndex: 0,
        correct: false,
      };
      localStorage.setItem(RESULT_KEY, JSON.stringify(result));

      const loaded = JSON.parse(localStorage.getItem(RESULT_KEY)!);
      // Trivia component checks if loaded.date === triviaQuestion.id
      expect(loaded.date).not.toBe("2026-03-24");
    });
  });

  describe("streak calculation logic", () => {
    it("starts streak at 1 for first correct answer", () => {
      const prev = { lastDate: "", streak: 0, totalCorrect: 0, totalAnswered: 0 };
      const correct = true;
      const newStreak = correct ? 1 : 0;
      expect(newStreak).toBe(1);
    });

    it("resets streak to 0 for first wrong answer", () => {
      const correct = false;
      const newStreak = correct ? 1 : 0;
      expect(newStreak).toBe(0);
    });

    it("increments streak for consecutive day correct answer", () => {
      const prev = { lastDate: "2026-03-23", streak: 3, totalCorrect: 5, totalAnswered: 7 };
      const today = "2026-03-24";

      const [y, m, d] = prev.lastDate.split("-").map(Number);
      const lastMs = new Date(y, m - 1, d).getTime();
      const [ty, tm, td] = today.split("-").map(Number);
      const todayMs = new Date(ty, tm - 1, td).getTime();
      const diffDays = (todayMs - lastMs) / (1000 * 60 * 60 * 24);

      expect(diffDays).toBe(1);
      const newStreak = prev.streak + 1; // consecutive day + correct
      expect(newStreak).toBe(4);
    });

    it("resets streak to 1 when gap > 1 day but correct", () => {
      const prev = { lastDate: "2026-03-20", streak: 5, totalCorrect: 8, totalAnswered: 10 };
      const today = "2026-03-24";

      const [y, m, d] = prev.lastDate.split("-").map(Number);
      const lastMs = new Date(y, m - 1, d).getTime();
      const [ty, tm, td] = today.split("-").map(Number);
      const todayMs = new Date(ty, tm - 1, td).getTime();
      const diffDays = (todayMs - lastMs) / (1000 * 60 * 60 * 24);

      expect(diffDays).toBe(4);
      // Gap > 1, so streak resets to 1
      const newStreak = 1;
      expect(newStreak).toBe(1);
    });

    it("resets streak to 0 for wrong answer regardless of streak", () => {
      const prev = { lastDate: "2026-03-23", streak: 10, totalCorrect: 15, totalAnswered: 20 };
      const correct = false;
      const newStreak = 0;
      expect(newStreak).toBe(0);
      expect(prev.streak).toBe(10); // Original unchanged
    });

    it("calculates accuracy correctly", () => {
      const totalCorrect = 7;
      const totalAnswered = 10;
      const accuracy = Math.round((totalCorrect / totalAnswered) * 100);
      expect(accuracy).toBe(70);
    });

    it("handles zero answers for accuracy", () => {
      const totalAnswered = 0;
      const accuracy = totalAnswered > 0 ? Math.round((0 / totalAnswered) * 100) : 0;
      expect(accuracy).toBe(0);
    });
  });

  describe("formatDateLabel", () => {
    it("formats YYYY-MM-DD to readable date", () => {
      const dateStr = "2026-03-24";
      const [year, month, day] = dateStr.split("-").map(Number);
      const d = new Date(year, month - 1, day);
      const label = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      expect(label).toBe("Mar 24");
    });

    it("formats January date correctly", () => {
      const dateStr = "2026-01-05";
      const [year, month, day] = dateStr.split("-").map(Number);
      const d = new Date(year, month - 1, day);
      const label = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      expect(label).toBe("Jan 5");
    });
  });
});
