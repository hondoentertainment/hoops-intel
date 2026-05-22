import fs from "node:fs";
import path from "node:path";

const pagesDir = path.join(process.cwd(), "client", "src", "pages");
const skip = new Set([
  "Home",
  "GameCenter",
  "Player",
  "Team",
  "Archive",
  "Tools",
  "PlayerCompare",
  "Embed",
  "Unsubscribe",
  "PrintEdition",
  "PlayerCard",
  "MyPulse",
  "AskAI",
  "ClutchFactor",
  "DraftTracker",
  "PlayoffBracket",
]);

function extractSubtitle(content) {
  const m = content.match(/<SiteHeader[\s\S]*?subtitle="([^"]+)"/);
  return m?.[1] ?? null;
}

function mainReturnIndex(content) {
  const exportIdx = content.search(/export default function \w+/);
  if (exportIdx === -1) return content.lastIndexOf("return (");
  return content.indexOf("return (", exportIdx);
}

function migrate(content, subtitle) {
  let next = content.replace(
    /import SiteHeader from "\.\.\/components\/SiteHeader";\r?\n/,
    'import ToolPageLayout from "../components/ToolPageLayout";\n',
  );

  const returnIdx = mainReturnIndex(next);
  if (returnIdx === -1) return null;

  const headerIdx = next.indexOf("<SiteHeader", returnIdx);
  if (headerIdx === -1) return null;
  const headerEnd = next.indexOf("/>", headerIdx);
  if (headerEnd === -1) return null;

  let contentStart = headerEnd + 2;
  const afterHeader = next.slice(contentStart);
  const wrapper =
    afterHeader.match(/^\s*<div className="container[^>]*>/) ??
    afterHeader.match(/^\s*<div className="max-w-[^>]*>/) ??
    afterHeader.match(/^\s*<main[^>]*>/);
  if (wrapper) contentStart += wrapper[0].length;

  const tail = next.slice(returnIdx);
  const closePatterns = [
    /\n(\s*)<\/main>\s*\r?\n\s*<\/div>\s*\r?\n\s*\);/,
    /\n(\s*)<\/div>\s*\r?\n\s*<\/div>\s*\r?\n\s*\);/,
    /\n(\s*)<\/div>\s*\r?\n\s*\);/,
  ];
  let closeMatch = null;
  for (const re of closePatterns) {
    const m = tail.match(re);
    if (m) {
      closeMatch = m;
      break;
    }
  }
  if (!closeMatch) return null;

  const closeIdx = returnIdx + tail.lastIndexOf(closeMatch[0]);
  let inner = next.slice(contentStart, closeIdx).trim();
  inner = inner.replace(/^<main[^>]*>\s*/s, "").replace(/\s*<\/main>\s*$/s, "");

  const before = next.slice(0, returnIdx);
  const after = next.slice(closeIdx).replace(closeMatch[0], "\n  );");

  return `${before}return (\n    <ToolPageLayout subtitle="${subtitle}">\n${inner}\n    </ToolPageLayout>\n  );${after.slice(after.indexOf(");") + 2)}`;
}

for (const file of fs.readdirSync(pagesDir)) {
  if (!file.endsWith(".tsx")) continue;
  const name = file.replace(/\.tsx$/, "");
  if (skip.has(name)) continue;
  const fp = path.join(pagesDir, file);
  let content = fs.readFileSync(fp, "utf8");
  if (!content.includes("SiteHeader")) {
    console.log(`${file}: no-header`);
    continue;
  }
  if (content.includes("ToolPageLayout")) {
    console.log(`${file}: done`);
    continue;
  }
  const subtitle = extractSubtitle(content);
  if (!subtitle) {
    console.log(`${file}: no-subtitle`);
    continue;
  }
  const migrated = migrate(content, subtitle);
  if (!migrated) {
    console.log(`${file}: fail`);
    continue;
  }
  fs.writeFileSync(fp, migrated);
  console.log(`${file}: ok`);
}
