import { describe, expect, it } from "vitest";
import { playerQueryScore } from "../lib/playerQueryRank";

describe("playerQueryScore", () => {
  const edge = { name: "VJ Edgecombe", label: "Prospect archive", teams: [] as string[] };
  const wemby = {
    name: "Victor Wembanyama",
    teams: ["SAS"],
    label: "Active",
    keyStats: "32.8 PPG · edging the field",
  };

  it("puts an exact archive name above a stat line that merely contains the letters", () => {
    expect(playerQueryScore(edge, "edgecombe")).toBeGreaterThan(playerQueryScore(wemby, "edgecombe"));
    expect(playerQueryScore(edge, "edge")).toBeGreaterThan(playerQueryScore(wemby, "edge"));
    expect(playerQueryScore(edge, "vj")).toBeGreaterThan(playerQueryScore(wemby, "vj"));
  });

  it("folds diacritics, apostrophes, and initials", () => {
    expect(playerQueryScore({ name: "Nikola Jokić" }, "jokic")).toBeGreaterThan(500);
    expect(playerQueryScore({ name: "De'Aaron Fox" }, "deaaron")).toBeGreaterThan(500);
    expect(playerQueryScore({ name: "Shai Gilgeous-Alexander", teams: ["OKC"] }, "sga")).toBeGreaterThan(
      playerQueryScore({ name: "Someone Else", keyStats: "sga mention" }, "sga"),
    );
  });

  it("matches team abbreviations and full names without beating a name hit", () => {
    const knick = { name: "Jalen Brunson", teams: ["NYK"], keyStats: "44 PTS" };
    expect(playerQueryScore(knick, "nyk")).toBeGreaterThan(0);
    expect(playerQueryScore(knick, "knicks")).toBeGreaterThan(0);
    expect(playerQueryScore(knick, "brunson")).toBeGreaterThan(playerQueryScore(knick, "knicks"));
    expect(playerQueryScore(edge, "")).toBe(0);
  });

  it("accepts last-name-first token order", () => {
    expect(playerQueryScore(edge, "edgecombe vj")).toBeGreaterThan(playerQueryScore(wemby, "edgecombe vj"));
  });
});
