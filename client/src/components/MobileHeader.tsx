import { ShoppingCart, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export function MobileHeader() {
  const affiliateLink = "https://www.proerecta.cz/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c";
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const vibrate = () => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
      
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:hidden">
      {/* White Header (Menu - Logo - Cart) */}
      <div className="bg-white px-4 py-3 flex items-center justify-between relative z-50">
        <button onClick={vibrate} className="flex flex-col items-center gap-1 text-[#2A2A5A]">
          <Menu className="w-8 h-8" />
        </button>
        
        <a href={affiliateLink} onClick={vibrate} className="flex-shrink-0">
          <img 
            src="/images/logo.svg" 
            alt="Proerecta" 
            className="h-12"
          />
        </a>

        <a href={affiliateLink} onClick={vibrate} className="flex flex-col items-center gap-1 text-[#D32F2F] relative">
          <div className="relative">
            <ShoppingCart className="w-8 h-8 fill-[#D32F2F]" />
            <span className="absolute -top-1 -right-1 bg-[#2A2A5A] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">0</span>
          </div>
        </a>
      </div>

      {/* Two-Button Layout (Sticky) */}
      <div className={`w-full bg-white px-4 pb-4 pt-1 flex justify-between items-center gap-4 shadow-sm transition-all duration-300 z-[40] ${isSticky ? 'fixed top-0 left-0 w-full shadow-md' : 'sticky top-0'}`}>
         <a 
           href="https://www.proerecta.cz/produkty/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" 
           onClick={vibrate} 
           className="flex-1 bg-[#112255] text-white font-bold text-base uppercase tracking-wide py-3 rounded-full flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
         >
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 3h5v5"/><path d="m21 3-6.75 6.75"/><circle cx="10" cy="14" r="6"/></svg>
           PRO MUŽE
         </a>
         
         <a 
           href="https://www.feminus.cz/blog/estrogen/maca-a-jeji-podivuhodne-ucinky-na-zenske-telo/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=a812cc02" 
           onClick={vibrate} 
           className="flex-1 bg-[#D65A8A] text-white font-bold text-base uppercase tracking-wide py-3 rounded-full flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
         >
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 15v7"/><path d="M9 19h6"/><circle cx="12" cy="9" r="6"/></svg>
           PRO ŽENY
         </a>
      </div>
    </div>
  );
}
