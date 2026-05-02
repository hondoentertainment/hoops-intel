import type { PlayoffSeries } from "../../lib/playoffData";
import { momentumLabel, pressureTeamAbbr, swingFactorText, xFactorFromSeries } from "./dashboardDerive";

export function IntelSignals({ series }: { series: PlayoffSeries }) {
  const m = momentumLabel(series);
  const pressure = pressureTeamAbbr(series);
  const x = xFactorFromSeries(series);
  const swing = swingFactorText(series);

  return (
    <div
      className="mt-3 rounded-lg border border-amber-500/25 bg-gradient-to-br from-amber-500/[0.07] to-transparent p-3"
      data-testid="intel-signals"
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-amber-400/90">Hoops Intel Signals</span>
        <span className="text-[10px] text-white/40 mono-data">internal read</span>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <SignalPill label="Momentum" value={m === "hot" ? "Hot run" : m === "split" ? "Split" : "Cold edge"} emoji={m === "hot" ? "🔥" : m === "split" ? "⚡" : "❄️"} />
        <SignalPill label="Pressure index" value={pressure ? `${pressure}` : "Neutral"} subtitle={pressure ? "trailing ledger" : "even"} />
        <SignalPill label="X-factor" value={x} subtitle="impact role" />
        <SignalPill
          label="Swing factor"
          value={`${swing.slice(0, 80)}${swing.length > 80 ? "…" : ""}`}
          subtitle="next game tilt"
          narrow
        />
      </div>
    </div>
  );
}

function SignalPill({
  label,
  value,
  subtitle,
  emoji,
  narrow,
}: {
  label: string;
  value: string;
  subtitle?: string;
  emoji?: string;
  narrow?: boolean;
}) {
  return (
    <div className={`min-h-[64px] rounded-md bg-black/25 px-2 py-2 border border-white/[0.06] ${narrow ? "" : ""}`}>
      <div className="text-[9px] uppercase tracking-wide text-white/45 mb-0.5 flex items-center gap-1">
        {emoji ? <span>{emoji}</span> : null}
        {label}
      </div>
      <div className={`text-[11px] sm:text-xs font-semibold text-white leading-snug ${narrow ? "line-clamp-3" : "line-clamp-2"}`}>{value}</div>
      {subtitle ? <div className="text-[9px] text-white/35 mt-0.5">{subtitle}</div> : null}
    </div>
  );
}
