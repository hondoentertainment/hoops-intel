import SiteHeader from "../components/SiteHeader";
import { TOOLS_DIRECTORY } from "../lib/siteNav";

export default function Tools() {
  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="TOOLS & LABS" brandTitle="HOOPS INTEL" />
      <div className="container py-10 max-w-4xl mx-auto px-4">
        <p className="section-label mb-2">FEATURE DIRECTORY</p>
        <h1 className="display-heading text-2xl sm:text-3xl mb-4" style={{ color: "var(--hi-heading,#fff)" }}>
          Every Hoops Intel tool
        </h1>
        <p className="text-sm mb-8 max-w-2xl leading-relaxed" style={{ color: "var(--hi-muted,rgba(255,255,255,0.6))" }}>
          Jump straight to standings intel, simulations, embeddings, podcast mode, and the rest — same shell and search as the
          main desk (⌘K / Ctrl+K).
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TOOLS_DIRECTORY.map((t) => (
            <li key={t.href + t.label}>
              <a
                href={t.href}
                className="glass-card block rounded-xl p-4 min-h-[4.75rem] transition-colors hover:border-sky-500/40 hover:bg-white/[0.05] outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
              >
                <span className="text-sm font-semibold text-[var(--hi-heading,#fff)]">{t.label}</span>
                <p className="text-xs mt-1 leading-snug" style={{ color: "var(--hi-muted-sub,rgba(255,255,255,0.5))" }}>
                  {t.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
