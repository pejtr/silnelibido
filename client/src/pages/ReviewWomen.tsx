import { Check, Star, ArrowRight, ThumbsUp, AlertCircle, Heart, Zap, Shield } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function ReviewWomen() {
  const affiliateLink = "https://www.proerecta.cz/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c";

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-slate-800">
      <Header />
      
      <main className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Breadcrumbs */}
          <div className="text-sm text-slate-500 mb-6 flex items-center gap-2">
            <a href="/" className="hover:text-[#D32F2F]">Domů</a>
            <span>/</span>
            <span className="text-slate-800 font-medium">Recenze Proerecta WOMEN</span>
          </div>

          {/* Article Header */}
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 mb-8 border border-slate-100">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="inline-block bg-pink-100 text-pink-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                  Recenze & Zkušenosti
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#2A2A5A] mb-4 leading-tight">
                  Proerecta WOMEN recenze: Doplněk stravy určený pro ženy nejen v menopauze
                </h1>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Hledáte přírodní pomoc při PMS, bolestivé menstruaci nebo nepříjemných projevech menopauzy? Otestovali jsme Proerecta WOMEN – český bylinný doplněk bez hormonů.
                </p>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <span className="font-bold text-slate-800 ml-1">4.9/5</span>
                  </div>
                  <span>•</span>
                  <span>Aktualizováno: Prosinec 2025</span>
                  <span>•</span>
                  <span>Autor: Redakce PohledŽeny</span>
                </div>
              </div>
              
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 border border-pink-100 text-center">
                  <img 
                    src="/images/proerecta-women-gen.jpg" 
                    alt="Proerecta WOMEN" 
                    className="w-3/4 mx-auto mb-4 drop-shadow-md mix-blend-multiply"
                  />
                  <Button 
                    className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold rounded-full shadow-lg shadow-red-100"
                    onClick={() => window.location.href = affiliateLink}
                  >
                    OBJEDNAT SE SLEVOU
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits Box */}
          <div className="bg-[#E8F5E9] rounded-2xl p-8 mb-12 border border-green-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full opacity-20 -translate-y-1/2 translate-x-1/3"></div>
            
            <h2 className="text-2xl font-bold text-[#1B5E20] mb-6 flex items-center gap-2 relative z-10">
              <ThumbsUp className="w-6 h-6" />
              Hlavní výhody Proerecta WOMEN
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 relative z-10">
              {[
                "Přírodní složení bez hormonů a chemie",
                "Pomáhá při PMS a bolestivé menstruaci",
                "Zmírňuje návaly horka a pocení v menopauze",
                "Zvyšuje libido a sexuální apetit",
                "Snižuje únavu a vyčerpání",
                "Dostupné bez lékařského předpisu"
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/60 p-3 rounded-lg">
                  <div className="bg-green-500 text-white rounded-full p-1 mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-medium text-slate-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid md:grid-cols-[1fr_300px] gap-12">
            
            {/* Main Text */}
            <div className="space-y-12">
              
              {/* Co je to */}
              <section>
                <h2 className="text-2xl font-bold text-[#2A2A5A] mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-[#D32F2F]" />
                  Co je Proerecta WOMEN?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Proerecta WOMEN je <strong>rostlinný doplněk stravy</strong>, který byl speciálně vytvořen pro specifické potřeby ženského organismu. Jeho složení je pečlivě sestaveno odborníky tak, aby pomáhalo zmírnit projevy ženského cyklu, jako je <strong>PMS syndrom, bolestivá menstruace</strong>, nebo silné projevy <strong>menopauzy</strong>.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  V tobolce Proerecta WOMEN nenajdete žádná chemická aditiva ani syntetické hormony. Kapsle obsahují pouze extrakty z bylinek, vitamíny a minerály, které přirozenou cestou harmonizují hormonální systém.
                </p>
              </section>

              {/* Složení */}
              <section>
                <h2 className="text-2xl font-bold text-[#2A2A5A] mb-6 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-pink-500" />
                  Složení: Síla přírody pro ženy
                </h2>
                
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-700 font-bold uppercase text-xs">
                      <tr>
                        <th className="p-4">Složka</th>
                        <th className="p-4">Hlavní účinek</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="p-4 font-bold text-[#2A2A5A]">Drmek obecný</td>
                        <td className="p-4 text-slate-600">Zmírňuje příznaky PMS a menopauzy, reguluje cyklus</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-[#2A2A5A]">Maca peruánská</td>
                        <td className="p-4 text-slate-600">Přírodní afrodiziakum, vyrovnává hladinu hormonů</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-[#2A2A5A]">Ženšen pravý</td>
                        <td className="p-4 text-slate-600">Dodává energii, vitalitu a zlepšuje výkon</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-[#2A2A5A]">Hořčík + Zinek</td>
                        <td className="p-4 text-slate-600">Snižují únavu, podporují plodnost a imunitu</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold text-[#2A2A5A]">Vitamíny B + D3</td>
                        <td className="p-4 text-slate-600">Podpora nervové soustavy a psychické pohody</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Pro koho */}
              <section>
                <h2 className="text-2xl font-bold text-[#2A2A5A] mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  Pro koho je produkt určen?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Proerecta WOMEN není jen pro ženy v přechodu. Její komplexní složení ocení ženy v každém věku (od 18 let), které trápí hormonální nerovnováha.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                    <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3 text-pink-600 font-bold">1</div>
                    <h3 className="font-bold text-[#2A2A5A] mb-2">PMS & Menstruace</h3>
                    <p className="text-xs text-slate-500">Bolesti břicha, výkyvy nálad, citlivost prsou</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 text-purple-600 font-bold">2</div>
                    <h3 className="font-bold text-[#2A2A5A] mb-2">Menopauza</h3>
                    <p className="text-xs text-slate-500">Návaly horka, pocení, nespavost, podrážděnost</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 text-red-600 font-bold">3</div>
                    <h3 className="font-bold text-[#2A2A5A] mb-2">Libido & Energie</h3>
                    <p className="text-xs text-slate-500">Nízká chuť na sex, únava, vyčerpání</p>
                  </div>
                </div>
              </section>

              {/* Závěr */}
              <section className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h2 className="text-2xl font-bold text-[#2A2A5A] mb-4">Závěrečné hodnocení</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Po 40. roku zažívá mnoho žen nepříjemné období. Prudké kolísání hormonů způsobuje únavu a neschopnost zvládat běžné činnosti. Proerecta WOMEN představuje <strong>bezpečnou, přírodní alternativu</strong> k hormonální léčbě. Díky vyváženému složení bylinek a vitamínů účinně řeší příčiny problémů, nejen jejich následky.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="flex-1 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold py-6 text-lg rounded-xl shadow-lg shadow-red-200"
                    onClick={() => window.location.href = affiliateLink}
                  >
                    OBJEDNAT PROERECTA WOMEN
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                  <Shield className="w-3 h-3" /> 100% diskrétní balení • Doprava zdarma od 1500 Kč
                </p>
              </section>

            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Product Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sticky top-24">
                <div className="text-center mb-4">
                  <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded uppercase">Náš tip</span>
                </div>
                <img 
                  src="/images/proerecta-women-gen.jpg" 
                  alt="Proerecta WOMEN" 
                  className="w-32 mx-auto mb-4 mix-blend-multiply"
                />
                <h3 className="font-bold text-[#2A2A5A] text-center mb-2">Proerecta WOMEN</h3>
                <div className="flex justify-center mb-4 text-yellow-400 text-xs">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-[#D32F2F]">599 Kč</span>
                  <span className="text-xs text-slate-400 block">za 60 tobolek</span>
                </div>
                <Button 
                  className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold rounded-full"
                  onClick={() => window.location.href = affiliateLink}
                >
                  Objednat nyní
                </Button>
              </div>
            </aside>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
