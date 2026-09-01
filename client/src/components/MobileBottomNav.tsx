import { useLocation } from "wouter";
import { mobileBottomNavLinks } from "../lib/siteNav";
import { hapticTap } from "../lib/haptic";
import { ENHANCED_ACCENT } from "../lib/enhancedDesk";

function linkActive(href: string, location: string) {
  const base = href.split("#")[0] || "/";
  if (base === "/") return location === "/";
  return location === base || location.startsWith(`${base}/`);
}

export default function MobileBottomNav() {
  const [location] = useLocation();

  return (
    <nav
      className="mobile-bottom-nav fixed bottom-0 left-0 right-0 z-50 md:hidden border-t"
      style={{
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        background: "var(--hi-surface,#0c1522)",
        borderColor: "var(--hi-border,#1e2c40)",
      }}
      aria-label="Primary mobile navigation"
    >
      <div className="grid grid-cols-5 px-2 pt-2.5 pb-4">
        {mobileBottomNavLinks().map((link) => {
          const active = linkActive(link.href, location);
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className="mobile-bottom-nav-item relative min-h-[48px] flex flex-col items-center justify-center gap-0.5 text-[10px] tracking-wide active:scale-[0.97] transition-transform"
              style={{
                color: active ? ENHANCED_ACCENT : "var(--hi-text-secondary,#8b9bb0)",
                fontWeight: active ? 600 : 500,
              }}
              onClick={() => hapticTap()}
            >
              <span className="text-[8px] font-bold leading-none" aria-hidden>
                {active ? "●" : "○"}
              </span>
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
