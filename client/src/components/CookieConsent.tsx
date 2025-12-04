import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    // Here you would typically initialize analytics scripts
    console.log("Cookies accepted");
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
    console.log("Cookies declined");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-[200] p-2 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-3 md:gap-8">
        <div className="flex-1 text-[10px] md:text-sm text-slate-600 pr-6 md:pr-0">
          <h3 className="font-bold text-slate-900 mb-0.5 text-xs md:text-base">Respektujeme vaše soukromí</h3>
          <p className="leading-tight">
            Používáme cookies pro lepší zážitek, analýzu a reklamu. Kliknutím na "Souhlasím" dáváte svolení.
          </p>
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button 
            variant="outline" 
            onClick={handleDecline}
            className="flex-1 md:flex-none whitespace-nowrap h-8 text-[10px] md:text-sm md:h-10"
          >
            Odmítnout
          </Button>
          <Button 
            onClick={handleAccept}
            className="flex-1 md:flex-none bg-[#D32F2F] hover:bg-[#B71C1C] text-white whitespace-nowrap h-8 text-[10px] md:text-sm md:h-10"
          >
            Souhlasím
          </Button>
        </div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 md:hidden text-slate-400 hover:text-slate-600 p-1"
          aria-label="Zavřít"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
