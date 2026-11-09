#!/usr/bin/env node
// Writes the default desk-style OG card used by meta tags and /og-image.svg.
import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(ROOT, "public/og/desk.svg"));
writeFileSync(join(ROOT, "public/og-image.svg"), svg);
writeFileSync(join(ROOT, "public/og/desk.svg"), svg);
console.log("✓ Desk OG image written to public/og/desk.svg and public/og-image.svg");
