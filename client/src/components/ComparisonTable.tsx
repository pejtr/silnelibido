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

        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-slate-500 font-medium border-b border-slate-200 w-1/3">Vlastnost</th>
                <th className="p-4 text-center bg-[#D32F2F]/5 border-b border-[#D32F2F] text-[#D32F2F] font-bold text-lg w-1/3 rounded-t-xl">
                  Proerecta
                </th>
                <th className="p-4 text-center text-slate-400 font-medium border-b border-slate-200 w-1/3">
                  Běžné doplňky
                </th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {[
                { label: "Nástup účinku", pro: "Do 30 minut (SHOT)", con: "Několik týdnů" },
                { label: "Složení", pro: <span className="font-extrabold text-[#D32F2F]">Extra silné bylinné extrakty</span>, con: "Často jen sušené byliny" },
                { label: "Certifikace", pro: "Schváleno v EU", con: "Nejasný původ" },
                { label: "Vedlejší účinky", pro: "Žádné známé", con: "Bolest hlavy, návaly horka" },
                { label: "Garance vrácení peněz", pro: "Ano", con: "Většinou ne" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-700">{row.label}</td>
                  <td className="p-4 text-center bg-[#D32F2F]/5 font-bold text-slate-900">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      {row.pro}
                    </div>
                  </td>
                  <td className="p-4 text-center text-slate-500">
                    <div className="flex items-center justify-center gap-2">
                      {row.con === "Většinou ne" ? <X className="w-5 h-5 text-red-400" /> : null}
                      {row.con}
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
