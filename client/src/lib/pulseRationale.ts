/** Split editorial rationale into up to three scannable bullets for the rank explainer. */
export function rationaleToBullets(rationale: string, note?: string): string[] {
  const splitSentences = (text: string) =>
    text
      .split(/(?<=[.;])\s+/)
      .map((s) => s.trim().replace(/\.$/, ""))
      .filter(Boolean);

  const fromRationale = splitSentences(rationale || "");
  if (fromRationale.length >= 3) return fromRationale.slice(0, 3);

  const fromNote = splitSentences(note || "");
  const merged = [...fromRationale];
  for (const sentence of fromNote) {
    if (merged.length >= 3) break;
    if (!merged.some((b) => b.toLowerCase() === sentence.toLowerCase())) {
      merged.push(sentence);
    }
  }

  if (merged.length === 0 && rationale) return [rationale];
  if (merged.length === 0 && note) return [note.slice(0, 160)];
  return merged.slice(0, 3);
}
