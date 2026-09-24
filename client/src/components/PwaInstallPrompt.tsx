import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PwaInstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  useEffect(() => {
    if (!deferred) return;
    try {
      const visits = Number(localStorage.getItem("hi-visit-count") || "0");
      const dismissed = localStorage.getItem("hi-pwa-dismissed") === "1";
      if (visits >= 2 && !dismissed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, [deferred]);

  if (!visible || !deferred) return null;

  const dismiss = () => {
    try {
      localStorage.setItem("hi-pwa-dismissed", "1");
    } catch {
      /* private mode */
    }
    setVisible(false);
  };

  return (
    <div
      className="pwa-install-prompt"
      role="region"
      aria-label="Add Hoops Intel to your home screen"
      data-testid="pwa-install-prompt"
    >
      <div>
        <p id="pwa-install-title" className="text-sm font-semibold text-[var(--hi-text,#0a0a0a)]">
          Add Hoops Intel to your home screen
        </p>
        <p className="text-xs mt-1" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
          Quick access to today&apos;s desk, scores, and Pulse Index every morning.
        </p>
      </div>
      <div className="flex gap-2 shrink-0">
        <button
          type="button"
          className="text-xs px-3 py-2 rounded-lg min-h-11"
          style={{ color: "var(--hi-text,#0a0a0a)" }}
          aria-label="Dismiss home screen install prompt"
          onClick={dismiss}
        >
          Not now
        </button>
        <button
          type="button"
          className="hi-pill-primary text-xs font-semibold px-3 py-2 min-h-11"
          onClick={() => {
            void deferred.prompt().then(() => {
              dismiss();
            });
          }}
        >
          Install
        </button>
      </div>
    </div>
  );
}
