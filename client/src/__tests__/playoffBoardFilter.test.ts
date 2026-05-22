import { describe, expect, it } from "vitest";
import { filterPlayoffBoard, seriesHasLiveGame } from "../lib/playoffBoardFilter";
import type { PlayoffSeries } from "../lib/playoffData";

function stub(partial: Partial<PlayoffSeries> & Pick<PlayoffSeries, "seriesId" | "round" | "higherTeam" | "lowerTeam">): PlayoffSeries {
  return {
    conference: "east",
    higherSeed: 1,
    lowerSeed: 8,
    higherWins: 0,
    lowerWins: 0,
    status: "active",
    summary: "",
    games: [],
    ...partial,
  };
}

describe("playoffBoardFilter", () => {
  it("hides stale first-round rows when conference finals are in progress", () => {
    const board: PlayoffSeries[] = [
      stub({
        seriesId: "orphan-r1",
        round: "first-round",
        higherTeam: "DET",
        lowerTeam: "ORL",
        higherWins: 3,
        lowerWins: 0,
        status: "active",
      }),
      stub({
        seriesId: "ecf",
        round: "conference-finals",
        higherTeam: "NYK",
        lowerTeam: "CLE",
        higherWins: 0,
        lowerWins: 0,
        status: "active",
      }),
    ];

    const active = filterPlayoffBoard(board, "active");
    expect(active.map((s) => s.seriesId)).toEqual(["ecf"]);
  });

  it("keeps series with a live game regardless of round", () => {
    const board: PlayoffSeries[] = [
      stub({
        seriesId: "live-r1",
        round: "first-round",
        higherTeam: "BOS",
        lowerTeam: "PHI",
        games: [
          {
            gameNumber: 7,
            date: "2026-05-19",
            homeTeam: "BOS",
            awayTeam: "PHI",
            homeScore: 50,
            awayScore: 48,
            status: "live",
          },
        ],
      }),
    ];

    expect(seriesHasLiveGame(board[0])).toBe(true);
    expect(filterPlayoffBoard(board, "active")).toHaveLength(1);
  });

  it("all mode returns usable series including completed", () => {
    const board: PlayoffSeries[] = [
      stub({
        seriesId: "done",
        round: "conference-finals",
        higherTeam: "SAS",
        lowerTeam: "OKC",
        status: "complete",
        higherWins: 4,
        lowerWins: 2,
      }),
    ];
    expect(filterPlayoffBoard(board, "all")).toHaveLength(1);
  });
});
