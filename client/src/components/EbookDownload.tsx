import { useState } from "react";
import { Download, CheckCircle, Lock } from "lucide-react";

export function EbookDownload() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Trigger download
      const link = document.createElement('a');
      link.href = '/ebook-7denni-restart.pdf';
      link.download = '7denni-restart-testosteronu.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Log for analytics (in real app)
      console.log("Lead captured:", email);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-br from-[#2A2A5A] to-[#1E1E4E] text-white rounded-2xl p-8 md:p-12 shadow-xl my-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D32F2F] opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#D32F2F]/20 text-[#FF8A80] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#D32F2F]/30">
            <Download className="w-3 h-3" />
            E-book zdarma
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            7denní restart <span className="text-[#D32F2F]">testosteronu</span>
          </h2>
          <p className="text-slate-300 mb-6 text-lg">
            Cítíte se bez energie? Stáhněte si náš exkluzivní manuál a zjistěte, jak přirozeně nastartovat svou mužskou sílu za pouhý týden.
          </p>
          
          <ul className="space-y-3 mb-8">
            {[
              "Jídelníček pro podporu erekce",
              "Ranní rituály pro zvýšení libida",
              "Jak odbourat stres (zabiják testosteronu)"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-200">
                <CheckCircle className="w-5 h-5 text-[#D32F2F] flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Stáhnout manuál zdarma</h3>
                <p className="text-sm text-slate-400">Zadejte e-mail a my vám e-book ihned pošleme.</p>
              </div>
              
              <div>
                <label htmlFor="email" className="sr-only">Váš e-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="vas@email.cz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent transition-all"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#D32F2F]/30"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Odesílám...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Získat e-book ZDARMA
                  </>
                )}
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mt-4">
                <Lock className="w-3 h-3" />
                <span>Vaše údaje jsou u nás v bezpečí. Žádný spam.</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Úspěšně odesláno!</h3>
              <p className="text-slate-300 mb-6">
                Váš e-book se právě stahuje. Pokud stahování nezačalo automaticky, <a href="/ebook-7denni-restart.pdf" download className="text-[#D32F2F] underline hover:text-white">klikněte zde</a>.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-sm text-slate-400 hover:text-white underline"
              >
                Stáhnout znovu
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
