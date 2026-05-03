import { useState } from "react";
import type { ReactNode } from "react";
import SiteHeader from "../components/SiteHeader";

export default function GuestPulse() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pitch, setPitch] = useState("");
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState("");
  const [queueRef, setQueueRef] = useState<{ display: string; full: string } | null>(null);
  const [fail, setFail] = useState("");

  const submit = async () => {
    setBusy(true);
    setSuccess("");
    setQueueRef(null);
    setFail("");
    try {
      const res = await fetch("/api/contact-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "guest-pulse-index",
          name,
          email,
          message: pitch,
        }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error((j as { error?: string }).error ?? `Failed (${res.status})`);

      const sid = (j as { submissionId?: string }).submissionId;
      if (typeof sid === "string" && sid.length > 0) {
        const display = sid.length > 12 ? `${sid.slice(0, 8)}\u2026` : sid;
        setQueueRef({ display, full: sid });
      }

      setSuccess("Submitted. Thanks—we received your pitch.");
      setPitch("");
    } catch (e) {
      setFail(e instanceof Error ? e.message : "Could not submit.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="PROGRAM" />

      <div className="container py-10 max-w-xl">
        <p className="section-label mb-2">CREATOR EXPERIMENT</p>
        <h1 className="display-heading text-2xl sm:text-3xl mb-4 text-white">Guest Pulse pitch</h1>
        <p className="text-sm mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
          Propose a Pulse Index takeover: who you&apos;d elevate, thesis, and credibility in ~150 words.
          Confirmed pitches also enqueue into <span className="mono-data text-white/70">guest_pulse_submissions</span> whenever Supabase is configured so ops can
          moderate independently of inbound email spikes.
        </p>

        <div className="space-y-4">
          <Field label="Your name">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="inp"
              placeholder="Jane Hoops"
              autoComplete="name"
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inp"
              placeholder="you@org.com"
              autoComplete="email"
            />
          </Field>
          <Field label="Pitch">
            <textarea
              rows={10}
              value={pitch}
              onChange={(e) => setPitch(e.target.value)}
              className="inp min-h-[200px]"
              placeholder="Elevate ______ because… evidence… tone…"
            />
          </Field>
        </div>

        <button
          type="button"
          disabled={busy || pitch.trim().length < 10}
          onClick={submit}
          className="mt-6 w-full py-3 rounded-lg font-semibold"
          style={{
            background: "linear-gradient(135deg,#10B981,#059669)",
            color: "#fff",
            opacity: busy || pitch.trim().length < 10 ? 0.55 : 1,
          }}
        >
          {busy ? "Sending…" : "Send pitch"}
        </button>

        {success && (
          <div className="mt-5 space-y-3 rounded-xl border px-4 py-4 text-sm leading-relaxed" style={{ borderColor: "rgba(16,185,129,0.35)", background: "rgba(16,185,129,0.06)" }}>
            <p className="text-emerald-400/95 font-medium">{success}</p>
            {queueRef && (
              <p style={{ color: "rgba(255,255,255,0.7)" }}>
                Queue reference{" "}
                <code title={queueRef.full} className="mono-data text-emerald-200/95 text-[0.95em]">
                  {queueRef.display}
                </code>
              </p>
            )}
            <p style={{ color: "rgba(255,255,255,0.5)" }}>
              Our editors typically review Guest Pulse pitches within several business days. If there&apos;s a fit with the program,
              someone will reach out using the email you provided.
            </p>
          </div>
        )}
        {fail && <p className="mt-4 text-sm text-rose-400">{fail}</p>}

        <style>{`
          .inp {
            width: 100%; padding: 0.85rem 1rem; border-radius: 10px;
            border: 1px solid rgba(255,255,255,0.12);
            background: rgba(255,255,255,0.05);
            color: #fff; font-size: 0.9rem;
            outline: none;
          }
        `}</style>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="block text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
        {label}
      </label>
      {children}
    </div>
  );
}
