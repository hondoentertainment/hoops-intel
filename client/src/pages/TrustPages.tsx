import type { ReactNode } from "react";
import ToolPageLayout from "../components/ToolPageLayout";
import { DeskPanel } from "../components/enhanced/EnhancedUi";

const TRUST_LINKS = [
  { href: "/about", label: "About" },
  { href: "/methodology", label: "Methodology" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
] as const;

function TrustNav({ current }: { current: string }) {
  return (
    <nav aria-label="About Hoops Intel" className="flex flex-wrap gap-x-4 mb-6">
      {TRUST_LINKS.filter((link) => link.href !== current).map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="inline-flex items-center min-h-11 text-sm font-medium"
          style={{ color: "var(--hi-text,#14120B)" }}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

function TrustLayout({
  testId,
  kicker,
  title,
  description,
  crumbs,
  children,
}: {
  testId: string;
  kicker: string;
  title: string;
  description: string;
  crumbs: string;
  children: ReactNode;
}) {
  return (
    <ToolPageLayout
      subtitle="DESK"
      sectionLabel={kicker}
      title={title}
      description={description}
      maxWidth="lg"
      showRelated={false}
      breadcrumbs={[{ label: "Today's desk", href: "/" }, { label: crumbs }]}
    >
      <div data-testid={testId}>{children}</div>
    </ToolPageLayout>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-4">
      <DeskPanel kicker={title}>
        <div className="text-sm leading-relaxed space-y-3" style={{ color: "var(--hi-text,#14120B)" }}>
          {children}
        </div>
      </DeskPanel>
    </div>
  );
}

export function AboutPage() {
  return (
    <TrustLayout
      testId="trust-about"
      kicker="About"
      title="About Hoops Intel"
      description="An independent morning desk for the NBA. Scores, a Pulse Index, injuries, and previews — published once a day."
      crumbs="About"
    >
      <TrustNav current="/about" />
      <Section title="What this is">
        <p>
          Hoops Intel is a daily NBA briefing at hoopsintel.net. Each morning the desk publishes what happened
          overnight: a lead story, box-score context, a ten-player Pulse Index, an injury wire, and a look at the
          next slate.
        </p>
        <p>
          The site is an editorial product. It is not the NBA, not a team, and not a sportsbook. Nothing here is
          betting advice or a fantasy projection you should treat as a guarantee.
        </p>
      </Section>
      <Section title="How to read it">
        <p>
          The home page is today&apos;s edition. The archive keeps earlier mornings. Player and team pages collect
          the desk&apos;s mentions. Tools such as the watch guide and the trade board sit beside the edition. They
          are labeled when they are for fun, or when a feed is last-known rather than live.
        </p>
        <p>
          If a morning run does not finish, the site keeps the last completed edition and says which date you are
          reading. The method behind the Pulse Index and the edition pipeline is on the{" "}
          <a href="/methodology" className="underline min-h-11 inline-flex items-center">
            methodology
          </a>{" "}
          page.
        </p>
      </Section>
      <Section title="Write to the desk">
        <p>
          Questions and corrections go to the address on the{" "}
          <a href="/contact" className="underline min-h-11 inline-flex items-center">
            contact
          </a>{" "}
          page. There is no form and no account is required.
        </p>
      </Section>
    </TrustLayout>
  );
}

export function MethodologyPage() {
  return (
    <TrustLayout
      testId="trust-methodology"
      kicker="Methodology"
      title="How the desk is made"
      description="What the Pulse Index measures, how each morning edition is produced, and which sources the desk attributes."
      crumbs="Methodology"
    >
      <TrustNav current="/methodology" />
      <Section title="The Pulse Index">
        <p>
          The Pulse Index is a daily editorial ranking of the players who defined the night. It is not a fantasy
          projection and not a formula that turns a box score into a single number. Each row has a rank, a score,
          a trend, the stat line that earned the spot, and a short rationale for why that player sits there
          instead of the next one.
        </p>
        <p>
          Context can outweigh raw points: the opponent, the margin, a closing stretch, and whether the night
          changed a standings story. The longer note on what the desk chooses to elevate is on{" "}
          <a href="/pulse-methodology" className="underline min-h-11 inline-flex items-center">
            Pulse Index methodology
          </a>
          .
        </p>
      </Section>
      <Section title="How a morning edition is produced">
        <p>
          A scheduled job reads the previous night&apos;s scoreboard and the edition already on the site. An AI
          model then drafts that morning&apos;s narrative, Pulse Index, injury notes, and previews, using the
          scoreboard packet and the desk&apos;s style guide. Automated checks reject bad team codes and injury
          statuses before the edition is published to hoopsintel.net.
        </p>
        <p>
          The published file is the edition readers see. If that run is missing or fails, the site does not blank
          the desk and does not pretend the old file is today. It keeps the last completed edition and shows a
          note: today&apos;s edition is updating, with the date of the edition on screen.
        </p>
        <p>
          The model can be wrong. Names, statuses, and storylines are checked by validators, then by readers.
          Corrections belong on the contact page.
        </p>
      </Section>
      <Section title="Data sources and attribution">
        <p>
          Scores, schedules, and live scoreboards start from ESPN&apos;s public scoreboard. Team marks use ESPN&apos;s
          public logo CDN, with a colored crest when an image does not load. Hoops Intel is not affiliated with,
          endorsed by, or sponsored by ESPN or the National Basketball Association.
        </p>
        <p>
          ESPN&apos;s feed is the starting packet. The headline, the Pulse Index, and the previews are Hoops Intel
          editorial, written for the morning desk. They are not an official league report and they are not a
          replay of a wire story.
        </p>
      </Section>
    </TrustLayout>
  );
}

/**
 * DRAFT — review before treating this page as legal advice or a binding policy.
 * The copy describes current product behavior for readers. It is not a lawyer-reviewed agreement.
 */
export function PrivacyPage() {
  return (
    <TrustLayout
      testId="trust-privacy"
      kicker="Privacy"
      title="Privacy"
      description="What Hoops Intel stores when you read the desk, sign in, subscribe, or allow alerts. This page describes the product. It is not legal advice."
      crumbs="Privacy"
    >
      <TrustNav current="/privacy" />
      <Section title="Not legal advice">
        <p>
          This page describes how the site behaves today so you can decide whether to use it. It is not legal
          advice and it is not a lawyer-reviewed privacy policy. A reviewed draft should replace this copy before
          anyone relies on it as a contract.
        </p>
      </Section>
      <Section title="Reading the desk">
        <p>
          You can read the edition, the archive, and the public tools without an account. The site uses Vercel
          Web Analytics and Speed Insights to count visits and page speed. Those products do not ask you for an
          account. The desk does not run a third-party advertising pixel.
        </p>
        <p>
          A few preferences stay in this browser: theme, digest signup hint, search history, and guest picks.
          Clearing site data removes them.
        </p>
      </Section>
      <Section title="Account, email, and alerts">
        <p>
          An optional account is used for Pro billing and synced favorites when that service is turned on. The
          morning digest asks for an email address only if you subscribe. Browser alerts, when available, store
          the push subscription the browser creates. If a feature is not turned on yet, the page says it is
          coming soon instead of asking you to debug a missing key.
        </p>
        <p>
          Unsubscribe links in a digest email turn off that email. They do not delete a separate account.
        </p>
      </Section>
      <Section title="ESPN and the edition">
        <p>
          Public ESPN scoreboard data is fetched to produce the morning edition and to show live scores. That
          data is about games, not about you. See{" "}
          <a href="/methodology" className="underline min-h-11 inline-flex items-center">
            methodology
          </a>{" "}
          for how it is attributed.
        </p>
      </Section>
      <Section title="Contact">
        <p>
          Privacy questions go to the address on the{" "}
          <a href="/contact" className="underline min-h-11 inline-flex items-center">
            contact
          </a>{" "}
          page.
        </p>
      </Section>
    </TrustLayout>
  );
}

/**
 * DRAFT — review before treating this page as legal advice or a binding agreement.
 * The copy describes current product behavior for readers. It is not a lawyer-reviewed contract.
 */
export function TermsPage() {
  return (
    <TrustLayout
      testId="trust-terms"
      kicker="Terms"
      title="Terms"
      description="Ground rules for reading Hoops Intel. Editorial content, no league affiliation, and no betting advice. This page is not legal advice."
      crumbs="Terms"
    >
      <TrustNav current="/terms" />
      <Section title="Not legal advice">
        <p>
          This page describes the terms the desk expects readers to understand. It is not legal advice and it is
          not a lawyer-reviewed agreement. Review it before treating it as the binding terms of use.
        </p>
      </Section>
      <Section title="The edition is editorial">
        <p>
          Hoops Intel publishes a daily NBA briefing for information and entertainment. Stories are drafted with
          AI from public scoreboard data and then checked. They can be late, incomplete, or wrong. Do not rely on
          the desk as an official score, an injury report from a team, or a record you would take to a dispute.
        </p>
        <p>
          Hoops Intel is not affiliated with the NBA, any team, or ESPN. Names and marks belong to their owners
          and are used here to identify games and players.
        </p>
      </Section>
      <Section title="Betting, fantasy, and Pro">
        <p>
          Lines and angles on the site are context for the story, not a recommendation to wager. You are
          responsible for any decision you make with money or a fantasy roster.
        </p>
        <p>
          Hoops Intel Pro is a planned paid tier. Until checkout is open, the Pro page says so and does not
          charge you. When checkout is available, payment is handled by Stripe and you can cancel from the
          account page.
        </p>
      </Section>
      <Section title="Using the site">
        <p>
          Don&apos;t misuse the site: no scraping that degrades it for other readers, no attempt to break into
          accounts, and no posting of someone else&apos;s private information. The desk can remove an account or
          a digest address that is used that way.
        </p>
        <p>
          Questions about these terms go to the{" "}
          <a href="/contact" className="underline min-h-11 inline-flex items-center">
            contact
          </a>{" "}
          page.
        </p>
      </Section>
    </TrustLayout>
  );
}

export function ContactPage() {
  return (
    <TrustLayout
      testId="trust-contact"
      kicker="Contact"
      title="Contact the desk"
      description="Email Hoops Intel. There is no contact form and no account is required to write in."
      crumbs="Contact"
    >
      <TrustNav current="/contact" />
      <Section title="Email">
        <p>
          The desk reads mail at one address. There is no form on this page and nothing is stored until you send
          the email from your own mail app.
        </p>
        <p>
          <a
            href="mailto:admin@hoopsintel.net"
            className="inline-flex items-center min-h-11 text-base font-semibold underline"
            style={{ color: "var(--hi-text,#14120B)" }}
          >
            admin@hoopsintel.net
          </a>
        </p>
        <p style={{ color: "var(--hi-muted,#686359)" }}>
          Use this for corrections, privacy questions, and terms questions. It is not a line for ESPN or the NBA.
        </p>
      </Section>
    </TrustLayout>
  );
}
