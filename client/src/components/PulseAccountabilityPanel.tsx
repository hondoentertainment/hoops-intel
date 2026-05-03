import { computePulseTopAlignment } from "../lib/pulseAccountability";
import { slateMarketVsEditorialStats } from "../lib/editionPredictionStats";
import { gameResults, gamePreviews, pulseIndex } from "../lib/pulseData";

export default function PulseAccountabilityPanel() {
  const slate = slateMarketVsEditorialStats(gamePreviews);
  const pulseRows = pulseIndex.slice(0, 5).map((p) => ({
    rank: p.rank,
    player: p.player,
    team: p.team,
  }));
  const align = computePulseTopAlignment(gameResults, pulseRows, { topN: 5 });

  return (
    <section className="mb-10" aria-labelledby="pulse-accountability">
      <div className="mb-4">
        <div
          className="text-xs font-semibold mb-1"
          style={{
            color: "#10B981",
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          TRANSPARENCY
        </div>
        <h2 id="pulse-accountability" className="text-2xl font-bold text-white" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          Pulse accountability (this desk)
        </h2>
        <p className="text-xs mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
          Editions pair stats with rationale — these readouts summarise how Pulse lined up against final chips and nightly market copy.
          Full methodology:&nbsp;
          <a href="/pulse-methodology" style={{ color: "rgba(14,165,233,0.95)" }}>
            Pulse methodology →
          </a>
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <MetricCard
          title="Pulse · top 5 vs winners"
          caption="Stars listed in Pulse who appeared on a finalised scoreboard last night."
          value={align.ratePct !== null ? `${align.ratePct}%` : "—"}
          subtitle={
            align.sampled === 0
              ? "No overlaps between finalists and Pulse top five."
              : `${align.onWinningSide} / ${align.sampled} players on winning sides`
          }
        />
        <MetricCard
          title="Market vs editorial lean"
          caption="Tonight's previews where favourite + projection text both readable."
          value={slate.pct !== null ? `${slate.pct}%` : "—"}
          subtitle={
            slate.comparable === 0
              ? "Need comparable spread + projection rows."
              : `${slate.aligned} aligned of ${slate.comparable}`
          }
        />
      </div>

      <div
        className="mt-4 rounded-lg px-4 py-3 text-xs leading-relaxed"
        style={{
          border: "1px solid rgba(255,255,255,0.07)",
          color: "rgba(255,255,255,0.45)",
        }}
      >
        Fan Pick&apos;em settlement still routes through Supabase once games lock — leaderboard accuracy reflects your calls, independent of Pulse.
      </div>
    </section>
  );
}

function MetricCard({
  title,
  caption,
  value,
  subtitle,
}: {
  title: string;
  caption: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="text-[11px] font-bold uppercase tracking-wide text-white/40 mb-2">{title}</div>
      <div className="text-4xl font-black mb-3" style={{ color: "#0EA5E9", fontFamily: "'JetBrains Mono', monospace" }}>
        {value}
      </div>
      <p className="text-xs text-white/55 mb-2 leading-relaxed">{caption}</p>
      <div className="text-[11px] text-emerald-300/90">{subtitle}</div>
    </div>
  );
}
