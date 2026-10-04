// Parse and lightly repair Claude's pulseData.ts drafts before they are written.
// The 2026-10-04 daily run aborted because a missing semicolon let `narrative`'s
// literal swallow the next `export`, and `triviaQuestion` never found its `;`.

export function stripMarkdownFences(src) {
  let s = String(src ?? "").trim();
  if (s.startsWith("```")) {
    s = s.replace(/^```(?:typescript|ts|javascript|js)?[ \t]*\r?\n?/, "");
    s = s.replace(/\r?\n?```[ \t]*$/, "");
  }
  return s.trim();
}

function topLevelClosed(src) {
  let depth = 0;
  let inStr = false;
  let strCh = "";
  let esc = false;
  for (let i = 0; i < src.length; i++) {
    const ch = src[i];
    if (esc) {
      esc = false;
      continue;
    }
    if (inStr) {
      if (ch === "\\") {
        esc = true;
        continue;
      }
      if (ch === strCh) inStr = false;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inStr = true;
      strCh = ch;
      continue;
    }
    if (ch === "{" || ch === "[" || ch === "(") depth++;
    else if (ch === "}" || ch === "]" || ch === ")") {
      depth--;
      if (depth < 0) return false;
    }
  }
  return depth === 0 && !inStr;
}

/**
 * Repair the two shapes that failed run 37174921849:
 * - `}\nexport const` with no semicolon (literal eval then sees `export`)
 * - a closed final export that never received its terminator
 * Does not invent brackets for a truncated object.
 */
export function repairPulseSource(src) {
  let s = stripMarkdownFences(src);
  s = s.replace(/([^\s;])[ \t]*\r?\n+(?=export\s+const\s+)/g, "$1;\n");
  const trimmed = s.trimEnd();
  if (trimmed && !trimmed.endsWith(";") && /[}\]"']$/.test(trimmed) && topLevelClosed(trimmed)) {
    s = `${trimmed};\n`;
  }
  return s;
}

function stripTopLevelTsAssertion(literal) {
  let depth = 0;
  let inStr = false;
  let strCh = "";
  let esc = false;
  for (let i = 0; i < literal.length; i++) {
    const ch = literal[i];
    if (esc) {
      esc = false;
      continue;
    }
    if (inStr) {
      if (ch === "\\") {
        esc = true;
        continue;
      }
      if (ch === strCh) inStr = false;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inStr = true;
      strCh = ch;
      continue;
    }
    if (ch === "{" || ch === "[" || ch === "(") depth++;
    else if (ch === "}" || ch === "]" || ch === ")") depth--;
    else if (depth === 0 && /\sas\s/.test(literal.slice(i, i + 4))) {
      return literal.slice(0, i).trim();
    }
  }
  return literal;
}

export function extractExportLiteral(src, name, scope = {}) {
  const re = new RegExp(`export\\s+const\\s+${name}\\s*=\\s*`);
  const m = re.exec(src);
  if (!m) throw new Error("export not found");

  const start = m.index + m[0].length;
  let depth = 0;
  let inStr = false;
  let strCh = "";
  let esc = false;
  let end = -1;
  for (let i = start; i < src.length; i++) {
    const ch = src[i];
    if (esc) {
      esc = false;
      continue;
    }
    if (inStr) {
      if (ch === "\\") {
        esc = true;
        continue;
      }
      if (ch === strCh) inStr = false;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inStr = true;
      strCh = ch;
      continue;
    }
    if (ch === "{" || ch === "[" || ch === "(") depth++;
    else if (ch === "}" || ch === "]" || ch === ")") depth--;
    else if (ch === ";" && depth === 0) {
      end = i;
      break;
    }
  }
  if (end < 0) throw new Error("could not find terminating ;");

  const literal = stripTopLevelTsAssertion(src.slice(start, end).trim());
  try {
    const keys = Object.keys(scope);
    const values = keys.map((k) => scope[k]);
    return new Function(...keys, `"use strict"; return (${literal});`)(...values);
  } catch (err) {
    throw new Error(`literal eval failed: ${err.message}`);
  }
}

export function collectParseErrors(src, names) {
  const errors = [];
  const scope = {};
  for (const name of names) {
    if (!src.includes(`export const ${name}`)) {
      errors.push(`${name}: export not found`);
      continue;
    }
    try {
      scope[name] = extractExportLiteral(src, name, scope);
    } catch (err) {
      errors.push(`${name}: ${err.message}`);
    }
  }
  return { errors, scope };
}
