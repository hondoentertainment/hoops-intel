import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StandingsBoard from "../components/StandingsBoard";
import {
  cutoffAfter,
  parseEspnStandings,
  sortStandings,
  zoneForSeed,
  type NbaStandings,
  type StandingRow,
} from "../lib/standings";
import { TEAM_NAMES } from "../lib/identity";

const EAST = ["BOS", "PHI", "DET", "ATL", "MIA", "NY", "CLE", "TOR", "ORL", "IND", "CHA", "WSH", "BKN", "CHI", "MIL"];
const WEST = ["SA", "LAL", "HOU", "POR", "MIN", "MEM", "GS", "OKC", "DEN", "DAL", "PHX", "NO", "LAC", "SAC", "UTAH"];

function entry(abbr: string, seed: number) {
  const wins = seed;
  const losses = 16 - seed;
  const pct = wins / (wins + losses);
  return {
    team: { abbreviation: abbr, displayName: `${abbr} Full`, shortDisplayName: abbr },
    stats: [
      { name: "wins", displayValue: String(wins), value: wins },
      { name: "losses", displayValue: String(losses), value: losses },
      { name: "winPercent", displayValue: pct.toFixed(3).replace(/^0/, ""), value: pct },
      { name: "gamesBehind", displayValue: seed === 1 ? "-" : String((seed - 1) / 2), value: seed === 1 ? 0 : (seed - 1) / 2 },
      { name: "streak", displayValue: seed % 2 ? "W3" : "L2", value: seed % 2 ? 3 : -2 },
      { name: "playoffSeed", displayValue: String(seed), value: seed },
      { name: "Last Ten Games", displayValue: "6-4" },
      { name: "Home", displayValue: "4-2" },
      { name: "Road", displayValue: "3-3" },
    ],
  };
}

function payload(east = EAST, west = WEST) {
  return {
    season: { displayName: "2026-27" },
    children: [
      {
        name: "Eastern Conference",
        abbreviation: "East",
        isConference: true,
        standings: { entries: [...east].reverse().map((abbr, index) => entry(abbr, east.length - index)) },
      },
      {
        name: "Western Conference",
        abbreviation: "West",
        isConference: true,
        standings: { entries: west.map((abbr, index) => entry(abbr, index + 1)) },
      },
    ],
  };
}

function board(): NbaStandings {
  return parseEspnStandings(payload(), 1_700_000_000_000);
}

