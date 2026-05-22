import ShareButton from "./ShareButton";
import { pulseEdition } from "../lib/pulseData";

type Props = {
  wins: number;
  losses: number;
  streak?: number;
  /** True when W/L comes from Supabase pick_leaderboard (settled season record). */
  seasonRecord?: boolean;
};

export default function PickEmShareCard({ wins, losses, streak, seasonRecord }: Props) {
  const total = wins + losses;
  const pct = total > 0 ? Math.round((wins / total) * 100) : 0;
  const recordLabel = seasonRecord ? "season" : "picks";
  const text = `Pick 'Em on Hoops Intel — ${wins}-${losses} (${pct}% ${recordLabel})${seasonRecord ? "" : ` on ${pulseEdition.date}`}${streak && streak > 1 ? ` · ${streak}-game streak` : ""}. Play tonight's slate:`;

  return (
    <div
      className="rounded-xl p-4 mb-6 flex flex-wrap items-center justify-between gap-3"
      style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)" }}
    >
      <div>
        <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-300/90 mb-1">Share your slate</div>
        <p className="text-sm text-white/80">
          {wins}-{losses} {seasonRecord ? "season" : "picks"} ({pct}%)
          {streak && streak > 1 ? ` · ${streak}W streak` : ""}
        </p>
      </div>
      <ShareButton
        tweetText={text}
        url="https://hoopsintel.net/pick-em"
        className="text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-lg bg-emerald-500/20 text-emerald-200 border border-emerald-500/35"
      />
    </div>
  );
}
