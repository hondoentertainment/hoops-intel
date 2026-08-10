#!/usr/bin/env node
// generate-sitemap.mjs — Generates sitemap.xml from archive + player/team data
import { existsSync, readFileSync, statSync, writeFileSync } from "fs";
import { execFileSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import {
  SITEMAP_GAME_META,
  SITEMAP_PLAYER_META,
  SITEMAP_PLAYOFFS_HUB_META,
  SITEMAP_PLAYOFFS_HUB_OFFSEASON_META,
  SITEMAP_SERIES_META,
  SITEMAP_STATIC_ROUTES,
  SITEMAP_TEAM_META,
} from "./lib/public-routes.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const BASE = "https://hoopsintel.net";
const gitDateCache = new Map();

/** Match `slugify` in `client/src/lib/searchUtils.ts` so /player/:slug URLs align. */
function slugify(name) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const TEAM_NAMES = new Set([
  "ATL","BOS","BRK","CHA","CHI","CLE","DAL","DEN","DET","GSW",
  "HOU","IND","LAC","LAL","MEM","MIA","MIL","MIN","NOP","NYK",
  "OKC","ORL","PHI","PHX","POR","SAC","SAS","TOR","UTA","WAS",
]);

const TEAM_ALIASES = new Map([
  ["BKN", "BRK"],
  ["BK", "BRK"],
  ["GS", "GSW"],
  ["NO", "NOP"],
  ["NY", "NYK"],
  ["SA", "SAS"],
  ["WSH", "WAS"],
]);

function canonicalTeamCode(value) {
  const raw = String(value || "").trim().toUpperCase();
  const direct = TEAM_ALIASES.get(raw) ?? raw;
  return TEAM_NAMES.has(direct) ? direct : "";
}

const CANONICAL_PLAYER_NAMES = new Map([
  ["brandin-podziemski", "Brandin Podziemski"],
  ["brandon-podziemski", "Brandin Podziemski"],
  ["cam-thomas", "Cam Thomas"],
  ["cameron-thomas", "Cam Thomas"],
  ["alperen-eng-n", "Alperen Sengun"],
  ["alperen-sengun", "Alperen Sengun"],
]);

function canonicalPlayerName(name) {
  const slug = slugify(name);
  return CANONICAL_PLAYER_NAMES.get(slug) ?? name;
}

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isoDay(d) {
  if (!(d instanceof Date) || Number.isNaN(d.getTime())) return null;
  return d.toISOString().split("T")[0];
}

function fileMtimeIso(relPath) {
  const p = join(ROOT, relPath);
  if (!existsSync(p)) return null;
  return isoDay(statSync(p).mtime);
}

/** Prefer git history so clones with uniform mtimes still emit selective lastmod. */
function gitCommitIso(relPath) {
  if (gitDateCache.has(relPath)) return gitDateCache.get(relPath);
  let value = null;
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", relPath], {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) value = out;
  } catch {
    value = null;
  }
  gitDateCache.set(relPath, value);
  return value;
}

function sourceFreshnessIso(relPath) {
  return gitCommitIso(relPath) ?? fileMtimeIso(relPath);
}

function parseDisplayDate(str) {
  const t = Date.parse(str);
  return Number.isNaN(t) ? null : isoDay(new Date(t));
}

function maxIso(...dates) {
  return dates.filter(Boolean).sort().at(-1) ?? null;
}

function extractPulseEditionIso(pulseFile) {
  const m = pulseFile.match(/export const pulseEdition\s*=\s*\{[^}]*?\bdate:\s*"([^"]+)"/);
  return m ? parseDisplayDate(m[1]) : null;
}

