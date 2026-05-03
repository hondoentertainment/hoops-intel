import { describe, expect, it } from "vitest";
import { summarizeLineMovementEducation } from "../lib/bettingLineStory";

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
});
