// Embeddable Widgets Page — Add Hoops Intel to Your Site

import { useEffect, useState, type ReactElement } from "react";
import SiteHeader from "../components/SiteHeader";
import PulseWidget from "../components/widgets/PulseWidget";
import TickerWidget from "../components/widgets/TickerWidget";
import InjuryWidget from "../components/widgets/InjuryWidget";

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

type WidgetSize = "small" | "medium" | "large";
type WidgetTheme = "dark" | "light";

interface WidgetConfig {
  id: string;
  name: string;
  description: string;
  component: (props: { theme: WidgetTheme; size: WidgetSize }) => ReactElement;
  sizes: Record<WidgetSize, { width: number; height: number }>;
}

// ═══════════════════════════════════════════════════════════
// WIDGET DEFINITIONS
// ═══════════════════════════════════════════════════════════

const widgets: WidgetConfig[] = [
  {
    id: "pulse",
    name: "Pulse Index Widget",
    description: "Shows today's top 5 players from the Pulse Index in a compact card with scores and trends.",
    component: ({ theme, size }) => <PulseWidget theme={theme} size={size} />,
    sizes: { small: { width: 280, height: 380 }, medium: { width: 360, height: 420 }, large: { width: 440, height: 460 } },
  },
  {
    id: "ticker",
    name: "Live Ticker Widget",
    description: "Scrolling ticker showing today's scores, alerts, and breaking news in real time.",
    component: ({ theme, size }) => <TickerWidget theme={theme} size={size} />,
    sizes: { small: { width: 300, height: 36 }, medium: { width: 480, height: 42 }, large: { width: 640, height: 48 } },
  },
  {
    id: "injury",
    name: "Injury Wire Widget",
    description: "Compact injury updates with status badges, sorted by impact on team performance.",
    component: ({ theme, size }) => <InjuryWidget theme={theme} size={size} />,
    sizes: { small: { width: 280, height: 400 }, medium: { width: 360, height: 460 }, large: { width: 440, height: 540 } },
  },
];

// ═══════════════════════════════════════════════════════════
// COPY BUTTON
// ═══════════════════════════════════════════════════════════

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
      style={
        copied
          ? { background: "rgba(16,185,129,0.15)", color: "#10B981", border: "1px solid rgba(16,185,129,0.3)" }
          : { background: "rgba(14,165,233,0.12)", color: "#0EA5E9", border: "1px solid rgba(14,165,233,0.25)" }
      }
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
          Copy Code
        </>
      )}
    </button>
  );
}

// ═══════════════════════════════════════════════════════════
// SIZE PICKER
// ═══════════════════════════════════════════════════════════

