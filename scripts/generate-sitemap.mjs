#!/usr/bin/env node
// generate-sitemap.mjs — Generates sitemap.xml from archive + player/team data
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const BASE = "https://hoopsintel.net";

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

  const now = new Date().toISOString().split("T")[0];

  let urls = [
    { loc: "/", priority: "1.0", changefreq: "daily" },
    { loc: "/archive", priority: "0.8", changefreq: "daily" },
    { loc: "/pulse-history", priority: "0.7", changefreq: "daily" },
    { loc: "/playoffs", priority: "0.7", changefreq: "daily" },
  ];

  const playerSlugs = new Map();
  for (const player of players) {
    const canonical = canonicalPlayerName(player);
    const slug = slugify(canonical);
    if (!slug || playerSlugs.has(slug)) continue;
    playerSlugs.set(slug, canonical);
    urls.push({ loc: `/player/${slug}`, priority: "0.6", changefreq: "daily" });
  }
  const teamSlugs = new Set();
  for (const team of teams) {
    const code = canonicalTeamCode(team);
    if (!code || teamSlugs.has(code)) continue;
    teamSlugs.add(code);
    urls.push({ loc: `/team/${code.toLowerCase()}`, priority: "0.6", changefreq: "daily" });
  }
  for (const game of games) {
    if (/^[A-Z]{3}-[A-Z]{3}-\d{8}$/.test(String(game))) {
      urls.push({ loc: `/game/${game}`, priority: "0.55", changefreq: "daily" });
    }
  }

  const seenLocs = new Set();
  urls = urls.filter((u) => {
    if (seenLocs.has(u.loc)) return false;
    seenLocs.add(u.loc);
    return true;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${xmlEscape(BASE + u.loc)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

  writeFileSync(join(ROOT, "public", "sitemap.xml"), xml, "utf8");
  console.log(`✓ Sitemap written with ${urls.length} URLs`);
}

// ── Standalone CLI entry point ────────────────────────────
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generate();
}
