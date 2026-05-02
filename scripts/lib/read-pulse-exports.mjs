// Extract exported const JSON/array values from client/src/lib/pulseData.ts (JS-like literals).
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "../..");

/**
 * Read pulseData.ts and evaluate a named `export const name = …` initializer.
 * @param {string} exportName - e.g. 'fantasyAlerts'
 * @returns {unknown}
 */
export function extractPulseExport(exportName) {
  const filePath = resolve(ROOT, "client/src/lib/pulseData.ts");
  const src = readFileSync(filePath, "utf-8");
  const re = new RegExp(`export\\s+const\\s+${exportName}\\s*=\\s*`);
  const match = re.exec(src);
  if (!match) return null;
  const start = match.index + match[0].length;
  let depth = 0;
  let inString = false;
  let escape = false;
  let i = start;
  const firstChar = src[i];
  const isArrayOrObj = firstChar === "[" || firstChar === "{";
  if (isArrayOrObj) {
    for (; i < src.length; i++) {
      const ch = src[i];
      if (escape) {
        escape = false;
        continue;
      }
      if (ch === "\\") {
        escape = true;
        continue;
      }
      if (ch === '"') {
        inString = !inString;
        continue;
      }
      if (inString) continue;
      if (ch === "{" || ch === "[") depth++;
      if (ch === "}" || ch === "]") {
        depth--;
        if (depth === 0) {
          i++;
          break;
        }
      }
    }
  } else {
    i = src.indexOf(";", start);
    if (i === -1) return null;
  }
  const raw = src.slice(start, i).trim();
  try {
    return new Function(`"use strict"; return (${raw});`)();
  } catch {
    return null;
  }
}
