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
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-[200] p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="flex-1 text-sm text-slate-600">
          <h3 className="font-bold text-slate-900 mb-1 text-base">Respektujeme vaše soukromí</h3>
          <p>
            Používáme cookies, abychom vám zajistili co nejlepší zážitek z našeho webu, analyzovali návštěvnost a mohli vám zobrazovat relevantní reklamu (např. na Skliku). Kliknutím na "Souhlasím" nám dáváte svolení s jejich použitím.
          </p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button 
            variant="outline" 
            onClick={handleDecline}
            className="flex-1 md:flex-none whitespace-nowrap"
          >
            Odmítnout
          </Button>
          <Button 
            onClick={handleAccept}
            className="flex-1 md:flex-none bg-[#D32F2F] hover:bg-[#B71C1C] text-white whitespace-nowrap"
          >
            Souhlasím
          </Button>
        </div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 md:hidden text-slate-400 hover:text-slate-600"
          aria-label="Zavřít"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
