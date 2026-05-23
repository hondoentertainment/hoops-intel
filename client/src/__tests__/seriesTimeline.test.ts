import { describe, expect, it } from "vitest";
import { buildSeriesTimeline } from "../lib/seriesTimeline";
import type { PlayoffSeries } from "../lib/playoffData";

const sampleSeries: PlayoffSeries = {
  seriesId: "E1-NYK-PHI",
  conference: "east",
  round: "first-round",
  higherSeed: 3,
  lowerSeed: 7,
  higherTeam: "NYK",
  lowerTeam: "PHI",
  higherWins: 1,
  lowerWins: 0,
  status: "active",
  summary: "NYK leads 1-0",
  games: [
    {
      gameNumber: 1,
      date: "2026-05-10",
      homeTeam: "PHI",
      awayTeam: "NYK",
      homeScore: 114,
      awayScore: 144,
      status: "final",
      topPerformer: "Miles McBride",
      topLine: "25 PTS",
    },
  ],
};

describe("buildSeriesTimeline", () => {
  it("merges synced games with archive recaps and game center links", () => {
    const rows = buildSeriesTimeline(sampleSeries);
    expect(rows).toHaveLength(1);
    expect(rows[0]?.gameNumber).toBe(1);
    expect(rows[0]?.gameCenterHref).toMatch(/^\/game\//);
    expect(rows[0]?.topPerformer).toBe("Miles McBride");
  });
});
