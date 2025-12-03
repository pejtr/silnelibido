import { ShoppingCart, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export function MobileHeader() {
  const affiliateLink = "https://www.proerecta.cz/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c";
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
        <button className="flex flex-col items-center gap-1 text-[#2A2A5A]">
          <Menu className="w-6 h-6" />

        </button>
        
        <a href={affiliateLink} className="flex-shrink-0">
          <img 
            src="/images/logo.svg" 
            alt="Proerecta" 
            className="h-10"
          />
        </a>

        <a href={affiliateLink} className="flex flex-col items-center gap-1 text-[#D32F2F] relative">
          <div className="relative">
            <ShoppingCart className="w-6 h-6 fill-[#D32F2F] animate-pulse" />
            <span className="absolute -top-1 -right-1 bg-[#2A2A5A] text-white text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold animate-bounce">0</span>
          </div>

        </a>
      </div>

      {/* Red Bar with Gender Buttons (Sticky) */}
      <div className={`w-full bg-[#D32F2F] flex flex-col justify-center items-center shadow-md transition-all duration-300 z-[40] ${isSticky ? 'fixed top-0 left-0 w-full' : 'sticky top-0'}`}>
         <div className="w-full flex justify-center items-center gap-8 py-3 px-4">
           <a href="https://www.proerecta.cz/produkty/" className="text-white font-bold text-xs uppercase tracking-wide flex items-center gap-2 hover:scale-110 transition-transform">
             <svg viewBox="0 0 24 24" fill="none" stroke="#2A2A5A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 drop-shadow-sm"><circle cx="10" cy="14" r="5"/><path d="M15 9l5-5"/><path d="M15 4h5v5"/></svg> PRO MUŽE <span className="text-[10px]">›</span>
           </a>
           <div className="w-px h-4 bg-white/30"></div>
           <a href="https://www.proerecta.cz/produkt/proerecta-women/" className="text-white font-bold text-xs uppercase tracking-wide flex items-center gap-2 hover:scale-110 transition-transform">
             <svg viewBox="0 0 24 24" fill="none" stroke="#2A2A5A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 drop-shadow-sm"><circle cx="12" cy="10" r="5"/><path d="M12 15v6"/><path d="M9 18h6"/></svg> PRO ŽENY <span className="text-[10px]">›</span>
           </a>
         </div>
         {/* Progress Bar */}
         {isSticky && (
           <div className="w-full h-1 bg-red-900/30">
             <div 
               className="h-full bg-white transition-all duration-150 ease-out"
               style={{ width: `${scrollProgress * 100}%` }}
             />
           </div>
         )}
      </div>
    </div>
  );
}