function SizePicker({ value, onChange }: { value: WidgetSize; onChange: (s: WidgetSize) => void }) {
  const sizes: WidgetSize[] = ["small", "medium", "large"];
  return (
    <div className="flex gap-1.5">
      {sizes.map((s) => (
        <button
          key={s}
          onClick={() => onChange(s)}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all capitalize"
          style={
            value === s
              ? { background: "#0EA5E9", color: "#fff" }
              : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.08)" }
          }
        >
          {s}
        </button>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// THEME PICKER
// ═══════════════════════════════════════════════════════════

function ThemePicker({ value, onChange }: { value: WidgetTheme; onChange: (t: WidgetTheme) => void }) {
  const themes: WidgetTheme[] = ["dark", "light"];
  return (
    <div className="flex gap-1.5">
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all capitalize"
          style={
            value === t
              ? { background: "#0EA5E9", color: "#fff" }
              : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.08)" }
          }
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: t === "dark" ? "#1A1A2E" : "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.2)",
              flexShrink: 0,
            }}
          />
          {t}
        </button>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// WIDGET SECTION
// ═══════════════════════════════════════════════════════════

function WidgetSection({ widget }: { widget: WidgetConfig }) {
  const [size, setSize] = useState<WidgetSize>("medium");
  const [theme, setTheme] = useState<WidgetTheme>("dark");

  const dims = widget.sizes[size];
  const embedCode = `<iframe
  src="https://hoopsintel.net/embed/${widget.id}?theme=${theme}&size=${size}"
  width="${dims.width}"
  height="${dims.height}"
  frameborder="0"
  style="border:none;border-radius:12px;"
  title="Hoops Intel ${widget.name}"
></iframe>`;
  const scriptEmbedCode = `<div data-hoops-intel="${widget.id}" data-theme="${theme}" data-size="${size}"></div>
<script async src="https://hoopsintel.net/embed.js"></script>`;

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Widget header */}
      <div
        className="p-6"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h2 className="text-lg font-bold text-white mb-1">{widget.name}</h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              {widget.description}
            </p>
          </div>
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
              Size
            </div>
            <SizePicker value={size} onChange={setSize} />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
              Theme
            </div>
            <ThemePicker value={theme} onChange={setTheme} />
          </div>
        </div>
      </div>

      {/* Preview */}
      <div
        className="p-6 flex items-center justify-center"
        style={{
          background: theme === "dark"
            ? "repeating-conic-gradient(rgba(255,255,255,0.02) 0% 25%, transparent 0% 50%) 0 0 / 20px 20px"
            : "repeating-conic-gradient(rgba(0,0,0,0.04) 0% 25%, rgba(0,0,0,0.02) 0% 50%) 0 0 / 20px 20px",
          minHeight: 120,
        }}
      >
        {widget.component({ theme, size })}
      </div>

      {/* Embed code */}
      <div className="p-6 space-y-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>
              Script Embed (recommended — auto-resizes)
            </div>
            <CopyButton text={scriptEmbedCode} />
          </div>
          <pre
            className="rounded-lg p-4 text-xs overflow-x-auto"
            style={{
              background: "rgba(0,0,0,0.3)",
              color: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(255,255,255,0.06)",
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              lineHeight: 1.6,
              whiteSpace: "pre-wrap",
              wordBreak: "break-all",
            }}
          >
            {scriptEmbedCode}
          </pre>
        </div>
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>
              iframe Fallback (fixed size)
            </div>
            <CopyButton text={embedCode} />
          </div>
          <pre
            className="rounded-lg p-4 text-xs overflow-x-auto"
            style={{
              background: "rgba(0,0,0,0.3)",
              color: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(255,255,255,0.06)",
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              lineHeight: 1.6,
              whiteSpace: "pre-wrap",
              wordBreak: "break-all",
            }}
          >
            {embedCode}
          </pre>
        </div>
      </div>
    </div>
  );
}

function PublisherEmbedRollup() {
  const [counts, setCounts] = useState<Record<string, unknown>>({});

  useEffect(() => {
    let canceled = false;
    fetch("/api/embed-analytics-summary?days=8")
      .then((r) => r.json())
      .then((j) => {
        if (!canceled && j && typeof j === "object" && j !== null && "counts" in j) {
          setCounts(j.counts as Record<string, unknown>);
        }
      })
      .catch(() => {});
    return () => {
      canceled = true;
    };
  }, []);

  const ids = ["pulse", "ticker", "injury"] as const;
  const totals = ids.map((id) => ({
    id,
    loads: typeof counts[id] === "number" ? (counts[id] as number) : 0,
  }));

  const anyData = totals.some((t) => t.loads > 0);

  return (
    <div
      className="rounded-xl p-6 mb-10"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(148,251,223,0.12)" }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "#6ee7b7" }}>
          Publisher analytics · iframe loads (~8d)
        </p>
        <span className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold">
          <a href="/widgets/analytics" className="text-emerald-300/95 hover:text-emerald-200 underline underline-offset-2 whitespace-nowrap">
            Load timeline →
          </a>
          <a href="/embed-stats" className="text-sky-400 hover:text-sky-300 underline underline-offset-2 whitespace-nowrap">
            CSV dashboard →
          </a>
        </span>
      </div>
      <p className="text-xs mb-5 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
        Counts ingest when Supabase exposes <span className="mono-data text-white/70">embed_analytics_events</span>. Silent zeroes usually mean telemetry migration pending — each iframe ping still forwards from production traffic.
      </p>
      <div className="grid sm:grid-cols-3 gap-3">
        {totals.map((t) => (
          <div key={t.id} className="rounded-lg px-4 py-3 bg-black/20 border border-white/[0.06]">
            <div className="text-[10px] uppercase tracking-wide text-white/40 mb-1">{t.id}</div>
            <div className="text-3xl font-black text-emerald-300/95 mono-data">{anyData ? t.loads : "—"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// WIDGETS PAGE
// ═══════════════════════════════════════════════════════════

export default function Widgets() {
  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="EMBEDDABLE WIDGETS" />

      <div className="container py-8">
        {/* Page header */}
        <div className="mb-10">
          <div
            className="text-[10px] font-bold tracking-widest uppercase mb-1"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            DEVELOPER TOOLS
          </div>
          <h1
            className="display-heading text-white mb-2"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Embeddable Widgets
          </h1>
          <p className="text-sm max-w-xl" style={{ color: "rgba(255,255,255,0.4)" }}>
            Add Hoops Intel to your site. Choose a widget, customize the theme and size, then copy the embed code.
            Each widget updates automatically with the latest NBA data.
          </p>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { label: "Auto-Updating", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8" },
            { label: "Dark & Light Themes", icon: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" },
            { label: "3 Size Options", icon: "M21 3H3v18h18V3zM21 12H12V3M12 21V12M3 12h9" },
            { label: "Responsive", icon: "M5 7h14M5 12h14M5 17h10" },
          ].map((feat) => (
            <div
              key={feat.label}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium"
              style={{
                background: "rgba(14,165,233,0.06)",
                color: "rgba(14,165,233,0.8)",
                border: "1px solid rgba(14,165,233,0.12)",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={feat.icon} />
              </svg>
              {feat.label}
            </div>
          ))}
        </div>

        <div
          className="mb-12 rounded-xl p-6 md:p-8"
          style={{
            background: "rgba(14,165,233,0.05)",
            border: "1px solid rgba(14,165,233,0.15)",
          }}
        >
          <h3 className="display-heading text-white text-lg mb-2">Publisher handbook</h3>
          <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
            Hoops Intel serves embeds over HTTPS only. Prefer the script loader (<code className="mono-data text-[11px] text-sky-400/95">embed.js</code>) so iframe
            height tracks content via <code className="mono-data text-[11px] text-sky-400/95">postMessage</code>; fall back to the static iframe if your CMS sanitizes scripts.
          </p>
          <div className="overflow-x-auto text-xs mono-data rounded-lg mb-4" style={{ background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <table className="w-full text-left [&_td]:border-b [&_td]:border-white/5 [&_td]:py-2 [&_td]:px-3" style={{ color: "rgba(255,255,255,0.65)" }}>
              <thead style={{ color: "#0EA5E9" }}>
                <tr>
                  <td className="font-bold">Widget ID</td>
                  <td className="font-bold">Default width</td>
                  <td className="font-bold">Notes</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>pulse</code></td>
                  <td>360 px</td>
                  <td>Top five Pulse movers + trending marks</td>
                </tr>
                <tr>
                  <td><code>ticker</code></td>
                  <td>480 × 42 px band</td>
                  <td>Horizontal strip — pair with headline rail</td>
                </tr>
                <tr>
                  <td><code>injury</code></td>
                  <td>360 px</td>
                  <td>Statuses sync with nightly injury snapshot</td>
                </tr>
              </tbody>
            </table>
          </div>
          <pre
            className="rounded-lg p-4 text-xs overflow-x-auto mb-4 whitespace-pre-wrap"
            style={{
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.55)",
              fontFamily: "'JetBrains Mono','Fira Code',monospace",
            }}
          >
            {`# Content Security Policy snippet (Relax additional hosts as needed)
Content-Security-Policy: frame-src https://hoopsintel.net *.hoopsintel.net;
script-src 'self' https://hoopsintel.net;

# SPA re-mount helper after client-side navigations:
window.HoopsIntel && HoopsIntel.mount();`}
          </pre>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
            The loader sandboxes injected iframes with <code>allow-scripts allow-same-origin allow-popups</code> — add{" "}
            <code>allow-forms</code> locally if your integration needs in-widget forms (not shipped by Hoops Intel today).
          </p>
        </div>

        {/* Widget sections */}
        <div className="flex flex-col gap-8">
          {widgets.map((w) => (
            <WidgetSection key={w.id} widget={w} />
          ))}
        </div>

        <PublisherEmbedRollup />

        {/* Help section */}
        <div
          className="mt-10 rounded-xl p-6"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h3 className="text-sm font-bold text-white mb-3">Integration Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Choose a Widget",
                desc: "Select from Pulse Index, Live Ticker, or Injury Wire based on your site's needs.",
              },
              {
                step: "2",
                title: "Customize",
                desc: "Pick a size and theme that matches your site's design. Preview changes live above.",
              },
              {
                step: "3",
                title: "Embed",
                desc: "Copy the script snippet (auto-resizes) or the iframe fallback below each preview.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: "rgba(14,165,233,0.15)", color: "#0EA5E9" }}
                >
                  {item.step}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
