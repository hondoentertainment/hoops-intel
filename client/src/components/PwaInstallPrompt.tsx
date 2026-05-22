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

  return (
    <div className="pwa-install-prompt" role="dialog" aria-labelledby="pwa-install-title">
      <div>
        <div id="pwa-install-title" className="text-sm font-semibold text-white">
          Add Hoops Intel to your home screen
        </div>
        <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
          Quick access to today&apos;s desk, scores, and Pulse Index every morning.
        </p>
      </div>
      <div className="flex gap-2 shrink-0">
        <button
          type="button"
          className="text-xs px-3 py-2 rounded-lg min-h-[44px]"
          style={{ color: "rgba(255,255,255,0.5)" }}
          onClick={() => {
            localStorage.setItem("hi-pwa-dismissed", "1");
            setVisible(false);
          }}
        >
          Not now
        </button>
        <button
          type="button"
          className="text-xs font-semibold px-3 py-2 rounded-lg min-h-[44px] text-white"
          style={{ background: "#0EA5E9" }}
          onClick={() => {
            void deferred.prompt().then(() => {
              localStorage.setItem("hi-pwa-dismissed", "1");
              setVisible(false);
            });
          }}
        >
          Install
        </button>
      </div>
    </div>
  );
}
