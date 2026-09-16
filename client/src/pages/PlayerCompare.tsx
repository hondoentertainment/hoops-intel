import { useMemo, useState } from "react";
import ToolPageLayout from "../components/ToolPageLayout";
import TeamLogo from "../components/TeamLogo";
import { DeskFilterChip } from "../components/enhanced/EnhancedUi";
import { pulseIndex } from "../lib/pulseData";
import { slugify } from "../lib/searchUtils";

const PRESETS = [
  { label: "Brunson vs Mitchell", a: "Jalen Brunson", b: "Donovan Mitchell" },
  { label: "Wemby vs SGA", a: "Victor Wembanyama", b: "Shai Gilgeous-Alexander" },
  { label: "Mobley vs Towns", a: "Evan Mobley", b: "Karl-Anthony Towns" },
];

function indexForName(name: string) {
  return pulseIndex.findIndex((p) => p.player === name);
}

export default function PlayerCompare() {
  const [aIdx, setAIdx] = useState(() => Math.max(0, indexForName("Jalen Brunson")));
  const [bIdx, setBIdx] = useState(() => Math.max(0, indexForName("Donovan Mitchell")));

  const a = pulseIndex[aIdx];
  const b = pulseIndex[bIdx];

  const availablePresets = useMemo(
    () => PRESETS.filter((p) => indexForName(p.a) >= 0 && indexForName(p.b) >= 0),
    [],
  );

  if (!pulseIndex.length) {
    return (
      <ToolPageLayout subtitle="TOOLS" showRelated={false} title="Player compare" description="Pulse Index unavailable for comparison.">
        <p className="mobile-readable" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
          Pulse Index unavailable for comparison.
        </p>
      </ToolPageLayout>
    );
  }

  return (
    <ToolPageLayout
      subtitle="TOOLS"
      sectionLabel="Pulse lab"
      title="Player compare"
      description="Side-by-side read of today’s Pulse Index entrants — rankings and editorial notes regenerate with each morning edition."
      maxWidth="xl"
      breadcrumbs={[{ label: "Today's desk", href: "/" }, { label: "Tools", href: "/tools" }, { label: "Player compare" }]}
    >
        {availablePresets.length > 0 && (
          <div className="mb-8">
            <p className="enhanced-kicker mb-2">Quick matchups</p>
            <div className="flex flex-wrap gap-2">
              {availablePresets.map((preset) => (
                <DeskFilterChip
                  key={preset.label}
                  onClick={() => {
                    setAIdx(indexForName(preset.a));
                    setBIdx(indexForName(preset.b));
                  }}
                >
                  {preset.label}
                </DeskFilterChip>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[
            ["Player A", aIdx, setAIdx] as const,
            ["Player B", bIdx, setBIdx] as const,
          ].map(([label, idx, setter]) => (
            <label key={label} className="block">
              <span className="enhanced-kicker">{label}</span>
              <select
                className="desk-field mt-2 text-base sm:text-sm outline-none"
                value={idx}
                onChange={(e) => setter(Number(e.target.value))}
              >
                {pulseIndex.map((p, i) => (
                  <option key={p.player + i} value={i}>#{p.rank} {p.player} ({p.team})</option>
                ))}
              </select>
            </label>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[a, b].map((p) => (
            <div key={p.player} className="enhanced-card p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="mono-data text-xs mb-1" style={{ color: "var(--hi-accent-text,#146a8c)" }}>RANK #{p.rank}</div>
                  <h2 className="text-xl font-bold text-[var(--hi-text,#0a0a0a)]">{p.player}</h2>
                  <div className="flex items-center gap-1.5 text-sm mt-1" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}><TeamLogo team={p.team} size={16} />{p.team} · {p.teamRecord}</div>
                </div>
                <div className="mono-data px-4 py-2 rounded-[10px] text-xl font-black" style={{ background: "rgba(142,200,240,0.12)", color: "var(--hi-accent-text,#146a8c)", border: "1px solid rgba(142,200,240,0.25)" }}>
                  {p.indexScore}
                </div>
              </div>
              <dl className="space-y-2 text-sm mb-4">
                <Row k="Trend" v={p.trend} />
                <Row k="Signal" v={p.keyStats} />
              </dl>
              <p className="text-sm leading-relaxed" style={{ color: "var(--hi-muted,#5c5c58)" }}>{p.note}</p>
              <div className="mt-6">
                <a href={`/player/${slugify(p.player)}`} className="text-xs font-semibold" style={{ color: "var(--hi-accent-text,#146a8c)" }}>
                  Open full player dossier →
                </a>
              </div>
            </div>
          ))}
        </div>
    </ToolPageLayout>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="shrink-0 mono-data text-xs uppercase" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>{k}</dt>
      <dd className="text-right text-white/85">{v}</dd>
    </div>
  );
}
