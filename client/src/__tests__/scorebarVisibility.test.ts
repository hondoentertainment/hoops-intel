import { describe, expect, it } from "vitest";
import { scorebarGamesToShow, shouldShowLiveScorebar } from "../lib/scorebarVisibility";
import type { LiveGame } from "../lib/espnApi";

const pre: LiveGame = {
  id: "1",
  status: "pre",
  statusDetail: "10/3 - 7:00 PM EDT",
  clock: "",
  period: 0,
  homeTeam: "TOR",
  homeScore: null,
  homeRecord: "",
  awayTeam: "MIA",
  awayScore: null,
  awayRecord: "",
  venue: "",
  tv: "",
};

const live: LiveGame = { ...pre, id: "2", status: "in", statusDetail: "Q2 4:12", homeScore: 40, awayScore: 38 };

describe("scorebarVisibility", () => {
  it("hides future preseason games during the offseason", () => {
    expect(scorebarGamesToShow([pre], true)).toEqual([]);
    expect(shouldShowLiveScorebar([pre], true)).toBe(false);
  });

  it("keeps live games in the offseason and all games in season", () => {
    expect(shouldShowLiveScorebar([live], true)).toBe(true);
    expect(scorebarGamesToShow([pre, live], false)).toHaveLength(2);
  });
});
