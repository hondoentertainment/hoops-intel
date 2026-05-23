import { useEffect, useState } from "react";
import {
  fetchPickLeaderboard,
  leaderboardAccuracyColor,
  truncateLeaderboardUserId,
  type PickLeaderboardRow,
} from "../lib/pickLeaderboard";

type Props = {
  limit?: number;
  compact?: boolean;
};

function LeaderboardSkeleton({ rows }: { rows: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg p-2 flex items-center gap-3 animate-pulse"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="w-5 h-4 rounded" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div className="flex-1 h-3 rounded" style={{ background: "rgba(255,255,255,0.06)" }} />
          <div className="w-10 h-3 rounded" style={{ background: "rgba(255,255,255,0.06)" }} />
        </div>
      ))}
    </div>
  );
}

export default function PickLeaderboardMini({ limit = 5, compact = false }: Props) {
  const [rows, setRows] = useState<PickLeaderboardRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPickLeaderboard(limit)
      .then(setRows)
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Failed to load leaderboard");
      })
      .finally(() => setLoading(false));
  }, [limit]);

  if (loading) return <LeaderboardSkeleton rows={compact ? 3 : limit} />;

  if (error) {
    return (
      <p className="text-xs" style={{ color: "rgba(244,63,94,0.75)" }}>
        Leaderboard unavailable
      </p>
    );
  }

  if (rows.length === 0) {
    return (
      <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
        No settled picks yet — check back after tonight&apos;s games.
      </p>
    );
  }

  if (compact) {
    const top = rows[0]!;
    return (
      <div className="text-xs text-white/55">
        Leader:{" "}
        <span className="mono-data text-amber-300/90">
          {truncateLeaderboardUserId(top.user_id)}{" "}
          {top.accuracy_pct !== null ? `${top.accuracy_pct}%` : "—"}
        </span>
        {rows.length > 1 ? (
          <span className="text-white/40"> · top {rows.length} on the board</span>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div
        className="grid grid-cols-12 gap-2 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider"
        style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.35)" }}
      >
        <div className="col-span-1">#</div>
        <div className="col-span-5">User</div>
        <div className="col-span-3 text-right">Acc</div>
        <div className="col-span-3 text-right">Streak</div>
      </div>
      {rows.map((row, idx) => {
        const rank = idx + 1;
        const rankColors = ["#F59E0B", "#94A3B8", "#CD7F32"];
        const rankColor = rank <= 3 ? rankColors[rank - 1] : "rgba(255,255,255,0.35)";
        return (
          <div
            key={row.user_id}
            className="grid grid-cols-12 gap-2 px-3 py-2 items-center text-xs"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
          >
            <div className="col-span-1 font-bold" style={{ color: rankColor }}>
              {rank}
            </div>
            <div className="col-span-5 truncate" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem" }}>
              {truncateLeaderboardUserId(row.user_id)}
            </div>
            <div
              className="col-span-3 text-right font-bold tabular-nums"
              style={{ color: leaderboardAccuracyColor(row.accuracy_pct), fontFamily: "'JetBrains Mono', monospace" }}
            >
              {row.accuracy_pct !== null ? `${row.accuracy_pct}%` : "—"}
            </div>
            <div className="col-span-3 text-right tabular-nums" style={{ color: "rgba(255,255,255,0.45)" }}>
              {row.current_streak > 0 ? `${row.current_streak}W` : "—"}
            </div>
          </div>
        );
      })}
    </div>
  );
}
