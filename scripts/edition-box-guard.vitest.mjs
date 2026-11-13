import { describe, expect, it } from "vitest";
import {
  collectEditionBoxErrors,
  playerLinesFromSummary,
  pulseIndexConsistencyErrors,
  tickerFinalCoverageErrors,
} from "./lib/edition-box-guard.mjs";

describe("edition box guard", () => {
  it("reads a counting line from an ESPN summary box", () => {
    const lines = playerLinesFromSummary({
      boxscore: {
        players: [
          {
            team: { abbreviation: "BKN" },
            statistics: [
              {
                athletes: [
                  {
                    didNotPlay: false,
                    athlete: { displayName: "Egor Demin" },
                    stats: ["23", "22", "5-8", "4-6", "8-10", "1", "1", "1", "1", "0", "0", "1", "2", "+29"],
                  },
                  {
                    didNotPlay: true,
                    athlete: { displayName: "Nolan Traore" },
                    stats: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    });
    expect(lines).toEqual([
      {
        player: "Egor Demin",
        team: "BRK",
        pts: 22,
        reb: 1,
        ast: 1,
        stl: 1,
        blk: 0,
        tpm: 4,
        pm: 29,
      },
    ]);
  });

  it("rejects the November 12 failure: a duplicate card, a mismatched blurb, and a short final list", () => {
    const pulseIndex = [
      {
        rank: 1,
        player: "Cam Thomas",
        keyStats: "41 PTS · 7 AST · 5 REB",
        note: "Thomas scored 41.",
        rationale: "Thomas leads the slate.",
      },
      {
        rank: 10,
        player: "Cam Thomas",
        keyStats: "Team context — Cam Thomas already ranked 1",
        note: "The desk fills rank 10 with Tyrese Haliburton, whose 23-11 performance won it.",
        rationale: "Haliburton's 23-11 fills rank 10.",
      },
    ];
    const consistency = pulseIndexConsistencyErrors(pulseIndex);
    expect(consistency.some((error) => error.includes("duplicate Pulse player Cam Thomas"))).toBe(true);
    expect(consistency.some((error) => error.includes("does not mention thomas"))).toBe(true);
    expect(consistency.some((error) => error.includes("no point total"))).toBe(true);

    const coverage = tickerFinalCoverageErrors(
      [{ awayTeam: "BRK", awayScore: 145, homeTeam: "NOP", homeScore: 111 }],
      [
        { text: "FINAL: BRK 145, NOP 111 — Nets" },
        { text: "FINAL: ORL 123, UTA 108 — Magic" },
      ],
    );
    expect(coverage).toEqual(["ticker final ORL 123, UTA 108 missing from gameResults"]);
  });

  it("rejects a top line and a Pulse card that disagree with the box", () => {
    const finals = [
      {
        awayTeam: "LAL",
        homeTeam: "MIL",
        awayScore: 123,
        homeScore: 112,
        playerLines: [
          { player: "Luka Doncic", team: "LAL", pts: 32, reb: 5, ast: 5, stl: 2, blk: 0, tpm: 5, pm: 21 },
        ],
      },
    ];
    const errors = collectEditionBoxErrors(
      {
        pulseIndex: [
          {
            rank: 1,
            player: "LeBron James",
            keyStats: "32 PTS · 10 AST · 8 REB",
            note: "James posted 32-10-8.",
            rationale: "James leads because of the near triple-double.",
          },
        ],
        tickerItems: [{ text: "FINAL: LAL 123, MIL 112 — Lakers" }],
        gameResults: [
          {
            awayTeam: "LAL",
            homeTeam: "MIL",
            awayScore: 123,
            homeScore: 112,
            topPerformer: "LeBron James",
            topLine: "32 PTS · 10 AST · 8 REB",
          },
        ],
        statLeaders: [{ category: "Points", player: "LeBron James", value: "32" }],
      },
      finals,
    );
    expect(errors.some((error) => error.includes("LeBron James is not in the box"))).toBe(true);
    expect(errors.some((error) => error.includes("Pulse player LeBron James is not in the ESPN boxes"))).toBe(true);
    expect(errors.some((error) => error.includes("stat leader LeBron James is not in the ESPN boxes"))).toBe(true);
  });

  it("accepts a card whose counting line matches the box, including an assist tie", () => {
    const lines = [
      { player: "Dylan Harper", team: "SAS", pts: 18, reb: 6, ast: 10, stl: 4, blk: 1, tpm: 2, pm: 19 },
      { player: "Andrew Nembhard", team: "IND", pts: 17, reb: 2, ast: 10, stl: 0, blk: 0, tpm: 3, pm: 17 },
    ];
    const errors = collectEditionBoxErrors(
      {
        pulseIndex: [
          {
            rank: 1,
            player: "Dylan Harper",
            keyStats: "18 PTS · 6 REB · 10 AST",
            note: "Harper had 10 assists.",
            rationale: "Harper's 10 assists tie the slate high.",
          },
        ],
        tickerItems: [],
        gameResults: [],
        statLeaders: [{ category: "Assists", player: "Andrew Nembhard", value: "10" }],
      },
      [{ awayTeam: "SAS", homeTeam: "CHI", awayScore: 124, homeScore: 119, playerLines: lines }],
    );
    expect(errors.filter((error) => /Assists|Harper keyStats|does not match/.test(error))).toEqual([]);
    expect(errors).toContain("missing gameResults for SAS @ CHI");
  });
});
