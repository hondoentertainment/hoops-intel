#!/usr/bin/env node
// test-assembly.mjs — Pipeline integration test for assemble-pulse-data.mjs
// Creates temporary test section JSON files, runs assembly, verifies output.
// Usage: node scripts/tests/test-assembly.mjs

import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, cpSync } from "fs";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "../..");
const ASSEMBLER = join(ROOT, "scripts/assemble-pulse-data.mjs");
const DATA_DIR = join(ROOT, ".daily-data");
const SECTIONS_DIR = join(DATA_DIR, "sections");
const PREVIOUS_DIR = join(DATA_DIR, "sections-previous");
const OUTPUT = join(ROOT, "client/src/lib/pulseData.ts");

// ── Test runner ─────────────────────────────────────────────

let passed = 0;
let failed = 0;
const failures = [];

function test(name, fn) {
  try {
    fn();
    passed++;
    console.log(`  [PASS] ${name}`);
  } catch (err) {
    failed++;
    failures.push({ name, error: err.message });
    console.log(`  [FAIL] ${name}`);
    console.log(`         ${err.message}`);
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

// ── Test data ───────────────────────────────────────────────

const TEST_SECTIONS = {
  "edition-meta": {
    generatedAt: new Date().toISOString(),
    section: "edition-meta",
    data: {
      pulseEdition: {
        date: "March 31, 2026",
        edition: "Vol. 2026 · No. 89",
        subtitle: "Test Edition Subtitle",
        editionContext: "regular",
      },
      narrative: {
        headline: "Test Headline",
        subhead: "Test Subhead",
        body: ["Test body paragraph one.", "Test body paragraph two."],
      },
    },
  },
  ticker: {
    generatedAt: new Date().toISOString(),
    section: "ticker",
    data: {
      tickerItems: [
        { text: "FINAL: TEST 100, OPP 90", type: "score" },
        { text: "TEST NEWS ITEM", type: "news" },
      ],
    },
  },
  "game-results": {
    generatedAt: new Date().toISOString(),
    section: "game-results",
    data: {
      gameResults: [
        {
          homeTeam: "OKC", homeScore: 110, awayTeam: "LAL", awayScore: 105,
          status: "final", topPerformer: "Test Player", topLine: "30 PTS",
          recap: "Test recap.", gameId: "LAL-OKC-20260331",
        },
      ],
    },
  },
  "pulse-index": {
    generatedAt: new Date().toISOString(),
    section: "pulse-index",
    data: {
      pulseIndex: Array.from({ length: 10 }, (_, i) => ({
        rank: i + 1, player: `Player ${i + 1}`, team: "OKC",
        teamRecord: "60-16", indexScore: 99 - i, trend: "stable",
        keyStats: "30 PTS", note: "Test note", rationale: "Test rationale",
      })),
    },
  },
  "stat-leaders": {
    generatedAt: new Date().toISOString(),
    section: "stat-leaders",
    data: {
      statLeaders: [
        { category: "Points", player: "Test Player", team: "OKC", value: "30", context: "Test" },
      ],
    },
  },
  "media-reactions": {
    generatedAt: new Date().toISOString(),
    section: "media-reactions",
    data: {
      mediaReactions: [
        { source: "ESPN", author: "Test Author", quote: "Test quote.", topic: "Test", sentiment: "positive" },
      ],
    },
  },
  injuries: {
    generatedAt: new Date().toISOString(),
    section: "injuries",
    data: {
      injuryUpdates: [
        { player: "Test Player", team: "DET", status: "Out", injury: "Test injury", timeline: "TBD", impact: "Test impact" },
      ],
    },
  },
  "game-previews": {
    generatedAt: new Date().toISOString(),
    section: "game-previews",
    data: {
      gamePreviews: [
        {
          homeTeam: "SAS", awayTeam: "DAL", time: "8:30 PM ET", tv: "TNT",
          spread: "SAS -7.5", overUnder: "228.5", matchup: "Mavericks at Spurs",
          storyline: "Test storyline.", prediction: "SAS 119, DAL 110", featured: true,
        },
        {
          homeTeam: "DET", awayTeam: "CLE", time: "7:00 PM ET", tv: "",
          spread: "DET -5", overUnder: "218", matchup: "Cavaliers at Pistons",
          storyline: "Test storyline 2.", prediction: "DET 108, CLE 102", featured: false,
        },
      ],
    },
  },
  "rookies-fantasy": {
    generatedAt: new Date().toISOString(),
    section: "rookies-fantasy",
    data: {
      rookieWatch: [
        { rank: 1, player: "Test Rookie", team: "CHA", statLine: "20 PPG", note: "Test note", trend: "up" },
      ],
      fantasyAlerts: [
        { player: "Test Fantasy", team: "LAC", action: "add", reason: "Test reason", urgency: "high" },
      ],
    },
  },
  standings: {
    generatedAt: new Date().toISOString(),
    section: "standings",
    data: {
      eastStandings: Array.from({ length: 10 }, (_, i) => ({
        rank: i + 1,
        team: ["DET","BOS","NYK","CLE","TOR","ATL","PHI","MIA","ORL","CHA"][i],
        wins: 54 - i * 2, losses: 20 + i * 2, pct: ".700",
        gb: i === 0 ? "—" : `${i * 2}.0`, streak: "W1", last10: "7-3", conf: "east",
      })),
      westStandings: Array.from({ length: 10 }, (_, i) => ({
        rank: i + 1,
        team: ["OKC","SAS","LAL","DEN","MIN","HOU","PHX","LAC","POR","GSW"][i],
        wins: 59 - i * 3, losses: 16 + i * 3, pct: ".750",
        gb: i === 0 ? "—" : `${i * 3}.0`, streak: "W1", last10: "8-2", conf: "west",
      })),
    },
  },
  "history-trivia": {
    generatedAt: new Date().toISOString(),
    section: "history-trivia",
    data: {
      historyFact: { year: 2000, fact: "Test history fact.", players: [] },
      triviaQuestion: {
        id: "2026-03-31", question: "Test question?",
        options: ["A", "B", "C", "D"], correctIndex: 0,
        explanation: "Test explanation.", relatedPlayer: "test-player", difficulty: "easy",
      },
      hoopsIQ: {
        questions: [
          {
            question: "Test IQ question?", options: ["A. 1", "B. 2", "C. 3", "D. 4"],
            answer: "A", explanation: "Test explanation.", difficulty: "easy",
          },
        ],
      },
    },
  },
};

const REQUIRED_EXPORTS = [
  "pulseEdition", "narrative", "tickerItems", "gameResults",
  "pulseIndex", "statLeaders", "mediaReactions", "injuryUpdates",
  "gamePreviews", "rookieWatch", "fantasyAlerts",
  "eastStandings", "westStandings",
  "historyFact", "triviaQuestion", "hoopsIQ",
];

// ── Helpers ─────────────────────────────────────────────────

let backupSections = null;
let backupPrevious = null;
let backupOutput = null;

function backup() {
  const tmpDir = join(ROOT, ".daily-data", "_test-backup");
  mkdirSync(tmpDir, { recursive: true });

  if (existsSync(SECTIONS_DIR)) {
    backupSections = join(tmpDir, "sections");
    cpSync(SECTIONS_DIR, backupSections, { recursive: true });
  }
  if (existsSync(PREVIOUS_DIR)) {
    backupPrevious = join(tmpDir, "sections-previous");
    cpSync(PREVIOUS_DIR, backupPrevious, { recursive: true });
  }
  if (existsSync(OUTPUT)) {
    backupOutput = join(tmpDir, "pulseData.ts");
    cpSync(OUTPUT, backupOutput);
  }
}

function restore() {
  const tmpDir = join(ROOT, ".daily-data", "_test-backup");

  // Remove test artifacts
  if (existsSync(SECTIONS_DIR)) rmSync(SECTIONS_DIR, { recursive: true });
  if (existsSync(PREVIOUS_DIR)) rmSync(PREVIOUS_DIR, { recursive: true });

  // Restore originals
  if (backupSections) cpSync(backupSections, SECTIONS_DIR, { recursive: true });
  if (backupPrevious) cpSync(backupPrevious, PREVIOUS_DIR, { recursive: true });
  if (backupOutput) cpSync(backupOutput, OUTPUT);

  // Clean up backup
  if (existsSync(tmpDir)) rmSync(tmpDir, { recursive: true });
}

function writeTestSections(sections) {
  mkdirSync(SECTIONS_DIR, { recursive: true });
  for (const [name, data] of Object.entries(sections)) {
    writeFileSync(join(SECTIONS_DIR, `${name}.json`), JSON.stringify(data, null, 2));
  }
}

function runAssembler() {
  // Quote the path so spaces in the workspace directory (common on Windows
  // — e.g. `C:\Users\…\OneDrive\Desktop\Hoops Intel`) don't get split into
  // separate argv entries.
  return execSync(`node "${ASSEMBLER}"`, {
    cwd: ROOT,
    encoding: "utf8",
    stdio: ["pipe", "pipe", "pipe"],
  });
}

// ── Tests ───────────────────────────────────────────────────

function main() {
  console.log("\n=== Pipeline Assembly Integration Tests ===\n");

  // Back up existing data
  backup();

  try {
    // ── Test 1: Full assembly with all sections ──

    test("full assembly produces output with all expected exports", () => {
      // Clear existing sections
      if (existsSync(SECTIONS_DIR)) rmSync(SECTIONS_DIR, { recursive: true });
      if (existsSync(PREVIOUS_DIR)) rmSync(PREVIOUS_DIR, { recursive: true });

      writeTestSections(TEST_SECTIONS);
      runAssembler();

      assert(existsSync(OUTPUT), "Output file should exist after assembly");
      const content = readFileSync(OUTPUT, "utf8");

      for (const exp of REQUIRED_EXPORTS) {
        const pattern = new RegExp(`export\\s+const\\s+${exp}\\s*=`);
        assert(pattern.test(content), `Output missing export: ${exp}`);
      }
    });

    // ── Test 2: Header contains correct date and edition ──

    test("output header contains correct date and edition number", () => {
      const content = readFileSync(OUTPUT, "utf8");
      assert(
        content.includes("March 31, 2026"),
        "Header should contain the edition date",
      );
      assert(
        content.includes("No. 89"),
        "Header should contain the edition number",
      );
    });

    // ── Test 3: Fallback works when a section is missing ──

    test("fallback to previous section when current is missing", () => {
      // The previous run should have copied sections to sections-previous.
      // Now remove one section from current and re-assemble.
      if (existsSync(SECTIONS_DIR)) rmSync(SECTIONS_DIR, { recursive: true });
      mkdirSync(SECTIONS_DIR, { recursive: true });

      // Write all sections EXCEPT "ticker" to current
      const partial = { ...TEST_SECTIONS };
      delete partial.ticker;
      writeTestSections(partial);

      // Run assembler — it should fall back to sections-previous for ticker
      const output = runAssembler();

      const content = readFileSync(OUTPUT, "utf8");
      const tickerPattern = /export\s+const\s+tickerItems\s*=/;
      assert(
        tickerPattern.test(content),
        "tickerItems should still appear via fallback from sections-previous",
      );
    });

    // ── Test 4: Missing section with no fallback is handled ──

    test("missing section with no fallback is noted (does not crash)", () => {
      // Clear both current and previous
      if (existsSync(SECTIONS_DIR)) rmSync(SECTIONS_DIR, { recursive: true });
      if (existsSync(PREVIOUS_DIR)) rmSync(PREVIOUS_DIR, { recursive: true });
      mkdirSync(SECTIONS_DIR, { recursive: true });

      // Write all sections except "ticker" — and no previous exists
      const partial = { ...TEST_SECTIONS };
      delete partial.ticker;
      writeTestSections(partial);

      // Assembler exits with code 2 for partial assembly
      let exitCode = 0;
      try {
        runAssembler();
      } catch (err) {
        exitCode = err.status;
      }

      assert(exitCode === 2, `Expected exit code 2 for partial assembly, got ${exitCode}`);

      // Output should still exist with other exports
      const content = readFileSync(OUTPUT, "utf8");
      const editionPattern = /export\s+const\s+pulseEdition\s*=/;
      assert(editionPattern.test(content), "Other exports should still be present");
    });

    // ── Test 5: Assembled data is valid JSON ──

    test("assembled export values are valid JSON", () => {
      // Re-run with all sections
      if (existsSync(SECTIONS_DIR)) rmSync(SECTIONS_DIR, { recursive: true });
      if (existsSync(PREVIOUS_DIR)) rmSync(PREVIOUS_DIR, { recursive: true });
      writeTestSections(TEST_SECTIONS);
      runAssembler();

      const content = readFileSync(OUTPUT, "utf8");

      // Extract and parse a few key exports to verify valid JSON
      for (const exp of ["pulseEdition", "gameResults", "eastStandings"]) {
        const regex = new RegExp(`export\\s+const\\s+${exp}\\s*=\\s*`);
        const match = regex.exec(content);
        assert(match, `Could not find export ${exp}`);

        const start = match.index + match[0].length;
        let depth = 0;
        let inString = false;
        let escape = false;
        let i = start;

        for (; i < content.length; i++) {
          const ch = content[i];
          if (escape) { escape = false; continue; }
          if (ch === "\\") { escape = true; continue; }
          if (ch === '"') { inString = !inString; continue; }
          if (inString) continue;
          if (ch === "{" || ch === "[") depth++;
          if (ch === "}" || ch === "]") {
            depth--;
            if (depth === 0) { i++; break; }
          }
        }

        const jsonStr = content.slice(start, i);
        try {
          JSON.parse(jsonStr);
        } catch {
          throw new Error(`Export "${exp}" is not valid JSON`);
        }
      }
    });
  } finally {
    // Always restore original data
    restore();
  }

  // ── Summary ───────────────────────────────────────────────

  console.log(`\n--- Results: ${passed} passed, ${failed} failed ---`);
  if (failures.length > 0) {
    console.log("\nFailures:");
    for (const f of failures) {
      console.log(`  - ${f.name}: ${f.error}`);
    }
  }
  console.log("");

  process.exit(failed > 0 ? 1 : 0);
}

main();