/** Prefer content dates / source mtimes so crawlers see selective freshness. */
const STATIC_ROUTE_SOURCES = {
  "/tools": ["client/src/lib/siteNav.ts"],
  "/injuries": ["client/src/lib/pulseData.ts"],
  "/pick-em": ["client/src/lib/playoffData.ts", "client/src/pages/PickEm.tsx"],
  "/trade-value": ["client/src/lib/tradeValueData.ts"],
  "/trivia": ["client/src/pages/Trivia.tsx"],
  "/82-0": ["client/src/lib/eightyTwoZeroData.ts", "client/src/lib/eightyTwoZeroSim.ts"],
  "/performance": ["client/src/pages/Performance.tsx"],
  "/momentum": ["client/src/lib/momentumData.ts"],
  "/lineups": ["client/src/lib/lineupData.ts"],
  "/trade-simulator": ["client/src/lib/tradeSimData.ts"],
  "/clutch": ["client/src/lib/clutchData.ts"],
  "/draft": ["client/src/lib/draftData.ts"],
  "/sentiment": ["client/src/lib/sentimentData.ts"],
  "/tactics": ["client/src/lib/tacticsData.ts"],
  "/projections": ["client/src/lib/projectionsData.ts"],
  "/badges": ["client/src/lib/badgesData.ts"],
  "/community-pulse": ["client/src/lib/communityPulseData.ts"],
  "/watch-guide": ["client/src/lib/watchGuideData.ts"],
  "/podcast-companion": ["client/src/lib/podcastData.ts"],
  "/history": ["client/src/lib/historyData.ts"],
  "/refs": ["client/src/lib/refData.ts"],
  "/ask": ["client/src/pages/AskAI.tsx", "client/src/lib/archiveData.ts"],
  "/compare-players": ["client/src/pages/PlayerCompare.tsx", "client/src/lib/pulseData.ts"],
  "/pulse-methodology": ["client/src/pages/PulseMethodology.tsx"],
  "/rivals": ["client/src/pages/Rivals.tsx"],
  "/my-pulse": ["client/src/lib/pulseData.ts"],
  "/print-edition": ["client/src/lib/pulseData.ts"],
  "/widgets": ["client/src/pages/Widgets.tsx"],
  "/pro": ["client/src/pages/Pro.tsx"],
  "/betting-intel": ["client/src/lib/pulseData.ts", "client/src/lib/lineMovementData.ts"],
  "/guest-pulse": ["client/src/pages/GuestPulse.tsx"],
};

function sourcesLastmod(sources) {
  return maxIso(...(sources || []).map(sourceFreshnessIso));
}

