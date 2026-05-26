#!/usr/bin/env node
// stage-weekly-edition.mjs — Validate and stage weekly generator outputs before bot commit.

import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

const WEEKLY_PATHS = [
  "client/src/lib/tradeValueData.ts",
  "client/src/lib/lineupData.ts",
  "client/src/lib/tacticsData.ts",
  "client/src/lib/projectionsData.ts",
  "client/src/lib/draftData.ts",
  "client/src/lib/clutchData.ts",
  "client/src/lib/tradeSimData.ts",
  "client/src/lib/communityPulseData.ts",
];

execSync("node scripts/validate-generated-structure.mjs", { cwd: ROOT, stdio: "inherit" });

execSync(`git add ${WEEKLY_PATHS.map((p) => `"${p}"`).join(" ")}`, {
  cwd: ROOT,
  stdio: "inherit",
});
