import { useCallback, useEffect, useMemo, useState } from "react";
import ToolPageLayout from "../components/ToolPageLayout";

const TOKEN_KEY = "hi-creator-queue-bearer";

type Row = {
  id: string;
  created_at: string;
  name: string | null;
  email: string | null;
  status: string;
  notes: string;
  pitch: string;
  /** Editor override for public feed; null/empty → show original pitch. */
  published_pitch?: string | null;
};

type StatusKey = "received" | "reviewing" | "accepted" | "declined";

const STATUS_LABEL: Record<StatusKey, string> = {
  received: "New",
  reviewing: "In review",
  accepted: "Published",
  declined: "Rejected",
};

const STATUS_CLASS: Record<StatusKey, string> = {
  received: "text-sky-200 bg-sky-500/12 border-sky-500/30",
  reviewing: "text-amber-200 bg-amber-500/12 border-amber-500/30",
  accepted: "text-emerald-200 bg-emerald-500/12 border-emerald-500/30",
  declined: "text-rose-200 bg-rose-500/12 border-rose-500/30",
};

function ageHours(iso: string): number {
  const t = new Date(iso).getTime();
  if (!Number.isFinite(t)) return 0;
  return (Date.now() - t) / 36e5;
}

function backlogBadge(status: string, hours: number): { label: string; className: string } | null {
  if (status !== "received" && status !== "reviewing") return null;
  if (hours >= 72) return { label: "Stale (72h+)", className: "text-amber-300 bg-amber-500/15 border-amber-500/35" };
  if (hours >= 48) return { label: "Backlog · 48h+", className: "text-white/70 bg-white/[0.04] border-white/14" };
  if (hours >= 24 && status === "received") return { label: "24h+ in queue", className: "text-sky-200/90 bg-sky-500/10 border-sky-500/25" };
  return null;
}

function statusKey(s: string): StatusKey {
  if (s === "reviewing" || s === "accepted" || s === "declined") return s;
  return "received";
}