function lastmodForLoc(loc, ctx) {
  if (loc === "/" || loc === "/archive" || loc === "/pulse-history") {
    return maxIso(ctx.editionIso, ctx.pulseMtime, loc === "/archive" ? ctx.archiveMtime : null) ?? ctx.buildDay;
  }
  if (loc === "/playoffs" || loc.startsWith("/playoffs/series/")) {
    return maxIso(ctx.playoffMtime, ctx.editionIso) ?? ctx.buildDay;
  }
  if (loc.startsWith("/player/") || loc.startsWith("/team/")) {
    return maxIso(ctx.archiveMtime, ctx.pulseMtime, ctx.editionIso) ?? ctx.buildDay;
  }
  if (loc.startsWith("/game/")) {
    const digits = loc.match(/(\d{8})$/)?.[1];
    if (digits) {
      return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6, 8)}`;
    }
    return maxIso(ctx.pulseMtime, ctx.editionIso) ?? ctx.buildDay;
  }
  // Desk surfaces tied to the morning edition inherit edition date; tool pages use source freshness only.
  const deskTied = new Set([
    "/injuries",
    "/my-pulse",
    "/print-edition",
    "/betting-intel",
    "/compare-players",
  ]);
  const sourceDate = sourcesLastmod(STATIC_ROUTE_SOURCES[loc]);
  if (deskTied.has(loc)) {
    return maxIso(sourceDate, ctx.editionIso) ?? ctx.buildDay;
  }
  return sourceDate ?? ctx.buildDay;
}

export function generate() {
  const archiveFile = readFileSync(join(ROOT, "client/src/lib/archiveData.ts"), "utf8");
  const pulseFile = readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8");
  const playoffFile = readFileSync(join(ROOT, "client/src/lib/playoffData.ts"), "utf8");

  // Extract players and teams from archive
  const players = new Set();
  const teams = new Set();
  const games = new Set();

  const playerMatches = archiveFile.matchAll(/players:\s*\[([^\]]+)\]/g);
  for (const m of playerMatches) {
    m[1].match(/"([^"]+)"/g)?.forEach((p) => players.add(p.replace(/"/g, "")));
  }
  const teamMatches = archiveFile.matchAll(/teams:\s*\[([^\]]+)\]/g);
  for (const m of teamMatches) {
    m[1].match(/"([^"]+)"/g)?.forEach((t) => teams.add(t.replace(/"/g, "")));
  }

  for (const m of pulseFile.matchAll(/gameId:\s*"([^"]+)"/g)) {
    games.add(m[1]);
  }
  const playoffGameMatches = playoffFile.matchAll(/date:\s*"([^"]+)"[\s\S]*?homeTeam:\s*"([A-Z]{3})"[\s\S]*?awayTeam:\s*"([A-Z]{3})"/g);
  for (const m of playoffGameMatches) {
    const date = m[1].replace(/-/g, "");
    games.add(`${m[3]}-${m[2]}-${date}`);
  }

  const buildDay = new Date().toISOString().split("T")[0];
  const editionIso = extractPulseEditionIso(pulseFile);
  const pulseMtime = sourceFreshnessIso("client/src/lib/pulseData.ts");
  const archiveMtime = sourceFreshnessIso("client/src/lib/archiveData.ts");
  const playoffMtime = sourceFreshnessIso("client/src/lib/playoffData.ts");
  const lastmodCtx = { buildDay, editionIso, pulseMtime, archiveMtime, playoffMtime };

  const playoffsActive =
    /status:\s*"active"/.test(playoffFile) || /eliminationGame:\s*true/.test(playoffFile);
  const playoffsHubMeta = playoffsActive
    ? SITEMAP_PLAYOFFS_HUB_META
    : SITEMAP_PLAYOFFS_HUB_OFFSEASON_META;
  const seriesMeta = playoffsActive
    ? { priority: "0.88", changefreq: "daily" }
    : SITEMAP_SERIES_META;
  const pickEmMeta = playoffsActive
    ? { priority: "0.8", changefreq: "daily" }
    : { priority: "0.65", changefreq: "daily" };

  // Keep in sync with STATIC_SITEMAP_PATHS in client/src/lib/seoConfig.ts (verified in CI)
  const staticToolPaths = SITEMAP_STATIC_ROUTES.map((route) =>
    route.loc === "/pick-em" ? { ...route, ...pickEmMeta } : route,
  );

  let urls = [
    { loc: "/", priority: "1.0", changefreq: "daily" },
    { loc: "/archive", priority: "0.8", changefreq: "daily" },
    { loc: "/pulse-history", priority: "0.7", changefreq: "daily" },
    { loc: "/playoffs", ...playoffsHubMeta },
    ...staticToolPaths.map(({ loc, priority, changefreq }) => ({ loc, priority, changefreq })),
  ];

  const seriesIds = new Set([...playoffFile.matchAll(/seriesId:\s*"([^"]+)"/g)].map((m) => m[1]));
  for (const id of seriesIds) {
    urls.push({ loc: `/playoffs/series/${id}`, ...seriesMeta });
  }

  const playerSlugs = new Map();
  for (const player of players) {
    const canonical = canonicalPlayerName(player);
    const slug = slugify(canonical);
    if (!slug || playerSlugs.has(slug)) continue;
    playerSlugs.set(slug, canonical);
    urls.push({ loc: `/player/${slug}`, ...SITEMAP_PLAYER_META });
  }
  const teamSlugs = new Set();
  for (const team of teams) {
    const code = canonicalTeamCode(team);
    if (!code || teamSlugs.has(code)) continue;
    teamSlugs.add(code);
    urls.push({ loc: `/team/${code.toLowerCase()}`, ...SITEMAP_TEAM_META });
  }
  for (const game of games) {
    if (/^[A-Z]{3}-[A-Z]{3}-\d{8}$/.test(String(game))) {
      urls.push({ loc: `/game/${game}`, ...SITEMAP_GAME_META });
    }
  }

  const seenLocs = new Set();
  urls = urls.filter((u) => {
    if (seenLocs.has(u.loc)) return false;
    seenLocs.add(u.loc);
    return true;
  });

  for (const u of urls) {
    u.lastmod = lastmodForLoc(u.loc, lastmodCtx);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${xmlEscape(BASE + u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

  writeFileSync(join(ROOT, "public", "sitemap.xml"), xml, "utf8");
  const distinctLastmods = new Set(urls.map((u) => u.lastmod));
  console.log(`✓ Sitemap written with ${urls.length} URLs (${distinctLastmods.size} distinct lastmod dates)`);
}

// ── Standalone CLI entry point ────────────────────────────
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generate();
}
