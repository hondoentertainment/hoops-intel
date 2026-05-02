import SiteHeader from "../components/SiteHeader";
import { gamePreviews } from "../lib/pulseData";

export default function BettingIntel() {
  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="TOOLS" />

      <div className="container py-10 max-w-5xl">
        <p className="section-label mb-2">LINES SNAPSHOT</p>
        <h1 className="display-heading text-white text-2xl sm:text-3xl mb-2">Betting intel</h1>
        <p className="text-sm mb-10 max-w-3xl leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
          Tonight&apos;s previews carry market handles from the edition pipeline plus our prediction callout — not picks advice.
          Affiliate links elsewhere on the desk remain the monetization spine; sharper price tracking lands on the backlog (
          <code className="mono-data text-xs text-sky-400/90">PRODUCT-ENHANCEMENTS.md §3.4</code>).
        </p>

        <div className="space-y-4">
          {!gamePreviews.length && (
            <p className="text-white/60 text-sm">No slate rows in today’s edition yet.</p>
          )}
          {gamePreviews.map((g, i) => (
            <div
              key={i}
              className="rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="mono-data text-xs mb-2" style={{ color: "#0EA5E9" }}>
                    {g.tv ? `${g.tv} · ` : ""}
                    {g.time ?? "TBD"}
                  </div>
                  <div className="text-xl font-bold text-white flex flex-wrap gap-2 items-baseline">
                    <span>{g.awayTeam}</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>@</span>
                    <span>{g.homeTeam}</span>
                  </div>
                  <div className="mono-data mt-3 text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {g.spread} · O/U {g.overUnder}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Projection
                  </div>
                  <div className="text-lg font-semibold mt-2" style={{ color: "#10B981" }}>
                    {g.prediction}
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                {g.storyline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
