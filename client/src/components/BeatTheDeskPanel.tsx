import { computeBeatTheDesk, type BeatTheDeskSummary, type GamePreviewPickLike } from "../lib/beatTheDesk";
import type { FinalGameLite } from "../lib/pickSettlement";

type Props = {
  games: GamePreviewPickLike[];
  editionDate: string;
  results?: (FinalGameLite & { gameId?: string })[];
  compact?: boolean;
};

function StatPill({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div
      className="rounded-lg px-3 py-2 text-center min-w-[72px]"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="text-lg font-bold tabular-nums" style={{ color, fontFamily: "'Barlow Condensed', sans-serif" }}>
        {value}
      </div>
      <div className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
        {label}
      </div>
    </div>
  );
}

function headlineForSummary(summary: BeatTheDeskSummary): string {
  const settled = summary.userWins + summary.userLosses;
  if (settled === 0 && summary.picksCompared === 0) {
    return "Lock picks to see how you stack up against the desk.";
  }
  if (settled === 0) {
    return summary.agreeCount === summary.picksCompared
      ? "You and the desk agree on every pick so far."
      : `You split with the desk on ${summary.picksCompared - summary.agreeCount} game${summary.picksCompared - summary.agreeCount === 1 ? "" : "s"}.`;
  }
  if (summary.userBeatDesk > summary.deskBeatUser) {
    return `You're beating the desk ${summary.userBeatDesk}–${summary.deskBeatUser} on settled games.`;
  }
  if (summary.deskBeatUser > summary.userBeatDesk) {
    return `The desk leads ${summary.deskBeatUser}–${summary.userBeatDesk} on games you've both settled.`;
  }
  return `Tied with the desk at ${summary.userWins}-${summary.userLosses} on your slate.`;
}

export default function BeatTheDeskPanel({ games, editionDate, results = [], compact = false }: Props) {
  const summary = computeBeatTheDesk(games, editionDate, results);
  const settled = summary.userWins + summary.userLosses;
  const userPct = settled > 0 ? Math.round((summary.userWins / settled) * 100) : null;
  const deskSettled = summary.deskWins + summary.deskLosses;
  const deskPct = deskSettled > 0 ? Math.round((summary.deskWins / deskSettled) * 100) : null;

  if (compact) {
    return (
      <div className="text-xs text-white/55 leading-relaxed">
        {headlineForSummary(summary)}
        {settled > 0 ? (
          <span className="mono-data text-emerald-300/90">
            {" "}
            You {summary.userWins}-{summary.userLosses}
            {userPct !== null ? ` (${userPct}%)` : ""}
            {summary.deskWins + summary.deskLosses > 0
              ? ` · Desk ${summary.deskWins}-${summary.deskLosses}${deskPct !== null ? ` (${deskPct}%)` : ""}`
              : ""}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <section className="mb-10" aria-labelledby="beat-the-desk-title">
      <div className="mb-4">
        <div
          className="text-xs font-semibold mb-1"
          style={{
            color: "#10B981",
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          BEAT THE DESK
        </div>
        <h2
          id="beat-the-desk-title"
          className="text-2xl font-bold"
          style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          You vs. editorial picks
        </h2>
        <p className="text-xs mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
          {headlineForSummary(summary)}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <StatPill label="You" value={settled > 0 ? `${summary.userWins}-${summary.userLosses}` : "—"} color="#10B981" />
        <StatPill label="Desk" value={deskSettled > 0 ? `${summary.deskWins}-${summary.deskLosses}` : "—"} color="#0EA5E9" />
        <StatPill
          label="Edge"
          value={
            summary.userBeatDesk + summary.deskBeatUser > 0
              ? `${summary.userBeatDesk}-${summary.deskBeatUser}`
              : "—"
          }
          color="#F59E0B"
        />
        <StatPill
          label="Agree"
          value={summary.picksCompared > 0 ? `${summary.agreeCount}/${summary.picksCompared}` : "—"}
          color="rgba(255,255,255,0.7)"
        />
      </div>

      {summary.rows.some((r) => r.userPick || r.deskPick) && (
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div
            className="grid grid-cols-12 gap-2 px-4 py-2 text-xs font-semibold"
            style={{
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.35)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.06em",
            }}
          >
            <div className="col-span-4">GAME</div>
            <div className="col-span-2 text-center">YOU</div>
            <div className="col-span-2 text-center">DESK</div>
            <div className="col-span-2 text-center">RESULT</div>
            <div className="col-span-2 text-right">EDGE</div>
          </div>
          {summary.rows
            .filter((r) => r.userPick || r.deskPick)
            .map((row) => {
              const edge =
                row.final && row.userCorrect && !row.deskCorrect
                  ? "You"
                  : row.final && row.deskCorrect && !row.userCorrect
                  ? "Desk"
                  : row.agree
                  ? "—"
                  : "Split";
              const edgeColor =
                edge === "You" ? "#10B981" : edge === "Desk" ? "#0EA5E9" : "rgba(255,255,255,0.35)";
              return (
                <div
                  key={row.gameId}
                  className="grid grid-cols-12 gap-2 px-4 py-3 items-center text-xs"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                >
                  <div className="col-span-4 font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {row.matchup}
                  </div>
                  <div
                    className="col-span-2 text-center font-bold"
                    style={{
                      color: row.userCorrect === true ? "#10B981" : row.userCorrect === false ? "#F43F5E" : "#fff",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {row.userPick ?? "—"}
                  </div>
                  <div
                    className="col-span-2 text-center font-bold"
                    style={{
                      color: row.deskCorrect === true ? "#10B981" : row.deskCorrect === false ? "#F43F5E" : "#0EA5E9",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {row.deskPick ?? "—"}
                  </div>
                  <div className="col-span-2 text-center" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {row.final ? row.winner : "Pending"}
                  </div>
                  <div className="col-span-2 text-right font-semibold" style={{ color: edgeColor }}>
                    {edge}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </section>
  );
}

export { headlineForSummary };
