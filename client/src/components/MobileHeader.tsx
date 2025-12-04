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
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-[#1E3A8A] drop-shadow-md filter"><path d="M9,9C10.29,9 11.5,9.41 12.47,10.11L17.58,5H13V3H21V11H19V6.41L13.89,11.5C14.59,12.5 15,13.7 15,15A6,6 0 0,1 9,21A6,6 0 0,1 3,15A6,6 0 0,1 9,9M9,11A4,4 0 0,0 5,15A4,4 0 0,0 9,19A4,4 0 0,0 13,15A4,4 0 0,0 9,11Z" /></svg> PRO MUŽE <span className="text-xl text-yellow-400 font-black">›</span>
           </a>
           <div className="w-px h-8 bg-white/30 mx-1"></div>
           <a href="https://www.proerecta.cz/produkt/proerecta-women/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" onClick={vibrate} className="text-white font-bold text-base uppercase tracking-wide flex items-center gap-1 hover:scale-110 transition-transform whitespace-nowrap">
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-[#F472B6] drop-shadow-md filter"><path d="M12,4A6,6 0 0,1 18,10C18,12.97 15.84,15.44 13,15.92V18H15V20H13V22H11V20H9V18H11V15.92C8.16,15.44 6,12.97 6,10A6,6 0 0,1 12,4M12,6A4,4 0 0,0 8,10A4,4 0 0,0 12,14A4,4 0 0,0 16,10A4,4 0 0,0 12,6Z" /></svg> PRO ŽENY <span className="text-xl text-yellow-400 font-black">›</span>
           </a>
         </div>

      </div>
    </div>
  );
}
