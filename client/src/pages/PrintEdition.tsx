import { useEffect } from "react";
import {
  narrative,
  pulseEdition,
  pulseIndex,
  tickerItems,
  gamePreviews,
  injuryUpdates,
  fantasyAlerts,
} from "../lib/pulseData";
import { isPlayoffsActive, isFinalsActive, finalistTeams, playoffSeries } from "../lib/playoffData";
import { lineMovementRows } from "../lib/lineMovementData";
import { buildSixtySecondBullets } from "../lib/deskBriefing";
import { bettingDisclaimer } from "../lib/bettingLineStory";
import SiteHeader from "../components/SiteHeader";

export default function PrintEdition() {
  useEffect(() => {
    const t = setTimeout(() => window.print(), 400);
    return () => clearTimeout(t);
  }, []);

  const pulseTop = (isFinalsActive()
    ? pulseIndex.filter((row) => finalistTeams().includes(row.team.toUpperCase()))
    : pulseIndex
  ).slice(0, 5);
  const tick = tickerItems.slice(0, 8);
  const sixtySec = buildSixtySecondBullets();
  const finalsOn = isFinalsActive();
  const activeSeries = (finalsOn
    ? playoffSeries.filter((s) => s.round === "finals" && s.status !== "complete")
    : playoffSeries.filter((s) => s.status !== "complete")
  ).slice(0, 6);

  return (
    <div className="print-edition-shell min-h-screen bg-white text-slate-900 print:bg-white">
      <style>{`
        @media print {
          .no-print-header { display: none !important; }
          .print-edition-shell { background: white !important; color: #0f172a !important; }
          a { color: #0369a1 !important; text-decoration: underline; }
          .print-page-break { page-break-before: always; break-before: page; }
        }
      `}</style>

      <div className="no-print-header bg-[#050D1A]">
        <SiteHeader subtitle="PRINT" />
      </div>

      <article className="max-w-[720px] mx-auto px-6 py-16 print:py-6">
        <header className="border-b border-slate-200 pb-6 mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-600 font-bold">
            {finalsOn ? "NBA Finals Print Edition" : pulseEdition.edition}
          </p>
          <h1 className="display-heading text-4xl mt-4 text-slate-900">
            {finalsOn ? "NBA Finals Desk" : narrative?.headline ?? "Hoops Intel"}
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">{pulseEdition.date}</p>
          {narrative?.subhead && <p className="mt-6 text-base leading-relaxed text-slate-700">{narrative.subhead}</p>}
          {Array.isArray(narrative?.body) && narrative.body.slice(0, 2).length > 0 ? (
            <div className="mt-8 space-y-4">
              {narrative.body.slice(0, 2).map((paragraph: string, i: number) => (
                <p key={i} className="text-sm leading-relaxed text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}
          {Array.isArray(narrative?.body) && narrative.body.length > 2 ? (
            <div className="mt-6 space-y-4 print-page-break">
              {narrative.body.slice(2).map((paragraph: string, i: number) => (
                <p key={`body-${i}`} className="text-sm leading-relaxed text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}
        </header>

        <section className="mb-10">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">60-second read</h2>
          <ul className="list-disc ml-6 space-y-1 text-xs text-slate-700 leading-relaxed">
            {sixtySec.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">Morning ticker</h2>
          <ul className="list-disc ml-6 space-y-1 text-xs text-slate-700 leading-relaxed">
            {tick.map((t, i) => (
              <li key={i}>{t.text}</li>
            ))}
          </ul>
        </section>

        {gamePreviews.length > 0 && (
          <section className="mb-10">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">Tonight&apos;s slate</h2>
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="text-left border-b border-slate-300 text-slate-600">
                  <th className="py-2 pr-2 font-semibold">Matchup</th>
                  <th className="py-2 pr-2 font-semibold">Time</th>
                  <th className="py-2 pr-2 font-semibold">Line</th>
                  <th className="py-2 font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                {gamePreviews.map((g, i) => {
                  const lm = lineMovementRows.find(
                    (r) =>
                      (r.awayTeam === g.awayTeam && r.homeTeam === g.homeTeam) ||
                      (r.awayTeam === g.homeTeam && r.homeTeam === g.awayTeam),
                  );
                  const line =
                    lm && lm.openingSpread !== lm.closingSpread
                      ? `${lm.openingSpread} → ${lm.closingSpread}`
                      : g.spread;
                  return (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="py-2 pr-2">
                        {g.awayTeam} @ {g.homeTeam}
                      </td>
                      <td className="py-2 pr-2">{g.time}</td>
                      <td className="py-2 pr-2 font-mono">{line}</td>
                      <td className="py-2 font-mono">{g.overUnder}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        )}

        {injuryUpdates.length > 0 && (
          <section className="mb-10 print-page-break">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">Injury wire</h2>
            <ul className="space-y-2 text-xs text-slate-700">
              {injuryUpdates.slice(0, 6).map((u, i) => (
                <li key={i}>
                  <strong>
                    {u.player} ({u.team})
                  </strong>
                  {" — "}
                  {u.status}: {u.injury}
                </li>
              ))}
            </ul>
          </section>
        )}

        {fantasyAlerts.length > 0 && (
          <section className="mb-10">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">Fantasy desk</h2>
            <ul className="space-y-2 text-xs text-slate-700">
              {fantasyAlerts.slice(0, 5).map((a, i) => (
                <li key={i}>
                  <strong>{a.player}</strong> ({a.action}) — {a.reason}
                </li>
              ))}
            </ul>
          </section>
        )}

        {isPlayoffsActive() && activeSeries.length > 0 && (
          <section className="mb-10 print-page-break">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">
              {finalsOn ? "NBA Finals board" : "Playoff board"}
            </h2>
            <ul className="space-y-2 text-xs text-slate-700">
              {activeSeries.map((s) => (
                <li key={s.seriesId}>
                  <strong>
                    {s.higherTeam} vs {s.lowerTeam}
                  </strong>
                  {" — "}
                  {s.summary}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-10 print-page-break">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">Pulse Index — spotlight</h2>
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="text-left border-b border-slate-300 text-slate-600">
                <th className="py-2 pr-2 font-semibold">#</th>
                <th className="py-2 pr-2 font-semibold">Player</th>
                <th className="py-2 pr-2 font-semibold">Team</th>
                <th className="py-2 font-semibold">Score</th>
              </tr>
            </thead>
            <tbody>
              {pulseTop.map((row) => (
                <tr key={row.rank} className="border-b border-slate-100">
                  <td className="py-2 pr-2 text-sky-700 font-semibold">{row.rank}</td>
                  <td className="py-2 pr-2">{row.player}</td>
                  <td className="py-2 pr-2">{row.team}</td>
                  <td className="py-2 font-mono text-xs">{row.indexScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-[11px] text-slate-500">
            Transparency note:&nbsp;
            <a href="https://hoopsintel.net/pulse-methodology">hoopsintel.net/pulse-methodology</a>
          </p>
        </section>

        <p className="text-[10px] text-slate-500 leading-relaxed mb-6 border-t border-slate-200 pt-4">{bettingDisclaimer()}</p>

        <p className="text-xs text-slate-500 mono-data mb-10">
          Generated pack for desks + newsletter paste-in. Canonical interactive desk remains at hoopsintel.net
        </p>
      </article>
    </div>
  );
}
