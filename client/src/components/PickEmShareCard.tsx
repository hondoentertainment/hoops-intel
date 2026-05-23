import ShareButton from "./ShareButton";
import { pulseEdition } from "../lib/pulseData";

type BeatDeskShare = {
  userBeatDesk: number;
  deskBeatUser: number;
};

type Props = {
  wins: number;
  losses: number;
  streak?: number;
  /** True when W/L comes from Supabase pick_leaderboard (settled season record). */
  seasonRecord?: boolean;
  /** Tonight's slate-only W/L (settled games on edition date). */
  slateWins?: number;
  slateLosses?: number;
  beatDesk?: BeatDeskShare;
};

export default function PickEmShareCard({
  wins,
  losses,
  streak,
  seasonRecord,
  slateWins,
  slateLosses,
  beatDesk,
}: Props) {
  const showSlate = slateWins !== undefined && slateLosses !== undefined;
  const slateTotal = showSlate ? (slateWins ?? 0) + (slateLosses ?? 0) : 0;
  const displayWins = showSlate && slateTotal > 0 ? slateWins! : wins;
  const displayLosses = showSlate && slateTotal > 0 ? slateLosses! : losses;
  const total = displayWins + displayLosses;
  const pct = total > 0 ? Math.round((displayWins / total) * 100) : 0;
  const isSeason = seasonRecord && !showSlate;
  const recordLabel = isSeason ? "season" : "slate";
  const streakPart = streak && streak > 1 ? ` · ${streak}-game streak` : "";
  const beatPart =
    beatDesk && beatDesk.userBeatDesk + beatDesk.deskBeatUser > 0
      ? ` · Beat the desk ${beatDesk.userBeatDesk}-${beatDesk.deskBeatUser}`
      : "";
  const text = `Pick 'Em on Hoops Intel — ${displayWins}-${displayLosses} (${pct}% ${recordLabel})${isSeason ? "" : ` on ${pulseEdition.date}`}${streakPart}${beatPart}. Play tonight's slate:`;

  return (
    <div
      className="rounded-xl p-4 mb-6"
      style={{
        background: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(14,165,233,0.06))",
        border: "1px solid rgba(16,185,129,0.28)",
      }}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex-1 min-w-[200px]">
          <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-300/90 mb-2">
            {slateTotal > 0 ? "Share tonight's slate" : "Share your run"}
          </div>
          <div className="flex flex-wrap items-end gap-4 mb-2">
            <div>
              <div
                className="text-3xl font-black tabular-nums leading-none"
                style={{ color: "#10B981", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {displayWins}-{displayLosses}
              </div>
              <div className="text-[10px] uppercase tracking-wider mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                {recordLabel} {total > 0 ? `· ${pct}%` : ""}
              </div>
            </div>
            {streak && streak > 0 ? (
              <div
                className="rounded-lg px-3 py-2"
                style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)" }}
              >
                <div className="text-lg font-bold tabular-nums" style={{ color: "#F59E0B" }}>
                  {streak}
                  <span className="text-xs ml-1">W</span>
                </div>
                <div className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Streak
                </div>
              </div>
            ) : null}
            {seasonRecord && slateTotal > 0 ? (
              <div
                className="rounded-lg px-3 py-2"
                style={{ background: "rgba(14,165,233,0.08)", border: "1px solid rgba(14,165,233,0.2)" }}
              >
                <div className="text-lg font-bold tabular-nums" style={{ color: "#0EA5E9" }}>
                  {wins}-{losses}
                </div>
                <div className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Season
                </div>
              </div>
            ) : null}
          </div>
          {beatDesk && beatDesk.userBeatDesk + beatDesk.deskBeatUser > 0 ? (
            <p className="text-xs text-white/55">
              Beat the desk{" "}
              <span className="font-semibold text-emerald-300/90">
                {beatDesk.userBeatDesk}-{beatDesk.deskBeatUser}
              </span>{" "}
              on settled games vs. editorial picks.
            </p>
          ) : (
            <p className="text-sm text-white/70">
              {displayWins}-{displayLosses} {recordLabel}
              {streak && streak > 1 ? ` · ${streak}W streak` : ""}
            </p>
          )}
        </div>
        <ShareButton
          tweetText={text}
          url="https://hoopsintel.net/pick-em"
          className="text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-lg bg-emerald-500/20 text-emerald-200 border border-emerald-500/35 shrink-0"
        />
      </div>
    </div>
  );
}
