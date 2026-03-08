#!/usr/bin/env node
// generate-og-image.mjs — Creates a simple SVG-based OG image
// Converts to a static HTML snapshot that can be screenshotted, or used as SVG directly
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#050D1A"/>
      <stop offset="100%" style="stop-color:#0A1628"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#0EA5E9"/>
      <stop offset="100%" style="stop-color:#0284C7"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <!-- Top accent line -->
  <rect x="0" y="0" width="1200" height="4" fill="url(#accent)"/>
  <!-- Logo box -->
  <rect x="80" y="200" width="80" height="80" rx="12" fill="url(#accent)"/>
  <text x="120" y="256" font-family="Arial Black, sans-serif" font-size="36" fill="white" text-anchor="middle" font-weight="900">HI</text>
  <!-- Title -->
  <text x="190" y="235" font-family="Arial Black, sans-serif" font-size="64" fill="white" font-weight="900" letter-spacing="2">HOOPS INTEL</text>
  <text x="190" y="275" font-family="Arial, sans-serif" font-size="22" fill="#0EA5E9" font-weight="600" letter-spacing="4">THE DAILY NBA INTELLIGENCE BRIEFING</text>
  <!-- Tagline -->
  <text x="80" y="360" font-family="Arial, sans-serif" font-size="26" fill="rgba(255,255,255,0.6)">Scores · Pulse Index™ Rankings · Injury Wire</text>
  <text x="80" y="400" font-family="Arial, sans-serif" font-size="26" fill="rgba(255,255,255,0.6)">Fantasy Alerts · Game Previews · Updated Daily</text>
  <!-- URL -->
  <text x="80" y="530" font-family="monospace" font-size="20" fill="#0EA5E9">hoopsintel.net</text>
  <!-- Bottom accent -->
  <rect x="0" y="626" width="1200" height="4" fill="url(#accent)"/>
  <!-- Grid lines for texture -->
  <line x1="0" y1="470" x2="1200" y2="470" stroke="rgba(14,165,233,0.1)" stroke-width="1"/>
  <line x1="0" y1="160" x2="1200" y2="160" stroke="rgba(14,165,233,0.1)" stroke-width="1"/>
</svg>`;

writeFileSync(join(ROOT, "public", "og-image.svg"), svg, "utf8");
console.log("✓ OG image written to public/og-image.svg (1200x630)");
