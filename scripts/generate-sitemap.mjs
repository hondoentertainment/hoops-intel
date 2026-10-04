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
  try {
    return String(name ?? "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  } catch {
    return String(name ?? "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }
}

const TEAM_FULL_NAMES = Object.freeze({
  ATL: "Atlanta Hawks", BOS: "Boston Celtics", BRK: "Brooklyn Nets",
  CHA: "Charlotte Hornets", CHI: "Chicago Bulls", CLE: "Cleveland Cavaliers",
  DAL: "Dallas Mavericks", DEN: "Denver Nuggets", DET: "Detroit Pistons",
  GSW: "Golden State Warriors", HOU: "Houston Rockets", IND: "Indiana Pacers",
  LAC: "LA Clippers", LAL: "Los Angeles Lakers", MEM: "Memphis Grizzlies",
  MIA: "Miami Heat", MIL: "Milwaukee Bucks", MIN: "Minnesota Timberwolves",
  NOP: "New Orleans Pelicans", NYK: "New York Knicks", OKC: "Oklahoma City Thunder",
  ORL: "Orlando Magic", PHI: "Philadelphia 76ers", PHX: "Phoenix Suns",
  POR: "Portland Trail Blazers", SAC: "Sacramento Kings", SAS: "San Antonio Spurs",
  TOR: "Toronto Raptors", UTA: "Utah Jazz", WAS: "Washington Wizards",
});

const TEAM_NAMES = new Set(Object.keys(TEAM_FULL_NAMES));

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
    prospects: new Set(readExportedNameList(rosterFile, "PROSPECT_PLAYER_NAMES").map(canonicalPlayerName)),
  };
}

/** Pulse Index rows with stats, a score, and a context blurb — the rich-profile bar. */
export function substantivePulseNames(pulseIndexSource) {
  const names = new Set();
  if (!pulseIndexSource) return names;
  for (const chunk of String(pulseIndexSource).split(/},\s*{/)) {
    const player = chunk.match(/\bplayer:\s*"([^"]+)"/)?.[1];
    const keyStats = chunk.match(/\bkeyStats:\s*"([^"]*)"/)?.[1]?.trim() ?? "";
    const note = chunk.match(/\bnote:\s*"([^"]*)"/)?.[1]?.trim() ?? "";
    const score = chunk.match(/\bindexScore:\s*(-?\d+(?:\.\d+)?)/);
    if (player && keyStats && note && score) names.add(canonicalPlayerName(player));
  }
  return names;
}

/**
 * Mirror `profileSeoIndexable`: retired archive stays, thin name-drops do not.
 * `inPulse` / `substantive` mean a rich Pulse card, not any `player:` string.
 */
export function isSitemapIndexablePlayer(name, context, lists) {
  const canonical = canonicalPlayerName(name);
  if (lists.nonPlayers.has(canonical) || lists.historical.has(canonical)) return false;
  if (lists.retired.has(canonical)) return (context.mentions ?? 0) > 0;
  return Boolean(context.substantive || context.inPulse);
}

const ALLOWED_CHANGEFREQ = new Set([
  "always",
  "hourly",
  "daily",
  "weekly",
  "monthly",
  "yearly",
  "never",
]);

