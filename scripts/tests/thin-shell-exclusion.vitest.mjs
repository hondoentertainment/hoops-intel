import { describe, expect, it } from "vitest";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { generate, isSitemapIndexablePlayer } from "../generate-sitemap.mjs";
import { assertThinPlayerShells } from "../validate-generated-structure.mjs";
import { THIN_PLAYER_SHELLS, thinShellViolation } from "../lib/thin-player-shells.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..");

const lists = {
  historical: new Set(["Michael Jordan", "Kobe Bryant"]),
  retired: new Set(["Chris Paul"]),
  nonPlayers: new Set(["Gregg Popovich"]),
};

const CONTROLS = ["Joel Embiid", "Chris Paul", "Victor Wembanyama", "Amen Thompson", "Michael Jordan"];

function slugify(name) {
  return String(name)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Excluded until a substantive card exists — the thin-shell contract, not historical/retired bans. */
function blockedByGenerate(name) {
  const bare = isSitemapIndexablePlayer(name, { inPulse: true, substantive: false, mentions: 8 }, lists);
  const rich = isSitemapIndexablePlayer(name, { inPulse: false, substantive: true, mentions: 8 }, lists);
  return bare === false && rich === true;
}

function blockedByValidator(name) {
  const loc = `https://hoopsintel.net/player/${slugify(name)}`;
  const barePulse = `export const pulseIndex = [{player:"${name}",team:"LAL"}];`;
  const richPulse = `export const pulseIndex = [{player:"${name}",team:"LAL",indexScore:90,keyStats:"24 / 6 / 5",note:"Full counting line."}];`;
  let bareBlocked = false;
  try {
    assertThinPlayerShells([loc], barePulse);
  } catch (err) {
    bareBlocked = true;
    const message = String(err.message ?? err);
    expect(message.split("\n")).toHaveLength(1);
    expect(message).toContain(loc);
    expect(message).toContain("thin-player-shell");
    expect(message).toContain(`substantive Pulse card (keyStats, note, and indexScore) for ${name}`);
  }
  let richBlocked = false;
  try {
    assertThinPlayerShells([loc], richPulse);
  } catch {
    richBlocked = true;
  }
  return bareBlocked && !richBlocked;
}

const SLATE = `
// GAME RESULTS — No Games
export const pulseEdition = {date:"December 31, 2099"};
export const gameResults = [];
export const gamePreviews = [];
`;

describe("thin-shell exclusion cannot drift", () => {
  it("generator and validator block the same players unless the Pulse card is substantive", () => {
    const candidates = [...THIN_PLAYER_SHELLS.map((row) => row.name), ...CONTROLS];
    const fromGenerate = candidates.filter(blockedByGenerate).sort();
    const fromValidator = candidates.filter(blockedByValidator).sort();
    expect(fromGenerate).toEqual(fromValidator);
    expect(fromGenerate).toEqual(THIN_PLAYER_SHELLS.map((row) => row.name).sort());
    expect(fromGenerate).not.toContain("Joel Embiid");
  });

  it("generate() output agrees with the validator for bare shells and for full cards", () => {
    const bareRows = [
      ...THIN_PLAYER_SHELLS.map((row) => `{player:"${row.name}",team:"${row.team}"}`),
      `{player:"Joel Embiid",team:"PHI"}`,
    ];
    const bare = `${SLATE}export const pulseIndex = [${bareRows.join(",")}];
export const injuryUpdates = [${THIN_PLAYER_SHELLS.map((row) => `{player:"${row.name}",team:"${row.team}",status:"Out"}`).join(",")}];`;
    const { urls: bareUrls } = generate({ write: false, pulseSource: bare });
    const bareLocs = bareUrls.map((u) => `https://hoopsintel.net${u.loc}`);
    expect(() => assertThinPlayerShells(bareLocs, bare)).not.toThrow();
    for (const row of THIN_PLAYER_SHELLS) {
      expect(bareUrls.some((u) => u.loc === row.loc)).toBe(false);
      expect(() => assertThinPlayerShells([...bareLocs, `https://hoopsintel.net${row.loc}`], bare)).toThrow(
        /violates thin-player-shell:/,
      );
    }
    expect(bareUrls.some((u) => u.loc === "/player/joel-embiid")).toBe(false);

    const richRows = [
      ...THIN_PLAYER_SHELLS.map(
        (row) => `{player:"${row.name}",team:"${row.team}",indexScore:88,keyStats:"30 / 10 / 8",note:"Counting line and context."}`,
      ),
      `{player:"Joel Embiid",team:"PHI",indexScore:91,keyStats:"32 / 11 / 5",note:"A full Pulse card."}`,
    ];
    const rich = `${SLATE}export const pulseIndex = [${richRows.join(",")}];`;
    const { urls: richUrls } = generate({ write: false, pulseSource: rich });
    expect(() => assertThinPlayerShells(richUrls.map((u) => `https://hoopsintel.net${u.loc}`), rich)).not.toThrow();
    for (const row of THIN_PLAYER_SHELLS) {
      expect(richUrls.some((u) => u.loc === row.loc)).toBe(true);
    }
    expect(richUrls.some((u) => u.loc === "/player/joel-embiid")).toBe(true);
  });

  it("names the URL, the rule, and the fix on one line", () => {
    const line = thinShellViolation("https://hoopsintel.net/player/kawhi-leonard", "Kawhi Leonard");
    expect(line).toBe(
      "https://hoopsintel.net/player/kawhi-leonard violates thin-player-shell: remove this URL from the sitemap, or add a substantive Pulse card (keyStats, note, and indexScore) for Kawhi Leonard before indexing",
    );
    expect(line.includes("\n")).toBe(false);
  });

  it("keeps the shell list in one module", () => {
    const gen = readFileSync(join(ROOT, "scripts/generate-sitemap.mjs"), "utf8");
    const val = readFileSync(join(ROOT, "scripts/validate-generated-structure.mjs"), "utf8");
    expect(gen).not.toMatch(/THIN_PLAYER_SHELLS\s*=\s*\[/);
    expect(val).not.toMatch(/THIN_PLAYER_SHELLS\s*=\s*\[/);
    expect(gen).toContain("./lib/thin-player-shells.mjs");
    expect(val).toContain("./lib/thin-player-shells.mjs");
  });
});
