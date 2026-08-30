#!/usr/bin/env node
// generate-sitemap.mjs — Generates sitemap.xml from archive + player/team data
import { existsSync, readFileSync, statSync, writeFileSync } from "fs";
import { execFileSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import {
  SITEMAP_GAME_META,
  SITEMAP_PLAYER_DESK_META,
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
  ["luka-doncic", "Luka Doncic"],
  ["nikola-jokic", "Nikola Jokic"],
  ["o-g-anunoby", "OG Anunoby"],
  ["og-anunoby", "OG Anunoby"],
  ["nic-claxton", "Nic Claxton"],
  ["nicolas-claxton", "Nic Claxton"],
  ["bub-carrington", "Bub Carrington"],
  ["carlton-carrington", "Bub Carrington"],
]);

function canonicalPlayerName(name) {
  const slug = slugify(name);
  return CANONICAL_PLAYER_NAMES.get(slug) ?? name;
}

function readExportedNameList(tsSource, exportName) {
  const block = tsSource.match(new RegExp(`export const ${exportName}\\s*=\\s*\\[([\\s\\S]*?)\\]\\s*as const`));
  if (!block) return [];
  return [...block[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
}

function loadRosterLists() {
  const rosterFile = readFileSync(join(ROOT, "client/src/lib/playerRosterStatus.ts"), "utf8");
  return {
    historical: new Set(readExportedNameList(rosterFile, "HISTORICAL_PLAYER_NAMES").map(canonicalPlayerName)),
    retired: new Set(readExportedNameList(rosterFile, "RETIRED_PLAYER_NAMES").map(canonicalPlayerName)),
    nonPlayers: new Set(readExportedNameList(rosterFile, "NON_PLAYER_NAMES").map(canonicalPlayerName)),
  };
}

/** Mirror `isIndexablePlayerProfile` so sitemap and player pages stay aligned. */
export function isSitemapIndexablePlayer(name, context, lists) {
  const canonical = canonicalPlayerName(name);
  if (lists.nonPlayers.has(canonical) || lists.historical.has(canonical)) return false;
  if (lists.retired.has(canonical)) return (context.mentions ?? 0) > 0;
  if (context.inPulse || context.hasCurrentTeam) return true;
  return (context.mentions ?? 0) >= 2;
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

/** Published timestamp on a generated data object — not git/mtime (those follow deploys). */
export function extractExportedTimestamp(fileText) {
  const exportIdx = fileText.search(/export const \w[\w]*\s*[:=]/);
  const slice = exportIdx >= 0 ? fileText.slice(exportIdx, exportIdx + 900) : fileText.slice(0, 900);
  for (const field of ["generatedDate", "date", "displayDate"]) {
    const m = slice.match(new RegExp(`\\b${field}:\\s*"([^"]+)"`));
    if (m) return parseDisplayDate(m[1]);
  }
  return null;
}

function contentTimestampIso(relPath) {
  const p = join(ROOT, relPath);
  if (!existsSync(p)) return null;
  return extractExportedTimestamp(readFileSync(p, "utf8"));
}

function contentDatesLastmod(sources) {
  return maxIso(...(sources || []).map(contentTimestampIso));
}

function extractLatestArchiveIso(archiveFile) {
  const dates = [...archiveFile.matchAll(/\bdate:\s*"(\d{4}-\d{2}-\d{2})"/g)].map((m) => m[1]);
  return maxIso(...dates);
}

/** Pulse Index membership is the only popularity signal we trust for crawl weight. */
export function playerSitemapMeta({ inPulse } = {}) {
  return inPulse ? SITEMAP_PLAYER_DESK_META : SITEMAP_PLAYER_META;
}

/** Prefer content dates / source mtimes so crawlers see selective freshness. */
export const STATIC_ROUTE_SOURCES = {
  "/tools": ["client/src/lib/siteNav.ts"],
  "/injuries": ["client/src/lib/pulseData.ts"],
  "/pick-em": ["client/src/lib/playoffData.ts", "client/src/pages/PickEm.tsx"],
  "/trade-value": ["client/src/lib/tradeValueData.ts"],
  "/trivia": ["client/src/pages/Trivia.tsx"],
  "/82-0": ["client/src/lib/eightyTwoZeroData.ts", "client/src/lib/eightyTwoZeroSim.ts"],
  "/performance": ["client/src/pages/SeasonPerformance.tsx"],
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

export function lastmodForLoc(loc, ctx) {
  if (loc === "/" || loc === "/archive" || loc === "/pulse-history") {
    return maxIso(ctx.editionIso, loc === "/archive" ? ctx.latestArchiveIso : null) ?? ctx.buildDay;
  }
  if (loc === "/playoffs" || loc.startsWith("/playoffs/series/")) {
    return maxIso(ctx.playoffContentIso, ctx.editionIso) ?? ctx.buildDay;
  }
  if (loc.startsWith("/player/") || loc.startsWith("/team/")) {
    return maxIso(ctx.editionIso, ctx.latestArchiveIso) ?? ctx.buildDay;
  }
  if (loc.startsWith("/game/")) {
    const digits = loc.match(/(\d{8})$/)?.[1];
    if (digits) {
      return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6, 8)}`;
    }
    return ctx.editionIso ?? ctx.buildDay;
  }
  const deskTied = new Set([
    "/injuries",
    "/my-pulse",
    "/print-edition",
    "/betting-intel",
    "/compare-players",
  ]);
  const contentDate = contentDatesLastmod(STATIC_ROUTE_SOURCES[loc]);
  const sourceDate = sourcesLastmod(STATIC_ROUTE_SOURCES[loc]);
  if (deskTied.has(loc)) {
    return maxIso(contentDate, ctx.editionIso) ?? ctx.buildDay;
  }
  // Published content date wins over git/mtime so weekly pages don't advertise a deploy touch.
  return contentDate ?? sourceDate ?? ctx.buildDay;
}

export function generate() {
  const archiveFile = readFileSync(join(ROOT, "client/src/lib/archiveData.ts"), "utf8");
  const pulseFile = readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8");
  const playoffFile = readFileSync(join(ROOT, "client/src/lib/playoffData.ts"), "utf8");

  const mentionCounts = new Map();
  const teams = new Set();
  const games = new Set();

  const bumpMention = (name) => {
    const canonical = canonicalPlayerName(name);
    if (!canonical) return;
    mentionCounts.set(canonical, (mentionCounts.get(canonical) || 0) + 1);
  };

  const playerMatches = archiveFile.matchAll(/players:\s*\[([^\]]+)\]/g);
  for (const m of playerMatches) {
    m[1].match(/"([^"]+)"/g)?.forEach((p) => bumpMention(p.replace(/"/g, "")));
  }
  for (const m of archiveFile.matchAll(/topPlayer:\s*"([^"]+)"/g)) {
    bumpMention(m[1]);
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
  const latestArchiveIso = extractLatestArchiveIso(archiveFile);
  const playoffContentIso = extractExportedTimestamp(playoffFile);
  const lastmodCtx = { buildDay, editionIso, latestArchiveIso, playoffContentIso };

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

  const rosterLists = loadRosterLists();
  for (const name of rosterLists.retired) {
    if (archiveFile.includes(name) || pulseFile.includes(name)) bumpMention(name);
  }
  const pulsePlayers = new Set();
  for (const m of pulseFile.matchAll(/\bplayer:\s*"([^"]+)"/g)) {
    const canonical = canonicalPlayerName(m[1]);
    pulsePlayers.add(canonical);
    bumpMention(canonical);
  }
  const pulseIndexPlayers = new Set();
  const pulseIndexBlock = pulseFile.match(/export const pulseIndex\s*=\s*\[([\s\S]*?)\]/);
  if (pulseIndexBlock) {
    for (const m of pulseIndexBlock[1].matchAll(/\bplayer:\s*"([^"]+)"/g)) {
      pulseIndexPlayers.add(canonicalPlayerName(m[1]));
    }
  }

  const playerSlugs = new Map();
  for (const [canonical, mentions] of mentionCounts) {
    const slug = slugify(canonical);
    if (!slug || playerSlugs.has(slug)) continue;
    if (
      !isSitemapIndexablePlayer(
        canonical,
        { inPulse: pulsePlayers.has(canonical), mentions },
        rosterLists,
      )
    ) {
      continue;
    }
    playerSlugs.set(slug, canonical);
    urls.push({
      loc: `/player/${slug}`,
      ...playerSitemapMeta({ inPulse: pulseIndexPlayers.has(canonical) }),
    });
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

function writeFallbackSitemap() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${xmlEscape(BASE + "/")}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
  writeFileSync(join(ROOT, "public", "sitemap.xml"), xml, "utf8");
}

// ── Standalone CLI entry point ────────────────────────────
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    generate();
  } catch (err) {
    console.error("Sitemap generation failed — writing fallback so /sitemap.xml stays valid.", err);
    writeFallbackSitemap();
  }
}
