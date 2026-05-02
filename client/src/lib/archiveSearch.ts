// Normalize archive editions for richer client-side matching (Pulse cards + tags).

/** Collect primitive string values recursively for full-text-ish search over an edition blob. */
function collectStrings(v: unknown, out: string[], depth = 0): void {
  if (depth > 8 || v == null) return;
  if (typeof v === "string") {
    out.push(v);
    return;
  }
  if (typeof v === "number" || typeof v === "boolean") {
    out.push(String(v));
    return;
  }
  if (Array.isArray(v)) {
    for (const item of v) collectStrings(item, out, depth + 1);
    return;
  }
  if (typeof v === "object") {
    for (const k of Object.keys(v as object)) collectStrings((v as Record<string, unknown>)[k], out, depth + 1);
  }
}

export function editionSearchHaystack(edition: Record<string, unknown>): string {
  const parts: string[] = [];
  collectStrings(edition, parts);
  return parts.join("\n").toLowerCase();
}
