import { buildSixtySecondBullets, editionContextLabel } from "../lib/deskBriefing";

export default function SixtySecondBriefing() {
  const bullets = buildSixtySecondBullets();

  return (
    <section
      className="rounded-xl border border-sky-500/20 bg-gradient-to-br from-sky-500/[0.08] to-transparent p-4 sm:p-5"
      aria-labelledby="sixty-second-heading"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <h2 id="sixty-second-heading" className="text-[10px] font-black uppercase tracking-[0.2em] text-sky-300/95">
          60-second read
        </h2>
        <span className="text-[10px] uppercase tracking-wider text-white/40">{editionContextLabel()}</span>
      </div>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-sm leading-snug text-white/80">
            <span className="text-sky-400 font-bold shrink-0" aria-hidden>
              {i + 1}.
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
