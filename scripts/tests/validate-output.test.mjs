import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync, readFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { hasCompleteModuleEnding, validateOutput } from "../lib/validate-output.mjs";
import { countProjectedTeams } from "../generate-projections.mjs";

test("hasCompleteModuleEnding accepts closed object / export endings", () => {
  assert.equal(hasCompleteModuleEnding("};"), true);
  assert.equal(hasCompleteModuleEnding("}"), true);
  assert.equal(hasCompleteModuleEnding(");"), true);
  assert.equal(hasCompleteModuleEnding('export const x = 1;'), true);
});

test("hasCompleteModuleEnding accepts the #373 helper-assignment close", () => {
  assert.equal(
    hasCompleteModuleEnding("(projectionsData as ProjectionsData).teams = _allTeams;"),
    true,
  );
});

test("hasCompleteModuleEnding rejects mid-object / truncated last lines", () => {
  assert.equal(hasCompleteModuleEnding('narrative: "still going",'), false);
  assert.equal(hasCompleteModuleEnding("currentWins: 64,"), false);
  assert.equal(hasCompleteModuleEnding('weeklyNarrative: "cut off'), false);
  assert.equal(hasCompleteModuleEnding(""), false);
});

test("validateOutput accepts a module that ends with a helper assignment", async () => {
  const dir = mkdtempSync(join(tmpdir(), "validate-output-"));
  const file = join(dir, "projectionsData.ts");
  writeFileSync(
    file,
    `export interface ProjectionsData { teams: { team: string }[] }
const _allTeams = [{ team: "OKC" }, { team: "SAS" }];
export const projectionsData: ProjectionsData = {
  teams: [],
};
(projectionsData as ProjectionsData).teams = _allTeams;
`,
    "utf8",
  );
  const check = await validateOutput(file);
  assert.equal(check.ok, true, check.reason);
});

test("validateOutput still flags a truncated object literal", async () => {
  const dir = mkdtempSync(join(tmpdir(), "validate-output-"));
  const file = join(dir, "truncated.ts");
  writeFileSync(
    file,
    `export const projectionsData = {
  teams: [
    { team: "OKC", conference: "west",
`,
    "utf8",
  );
  const check = await validateOutput(file);
  assert.equal(check.ok, false);
  assert.match(check.reason, /truncated|syntax/);
});

test("weekly runner gives Projections the same extra timeout as Trade Simulator", () => {
  const src = readFileSync(new URL("../generate-all-weekly.mjs", import.meta.url), "utf8");
  assert.match(
    src,
    /name:\s*"Projections"[\s\S]{0,160}timeoutMs:\s*480_000/,
  );
});

const INTERFACE_AND_RISER = `
export interface TeamProjection {
  team: string;
  conference: "east" | "west";
}
export const projectionsData = {
  biggestRiser: { team: "HOU", change: "+1" },
  teams: [
`;

function teamRow(abbr, conference = "west") {
  return `    { team: "${abbr}", conference: "${conference}", currentWins: 1 },`;
}

test("countProjectedTeams ignores the interface union, riser fields, and bogus abbrevs", () => {
  const twentyNine = Array.from({ length: 29 }, (_, i) =>
    teamRow(["ATL", "BOS", "BKN", "CHA", "CHI", "CLE", "DAL", "DEN", "DET", "GSW",
      "HOU", "IND", "LAC", "LAL", "MEM", "MIA", "MIL", "MIN", "NOP", "NYK",
      "OKC", "ORL", "PHI", "PHX", "POR", "SAC", "SAS", "TOR", "UTA"][i]),
  ).join("\n");
  const src = `${INTERFACE_AND_RISER}\n${twentyNine}\n${teamRow("SAN")}\n  ],\n};\n`;
  assert.equal(countProjectedTeams(src), 29);
});

test("countProjectedTeams accepts 30 distinct team rows", () => {
  const thirty = ["ATL", "BOS", "BKN", "CHA", "CHI", "CLE", "DAL", "DEN", "DET", "GSW",
    "HOU", "IND", "LAC", "LAL", "MEM", "MIA", "MIL", "MIN", "NOP", "NYK",
    "OKC", "ORL", "PHI", "PHX", "POR", "SAC", "SAS", "TOR", "UTA", "WAS"]
    .map((abbr, i) => teamRow(abbr, i < 15 ? "east" : "west"))
    .join("\n");
  const src = `${INTERFACE_AND_RISER}\n${thirty}\n  ],\n};\n`;
  assert.equal(countProjectedTeams(src), 30);
});

test("committed projectionsData.ts still counts as a full 30-team slate", () => {
  const file = readFileSync(new URL("../../client/src/lib/projectionsData.ts", import.meta.url), "utf8");
  assert.equal(countProjectedTeams(file), 30);
});
