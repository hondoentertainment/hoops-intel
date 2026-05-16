#!/usr/bin/env node
/**
 * Validates auto-generated TS data beyond syntax (esbuild):
 * - playoffData.ts synced region: unique seriesId, real teams ∈ NBA abbreviations
 * - Critical *Data.ts files parse as TS
 *
 * Called from CI verify job alongside validate-schema where appropriate.
 */

import { readFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { validateOutput } from "./lib/validate-output.mjs";
import { GAME_ID_PATTERN, isEspnSyncedTeamAbbrev } from "./lib/content-quality-constants.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

/** @returns {string} */
export function playbookSyncSlice() {
  const path = join(ROOT, "client/src/lib/playoffData.ts");
  const raw = readFileSync(path, "utf8");
  const a = raw.indexOf("// BEGIN_PLAYOFF_SERIES_SYNC");
  const b = raw.indexOf("// END_PLAYOFF_SERIES_SYNC");
  if (a === -1 || b === -1 || b <= a) {
    throw new Error("playoffData.ts missing BEGIN/END_PLAYOFF_SERIES_SYNC markers");
  }
  return raw.slice(a, b);
}

export function validatePlayoffStructure() {
  const inner = playbookSyncSlice();
  if (!/\bseriesId:\s*"/.test(inner)) return { ok: true, note: "empty playoff sync region" };

  const ids = [...inner.matchAll(/seriesId:\s*"([^"]+)"/g)].map((m) => m[1]);
  const seen = new Set();
  for (const id of ids) {
    assertCond(!seen.has(id), `duplicate seriesId in playoff sync: "${id}"`);
    seen.add(id);
  }

  /** @type {Iterable<string>} */
  function* seriesObjects() {
    const re = /\{\s*\n\s*seriesId:/g;
    let m;
    while ((m = re.exec(inner)) !== null) {
      const braceStart = m.index;
      let depth = 0;
      let inString = false;
      let esc = false;
      for (let i = braceStart; i < inner.length; i++) {
        const ch = inner[i];
        if (esc) {
          esc = false;
          continue;
        }
        if (ch === "\\") {
          esc = true;
          continue;
        }
        if (ch === "\"") {
          inString = !inString;
          continue;
        }
        if (inString) continue;
        if (ch === "{") depth++;
        if (ch === "}") {
          depth--;
          if (depth === 0) {
            yield inner.slice(braceStart, i + 1);
            break;
          }
        }
      }
    }
  }

  for (const slab of seriesObjects()) {
    const teams = [...slab.matchAll(/\b(?:higher|lower)Team:\s*"([^"]+)"/g)].map((x) => x[1]);
    for (const t of teams) {
      if (!t || t === "TBD") continue;
      assertCond(
        isEspnSyncedTeamAbbrev(t),
        `playoff sync has unknown team abbreviation "${t}" (series contains: ${teams.join(", ")})`,
      );
    }
  }

  return { ok: true };
}

function assertCond(c, msg) {
  if (!c) throw new Error(msg);
}

export function validateWorldClassRoutes() {
  const requiredFiles = [
    "client/src/lib/gameCenter.ts",
    "client/src/lib/playerIntel.ts",
    "client/src/pages/GameCenter.tsx",
    "client/src/components/MobileBottomNav.tsx",
    "api/game-center.ts",
    "api/player-intel.ts",
  ];
  for (const rel of requiredFiles) {
    assertCond(existsSync(join(ROOT, rel)), `missing world-class route contract file: ${rel}`);
  }

  const app = readFileSync(join(ROOT, "client/src/App.tsx"), "utf8");
  assertCond(app.includes('path="/game/:gameId"'), "App.tsx missing /game/:gameId route");

  const pulse = readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8");
  const gameIds = [...pulse.matchAll(/gameId:\s*"([^"]+)"/g)].map((m) => m[1]);
  for (const id of gameIds) {
    assertCond(GAME_ID_PATTERN.test(id), `invalid canonical gameId for Game Center: ${id}`);
  }

  const gameCenter = readFileSync(join(ROOT, "client/src/lib/gameCenter.ts"), "utf8");
  for (const symbol of ["getGameCenterById", "getAllGameCenterGames", "makeGameId"]) {
    assertCond(gameCenter.includes(`function ${symbol}`) || gameCenter.includes(`const ${symbol}`), `gameCenter.ts missing ${symbol}`);
  }

  const playerIntel = readFileSync(join(ROOT, "client/src/lib/playerIntel.ts"), "utf8");
  assertCond(playerIntel.includes("getPlayerIntelBySlug"), "playerIntel.ts missing getPlayerIntelBySlug");

  const sitemap = existsSync(join(ROOT, "public/sitemap.xml"))
    ? readFileSync(join(ROOT, "public/sitemap.xml"), "utf8")
    : "";
  if (sitemap) {
    const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const seen = new Set();
    for (const loc of locs) {
      assertCond(!seen.has(loc), `duplicate sitemap URL: ${loc}`);
      seen.add(loc);
      assertCond(!/%20|\s/.test(loc), `sitemap URL contains whitespace: ${loc}`);
      const team = loc.match(/\/team\/([^/?#]+)/)?.[1];
      if (team) assertCond(/^[a-z]{3}$/.test(team), `sitemap team URL is not lowercase 3-letter code: ${loc}`);
      const game = loc.match(/\/game\/([^/?#]+)/)?.[1];
      if (game) assertCond(GAME_ID_PATTERN.test(game), `sitemap game URL has invalid gameId: ${loc}`);
    }
  }

  return { ok: true };
}

async function main() {
  const errors = [];

  try {
    validatePlayoffStructure();
    console.log("✅ playbook sync structure OK");
  } catch (e) {
    errors.push(String(e.message || e));
    console.error("❌ playbook sync:", e.message || e);
  }

  try {
    validateWorldClassRoutes();
    console.log("✅ world-class route contracts OK");
  } catch (e) {
    errors.push(String(e.message || e));
    console.error("❌ world-class route contracts:", e.message || e);
  }

  const phase2Ts = [
    join(ROOT, "client/src/lib/watchGuideData.ts"),
    join(ROOT, "client/src/lib/sentimentData.ts"),
    join(ROOT, "client/src/lib/momentumData.ts"),
    join(ROOT, "client/src/lib/podcastData.ts"),
    join(ROOT, "client/src/lib/historyData.ts"),
    join(ROOT, "client/src/lib/refData.ts"),
    join(ROOT, "client/src/lib/pulseData.ts"),
    join(ROOT, "client/src/lib/playoffData.ts"),
  ];

  for (const abs of phase2Ts) {
    if (!existsSync(abs)) continue;
    const chk = await validateOutput(abs);
    if (!chk.ok) errors.push(`${abs}: ${chk.reason}`);
  }

  if (errors.length) {
    console.error("\n❌ Generated structure validation failed:\n", errors.join("\n"));
    process.exit(1);
  }
  console.log("✅ TypeScript literal files parse cleanly (esbuild)");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
