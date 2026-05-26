#!/usr/bin/env node
// stage-midday-refresh.mjs — Validate and stage midday refresh outputs before bot commit.

import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

const MIDDAY_PATHS = [
  "client/src/lib/sentimentData.ts",
  "client/src/lib/momentumData.ts",
  "client/src/lib/watchGuideData.ts",
  "client/src/lib/lineMovementData.ts",
];

execSync("node scripts/validate-generated-structure.mjs", { cwd: ROOT, stdio: "inherit" });

execSync(`git add ${MIDDAY_PATHS.map((p) => `"${p}"`).join(" ")}`, {
  cwd: ROOT,
  stdio: "inherit",
});
