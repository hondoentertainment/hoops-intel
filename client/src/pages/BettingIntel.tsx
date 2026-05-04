import SiteHeader from "../components/SiteHeader";
import { gamePreviews } from "../lib/pulseData";
import { slateMarketVsEditorialStats } from "../lib/editionPredictionStats";
import { bettingDisclaimer, summarizeLineMovementEducation } from "../lib/bettingLineStory";

export default function BettingIntel() {
  const slate = slateMarketVsEditorialStats(gamePreviews);

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="TOOLS" />

      <div className="container py-10 max-w-5xl">
        <p className="section-label mb-2">MARKET CONTEXT</p>
        <h1 className="display-heading text-white text-2xl sm:text-3xl mb-2">Betting intel</h1>
        <p className="text-sm mb-6 max-w-3xl leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
          Lines ship with each morning edition snapshot. Sections below emphasize how professional bettors interpret movement, totals, and closing numbers — plus a
          transparent disclaimer.
        </p>

        <p className="text-xs mb-4 max-w-3xl rounded-lg px-4 py-3 leading-relaxed" style={{ border: "1px solid rgba(239,68,68,0.25)", background: "rgba(239,68,68,0.05)", color: "rgba(253,226,226,0.85)" }}>
          {bettingDisclaimer()}
        </p>

        <p className="text-xs mb-10 max-w-3xl rounded-lg px-4 py-3 leading-relaxed" style={{ border: "1px solid rgba(148,163,184,0.2)", background: "rgba(148,163,184,0.06)", color: "rgba(226,232,240,0.9)" }}>
          Open-to-close line histories need a normalized odds feed in archive. Until that pipeline exists, cards show the morning snapshot spread (and optional opening line when editors note it in storyline).
        </p>

        {slate.comparable > 0 && slate.pct !== null ? (
          <p
            className="text-sm mb-8 max-w-3xl rounded-lg px-4 py-3 leading-relaxed mono-data"
            style={{ border: "1px solid rgba(148,251,223,0.22)", background: "rgba(6,148,148,0.08)", color: "rgba(220,251,239,0.92)" }}
          >
            Slate vs editorial: spread favorite matches Pulse pick copy on{' '}
            <strong style={{ color: "#94F5D9" }}>
              {slate.aligned}/{slate.comparable}
            </strong>{' '}
            games (<strong>{slate.pct}%</strong>). Markets and the desk diverge deliberately on some nights — audit game cards below for context.
          </p>
        ) : null}

        <div className="space-y-8">
          {!gamePreviews.length && (
            <p className="text-white/60 text-sm">No slate rows in today’s edition yet.</p>
          )}
          {gamePreviews.map((g, i) => {
            const edu = summarizeLineMovementEducation({
              ...g,
              openingSpread: "openingSpread" in g ? (g as { openingSpread?: string }).openingSpread : undefined,
            });
            return (
              <article
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
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {g.storyline}
                </p>
                {"openingSpread" in g && typeof (g as { openingSpread?: unknown }).openingSpread === "string" ? (
                  <div className="mb-4 text-[11px] mono-data text-emerald-200/85">
                    Opener:&nbsp;
                    {(g as { openingSpread: string }).openingSpread}
                    {" → "}Closer:&nbsp;
                    {g.spread}
                  </div>
                ) : null}
                <div
                  className="rounded-lg p-4 text-xs leading-relaxed space-y-2"
                  style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.12)" }}
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400/95 mb-1">Sharps & books</div>
                  {edu.map((line, j) => (
                    <p key={j} style={{ color: "rgba(226,239,249,0.85)" }}>
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
