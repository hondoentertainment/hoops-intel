import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import { teamColors } from "../lib/teamColors";
import { getPreferences, setPreferences } from "../lib/userPreferences";

const ABBRS = Object.keys(teamColors).sort();

export default function Rivals() {
  const [pairs, setPairs] = useState(() => {
    if (typeof localStorage === "undefined") return [{ mine: "LAL", rival: "BOS" }];
    const r = getPreferences().rivalPairs;
    return r.length ? r.slice(0, 2) : [{ mine: "LAL", rival: "BOS" }];
  });

  const save = () => {
    const next = getPreferences();
    setPreferences({
      ...next,
      rivalPairs: pairs.filter((p) => p.mine.length === 3 && p.rival.length === 3 && p.mine !== p.rival),
    });
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="SETTINGS" />

      <div className="container py-10 max-w-lg">
        <p className="section-label mb-2">MATCHUP WATCHLIST</p>
        <h1 className="display-heading text-2xl sm:text-3xl text-white mb-4">Rival alerts</h1>
        <p className="text-sm mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
          When tonight&apos;s preview slate includes both teams in a pairing, Hoops Intel surfaces a headline banner above the ticker.
          (Server push segmentation for rival-only subs is still backlog — injury + playoff pushes reuse the infrastructure.)
        </p>

        <div className="space-y-8">
          {pairs.map((p, i) => (
            <div key={i} className="grid grid-cols-2 gap-3">
              <Select
                label={`Team ${String.fromCharCode(65 + i * 2)}`}
                val={p.mine}
                on={(v) => {
                  const nx = [...pairs];
                  nx[i] = { ...nx[i], mine: v };
                  setPairs(nx);
                }}
              />
              <Select
                label="vs"
                val={p.rival}
                on={(v) => {
                  const nx = [...pairs];
                  nx[i] = { ...nx[i], rival: v };
                  setPairs(nx);
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex gap-4">
          <button
            type="button"
            onClick={save}
            className="flex-1 py-3 rounded-lg font-semibold"
            style={{ background: "#0EA5E9", color: "#fff" }}
          >
            Save watchlist
          </button>
          <button
            type="button"
            onClick={() => setPairs([{ mine: "NYK", rival: "BOS" }])}
            className="py-3 px-4 rounded-lg text-sm font-semibold"
            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.8)" }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

function Select({ label, val, on }: { label: string; val: string; on: (v: string) => void }) {
  return (
    <label className="block">
      <span className="mono-data text-[10px] uppercase block mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>
        {label}
      </span>
      <select
        className="w-full px-3 py-3 rounded-xl text-white text-sm"
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
        value={val}
        onChange={(e) => on(e.target.value)}
      >
        {ABBRS.map((t) => (
          <option key={t} value={t} className="bg-slate-900">
            {t}
          </option>
        ))}
      </select>
    </label>
  );
}
