import { useState } from "react";
import SiteHeader from "../components/SiteHeader";

function loadEmail(): string {
  try {
    const qs = new URLSearchParams(window.location.search);
    return qs.get("email") ?? "";
  } catch {
    return "";
  }
}

export default function Unsubscribe() {
  const [email, setEmail] = useState(() => loadEmail());
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");

  const submit = async () => {
    const e = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
      setStatus("err");
      setMessage("Enter a valid email.");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/unsubscribe-digest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: e }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error((j as { error?: string }).error ?? `Request failed (${res.status})`);
      setStatus("ok");
      setMessage("You’ve been unsubscribed from the Hoops Intel daily digest.");
    } catch (err) {
      setStatus("err");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="DIGEST" />

      <div className="container py-14 max-w-md">
        <h1 className="display-heading text-2xl text-white mb-2">Unsubscribe</h1>
        <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
          Turn off morning digest emails only — your Hoops Intel account (if any) stays active.
        </p>
        <label htmlFor="unsub-email" className="sr-only">
          Email
        </label>
        <input
          id="unsub-email"
          type="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          placeholder="you@domain.com"
          className="w-full px-4 py-3 rounded-lg text-sm mb-4 outline-none"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#fff",
          }}
          autoComplete="email"
        />
        <button
          type="button"
          onClick={submit}
          disabled={status === "loading"}
          className="w-full py-3 rounded-lg font-semibold transition-opacity"
          style={{
            background: "linear-gradient(135deg,#0EA5E9,#0284C7)",
            color: "#fff",
            opacity: status === "loading" ? 0.6 : 1,
          }}
        >
          {status === "loading" ? "Submitting…" : "Confirm unsubscribe"}
        </button>
        {message && (
          <p className={`mt-4 text-sm ${status === "ok" ? "text-emerald-400" : status === "err" ? "text-rose-400" : ""}`}>
            {message}
          </p>
        )}
        <p className="mt-10 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          Tip: Prefer fewer emails instead? Quiet hours ship with bulk sends — ping us if something looks off after
          subscribing again from the home footer.
        </p>
      </div>
    </div>
  );
}
