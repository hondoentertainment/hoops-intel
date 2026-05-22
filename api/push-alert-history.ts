// GET /api/push-alert-history — recent push dispatches (public, anonymized).
// Optional ?teams=NYK,CLE filters to those teams + league-wide (null team_abbr) rows.

export const config = { runtime: "nodejs" };

import {
  PUSH_ALERT_HISTORY_API_LIMIT,
  buildPushHistoryTeamFilter,
  parseTeamFilterFromSearch,
  type PushAlertHistoryItem,
} from "../shared/pushAlertHistory";

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return new Response(JSON.stringify({ alerts: [], unavailable: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=60" },
    });
  }

  const url = new URL(req.url, "https://hoopsintel.net");
  const filteredTeams = parseTeamFilterFromSearch(url.search);
  const teamFilter = buildPushHistoryTeamFilter(filteredTeams);

  const qs = new URLSearchParams({
    select: "id,created_at,topic,title,body,url,team_abbr",
    order: "created_at.desc",
    limit: String(PUSH_ALERT_HISTORY_API_LIMIT),
  });
  if (teamFilter) qs.set("or", teamFilter.replace(/^or=/, ""));

  const res = await fetch(`${supabaseUrl}/rest/v1/push_alert_history?${qs.toString()}`, {
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.warn("[push-alert-history] fetch failed", res.status, text);
    return new Response(JSON.stringify({ alerts: [], error: "fetch_failed" }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=30" },
    });
  }

  const alerts = (await res.json()) as PushAlertHistoryItem[];

  return new Response(
    JSON.stringify({
      alerts,
      filtered: filteredTeams.length > 0,
      teams: filteredTeams.length > 0 ? filteredTeams : undefined,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
      },
    },
  );
}
