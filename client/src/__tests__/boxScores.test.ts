import { describe, it, expect, vi, beforeEach } from "vitest";

describe("boxScores", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  const mockBoxScoreResponse = {
    boxscore: {
      teams: [
        {
          // Away team (index 0)
          statistics: [
            {
              stats: [
                "40-88", "45.5%", "12-30", "40.0%", "16-20", "80.0%",
                "8", "32", "40", "25", "7", "4", "12", "108",
              ],
            },
          ],
        },
        {
          // Home team (index 1)
          statistics: [
            {
              stats: [
                "44-90", "48.9%", "14-28", "50.0%", "12-15", "80.0%",
                "10", "34", "44", "28", "9", "6", "10", "114",
              ],
            },
          ],
        },
      ],
      players: [
        {
          // Away team players (index 0)
          team: { abbreviation: "ORL" },
          statistics: [
            {
              athletes: [
                {
                  athlete: {
                    displayName: "Paolo Banchero",
                    position: { abbreviation: "PF" },
                  },
                  starter: true,
                  statistics: [
                    {
                      stats: [
                        "36", "10-22", "2-5", "2-3", "1", "7", "8",
                        "4", "1", "0", "3", "2", "+2", "24",
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          // Home team players (index 1)
          team: { abbreviation: "CLE" },
          statistics: [
            {
              athletes: [
                {
                  athlete: {
                    displayName: "Evan Mobley",
                    position: { abbreviation: "C" },
                  },
                  starter: true,
                  statistics: [
                    {
                      stats: [
                        "38", "12-20", "1-2", "2-2", "3", "9", "12",
                        "3", "1", "3", "1", "3", "+8", "27",
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

  it("fetchBoxScore returns parsed box score for valid response", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockBoxScoreResponse),
      })
    );

    const { fetchBoxScore } = await import("../lib/boxScores");
    const result = await fetchBoxScore("401585001");

    expect(result).not.toBeNull();
    expect(result!.gameId).toBe("401585001");
    expect(result!.homeTeam).toBe("CLE");
    expect(result!.awayTeam).toBe("ORL");
    expect(result!.homePlayers).toHaveLength(1);
    expect(result!.awayPlayers).toHaveLength(1);

    // Check parsed player stats
    const mobley = result!.homePlayers[0];
    expect(mobley.name).toBe("Evan Mobley");
    expect(mobley.position).toBe("C");
    expect(mobley.points).toBe(27);
    expect(mobley.rebounds).toBe(12);
    expect(mobley.assists).toBe(3);
    expect(mobley.blocks).toBe(3);
    expect(mobley.starter).toBe(true);
    expect(mobley.fgm).toBe(12);
    expect(mobley.fga).toBe(20);

    const banchero = result!.awayPlayers[0];
    expect(banchero.name).toBe("Paolo Banchero");
    expect(banchero.points).toBe(24);
    expect(banchero.rebounds).toBe(8);
  });

  it("fetchBoxScore returns null for non-ok response", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, status: 404 })
    );

    const { fetchBoxScore } = await import("../lib/boxScores");
    const result = await fetchBoxScore("invalid-id");
    expect(result).toBeNull();
  });

  it("fetchBoxScore returns null when boxscore is missing", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    const { fetchBoxScore } = await import("../lib/boxScores");
    const result = await fetchBoxScore("401585001");
    expect(result).toBeNull();
  });

  it("fetchBoxScore returns null on network error", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("Network error"))
    );

    const { fetchBoxScore } = await import("../lib/boxScores");
    const result = await fetchBoxScore("401585001");
    expect(result).toBeNull();
  });

  it("fetchGameIdsForDate returns array of game IDs", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({
            events: [{ id: "401585001" }, { id: "401585002" }, { id: "401585003" }],
          }),
      })
    );

    const { fetchGameIdsForDate } = await import("../lib/boxScores");
    const ids = await fetchGameIdsForDate("20260324");
    expect(ids).toEqual(["401585001", "401585002", "401585003"]);
  });

  it("fetchGameIdsForDate returns empty array on error", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, status: 500 })
    );

    const { fetchGameIdsForDate } = await import("../lib/boxScores");
    const ids = await fetchGameIdsForDate("20260324");
    expect(ids).toEqual([]);
  });

  it("fetchGameIdsForDate handles missing events", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    const { fetchGameIdsForDate } = await import("../lib/boxScores");
    const ids = await fetchGameIdsForDate("20260324");
    expect(ids).toEqual([]);
  });

  it("parsePlayerStats handles missing athlete data gracefully", async () => {
    const responseMissingData = {
      boxscore: {
        teams: [
          { statistics: [{ stats: [] }] },
          { statistics: [{ stats: [] }] },
        ],
        players: [
          {
            team: { abbreviation: "BOS" },
            statistics: [
              {
                athletes: [
                  {
                    // Missing athlete, statistics
                    starter: false,
                  },
                ],
              },
            ],
          },
          {
            team: { abbreviation: "LAL" },
            statistics: [
              {
                athletes: [
                  {
                    athlete: { displayName: "LeBron James" },
                    // Missing position, statistics array
                    starter: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    };

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(responseMissingData),
      })
    );

    const { fetchBoxScore } = await import("../lib/boxScores");
    const result = await fetchBoxScore("401585005");

    expect(result).not.toBeNull();
    // Player with missing athlete should have "Unknown" name
    expect(result!.awayPlayers[0].name).toBe("Unknown");
    expect(result!.awayPlayers[0].starter).toBe(false);
    // Player with missing stats should default to 0
    expect(result!.homePlayers[0].name).toBe("LeBron James");
    expect(result!.homePlayers[0].points).toBe(0);
    expect(result!.homePlayers[0].rebounds).toBe(0);
  });
});
