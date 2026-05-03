#!/usr/bin/env node
// Ensures Vite emitted the embed entry chunk (cross-platform; replaces `test -f`).
import { existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const embedPath = join(root, "dist/embed.js");

if (!existsSync(embedPath)) {
  console.error(`Missing embed bundle: ${embedPath}\nRun \`npm run build\` first.`);
  process.exit(1);
}
