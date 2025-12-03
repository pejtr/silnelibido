import { Phone, Check } from "lucide-react";

export function TopBar() {
  return (
    <div className="w-full font-sans">
      {/* Christmas Bar */}
      <div className="bg-gradient-to-r from-[#990000] via-[#D32F2F] to-[#990000] text-white text-center py-2 text-sm font-medium px-4 shadow-inner">
        🎄 Vánoce se blíží — neponechte nic náhodě. 🎁
      </div>

      {/* Info Bar - Desktop Only */}
      <div className="hidden md:block bg-[#1E1E4E] text-white py-3 px-4 md:px-8 text-[13px] font-normal tracking-wide">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 stroke-[3]" /> Garance vrácení peněz
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 stroke-[3]" /> Doprava zdarma od 1500 Kč
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="tel:+420607657370" className="flex items-center gap-2 hover:text-slate-200 transition-colors font-semibold">
              <Phone className="w-4 h-4 fill-current" /> +420 607 657 370 (Po-Pá 8:00–16:30)
            </a>
            <span className="opacity-90">Česky (Kč)</span>
          </div>
        </div>
      </div>

      {/* Mobile Phone Bar */}
      <div className="md:hidden bg-white text-[#2A2A5A] py-3 px-4 text-sm font-medium border-b border-slate-100 flex justify-center items-center gap-2">
        <Phone className="w-4 h-4 fill-[#2A2A5A]" /> 
        <a href="tel:+420607657370">+420 607 657 370 (Po-Pá 8:00–16:30)</a>
      </div>
    </div>
  );
}
