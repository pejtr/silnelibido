import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Gift, Copy, Check } from "lucide-react";
import { toast } from "sonner";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    const alreadyShown = sessionStorage.getItem("exitIntentShown");
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        showPopup();
      }
    };

    // Fallback timer for mobile or if mouse doesn't leave
    const timer = setTimeout(() => {
      showPopup();
    }, 60000); // Show after 60 seconds automatically

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  const showPopup = () => {
    if (!hasShown && !sessionStorage.getItem("exitIntentShown")) {
      setIsVisible(true);
      setHasShown(true);
      sessionStorage.setItem("exitIntentShown", "true");
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Prosím zadejte platný e-mail.");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call and email saving
    console.log("Saving email to database:", email);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success("E-mail byl úspěšně uložen!");
    }, 800);
  };

  const copyCode = () => {
    navigator.clipboard.writeText("sleva11");
    toast.success("Kód zkopírován do schránky!");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5 text-slate-500" />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          {/* Left Side (Image/Color) */}
          <div className="hidden md:flex w-1/3 bg-[#2A2A5A] items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-couple.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 bg-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <p className="text-white/80 text-sm font-medium">
                Neodcházejte s prázdnou!
              </p>
            </div>
          </div>

          {/* Right Side (Content) */}
          <div className="w-full md:w-2/3 p-8 md:p-10">
            {!isSubmitted ? (
              <>
                <div className="text-center md:text-left mb-6">
                  <h3 className="text-2xl font-bold text-[#2A2A5A] mb-2">
                    Počkejte chvíli! ✋
                  </h3>
                  <p className="text-slate-600">
                    Máme pro vás speciální slevu <span className="font-bold text-[#D32F2F]">11 %</span> na celý nákup. Stačí zadat e-mail.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Váš e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 rounded-xl border-slate-200 focus-visible:ring-[#D32F2F]"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white h-12 rounded-xl font-bold text-lg shadow-lg shadow-red-100"
                  >
                    {isLoading ? "Odesílám..." : "Chci slevu 11 %"}
                  </Button>
                  <p className="text-[10px] text-slate-400 text-center">
                    Respektujeme vaše soukromí. Žádný spam.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-4 animate-in fade-in zoom-in duration-300">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#2A2A5A] mb-2">
                  Tady je váš kód!
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  Použijte ho v košíku pro 11% slevu.
                </p>

                <div 
                  onClick={copyCode}
                  className="bg-slate-50 border-2 border-dashed border-[#D32F2F]/30 rounded-xl p-4 mb-6 cursor-pointer hover:bg-red-50 transition-colors group relative"
                >
                  <span className="text-2xl font-mono font-bold text-[#D32F2F] tracking-widest">
                    sleva11
                  </span>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-[#D32F2F]">
                    <Copy className="w-5 h-5" />
                  </div>
                </div>

                <Button 
                  onClick={() => window.location.href = "https://www.proerecta.cz/produkty/"}
                  className="w-full bg-[#2A2A5A] hover:bg-[#1a1a3a] text-white h-12 rounded-xl font-bold"
                >
                  Použít slevu
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
