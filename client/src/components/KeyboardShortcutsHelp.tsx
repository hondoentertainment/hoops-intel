import { useEffect, useState } from "react";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";

export default function KeyboardShortcutsHelp() {
  const [open, setOpen] = useState(false);
  useBodyScrollLock(open);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (e.target as HTMLElement)?.isContentEditable;
      if (typing) return;

      if (e.key === "?" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  if (!open) return null;

  const rows = [
    ["⌘K / Ctrl+K", "Open search"],
    ["/", "Focus search (when available)"],
    ["?", "Show this help"],
    ["Esc", "Close dialogs"],
  ];

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)" }}
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="shortcuts-title"
        className="w-full max-w-sm rounded-xl p-5 shadow-2xl"
        style={{ background: "#0A1628", border: "1px solid rgba(255,255,255,0.1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="shortcuts-title" className="display-heading text-white text-lg mb-4">
          Keyboard shortcuts
        </h2>
        <dl className="space-y-2">
          {rows.map(([key, desc]) => (
            <div key={key} className="flex justify-between gap-4 text-sm">
              <dt className="mono-data text-sky-300">{key}</dt>
              <dd style={{ color: "rgba(255,255,255,0.65)" }}>{desc}</dd>
            </div>
          ))}
        </dl>
        <button
          type="button"
          className="mt-5 w-full min-h-[44px] rounded-lg text-sm font-semibold text-white"
          style={{ background: "#0EA5E9" }}
          onClick={() => setOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
