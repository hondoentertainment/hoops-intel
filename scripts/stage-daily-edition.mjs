#!/usr/bin/env node
// stage-daily-edition.mjs — Consistent git staging for bot content commits.

import { execSync } from "child_process";

const PATHS = ["client/src/lib/", "public/feed.xml", "public/sitemap.xml", "public/og/"];

execSync(`git add ${PATHS.map((p) => `"${p}"`).join(" ")}`, { stdio: "inherit" });
