import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Check, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/30">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEVÝ SLOUPEC: Text a CTA */}
          <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 order-2 lg:order-1">
            
            {/* Odznak */}
            <div className="inline-flex items-center w-fit rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-800 shadow-sm">
              <ShieldCheck className="mr-2 h-4 w-4 text-blue-600" />
              <span>Schváleno SZÚ ČR & 100% Diskrétní</span>
            </div>
            
            {/* Titulek */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Získejte zpět svou <span className="text-blue-700 relative whitespace-nowrap">
                mužnost
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> a sebevědomí
            </h1>
            
            {/* Benefity s odrážkami */}
            <div className="space-y-3">
              {[
                "Přírodní český doplněk stravy",
                "Pevná erekce do 60 minut",
                "Bez předpisu a chemie",
                "Ověřený účinek"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center text-lg text-slate-700">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Check className="h-4 w-4" />
                  </div>
                  {benefit}
                </div>
              ))}
            </div>
            
            {/* Tlačítka */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg" 
                className="text-lg px-8 py-7 font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-1 transition-all rounded-xl"
              >
                VYZKOUŠET SE SLEVOU 33%
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-7 bg-transparent text-slate-600 border-slate-300 hover:bg-slate-50 hover:text-slate-900 rounded-xl"
              >
                Jak to funguje?
              </Button>
            </div>
            
            {/* Social Proof Box */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 w-fit mt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                     {/* Placeholder avatars - in real app use real images */}
                     <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400"></div>
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                  95%
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-400 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-700">
                  Spokojenost více než <span className="font-bold text-slate-900">150 000 mužů</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* PRAVÝ SLOUPEC: Obrázek */}
          <div className="relative h-full min-h-[400px] lg:min-h-[600px] w-full order-1 lg:order-2 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            {/* Dekorativní prvky pod obrázkem */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl -z-10"></div>
            
            {/* Hlavní obrázek s maskou */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-700">
              <img 
                src="/images/hero-couple.jpg" 
                alt="Šťastný pár plný intimity" 
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000"
              />
              
              {/* Floating Badge na obrázku */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 max-w-[200px]">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Výsledek</p>
                <p className="text-sm font-semibold text-slate-900">"Konečně si to zase užíváme naplno!"</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
