"use client";

import { Check, X } from "lucide-react";

export function ComparisonTable() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Proč zvolit Proerectu?</h2>
          <p className="text-lg text-slate-600">
            Podívejte se, jak si stojíme v porovnání s běžnými doplňky stravy na trhu.
          </p>
        </div>

        <div className="w-full -mx-4 md:mx-0 px-0 md:px-0">
          <table className="w-full max-w-4xl mx-auto border-collapse table-fixed">
            <thead>
              <tr>
                <th className="p-1.5 md:p-4 text-left text-slate-500 font-medium border-b border-slate-200 w-[25%] md:w-1/3 text-[10px] md:text-base break-words">Vlastnost</th>
                <th className="p-1.5 md:p-4 text-center bg-[#D32F2F]/5 border-b border-[#D32F2F] text-[#D32F2F] font-bold text-xs md:text-lg w-[40%] md:w-1/3 rounded-t-xl break-words">
                  Proerecta
                </th>
                <th className="p-1.5 md:p-4 text-center text-slate-400 font-medium border-b border-slate-200 w-[35%] md:w-1/3 text-[10px] md:text-base break-words">
                  Běžné doplňky
                </th>
              </tr>
            </thead>
            <tbody className="text-[10px] md:text-base">
              {[
                { label: "Nástup účinku", pro: "Do 30 minut (SHOT)", con: "Několik týdnů" },
                { label: "Složení", pro: <span className="font-extrabold text-[#D32F2F]">Extra silné bylinné extrakty</span>, con: "Často jen sušené byliny" },
                { label: "Certifikace", pro: "Schváleno v EU", con: "Nejasný původ" },
                { label: "Vedlejší účinky", pro: "Žádné známé", con: "Bolest hlavy, návaly horka" },
                { label: "Garance vrácení peněz", pro: "Ano", con: "Většinou ne" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-1.5 md:p-4 font-medium text-slate-700 align-middle break-words hyphens-auto">{row.label}</td>
                  <td className="p-1.5 md:p-4 text-center bg-[#D32F2F]/5 font-bold text-slate-900 align-middle">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
                      <Check className="w-3 h-3 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                      <span className="break-words w-full hyphens-auto">{row.pro}</span>
                    </div>
                  </td>
                  <td className="p-1.5 md:p-4 text-center text-slate-500 align-middle">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
                      {row.con === "Většinou ne" ? <X className="w-3 h-3 md:w-5 md:h-5 text-red-400 flex-shrink-0" /> : null}
                      <span className="break-words w-full hyphens-auto">{row.con}</span>
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
