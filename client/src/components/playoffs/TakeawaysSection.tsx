import type { TakeawaysModel } from "./dashboardDerive";

export function TakeawaysSection({ data, onMustWatch }: { data: TakeawaysModel; onMustWatch?: () => void }) {
  return (
    <section className="mb-8" aria-labelledby="takeaways-heading">
      <div className="flex items-end justify-between gap-3 mb-3">
        <div>
          <h2 id="takeaways-heading" className="text-xs font-black uppercase tracking-[0.2em] text-white/55">
            Today&apos;s takeaways
          </h2>
          <p className="text-[10px] text-white/35 mt-0.5 mono-data">scannable · actionable · refreshed with scoreboard pulls</p>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-white/[0.08] bg-[#060d18] p-4">
          <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/90 mb-2">3 biggest playoff signals</div>
          <ul className="space-y-2">
            {data.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-sm text-white/85 leading-snug">
                <span className="mono-data text-sky-400 font-bold">{i + 1}</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl border border-rose-500/25 bg-gradient-to-br from-rose-500/[0.08] to-transparent p-4 h-full flex flex-col">
            <div className="text-[10px] font-bold uppercase tracking-wider text-rose-400/95 mb-1">Must watch</div>
            {data.mustWatch ? (
              <>
                <div className="text-base font-black text-white tracking-tight">{data.mustWatch.label}</div>
                <div className="mono-data text-[11px] text-white/60 mt-1 flex-1">{data.mustWatch.sub}</div>
                {onMustWatch ? (
                  <button
                    type="button"
                    onClick={onMustWatch}
                    className="mt-3 text-xs font-semibold text-rose-300 hover:text-rose-200 transition-colors text-left"
                  >
                    Locate in grid ▸
                  </button>
                ) : null}
              </>
            ) : (
              <p className="text-xs text-white/45">Bracket quiet — marquee matchup names once schedule firms.</p>
            )}
          </div>
          <div className="rounded-2xl border border-violet-500/25 bg-gradient-to-br from-violet-500/[0.08] to-transparent p-4">
            <div className="text-[10px] font-bold uppercase tracking-wider text-violet-300/95 mb-1">Player of the night</div>
            {data.playerOfNight ? (
              <>
                <div className="text-sm font-black text-white">
                  {data.playerOfNight.name}{" "}
                  <span className="font-normal text-white/45 text-xs">({data.playerOfNight.team})</span>
                </div>
                <div className="mono-data text-[11px] text-violet-200/80 mt-1">{data.playerOfNight.line}</div>
              </>
            ) : (
              <p className="text-xs text-white/45">Pulse movers populate after national TV windows.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
