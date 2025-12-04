import { useEffect, useState } from "react";

export function DesktopStickyNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-500 ease-in-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-[#D32F2F] rounded-full shadow-2xl flex items-center px-8 py-3 gap-8 border-2 border-white/20 backdrop-blur-sm">
        <a 
          href="https://www.proerecta.cz/produkty/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" 
          className="text-white font-bold text-lg uppercase tracking-wide flex items-center gap-3 hover:scale-105 transition-transform group"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#1E3A8A] drop-shadow-md filter group-hover:text-blue-200 transition-colors">
            <path d="M9,9C10.29,9 11.5,9.41 12.47,10.11L17.58,5H13V3H21V11H19V6.41L13.89,11.5C14.59,12.5 15,13.7 15,15A6,6 0 0,1 9,21A6,6 0 0,1 3,15A6,6 0 0,1 9,9M9,11A4,4 0 0,0 5,15A4,4 0 0,0 9,19A4,4 0 0,0 13,15A4,4 0 0,0 9,11Z" />
          </svg> 
          <span>PRO MUŽE</span>
          <span className="text-xl text-yellow-400 font-black group-hover:translate-x-1 transition-transform">›</span>
        </a>
        
        <div className="w-px h-8 bg-white/30"></div>
        
        <a 
          href="https://www.proerecta.cz/produkt/proerecta-women/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" 
          className="text-white font-bold text-lg uppercase tracking-wide flex items-center gap-3 hover:scale-105 transition-transform group"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#F472B6] drop-shadow-md filter group-hover:text-pink-200 transition-colors">
            <path d="M12,4A6,6 0 0,1 18,10C18,12.97 15.84,15.44 13,15.92V18H15V20H13V22H11V20H9V18H11V15.92C8.16,15.44 6,12.97 6,10A6,6 0 0,1 12,4M12,6A4,4 0 0,0 8,10A4,4 0 0,0 12,14A4,4 0 0,0 16,10A4,4 0 0,0 12,6Z" />
          </svg> 
          <span>PRO ŽENY</span>
          <span className="text-xl text-yellow-400 font-black group-hover:translate-x-1 transition-transform">›</span>
        </a>
      </div>
    </div>
  );
}
