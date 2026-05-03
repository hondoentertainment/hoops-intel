#!/usr/bin/env node
// verify-deploy-config.mjs — Validates repo layout matches Vercel + documents Supabase migrations.
//
// Run from repository root (directory containing package.json & vercel.json):
//   node scripts/verify-deploy-config.mjs
//
// Catches mistaken Vercel "Root Directory" (must be "." when importing this repo as project root).

import { readFileSync, existsSync, readdirSync, statSync } from "fs";
import { dirname, join, normalize } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

function die(msg) {
  console.error(msg);
  process.exit(1);
}

function warn(msg) {
  console.warn(`[deploy-config] ⚠ ${msg}`);
}

function ok(msg) {
  console.log(`[deploy-config] ✓ ${msg}`);
}

function readJson(rel) {
  return JSON.parse(readFileSync(join(ROOT, rel), "utf8"));
}

function apiFiles() {
  const dir = join(ROOT, "api");
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".ts") || f.endsWith(".js"))
    .filter((f) => !f.includes(".test.") && !f.includes(".spec."))
    .map((f) => `api/${f}`);
}

function migrationFiles() {
  const dir = join(ROOT, "supabase", "migrations");
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".sql"))
    .sort((a, b) => normalize(a).localeCompare(normalize(b)));
}

function main() {
  // CWD sanity: workflows run from checkout root; npm scripts should run from hoop-intel root.
  if (!existsSync(join(ROOT, "package.json"))) die("missing package.json (run from hoops-intel repo root)");
  if (!existsSync(join(ROOT, "vercel.json"))) die("missing vercel.json");

  const pkg = readJson("package.json");
  if (pkg.name !== "hoops-intel") warn(`expected package.json name \"hoops-intel\", got \"${pkg.name}\"`);

  if (!existsSync(join(ROOT, "vite.config.ts"))) die("missing vite.config.ts");

  let vercel;
  try {
    vercel = readJson("vercel.json");
  } catch (e) {
    die(`vercel.json parse error: ${e.message}`);
  }

  const outDir = vercel.outputDirectory ?? vercel.output;
  if (outDir !== "dist") {
    die(
      [
        `vercel.json outputDirectory is \"${outDir}\" — must be \"dist\" (Vite writes to ../dist from client/).`,
        "If deploying from a subdirectory in Vercel, set Root Directory to the folder that contains vercel.json and ensure output still matches vite outDir.",
      ].join("\n"),
    );
  }
  ok("vercel.json outputDirectory is dist (matches Vite build outDir)");

  const buildCmd = vercel.buildCommand ?? vercel.build;
  if (buildCmd != null && !String(buildCmd).includes("npm run build") && buildCmd !== "vite build") {
    warn(`vercel.json buildCommand is \"${buildCmd}\" — expected npm run build (or vite build)`);
  } else ok("vercel.json build targets production bundle");

  if (!existsSync(join(ROOT, "client", "index.html"))) die("missing client/index.html");

  const functions =
    vercel.functions && typeof vercel.functions === "object" ? Object.keys(vercel.functions) : [];
  const apis = new Set(apiFiles());
  const missingApis = [];
  for (const rel of functions) {
    const base = join(ROOT, rel);
    if (!existsSync(base)) missingApis.push(rel);
    else apis.delete(rel);
  }
  if (missingApis.length) warn(`vercel.functions reference missing files: ${missingApis.join(", ")}`);
  else ok("all vercel.functions paths exist");

  const undeclared = [...apis];
  if (undeclared.length)
    warn(
      `handlers not declared in vercel.functions: ${undeclared.join(", ")} (still deploy; declare for custom maxDuration)`,
    );

  // Node engine vs Vercel (informational — CI uses matching setup-node version)
  const engines = pkg.engines?.node || "";
  if (engines.includes("24")) ok("package.json engines.node targets 24.x (align Vercel → Settings → Node.jsVersion)");
  else warn("package.json engines.node is not 24.x — sync with Vercel and .github/workflows");

  // ── Supabase migrations (local filesystem only — does not push to hosted DB)
  const migs = migrationFiles();
  if (migs.length === 0) warn("no supabase/migrations/*.sql files");
  else {
    const badNames = migs.filter((f) => !/^\d{8}/.test(f));
    if (badNames.length) warn(`migration names should start with YYYYMMDD: ${badNames.join(", ")}`);
    let empty = [];
    for (const f of migs) {
      const p = join(ROOT, "supabase/migrations", f);
      try {
        if (statSync(p).size < 16) empty.push(f);
      } catch {
        empty.push(f);
      }
    }
    if (empty.length) die(`migration file(s) empty or unreadable: ${empty.join(", ")}`);
    ok(`${migs.length} Supabase migration file(s) on disk — apply to hosted Supabase with CLI (see output above)`);

    console.log("");
    console.log("[deploy-config] Hosted DB note: CI does not apply migrations. Maintainer flow:");
    console.log("        npx supabase login");
    console.log("        npx supabase link --project-ref <your-project-ref>");
    console.log("        npx supabase db push");
  }

  console.log("");
  ok("Deploy layout verification passed");
}

main();
