import { playoffMovers } from "../../lib/playoffData";

/**
 * Spotlight strip for postseason momentum language already emitted with series sync — pairs with ESPN board.
 */
export function PlayoffMoversDesk() {
  if (!playoffMovers.length) return null;

  return (
    <section className="mb-10" aria-labelledby="playoff-pulse-pressure">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h2 id="playoff-pulse-pressure" className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-300/90">
          Pulse pressure · postseason movers
        </h2>
        <span className="text-[9px] text-white/40 mono-data">{playoffMovers.length} flagged</span>
      </div>
      <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-amber-400/[0.07] via-transparent to-sky-500/[0.04] p-4 sm:p-5">
        <p className="text-[11px] text-white/55 mb-4 leading-relaxed">
          Snapshot of directional Pulse moves tied to playoff leverage—risers tightening rotation trust, fallers shedding usage as series math hardens.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {playoffMovers.slice(0, 6).map((m, i) => (
            <div
              key={`${m.player}-${m.team}-${i}`}
              className="rounded-xl border border-white/[0.06] bg-black/25 px-3 py-2.5"
            >
              <div className="flex justify-between gap-2 items-start">
                <div>
                  <div className="text-sm font-semibold text-white">{m.player}</div>
                  <div className="mono-data text-[10px] text-white/40">{m.team}</div>
                </div>
                <span
                  className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                    m.direction === "riser"
                      ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                      : "bg-rose-500/15 text-rose-200 border border-rose-500/25"
                  }`}
                >
                  {m.direction === "riser" ? "Riser" : "Faller"} {`${m.delta > 0 ? "+" : ""}${m.delta}`}
                </span>
              </div>
              <p className="text-[11px] text-white/70 mt-2 leading-snug line-clamp-3">{m.playoffLine}</p>
              <p className="text-[10px] text-white/45 mt-2 leading-snug italic">{m.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
