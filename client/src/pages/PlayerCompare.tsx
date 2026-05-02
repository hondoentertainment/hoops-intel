import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import { pulseIndex } from "../lib/pulseData";
import { slugify } from "../lib/searchUtils";

export default function PlayerCompare() {
  const [bIdx, setBIdx] = useState(Math.min(1, pulseIndex.length - 1));

  const a = pulseIndex[aIdx];
  const b = pulseIndex[bIdx];

  if (!pulseIndex.length) {
    return (
      <div className="min-h-screen container py-20" style={{ background: "var(--hi-bg-page,#050d1a)" }}>
        <p className="text-white">Pulse Index unavailable for comparison.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="TOOLS" />

      <div className="container py-10 max-w-4xl">
        <p className="section-label mb-2">PULSE LAB</p>
        <h1 className="display-heading text-white text-2xl sm:text-3xl mb-2">Player compare</h1>
        <p className="text-sm mb-8 max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
          Side-by-side read of today’s Pulse Index entrants — rankings and editorial notes regenerate with each morning edition.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {[
            ["Player A", aIdx, setAIdx] as const,
            ["Player B", bIdx, setBIdx] as const,
          ].map(([label, idx, setter]) => (
            <label key={label} className="block">
              <span className="text-xs uppercase font-bold tracking-wide" style={{ color: "rgba(255,255,255,0.35)" }}>
                {label}
              </span>
              <select
                className="mt-1 w-full px-4 py-3 rounded-lg text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                }}
                value={idx}
                onChange={(e) => setter(Number(e.target.value))}
              >
                {pulseIndex.map((p, i) => (
                  <option key={p.player + i} value={i}>
                    #{p.rank} {p.player} ({p.team})
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[a, b].map((p) => (
            <div key={p.player} className="glass-card rounded-xl p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="mono-data text-xs mb-1" style={{ color: "#0EA5E9" }}>
                    RANK #{p.rank}
                  </div>
                  <h2 className="text-xl font-bold text-white">{p.player}</h2>
                  <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {p.team} · {p.teamRecord}
                  </div>
                </div>
                <div
                  className="mono-data px-4 py-2 rounded-xl text-xl font-black"
                  style={{ background: "rgba(14,165,233,0.12)", color: "#0EA5E9", border: "1px solid rgba(14,165,233,0.25)" }}
                >
                  {p.indexScore}
                </div>
              </div>
              <dl className="space-y-2 text-sm mb-4">
                <Row k="Trend" v={p.trend} />
                <Row k="Signal" v={p.keyStats} />
              </dl>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                {p.note}
              </p>
              <div className="mt-6">
                <a
                  href={`/player/${slugify(p.player)}`}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300"
                >
                  Open full player dossier →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="shrink-0 mono-data text-xs uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
        {k}
      </dt>
      <dd className="text-right text-white/85">{v}</dd>
    </div>
  );
}
