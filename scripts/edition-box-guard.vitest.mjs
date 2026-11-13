import { readFileSync } from "fs";
import { describe, expect, it } from "vitest";
import {
  collectEditionBoxErrors,
  playerLinesFromSummary,
  pulseIndexConsistencyErrors,
  slateStatLeaders,
  stampStatLeadersSource,
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

  it("matches an accented surname after the prose is folded the same way as the name", () => {
    const errors = pulseIndexConsistencyErrors([
      {
        rank: 1,
        player: "Nikola Jokić",
        keyStats: "27 PTS · 11 REB · 8 AST",
        note: "Jokić finished with 27 points, 11 rebounds, and 8 assists.",
        rationale: "Jokić ranks here on the rebound and assist total.",
      },
    ]);
    expect(errors).toEqual([]);
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

  it("stamps a short rebound leader to the ESPN slate high instead of aborting", () => {
    const lines = [
      { player: "Jarrett Allen", team: "CLE", pts: 18, reb: 14, ast: 3, stl: 1, blk: 1, tpm: 0, pm: 8 },
      { player: "Domantas Sabonis", team: "SAC", pts: 16, reb: 15, ast: 6, stl: 0, blk: 0, tpm: 0, pm: 4 },
      { player: "Julius Randle", team: "BRK", pts: 22, reb: 8, ast: 5, stl: 1, blk: 0, tpm: 2, pm: 27 },
      { player: "Luka Doncic", team: "LAL", pts: 32, reb: 7, ast: 9, stl: 2, blk: 0, tpm: 4, pm: 21 },
    ];
    const leaders = slateStatLeaders(lines);
    expect(leaders.find((row) => row.category === "Rebounds")).toMatchObject({
      player: "Domantas Sabonis",
      value: "15",
    });
    expect(leaders.find((row) => row.category === "+/-")).toMatchObject({
      player: "Julius Randle",
      value: "+27",
    });

    const src = `export const tickerItems = [];
export const statLeaders = [
  {category:"Points",player:"Luka Doncic",team: "LAL",value:"32",context:"Luka's 32 led scoring."},
  {category:"Rebounds",player:"Jarrett Allen",team: "CLE",value:"14",context:"Allen's 14 rebounds led the slate."},
  {category:"Assists",player:"Luka Doncic",team: "LAL",value:"9",context:"Luka's 9 assists led."},
  {category:"3-Pointers",player:"Luka Doncic",team: "LAL",value:"4",context:"Luka's 4 threes led."},
  {category:"Blocks",player:"Jarrett Allen",team: "CLE",value:"1",context:"Allen's 1 block tied."},
  {category:"+/-",player:"Luka Doncic",team: "LAL",value:"+21",context:"Luka was plus-21."}
];
export const gameResults = [];`;
    const stamped = stampStatLeadersSource(src, lines);
    expect(stamped).toContain('player:"Domantas Sabonis"');
    expect(stamped).toContain('value:"15"');
    expect(stamped).toContain('player:"Julius Randle"');
    expect(stamped).toContain('value:"+27"');
    expect(stamped).toContain("Luka's 32 led scoring.");

    const reboundError = collectEditionBoxErrors(
      { pulseIndex: [], tickerItems: [], gameResults: [], statLeaders: [{ category: "Rebounds", player: "Jarrett Allen", value: "14" }] },
      [{ awayTeam: "CLE", homeTeam: "SAC", awayScore: 110, homeScore: 100, playerLines: lines }],
    );
    expect(reboundError.some((error) => error.includes("slate high of 15"))).toBe(true);
  });

  it("generate-edition stamps statLeaders from ESPN boxes before the box guard", () => {
    const src = readFileSync("scripts/generate-edition.mjs", "utf8");
    expect(src).toMatch(/stampStatLeadersSource/);
    expect(src).toMatch(/Official slate leaders/);
  });
});
