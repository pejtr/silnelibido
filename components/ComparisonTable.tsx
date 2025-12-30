"use client";

import { Check, X } from "lucide-react";

export function ComparisonTable() {
  const comparisonData = [
    { label: "Nástup účinku", pro: "Do 30 minut (SHOT)", con: "Několik týdnů" },
    { label: "Složení", pro: <span className="font-extrabold text-[#D32F2F]">Extra silné bylinné extrakty</span>, con: "Často jen sušené byliny" },
    { label: "Certifikace", pro: "Schváleno v EU", con: "Nejasný původ" },
    { label: "Vedlejší účinky", pro: "Žádné známé", con: "Bolest hlavy, návaly horka" },
    { label: "Garance vrácení peněz", pro: "Ano", con: "Většinou ne" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Proč zvolit Proerectu?</h2>
          <p className="text-lg text-slate-600">
            Podívejte se, jak si stojíme v porovnání s běžnými doplňky stravy na trhu.
          </p>
        </div>

        {/* Mobile View: Cards */}
        <div className="md:hidden space-y-4">
          {comparisonData.map((row, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 font-bold text-slate-800 text-center">
                {row.label}
              </div>
              <div className="grid grid-cols-2 divide-x divide-slate-100">
                {/* Proerecta Column */}
                <div className="p-4 flex flex-col items-center justify-center text-center bg-[#D32F2F]/5">
                  <div className="text-xs font-bold text-[#D32F2F] mb-2 uppercase tracking-wider">Proerecta</div>
                  <Check className="w-6 h-6 text-green-500 mb-2" />
                  <span className="text-sm font-bold text-slate-900">{row.pro}</span>
                </div>
                
                {/* Competitor Column */}
                <div className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">Běžné doplňky</div>
                  {row.con === "Většinou ne" ? (
                    <X className="w-6 h-6 text-red-400 mb-2" />
                  ) : (
                    <div className="w-6 h-6 mb-2" /> // Spacer to align with checkmark
                  )}
                  <span className="text-sm text-slate-500">{row.con}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View: Table */}
        <div className="hidden md:block w-full">
          <table className="w-full max-w-4xl mx-auto border-collapse table-fixed">
            <thead>
              <tr>
                <th className="p-4 text-left text-slate-500 font-medium border-b border-slate-200 w-1/3 text-base">Vlastnost</th>
                <th className="p-4 text-center bg-[#D32F2F]/5 border-b border-[#D32F2F] text-[#D32F2F] font-bold text-lg w-1/3 rounded-t-xl">
                  Proerecta
                </th>
                <th className="p-4 text-center text-slate-400 font-medium border-b border-slate-200 w-1/3 text-base">
                  Běžné doplňky
                </th>
              </tr>
            </thead>
            <tbody className="text-base">
              {comparisonData.map((row, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-700 align-middle">{row.label}</td>
                  <td className="p-4 text-center bg-[#D32F2F]/5 font-bold text-slate-900 align-middle">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{row.pro}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center text-slate-500 align-middle">
                    <div className="flex items-center justify-center gap-2">
                      {row.con === "Většinou ne" ? <X className="w-5 h-5 text-red-400 flex-shrink-0" /> : null}
                      <span>{row.con}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
