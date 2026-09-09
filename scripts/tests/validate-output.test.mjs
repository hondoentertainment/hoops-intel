import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync, readFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { hasCompleteModuleEnding, validateOutput } from "../lib/validate-output.mjs";

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
