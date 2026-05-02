import { type RefObject, useEffect } from "react";

const FOCUSABLE =
  'a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(active: boolean, containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!active || !containerRef.current) return;
    const root = containerRef.current;
    const candidates = [...root.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
      (el) =>
        !(el.closest("[data-focus-trap-ignore]")) &&
        !(el.closest("[hidden]")) &&
        !(el.closest("[aria-hidden='true']")) &&
        typeof el.dataset.focusTrapExclude === "undefined",
    );

    const first = candidates[0];
    const last = candidates[candidates.length - 1];

    queueMicrotask(() => {
      first?.focus();
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || candidates.length === 0) return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    root.addEventListener("keydown", onKey);
    return () => root.removeEventListener("keydown", onKey);
  }, [active, containerRef]);
}
