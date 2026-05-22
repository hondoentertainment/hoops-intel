import { describe, expect, it } from "vitest";
import { mergePlayoffSeriesWithLive } from "../lib/playoffLiveMerge";
import type { PlayoffSeries } from "../lib/playoffData";
import type { LiveGame } from "../lib/espnApi";

describe("playoffLiveMerge", () => {
  it("overlays in-progress ESPN scores onto scheduled playoff games", () => {
    const series: PlayoffSeries[] = [
      {
        seriesId: "ecf",
        conference: "east",
        round: "conference-finals",
        higherSeed: 3,
        lowerSeed: 4,
        higherTeam: "NYK",
        lowerTeam: "CLE",
        higherWins: 0,
        lowerWins: 0,
        status: "active",
        summary: "",
        games: [
          {
            gameNumber: 1,
            date: "2026-05-19",
            homeTeam: "NYK",
            awayTeam: "CLE",
            homeScore: null,
            awayScore: null,
            status: "scheduled",
            time: "8:00 PM",
          },
        ],
      },
    ];

    const live: LiveGame[] = [
      {
        id: "1",
        homeTeam: "NYK",
        awayTeam: "CLE",
        homeScore: 72,
        awayScore: 68,
        homeRecord: "53-29",
        awayRecord: "52-30",
        status: "in",
        statusDetail: "Q3 4:12",
        clock: "4:12",
        period: 3,
        venue: "MSG",
        tv: "ESPN",
      },
    ];

    const merged = mergePlayoffSeriesWithLive(series, live);
    const g = merged[0].games[0];
    expect(g.status).toBe("live");
    expect(g.homeScore).toBe(72);
    expect(g.awayScore).toBe(68);
    expect(g.time).toContain("Q3");
  });

  it("returns series unchanged when no live games", () => {
    const series: PlayoffSeries[] = [
      {
        seriesId: "x",
        conference: "west",
        round: "conference-finals",
        higherSeed: 1,
        lowerSeed: 2,
        higherTeam: "OKC",
        lowerTeam: "SAS",
        higherWins: 1,
        lowerWins: 0,
        status: "active",
        summary: "",
        games: [
          {
            gameNumber: 2,
            date: "2026-05-20",
            homeTeam: "OKC",
            awayTeam: "SAS",
            homeScore: null,
            awayScore: null,
            status: "scheduled",
          },
        ],
      },
    ];
    expect(mergePlayoffSeriesWithLive(series, undefined)).toBe(series);
  });
});
