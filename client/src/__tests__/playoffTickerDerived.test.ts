import { describe, expect, it } from "vitest";
import {
  buildPlayoffFinalScoreTickerItems,
  playoffTickerWireItems,
} from "../lib/playoffTickerDerived";
import type { PlayoffSeries } from "../lib/playoffData";

describe("playoffTickerDerived", () => {
  it("buildPlayoffFinalScoreTickerItems emits FINAL lines for completed games", () => {
    const series: PlayoffSeries[] = [
      {
        seriesId: "T",
        conference: "east",
        round: "first-round",
        higherSeed: 1,
        lowerSeed: 8,
        higherTeam: "BOS",
        lowerTeam: "PHI",
        higherWins: 3,
        lowerWins: 4,
        status: "complete",
        summary: "PHI wins 4-3",
        games: [
          {
            gameNumber: 7,
            date: "2026-05-02",
            homeTeam: "BOS",
            awayTeam: "PHI",
            homeScore: 100,
            awayScore: 109,
            status: "final",
            tv: "NBC",
            topPerformer: "Joel Embiid",
            topLine: "34 PTS · 12 REB",
          },
        ],
      },
    ];
    const rows = buildPlayoffFinalScoreTickerItems(series);
    expect(rows).toHaveLength(1);
    expect(rows[0].type).toBe("score");
    expect(rows[0].text).toContain("FINAL:");
    expect(rows[0].text).toContain("PHI 109");
    expect(rows[0].text).toContain("BOS 100");
    expect(rows[0].text).toContain("Joel Embiid");
  });

  it("playoffTickerWireItems returns items when playoff board is active", () => {
    const wire = playoffTickerWireItems();
    expect(Array.isArray(wire)).toBe(true);
    expect(wire.length).toBeGreaterThan(0);
    expect(wire.every((w) => typeof w.text === "string" && w.text.length > 0)).toBe(true);
  });
});
