/** Supabase-backed idempotent push event keys (shared by playoff + rival dispatchers). */

export async function pushLogFetch(supabaseUrl, serviceKey, table, opts = {}) {
  const method = opts.method ?? "GET";
  const url = `${supabaseUrl}/rest/v1/${table}${opts.query ? `?${opts.query}` : ""}`;
  const res = await fetch(url, {
    method,
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
      Prefer: method === "POST" ? "return=minimal,resolution=merge-duplicates" : "count=exact",
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Supabase ${method} ${table} ${res.status}: ${text}`);
  }
  if (res.status === 204) return null;
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

export async function pushAlreadySent(supabaseUrl, serviceKey, eventKey) {
  try {
    const rows = await pushLogFetch(supabaseUrl, serviceKey, "push_dispatch_log", {
      query: `event_key=eq.${encodeURIComponent(eventKey)}&select=event_key`,
    });
    return Array.isArray(rows) && rows.length > 0;
  } catch (err) {
    if (String(err.message).includes("404") || String(err.message).includes("push_dispatch_log")) {
      return false;
    }
    throw err;
  }
}

export async function pushMarkSent(supabaseUrl, serviceKey, eventKey) {
  try {
    await pushLogFetch(supabaseUrl, serviceKey, "push_dispatch_log", {
      method: "POST",
      body: [{ event_key: eventKey }],
    });
  } catch (err) {
    console.warn(`[push-dispatch-log] mark failed for ${eventKey}:`, err.message);
  }
}
