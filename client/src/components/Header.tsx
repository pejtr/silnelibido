import { ShoppingCart, ChevronDown, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const affiliateLink = "https://www.proerecta.cz/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c";

  return (
    <div className="w-full">
      {/* Top Bar - Dark Blue Background */}
      <div className="bg-[oklch(0.22_0.08_275)] text-white text-xs py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex gap-4 hidden md:flex">
          <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Garance vrácení peněz</span>
          <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Doprava zdarma od 1500 Kč</span>
        </div>
        <div className="flex gap-4 ml-auto items-center">
          <a href="tel:+420607657370" className="flex items-center gap-1 hover:text-gray-200">
            <Phone className="w-3 h-3" /> +420 607 657 370 (Po-Pá 8:00-16:30)
          </a>
          <span className="cursor-pointer hover:text-gray-200">Česky (Kč)</span>
        </div>
      </div>

      {/* Main Header - White Card Top Part */}
      <div className="bg-white rounded-t-[2.5rem] mx-0 md:mx-4 mt-0 md:mt-4 px-6 py-4 flex items-center justify-between shadow-sm relative z-20">
        {/* Logo */}
        <a href={affiliateLink} className="flex-shrink-0">
          <img 
            src="https://www.proerecta.cz/wp-content/themes/proerecta/assets/img/logo.svg" 
            alt="Proerecta" 
            className="h-8 md:h-10"
          />
        </a>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-8 font-bold text-slate-800 text-sm uppercase tracking-wide">
          <a href={affiliateLink} className="hover:text-primary transition-colors">Produkty</a>
          <a href={affiliateLink} className="hover:text-primary transition-colors">Reference</a>
          <a href={affiliateLink} className="hover:text-primary transition-colors">O nás</a>
          <a href={affiliateLink} className="hover:text-primary transition-colors">Kontakty</a>
          <div className="relative group cursor-pointer flex items-center gap-1 hover:text-primary transition-colors">
            Ostatní <ChevronDown className="w-4 h-4" />
          </div>
        </nav>

        {/* Cart Button */}
        <Button 
          className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white rounded-full px-6 py-2 font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          onClick={() => window.location.href = affiliateLink}
        >
          <div className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-white text-[#D32F2F] text-[10px] w-4 h-4 flex items-center justify-center rounded-full border border-[#D32F2F]">0</span>
          </div>
          Košík je prázdný
        </Button>
      </div>
      
      {/* Submenu Bar - White Card Continuation */}
      <div className="bg-white mx-0 md:mx-4 px-6 py-3 border-t border-slate-100 flex items-center gap-8 text-sm font-bold text-slate-700 overflow-x-auto hidden md:flex">
        <span className="text-[#2A2A5A] text-xl font-extrabold">Proerecta Shot</span>
        <div className="flex gap-6 ml-8">
          <a href="#souhrn" className="hover:text-primary transition-colors">Souhrn</a>
          <a href="#uzivani" className="hover:text-primary transition-colors">Užívání</a>
          <a href="#slozeni" className="hover:text-primary transition-colors">Složení</a>
          <a href="#ucinky" className="hover:text-primary transition-colors">Účinky</a>
          <a href="#hodnoceni" className="hover:text-primary transition-colors">Hodnocení</a>
        </div>
      </div>
    </div>
  );
}