export function xmlEscape(value) {
  return String(value)
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function sanitizeLastmod(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : null;
}

export function buildUrlEntry(u, { buildDay } = {}) {
  if (!u?.loc || typeof u.loc !== "string" || !u.loc.startsWith("/")) return "";
  if (u.loc.includes(" ") || u.loc.includes("%20")) return "";
  if (!ALLOWED_CHANGEFREQ.has(u.changefreq)) return "";
  if (!/^\d(\.\d+)?$/.test(String(u.priority))) return "";
  const lastmod = sanitizeLastmod(u.lastmod) ?? sanitizeLastmod(buildDay);
  if (!lastmod) return "";
  return `  <url>
    <loc>${xmlEscape(BASE + u.loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`;
}

export function assertWellFormedSitemap(xml) {
  if (typeof xml !== "string" || !xml.startsWith("<?xml ")) {
    throw new Error("sitemap missing XML declaration");
  }
  if (!xml.includes("<urlset") || !xml.trimEnd().endsWith("</urlset>")) {
    throw new Error("sitemap urlset truncated");
  }
  const opens = (xml.match(/<url>/g) || []).length;
  const closes = (xml.match(/<\/url>/g) || []).length;
  if (opens !== closes) {
    throw new Error(`sitemap url tags truncated (${opens} open / ${closes} close)`);
  }
  const locs = (xml.match(/<loc>/g) || []).length;
  if (locs !== opens) {
    throw new Error("sitemap loc count mismatch");
  }
  const lastmods = (xml.match(/<lastmod>/g) || []).length;
  if (lastmods !== opens) {
    throw new Error(`sitemap lastmod count mismatch (${lastmods} lastmod / ${opens} url)`);
  }
  if (/<loc>[^<\n]*$/.test(xml.replace(/\s*<\/urlset>\s*$/, ""))) {
    throw new Error("sitemap loc truncated mid-entry");
  }
  return true;
}

export function buildSitemapXml(urls, { buildDay } = {}) {
  const entries = (urls || []).map((u) => buildUrlEntry(u, { buildDay })).filter(Boolean);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;
  assertWellFormedSitemap(xml);
  return xml;
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

const DISPLAY_MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

/** Calendar day from an ISO or "Month D, YYYY" stamp. Date.parse shifts those strings off UTC. */
function parseDisplayDate(str) {
  const raw = String(str ?? "").trim();
  const iso = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;
  const named = raw.match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/);
  if (named) {
    const month = DISPLAY_MONTHS.indexOf(named[1].toLowerCase()) + 1;
    const day = Number(named[2]);
    if (month > 0 && day >= 1 && day <= 31) {
      return `${named[3]}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    }
  }
  const t = Date.parse(raw);
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

function bumpIso(map, code, iso) {
  if (!code || !iso) return;
  const prev = map.get(code);
  if (!prev || iso > prev) map.set(code, iso);
}

/**
 * A team's sitemap lastmod moves only when that team shows up in the archive,
 * on today's injury wire, or in the lineup roster file. The edition date is
 * not applied to every franchise.
 */
export function teamContentLastmods({ archiveFile = "", pulseFile = "", lineupFile = "", editionIso = null } = {}) {
  const map = new Map();
  const chunks = String(archiveFile).split(/\n\s*\{/).slice(1);
  for (const chunk of chunks) {
    const id = chunk.match(/(?:["']id["']|\bid)\s*:\s*"(\d{4}-\d{2}-\d{2})"/)?.[1];
    if (!id) continue;
    for (const code of TEAM_NAMES) {
      const name = TEAM_FULL_NAMES[code];
      if (new RegExp(`\\b${code}\\b`).test(chunk) || (name && chunk.includes(name))) {
        bumpIso(map, code, id);
      }
    }
  }

  const injuryBody = String(pulseFile).match(/export const injuryUpdates\s*=\s*\[([\s\S]*?)\]/)?.[1] ?? "";
  if (editionIso) {
    for (const m of injuryBody.matchAll(/\bteam:\s*"([A-Z]{2,3})"/g)) {
      bumpIso(map, canonicalTeamCode(m[1]), editionIso);
    }
  }

  const lineupIso = parseDisplayDate(
    String(lineupFile).match(/\bgeneratedDate:\s*"([^"]+)"/)?.[1] ?? "",
  );
  if (lineupIso) {
    for (const m of String(lineupFile).matchAll(/\bteam:\s*"([A-Z]{2,3})"/g)) {
      bumpIso(map, canonicalTeamCode(m[1]), lineupIso);
    }
  }
  return map;
}

function extractLatestArchiveIso(archiveFile) {
  const dates = [...archiveFile.matchAll(/(?:["']date["']|\bdate)\s*:\s*"(\d{4}-\d{2}-\d{2})"/g)].map((m) => m[1]);
  return maxIso(...dates);
}

/**
 * Pulse Index or today's injury wire are the only popularity signals we trust for crawl weight.
 * Threshold: inPulse || onInjuryWire → daily 0.65; otherwise weekly 0.5. No minutes/search/celebrity list.
 */
export function playerSitemapMeta({ inPulse, onInjuryWire } = {}) {
  return inPulse || onInjuryWire ? SITEMAP_PLAYER_DESK_META : SITEMAP_PLAYER_META;
}

/** Prefer content dates / source mtimes so crawlers see selective freshness. */
export const STATIC_ROUTE_SOURCES = {
  "/tools": ["client/src/lib/siteNav.ts"],
  "/injuries": ["client/src/lib/pulseData.ts"],
  "/tonight": ["client/src/lib/pulseData.ts", "client/src/pages/Tonight.tsx"],
  "/players": ["client/src/lib/playerRosterStatus.ts", "client/src/lib/pulseData.ts"],
  "/pick-em": ["client/src/lib/playoffData.ts", "client/src/pages/PickEm.tsx"],
  "/trade-value": ["client/src/lib/tradeValueData.ts"],
  "/trivia": ["client/src/lib/pulseData.ts", "client/src/pages/Trivia.tsx"],
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
  "/widgets/analytics": ["client/src/pages/WidgetAnalytics.tsx"],
  "/embed-stats": ["client/src/pages/EmbedPublisherStats.tsx"],
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
  if (loc.startsWith("/player/")) {
    return maxIso(ctx.editionIso, ctx.latestArchiveIso) ?? ctx.buildDay;
  }
  if (loc.startsWith("/team/")) {
    const code = canonicalTeamCode(loc.slice("/team/".length));
    const specific = ctx.teamLastmods?.get?.(code);
    return specific ?? ctx.buildDay;
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
    "/tonight",
    "/watch-guide",
    "/trivia",
    "/players",
    "/my-pulse",
    "/print-edition",
    "/betting-intel",
    "/compare-players",
    "/ask",
    // Daily-pipeline pages: lastmod follows the edition when generators freeze.
    "/history",
    "/refs",
    "/podcast-companion",
    "/embed-stats",
    "/widgets/analytics",
    // Weekly tools: generatedDate freezes on the last successful weekly run
    // (currently 2026-08-31). Follow the edition so lastmod tracks real desk
    // freshness without inventing lineup/clutch/tactics copy.
    "/lineups",
    "/clutch",
    "/tactics",
    "/draft",
    "/projections",
    "/community-pulse",
    "/trade-value",
    "/trade-simulator",
  ]);
  const contentDate = contentDatesLastmod(STATIC_ROUTE_SOURCES[loc]);
  const sourceDate = sourcesLastmod(STATIC_ROUTE_SOURCES[loc]);
  if (deskTied.has(loc)) {
    return maxIso(contentDate, ctx.editionIso) ?? ctx.buildDay;
  }
  // Published content date wins over git/mtime so weekly pages don't advertise a deploy touch.
  return contentDate ?? sourceDate ?? ctx.buildDay;
}

export function generate({ write = true } = {}) {
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
  for (const m of playoffFile.matchAll(
    /date:\s*"(?<date>\d{4}-\d{2}-\d{2})"[\s\S]{0,400}?homeTeam:\s*"(?<home>[A-Z]{3})"[\s\S]{0,400}?awayTeam:\s*"(?<away>[A-Z]{3})"/g,
  )) {
    games.add(`${m.groups.away}-${m.groups.home}-${m.groups.date.replace(/-/g, "")}`);
  }
  for (const m of playoffFile.matchAll(
    /homeTeam:\s*"(?<home>[A-Z]{3})"[\s\S]{0,400}?awayTeam:\s*"(?<away>[A-Z]{3})"[\s\S]{0,400}?date:\s*"(?<date>\d{4}-\d{2}-\d{2})"/g,
  )) {
    games.add(`${m.groups.away}-${m.groups.home}-${m.groups.date.replace(/-/g, "")}`);
  }

  const buildDay = new Date().toISOString().split("T")[0];
  const editionIso = extractPulseEditionIso(pulseFile);
  const latestArchiveIso = extractLatestArchiveIso(archiveFile);
  const playoffContentIso = extractExportedTimestamp(playoffFile);
  const lineupFile = existsSync(join(ROOT, "client/src/lib/lineupData.ts"))
    ? readFileSync(join(ROOT, "client/src/lib/lineupData.ts"), "utf8")
    : "";
  const teamLastmods = teamContentLastmods({ archiveFile, pulseFile, lineupFile, editionIso });
  const lastmodCtx = { buildDay, editionIso, latestArchiveIso, playoffContentIso, teamLastmods };

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
  for (const m of pulseFile.matchAll(/\bplayer:\s*"([^"]+)"/g)) {
    bumpMention(m[1]);
  }
  const pulseIndexPlayers = new Set();
  const pulseIndexBlock = pulseFile.match(/export const pulseIndex\s*=\s*\[([\s\S]*?)\]/);
  const substantivePlayers = substantivePulseNames(pulseIndexBlock ? pulseIndexBlock[1] : "");
  if (pulseIndexBlock) {
    for (const m of pulseIndexBlock[1].matchAll(/\bplayer:\s*"([^"]+)"/g)) {
      pulseIndexPlayers.add(canonicalPlayerName(m[1]));
    }
  }
  const injuryPlayers = new Set();
  const injuryBlock = pulseFile.match(/export const injuryUpdates\s*=\s*\[([\s\S]*?)\]/);
  if (injuryBlock) {
    for (const m of injuryBlock[1].matchAll(/\bplayer:\s*"([^"]+)"/g)) {
      injuryPlayers.add(canonicalPlayerName(m[1]));
    }
  }

  const playerSlugs = new Map();
  for (const [canonical, mentions] of mentionCounts) {
    const slug = slugify(canonical);
    if (!slug || playerSlugs.has(slug)) continue;
    if (
      !isSitemapIndexablePlayer(
        canonical,
        {
          inPulse: substantivePlayers.has(canonical),
          substantive: substantivePlayers.has(canonical),
          mentions,
        },
        rosterLists,
      )
    ) {
      continue;
    }
    playerSlugs.set(slug, canonical);
    urls.push({
      loc: `/player/${slug}`,
      ...playerSitemapMeta({
        inPulse: pulseIndexPlayers.has(canonical),
        onInjuryWire: injuryPlayers.has(canonical),
      }),
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
    try {
      u.lastmod = sanitizeLastmod(lastmodForLoc(u.loc, lastmodCtx)) ?? lastmodCtx.buildDay;
    } catch {
      u.lastmod = lastmodCtx.buildDay;
    }
  }

  const xml = buildSitemapXml(urls, { buildDay });
  const written = urls.filter((u) => buildUrlEntry(u, { buildDay }));
  if (editionIso) {
    for (const path of ["/", "/players", "/injuries", "/tonight"]) {
      const row = written.find((u) => u.loc === path);
      if (row?.lastmod !== editionIso) {
        throw new Error(`sitemap lastmod for ${path} is ${row?.lastmod ?? "missing"}, expected edition ${editionIso}`);
      }
    }
    const previewBlock = pulseFile.match(/export const gamePreviews\s*=\s*\[([\s\S]*?)\];/);
    if (previewBlock) {
      for (const id of previewBlock[1].matchAll(/\bgameId:\s*"([A-Z]{3}-[A-Z]{3}-\d{8})"/g)) {
        const loc = `/game/${id[1]}`;
        const row = written.find((u) => u.loc === loc);
        const gameIso = `${id[1].slice(-8, -4)}-${id[1].slice(-4, -2)}-${id[1].slice(-2)}`;
        if (!row) throw new Error(`sitemap missing tonight game ${loc}`);
        if (row.lastmod !== gameIso) {
          throw new Error(`sitemap lastmod for ${loc} is ${row.lastmod}, expected ${gameIso}`);
        }
      }
    }
  }
  if (write) {
    writeFileSync(join(ROOT, "public", "sitemap.xml"), xml, "utf8");
    const distinctLastmods = new Set(written.map((u) => u.lastmod).filter(Boolean));
    console.log(`✓ Sitemap written with ${written.length} URLs (${distinctLastmods.size} distinct lastmod dates)`);
  }
  return { xml, urls: written };
}

function writeFallbackSitemap() {
  const xml = buildSitemapXml(
    [{ loc: "/", changefreq: "daily", priority: "1.0" }],
    { buildDay: new Date().toISOString().split("T")[0] },
  );
  writeFileSync(join(ROOT, "public", "sitemap.xml"), xml, "utf8");
}

// ── Standalone CLI entry point ────────────────────────────
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    generate();
  } catch (err) {
    console.error("Sitemap generation failed — writing fallback so /sitemap.xml stays valid.", err);
    writeFallbackSitemap();
    process.exitCode = 1;
  }
}
