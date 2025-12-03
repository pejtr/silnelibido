import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check, Copy } from "lucide-react";
import { toast } from "sonner";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Prosím zadejte platný e-mail.");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success("Děkujeme! Váš slevový kód je připraven.");
    }, 1000);
  };

  const copyCode = () => {
    navigator.clipboard.writeText("PROERECTA10");
    toast.success("Kód zkopírován do schránky!");
  };

  return (
    <section className="py-16 bg-[#2A2A5A] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-[#D32F2F] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-[#D32F2F] rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D32F2F]/20 text-[#D32F2F] mb-2 md:mb-0">
                <Mail className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Získejte <span className="text-red-400">10% slevu</span> na první nákup
              </h2>
              <p className="text-slate-300 text-lg">
                Přihlaste se k odběru novinek a my vám ihned pošleme slevový kód. Navíc získáte tipy pro lepší zdraví a exkluzivní nabídky.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">
                      Váš e-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jan.novak@email.cz"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 h-12 rounded-xl focus-visible:ring-red-400 focus-visible:border-red-400"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white h-12 rounded-xl text-lg font-bold shadow-lg shadow-red-900/20 transition-all hover:scale-[1.02]"
                  >
                    {isLoading ? "Odesílám..." : "Získat slevu 10 %"}
                  </Button>
                  <p className="text-xs text-slate-400 text-center mt-4">
                    Odesláním souhlasíte se zpracováním osobních údajů.
                  </p>
                </form>
              ) : (
                <div className="text-center space-y-6 py-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Děkujeme!</h3>
                    <p className="text-slate-300 mb-6">
                      Zde je váš slevový kód na první nákup:
                    </p>
                    
                    <div 
                      onClick={copyCode}
                      className="bg-white/10 border border-dashed border-white/30 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-white/15 transition-colors group"
                    >
                      <span className="text-xl font-mono font-bold tracking-wider text-red-400">PROERECTA10</span>
                      <div className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-white transition-colors">
                        <Copy className="w-4 h-4" />
                        <span>Kopírovat</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = "#products"}
                    className="w-full bg-white text-[#2A2A5A] hover:bg-slate-100 h-12 rounded-xl font-bold"
                  >
                    Použít slevu na nákup
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
