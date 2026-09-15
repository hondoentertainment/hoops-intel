import { useEffect } from "react";

export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    const scroller = document.querySelector(".hi-app-scroll");
    const prevScroller = scroller instanceof HTMLElement ? scroller.style.overflow : "";
    document.body.style.overflow = "hidden";
    if (scroller instanceof HTMLElement) scroller.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
      if (scroller instanceof HTMLElement) scroller.style.overflow = prevScroller;
    };
  }, [locked]);
}
