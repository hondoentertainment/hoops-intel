import { describe, expect, it } from "vitest";
import {
  buildPlayoffFinalScoreTickerItems,
  buildPlayoffLiveTickerItems,
  playoffTickerWireItems,
} from "../lib/playoffTickerDerived";
import { isPlayoffsActive, type PlayoffSeries } from "../lib/playoffData";

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
        winner: "PHI",
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
    expect(rows[0].text).toContain("PHI wins");
  });

  it("buildPlayoffLiveTickerItems surfaces live games first", () => {
    const series: PlayoffSeries[] = [
      {
        seriesId: "LIVE",
        conference: "west",
        round: "conference-finals",
        higherSeed: 1,
        lowerSeed: 2,
        higherTeam: "OKC",
        lowerTeam: "SAS",
        higherWins: 0,
        lowerWins: 1,
        status: "active",
        summary: "SAS leads 1-0",
        games: [
          {
            gameNumber: 2,
            date: "2026-05-21",
            homeTeam: "OKC",
            awayTeam: "SAS",
            homeScore: 88,
            awayScore: 91,
            status: "live",
            time: "Q3 4:12",
          },
        ],
      },
    ];
    const live = buildPlayoffLiveTickerItems(series);
    expect(live).toHaveLength(1);
    expect(live[0].type).toBe("alert");
    expect(live[0].text).toContain("LIVE:");
    expect(live[0].text).toContain("SAS leads 1-0");
  });

  it("playoffTickerWireItems yields well-formed items, matching board state", () => {
    const wire = playoffTickerWireItems();
    expect(Array.isArray(wire)).toBe(true);
    expect(wire.every((w) => typeof w.text === "string" && w.text.length > 0)).toBe(true);
    // Offseason board is empty; only guarantee items while the postseason is live.
    if (isPlayoffsActive()) expect(wire.length).toBeGreaterThan(0);
  });
});
