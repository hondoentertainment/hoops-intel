import { getPickEmEngagement, guestPickPercentile } from "../lib/pickEmEngagement";
import { pulseEdition } from "../lib/pulseData";

function todayKey(): string {
  const d = pulseEdition.date;
  const m = d.match(/(\w+)\s+(\d+),\s+(\d{4})/);
  if (m) {
    const months: Record<string, string> = {
      Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
      Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
    };
    const mo = months[m[1]!.slice(0, 3)] ?? "01";
    return `${m[3]}-${mo}-${m[2]!.padStart(2, "0")}`;
  }
  return new Date().toISOString().slice(0, 10);
}

export default function PickEmHomeBanner() {
  const engagement = getPickEmEngagement(todayKey());
  const pct = guestPickPercentile(engagement.currentStreak);

  return (
    <section className="py-4 border-t border-white/[0.06]" aria-labelledby="pick-em-banner-title">
      <div className="container">
        <div
          className="rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{
            background: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(14,165,233,0.06))",
            border: "1px solid rgba(16,185,129,0.25)",
          }}
        >
          <div>
            <div className="section-label mb-1 text-emerald-400">PICK &apos;EM</div>
            <h2 id="pick-em-banner-title" className="text-lg font-bold text-white">
              Lock tonight&apos;s slate
            </h2>
            <p className="text-xs mt-1 text-white/55 max-w-md">
              {engagement.picksToday > 0
                ? `${engagement.picksToday} pick${engagement.picksToday === 1 ? "" : "s"} logged today.`
                : "No picks yet — bracket and game picks count toward the leaderboard."}
              {engagement.currentStreak > 0 ? (
                <span className="mono-data text-emerald-300/90">
                  {" "}
                  Streak: {engagement.currentStreak}
                  {pct != null ? ` · guest est. top ${100 - pct}%` : ""}
                </span>
              ) : null}
            </p>
          </div>
          <a
            href="/pick-em"
            className="min-h-[48px] inline-flex items-center justify-center px-5 py-2.5 rounded text-sm font-semibold text-white shrink-0"
            style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}
          >
            Open Pick &apos;Em →
          </a>
        </div>
      </div>
    </section>
  );
}
