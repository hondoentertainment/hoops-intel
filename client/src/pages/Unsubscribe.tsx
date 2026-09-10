import { useState } from "react";
import EditorialShell from "../components/EditorialShell";
import { PageHero } from "../components/enhanced/EnhancedUi";

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
    <EditorialShell header={{ subtitle: "DIGEST" }} mainClassName="container py-14 max-w-md">
        <PageHero
          kicker="Digest"
          title="Unsubscribe"
          description="Turn off morning digest emails only — your Hoops Intel account (if any) stays active."
        />
        <div className="mt-6">
        <label htmlFor="unsub-email" className="sr-only">
          Email
        </label>
        <input
          id="unsub-email"
          type="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          placeholder="you@domain.com"
          className="w-full px-4 py-3 rounded-lg text-base sm:text-sm mb-4 outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
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
          className="w-full min-h-[44px] py-3 rounded-lg font-semibold transition-opacity"
          style={{
            background: "var(--hi-accent,#1ec8f5)",
            color: "var(--hi-accent-ink,#0a0d12)",
            opacity: status === "loading" ? 0.6 : 1,
          }}
        >
          {status === "loading" ? "Submitting…" : "Confirm unsubscribe"}
        </button>
        {message && (
          <p className={`mt-4 text-sm ${status === "ok" ? "text-emerald-400" : status === "err" ? "text-rose-400" : ""}`} role={status === "err" ? "alert" : "status"}>
            {message}
          </p>
        )}
        <p className="mt-10 text-xs" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
          Tip: Prefer fewer emails instead? Quiet hours ship with bulk sends — ping us if something looks off after
          subscribing again from the home footer.
        </p>
        </div>
    </EditorialShell>
  );
}
