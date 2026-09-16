import { useState } from "react";
import ToolPageLayout from "../components/ToolPageLayout";
import { EnhancedButton } from "../components/enhanced/EnhancedUi";
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
    <ToolPageLayout
      subtitle="SETTINGS"
      sectionLabel="Matchup watchlist"
      title="Rival alerts"
      description="When tonight's preview slate includes both teams in a pairing, Hoops Intel surfaces a headline banner above the ticker. Server pushes can now target rivalry pairings encoded on push_subscriptions (rival_abbr_a/b) — callers POST topic: “rival” with rivalAway/rivalHome."
    >

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

        <div className="mt-10 flex flex-wrap gap-3">
          <EnhancedButton onClick={save}>Save watchlist</EnhancedButton>
          <EnhancedButton variant="ghost" onClick={() => setPairs([{ mine: "NYK", rival: "BOS" }])}>
            Reset
          </EnhancedButton>
        </div>
    </ToolPageLayout>
  );
}

function Select({ label, val, on }: { label: string; val: string; on: (v: string) => void }) {
  return (
    <label className="block">
      <span className="mono-data text-[10px] uppercase block mb-1" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
        {label}
      </span>
      <select
        className="desk-field w-full px-3 py-3 text-white text-sm"
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
