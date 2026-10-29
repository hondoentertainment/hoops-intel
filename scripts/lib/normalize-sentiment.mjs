// Claude copies TeamSentiment.narrativeSummary onto player objects (and the
// reverse). esbuild accepts the excess property, so the bad file commits and
// `tsc` is the first check that fails. Rewrite each entry onto its own type
// before the generator writes sentimentData.ts.
//
// Player narrative text lives only on narrativeArc. When that field is missing
// or blank, narrativeSummary is renamed onto it. A real narrativeArc is kept
// and the stray team field is dropped. Teams mirror that with narrativeSummary.

import { extractExportLiteral, stripMarkdownFences } from "./pulse-export-parse.mjs";

const SENTIMENTS = new Set(["positive", "negative", "mixed", "neutral"]);

const PLAYER_INTERFACE = `export interface PlayerSentiment {
  player: string;
  team: string;
  sentiment: "positive" | "negative" | "mixed" | "neutral";
  score: number;
  mentions: number;
  topTake: string;
  narrativeArc: string;
}`;

const TEAM_INTERFACE = `export interface TeamSentiment {
  team: string;
  teamFull: string;
  sentiment: "positive" | "negative" | "mixed" | "neutral";
  score: number;
  buzzWords: string[];
  narrativeSummary: string;
}`;

const PLAYER_SPEC = {
  allowed: ["player", "team", "sentiment", "score", "mentions", "topTake", "narrativeArc"],
  canonical: "narrativeArc",
  stray: "narrativeSummary",
  kind: "player",
};

const TEAM_SPEC = {
  allowed: ["team", "teamFull", "sentiment", "score", "buzzWords", "narrativeSummary"],
  canonical: "narrativeSummary",
  stray: "narrativeArc",
  kind: "team",
};

function allowedSet(spec) {
  return new Set(spec.allowed);
}

function scanBracketed(src, openIndex) {
  let depth = 0;
  let inStr = false;
  let strCh = "";
  let esc = false;
  for (let i = openIndex; i < src.length; i++) {
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
      if (depth === 0) return i;
    }
  }
  throw new Error("sentiment normalizer: unclosed bracket");
}

