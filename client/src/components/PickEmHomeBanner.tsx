import { useEffect, useState } from "react";
import {
  editionDateFromPulse,
  getPickEmEngagement,
  guestPickPercentile,
} from "../lib/pickEmEngagement";
import { gamePreviews, gameResults, pulseEdition } from "../lib/pulseData";
import { computeBeatTheDesk } from "../lib/beatTheDesk";
import { fetchPickLeaderboard, guestLeaderboardPercentile } from "../lib/pickLeaderboard";
import BeatTheDeskPanel from "./BeatTheDeskPanel";
import PickLeaderboardMini from "./PickLeaderboardMini";

export default function PickEmHomeBanner() {
  const editionDate = editionDateFromPulse(pulseEdition.date);
  const engagement = getPickEmEngagement(editionDate);
  const beatDesk = computeBeatTheDesk(gamePreviews, editionDate, gameResults);
  const [leaderPct, setLeaderPct] = useState<number | null>(null);

  useEffect(() => {
    fetchPickLeaderboard(1)
      .then((rows) => {
        const top = rows[0];
        if (top?.accuracy_pct !== null && top?.accuracy_pct !== undefined) {
          setLeaderPct(top.accuracy_pct);
        }
      })
      .catch(() => {
        // guest fallback only
      });
  }, []);

  const guestPct =
    guestPickPercentile(engagement.currentStreak) ??
    guestLeaderboardPercentile(engagement.currentStreak, leaderPct);

  const slateSettled = beatDesk.userWins + beatDesk.userLosses;

  return (
    <section className="py-4 border-t border-white/[0.06]" aria-labelledby="pick-em-banner-title">
      <div className="container">
        <div
          className="rounded-xl p-4 sm:p-5 flex flex-col gap-4"
          style={{
            background: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(14,165,233,0.06))",
            border: "1px solid rgba(16,185,129,0.25)",
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex-1">
              <div className="section-label mb-1 text-emerald-400">PICK &apos;EM</div>
              <h2 id="pick-em-banner-title" className="text-lg font-bold text-white">
                Lock tonight&apos;s slate
              </h2>
              <p className="text-xs mt-1 text-white/55 max-w-md">
                {engagement.picksToday > 0
                  ? `${engagement.picksToday} pick${engagement.picksToday === 1 ? "" : "s"} logged today.`
                  : "No picks yet — game and bracket picks count toward the season board."}
                {engagement.currentStreak > 0 ? (
                  <span className="mono-data text-emerald-300/90">
                    {" "}
                    Streak: {engagement.currentStreak}W
                    {guestPct != null ? ` · est. top ${100 - guestPct}%` : ""}
                  </span>
                ) : null}
              </p>
              <div className="mt-2">
                <BeatTheDeskPanel
                  games={gamePreviews}
                  editionDate={editionDate}
                  results={gameResults}
                  compact
                />
              </div>
              {slateSettled > 0 ? (
                <p className="text-xs mt-1 mono-data text-white/45">
                  Tonight: {beatDesk.userWins}-{beatDesk.userLosses}
                  {beatDesk.userBeatDesk + beatDesk.deskBeatUser > 0
                    ? ` · vs desk ${beatDesk.userBeatDesk}-${beatDesk.deskBeatUser}`
                    : ""}
                </p>
              ) : null}
            </div>
            <a
              href="/pick-em"
              className="min-h-[48px] inline-flex items-center justify-center px-5 py-2.5 rounded text-sm font-semibold text-white shrink-0 self-start"
              style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}
            >
              Open Pick &apos;Em →
            </a>
          </div>

          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300/80 mb-2">
              Season leaderboard
            </div>
            <PickLeaderboardMini limit={3} compact={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