describe("parseEspnStandings", () => {
  it("returns both conferences, all 30 teams, in seed order", () => {
    const parsed = board();
    expect(parsed.seasonLabel).toBe("2026-27");
    expect(parsed.east).toHaveLength(15);
    expect(parsed.west).toHaveLength(15);
    expect(parsed.east.map((row) => row.seed)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    expect(parsed.west.map((row) => row.seed)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    const codes = [...parsed.east, ...parsed.west].map((row) => row.team);
    expect(new Set(codes).size).toBe(30);
    for (const code of codes) expect(TEAM_NAMES[code]).toBeTruthy();
  });

  it("maps ESPN abbreviations onto team-page codes", () => {
    const parsed = board();
    const bySeed = (rows: StandingRow[], seed: number) => rows.find((row) => row.seed === seed);
    expect(bySeed(parsed.east, 6)?.team).toBe("NYK");
    expect(bySeed(parsed.east, 12)?.team).toBe("WAS");
    expect(bySeed(parsed.east, 13)?.team).toBe("BRK");
    expect(bySeed(parsed.west, 1)?.team).toBe("SAS");
    expect(bySeed(parsed.west, 7)?.team).toBe("GSW");
    expect(bySeed(parsed.west, 12)?.team).toBe("NOP");
    expect(bySeed(parsed.west, 15)?.team).toBe("UTA");
  });

  it("marks playoff, play-in, and out cutoffs from the seed", () => {
    expect(zoneForSeed(1)).toBe("playoff");
    expect(zoneForSeed(6)).toBe("playoff");
    expect(zoneForSeed(7)).toBe("play-in");
    expect(zoneForSeed(10)).toBe("play-in");
    expect(zoneForSeed(11)).toBe("out");
    expect(zoneForSeed(15)).toBe("out");
    const leader = board().east[0];
    expect(leader.gb).toBe("—");
    expect(leader.zone).toBe("playoff");
    expect(leader.home).toBe("4-2");
    expect(leader.away).toBe("3-3");
    expect(leader.last10).toBe("6-4");
  });

  it("rejects a partial conference instead of inventing the missing teams", () => {
    expect(() => parseEspnStandings(payload(EAST.slice(0, 14), WEST))).toThrow(/15/);
  });

  it("rejects an unknown abbreviation", () => {
    const east = [...EAST];
    east[0] = "ZZZ";
    expect(() => parseEspnStandings(payload(east, WEST))).toThrow(/unknown team/i);
  });

  it("rejects a payload that is not the standings document", () => {
    expect(() => parseEspnStandings({ code: 404 })).toThrow(/incomplete/);
  });
});

describe("sortStandings", () => {
  it("sorts by wins without dropping a team, and only draws cut lines in seed order", () => {
    const east = board().east;
    const byWins = sortStandings(east, "wins", "desc");
    expect(byWins).toHaveLength(15);
    expect(byWins[0].wins).toBeGreaterThan(byWins[1].wins);
    expect(byWins.map((row) => row.team).sort()).toEqual(east.map((row) => row.team).sort());
    expect(cutoffAfter(east[5], "rank", "asc")).toBe("play-in");
    expect(cutoffAfter(east[9], "rank", "asc")).toBe("out");
    expect(cutoffAfter(east[5], "wins", "desc")).toBeNull();
    expect(cutoffAfter(east[5], "rank", "desc")).toBeNull();
  });

  it("treats a win streak as hotter than a loss streak", () => {
    const sorted = sortStandings(board().east, "streak", "desc");
    expect(sorted[0].streak.startsWith("W")).toBe(true);
    expect(sorted.at(-1)?.streak.startsWith("L")).toBe(true);
  });
});

describe("StandingsBoard", () => {
  it("renders every team, the cut lines, and team-page links", () => {
    render(<StandingsBoard data={board()} loading={false} error={null} onRetry={() => undefined} />);
    expect(screen.getAllByTestId("standings-row")).toHaveLength(30);
    expect(screen.getAllByText("Play-in · seeds 7–10")).toHaveLength(2);
    expect(screen.getAllByText("Out · seeds 11–15")).toHaveLength(2);
    expect(screen.getByRole("link", { name: /NYK/ })).toHaveAttribute("href", "/team/nyk");
    expect(screen.getByRole("link", { name: /BRK/ })).toHaveAttribute("href", "/team/brk");
    expect(screen.getByRole("link", { name: /UTA/ })).toHaveAttribute("href", "/team/uta");
    expect(screen.getByText(/2026-27 records from ESPN/)).toBeInTheDocument();
  });

  it("leaves the table empty when the feed fails", () => {
    render(
      <StandingsBoard data={null} loading={false} error="ESPN standings error: 503" onRetry={() => undefined} />,
    );
    expect(screen.queryByTestId("standings-row")).toBeNull();
    expect(screen.getByRole("alert")).toHaveTextContent(/unavailable/i);
    expect(screen.getByRole("alert")).toHaveTextContent(/guessed/i);
    expect(screen.queryByText("0-0")).toBeNull();
  });

  it("re-sorts the visible rows", async () => {
    const user = userEvent.setup();
    render(<StandingsBoard data={board()} loading={false} error={null} onRetry={() => undefined} />);
    const east = document.getElementById("standings-east");
    expect(east?.querySelector("[data-testid='standings-row']")?.getAttribute("data-team")).toBe("BOS");
    await user.click(screen.getAllByRole("button", { name: "W" })[0]);
    expect(east?.querySelector("[data-testid='standings-row']")?.getAttribute("data-team")).toBe("MIL");
  });
});

describe("fetchStandings", () => {
  it("requests the v2 standings feed and parses it", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(payload()),
    });
    vi.stubGlobal("fetch", fetchMock);
    const { fetchStandings } = await import("../lib/espnApi");
    const result = await fetchStandings();
    expect(fetchMock).toHaveBeenCalledWith("https://site.api.espn.com/apis/v2/sports/basketball/nba/standings");
    expect(result.east).toHaveLength(15);
    expect(result.west).toHaveLength(15);
    vi.unstubAllGlobals();
  });

  it("does not turn a failed response into records", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 503,
      }),
    );
    const { fetchStandings } = await import("../lib/espnApi");
    await expect(fetchStandings()).rejects.toThrow("ESPN standings error: 503");
    vi.unstubAllGlobals();
  });
});
