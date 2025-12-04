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
          <Menu className="w-6 h-6" />

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
            <ShoppingCart className="w-6 h-6 fill-[#D32F2F] animate-pulse" />
            <span className="absolute -top-1 -right-1 bg-[#2A2A5A] text-white text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold animate-bounce">0</span>
          </div>

        </a>
      </div>

      {/* Red Bar with Gender Buttons (Sticky) */}
      <div className={`w-full bg-[#D32F2F] flex flex-col justify-center items-center shadow-md transition-all duration-300 z-[40] ${isSticky ? 'fixed top-0 left-0 w-full' : 'sticky top-0'}`}>
         <div className="w-full flex justify-center items-center gap-2 py-2 px-2">
           <a href="https://www.proerecta.cz/produkty/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" onClick={vibrate} className="text-white font-bold text-base uppercase tracking-wide flex items-center gap-1 hover:scale-110 transition-transform whitespace-nowrap">
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-[#1E3A8A] drop-shadow-md filter"><path d="M20 4v6h-2V6.41l-3.29 3.3a7 7 0 1 0 2.83 2.83l3.3-3.29H14V4h6zM11.5 20a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" /></svg> PRO MUŽE <span className="text-xl text-yellow-400 font-black">›</span>
           </a>
           <div className="w-px h-8 bg-white/30 mx-1"></div>
           <a href="https://www.proerecta.cz/produkt/proerecta-women/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" onClick={vibrate} className="text-white font-bold text-base uppercase tracking-wide flex items-center gap-1 hover:scale-110 transition-transform whitespace-nowrap">
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-[#F472B6] drop-shadow-md filter"><path d="M12 4a6 6 0 0 0-6 6c0 2.97 2.16 5.43 5 5.91V19H8v2h3v2h2v-2h3v-2h-3v-3.09c2.84-.48 5-2.94 5-5.91a6 6 0 0 0-6-6zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" /></svg> PRO ŽENY <span className="text-xl text-yellow-400 font-black">›</span>
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
