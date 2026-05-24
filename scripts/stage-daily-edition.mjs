#!/usr/bin/env node
// stage-daily-edition.mjs — Consistent git staging for bot content commits.

import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

// Fail fast before staging broken AI output (prevents daily-update CI gate failures).
execSync("node scripts/validate-generated-structure.mjs", { cwd: ROOT, stdio: "inherit" });

const PATHS = ["client/src/lib/", "public/feed.xml", "public/sitemap.xml", "public/og/"];

execSync(`git add ${PATHS.map((p) => `"${p}"`).join(" ")}`, { cwd: ROOT, stdio: "inherit" });
