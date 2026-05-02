import { describe, expect, it, vi } from "vitest";
import type { PlayoffSeries } from "../lib/playoffData";
import {
  buildLiveEliminationRows,
  nextPendingGame,
  playoffSnapshot,
  scoringEdgeForSeries,
  sortedSeriesByCompetitiveness,
  todayISOLocal,
} from "../lib/playoffAnalytics";

describe("todayISOLocal", () => {
  it("returns YYYY-MM-DD", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 4, 2, 15, 0, 0));
    expect(/\d{4}-\d{2}-\d{2}/.test(todayISOLocal())).toBe(true);
    vi.useRealTimers();
  });
});

const sampleGames: PlayoffSeries["games"] = [
  {
    gameNumber: 1,
    date: "2026-05-02",
    homeTeam: "BOS",
    awayTeam: "NYK",
    homeScore: 110,
    awayScore: 105,
    status: "final",
  },
];

const activeSeriesBase: Omit<PlayoffSeries, "summary" | "eliminationGame" | "games"> = {
  seriesId: "e-r1-test",
  conference: "east",
  round: "first-round",
  higherSeed: 1,
  lowerSeed: 8,
  higherTeam: "BOS",
  lowerTeam: "NYK",
  higherWins: 1,
  lowerWins: 0,
  status: "active",
};

describe("scoringEdgeForSeries", () => {
  it("computes series scoring edge from finals", () => {
    const edge = scoringEdgeForSeries({
      seriesId: "x",
      higherTeam: "BOS",
      lowerTeam: "NYK",
      games: sampleGames,
    });
    expect(edge?.higher.team).toBe("BOS");
    expect(edge?.lower.team).toBe("NYK");
    expect(edge?.avgMargin).toBeGreaterThanOrEqual(0);
    expect(edge?.lower.gamesPlayed).toBe(1);
  });

  it("returns null when no finals", () => {
    expect(
      scoringEdgeForSeries({
        seriesId: "x",
        higherTeam: "BOS",
        lowerTeam: "NYK",
        games: [{ ...sampleGames[0], status: "scheduled" }],
      }),
    ).toBeNull();
  });
});

describe("playoffSnapshot", () => {
  it("counts completed games across series", () => {
    const series: PlayoffSeries[] = [
      {
        ...activeSeriesBase,
        summary: "test",
        games: sampleGames,
      },
    ];
    const snap = playoffSnapshot(series, "2026-05-02");
    expect(snap.gamesPlayed).toBe(1);
    expect(snap.seriesActive).toBe(1);
  });
});

describe("nextPendingGame", () => {
  it("returns first non-final game", () => {
    const s: PlayoffSeries = {
      ...activeSeriesBase,
      summary: "x",
      games: [
        { ...sampleGames[0], gameNumber: 1 },
        {
          gameNumber: 2,
          date: "2026-05-05",
          homeTeam: "BOS",
          awayTeam: "NYK",
          homeScore: null,
          awayScore: null,
          status: "scheduled",
        },
      ],
    };
    const n = nextPendingGame(s);
    expect(n?.gameNumber).toBe(2);
  });
});

describe("buildLiveEliminationRows", () => {
  it("surfaces elimination language when eliminationGame ties", () => {
    const s: PlayoffSeries = {
      ...activeSeriesBase,
      higherWins: 3,
      lowerWins: 3,
      eliminationGame: true,
      summary: "",
      games: [],
    };
    const rows = buildLiveEliminationRows([s]);
    expect(rows.some((r) => r.urgency === "elimination")).toBe(true);
  });
});

describe("sortedSeriesByCompetitiveness", () => {
  it("orders lower avgMargin first when edges exist", () => {
    const a: PlayoffSeries = {
      ...activeSeriesBase,
      seriesId: "wide",
      summary: "",
      higherWins: 1,
      lowerWins: 0,
      games: [{ ...sampleGames[0], homeScore: 120, awayScore: 90 }],
    };
    const b: PlayoffSeries = {
      ...activeSeriesBase,
      seriesId: "tight",
      summary: "",
      higherWins: 1,
      lowerWins: 0,
      games: [{ ...sampleGames[0], homeScore: 102, awayScore: 100 }],
    };
    const out = sortedSeriesByCompetitiveness([a, b]);
    expect(out[0].seriesId).toBe("tight");
  });
});
