import { useEffect, useState } from "react";

type OpsBody = {
  stripe?: { checkoutReady?: boolean; webhookReady?: boolean };
  push?: { vapidKeyPairReady?: boolean; notifyAuthReady?: boolean };
  pushDispatch?: { apiUrlConfigured?: boolean };
  supabase?: { serverReady?: boolean };
  creatorQueue?: { adminConfigured?: boolean };
  emailDigest?: { resendReady?: boolean; intakeInboxReady?: boolean };
  llm?: { anthropicSeriesIntelReady?: boolean };
};

function Flag({ ok, label }: { ok: boolean; label: string }) {
  return (
    <div className="flex justify-between gap-3 text-xs">
      <span style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>{label}</span>
      <span className={ok ? "text-emerald-400 font-semibold" : "text-amber-400/90"}>{ok ? "Ready" : "Pending"}</span>
    </div>
  );
}

export default function OpsReadinessPanel() {
  const [ops, setOps] = useState<OpsBody | null>(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    fetch("/api/ops-readiness")
      .then((r) => r.json())
      .then((b) => setOps(b))
      .catch(() => setErr(true));
  }, []);

  return (
    <div
      className="rounded-xl p-6 mb-6"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="section-label mb-2">PRODUCTION READINESS</div>
      <p className="text-xs mb-4 leading-relaxed" style={{ color: "var(--hi-muted,#686359)" }}>
        Pro checkout, browser alerts, and the morning digest stay coming soon until they are turned on. The free desk does not depend on them.
      </p>
      {err && <p className="text-xs text-amber-300">Could not load readiness flags.</p>}
      {ops && (
        <div className="space-y-2">
          <Flag ok={Boolean(ops.stripe?.checkoutReady)} label="Stripe checkout" />
          <Flag ok={Boolean(ops.stripe?.webhookReady)} label="Stripe webhooks" />
          <Flag ok={Boolean(ops.push?.notifyAuthReady)} label="Web push pipeline" />
          <Flag ok={Boolean(ops.pushDispatch?.apiUrlConfigured)} label="Push API URL (cron)" />
          <Flag ok={Boolean(ops.emailDigest?.intakeInboxReady)} label="Guest Pulse inbox" />
          <Flag ok={Boolean(ops.creatorQueue?.adminConfigured)} label="Creator queue admin" />
          <Flag ok={Boolean(ops.emailDigest?.resendReady)} label="Email digest" />
          <Flag ok={Boolean(ops.supabase?.serverReady)} label="Supabase server" />
          <Flag ok={Boolean(ops.llm?.anthropicSeriesIntelReady)} label="Series intel (Claude)" />
        </div>
      )}
    </div>
  );
}
