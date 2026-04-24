#!/usr/bin/env node
// Prints "true" if daily generation should run (generatorActive), else "false".
// Used by .github/workflows/daily-update.yml — replaces month-only bash logic so
// free-agency / summer-league windows are not silently skipped.

import { generatorActive } from "./lib/season-mode.mjs";

process.stdout.write(generatorActive(new Date()) ? "true" : "false");
