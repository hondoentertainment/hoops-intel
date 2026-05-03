import type { ReactNode } from "react";
import SiteHeader from "../components/SiteHeader";

export default function PulseMethodology() {
  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="REFERENCE" />

      <div className="container py-12 max-w-3xl space-y-10">
        <div>
          <p className="section-label mb-2">HOW WE SCORE PLAYERS</p>
          <h1 className="display-heading text-white text-3xl sm:text-4xl mb-4">Pulse Index methodology</h1>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            The Pulse ranks the ten players defining the nightly conversation around the NBA. Numbers matter, but the desk also weights context:
            postseason pressure, matchup stakes, swings in efficiency, defensive impact when the scorer sheet is quiet.
          </p>
        </div>

        <Section title="Signals we elevate">
          <ul className="list-disc ml-6 space-y-2 text-white/72 text-sm leading-relaxed">
            <li>Impact on deciding moments — possessions that flip series or save seasons.</li>
            <li>Two-way fingerprints — rebounding bursts, rim protection, or creation that bends the defence.</li>
            <li>Efficiency deltas relative to nightly expectations plus recent reputation from our archive.</li>
            <li>Availability and matchup stress when injuries or fouls materially change rotations.</li>
          </ul>
        </Section>

        <Section title="What Pulse is not">
          <ul className="list-disc ml-6 space-y-2 text-white/72 text-sm leading-relaxed">
            <li>A raw fantasy projection — DFS context lives in Fantasy Alerts separately.</li>
            <li>A mechanical stat formula — Claude-authored rationale explains each slot and may disagree with spreadsheets.</li>
            <li>A guarantee of predictive accuracy — we publish accountability overlays on Pick&apos;em so you can verify recent nights.</li>
          </ul>
        </Section>

        <Section title="How we talk about accountability">
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            On <a href="/pick-em">Pick ’Em</a> you will see:&nbsp;
            <strong style={{ color: "rgba(255,255,255,0.9)" }}>Pulse-vs-board alignment</strong>—did our top-listed stars ultimately play for winners in
            finalized games bundled with the desk? That is illustrative, not a claim of causal inference.
          </p>
          <p className="text-sm leading-relaxed mt-4" style={{ color: "rgba(255,255,255,0.55)" }}>
            We also benchmark when the nightly spread-side matches the matchup prediction copy. Disagreements are surfaced on purpose—it is how shoppers and
            scouts stress-test narratives before tip.
          </p>
        </Section>

        <Section title="Editorial safeguards">
          <ul className="list-disc ml-6 space-y-2 text-white/72 text-sm leading-relaxed">
            <li>Schema + CI validators keep abbreviations and injury statuses aligned with playbook rules.</li>
            <li>Playoffs mode automatically switches Pulse context when postseason games hit the ticker.</li>
            <li>Guest Pulse pitches flow through moderation—see <a href="/guest-pulse">Guest Pulse</a> plus the queued Supabase table when infra is wired.</li>
          </ul>
        </Section>

        <div
          className="rounded-xl p-5 border text-sm leading-relaxed"
          style={{
            borderColor: "rgba(245,158,11,0.25)",
            background: "rgba(245,158,11,0.05)",
            color: "rgba(255,230,210,0.85)",
          }}
        >
          <strong>Fine print:</strong>&nbsp; Hoops Intel is editorial AI plus human QA. Futures change fast—always corroborate with official league data before
          making decisions with money or roster exposure on the line.
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-black text-white mb-3 uppercase tracking-[0.12em]" style={{ fontFamily: "'Barlow Condensed',sans-serif" }}>
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
