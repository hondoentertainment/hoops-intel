import { PUSH_TOPIC_OPTIONS } from "../lib/webPushAccount";

/** Explains which server-side alerts can reach this device (no PII). */
export default function PushAlertGuide() {
  return (
    <div
      className="rounded-xl p-4 mt-4"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="section-label mb-2">What we may alert</div>
      <ul className="space-y-2 text-xs leading-relaxed text-white/55">
        {PUSH_TOPIC_OPTIONS.map((t) => (
          <li key={t.id}>
            <span className="font-semibold text-white/75">{t.label}</span>
            <span className="text-white/40"> — {t.hint}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[10px] text-white/35">
        Playoff tip alerts fire within ~2 hours of tip-off. Line movement and digest content are on the site and email — not push (yet).
      </p>
    </div>
  );
}
