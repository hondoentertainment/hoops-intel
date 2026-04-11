import { describe, it, expect, vi, beforeEach } from "vitest";

// We need to test the parseGame logic by importing and calling fetchScoreboard
// with mocked fetch
describe("espnApi", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  const mockESPNEvent = {
    id: "401585001",
    competitions: [
      {
        status: {
          type: { state: "post", completed: true, shortDetail: "Final" },
          displayClock: "0:00",
          period: 4,
        },
        competitors: [
          {
            homeAway: "home",
            team: { abbreviation: "LAL" },
            score: "118",
            records: [{ summary: "46-25" }],
          },
          {
            homeAway: "away",
            team: { abbreviation: "BOS" },
            score: "112",
            records: [{ summary: "50-19" }],
          },
        ],
        venue: { fullName: "Crypto.com Arena" },
        broadcasts: [{ names: ["ESPN"] }],
      },
    ],
  };

  const mockPreGameEvent = {
    id: "401585002",
    competitions: [
      {
        status: {
          type: { state: "pre", completed: false, shortDetail: "7:30 PM ET" },
          displayClock: "0:00",
          period: 0,
        },
        competitors: [
          {
            homeAway: "home",
            team: { abbreviation: "DEN" },
            score: "0",
            records: [{ summary: "42-27" }],
          },
          {
            homeAway: "away",
            team: { abbreviation: "LAL" },
            score: "0",
            records: [{ summary: "46-25" }],
          },
        ],
        venue: { fullName: "Ball Arena" },
        broadcasts: [{ names: ["TNT"] }],
      },
    ],
  };

  const mockLiveEvent = {
    id: "401585003",
    competitions: [
      {
        status: {
          type: { state: "in", completed: false, shortDetail: "Q3 5:42" },
          displayClock: "5:42",
          period: 3,
        },
        competitors: [
          {
            homeAway: "home",
            team: { abbreviation: "MIA" },
            score: "78",
            records: [{ summary: "38-31" }],
          },
          {
            homeAway: "away",
            team: { abbreviation: "ATL" },
            score: "82",
            records: [{ summary: "40-29" }],
          },
        ],
        venue: { fullName: "Kaseya Center" },
        broadcasts: [],
      },
    ],
  };

  it("fetchScoreboard parses completed game correctly", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ events: [mockESPNEvent] }),
      })
    );

    const { fetchScoreboard } = await import("../lib/espnApi");
    const result = await fetchScoreboard();

    expect(result.games).toHaveLength(1);
    const game = result.games[0];
    expect(game.id).toBe("401585001");
    expect(game.status).toBe("post");
    expect(game.homeTeam).toBe("LAL");
    expect(game.awayTeam).toBe("BOS");
    expect(game.homeScore).toBe(118);
    expect(game.awayScore).toBe(112);
    expect(game.homeRecord).toBe("46-25");
    expect(game.awayRecord).toBe("50-19");
    expect(game.venue).toBe("Crypto.com Arena");
    expect(game.tv).toBe("ESPN");
    expect(result.fetchedAt).toBeGreaterThan(0);
  });

  it("fetchScoreboard parses pre-game correctly", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ events: [mockPreGameEvent] }),
      })
    );

    const { fetchScoreboard } = await import("../lib/espnApi");
    const result = await fetchScoreboard();

    const game = result.games[0];
    expect(game.status).toBe("pre");
    expect(game.homeTeam).toBe("DEN");
    expect(game.awayTeam).toBe("LAL");
    expect(game.tv).toBe("TNT");
  });

  it("fetchScoreboard parses live game correctly", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ events: [mockLiveEvent] }),
      })
    );

    const { fetchScoreboard } = await import("../lib/espnApi");
    const result = await fetchScoreboard();

    const game = result.games[0];
    expect(game.status).toBe("in");
    expect(game.clock).toBe("5:42");
    expect(game.period).toBe(3);
    expect(game.homeScore).toBe(78);
    expect(game.awayScore).toBe(82);
    expect(game.tv).toBe("Local"); // No broadcasts
  });

  it("fetchScoreboard appends date query param when provided", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ events: [] }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const { fetchScoreboard } = await import("../lib/espnApi");
    await fetchScoreboard("20260324");

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining("dates=20260324")
    );
  });

  it("fetchScoreboard throws on non-ok response", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
      })
    );

    const { fetchScoreboard } = await import("../lib/espnApi");
    await expect(fetchScoreboard()).rejects.toThrow("ESPN API error: 500");
  });

  it("fetchScoreboard handles empty events array", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ events: [] }),
      })
    );

    const { fetchScoreboard } = await import("../lib/espnApi");
    const result = await fetchScoreboard();
    expect(result.games).toEqual([]);
  });

  it("fetchScoreboard handles missing events field", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    const { fetchScoreboard } = await import("../lib/espnApi");
    const result = await fetchScoreboard();
    expect(result.games).toEqual([]);
  });

  it("fetchStandings throws on non-ok response", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 503,
      })
    );

    const { fetchStandings } = await import("../lib/espnApi");
    await expect(fetchStandings()).rejects.toThrow("ESPN standings error: 503");
  });

  it("handles multiple games in a single scoreboard", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: () =>
          Promise.resolve({
            events: [mockESPNEvent, mockPreGameEvent, mockLiveEvent],
          }),
      })
    );

    const { fetchScoreboard } = await import("../lib/espnApi");
    const result = await fetchScoreboard();
    expect(result.games).toHaveLength(3);
    expect(result.games[0].status).toBe("post");
    expect(result.games[1].status).toBe("pre");
    expect(result.games[2].status).toBe("in");
  });
});
