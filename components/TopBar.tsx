"use client";

import { Phone, Check } from "lucide-react";
import { useState, useEffect } from "react";

export function TopBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full font-sans">
      {/* New Notification Bar - Red Gradient */}
      <a 
        href="https://www.proerecta.cz/produkt/proerecta-shot-power/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c"
        className="block w-full bg-gradient-to-r from-[#B71C1C] via-[#D32F2F] to-[#B71C1C] text-white py-2 px-4 text-center text-[15px] font-medium shadow-sm relative z-20 hover:brightness-110 transition-all"
      >
        <span className="inline-flex items-center gap-2 drop-shadow-sm">
          <span className="font-bold">Novinka:</span> 🔥 Seznamte se s novou verzí Proerecta Shot Power.
        </span>
      </a>

      {/* Info Bar - Desktop Only */}
      <div className="hidden md:block bg-[#1E1E4E] text-white py-3 px-4 md:px-8 text-[13px] font-normal tracking-wide">
        <div className="container mx-auto max-w-[1100px] flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
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

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100]">
        <div 
          className="h-full bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.8)] backdrop-blur-sm"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
