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
        className="font-bold truncate"
        style={{
          fontSize: compact ? 12 : 13,
          letterSpacing: compact ? "0.8px" : "1px",
          color: ENHANCED_ACCENT,
        }}
      >
        HOOPS INTEL
      </span>
    </a>
  );
}

export function SeasonChip({ children }: { children: ReactNode }) {
  return (
    <span
      className="desk-chip uppercase"
      style={{ background: "rgba(31,199,245,0.14)", color: ENHANCED_ACCENT }}
    >
      {children}
    </span>
  );
}

export function StatusPill({
  tone,
  children,
}: {
  tone: "accent" | "warn" | "success" | "danger";
  children: ReactNode;
}) {
  const styles = {
    accent: { background: "rgba(31,199,245,0.14)", color: ENHANCED_ACCENT },
    warn: { background: "rgba(242,184,56,0.14)", color: "var(--hi-warn,#f2b838)" },
    success: { background: "rgba(64,209,140,0.14)", color: "var(--hi-success,#40d18c)" },
    danger: { background: "rgba(255,77,106,0.14)", color: "var(--hi-danger,#ff4d6a)" },
  }[tone];
  return (
    <span className="desk-chip" style={styles}>
      {children}
    </span>
  );
}

export function DeskPanel({
  kicker,
  hint,
  children,
  id,
  className = "",
}: {
  kicker: string;
  hint?: string;
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`enhanced-card flex flex-col gap-3 p-4 min-w-0 overflow-hidden ${className}`}>
      <div className="min-w-0">
        <p className="enhanced-kicker">{kicker}</p>
        {hint ? (
          <p className="text-xs leading-5 mt-1.5" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
            {hint}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function DeskInset({
  children,
  className = "",
  href,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  const cls = `desk-inset min-w-0 overflow-hidden ${className}`;
  if (href) {
    return (
      <a href={href} className={`${cls} block transition-colors hover:bg-white/[0.04]`}>
        {children}
      </a>
    );
  }
  return <div className={cls}>{children}</div>;
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
        <h2 className="editorial-heading text-[var(--hi-text,#f2f5fa)] text-[28px] leading-8 max-md:text-[1.5rem] max-md:leading-8">
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
    <div className="enhanced-card flex flex-col gap-1 p-4 max-md:p-3 min-w-0 overflow-hidden">
      <p
        className="text-[10px] font-semibold tracking-[0.8px] uppercase"
        style={{ color: "var(--hi-text-secondary,#8594a8)" }}
      >
        {kicker}
      </p>
      <p className="font-bold text-lg leading-[22px] text-[var(--hi-text,#f2f5fa)] break-words">{value}</p>
      <p className="text-xs leading-[15px] truncate" style={{ color: ENHANCED_ACCENT }}>
        {sub}
      </p>
    </div>
  );
}

export function InjuryChip({ status }: { status: string }) {
  return <StatusPill tone={injuryChipTone(status)}>{injuryStatusLabel(status)}</StatusPill>;
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
    "inline-flex items-center justify-center px-3.5 py-2.5 rounded-[10px] text-[13px] font-semibold min-h-11 transition-opacity hover:opacity-90";
  const style =
    variant === "primary"
      ? { background: ENHANCED_ACCENT, color: "#0a0d12" }
      : { background: "transparent", color: "var(--hi-text,#f2f5fa)", border: "1px solid var(--hi-border,#293342)" };

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
        <p className="text-sm shrink-0 text-right leading-5" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
          {when}
        </p>
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <p className="mono-data font-bold text-[22px] md:text-[26px] leading-7 text-[var(--hi-text,#f2f5fa)] break-words">
          {away}{" "}
          <span className="text-sm font-normal" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
            @
          </span>{" "}
          {home}
        </p>
        {network ? (
          <p className="text-sm font-semibold tracking-[0.8px] leading-5" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
            {network}
          </p>
        ) : null}
      </div>
      <p className="editorial-body mobile-readable text-[var(--hi-text,#f2f5fa)]">{note}</p>
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
