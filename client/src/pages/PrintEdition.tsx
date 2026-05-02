import { useEffect } from "react";
import { pulseEdition, narrative } from "../lib/pulseData";
import SiteHeader from "../components/SiteHeader";

export default function PrintEdition() {
  useEffect(() => {
    const t = setTimeout(() => window.print(), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="print-edition-shell min-h-screen bg-white text-slate-900 print:bg-white">
      <style>{`
        @media print {
          .no-print-header { display: none !important; }
          .print-edition-shell { background: white !important; color: #0f172a !important; }
        }
      `}</style>

      <div className="no-print-header bg-[#050D1A]">
        <SiteHeader subtitle="PRINT" />
      </div>

      <article className="max-w-[720px] mx-auto px-6 py-16 print:py-6">
        <header className="border-b border-slate-200 pb-6 mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-600 font-bold">{pulseEdition.edition}</p>
          <h1 className="display-heading text-4xl mt-4 text-slate-900">{narrative?.headline ?? "Hoops Intel"}</h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">{pulseEdition.date}</p>
          {narrative?.subhead && <p className="mt-6 text-base leading-relaxed text-slate-700">{narrative.subhead}</p>}
        </header>

        <p className="text-xs text-slate-500 mono-data">
          Generated for personal / newsletter redistribution. Full interactive edition: hoopsintel.net
        </p>
      </article>
    </div>
  );
}
