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

export async function validateOutput(absPath) {
  if (!existsSync(absPath)) return { ok: false, reason: "output file missing" };
  try {
    const { transform } = await import("esbuild");
    const code = readFileSync(absPath, "utf8");
    await transform(code, { loader: "ts", format: "esm", target: "esnext" });
    return { ok: true };
  } catch (err) {
    const first = (err.errors?.[0]?.text || err.message || String(err)).split("\n")[0];
    const loc = err.errors?.[0]?.location;
    const where = loc ? ` (line ${loc.line})` : "";
    return { ok: false, reason: `syntax: ${first}${where}` };
  }
}
