import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const pages = [
  ["client/src/pages/LineupIntel.tsx", "LINEUP INTEL"],
  ["client/src/pages/CoachCorner.tsx", "COACH CORNER"],
  ["client/src/pages/PickEm.tsx", "PICK EM"],
  ["client/src/pages/Pro.tsx", "PRO"],
  ["client/src/pages/PulseHistory.tsx", "PULSE INDEX HISTORY"],
  ["client/src/pages/Projections.tsx", "PROJECTIONS"],
  ["client/src/pages/SentimentPulse.tsx", "SENTIMENT PULSE"],
  ["client/src/pages/TradeSimulator.tsx", "TRADE SIMULATOR"],
  ["client/src/pages/TradeValue.tsx", "TRADE VALUE"],
];

const headerRe =
  /(?:\{\s*\/\*[^*]*\*\/\s*)?<header\s+className="sticky top-0 z-50 border-b"[\s\S]*?<\/header>\s*/m;

for (const [rel, subtitle] of pages) {
  const f = path.join(root, rel);
  let t = fs.readFileSync(f, "utf8");
  if (!headerRe.test(t)) {
    console.log("SKIP no match", rel);
    continue;
  }
  t = t.replace(
    headerRe,
    `<SiteHeader subtitle="${subtitle}" />\n\n      `,
  );
  if (!t.includes('from "../components/SiteHeader"')) {
    const lines = t.split("\n");
    let insertAt = 0;
    for (let i = 0; i < Math.min(lines.length, 50); i++) {
      if (lines[i].startsWith("import ")) insertAt = i + 1;
    }
    lines.splice(insertAt, 0, 'import SiteHeader from "../components/SiteHeader";');
    t = lines.join("\n");
  }
  fs.writeFileSync(f, t);
  console.log("OK", rel);
}
