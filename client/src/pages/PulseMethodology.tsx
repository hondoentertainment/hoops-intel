import type { ReactNode } from "react";
import ToolPageLayout from "../components/ToolPageLayout";
import { DeskPanel } from "../components/enhanced/EnhancedUi";

export default function PulseMethodology() {
  return (
    <ToolPageLayout
      subtitle="REFERENCE"
      sectionLabel="How we score players"
      title="Pulse Index methodology"
      description="The Pulse ranks the ten players defining the nightly conversation around the NBA. Numbers matter, but the desk also weights context: postseason pressure, matchup stakes, swings in efficiency, defensive impact when the scorer sheet is quiet."
    >

        <Section title="Signals we elevate">
          <ul className="list-disc ml-6 space-y-2 text-sm leading-relaxed" style={{ color: "var(--hi-text-secondary,#5c5c5a)" }}>
            <li>Impact on deciding moments — possessions that flip series or save seasons.</li>
            <li>Two-way fingerprints — rebounding bursts, rim protection, or creation that bends the defence.</li>
            <li>Efficiency deltas relative to nightly expectations plus recent reputation from our archive.</li>
            <li>Availability and matchup stress when injuries or fouls materially change rotations.</li>
          </ul>
        </Section>

        <Section title="What Pulse is not">
          <ul className="list-disc ml-6 space-y-2 text-sm leading-relaxed" style={{ color: "var(--hi-text-secondary,#5c5c5a)" }}>
            <li>A raw fantasy projection — DFS context lives in Fantasy Alerts separately.</li>
            <li>A mechanical stat formula — Claude-authored rationale explains each slot and may disagree with spreadsheets.</li>
            <li>A guarantee of predictive accuracy — we publish accountability overlays on Pick&apos;em so you can verify recent nights.</li>
          </ul>
        </Section>

        <Section title="How we talk about accountability">
          <p className="text-sm leading-relaxed" style={{ color: "var(--hi-muted,#5c5c58)" }}>
            On <a href="/pick-em">Pick ’Em</a> you will see:&nbsp;
            <strong style={{ color: "var(--hi-text,#0a0a0a)" }}>Pulse-vs-board alignment</strong>—did our top-listed stars ultimately play for winners in
            finalized games bundled with the desk? That is illustrative, not a claim of causal inference.
          </p>
          <p className="text-sm leading-relaxed mt-4" style={{ color: "var(--hi-muted,#5c5c58)" }}>
            We also benchmark when the nightly spread-side matches the matchup prediction copy. Disagreements are surfaced on purpose—it is how shoppers and
            scouts stress-test narratives before tip.
          </p>
        </Section>

        <Section title="Editorial safeguards">
          <ul className="list-disc ml-6 space-y-2 text-sm leading-relaxed" style={{ color: "var(--hi-text-secondary,#5c5c5a)" }}>
            <li>Schema + CI validators keep abbreviations and injury statuses aligned with playbook rules.</li>
            <li>Playoffs mode automatically switches Pulse context when postseason games hit the ticker.</li>
            <li>Guest Pulse pitches flow through moderation—see <a href="/guest-pulse">Guest Pulse</a> plus the queued Supabase table when infra is wired.</li>
          </ul>
        </Section>

        <div className="hi-notice-warn p-5 text-sm leading-relaxed">
          <strong>Fine print:</strong>&nbsp; Hoops Intel is editorial AI plus human QA. Futures change fast—always corroborate with official league data before
          making decisions with money or roster exposure on the line.
        </div>
    </ToolPageLayout>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-4">
      <DeskPanel kicker={title}>{children}</DeskPanel>
    </div>
  );
}
