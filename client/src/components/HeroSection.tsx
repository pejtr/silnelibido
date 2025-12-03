import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-couple.jpg" 
          alt="Šťastný pár" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24">
        <div className="max-w-2xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary-foreground backdrop-blur-sm">
            <ShieldCheck className="mr-2 h-4 w-4" />
            <span>Schváleno SZÚ ČR & 100% Diskrétní</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Získejte zpět svou <span className="text-primary-foreground">mužnost</span> a sebevědomí
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
            Přírodní český doplněk stravy pro pevnou erekci do 60 minut. 
            Bez předpisu, bez chemie, s ověřeným účinkem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-lg px-8 py-6 font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
              Vyzkoušet se slevou 33%
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent text-white border-white/30 hover:bg-white/10">
              Jak to funguje?
            </Button>
          </div>
          
          <div className="flex items-center gap-6 pt-8 text-sm text-slate-400">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white">
                  {/* Placeholder avatars */}
                  <span className="sr-only">User {i}</span>
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-primary border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white">
                95%
              </div>
            </div>
            <p>Spokojenost více než 150 000 mužů</p>
          </div>
        </div>
      </div>
    </section>
  );
}
