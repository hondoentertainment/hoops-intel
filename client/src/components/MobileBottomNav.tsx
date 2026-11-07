import { useLocation } from "wouter";
import { mobileBottomNavLinks, navItemActive } from "../lib/siteNav";
import { hapticTap } from "../lib/haptic";

function TabIcon({ href, active }: { href: string; active: boolean }) {
  const stroke = active ? "var(--hi-brand,#C8102E)" : "var(--hi-muted,#686359)";
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: 2, "aria-hidden": true as const };
  if (href === "/") {
    return (
      <svg {...common}>
        <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z" />
      </svg>
    );
  }
  if (href === "/tonight") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </svg>
    );
  }
  if (href === "/pulse-history") {
    return (
      <svg {...common}>
        <path d="M4 16l5-5 3 3 8-8" />
        <path d="M14 6h6v6" />
      </svg>
    );
  }
  if (href === "/pick-em") {
    return (
      <svg {...common}>
        <path d="M5 12.5 9.5 17 19 7" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8" />
      <path d="M9.5 9a2.5 2.5 0 1 1 3.2 2.4c-.8.3-1.2.8-1.2 1.6V14" />
      <path d="M12 17h.01" />
    </svg>
  );
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
        background: "var(--hi-header-bg,#FBF9F4)",
        borderColor: "var(--hi-hairline,#E4E0D6)",
      }}
      aria-label="Primary mobile navigation"
    >
      <div className="grid grid-cols-5 h-16 px-1">
        {mobileBottomNavLinks().map((link) => {
          const active = navItemActive(link.href, location);
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className="mobile-bottom-nav-item relative h-full min-h-12 min-w-11 flex flex-col items-center justify-center gap-1 text-[12px] leading-none active:scale-[0.97] transition-transform"
              style={{
                color: active ? "var(--hi-brand,#C8102E)" : "var(--hi-muted,#686359)",
                fontWeight: active ? 600 : 500,
              }}
              onClick={() => hapticTap()}
            >
              <TabIcon href={link.href} active={active} />
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
