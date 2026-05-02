#!/usr/bin/env node
/**
 * Validates that pulse edition context matches synced playoff bracket state.
 * Parses TypeScript exports as text — keep pulseEdition + playoff markers stable.
 */

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

const playbookPath = join(ROOT, "client/src/lib/playoffData.ts");
const pulsePath = join(ROOT, "client/src/lib/pulseData.ts");

function pulseEditionContext(raw) {
  const m = raw.match(/editionContext\s*:\s*"([^"]+)"/);
  return m?.[1] ?? null;
}

function playoffSyncInner(raw) {
  const a = raw.indexOf("// BEGIN_PLAYOFF_SERIES_SYNC");
  const b = raw.indexOf("// END_PLAYOFF_SERIES_SYNC");
  if (a === -1 || b === -1 || b <= a)
    throw new Error("playoffData.ts missing BEGIN/END_PLAYOFF_SERIES_SYNC markers");
  return raw.slice(a, b);
}

function playbookBoardHasRows(inner) {
  return /\bseriesId:\s*"/.test(inner);
}

function hasNonTbdSeries(inner) {
  const slices = inner.split(/seriesId:\s*"[^"]*"/).slice(1);
  if (slices.length === 0) return false;
  for (const s of slices) {
    const h = s.match(/higherTeam:\s*"([^"]*)"/)?.[1];
    const low = s.match(/lowerTeam:\s*"([^"]*)"/)?.[1];
    if (h && low && h !== "TBD" && low !== "TBD") return true;
  }
  return false;
}

try {
  const pulseRaw = readFileSync(pulsePath, "utf8");
  const playbookRaw = readFileSync(playbookPath, "utf8");

  const ctx = pulseEditionContext(pulseRaw);
  if (!ctx || !["regular", "playoffs", "finals"].includes(ctx)) {
    console.error("[drift] pulseEdition.editionContext missing or invalid in pulseData.ts");
    process.exit(1);
  }

  const inner = playoffSyncInner(playbookRaw);
  const boardOn = playbookBoardHasRows(inner);
  const hasRealSeries = boardOn ? hasNonTbdSeries(inner) : false;

  const expectPlayoffEdition = ctx === "playoffs" || ctx === "finals";

  if (boardOn && hasRealSeries && ctx === "regular") {
    console.error(
      `[drift] pulseData.ts has editionContext "regular" but playoffData.ts has active matchups.`,
    );
    console.error('      Set pulseEdition.editionContext to "playoffs" or "finals" during the postseason.');
    process.exit(1);
  }

  if (expectPlayoffEdition && boardOn && !hasRealSeries) {
    console.warn(
      "[drift advisory] Edition is playoffs/finals but only TBD placeholders in playoffSeries — OK during bracket lock.",
    );
  }

  if (!boardOn && expectPlayoffEdition) {
    console.warn(
      "[drift advisory] editionContext implies postseason but playoffSeries is empty — OK if transitioning.",
    );
  }

  console.log(
    `[drift] OK — editionContext=${ctx}, playoff board nonempty=${boardOn}, real matchups=${hasRealSeries}`,
  );
} catch (e) {
  console.error("[drift]", e.message || e);
  process.exit(1);
}
