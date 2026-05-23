import { draftData } from "../lib/draftData";
import {
  activeEditionContext,
  activeGeneratorScript,
  editionContextDeskLabel,
  isOffseasonDesk,
  offseasonPrimaryCta,
  offseasonPrimaryHref,
} from "../lib/deskMode";

export default function OffseasonDeskStrip() {
  if (!isOffseasonDesk()) return null;

  const ctx = activeEditionContext();
  const cta = offseasonPrimaryCta();
  const topThree = draftData.bigBoard.slice(0, 3);
  const topRiser = draftData.risers[0];

  return (
    <section
      id="offseason-desk"
      className="py-6 border-t border-white/[0.06]"
      aria-labelledby="offseason-desk-title"
    >
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <div className="section-label mb-1">{editionContextDeskLabel(ctx)}</div>
            <h2 id="offseason-desk-title" className="display-heading text-white text-xl">
              {ctx === "draft"
                ? `${draftData.classYear} Draft stock tracker`
                : ctx === "free-agency"
                  ? "Cap sheet & rotation fit"
                  : ctx === "summer-league"
                    ? "Rookie auditions & two-way standouts"
                    : "Minutes caps & scheme teases"}
            </h2>
          </div>
          <a
            href={offseasonPrimaryHref()}
            className="min-h-[44px] inline-flex items-center px-4 py-2 rounded text-sm font-semibold text-white transition-all hover:opacity-95"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #6D28D9)" }}
          >
            {cta.emoji} {cta.label} →
          </a>
        </div>

        {ctx === "draft" || ctx === "summer-league" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {topThree.map((p) => (
              <a
                key={p.rank}
                href="/draft"
                className="glass-card rounded-xl p-4 hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-violet-300">#{p.rank}</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/35">{p.trend}</span>
                </div>
                <div className="text-sm font-semibold text-white mb-1">{p.name}</div>
                <div className="text-xs text-white/45 mb-2">
                  {p.school} · {p.position}
                </div>
                <p className="text-xs leading-relaxed text-white/60 line-clamp-2">{p.weeklyNote}</p>
              </a>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-xl p-5">
            <p className="text-sm leading-relaxed text-white/70">
              {ctx === "free-agency"
                ? "Track signings, cap tiers, and rotation fit on Trade Value — the morning desk pivots to market moves when the slate thins."
                : "Preseason desk prioritizes rotation battles and injury cautions. Use Lineups for projected minutes and scheme teases."}
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <a href="/trade-value" className="text-xs text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                Trade Value →
              </a>
              <a href="/lineups" className="text-xs text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                Lineups →
              </a>
              <a href="/draft" className="text-xs text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                Draft tracker →
              </a>
            </div>
          </div>
        )}

        {topRiser && (ctx === "draft" || ctx === "summer-league") ? (
          <p className="text-xs mt-4 text-white/45">
            Biggest mover:{" "}
            <span className="text-emerald-400/90 font-medium">{topRiser.name}</span> (+{topRiser.change}) —{" "}
            {topRiser.reason}
          </p>
        ) : null}
        <p className="text-[10px] mt-4 text-white/30 mono-data">
          Pipeline: {activeGeneratorScript()} · desk label synced with season-mode
        </p>
      </div>
    </section>
  );
}
