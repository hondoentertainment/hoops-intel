import { describe, expect, it } from "vitest";
import { summarizeLineMovementEducation, slateLineMovementSummary } from "../lib/bettingLineStory";

describe("bettingLineStory", () => {
  it("mentions flip when opener fav differs", () => {
    const lines = summarizeLineMovementEducation({
      homeTeam: "BOS",
      awayTeam: "PHI",
      spread: "BOS -4",
      overUnder: "220",
      prediction: "",
      openingSpread: "PHI -2",
    });
    expect(lines.some((l) => /flip/i.test(l))).toBe(true);
  });

  it("counts slate movement rows", () => {
    const summary = slateLineMovementSummary(
      [
        { homeTeam: "BOS", awayTeam: "PHI", spread: "BOS -4", openingSpread: "PHI -2" },
        { homeTeam: "LAL", awayTeam: "OKC", spread: "OKC -3", openingSpread: "OKC -3" },
      ],
      () => undefined,
    );
    expect(summary.comparable).toBe(2);
    expect(summary.moved).toBe(1);
  });
});