export default function CreatorQueue() {
  const stored = typeof sessionStorage !== "undefined" ? sessionStorage.getItem(TOKEN_KEY) ?? "" : "";
  const [token, setToken] = useState(() => (stored.startsWith("Bearer ") ? stored : stored ? `Bearer ${stored}` : ""));
  const [input, setInput] = useState(stored.replace(/^Bearer\s+/i, ""));
  const [rows, setRows] = useState<Row[]>([]);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [filterStatus, setFilterStatus] = useState<"" | StatusKey | "pending">("pending");
  const [noteDrafts, setNoteDrafts] = useState<Record<string, string>>({});
  const [publicDrafts, setPublicDrafts] = useState<Record<string, string>>({});

  const authHeader = useMemo(() => (token.startsWith("Bearer ") ? token : token ? `Bearer ${token}` : ""), [token]);
  const isAdmin = authHeader.replace(/^Bearer\s+/i, "").length >= 16;

  const load = useCallback(async () => {
    if (!isAdmin) return;
    setBusy(true);
    setErr("");
    try {
      const qs =
        filterStatus && filterStatus !== "pending"
          ? `?status=${encodeURIComponent(filterStatus)}`
          : "";
      const res = await fetch(`/api/guest-pulse-queue${qs}`, { headers: { Authorization: authHeader } });
      const j = await res.json().catch(() => ({}));
      if (res.status === 401) throw new Error("Invalid admin secret — check GUEST_PULSE_ADMIN_SECRET.");
      if (res.status === 503) throw new Error("Supabase not configured on server.");
      if (!res.ok) throw new Error((j as { error?: string }).error ?? res.statusText);
      let next = (j as { rows?: Row[] }).rows ?? [];
      if (filterStatus === "pending") {
        next = next.filter((r) => r.status === "received" || r.status === "reviewing");
      }
      setRows(next);
      setNoteDrafts((prev) => {
        const merged = { ...prev };
        for (const r of next) {
          if (merged[r.id] === undefined) merged[r.id] = r.notes ?? "";
        }
        return merged;
      });
      setPublicDrafts(() => {
        const merged: Record<string, string> = {};
        for (const r of next) {
          const override = typeof r.published_pitch === "string" ? r.published_pitch.trim() : "";
          merged[r.id] = override || r.pitch || "";
        }
        return merged;
      });
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Load failed");
      setRows([]);
    } finally {
      setBusy(false);
    }
  }, [authHeader, filterStatus, isAdmin]);

  useEffect(() => {
    if (isAdmin) void load();
  }, [load, isAdmin]);

  const saveToken = () => {
    const raw = input.trim();
    if (typeof sessionStorage !== "undefined") sessionStorage.setItem(TOKEN_KEY, raw);
    const hdr = raw.startsWith("Bearer ") ? raw : raw ? `Bearer ${raw}` : "";
    setToken(hdr);
    setMsg(hdr.replace(/^Bearer\s+/i, "").length >= 16 ? "Admin session active for this tab." : "Secret too short (min 16 chars).");
    setErr("");
  };

  const clearToken = () => {
    if (typeof sessionStorage !== "undefined") sessionStorage.removeItem(TOKEN_KEY);
    setToken("");
    setInput("");
    setRows([]);
    setMsg("");
    setErr("");
  };

  const patchRow = async (
    id: string,
    patch: { status?: string; notes?: string; published_pitch?: string | null },
  ) => {
    if (!authHeader) return;
    setBusy(true);
    setErr("");
    try {
      const res = await fetch("/api/guest-pulse-queue", {
        method: "PATCH",
        headers: { Authorization: authHeader, "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...patch }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error((j as { error?: string }).error ?? res.statusText);
      if (patch.status) setMsg(`Marked ${STATUS_LABEL[statusKey(patch.status)] ?? patch.status}.`);
      else if (patch.published_pitch !== undefined) setMsg("Public body saved.");
      else setMsg("Notes saved.");
      await load();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Update failed");
    } finally {
      setBusy(false);
    }
  };

  const publishWithEdit = async (r: Row) => {
    const draft = (publicDrafts[r.id] ?? r.pitch ?? "").trim();
    const original = (r.pitch ?? "").trim();
    const published_pitch = draft && draft !== original ? draft : null;
    await patchRow(r.id, { status: "accepted", published_pitch });
  };

  const counts = useMemo(() => {
    const c = { received: 0, reviewing: 0, accepted: 0, declined: 0 };
    for (const r of rows) {
      const k = statusKey(r.status);
      c[k] += 1;
    }
    return c;
  }, [rows]);

  const exportCsv = () => {
    const header = ["id", "created_at", "name", "email", "status", "notes", "pitch", "published_pitch"];
    const esc = (v: string) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const lines = [
      header.join(","),
      ...rows.map((r) =>
        [r.id, r.created_at, r.name, r.email, r.status, r.notes, r.pitch, r.published_pitch ?? ""]
          .map((c) => esc(c ?? ""))
          .join(","),
      ),
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `guest-pulse-queue-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    setMsg(`Exported ${rows.length} row(s) to CSV.`);
  };

  return (
    <ToolPageLayout subtitle="CREATOR OPS">
      <p className="section-label mb-1">guest pulse moderation</p>
      <h1 className="display-heading text-white text-2xl sm:text-3xl mb-2">Creator queue</h1>
      <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
        Admin surface for <span className="mono-data text-white/70">guest_pulse_submissions</span>. Paste{" "}
        <strong className="text-white/80">GUEST_PULSE_ADMIN_SECRET</strong> as a Bearer token. Workflow:{" "}
        <span className="text-white/70">New → In review → edit public body → Published / Rejected</span>.
      </p>

      {!isAdmin ? (
        <div
          className="rounded-xl p-6 mb-8"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="section-label mb-3">Admin sign-in</div>
          <div className="flex flex-wrap gap-2 items-center">
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste admin secret…"
              className="inp flex-1 min-w-[240px]"
              autoComplete="off"
              onKeyDown={(e) => e.key === "Enter" && saveToken()}
            />
            <button type="button" disabled={busy || input.trim().length < 16} onClick={saveToken} className="btn-primary">
              Unlock queue
            </button>
          </div>
          <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.35)" }}>
            Stored in sessionStorage only — cleared when you close the tab.
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2 items-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border border-emerald-500/35 text-emerald-300 bg-emerald-500/10">
            Admin
          </span>
          <button type="button" disabled={busy} onClick={() => void load()} className="btn-primary">
            Refresh
          </button>
          <button type="button" disabled={busy || rows.length === 0} onClick={exportCsv} className="btn-soft">
            Export CSV
          </button>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value as typeof filterStatus)} className="inp w-44 text-xs">
            <option value="pending">Pending (new + review)</option>
            <option value="">All statuses</option>
            <option value="received">New</option>
            <option value="reviewing">In review</option>
            <option value="accepted">Published</option>
            <option value="declined">Rejected</option>
          </select>
          <button type="button" onClick={clearToken} className="btn-soft ml-auto">
            Sign out
          </button>
        </div>
      )}

      {msg ? <p className="text-sm text-emerald-400 mb-2">{msg}</p> : null}
      {err ? <p className="text-sm text-rose-400 mb-2">{err}</p> : null}

      {isAdmin && (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {(["received", "reviewing", "accepted", "declined"] as const).map((s) => (
              <div key={s} className="rounded-lg px-4 py-3 border border-white/[0.08] bg-white/[0.02]">
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1">{STATUS_LABEL[s]}</div>
                <div className="text-2xl font-black mono-data text-white">{counts[s]}</div>
              </div>
            ))}
          </div>

          {busy && rows.length === 0 ? (
            <p className="text-sm text-white/45 py-8 text-center">Loading queue…</p>
          ) : rows.length === 0 ? (
            <div
              className="rounded-xl px-6 py-12 text-center"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-white/70 font-medium mb-1">No submissions in this view</p>
              <p className="text-xs text-white/40">
                {filterStatus === "pending"
                  ? "Pending queue is clear — switch to All statuses to see published or rejected pitches."
                  : "Try another filter or wait for new Guest Pulse pitches."}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {rows.map((r) => {
                const hrs = ageHours(r.created_at);
                const sla = backlogBadge(r.status, hrs);
                const sk = statusKey(r.status);
                return (
                  <article key={r.id} className="rounded-xl p-5 border border-white/[0.08] bg-white/[0.02]">
                    <div
                      className="flex flex-wrap justify-between gap-2 text-xs mono-data mb-2 items-center"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      <span className="flex flex-wrap items-center gap-2">
                        <span>{r.created_at.slice(0, 19)}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded border border-white/10 text-white/50">
                          {hrs < 1 ? "Under 1h" : `${Math.floor(hrs)}h old`}
                        </span>
                        {sla ? (
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded border font-bold uppercase tracking-wider ${sla.className}`}
                          >
                            {sla.label}
                          </span>
                        ) : null}
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded border font-bold uppercase tracking-wider ${STATUS_CLASS[sk]}`}
                      >
                        {STATUS_LABEL[sk]}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-white mb-1">
                      {r.name || "—"} · {r.email || "—"}
                    </div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/35 mb-1">
                      Original pitch
                    </label>
                    <p className="text-sm whitespace-pre-wrap leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.68)" }}>
                      {r.pitch}
                    </p>

                    <label className="block text-[10px] uppercase tracking-wider text-white/35 mb-1">
                      Public body (edit before publish)
                    </label>
                    <textarea
                      value={publicDrafts[r.id] ?? r.published_pitch ?? r.pitch ?? ""}
                      onChange={(e) => setPublicDrafts((prev) => ({ ...prev, [r.id]: e.target.value }))}
                      rows={4}
                      className="inp w-full text-sm mb-2 resize-y min-h-[88px]"
                      placeholder="What readers see on the Guest Pulse feed…"
                    />
                    <div className="flex flex-wrap gap-2 mb-4">
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() =>
                          void patchRow(r.id, {
                            published_pitch: (publicDrafts[r.id] ?? "").trim() || null,
                          })
                        }
                        className="btn-soft text-[11px]"
                      >
                        Save public body
                      </button>
                      <button
                        type="button"
                        disabled={busy}
                        onClick={() =>
                          setPublicDrafts((prev) => ({ ...prev, [r.id]: r.pitch ?? "" }))
                        }
                        className="btn-soft text-[11px]"
                      >
                        Reset to original
                      </button>
                      {r.published_pitch ? (
                        <span className="text-[10px] self-center text-emerald-300/80 uppercase tracking-wider">
                          Override on file
                        </span>
                      ) : null}
                    </div>

                    <label className="block text-[10px] uppercase tracking-wider text-white/35 mb-1">Editor notes</label>
                    <textarea
                      value={noteDrafts[r.id] ?? r.notes ?? ""}
                      onChange={(e) => setNoteDrafts((prev) => ({ ...prev, [r.id]: e.target.value }))}
                      rows={2}
                      className="inp w-full text-sm mb-2 resize-y min-h-[52px]"
                      placeholder="Internal notes (not emailed to submitter)…"
                    />
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => void patchRow(r.id, { notes: noteDrafts[r.id] ?? "" })}
                      className="btn-soft text-[11px] mb-4"
                    >
                      Save notes
                    </button>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                      {sk === "received" && (
                        <button
                          type="button"
                          disabled={busy}
                          onClick={() => void patchRow(r.id, { status: "reviewing" })}
                          className="btn-primary text-[11px]"
                        >
                          → In review
                        </button>
                      )}
                      {(sk === "received" || sk === "reviewing") && (
                        <>
                          <button
                            type="button"
                            disabled={busy}
                            onClick={() => void publishWithEdit(r)}
                            className="px-3 py-1.5 rounded text-[11px] font-bold uppercase border border-emerald-500/40 text-emerald-200 hover:bg-emerald-500/10"
                          >
                            Publish
                          </button>
                          <button
                            type="button"
                            disabled={busy}
                            onClick={() => void patchRow(r.id, { status: "declined" })}
                            className="px-3 py-1.5 rounded text-[11px] font-bold uppercase border border-rose-500/35 text-rose-200 hover:bg-rose-500/10"
                          >
                            Reject
                          </button>
                        </>
                      )}
                      {sk === "reviewing" && (
                        <button
                          type="button"
                          disabled={busy}
                          onClick={() => void patchRow(r.id, { status: "received" })}
                          className="btn-soft text-[11px]"
                        >
                          ← Back to new
                        </button>
                      )}
                      {sk === "accepted" && (
                        <button
                          type="button"
                          disabled={busy}
                          onClick={() =>
                            void patchRow(r.id, {
                              published_pitch: (publicDrafts[r.id] ?? "").trim() || null,
                            })
                          }
                          className="px-3 py-1.5 rounded text-[11px] font-bold uppercase border border-emerald-500/40 text-emerald-200 hover:bg-emerald-500/10"
                        >
                          Update published body
                        </button>
                      )}
                      {(sk === "accepted" || sk === "declined") && (
                        <button
                          type="button"
                          disabled={busy}
                          onClick={() => void patchRow(r.id, { status: "reviewing" })}
                          className="btn-soft text-[11px]"
                        >
                          Re-open for review
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </>
      )}

      <style>{`
          .inp {
            padding: 0.6rem 0.85rem;
            border-radius: 10px;
            border: 1px solid rgba(255,255,255,0.14);
            background: rgba(255,255,255,0.04);
            color: #fff;
            outline: none;
          }
          .btn-primary {
            padding: 0.6rem 1rem;
            border-radius: 10px;
            background: linear-gradient(135deg, #0EA5E9, #0369a1);
            font-weight: 700;
            color: white;
          }
          .btn-soft {
            padding: 0.6rem 1rem;
            border-radius: 10px;
            border: 1px solid rgba(255,255,255,0.12);
            color: rgba(255,255,255,0.85);
          }
          .btn-primary:disabled, .btn-soft:disabled { opacity: .45 }
        `}</style>
    </ToolPageLayout>
  );
}
