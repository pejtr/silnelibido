import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";

export function HeroSection() {
  const affiliateLink = "https://www.proerecta.cz/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c";

  return (
    <section className="relative w-full bg-white mx-0 md:mx-4 pb-12 rounded-b-[2.5rem] overflow-hidden shadow-xl mb-8">
      {/* Background Curve Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg className="absolute top-[20%] left-0 w-full h-full text-[#2A2A5A]/5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q 50 100 100 50 V 100 H 0 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container px-4 md:px-8 py-8 md:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEVÝ SLOUPEC: Obrázek (vlevo jako na screenshotu) */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/images/hero-couple.jpg" 
                alt="Šťastný pár" 
                className="w-full h-auto object-cover"
              />
              
              {/* Trust Badge Overlay */}
              <div className="absolute bottom-4 left-4 bg-[#2A2A5A] text-white p-2 rounded-full shadow-lg">
                <img src="https://www.proerecta.cz/wp-content/themes/proerecta/assets/img/icons/guarantee.svg" alt="Garance" className="w-8 h-8" onError={(e) => e.currentTarget.style.display = 'none'} />
                <Check className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* PRAVÝ SLOUPEC: Text a CTA (vpravo jako na screenshotu) */}
          <div className="flex flex-col space-y-6 order-1 lg:order-2 text-center lg:text-left">
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2A2A5A] leading-tight">
              Nápoj pro <span className="text-[#D32F2F]">zrychlený nástup účinku</span>
            </h1>
            
            <div className="text-lg text-slate-600 font-medium cursor-pointer hover:text-[#D32F2F] transition-colors flex items-center justify-center lg:justify-start gap-1">
              Zjistit více <span className="text-[#D32F2F]">∨</span>
            </div>

            {/* Product Showcase Box */}
            <div className="relative mt-8 bg-gradient-to-r from-[#2A2A5A] to-[#3F3F7A] rounded-3xl p-8 text-white shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              {/* Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#D32F2F] text-white font-black text-2xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-20">
                14x
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
                <img 
                  src="https://www.proerecta.cz/wp-content/uploads/2020/05/proerecta-shot-new.png" 
                  alt="Proerecta Shot Box" 
                  className="w-48 md:w-64 object-contain drop-shadow-2xl"
                />
                <div className="text-left space-y-2">
                  <h3 className="text-2xl font-bold">Proerecta SHOT</h3>
                  <p className="text-blue-100 text-sm">Natural support for male vitality and energy</p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-white/10 rounded text-xs border border-white/20">Gluten Free</span>
                    <span className="px-2 py-1 bg-white/10 rounded text-xs border border-white/20">Natural Extracts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <Button variant="outline" className="h-auto py-4 flex flex-col gap-1 border-slate-200 hover:border-[#D32F2F] hover:text-[#D32F2F] bg-white">
                <span className="font-bold text-lg">4 shoty</span>
                <span className="text-xs text-slate-500">Zkouška</span>
              </Button>
              <Button className="h-auto py-4 flex flex-col gap-1 bg-[#D32F2F] hover:bg-[#B71C1C] text-white shadow-lg scale-110 z-10 relative -top-2">
                <span className="absolute -top-3 bg-[#2A2A5A] text-white text-[10px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wider">Oblíbené</span>
                <span className="font-bold text-lg">8 shotů</span>
                <span className="text-xs text-white/80">Bestseller</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col gap-1 border-slate-200 hover:border-[#D32F2F] hover:text-[#D32F2F] bg-white">
                <span className="font-bold text-lg">16 shotů</span>
                <span className="text-xs text-slate-500">Výhodně</span>
              </Button>
            </div>

            <Button 
              className="w-full mt-4 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-xl py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all"
              onClick={() => window.location.href = affiliateLink}
            >
              KOUPIT NYNÍ
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>

          </div>
          
        </div>
      </div>
    </section>
  );
}
