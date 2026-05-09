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

export function generate() {
  const archiveFile = readFileSync(join(ROOT, "client/src/lib/archiveData.ts"), "utf8");

  // Extract players and teams from archive
  const players = new Set();
  const teams = new Set();

  const playerMatches = archiveFile.matchAll(/players:\s*\[([^\]]+)\]/g);
  for (const m of playerMatches) {
    m[1].match(/"([^"]+)"/g)?.forEach((p) => players.add(p.replace(/"/g, "")));
  }
  const teamMatches = archiveFile.matchAll(/teams:\s*\[([^\]]+)\]/g);
  for (const m of teamMatches) {
    m[1].match(/"([^"]+)"/g)?.forEach((t) => teams.add(t.replace(/"/g, "")));
  }

  const now = new Date().toISOString().split("T")[0];

  let urls = [
    { loc: "/", priority: "1.0", changefreq: "daily" },
    { loc: "/archive", priority: "0.8", changefreq: "daily" },
    { loc: "/pulse-history", priority: "0.7", changefreq: "daily" },
    { loc: "/playoffs", priority: "0.7", changefreq: "daily" },
  ];

  for (const player of players) {
    urls.push({ loc: `/player/${slugify(player)}`, priority: "0.6", changefreq: "daily" });
  }
  for (const team of teams) {
    urls.push({ loc: `/team/${team}`, priority: "0.6", changefreq: "daily" });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${BASE}${u.loc}</loc>
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
