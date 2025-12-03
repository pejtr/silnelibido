import { Check } from "lucide-react";

export function IngredientsSection() {
  return (
    <div className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-50 to-transparent opacity-50 -z-10"></div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A2A5A] mb-4">
            Síla přírody pro vaši erekci
          </h2>
          <p className="text-lg text-slate-600">
            Proerecta obsahuje pouze ověřené bylinné extrakty, aminokyseliny a vitamíny. Žádná chemie, jen čistá příroda.
          </p>
        </div>

        {/* Ingredients Cycle Image */}
        <div className="relative max-w-5xl mx-auto">
          <img 
            src="/images/ingredients-comparison.png" 
            alt="Srovnání složení Proerecta produktů" 
            className="w-full h-auto object-contain"
            loading="lazy"
          />
          
          {/* Mobile-only text fallback (if image text is too small) */}
          <div className="md:hidden grid grid-cols-1 gap-4 mt-8">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img src="/images/tribulus-icon.png" alt="Tribulus" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-[#D32F2F] mb-1 text-lg">Tribulus Terrestris</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Podporuje normální funkci pohlavních orgánů a hormonální aktivitu.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                <img src="/images/maca.png" alt="Maca" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-[#D32F2F] mb-1 text-lg">Maca Peruánská</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Udržuje sexualitu, plodnost, vitalitu a vytrvalost.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                <img src="/images/zensen.png" alt="Ženšen" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-[#D32F2F] mb-1 text-lg">Ženšen Pravý</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Přispívá k sexuálnímu zdraví, vitalitě a krevnímu oběhu.</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                <img src="/images/hrozny.png" alt="Hrozny" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-[#D32F2F] mb-1 text-lg">Extrakt z hroznů</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Silný antioxidant podporující normální funkci oběhové soustavy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t border-slate-100 pt-12">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <Check className="w-6 h-6" />
            </div>
            <span className="font-bold text-[#2A2A5A]">Schváleno SZÚ</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <Check className="w-6 h-6" />
            </div>
            <span className="font-bold text-[#2A2A5A]">Bez vedlejších účinků</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <Check className="w-6 h-6" />
            </div>
            <span className="font-bold text-[#2A2A5A]">Vhodné pro kardiaky</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <Check className="w-6 h-6" />
            </div>
            <span className="font-bold text-[#2A2A5A]">Vyrobeno v ČR</span>
          </div>
        </div>
      </div>
    </div>
  );
}
