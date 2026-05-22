import { useEffect, useMemo, useState } from "react";
import {
  PUSH_ALERT_HISTORY_UI_LIMIT,
  formatRelativePushTime,
  normalizeTeamAbbrs,
  type PushAlertHistoryItem,
} from "../../../shared/pushAlertHistory";
import { PUSH_TOPIC_OPTIONS } from "../lib/webPushAccount";

function topicLabel(topic: string): string {
  const hit = PUSH_TOPIC_OPTIONS.find((o) => o.id === topic.toLowerCase());
  return hit?.label ?? topic;
}

type Props = {
  /** My Pulse / push subscription team codes — enables “My teams” filter */
  favoriteTeams?: string[];
};

export default function PushAlertHistory({ favoriteTeams = [] }: Props) {
  const [alerts, setAlerts] = useState<PushAlertHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [myTeamsOnly, setMyTeamsOnly] = useState(true);

  const teamCodes = useMemo(() => normalizeTeamAbbrs(favoriteTeams), [favoriteTeams]);
  const canFilter = teamCodes.length > 0;

  useEffect(() => {
    setLoading(true);
    setErr(false);
    const params = new URLSearchParams();
    if (canFilter && myTeamsOnly) params.set("teams", teamCodes.join(","));
    const qs = params.toString();
    fetch(`/api/push-alert-history${qs ? `?${qs}` : ""}`)
      .then((r) => r.json())
      .then((body: { alerts?: PushAlertHistoryItem[] }) => {
        setAlerts((body.alerts ?? []).slice(0, PUSH_ALERT_HISTORY_UI_LIMIT));
      })
      .catch(() => setErr(true))
      .finally(() => setLoading(false));
  }, [canFilter, myTeamsOnly, teamCodes]);

  return (
    <div
      className="rounded-xl p-4 mt-4"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <div className="section-label">Recent push alerts</div>
        {canFilter ? (
          <label className="flex items-center gap-2 text-[11px] text-white/45 cursor-pointer">
            <input
              type="checkbox"
              className="accent-sky-500"
              checked={myTeamsOnly}
              onChange={(e) => setMyTeamsOnly(e.target.checked)}
            />
            My teams ({teamCodes.join(", ")})
          </label>
        ) : null}
      </div>
      <p className="text-[10px] mb-3 text-white/35 leading-relaxed">
        {canFilter && myTeamsOnly
          ? "Alerts for your favorite teams plus league-wide dispatches (no subscriber data)."
          : "Read-only inbox of recent dispatches site-wide (no subscriber data)."}
      </p>

      {loading ? (
        <p className="text-xs text-white/40">Loading recent alerts…</p>
      ) : err ? (
        <p className="text-xs text-amber-300">Could not load push history.</p>
      ) : alerts.length === 0 ? (
        <p className="text-xs text-white/40">
          {canFilter && myTeamsOnly ? "No team-specific alerts logged yet." : "No push alerts logged yet."}
        </p>
      ) : (
        <ul className="space-y-3">
          {alerts.map((a) => (
            <li
              key={a.id}
              className="rounded-lg px-3 py-2.5"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <span className="text-[10px] uppercase tracking-[0.14em] text-sky-400/90 font-semibold">
                  {topicLabel(a.topic)}
                  {a.team_abbr ? (
                    <span className="text-white/35 font-normal normal-case tracking-normal ml-1.5">
                      · {a.team_abbr}
                    </span>
                  ) : (
                    <span className="text-white/25 font-normal normal-case tracking-normal ml-1.5">· league</span>
                  )}
                </span>
                <time className="text-[10px] text-white/30" dateTime={a.created_at}>
                  {formatRelativePushTime(a.created_at)}
                </time>
              </div>
              <div className="text-sm font-medium text-white/85">{a.title}</div>
              <p className="text-xs mt-1 text-white/50 leading-relaxed">{a.body}</p>
              {a.url ? (
                <a href={a.url} className="inline-block mt-2 text-[11px] text-sky-400/95 underline hover:text-sky-300">
                  Open link
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
