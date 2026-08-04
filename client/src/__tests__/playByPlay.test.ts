import { describe, it, expect, vi, beforeEach } from "vitest";
import { fetchPlayByPlay } from "../lib/playByPlay";

describe("fetchPlayByPlay", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  const teamsBox = {
    teams: [
      { team: { id: "24", abbreviation: "LAL" } },
      { team: { id: "2", abbreviation: "BOS" } },
    ],
  };

  function mockFetch(payload: any, ok = true) {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok,
      json: async () => payload,
    } as Response);
  }

  it("returns null when the game has no plays yet (pre-tip)", async () => {
    mockFetch({ boxscore: teamsBox, plays: [] });
    const result = await fetchPlayByPlay("401584793");
    expect(result).toBeNull();
  });

  it("returns null on a non-ok response", async () => {
    mockFetch({}, false);
    const result = await fetchPlayByPlay("401584793");
    expect(result).toBeNull();
  });

  it("returns null on network failure", async () => {
    vi.spyOn(global, "fetch").mockRejectedValue(new Error("network down"));
    const result = await fetchPlayByPlay("401584793");
    expect(result).toBeNull();
  });

  it("parses plays and resolves team abbreviation from the boxscore team id map", async () => {
    mockFetch({
      boxscore: teamsBox,
      plays: [
        {
          id: "1",
          period: { number: 1 },
          clock: { displayValue: "11:32" },
          text: "LeBron James makes 26-foot three point jumper",
          awayScore: "3",
          homeScore: "0",
          scoringPlay: true,
          team: { id: "24" },
        },
        {
          id: "2",
          period: { number: 1 },
          clock: { displayValue: "11:10" },
          text: "Jayson Tatum misses 18-foot jumper",
          awayScore: "3",
          homeScore: "0",
          scoringPlay: false,
          team: { id: "2" },
        },
      ],
    });

    const result = await fetchPlayByPlay("401584793");
    expect(result).not.toBeNull();
    expect(result!.plays).toHaveLength(2);
    expect(result!.plays[0]).toMatchObject({
      period: 1,
      clock: "11:32",
      awayScore: 3,
      homeScore: 0,
      scoringPlay: true,
      teamAbbr: "LAL",
    });
    expect(result!.plays[1].teamAbbr).toBe("BOS");
  });

  it("feature-detects shot coordinates — hasShotData true only when present", async () => {
    mockFetch({
      boxscore: teamsBox,
      plays: [
        {
          id: "1",
          period: { number: 1 },
          clock: { displayValue: "10:00" },
          text: "Made shot",
          awayScore: "2",
          homeScore: "0",
          scoringPlay: true,
          team: { id: "24" },
          coordinate: { x: 25, y: 40 },
        },
      ],
    });
    const withCoords = await fetchPlayByPlay("401584793");
    expect(withCoords!.hasShotData).toBe(true);
    expect(withCoords!.plays[0].shot).toEqual({ x: 25, y: 40, made: true });
  });

  it("hasShotData is false when ESPN omits coordinate data entirely", async () => {
    mockFetch({
      boxscore: teamsBox,
      plays: [
        {
          id: "1",
          period: { number: 1 },
          clock: { displayValue: "10:00" },
          text: "Made shot",
          awayScore: "2",
          homeScore: "0",
          scoringPlay: true,
          team: { id: "24" },
        },
      ],
    });
    const noCoords = await fetchPlayByPlay("401584793");
    expect(noCoords!.hasShotData).toBe(false);
    expect(noCoords!.plays[0].shot).toBeNull();
  });

  it("handles a play with an unresolvable team id without throwing", async () => {
    mockFetch({
      boxscore: teamsBox,
      plays: [
        {
          id: "1",
          period: { number: 2 },
          clock: { displayValue: "5:00" },
          text: "Timeout",
          awayScore: "10",
          homeScore: "12",
          scoringPlay: false,
          team: { id: "999" },
        },
      ],
    });
    const result = await fetchPlayByPlay("401584793");
    expect(result!.plays[0].teamAbbr).toBeNull();
  });
});
