import { describe, expect, it } from "vitest";
import { computePulseTopAlignment, gameForTeam } from "../lib/pulseAccountability";

describe("pulseAccountability", () => {
  const games = [
    { homeTeam: "LAL", awayTeam: "BOS", homeScore: 110, awayScore: 104, status: "final" as const },
  ];

  it("maps team to finalized game", () => {
    const g = gameForTeam(games, "BOS");
    expect(g?.awayTeam).toBe("BOS");
  });

  it("scores alignment vs winners", () => {
    const res = computePulseTopAlignment(games, [
      { rank: 1, player: "Jaylen Brown", team: "BOS" },
      { rank: 2, player: "LeBron James", team: "LAL" },
    ]);
    expect(res.sampled).toBe(2);
    expect(res.onWinningSide).toBe(1);
    expect(res.ratePct).toBe(50);
  });
});
