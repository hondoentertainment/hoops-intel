import type { ReactNode } from "react";
import { ENHANCED_ACCENT, injuryChipTone, injuryStatusLabel } from "../../lib/enhancedDesk";

export function BrandMark({ size = 14 }: { size?: number }) {
  return (
    <img
      src="/assets/brand-diamond.svg"
      alt=""
      width={size}
      height={size}
      className="shrink-0"
      style={{ width: size, height: size }}
    />
  );
}

export function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <a href="/" className="flex items-center gap-2.5 min-w-0 py-1">
      <BrandMark size={compact ? 12 : 14} />
      <span
        className="font-bold tracking-[1.2px] text-[var(--hi-text,#f3f6fa)] truncate"
        style={{ fontSize: compact ? 12 : 13, letterSpacing: compact ? "0.8px" : "1.2px" }}
      >
        HOOPS INTEL
      </span>
    </a>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  action,
  actionHref,
}: {
  eyebrow: string;
  title: string;
  action?: string;
  actionHref?: string;
}) {
  return (
    <div className="flex flex-col items-start gap-1 md:flex-row md:items-end md:gap-3 w-full min-w-0">
      <div className="flex-1 min-w-0">
        <p className="enhanced-kicker">{eyebrow}</p>
        <h2 className="editorial-heading text-[var(--hi-text,#f3f6fa)] text-[28px] leading-8 max-md:text-[1.5rem] max-md:leading-8">
          {title}
        </h2>
      </div>
      {action && actionHref ? (
        <a
          href={actionHref}
          className="text-sm font-medium shrink-0 inline-flex items-end min-h-11 pb-1"
          style={{ color: ENHANCED_ACCENT }}
        >
          {action}
        </a>
      ) : null}
    </div>
  );
}

export function StatCard({
  kicker,
  value,
  sub,
}: {
  kicker: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="enhanced-card flex flex-col gap-1.5 px-4 py-3.5 max-md:px-3 max-md:py-3 min-w-0 overflow-hidden">
      <p className="text-[10px] font-semibold tracking-[1.2px] uppercase" style={{ color: "var(--hi-text-secondary,#8b9bb0)" }}>
        {kicker}
      </p>
      <p className="mono-data font-bold leading-9 text-[32px] max-md:text-[28px] max-md:leading-8 break-words" style={{ color: ENHANCED_ACCENT }}>
        {value}
      </p>
      <p className="text-sm leading-5 max-md:mobile-readable" style={{ color: "var(--hi-text-secondary,#8b9bb0)" }}>
        {sub}
      </p>
    </div>
  );
}

export function InjuryChip({ status }: { status: string }) {
  const tone = injuryChipTone(status);
  const bg = tone === "success" ? "var(--hi-success,#3ddc97)" : tone === "danger" ? "var(--hi-danger,#ff4d6a)" : "#F59E0B";
  const color = tone === "success" ? "var(--hi-bg-page,#050d1a)" : "#F3F6FA";
  return (
    <span
      className="inline-flex items-center justify-center px-2 py-[3px] rounded text-[10px] font-semibold tracking-[0.5px] uppercase shrink-0"
      style={{ background: bg, color }}
    >
      {injuryStatusLabel(status)}
    </span>
  );
}

export function EnhancedButton({
  href,
  children,
  variant = "primary",
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const className =
    "inline-flex items-center justify-center px-4 py-[9px] rounded-md text-[13px] font-semibold min-h-11 transition-opacity hover:opacity-90";
  const style =
    variant === "primary"
      ? { background: ENHANCED_ACCENT, color: "#050d1a" }
      : { background: "transparent", color: "var(--hi-text,#f3f6fa)", border: "1px solid var(--hi-border,#1e2c40)" };

  if (href) {
    return (
      <a href={href} className={className} style={style}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={className} style={style}>
      {children}
    </button>
  );
}

export function GamePreviewCard({
  status,
  when,
  away,
  home,
  network,
  note,
}: {
  status: string;
  when: string;
  away: string;
  home: string;
  network: string;
  note: string;
}) {
  return (
    <div className="enhanced-card flex flex-col gap-2.5 px-4 py-3.5 max-md:px-3.5 min-w-0 overflow-hidden">
      <div className="flex items-center gap-2 min-w-0">
        <p className="enhanced-kicker">{status}</p>
        <span className="flex-1 min-w-0" />
        <p className="text-sm shrink-0 text-right leading-5" style={{ color: "var(--hi-text-secondary,#8b9bb0)" }}>
          {when}
        </p>
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <p className="mono-data pulse-score font-bold text-[22px] md:text-[26px] text-[var(--hi-text,#f3f6fa)]">
          {away} <span className="text-sm font-normal" style={{ color: "var(--hi-text-secondary,#8b9bb0)" }}>@</span> {home}
        </p>
        {network ? (
          <p className="text-sm font-semibold tracking-[0.8px] leading-5" style={{ color: "var(--hi-text-secondary,#8b9bb0)" }}>
            {network}
          </p>
        ) : null}
      </div>
      <p className="editorial-body mobile-readable text-[var(--hi-text,#f3f6fa)]">{note}</p>
    </div>
  );
}

export function EnhancedPageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page,#050d1a)" }}>
      {children}
    </div>
  );
}
