import { hasPreferences } from "../lib/userPreferences";

export default function MyPulseBanner({ onSetup }: { onSetup: () => void }) {
  if (hasPreferences()) return null;

  return (
    <div
      className="container py-3"
      role="region"
      aria-label="Personalization prompt"
    >
      <div
        className="rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-4 border"
        style={{ background: "rgba(14,165,233,0.08)", borderColor: "rgba(14,165,233,0.22)" }}
      >
        <div className="flex-1 min-w-0">
          <div className="section-label mb-1">MY PULSE</div>
          <p className="text-sm text-white font-medium">Pick your teams &amp; players for a personalized desk</p>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
            Scores, Pulse rankings, and tonight&apos;s slate reorder around what you follow.
          </p>
        </div>
        <button
          type="button"
          onClick={onSetup}
          className="shrink-0 min-h-[48px] px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
          style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
        >
          Set up My Pulse
        </button>
      </div>
    </div>
  );
}
