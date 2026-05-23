import ToolPageLayout from "../components/ToolPageLayout";
import { gamePreviews, pulseEdition } from "../lib/pulseData";
import { lineMovementForMatchup, spreadMoved } from "../lib/lineMovement";
import { slateMarketVsEditorialStats } from "../lib/editionPredictionStats";
import { bettingDisclaimer, summarizeLineMovementEducation } from "../lib/bettingLineStory";
import { makeGameId } from "../lib/gameCenter";
import { formatLineMovementBadge } from "../lib/spreadMovement";

function lineLadder(opener?: string, closer?: string, current?: string): string | null {
  const parts = [opener, closer, current].filter(Boolean);
  if (parts.length === 0) return null;
  const unique = parts.filter((p, i) => i === 0 || p !== parts[i - 1]);
  return unique.length > 1 ? unique.join(" → ") : unique[0] ?? null;
}

export default function BettingIntel() {
  const slate = slateMarketVsEditorialStats(gamePreviews);

  return (
    <ToolPageLayout subtitle="TOOLS">
      <p className="section-label mb-2">MARKET CONTEXT</p>
      <h1 className="display-heading text-white text-2xl sm:text-3xl mb-2">Betting intel</h1>
      <p className="text-sm mb-6 max-w-3xl leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
        Openers freeze at morning edition; closers sync from the edition board; current lines refresh via The Odds API on midday and post-game runs. Cards below show
        opener → closer → current movement plus how sharps read the number.
      </p>

      <p
        className="text-xs mb-10 max-w-3xl rounded-lg px-4 py-3 leading-relaxed"
        style={{ border: "1px solid rgba(239,68,68,0.25)", background: "rgba(239,68,68,0.05)", color: "rgba(253,226,226,0.85)" }}
      >
        {bettingDisclaimer()}
      </p>

      {slate.comparable > 0 && slate.pct !== null ? (
        <p
          className="text-sm mb-8 max-w-3xl rounded-lg px-4 py-3 leading-relaxed mono-data"
          style={{ border: "1px solid rgba(148,251,223,0.22)", background: "rgba(6,148,148,0.08)", color: "rgba(220,251,239,0.92)" }}
        >
          Slate vs editorial: spread favorite matches Pulse pick copy on{" "}
          <strong style={{ color: "#94F5D9" }}>
            {slate.aligned}/{slate.comparable}
          </strong>{" "}
          games (<strong>{slate.pct}%</strong>). Markets and the desk diverge deliberately on some nights — audit game cards below for context.
        </p>
      ) : null}

      <div className="space-y-8">
        {!gamePreviews.length && <p className="text-white/60 text-sm">No slate rows in today’s edition yet.</p>}
        {gamePreviews.map((g, i) => {
          const lm = lineMovementForMatchup(g.awayTeam, g.homeTeam);
          const opener =
            lm?.openingSpread ||
            ("openingSpread" in g ? (g as { openingSpread?: string }).openingSpread : undefined);
          const closer = g.spread;
          const current = lm?.closingSpread || g.spread;
          const gameHref = `/game/${makeGameId(g.awayTeam, g.homeTeam, pulseEdition.date)}`;
          const ladder = lineLadder(opener, closer, current);
          const moveBadge =
            opener && current && spreadMoved(opener, current) ? formatLineMovementBadge(opener, current) : null;
          const edu = summarizeLineMovementEducation({
            ...g,
            spread: current,
            openingSpread: opener,
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
                  <a href={gameHref} className="group block">
                    <div className="text-xl font-bold text-white flex flex-wrap gap-2 items-baseline group-hover:text-sky-200 transition-colors">
                      <span>{g.awayTeam}</span>
                      <span style={{ color: "rgba(255,255,255,0.3)" }}>@</span>
                      <span>{g.homeTeam}</span>
                    </div>
                  </a>
                  <div className="mono-data mt-3 text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {current} · O/U {g.overUnder}
                  </div>
                  {ladder ? (
                    <div className="mt-2 text-[11px] mono-data text-emerald-200/85">
                      {opener ? (
                        <>
                          Opener&nbsp;{opener}
                          {closer && closer !== opener ? (
                            <>
                              {" → "}Closer&nbsp;{closer}
                            </>
                          ) : null}
                          {current && current !== closer && current !== opener ? (
                            <>
                              {" → "}Current&nbsp;{current}
                            </>
                          ) : null}
                        </>
                      ) : (
                        ladder
                      )}
                    </div>
                  ) : null}
                  {moveBadge ? (
                    <div className="mt-1 text-[10px] font-semibold text-amber-300/95" title="Opener → current board">
                      {moveBadge}
                    </div>
                  ) : null}
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
              {"marketThesis" in g && typeof (g as { marketThesis?: unknown }).marketThesis === "string" ? (
                <div
                  className="mb-4 rounded-lg px-4 py-3 text-xs leading-relaxed"
                  style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.18)" }}
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400/90 mb-1">Sharp / public read</div>
                  {(g as { marketThesis: string }).marketThesis}
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
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={gameHref} className="text-xs font-semibold text-sky-300 hover:text-sky-200 min-h-[44px] inline-flex items-center">
                  Game Center →
                </a>
                <a href="/pick-em" className="text-xs font-semibold text-emerald-300 hover:text-emerald-200 min-h-[44px] inline-flex items-center">
                  Lock pick →
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </ToolPageLayout>
  );
}
