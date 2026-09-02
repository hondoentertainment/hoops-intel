/**
 * Upsert ISO `generatedDate` on the first exported data object.
 * Lets sitemap lastmod advance when a generator skips an empty slate
 * without rewriting editorial fields like `date` or game narratives.
 */
export function stampGeneratedDate(fileText, iso) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) {
    throw new Error(`stampGeneratedDate: invalid ISO date: ${iso}`);
  }
  if (/\bgeneratedDate:\s*(?:"[^"]*"|'[^']*')/.test(fileText)) {
    return fileText.replace(/\bgeneratedDate:\s*(?:"[^"]*"|'[^']*')/, `generatedDate: "${iso}"`);
  }
  return fileText.replace(
    /(export const \w[\w]*\s*(?::\s*\w[\w]*)?\s*=\s*\{)/,
    `$1\n  generatedDate: "${iso}",`,
  );
}
