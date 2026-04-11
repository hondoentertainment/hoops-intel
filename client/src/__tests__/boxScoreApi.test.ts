import { describe, it, expect, vi, beforeEach } from "vitest";

describe("boxScoreApi", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  const mockSummaryResponse = {
    boxscore: {
      teams: [
        {
          // Away team (index 0)
          statistics: [
            { name: "points", displayValue: "105" },
            { name: "totalRebounds", displayValue: "42" },
            { name: "assists", displayValue: "22" },
            { name: "steals", displayValue: "8" },
            { name: "blocks", displayValue: "5" },
            { name: "turnovers", displayValue: "13" },
            { name: "fieldGoalPct", displayValue: "44.2" },
            { name: "threePointFieldGoalPct", displayValue: "35.5" },
            { name: "freeThrowPct", displayValue: "78.9" },
          ],
        },
        {
          // Home team (index 1)
          statistics: [
            { name: "points", displayValue: "121" },
            { name: "totalRebounds", displayValue: "48" },
            { name: "assists", displayValue: "28" },
            { name: "steals", displayValue: "10" },
            { name: "blocks", displayValue: "7" },
            { name: "turnovers", displayValue: "9" },
            { name: "fieldGoalPct", displayValue: "50.1" },
            { name: "threePointFieldGoalPct", displayValue: "42.3" },
            { name: "freeThrowPct", displayValue: "85.0" },
          ],
        },
      ],
      players: [
        {
          // Away team
          team: { abbreviation: "POR" },
          statistics: [
            {
              athletes: [
                {
                  athlete: {
                    displayName: "Deni Avdija",
                    position: { abbreviation: "SF" },
                  },
                  starter: true,
                  statistics: [
                    {
                      stats: [
                        "35", "8-18", "2-6", "2-2", "1", "5", "6",
                        "4", "2", "0", "2", "3", "-8", "20",
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          // Home team
          team: { abbreviation: "HOU" },
          statistics: [
            {
              athletes: [
                {
                  athlete: {
                    displayName: "Kevin Durant",
                    position: { abbreviation: "PF" },
                  },
                  starter: true,
                  statistics: [
                    {
                      stats: [
                        "36", "12-22", "4-6", "5-5", "0", "6", "6",
                        "3", "1", "1", "2", "2", "+12", "33",
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  };

  it("fetchBoxScore parses players correctly", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockSummaryResponse),
      })
    );

    const { fetchBoxScore } = await import("../lib/boxScoreApi");
    const result = await fetchBoxScore("401585010");

    expect(result).not.toBeNull();
    expect(result!.homeTeam).toBe("HOU");
    expect(result!.awayTeam).toBe("POR");

    const durant = result!.homePlayers[0];
    expect(durant.name).toBe("Kevin Durant");
    expect(durant.position).toBe("PF");
    expect(durant.points).toBe(33);
    expect(durant.rebounds).toBe(6);
    expect(durant.assists).toBe(3);
    expect(durant.fgm).toBe(12);
    expect(durant.fga).toBe(22);
    expect(durant.fg3m).toBe(4);
    expect(durant.fg3a).toBe(6);
    expect(durant.ftm).toBe(5);
    expect(durant.fta).toBe(5);
    expect(durant.plusMinus).toBe("+12");
    expect(durant.starter).toBe(true);

    const avdija = result!.awayPlayers[0];
    expect(avdija.name).toBe("Deni Avdija");
    expect(avdija.points).toBe(20);
  });

  it("fetchBoxScore returns null for non-ok response", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, status: 404 })
    );

    const { fetchBoxScore } = await import("../lib/boxScoreApi");
    const result = await fetchBoxScore("invalid");
    expect(result).toBeNull();
  });

  it("fetchBoxScore returns null when players array is too short", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({
            boxscore: {
              players: [{ team: { abbreviation: "BOS" }, statistics: [] }],
              teams: [],
            },
          }),
      })
    );

    const { fetchBoxScore } = await import("../lib/boxScoreApi");
    const result = await fetchBoxScore("401585011");
    expect(result).toBeNull();
  });

  it("fetchBoxScore returns null on network error", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("Network failure"))
    );

    const { fetchBoxScore } = await import("../lib/boxScoreApi");
    const result = await fetchBoxScore("401585012");
    expect(result).toBeNull();
  });

  it("findEspnGameId returns matching game ID", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({
            events: [
              {
                id: "401585020",
                competitions: [
                  {
                    competitors: [
                      { homeAway: "home", team: { abbreviation: "HOU" } },
                      { homeAway: "away", team: { abbreviation: "POR" } },
                    ],
                  },
                ],
              },
              {
                id: "401585021",
                competitions: [
                  {
                    competitors: [
                      { homeAway: "home", team: { abbreviation: "LAL" } },
                      { homeAway: "away", team: { abbreviation: "DEN" } },
                    ],
                  },
                ],
              },
            ],
          }),
      })
    );

    const { findEspnGameId } = await import("../lib/boxScoreApi");
    const id = await findEspnGameId("HOU", "POR", "20260324");
    expect(id).toBe("401585020");
  });

  it("findEspnGameId returns null when no match", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({
            events: [
              {
                id: "401585020",
                competitions: [
                  {
                    competitors: [
                      { homeAway: "home", team: { abbreviation: "HOU" } },
                      { homeAway: "away", team: { abbreviation: "POR" } },
                    ],
                  },
                ],
              },
            ],
          }),
      })
    );

    const { findEspnGameId } = await import("../lib/boxScoreApi");
    const id = await findEspnGameId("LAL", "BOS", "20260324");
    expect(id).toBeNull();
  });

  it("findEspnGameId returns null on network error", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("Network error"))
    );

    const { findEspnGameId } = await import("../lib/boxScoreApi");
    const id = await findEspnGameId("HOU", "POR", "20260324");
    expect(id).toBeNull();
  });
});
