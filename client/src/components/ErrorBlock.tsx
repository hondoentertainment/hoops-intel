interface ErrorBlockProps {
  message: string;
  onRetry?: () => void;
  fallbackHref?: string;
  fallbackLabel?: string;
}

export default function ErrorBlock({
  message,
  onRetry,
  fallbackHref,
  fallbackLabel = "View cached edition",
}: ErrorBlockProps) {
  return (
    <div
      className="rounded-xl p-4 border"
      style={{ background: "rgba(244,63,94,0.08)", borderColor: "rgba(244,63,94,0.25)" }}
      role="alert"
    >
      <p className="text-sm text-rose-200 mb-3">{message}</p>
      <div className="flex flex-wrap gap-2">
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-white"
            style={{ background: "rgba(14,165,233,0.25)", color: "#7dd3fc" }}
          >
            Retry
          </button>
        )}
        {fallbackHref && (
          <a
            href={fallbackHref}
            className="min-h-[44px] inline-flex items-center px-4 py-2 rounded-lg text-xs font-semibold"
            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)" }}
          >
            {fallbackLabel}
          </a>
        )}
      </div>
    </div>
  );
}
