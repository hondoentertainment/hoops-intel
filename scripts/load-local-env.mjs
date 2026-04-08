// Load KEY=value pairs from the first existing env file (does not override existing process.env).
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

const CANDIDATES = [
  join(ROOT, ".env.local"),
  join(ROOT, ".env"),
  join(ROOT, "..", "hoops-intel", ".env.local"),
  join(ROOT, "..", "hoops-intel", ".env"),
];

function parseAndApply(raw) {
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq <= 0) continue;
    const key = t.slice(0, eq).trim();
    let val = t.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (key && process.env[key] === undefined) process.env[key] = val;
  }
}

export function loadLocalEnv() {
  for (const p of CANDIDATES) {
    if (existsSync(p)) {
      try {
        parseAndApply(readFileSync(p, "utf8"));
        return p;
      } catch {
        /* ignore */
      }
    }
  }
  return null;
}
