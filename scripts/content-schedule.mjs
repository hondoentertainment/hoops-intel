#!/usr/bin/env node
// content-schedule.mjs — Displays the full recurring content update schedule.
// Useful for debugging, documentation, and verifying all pipelines are configured.
// Usage: node scripts/content-schedule.mjs [--check | --verify-generators]

import { readFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { seasonMode, generatorActive, primaryGenerator } from "./lib/season-mode.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const WORKFLOWS_DIR = join(ROOT, ".github/workflows");

const CHECK_MODE = process.argv.includes("--check");
const VERIFY_GENERATORS_MODE = process.argv.includes("--verify-generators");

// ── Full content update schedule ──────────────────────────────────────────

const SCHEDULE = {
  daily: [
    {
      name: "Daily Edition Update",
      workflow: "daily-update.yml",
      cron: "0 13 * * *",
      time: "5:00 AM PST",
      description: "Main edition: ESPN data fetch + Claude AI narrative generation",
      outputs: [
        "pulseData.ts", "archiveData.ts", "watchGuideData.ts",
        "sentimentData.ts", "momentumData.ts", "podcastData.ts",
        "historyData.ts", "refData.ts", "feed.xml", "sitemap.xml",
      ],
      apis: ["ESPN (free)", "Anthropic Claude"],
      secrets: ["ANTHROPIC_API_KEY"],
    },
    {
      name: "Auto-Retry Failed Edition",
      workflow: "auto-retry.yml",
      cron: "triggered on daily-update failure",
      time: "~5:10 AM PST (10 min delay)",
      description: "Automatic retry if daily edition generation fails",
      outputs: ["Same as daily edition"],
      apis: ["ESPN (free)", "Anthropic Claude"],
      secrets: ["ANTHROPIC_API_KEY"],
    },
    {
      name: "Email Digest",
      workflow: "email-digest.yml",
      cron: "triggered on daily-update success",
      time: "~5:15 AM PST (15 min delay)",
      description: "Send daily digest email to subscribers",
      outputs: ["Email delivery"],
      apis: ["Resend (transactional email)", "Supabase (subscriber list)"],
      secrets: ["RESEND_API_KEY", "SUPABASE_URL", "SUPABASE_SERVICE_KEY"],
    },
    {
      name: "Social Media Post",
      workflow: "social-post.yml",
      cron: "triggered on daily-update success",
      time: "~5:05 AM PST",
      description: "Post edition highlights to Twitter/X and Bluesky",
      outputs: ["Social media posts"],
      apis: ["Twitter API v2", "Bluesky AT Protocol"],
      secrets: ["TWITTER_API_KEY", "TWITTER_API_SECRET", "TWITTER_ACCESS_TOKEN", "TWITTER_ACCESS_SECRET", "BLUESKY_HANDLE", "BLUESKY_APP_PASSWORD"],
    },
    {
      name: "Post-Game Scores Refresh",
      workflow: "scores-refresh.yml",
      cron: "30 6 * * *, 0 8 * * *",
      time: "1:30 AM ET + 3:00 AM ET",
      description: "Cache final scores from ESPN after games end",
      outputs: [".espn-cache/", ".daily-data/"],
      apis: ["ESPN (free)"],
      secrets: [],
    },
    {
      name: "Midday Content Refresh",
      workflow: "midday-refresh.yml",
      cron: "0 22 * * *",
      time: "2:00 PM PST",
      description: "Refresh sentiment, momentum, and watch guide before evening games",
      outputs: ["sentimentData.ts", "momentumData.ts", "watchGuideData.ts"],
      apis: ["Anthropic Claude"],
      secrets: ["ANTHROPIC_API_KEY"],
    },
    {
      name: "Site Review Agent",
      workflow: "site-review-agent.yml",
      cron: "30 14 * * *",
      time: "6:30 AM PST",
      description: "Production URL fingerprints + Claude recommendations; opens an issue on failures or visible HTML changes",
      outputs: ["site-review-report.md (artifact)", "GitHub issue when notify"],
      apis: ["Hoops Intel production (HTTPS)", "Anthropic Claude"],
      secrets: ["ANTHROPIC_API_KEY"],
    },
  ],
  recurring: [
    {
      name: "Playoff Push Alerts",
      workflow: "playoff-push.yml",
      cron: "*/30 * * * *",
      time: "Every 30 minutes (when secrets configured)",
      description: "ESPN playoff snapshot + elimination/clincher web pushes",
      outputs: ["Web Push notifications"],
      apis: ["ESPN (free)", "Supabase", "Web Push (VAPID)"],
      secrets: ["SUPABASE_URL", "SUPABASE_SERVICE_KEY", "PUSH_API_URL", "PUSH_API_SECRET"],
    },
    {
      name: "Injury Status Monitor",
      workflow: "injury-check.yml",
      cron: "0,30 22-23,0-5 * * *",
      time: "Every 30 min, 5 PM – midnight ET",
      description: "Monitor ESPN for injury status changes, send push notifications",
      outputs: ["Web Push notifications"],
      apis: ["ESPN (free)", "Supabase", "Web Push (VAPID)"],
      secrets: ["SUPABASE_URL", "SUPABASE_ANON_KEY", "SUPABASE_SERVICE_KEY", "PUSH_API_URL", "PUSH_API_SECRET"],
    },
    {
      name: "Health Check",
      workflow: "health-check.yml",
      cron: "0 */6 * * *",
      time: "Every 6 hours",
      description: "Validate content freshness, required exports, secondary files, ESPN API",
      outputs: ["GitHub issue on failure"],
      apis: ["ESPN (free, reachability check)"],
      secrets: [],
    },
  ],
  weekly: [
    {
      name: "Weekly Data Update",
      workflow: "weekly-update.yml",
      cron: "0 14 * * 1",
      time: "Monday 6:00 AM PST",
      description: "Generate trade value, lineups, tactics, projections, draft, clutch, trade sim, community pulse",
      outputs: [
        "tradeValueData.ts", "lineupData.ts", "tacticsData.ts",
        "projectionsData.ts", "draftData.ts", "clutchData.ts",
        "tradeSimData.ts", "communityPulseData.ts",
      ],
      apis: ["Anthropic Claude"],
      secrets: ["ANTHROPIC_API_KEY"],
    },
  ],
  manual: [
    {
      name: "Backfill Missing Days",
      workflow: "backfill.yml",
      cron: "manual dispatch",
      time: "On demand",
      description: "Regenerate editions for specific past dates",
      outputs: ["Historical editions + archive"],
      apis: ["ESPN (free)", "Anthropic Claude"],
      secrets: ["ANTHROPIC_API_KEY"],
    },
  ],
};

// ── Display schedule ──────────────────────────────────────────────────────

function printSchedule() {
  console.log("════════════════════════════════════════════════════════════");
  console.log("  Hoops Intel — Recurring Content Update Schedule");
  console.log("════════════════════════════════════════════════════════════\n");

  for (const [category, items] of Object.entries(SCHEDULE)) {
    const label = category.charAt(0).toUpperCase() + category.slice(1);
    console.log(`── ${label} ──────────────────────────────────────────`);
    for (const item of items) {
      console.log(`  ${item.name}`);
      console.log(`    Schedule:    ${item.time}`);
      console.log(`    Workflow:    ${item.workflow}`);
      console.log(`    APIs:        ${item.apis.join(", ")}`);
      console.log(`    Outputs:     ${item.outputs.join(", ")}`);
      if (item.secrets.length > 0) {
        console.log(`    Secrets:     ${item.secrets.join(", ")}`);
      }
      console.log("");
    }
  }

  // Daily timeline
  console.log("── Daily Timeline (PST) ────────────────────────────────");
  console.log("  10:30 PM*  Scores refresh (1:30 AM ET) — cache final scores");
  console.log("  12:00 AM*  Scores refresh (3:00 AM ET) — late game catchup");
  console.log("   5:00 AM   Daily Edition — ESPN fetch + Claude generation");
  console.log("   5:05 AM   Social Media — post to Twitter/X + Bluesky");
  console.log("   5:15 AM   Email Digest — send to subscribers (15 min delay)");
  console.log("   5:10 AM   Auto-Retry — if edition failed (10 min delay)");
  console.log("   2:00 PM   Midday Refresh — sentiment, momentum, watch guide");
  console.log("   2:00 PM*  Injury Monitor starts (5 PM ET) — every 30 min");
  console.log("   9:00 PM*  Injury Monitor ends (midnight ET)");
  console.log("  * Times approximate, shown in PST for consistency\n");

  console.log("── Season Awareness ────────────────────────────────────");
  const today = new Date();
  const mode = seasonMode(today);
  console.log(`  Today (${today.toISOString().slice(0, 10)}): mode = ${mode}`);
  console.log(`  Active: ${generatorActive(today) ? "yes" : "no (dead period)"}`);
  console.log(`  Primary generator: ${primaryGenerator(today)}`);
  console.log("");
  console.log("  Content windows:");
  console.log("    Oct–mid-Apr   regular-season    generate-edition.mjs");
  console.log("    mid-Apr–May   playoffs          generate-edition.mjs (playoff mode)");
  console.log("    early June    finals            generate-edition.mjs (finals mode)");
  console.log("    late June     draft             generate-draft.mjs");
  console.log("    Jul 1–10      free-agency       generate-edition.mjs (FA mode)");
  console.log("    Jul 10–22     summer-league     generate-edition.mjs (SL mode)");
  console.log("    late Jul–Aug  dead-period       generate-history.mjs (flashback)");
  console.log("    September     preseason         generate-edition.mjs (preseason mode)");
  console.log("");
  console.log("  NOTE: daily-update.yml uses scripts/check-generator-active.mjs (season-mode)");
  console.log("  so only the late-July/August dead period skips generation; free-agency and");
  console.log("  summer-league windows run when primaryGenerator returns generate-edition.\n");

  // API summary
  const allSecrets = new Set();
  for (const items of Object.values(SCHEDULE)) {
    for (const item of items) {
      item.secrets.forEach((s) => allSecrets.add(s));
    }
  }
  console.log("── Required GitHub Secrets ──────────────────────────────");
  for (const secret of [...allSecrets].sort()) {
    console.log(`  ${secret}`);
  }
  console.log("");
}

// ── Check mode: verify workflow files exist ──────────────────────────────

function checkWorkflows() {
  console.log("Checking workflow files...\n");
  let allExist = true;

  for (const [category, items] of Object.entries(SCHEDULE)) {
    for (const item of items) {
      const path = join(WORKFLOWS_DIR, item.workflow);
      const exists = existsSync(path);
      const icon = exists ? "PASS" : "FAIL";
      console.log(`  [${icon}] ${item.workflow} — ${item.name}`);
      if (!exists) allExist = false;
    }
  }

  console.log("");
  if (allExist) {
    console.log("All workflow files found.");
  } else {
    console.log("Some workflow files are missing!");
    process.exit(1);
  }
}

/** Ensure every seasonal mode resolves to an existing scripts/*.mjs generator. */
function verifyGeneratorsForSeasonModes() {
  const scriptDir = join(ROOT, "scripts");
  const samples = [
    ["regular-season", new Date(Date.UTC(2026, 0, 10))],
    ["playoffs", new Date(Date.UTC(2026, 3, 25))],
    ["finals", new Date(Date.UTC(2026, 5, 10))],
    ["draft", new Date(Date.UTC(2026, 5, 25))],
    ["free-agency", new Date(Date.UTC(2026, 6, 5))],
    ["summer-league", new Date(Date.UTC(2026, 6, 15))],
    ["dead-period", new Date(Date.UTC(2026, 6, 28))],
    ["preseason", new Date(Date.UTC(2026, 8, 15))],
  ];

  for (const [label, d] of samples) {
    const gen = primaryGenerator(d);
    const p = join(scriptDir, gen);
    if (!existsSync(p)) {
      console.error(`[verify-generators] Mode "${label}" (${d.toISOString().slice(0, 10)}) → ${gen} — FILE MISSING`);
      process.exit(1);
    }
    console.log(`[verify-generators] ${label} → ${gen} ✓`);
  }

  const requiredBaseline = ["generate-edition.mjs", "generate-draft.mjs", "generate-history.mjs"];
  for (const g of requiredBaseline) {
    const p = join(scriptDir, g);
    if (!existsSync(p)) {
      console.error(`[verify-generators] Required baseline file missing: ${g}`);
      process.exit(1);
    }
  }
}

// ── Main ─────────────────────────────────────────────────────────────────

if (VERIFY_GENERATORS_MODE) {
  verifyGeneratorsForSeasonModes();
  process.exit(0);
}

printSchedule();
if (CHECK_MODE) {
  checkWorkflows();
}
