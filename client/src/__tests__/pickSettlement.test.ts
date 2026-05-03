import { describe, expect, it } from "vitest";
import { winnerAbbrFromFinalGame } from "../lib/pickSettlement";

describe("winnerAbbrFromFinalGame", () => {
  it("respects ties as home-team lean", () => {
    expect(
      winnerAbbrFromFinalGame({
        homeTeam: "BOS",
        awayTeam: "PHI",
        homeScore: 100,
        awayScore: 100,
        status: "final",
      }),
    ).toBe("BOS");
  });

  it("returns null unless final", () => {
    expect(
      winnerAbbrFromFinalGame({
        homeTeam: "BOS",
        awayTeam: "PHI",
        homeScore: 0,
        awayScore: 0,
        status: "scheduled",
      }),
    ).toBeNull();
  });
});
