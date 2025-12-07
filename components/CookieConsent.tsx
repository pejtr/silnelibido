import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    // Here you would typically initialize analytics scripts
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
            'analytics_storage': 'granted'
        });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-500 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#2A2A5A] mb-2 flex items-center gap-2">
            Používáme cookies <span className="text-xl">🍪</span>
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Tento web používá soubory cookie k zajištění funkčnosti, analýze návštěvnosti a personalizaci reklam. 
            Kliknutím na &quot;Přijmout vše&quot; souhlasíte s používáním všech cookies. 
            Více informací naleznete v našich <Link href="/ochrana-osobnich-udaju" className="text-[#D32F2F] hover:underline font-medium">Zásadách ochrany osobních údajů</Link>.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button
            onClick={handleDecline}
            className="px-6 py-3 rounded-full border border-slate-300 text-slate-600 font-medium hover:bg-slate-50 transition-colors text-sm whitespace-nowrap"
          >
            Odmítnout
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-3 rounded-full bg-[#D32F2F] text-white font-bold hover:bg-[#B71C1C] transition-colors shadow-md hover:shadow-lg text-sm whitespace-nowrap"
          >
            Přijmout vše
          </button>
        </div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 md:hidden text-slate-400 hover:text-slate-600 p-2"
          aria-label="Zavřít"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
