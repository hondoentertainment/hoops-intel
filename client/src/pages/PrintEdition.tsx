import { useEffect, useMemo } from "react";
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

function shouldAutoPrint(): boolean {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).get("print") === "1";
}

export default function PrintEdition() {
  useEffect(() => {
    if (!shouldAutoPrint()) return;
    const t = setTimeout(() => window.print(), 400);
    return () => clearTimeout(t);
  }, []);

  const pulseTop = (isFinalsActive()
    ? pulseIndex.filter((row) => finalistTeams().includes(row.team.toUpperCase()))
    : pulseIndex
  ).slice(0, 12);
  const tick = tickerItems.slice(0, 12);
  const sixtySec = buildSixtySecondBullets();
  const finalsOn = isFinalsActive();
  const activeSeries = (finalsOn
    ? playoffSeries.filter((s) => s.round === "finals" && s.status !== "complete")
    : playoffSeries.filter((s) => s.status !== "complete")
  ).slice(0, 10);

  const packTitle = useMemo(
    () => (finalsOn ? "NBA Finals Desk" : narrative?.headline ?? "Hoops Intel"),
    [finalsOn],
  );

  return (
    <div className="print-edition-shell min-h-screen bg-white text-slate-900 print:bg-white">
      <style>{`
        @page {
          margin: 0.6in 0.65in;
        }
        @media print {
          .no-print-header { display: none !important; }
          .print-edition-shell { background: white !important; color: #0f172a !important; }
          a { color: #0369a1 !important; text-decoration: underline; }
          .print-page {
            break-before: page;
            page-break-before: always;
          }
          .print-page:first-of-type {
            break-before: auto;
            page-break-before: auto;
          }
          .print-avoid-break {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          .print-page-footer {
            display: block !important;
            margin-top: 1.5rem;
            padding-top: 0.5rem;
            border-top: 1px solid #e2e8f0;
            font-size: 9px;
            color: #64748b;
          }
          h2 { orphans: 3; widows: 3; }
        }
        @media screen {
          .print-page-footer { display: none; }
        }
      `}</style>

      <div className="no-print-header bg-[#050D1A]">
        <SiteHeader subtitle="PRINT" />
        <div className="container max-w-[720px] py-4 flex flex-wrap gap-3 items-center justify-between">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
            Multi-page desk packet — use Print → Save as PDF for a branded export.
          </p>
          <button
            type="button"
            onClick={() => window.print()}
            className="min-h-[44px] px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-white"
            style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
          >
            Print / Save as PDF
          </button>
        </div>
      </div>

      <article className="max-w-[720px] mx-auto px-6 py-16 print:py-4">
        {/* Page 1 — Cover + narrative */}
        <section className="print-page print-avoid-break">
          <header className="border-b border-slate-200 pb-6 mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-sky-600 font-bold">
              Hoops Intel · {finalsOn ? "NBA Finals Print Packet" : "Daily Print Packet"}
            </p>
            <h1 className="display-heading text-4xl mt-4 text-slate-900">{packTitle}</h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">{pulseEdition.date}</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-slate-500">
              {finalsOn ? "NBA Finals Print Edition" : pulseEdition.edition}
            </p>
            {narrative?.subhead && (
              <p className="mt-6 text-base leading-relaxed text-slate-700">{narrative.subhead}</p>
            )}
            {Array.isArray(narrative?.body) && narrative.body.length > 0 ? (
              <div className="mt-8 space-y-4">
                {narrative.body.map((paragraph: string, i: number) => (
                  <p key={i} className="text-sm leading-relaxed text-slate-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}
          </header>

          <section className="mb-8 print-avoid-break">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">60-second read</h2>
            <ul className="list-disc ml-6 space-y-1 text-xs text-slate-700 leading-relaxed">
              {sixtySec.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </section>

          <section className="mb-6 print-avoid-break">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">Morning ticker</h2>
            <ul className="list-disc ml-6 space-y-1 text-xs text-slate-700 leading-relaxed">
              {tick.map((t, i) => (
                <li key={i}>{t.text}</li>
              ))}
            </ul>
          </section>
          <p className="print-page-footer">hoopsintel.net · {pulseEdition.date} · Page 1 — Cover &amp; briefing</p>
        </section>

        {/* Page 2 — Slate / lines */}
        <section className="print-page">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-4">
            Tonight&apos;s slate &amp; line movement
          </h2>
          {gamePreviews.length === 0 ? (
            <p className="text-xs text-slate-600 mb-8">No slate rows in this edition (offseason or rest day).</p>
          ) : (
            <table className="w-full border-collapse text-xs mb-8 print-avoid-break">
              <thead>
                <tr className="text-left border-b border-slate-300 text-slate-600">
                  <th className="py-2 pr-2 font-semibold">Matchup</th>
                  <th className="py-2 pr-2 font-semibold">Time</th>
                  <th className="py-2 pr-2 font-semibold">Line (open→close)</th>
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
          )}
          {lineMovementRows.length > 0 && (
            <section className="mb-6 print-avoid-break">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">
                Line book snapshot
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {lineMovementRows.slice(0, 16).map((r, i) => (
                  <li key={i}>
                    <strong>
                      {r.awayTeam} @ {r.homeTeam}
                    </strong>
                    {" — "}
                    {r.openingSpread} → {r.closingSpread}
                  </li>
                ))}
              </ul>
            </section>
          )}
          <p className="text-[10px] text-slate-500 leading-relaxed mb-4 border-t border-slate-200 pt-4">
            {bettingDisclaimer()}
          </p>
          <p className="print-page-footer">hoopsintel.net · {pulseEdition.date} · Page 2 — Slate &amp; lines</p>
        </section>

        {/* Page 3 — Injuries + fantasy */}
        <section className="print-page">
          {injuryUpdates.length > 0 && (
            <section className="mb-10 print-avoid-break">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">Injury wire</h2>
              <ul className="space-y-2 text-xs text-slate-700">
                {injuryUpdates.slice(0, 14).map((u, i) => (
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
            <section className="mb-8 print-avoid-break">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">Fantasy desk</h2>
              <ul className="space-y-2 text-xs text-slate-700">
                {fantasyAlerts.slice(0, 12).map((a, i) => (
                  <li key={i}>
                    <strong>{a.player}</strong> ({a.action}) — {a.reason}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {injuryUpdates.length === 0 && fantasyAlerts.length === 0 && (
            <p className="text-xs text-slate-600">No injury or fantasy rows in this edition.</p>
          )}
          <p className="print-page-footer">hoopsintel.net · {pulseEdition.date} · Page 3 — Injuries &amp; fantasy</p>
        </section>

        {/* Page 4 — Playoffs + Pulse */}
        <section className="print-page">
          {isPlayoffsActive() && activeSeries.length > 0 && (
            <section className="mb-10 print-avoid-break">
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

          <section className="mb-8 print-avoid-break">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-3">
              Pulse Index — spotlight
            </h2>
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

          <p className="text-xs text-slate-500 mono-data mb-4">
            Generated multi-page pack for desks + newsletter paste-in. Canonical interactive desk remains at
            hoopsintel.net — open <span className="font-mono">/print-edition?print=1</span> to auto-open the print
            dialog.
          </p>
          <p className="print-page-footer">hoopsintel.net · {pulseEdition.date} · Page 4 — Board &amp; Pulse</p>
        </section>
      </article>
    </div>
  );
}
