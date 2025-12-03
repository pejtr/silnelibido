import { Phone, Check, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function TopBar() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Set deadline to December 20th, 2025 at 12:00 PM (Last shipping date)
    const deadline = new Date("2025-12-20T12:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance < 0) {
        setTimeLeft("Garance doručení do Vánoc vypršela!");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft(`${days}d ${hours}h ${minutes}m`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full font-sans">
      {/* Christmas Bar */}
      <div className="bg-gradient-to-r from-[#990000] via-[#D32F2F] to-[#990000] text-white text-center py-2 text-sm font-bold px-4 shadow-inner flex justify-center items-center gap-3 animate-pulse">
        <span className="text-xl">🎄</span>
        <div className="flex flex-col items-center leading-tight">
          <span>Do konce garance doručení zbývá:</span>
          <span className="text-base">{timeLeft || "..."}</span>
        </div>
        <span className="text-xl">🎁</span>
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
