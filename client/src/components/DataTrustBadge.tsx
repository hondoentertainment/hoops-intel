import { editionUpdatedLabel, espnSourceLabel, liveScoresTrustLabel } from "../lib/dataTrust";

type Variant = "edition" | "espn" | "live";

export default function DataTrustBadge({
  variant = "edition",
  fetchedAt,
  className = "",
}: {
  variant?: Variant;
  fetchedAt?: number;
  className?: string;
}) {
  const label =
    variant === "live"
      ? liveScoresTrustLabel(fetchedAt)
      : variant === "espn"
        ? espnSourceLabel(fetchedAt)
        : editionUpdatedLabel();

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium mono-data ${className}`}
      style={{
        background: "rgba(16,185,129,0.12)",
        color: "#10B981",
        border: "1px solid rgba(16,185,129,0.25)",
      }}
      title={label}
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
      {label}
    </span>
  );
}
