import { ArrowRight } from "lucide-react";

export function IngredientsSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        
        {/* Central Product Image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] hidden lg:flex items-center justify-center z-10">
          <div className="relative w-full h-full">
            <img 
              src="/images/proerecta-shot.png" 
              alt="Proerecta Shot" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            {/* Decorative Leaves behind product */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-50/50 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 min-h-[600px]">
          
          {/* Left Column */}
          <div className="flex flex-col justify-between gap-12 lg:gap-0 lg:py-12">
            {/* Maca */}
            <div className="flex flex-col items-center text-center lg:items-end lg:text-right space-y-4 relative group">
              <div className="w-32 h-32 rounded-full bg-white shadow-lg p-4 flex items-center justify-center border border-slate-100 group-hover:border-[#D32F2F] transition-colors">
                <img src="/images/zensen.png" alt="Maca" className="w-full h-full object-contain" />
              </div>
              <div className="max-w-xs">
                <h3 className="text-[#D32F2F] font-bold text-xl mb-2">Maca</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Maca udržuje sexualitu, plodnost, vitalitu a vytrvalost i fyzické a duševní zdraví.
                </p>
              </div>
              {/* Arrow for Desktop */}
              <svg className="hidden lg:block absolute -right-20 top-1/2 w-16 h-16 text-green-500 transform rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h12m-6-6l6 6-6 6" />
              </svg>
            </div>

            {/* Ženšen */}
            <div className="flex flex-col items-center text-center lg:items-end lg:text-right space-y-4 relative group">
              <div className="w-32 h-32 rounded-full bg-white shadow-lg p-4 flex items-center justify-center border border-slate-100 group-hover:border-[#D32F2F] transition-colors">
                <img src="/images/zensen.png" alt="Ženšen" className="w-full h-full object-contain" />
              </div>
              <div className="max-w-xs">
                <h3 className="text-[#D32F2F] font-bold text-xl mb-2">Extrakt ženšenu</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Extrakt z kořene ženšenu přirozeně přispívá k sexuálnímu zdraví a ke kognitivní a duševní výkonnosti.
                </p>
              </div>
              {/* Arrow for Desktop */}
              <svg className="hidden lg:block absolute -right-20 top-0 w-16 h-16 text-green-500 transform -rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h12m-6-6l6 6-6 6" />
              </svg>
            </div>
          </div>

          {/* Middle Column (Spacer for Image) */}
          <div className="hidden lg:block"></div>

          {/* Right Column */}
          <div className="flex flex-col justify-between gap-12 lg:gap-0 lg:py-12">
            {/* Rozchodnice */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 relative group">
              <div className="w-32 h-32 rounded-full bg-white shadow-lg p-4 flex items-center justify-center border border-slate-100 group-hover:border-[#D32F2F] transition-colors">
                <img src="/images/rozchodnice.png" alt="Rozchodnice" className="w-full h-full object-contain" />
              </div>
              <div className="max-w-xs">
                <h3 className="text-[#D32F2F] font-bold text-xl mb-2">Rozchodnice růžová</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Extrakt z Rozchodnice přispívá k mentálnímu výkonu, fyzické aktivitě a nervového systému.
                </p>
              </div>
              {/* Arrow for Desktop */}
              <svg className="hidden lg:block absolute -left-20 top-1/2 w-16 h-16 text-green-500 transform rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h12m-6-6l6 6-6 6" />
              </svg>
            </div>

            {/* Hroznová jádra */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 relative group">
              <div className="w-32 h-32 rounded-full bg-white shadow-lg p-4 flex items-center justify-center border border-slate-100 group-hover:border-[#D32F2F] transition-colors">
                <img src="/images/hrozny.png" alt="Hroznová jádra" className="w-full h-full object-contain" />
              </div>
              <div className="max-w-xs">
                <h3 className="text-[#D32F2F] font-bold text-xl mb-2">Extrakt ze semen hroznů</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Působí jako antioxidant, který přirozeně podpoří normální funkce oběhové soustavy.
                </p>
              </div>
              {/* Arrow for Desktop */}
              <svg className="hidden lg:block absolute -left-20 top-0 w-16 h-16 text-green-500 transform -rotate-[135deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h12m-6-6l6 6-6 6" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
