// @vitest-environment node
/**
 * Vercel Node functions are ESM because the repo package.json sets
 * `"type": "module"`. The runtime error after #412 was:
 *   ERR_MODULE_NOT_FOUND: Cannot find module '/var/task/api/_lib/nodeHandler'
 *   imported from /var/task/api/ask.js
 * Node does not add a .js extension. This test transpiles the Node routes
 * the way that failure presented (each file emitted, imports left intact)
 * and loads them with real Node ESM.
 */
import { spawnSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildSync } from "esbuild";
import { describe, expect, it } from "vitest";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function nodeRouteSources(): string[] {
  return readdirSync(path.join(repoRoot, "api"))
    .filter((name) => name.endsWith(".ts") && !name.endsWith(".test.ts"))
    .map((name) => path.join("api", name))
    .filter((rel) => {
      const source = readFileSync(path.join(repoRoot, rel), "utf8");
      return source.includes('runtime: "nodejs"') || source.includes("runtime: 'nodejs'");
    });
}

const sharedDeps = [
  "api/_lib/nodeHandler.ts",
  "api/_lib/embedRateLimiter.ts",
  "api/_lib/embedAnalyticsDays.ts",
  "api/_lib/resendSend.ts",
  "shared/pushTopics.ts",
  "shared/pushAlertHistory.ts",
];

describe("Vercel Node ESM emit", () => {
  it("loads transpiled Node routes without ERR_MODULE_NOT_FOUND", () => {
    const routes = nodeRouteSources();
    expect(routes).toContain("api/ask.ts");
    expect(routes.length).toBeGreaterThanOrEqual(13);

    const outdir = mkdtempSync(path.join(tmpdir(), "hoops-esm-"));
    try {
      buildSync({
        absWorkingDir: repoRoot,
        entryPoints: [...routes, ...sharedDeps],
        bundle: false,
        format: "esm",
        platform: "node",
        outbase: repoRoot,
        outdir,
        logLevel: "silent",
      });

      const askJs = readFileSync(path.join(outdir, "api/ask.js"), "utf8");
      expect(askJs).toMatch(/from ["']\.\/_lib\/nodeHandler\.js["']/);
      expect(askJs).not.toMatch(/from ["']\.\/_lib\/nodeHandler["']/);
      expect(existsSync(path.join(outdir, "api/_lib/nodeHandler.js"))).toBe(true);

      const embedJs = readFileSync(path.join(outdir, "api/embed-analytics.js"), "utf8");
      expect(embedJs).toContain("./_lib/embedRateLimiter.js");
      expect(embedJs).toContain("./_lib/nodeHandler.js");

      const guestJs = readFileSync(path.join(outdir, "api/guest-pulse-queue.js"), "utf8");
      expect(guestJs).toContain("./_lib/resendSend.js");

      const pushJs = readFileSync(path.join(outdir, "api/push-notify.js"), "utf8");
      expect(pushJs).toContain("../shared/pushTopics.js");

      for (const rel of routes) {
        const js = readFileSync(path.join(outdir, rel.replace(/\.ts$/, ".js")), "utf8");
        const specifiers = js.match(/from ["'](\.\.?\/[^"']+)["']/g) ?? [];
        expect(specifiers.length, rel).toBeGreaterThan(0);
        for (const specifier of specifiers) {
          expect(specifier, rel).toMatch(/\.js["']$/);
        }
      }

      writeFileSync(path.join(outdir, "package.json"), JSON.stringify({ type: "module" }));
      symlinkSync(path.join(repoRoot, "node_modules"), path.join(outdir, "node_modules"));

      const loader = `
        const routes = ${JSON.stringify(routes.map((rel) => `./${rel.replace(/\.ts$/, ".js")}`))};
        for (const route of routes) {
          const mod = await import(route);
          if (typeof mod.default !== "function") {
            throw new Error(route + " default export is " + typeof mod.default);
          }
        }
        console.log("loaded " + routes.length);
      `;
      const loaderPath = path.join(outdir, "load-all.mjs");
      writeFileSync(loaderPath, loader);

      const result = spawnSync(process.execPath, [loaderPath], {
        cwd: outdir,
        encoding: "utf8",
      });
      if (result.status !== 0) {
        throw new Error(result.stderr || result.stdout || `node exited ${result.status}`);
      }
      expect(result.stdout).toContain(`loaded ${routes.length}`);
    } finally {
      rmSync(outdir, { recursive: true, force: true });
    }
  });
});
