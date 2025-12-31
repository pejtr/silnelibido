import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A2A5A] mb-4">
            Proč zvolit Proerectu?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Podívejte se, jak si stojíme v porovnání s běžnými řešeními na trhu.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
          <div className="grid grid-cols-3 bg-slate-900 text-white p-4 text-sm md:text-base font-bold">
            <div className="flex items-center justify-center">Vlastnost</div>
            <div className="flex items-center justify-center bg-[#D32F2F] -my-4 py-4 rounded-t-lg shadow-lg z-10 scale-110">
              Proerecta
            </div>
            <div className="flex items-center justify-center text-slate-400">
              Běžné doplňky
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {[
              { label: "Přírodní složení", pro: true, con: true },
              { label: "Rychlý nástup účinku", pro: true, con: false },
              { label: "Bez vedlejších účinků", pro: true, con: false },
              { label: "Certifikovaná výroba v ČR", pro: true, con: false },
              { label: "Diskrétní balení", pro: true, con: true },
              { label: "Doprava zdarma", pro: true, con: false },
            ].map((row, index) => (
              <div key={index} className="grid grid-cols-3 p-4 text-sm md:text-base hover:bg-slate-50 transition-colors">
                <div className="flex items-center font-medium text-slate-700">
                  {row.label}
                </div>
                <div className="flex items-center justify-center bg-red-50/30 -my-4 py-4 border-x border-red-100">
                  {row.pro ? (
                    <Check className="w-6 h-6 text-green-500" />
                  ) : (
                    <X className="w-6 h-6 text-red-500" />
                  )}
                </div>
                <div className="flex items-center justify-center text-slate-400">
                  {row.con ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <X className="w-5 h-5" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
