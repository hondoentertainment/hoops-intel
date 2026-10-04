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

  it("explains a preseason total without naming an API key or a postseason whistle", () => {
    const lines = summarizeLineMovementEducation(
      {
        homeTeam: "DEN",
        awayTeam: "UTA",
        spread: "DEN -7.5",
        overUnder: "219.5",
      },
      "preseason",
    );
    const text = lines.join(" ");
    expect(text).toMatch(/preseason minutes/i);
    expect(text).not.toMatch(/ODDS_API_KEY/);
    expect(text).not.toMatch(/postseason whistle/i);
  });

  it("keeps series foul language on a playoff total", () => {
    const lines = summarizeLineMovementEducation(
      { homeTeam: "BOS", awayTeam: "NYK", spread: "BOS -3", overUnder: "214.5" },
      "playoffs",
    );
    expect(lines.join(" ")).toMatch(/series is underway/i);
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