function isBlankLiteral(raw) {
  const t = String(raw ?? "").trim();
  const m = t.match(/^(['"`])([\s\S]*)\1$/);
  if (!m) return false;
  return m[2].trim() === "";
}

export function normalizePropList(props, spec) {
  const allowed = allowedSet(spec);
  const valueOf = new Map(props.map((p) => [p.key, p.rawValue]));
  const canonicalRaw = valueOf.get(spec.canonical);
  const strayRaw = valueOf.get(spec.stray);
  const canonicalUsable = canonicalRaw != null && !isBlankLiteral(canonicalRaw);
  const strayUsable = strayRaw != null && !isBlankLiteral(strayRaw);
  const resolvedCanonical = canonicalUsable ? canonicalRaw : strayUsable ? strayRaw : canonicalRaw;

  const emitted = new Set();
  const out = [];
  for (const prop of props) {
    let key = prop.key;
    let rawValue = prop.rawValue;
    if (key === spec.stray) {
      if (!canonicalUsable && strayUsable && !emitted.has(spec.canonical)) {
        key = spec.canonical;
        rawValue = strayRaw;
      } else {
        continue;
      }
    }
    if (key === spec.canonical && resolvedCanonical != null) {
      rawValue = resolvedCanonical;
    }
    if (!allowed.has(key) || emitted.has(key)) continue;
    out.push({ key, rawValue });
    emitted.add(key);
  }
  return out;
}

function parseProps(objectSrc) {
  const end = objectSrc.length - 1;
  if (objectSrc[0] !== "{" || objectSrc[end] !== "}") {
    throw new Error("sentiment normalizer: expected an object literal");
  }
  const props = [];
  let i = 1;
  while (i < end) {
    while (i < end && /[\s,]/.test(objectSrc[i])) i++;
    if (i >= end) break;
    if (objectSrc.startsWith("//", i)) {
      const nl = objectSrc.indexOf("\n", i);
      i = nl < 0 ? end : nl + 1;
      continue;
    }
    let key;
    const quote = objectSrc[i];
    if (quote === '"' || quote === "'") {
      let j = i + 1;
      let esc = false;
      for (; j < end; j++) {
        if (esc) {
          esc = false;
          continue;
        }
        if (objectSrc[j] === "\\") {
          esc = true;
          continue;
        }
        if (objectSrc[j] === quote) break;
      }
      key = objectSrc.slice(i + 1, j);
      i = j + 1;
    } else if (/[A-Za-z_$]/.test(objectSrc[i])) {
      const m = /^[A-Za-z_$][\w$]*/.exec(objectSrc.slice(i));
      key = m[0];
      i += key.length;
    } else {
      throw new Error(
        `sentiment normalizer: unexpected token near ${JSON.stringify(objectSrc.slice(i, i + 40))}`,
      );
    }
    while (i < end && /\s/.test(objectSrc[i])) i++;
    if (objectSrc[i] !== ":") throw new Error(`sentiment normalizer: expected colon after ${key}`);
    i++;
    while (i < end && /\s/.test(objectSrc[i])) i++;
    const valueStart = i;
    let depth = 0;
    let inStr = false;
    let strCh = "";
    let esc = false;
    for (; i < end; i++) {
      const ch = objectSrc[i];
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
        if (depth === 0) break;
        depth--;
      } else if (ch === "," && depth === 0) break;
    }
    const rawValue = objectSrc.slice(valueStart, i).trim();
    if (!rawValue) throw new Error(`sentiment normalizer: empty value for ${key}`);
    props.push({ key, rawValue });
  }
  return props;
}

function reprintObject(props, original) {
  const indentMatch = original.match(/\n([ \t]*)\S/);
  const propIndent = indentMatch ? indentMatch[1] : "  ";
  const closeIndent = propIndent.length >= 2 ? propIndent.slice(0, -2) : "";
  if (props.length === 0) return "{}";
  const lines = props.map((p) => `${propIndent}${p.key}: ${p.rawValue},`);
  return `{\n${lines.join("\n")}\n${closeIndent}}`;
}

function rewriteObjectsInArrayBody(body, spec) {
  let result = "";
  let i = 0;
  while (i < body.length) {
    if (body.startsWith("//", i)) {
      const nl = body.indexOf("\n", i);
      const end = nl < 0 ? body.length : nl + 1;
      result += body.slice(i, end);
      i = end;
      continue;
    }
    if (body[i] === "{") {
      const end = scanBracketed(body, i);
      const obj = body.slice(i, end + 1);
      result += reprintObject(normalizePropList(parseProps(obj), spec), obj);
      i = end + 1;
      continue;
    }
    result += body[i];
    i++;
  }
  return result;
}

function sentimentLiteralSpan(src) {
  const re = /export\s+const\s+sentimentData\b(?:\s*:\s*[A-Za-z_][\w]*)?\s*=\s*/;
  const m = re.exec(src);
  if (!m) throw new Error("sentiment normalizer: export const sentimentData not found");
  const brace = src.indexOf("{", m.index + m[0].length);
  if (brace < 0) throw new Error("sentiment normalizer: sentimentData object not found");
  return { start: brace, end: scanBracketed(src, brace) };
}

function findPropertyArray(src, key, from, to) {
  let i = from;
  let inStr = false;
  let strCh = "";
  let esc = false;
  while (i < to) {
    const ch = src[i];
    if (esc) {
      esc = false;
      i++;
      continue;
    }
    if (inStr) {
      if (ch === "\\") esc = true;
      else if (ch === strCh) inStr = false;
      i++;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") {
      inStr = true;
      strCh = ch;
      i++;
      continue;
    }
    if (ch === "/" && src[i + 1] === "/") {
      const nl = src.indexOf("\n", i);
      i = nl < 0 ? to : nl + 1;
      continue;
    }
    if (src.startsWith(key, i) && (i === from || !/[\w$]/.test(src[i - 1]))) {
      let j = i + key.length;
      while (j < to && /\s/.test(src[j])) j++;
      if (src[j] === ":") {
        j++;
        while (j < to && /\s/.test(src[j])) j++;
        if (src[j] === "[") return j;
      }
    }
    i++;
  }
  return -1;
}

function replaceArray(src, key, spec) {
  const span = sentimentLiteralSpan(src);
  const bracket = findPropertyArray(src, key, span.start, span.end);
  if (bracket < 0) throw new Error(`sentiment normalizer: missing ${key} array`);
  const end = scanBracketed(src, bracket);
  const body = src.slice(bracket + 1, end);
  return src.slice(0, bracket + 1) + rewriteObjectsInArrayBody(body, spec) + src.slice(end);
}

function ensureInterface(src, name, declaration) {
  const re = new RegExp(`export\\s+interface\\s+${name}\\s*\\{`);
  const m = re.exec(src);
  if (!m) {
    const exp = src.search(/export\s+const\s+sentimentData\b/);
    if (exp < 0) throw new Error("sentiment normalizer: export const sentimentData not found");
    return `${src.slice(0, exp)}${declaration}\n\n${src.slice(exp)}`;
  }
  const brace = src.indexOf("{", m.index);
  const end = scanBracketed(src, brace);
  const current = src.slice(m.index, end + 1);
  if (current === declaration) return src;
  return src.slice(0, m.index) + declaration + src.slice(end + 1);
}

function assertEntry(entry, spec, label) {
  const who = entry && (entry.player || entry.team) ? `${label} (${entry.player || entry.team})` : label;
  if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
    throw new Error(`${who} is not an object`);
  }
  const allowed = allowedSet(spec);
  for (const key of Object.keys(entry)) {
    if (!allowed.has(key)) throw new Error(`${who} has stray field ${key}`);
  }
  for (const key of spec.allowed) {
    if (!Object.prototype.hasOwnProperty.call(entry, key)) {
      throw new Error(`${who} missing ${key}`);
    }
  }
  if (!SENTIMENTS.has(entry.sentiment)) {
    throw new Error(`${who} sentiment must be positive, negative, mixed, or neutral`);
  }
  if (typeof entry.score !== "number" || !Number.isFinite(entry.score)) {
    throw new Error(`${who} score must be a finite number`);
  }
  const narrative = entry[spec.canonical];
  if (typeof narrative !== "string" || narrative.trim() === "") {
    throw new Error(`${who} ${spec.canonical} must be a non-empty string`);
  }
  if (Object.prototype.hasOwnProperty.call(entry, spec.stray)) {
    throw new Error(`${who} still has ${spec.stray}`);
  }
  if (spec.kind === "player") {
    if (typeof entry.player !== "string" || typeof entry.team !== "string" || typeof entry.topTake !== "string") {
      throw new Error(`${who} player, team, and topTake must be strings`);
    }
    if (typeof entry.mentions !== "number" || !Number.isFinite(entry.mentions)) {
      throw new Error(`${who} mentions must be a finite number`);
    }
  } else {
    if (typeof entry.team !== "string" || typeof entry.teamFull !== "string") {
      throw new Error(`${who} team and teamFull must be strings`);
    }
    if (!Array.isArray(entry.buzzWords) || entry.buzzWords.some((word) => typeof word !== "string")) {
      throw new Error(`${who} buzzWords must be a string array`);
    }
  }
}

function assertShapes(data) {
  if (!data || typeof data !== "object") throw new Error("sentiment normalizer: sentimentData missing");
  if (!Array.isArray(data.playerSentiments) || !Array.isArray(data.teamSentiments)) {
    throw new Error("sentiment normalizer: playerSentiments and teamSentiments must be arrays");
  }
  data.playerSentiments.forEach((entry, i) => assertEntry(entry, PLAYER_SPEC, `playerSentiments[${i}]`));
  data.teamSentiments.forEach((entry, i) => assertEntry(entry, TEAM_SPEC, `teamSentiments[${i}]`));
}

export function normalizeSentimentSource(src) {
  let next = stripMarkdownFences(src);
  next = ensureInterface(next, "TeamSentiment", TEAM_INTERFACE);
  next = ensureInterface(next, "PlayerSentiment", PLAYER_INTERFACE);
  next = replaceArray(next, "teamSentiments", TEAM_SPEC);
  next = replaceArray(next, "playerSentiments", PLAYER_SPEC);
  let data;
  try {
    data = extractExportLiteral(next, "sentimentData");
  } catch (err) {
    throw new Error(`sentiment normalizer: ${err.message}`);
  }
  assertShapes(data);
  return next.endsWith("\n") ? next : `${next}\n`;
}
