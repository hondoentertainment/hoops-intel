import { describe, expect, it } from "vitest";
import { overlayBracketWithLiveBoard } from "../lib/playoffBracketOverlay";
import type { PlayoffSeries as BracketSeries } from "../lib/playoffBracketData";
import type { PlayoffSeries as LiveSeries } from "../lib/playoffData";

const bracketStub: BracketSeries = {
  seriesId: "east-cf-nyk-cle",
  conference: "east",
  round: 3,
  higherSeed: 3,
  lowerSeed: 4,
  higherTeam: "NYK",
  lowerTeam: "CLE",
  higherWins: 0,
  lowerWins: 0,
  status: "active",
  games: [],
};

describe("playoffBracketOverlay", () => {
  it("overlays wins and games from the live board when teams match", () => {
    const liveBoard: LiveSeries[] = [
      {
        seriesId: "2026-east-conference-finals-nyk-cle",
        conference: "east",
        round: "conference-finals",
        higherSeed: 3,
        lowerSeed: 4,
        higherTeam: "NYK",
        lowerTeam: "CLE",
        higherWins: 1,
        lowerWins: 0,
        status: "active",
        summary: "NYK leads 1-0",
        games: [
          {
            gameNumber: 1,
            date: "2026-05-19",
            homeTeam: "NYK",
            awayTeam: "CLE",
            homeScore: 108,
            awayScore: 102,
            status: "final",
          },
        ],
      },
    ];

    const [out] = overlayBracketWithLiveBoard([bracketStub], liveBoard);
    expect(out.higherWins).toBe(1);
    expect(out.lowerWins).toBe(0);
    expect(out.games).toHaveLength(1);
    expect(out.games[0].homeScore).toBe(108);
  });
});
