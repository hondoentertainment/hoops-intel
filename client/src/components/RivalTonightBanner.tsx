import { useMemo } from "react";
import { gamePreviews } from "../lib/pulseData";
import { getPreferences, type UserPreferences } from "../lib/userPreferences";

function rivalryMatchesPreview(
  pair: NonNullable<UserPreferences["rivalPairs"]>[0],
  away: string,
  home: string,
): boolean {
  const ma = pair.mine.toUpperCase();
  const rb = pair.rival.toUpperCase();
  const teams = [away.toUpperCase(), home.toUpperCase()];
  return teams.includes(ma) && teams.includes(rb);
}

export default function RivalTonightBanner() {
  const hit = useMemo(() => {
    const pairs = typeof localStorage !== "undefined" ? getPreferences().rivalPairs ?? [] : [];
    if (!pairs.length) return null;
    const prev = gamePreviews.find((g) =>
      pairs.some((p) => rivalryMatchesPreview(p, String(g.awayTeam), String(g.homeTeam))),
    );
    const p = pairs.find((pr) =>
      prev ? rivalryMatchesPreview(pr, String(prev.awayTeam), String(prev.homeTeam)) : false,
    );
    if (!prev || !p) return null;
    return { preview: prev, mine: p.mine, rival: p.rival };
  }, []);

  if (!hit) return null;

  const { preview } = hit;
  return (
    <div
      className="border-b"
      style={{ borderColor: "rgba(244,63,94,0.25)", background: "rgba(244,63,94,0.06)" }}
    >
      <div className="container py-2.5 px-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="section-label text-rose-400 text-[10px]">RIVAL GAME TONIGHT</span>
          <span className="text-sm font-semibold text-white">
            {preview.awayTeam} @ {preview.homeTeam}
          </span>
          <span className="text-xs mono-data" style={{ color: "rgba(255,255,255,0.45)" }}>
            {preview.time ?? ""}
            {preview.tv ? ` · ${preview.tv}` : ""}
          </span>
        </div>
        <a href="/rivals" className="text-xs font-semibold text-sky-400 hover:text-sky-300">
          Edit rivalry alerts →
        </a>
      </div>
    </div>
  );
}
