import { useCallback, useEffect, useMemo, useState } from "react";
import SiteHeader from "../components/SiteHeader";

const TOKEN_KEY = "hi-creator-queue-bearer";

type Row = {
  id: string;
  created_at: string;
  name: string | null;
  email: string | null;
  status: string;
  notes: string;
  pitch: string;
};

export default function CreatorQueue() {
  const stored = typeof sessionStorage !== "undefined" ? sessionStorage.getItem(TOKEN_KEY) ?? "" : "";
  const [token, setToken] = useState(() => (stored.startsWith("Bearer ") ? stored : stored ? `Bearer ${stored}` : ""));
  const [input, setInput] = useState(stored.replace(/^Bearer\s+/i, ""));
  const [rows, setRows] = useState<Row[]>([]);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const authHeader = useMemo(() => (token.startsWith("Bearer ") ? token : token ? `Bearer ${token}` : ""), [token]);

  const load = useCallback(async () => {
    if (!authHeader || authHeader === "Bearer ") return;
    setBusy(true);
    setErr("");
    try {
      const qs = filterStatus ? `?status=${encodeURIComponent(filterStatus)}` : "";
      const res = await fetch(`/api/guest-pulse-queue${qs}`, { headers: { Authorization: authHeader } });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error((j as { error?: string }).error ?? res.statusText);
      setRows((j as { rows?: Row[] }).rows ?? []);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Load failed");
      setRows([]);
    } finally {
      setBusy(false);
    }
  }, [authHeader, filterStatus]);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined" && authHeader.replace(/^Bearer\s+/i, "").length >= 16) void load();
  }, [load, authHeader]);

  const saveToken = () => {
    const raw = input.trim();
    if (typeof sessionStorage !== "undefined") sessionStorage.setItem(TOKEN_KEY, raw);
    const hdr = raw.startsWith("Bearer ") ? raw : raw ? `Bearer ${raw}` : "";
    setToken(hdr);
    setMsg("Token stored for this browser session.");
  };

  const patchRow = async (id: string, status: string) => {
    if (!authHeader) return;
    setBusy(true);
    setErr("");
    try {
      const res = await fetch("/api/guest-pulse-queue", {
        method: "PATCH",
        headers: { Authorization: authHeader, "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error((j as { error?: string }).error ?? res.statusText);
      await load();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "PATCH failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="CREATOR OPS" />

      <div className="container py-10 max-w-4xl space-y-6">
        <p className="section-label mb-1">guest pulse moderation</p>
        <h1 className="display-heading text-white text-2xl sm:text-3xl mb-2">Creator queue</h1>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
          Requires <strong className="text-white/80">GUEST_PULSE_ADMIN_SECRET</strong> on the server. Paste the secret
          below (Bearer prefix added if missing).
        </p>

        <div className="flex flex-wrap gap-2 items-center">
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste admin secret…"
            className="inp flex-1 min-w-[240px]"
            autoComplete="off"
          />
          <button type="button" disabled={busy} onClick={() => saveToken()} className="btn-soft">
            Store token
          </button>
          <button
            type="button"
            disabled={busy || authHeader.replace(/^Bearer\s+/i, "").length < 16}
            onClick={() => void load()}
            className="btn-primary"
          >
            Refresh
          </button>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="inp w-40 text-xs">
            <option value="">All statuses</option>
            <option value="received">Received</option>
            <option value="reviewing">Reviewing</option>
            <option value="accepted">Accepted</option>
            <option value="declined">Declined</option>
          </select>
        </div>

        {msg ? <p className="text-sm text-emerald-400">{msg}</p> : null}
        {err ? <p className="text-sm text-rose-400">{err}</p> : null}

        <div className="space-y-4 mt-8">
          {rows.map((r) => (
            <article key={r.id} className="rounded-xl p-5 border border-white/[0.08] bg-white/[0.02]">
              <div className="flex flex-wrap justify-between gap-2 text-xs mono-data mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                <span>{r.created_at.slice(0, 19)}</span>
                <span className="uppercase tracking-[0.12em]" style={{ color: "#94F5D9" }}>
                  {r.status}
                </span>
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                {r.name || "—"} · {r.email || "—"}
              </div>
              <p className="text-sm whitespace-pre-wrap leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.68)" }}>
                {r.pitch}
              </p>
              <div className="flex flex-wrap gap-2">
                {(["received", "reviewing", "accepted", "declined"] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    disabled={busy}
                    onClick={() => void patchRow(r.id, s)}
                    className="px-3 py-1.5 rounded text-[11px] font-bold uppercase border border-white/[0.1] hover:border-sky-500/40"
                  >
                    Mark {s}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>

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
      </div>
    </div>
  );
}
