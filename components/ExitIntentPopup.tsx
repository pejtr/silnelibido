"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check, Gift } from "lucide-react";
import { toast } from "sonner";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [copied, setCopied] = useState(false);
  const [canTrigger, setCanTrigger] = useState(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // 10-second delay before enabling exit intent
    const timer = setTimeout(() => {
      setCanTrigger(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // Check if already shown in this session
    const alreadyShown = sessionStorage.getItem("exit-intent-shown");
    if (alreadyShown) {
      setHasTriggered(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered && canTrigger) {
        setOpen(true);
        setHasTriggered(true);
        sessionStorage.setItem("exit-intent-shown", "true");
      }
    };

    // Mobile Scroll Logic
    let lastScrollY = window.scrollY;
    let lastTime = Date.now();
    const SCROLL_THRESHOLD = 20; // Minimum scroll distance
    const SPEED_THRESHOLD = 1.5; // Pixels per ms (fast scroll)

    const handleScroll = () => {
      if (hasTriggered || !canTrigger) return;

      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const timeDiff = currentTime - lastTime;
      const scrollDiff = lastScrollY - currentScrollY; // Positive if scrolling up

      // Only check if scrolling up significantly
      if (scrollDiff > SCROLL_THRESHOLD && timeDiff > 0) {
        const speed = scrollDiff / timeDiff;
        
        // If scrolling up fast (likely reaching for URL bar)
        if (speed > SPEED_THRESHOLD) {
          setOpen(true);
          setHasTriggered(true);
          sessionStorage.setItem("exit-intent-shown", "true");
        }
      }

      lastScrollY = currentScrollY;
      lastTime = currentTime;
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasTriggered, canTrigger]);

  const copyCode = () => {
    navigator.clipboard.writeText("SLEVA5");
    setCopied(true);
    toast.success("Kód zkopírován!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border-t-4 border-t-[#D32F2F]">
        <DialogHeader className="items-center text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <Gift className="w-6 h-6 text-[#D32F2F]" />
          </div>
          <DialogTitle className="text-2xl font-bold text-[#2A2A5A]">
            Počkejte! Neodcházejte s prázdnou
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2 text-slate-600">
            Máme pro vás speciální slevu <span className="font-bold text-[#D32F2F]">5 %</span> na vaši objednávku.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center justify-center py-6 space-y-4">
          <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Váš slevový kód</div>
          <div 
            className="group relative flex items-center justify-between w-full max-w-[260px] bg-slate-50 border-2 border-dashed border-[#D32F2F]/30 hover:border-[#D32F2F] rounded-xl p-4 cursor-pointer transition-all hover:bg-red-50/50"
            onClick={copyCode}
          >
            <span className="font-mono text-2xl font-bold tracking-wider text-[#2A2A5A] group-hover:text-[#D32F2F] transition-colors">SLEVA5</span>
            {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 text-slate-400 group-hover:text-[#D32F2F]" />}
            
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] text-slate-400 group-hover:text-[#D32F2F] transition-colors">
              Klikněte pro zkopírování
            </div>
          </div>
        </div>

        <DialogFooter className="sm:justify-center gap-2 sm:gap-0">
          <Button 
            className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold py-6 text-lg shadow-lg shadow-red-100"
            onClick={() => {
              copyCode();
              setOpen(false);
              // Optional: Scroll to products or checkout
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Použít slevu a nakoupit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
