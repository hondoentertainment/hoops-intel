import { useState, useRef, useEffect } from "react";

// ═══════════════════════════════════════════════════════════
// ShareButton — Reusable share dropdown for Hoops Intel
// ═══════════════════════════════════════════════════════════

interface ShareButtonProps {
  /** URL to share (defaults to current page) */
  url?: string;
  /** Pre-filled tweet text for X/Twitter sharing */
  tweetText?: string;
  /** Visual size variant */
  size?: "sm" | "md";
  /** Optional extra CSS class names */
  className?: string;
}

export default function ShareButton({
  url,
  tweetText,
  size = "sm",
  className = "",
}: ShareButtonProps) {
  const [open, setOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const shareUrl = url || window.location.href;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      const el = document.createElement("textarea");
      el.value = shareUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setOpen(false);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  const handleTweetShare = () => {
    const text = tweetText || shareUrl;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(tweetUrl, "_blank", "noopener,noreferrer,width=600,height=400");
    setOpen(false);
  };

  const handleNativeShare = async () => {
    try {
      await navigator.share({ url: shareUrl, text: tweetText });
    } catch {
      // User cancelled or API unavailable — ignore
    }
    setOpen(false);
  };

  const hasNativeShare = typeof navigator !== "undefined" && !!navigator.share;

  const btnPad = size === "sm" ? "px-2.5 py-1.5" : "px-3 py-2";
  const iconSize = size === "sm" ? 12 : 14;
  const textSize = size === "sm" ? "text-[11px]" : "text-xs";

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 ${btnPad} rounded ${textSize} font-semibold transition-colors`}
        style={{
          background: open ? "rgba(14,165,233,0.2)" : "rgba(255,255,255,0.06)",
          color: open ? "#0EA5E9" : "rgba(255,255,255,0.55)",
          border: "1px solid",
          borderColor: open ? "rgba(14,165,233,0.4)" : "rgba(255,255,255,0.1)",
        }}
        aria-label="Share"
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        Share
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 mt-1 rounded-lg overflow-hidden z-10"
          style={{
            background: "#0B1728",
            border: "1px solid rgba(255,255,255,0.1)",
            minWidth: "160px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          }}
        >
          {/* Copy link */}
          <button
            onClick={handleCopyLink}
            className="w-full flex items-center gap-2 px-4 py-3 text-xs text-left transition-colors"
            style={{ color: "rgba(255,255,255,0.8)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copy link
          </button>

          {/* Post on X */}
          <button
            onClick={handleTweetShare}
            className="w-full flex items-center gap-2 px-4 py-3 text-xs text-left transition-colors"
            style={{ color: "rgba(255,255,255,0.8)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Post on X
          </button>

          {/* Native share (mobile) */}
          {hasNativeShare && (
            <button
              onClick={handleNativeShare}
              className="w-full flex items-center gap-2 px-4 py-3 text-xs text-left transition-colors"
              style={{ color: "rgba(255,255,255,0.8)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
              More options...
            </button>
          )}
        </div>
      )}

      {/* Toast notification */}
      {toastVisible && (
        <div
          className="absolute -top-10 right-0 px-3 py-1.5 rounded text-xs font-semibold whitespace-nowrap z-20"
          style={{
            background: "#10B981",
            color: "#fff",
            boxShadow: "0 4px 12px rgba(16,185,129,0.3)",
          }}
        >
          Link copied!
        </div>
      )}
    </div>
  );
}
