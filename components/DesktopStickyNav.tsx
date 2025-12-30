"use client";

import { useEffect, useState } from "react";
import { useAffiliateLink } from "@/hooks/useAffiliateLink";
import { ProductDropdown } from "./ProductDropdown";

export function DesktopStickyNav() {
  const [isVisible, setIsVisible] = useState(false);
  const { url: productsLink, trackClick: trackProductsClick } = useAffiliateLink("https://www.proerecta.cz/produkty/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c");
  const { url: womenLink, trackClick: trackWomenClick } = useAffiliateLink("https://www.proerecta.cz/produkt/proerecta-women/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c");

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
      <div className="flex items-center gap-4">
        <ProductDropdown gender="men">
          <a 
            href={productsLink} onClick={trackProductsClick} 
            className="bg-[#112255] text-white font-bold text-lg uppercase tracking-wide px-8 py-3 rounded-full flex items-center gap-3 shadow-xl hover:scale-105 transition-transform group border-2 border-white/10"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 group-hover:text-blue-200 transition-colors">
              <path d="M16 3h5v5"/><path d="m21 3-6.75 6.75"/><circle cx="10" cy="14" r="6"/>
            </svg> 
            <span>PRO MUŽE</span>
          </a>
        </ProductDropdown>
        
        <ProductDropdown gender="women">
          <a 
            href={womenLink} onClick={trackWomenClick} 
            className="bg-[#D65A8A] text-white font-bold text-lg uppercase tracking-wide px-8 py-3 rounded-full flex items-center gap-3 shadow-xl hover:scale-105 transition-transform group border-2 border-white/10"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 group-hover:text-pink-200 transition-colors">
              <path d="M12 15v7"/><path d="M9 19h6"/><circle cx="12" cy="9" r="6"/>
            </svg> 
            <span>PRO ŽENY</span>
          </a>
        </ProductDropdown>
      </div>
    </div>
  );
}
