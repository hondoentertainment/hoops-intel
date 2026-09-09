// Shared output validator used by the daily and weekly generation runners.
//
// The data files Claude generates are TypeScript module bodies that are
// almost entirely object/array literals. esbuild's parser catches the
// failure modes Claude actually produces:
//   - unterminated strings (output truncated mid-token)
//   - duplicate object keys (same field generated twice)
//   - mismatched brackets / stray commas
//
// We run this *after* a generator script exits 0 so a syntactically broken
// file is treated as a script failure rather than getting committed and
// breaking the Vercel build (which is what happened with `draftData.ts` and
// `tradeSimData.ts` on 2026-04-20).

import { existsSync, readFileSync } from "fs";

/**
 * True when the last non-empty line looks like a finished TS module statement.
 * Claude sometimes closes a valid file with a helper assignment instead of
 * `};` — that pattern sank the 2026-09-07 weekly run (#373) even though the
 * last line was a complete statement:
 *   (projectionsData as ProjectionsData).teams = _allTeams;
 */
export function hasCompleteModuleEnding(lastLine) {
  const line = (lastLine ?? "").trim();
  if (!line) return false;
  if (
    line.endsWith("};") ||
    line.endsWith("}") ||
    line.endsWith(");") ||
    /^export\s/.test(line)
  ) {
    return true;
  }
  // Complete assignment / expression statement (not a mid-object field).
  return /=\s*[\w.[\]"'`]+;\s*$/.test(line);
}

export async function validateOutput(absPath) {
  if (!existsSync(absPath)) return { ok: false, reason: "output file missing" };
  const code = readFileSync(absPath, "utf8");
  const trimmed = code.trimEnd();
  const lastLine = (trimmed.split(/\r?\n/).filter(Boolean).pop() ?? "").trim();
  if (!hasCompleteModuleEnding(lastLine)) {
    return {
      ok: false,
      reason: `truncated: unexpected file ending (${lastLine.slice(0, 80)})`,
    };
  }
  try {
    const { transform } = await import("esbuild");
    await transform(code, { loader: "ts", format: "esm", target: "esnext" });
    return { ok: true };
  } catch (err) {
    const first = (err.errors?.[0]?.text || err.message || String(err)).split("\n")[0];
    const loc = err.errors?.[0]?.location;
    const where = loc ? ` (line ${loc.line})` : "";
    return { ok: false, reason: `syntax: ${first}${where}` };
  }
}
