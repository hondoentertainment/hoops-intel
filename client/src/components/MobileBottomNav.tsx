import { useLocation } from "wouter";
import { mobileBottomNavLinks } from "../lib/siteNav";
import { hapticTap } from "../lib/haptic";

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
        height: "calc(var(--hi-tabbar-height) + env(safe-area-inset-bottom, 0px))",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
        background: "var(--hi-header-bg,#fafaf8)",
        borderColor: "var(--hi-border-soft,rgba(10,10,10,0.06))",
      }}
      aria-label="Primary mobile navigation"
    >
      <div className="grid grid-cols-5 h-16 px-2">
        {mobileBottomNavLinks().map((link) => {
          const active = linkActive(link.href, location);
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className="mobile-bottom-nav-item relative h-full min-h-12 flex flex-col items-center justify-center gap-1 text-[11px] leading-none tracking-wide active:scale-[0.97] transition-transform"
              style={{
                color: active ? "var(--hi-text,#0a0a0a)" : "var(--hi-text-secondary,#8a8a86)",
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
