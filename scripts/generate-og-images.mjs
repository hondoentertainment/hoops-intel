#!/usr/bin/env node
// generate-og-images.mjs — Generate SVG OG images for players and editions
// Reads pulseData.ts to build shareable cards for social media previews.
// Usage: node scripts/generate-og-images.mjs

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

// ── Read pulse data ───────────────────────────────────────────────────────
const dataPath = join(ROOT, "client", "src", "lib", "pulseData.ts");
const raw = readFileSync(dataPath, "utf8");

function extractExport(name) {
  const regex = new RegExp(`export const ${name} = (\\[.*?\\]|\\{.*?\\});`, "s");
  const match = raw.match(regex);
  if (!match) return null;
  try {
    return JSON.parse(match[1]);
  } catch {
    return null;
  }
}

const pulseIndex = extractExport("pulseIndex");
const pulseEdition = extractExport("pulseEdition");
const narrative = extractExport("narrative");

if (!pulseIndex || !pulseEdition) {
  console.error("Could not parse pulseData.ts — aborting OG image generation.");
  process.exit(1);
}

// ── Helpers ───────────────────────────────────────────────────────────────
function slugify(name) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function esc(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function scoreColor(score) {
  if (score >= 90) return "#10B981";
  if (score >= 80) return "#F59E0B";
  return "#F97316";
}

function trendSymbol(trend) {
  if (trend === "up") return { char: "\u2191", color: "#10B981" };
  if (trend === "down") return { char: "\u2193", color: "#F43F5E" };
  return { char: "\u2192", color: "#64748B" };
}

// Truncate text to fit approximate SVG width
function truncate(text, maxLen) {
  if (!text || text.length <= maxLen) return text || "";
  return text.slice(0, maxLen - 1) + "\u2026";
}

// ── Generate player OG SVG ───────────────────────────────────────────────
function generatePlayerSvg(player) {
  const sc = scoreColor(player.indexScore);
  const trend = trendSymbol(player.trend);
  const stats = truncate(player.keyStats, 80);
  const name = esc(player.player);
  const team = esc(player.team);
  const record = esc(player.teamRecord);
  const safeStats = esc(stats);
  const edDate = esc(pulseEdition.date);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0EA5E9"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="1200" height="4" fill="url(#accent)"/>

  <!-- Subtle grid pattern -->
  <defs>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(14,165,233,0.03)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- HOOPS INTEL branding -->
  <rect x="60" y="40" width="48" height="48" rx="8" fill="url(#accent)"/>
  <text x="84" y="74" font-family="Arial Black, sans-serif" font-size="22" fill="white" text-anchor="middle" font-weight="900">HI</text>
  <text x="124" y="62" font-family="Arial Black, sans-serif" font-size="18" fill="rgba(255,255,255,0.7)" font-weight="700" letter-spacing="3">HOOPS INTEL</text>

  <!-- PULSE INDEX badge -->
  <rect x="870" y="40" width="270" height="48" rx="6" fill="rgba(14,165,233,0.15)" stroke="#0EA5E9" stroke-width="1"/>
  <text x="1005" y="72" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#0EA5E9" text-anchor="middle" letter-spacing="3">PULSE INDEX #${player.rank}</text>

  <!-- Team + Record -->
  <text x="60" y="160" font-family="Arial, sans-serif" font-size="36" font-weight="700" fill="#0EA5E9" letter-spacing="4">${team}</text>
  <text x="${60 + team.length * 26 + 20}" y="160" font-family="Arial, sans-serif" font-size="24" fill="rgba(255,255,255,0.4)" letter-spacing="1">${record}</text>

  <!-- Player name -->
  <text x="60" y="270" font-family="Arial Black, sans-serif" font-size="80" font-weight="900" fill="#FFFFFF" letter-spacing="-1">${name}</text>

  <!-- Divider -->
  <line x1="60" y1="300" x2="1140" y2="300" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

  <!-- Index score (large) -->
  <text x="60" y="400" font-family="Arial Black, sans-serif" font-size="72" font-weight="900" fill="${sc}">${player.indexScore}</text>

  <!-- Trend indicator -->
  <text x="260" y="395" font-family="Arial, sans-serif" font-size="42" fill="${trend.color}">${trend.char}</text>
  <text x="300" y="390" font-family="Arial, sans-serif" font-size="22" fill="${trend.color}">${player.trend.toUpperCase()}</text>

  <!-- Key stats -->
  <text x="60" y="470" font-family="monospace" font-size="22" fill="#F59E0B" letter-spacing="0.5">${safeStats}</text>

  <!-- Edition date -->
  <text x="1140" y="580" font-family="Arial, sans-serif" font-size="16" fill="rgba(255,255,255,0.3)" text-anchor="end" letter-spacing="1">${edDate}</text>

  <!-- Site URL -->
  <text x="60" y="580" font-family="monospace" font-size="16" fill="#0EA5E9">hoopsintel.net</text>

  <!-- Bottom accent bar -->
  <rect x="0" y="626" width="1200" height="4" fill="url(#accent)"/>
</svg>`;
}

// ── Generate edition OG SVG ──────────────────────────────────────────────
function generateEditionSvg() {
  const edDate = esc(pulseEdition.date);
  const edition = esc(pulseEdition.edition);
  const headline = narrative ? truncate(narrative.headline, 120) : "";
  const safeHeadline = esc(headline);
  const top3 = pulseIndex.slice(0, 3);

  const playerLines = top3.map((p, i) => {
    const y = 310 + i * 60;
    const sc = scoreColor(p.indexScore);
    const trend = trendSymbol(p.trend);
    return `
  <text x="60" y="${y}" font-family="Arial Black, sans-serif" font-size="22" font-weight="900" fill="rgba(255,255,255,0.5)">#${p.rank}</text>
  <text x="110" y="${y}" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#FFFFFF">${esc(p.player)}</text>
  <text x="650" y="${y}" font-family="Arial, sans-serif" font-size="22" fill="#0EA5E9" letter-spacing="2">${esc(p.team)}</text>
  <text x="780" y="${y}" font-family="Arial Black, sans-serif" font-size="28" font-weight="900" fill="${sc}">${p.indexScore}</text>
  <text x="880" y="${y}" font-family="Arial, sans-serif" font-size="24" fill="${trend.color}">${trend.char}</text>`;
  }).join("\n");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0EA5E9"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="4" fill="url(#accent)"/>

  <!-- Grid texture -->
  <defs>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(14,165,233,0.03)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Branding -->
  <rect x="60" y="40" width="48" height="48" rx="8" fill="url(#accent)"/>
  <text x="84" y="74" font-family="Arial Black, sans-serif" font-size="22" fill="white" text-anchor="middle" font-weight="900">HI</text>
  <text x="124" y="62" font-family="Arial Black, sans-serif" font-size="18" fill="rgba(255,255,255,0.7)" font-weight="700" letter-spacing="3">HOOPS INTEL</text>

  <!-- Edition badge -->
  <rect x="870" y="40" width="270" height="48" rx="6" fill="rgba(14,165,233,0.15)" stroke="#0EA5E9" stroke-width="1"/>
  <text x="1005" y="72" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="#0EA5E9" text-anchor="middle" letter-spacing="2">${edition}</text>

  <!-- Date -->
  <text x="60" y="140" font-family="Arial, sans-serif" font-size="28" fill="rgba(255,255,255,0.5)" letter-spacing="2">${edDate}</text>

  <!-- Headline -->
  <text x="60" y="200" font-family="Arial Black, sans-serif" font-size="32" font-weight="900" fill="#FFFFFF" letter-spacing="-0.5">${safeHeadline.slice(0, 60)}</text>
  ${safeHeadline.length > 60 ? `<text x="60" y="240" font-family="Arial Black, sans-serif" font-size="32" font-weight="900" fill="#FFFFFF" letter-spacing="-0.5">${safeHeadline.slice(60)}</text>` : ""}

  <!-- Top 3 label -->
  <text x="60" y="280" font-family="Arial, sans-serif" font-size="16" fill="rgba(255,255,255,0.35)" letter-spacing="3">TOP PULSE INDEX PLAYERS</text>
  <line x1="60" y1="288" x2="1140" y2="288" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <!-- Top 3 players -->
  ${playerLines}

  <!-- Site URL -->
  <text x="60" y="580" font-family="monospace" font-size="16" fill="#0EA5E9">hoopsintel.net</text>

  <!-- Right label -->
  <text x="1140" y="580" font-family="Arial, sans-serif" font-size="16" fill="rgba(255,255,255,0.3)" text-anchor="end" letter-spacing="1">NBA INTELLIGENCE DASHBOARD</text>

  <!-- Bottom accent -->
  <rect x="0" y="626" width="1200" height="4" fill="url(#accent)"/>
</svg>`;
}

// ── Write files ──────────────────────────────────────────────────────────
const outDir = join(ROOT, "public", "og", "players");
mkdirSync(outDir, { recursive: true });

let count = 0;
for (const player of pulseIndex) {
  const slug = slugify(player.player);
  const svg = generatePlayerSvg(player);
  writeFileSync(join(outDir, `${slug}.svg`), svg, "utf8");
  count++;
}

const editionSvg = generateEditionSvg();
writeFileSync(join(ROOT, "public", "og", "edition.svg"), editionSvg, "utf8");

console.log(`[+] OG images generated: ${count} player cards + 1 edition card`);
console.log(`    Output: public/og/players/*.svg, public/og/edition.svg`);
