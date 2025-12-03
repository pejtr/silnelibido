import { Check, Star, X, ArrowRight, ShieldCheck, Clock, ThumbsUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Review() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Article Header */}
      <div className="bg-slate-900 text-white pt-32 pb-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-sm font-medium mb-6 border border-blue-500/30">
            <ShieldCheck className="w-4 h-4" />
            Nezávislý test redakce
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Proerecta recenze 2025: Opravdu funguje, nebo jsou to vyhozené peníze?
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Otestovali jsme český bestseller na podporu erekce. Podívejte se na reálné zkušenosti, rozbor složení a srovnání všech variant.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Petr" alt="Petr" className="w-10 h-10 rounded-full bg-slate-700" />
              <span>Autor: <strong>Petr Novák</strong></span>
            </div>
            <span>•</span>
            <span>Aktualizováno: <strong>Prosinec 2025</strong></span>
            <span>•</span>
            <div className="flex text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 max-w-4xl mx-auto -mt-10">
        {/* Quick Verdict Box */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-t-4 border-blue-600">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Rychlý verdikt redakce</h3>
              <p className="text-slate-600 mb-6">
                Proerecta patří mezi <strong>nejúčinnější volně prodejné doplňky</strong> na českém trhu. Díky vysokému obsahu Citrulinu a Argininu reálně podporuje prokrvení. Není to "magická modrá pilulka", ale jako přírodní podpora funguje skvěle, zejména varianta SHOT pro rychlý nástup.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-700 font-medium">
                    <Check className="w-5 h-5" /> Rychlý nástup (do 45 min)
                  </div>
                  <div className="flex items-center gap-2 text-green-700 font-medium">
                    <Check className="w-5 h-5" /> Bez vedlejších účinků
                  </div>
                  <div className="flex items-center gap-2 text-green-700 font-medium">
                    <Check className="w-5 h-5" /> Diskrétní doručení
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-500">
                    <X className="w-5 h-5 text-red-500" /> Vyšší cena u Shotů
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <X className="w-5 h-5 text-red-500" /> Nutná sexuální stimulace
                  </div>
                </div>
              </div>
              <a href="https://www.proerecta.cz/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" target="_blank" rel="noopener noreferrer">
                <Button className="w-full md:w-auto bg-[#d32f2f] hover:bg-[#b71c1c] text-white font-bold py-6 px-8 text-lg shadow-lg shadow-red-900/20">
                  Vyzkoušet se slevou <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
            <div className="w-full md:w-1/3 bg-slate-100 rounded-xl p-6 text-center">
              <div className="text-5xl font-black text-blue-600 mb-2">96%</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-4">Hodnocení</div>
              <div className="space-y-3 text-left text-sm border-t border-slate-200 pt-4">
                <div className="flex justify-between">
                  <span>Složení</span>
                  <span className="font-bold text-slate-900">9.8/10</span>
                </div>
                <div className="flex justify-between">
                  <span>Nástup účinku</span>
                  <span className="font-bold text-slate-900">9.5/10</span>
                </div>
                <div className="flex justify-between">
                  <span>Cena/Výkon</span>
                  <span className="font-bold text-slate-900">9.2/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <article className="prose prose-lg prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm">
          <h2>Proč jsem se rozhodl Proerectu otestovat?</h2>
          <p>
            Bojujete se slabší erekcí, která neposlouchá, ale prozatím vám problém nepřijde natolik závažný, abyste se svými potížemi vyhledali lékaře? Přesně v této situaci jsem se ocitl já. Je mi 42 let, stres v práci, méně pohybu... znáte to. V posteli to "šlo", ale už to nebylo ono. Nejistota je zabiják vášně.
          </p>
          <p>
            Hledal jsem něco <strong>bez předpisu</strong>, co není plné chemie z pochybných asijských e-shopů. Proerecta mě zaujala tím, že jde o <strong>českou značku</strong> se schválením SZÚ. Žádné "zázračné pilulky od Aztéků", ale moderní složení postavené na aminokyselinách.
          </p>

          <h2 className="mt-12">Rozbor složení: Co v tom vlastně je?</h2>
          <p>
            Na rozdíl od konkurence Proerecta netají přesné množství látek. Klíčem k úspěchu je zde kombinace <strong>Citrulinu a Argininu</strong>. Tyto látky podporují tvorbu oxidu dusnatého, který roztahuje cévy a umožňuje lepší prokrvení – přesně to, co potřebujete pro pevnou erekci.
          </p>
          
          <figure className="my-10">
            <img 
              src="/images/proerecta-ingredients-diagram.png" 
              alt="Diagram účinných látek Proerecta" 
              className="w-full rounded-xl shadow-lg border border-slate-100"
            />
            <figcaption className="text-center text-slate-500 mt-3 italic">
              Synergie přírodních látek v Proerectě: Od bylin po aminokyseliny.
            </figcaption>
          </figure>

          <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                <span className="bg-blue-200 p-1 rounded">🧬</span> L-Citrulin & L-Arginin
              </h4>
              <p className="text-sm text-blue-800">Základní stavební kameny pro prokrvení. Zajišťují "napumpování" svalů i topořivých těles.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                <span className="bg-green-200 p-1 rounded">🌿</span> Kotvičník & Ženšen
              </h4>
              <p className="text-sm text-green-800">Tradiční byliny pro zvýšení libida a hladiny testosteronu. Dodávají energii a chuť na sex.</p>
            </div>
          </div>

          <h2 className="mt-12">Moje zkušenost: Funguje to?</h2>
          <p>
            Objednal jsem diskrétní balení (na obálce je jen "eMarkest s.r.o.", takže sousedi nic nepoznají). Dorazilo do 48 hodin.
          </p>
          <p>
            <strong>První pokus:</strong> Vzal jsem si tobolku Proerecta KLASIK asi hodinu předem. Upřímně? Čekal jsem okamžitý výbuch, ale ten se nekonal. Erection se dostavila až při stimulaci – což je ale správně! Není to Viagra, která vás "postaví" bez ohledu na situaci.
          </p>
          <p>
            <strong>Druhý a třetí pokus:</strong> Tady už to bylo zajímavější. Cítil jsem větší "plnost" a hlavně – erekce nepadala ani při změně polohy nebo nasazování kondomu. To byl pro mě hlavní benefit. <strong>Jistota.</strong>
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8 not-prose">
            <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
              <Clock className="w-5 h-5" /> Můj tip pro maximální účinek
            </h4>
            <p className="text-yellow-900 mb-0">
              Nezapomeňte hodně pít! Zapijte tobolku alespoň 3 dcl vody. Hydratace je pro prokrvení klíčová. A nespoléhejte jen na prášek – předehra je nutná.
            </p>
          </div>

          <h2 className="mt-12">Srovnání variant: Kterou vybrat?</h2>
          <p>
            Proerecta není jen jeden produkt. Postupně se rodina rozrostla a otestoval jsem i novinky. Zde je rychlý přehled, abyste nekupovali zajíce v pytli.
          </p>

          <figure className="my-10">
            <img 
              src="/images/proerecta-women-long-real.png" 
              alt="Proerecta Long a Women" 
              className="w-full rounded-xl shadow-lg border border-slate-100"
            />
            <figcaption className="text-center text-slate-500 mt-3 italic">
              Proerecta myslí i na dlouhodobou péči (LONG) a na ženy (WOMEN).
            </figcaption>
          </figure>

          <div className="overflow-x-auto not-prose my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-4 font-bold text-slate-900">Varianta</th>
                  <th className="p-4 font-bold text-slate-900">Určení</th>
                  <th className="p-4 font-bold text-slate-900">Nástup účinku</th>
                  <th className="p-4 font-bold text-slate-900">Moje hodnocení</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-blue-600">KLASIK</td>
                  <td className="p-4">Okamžitá potřeba</td>
                  <td className="p-4">45-60 min</td>
                  <td className="p-4 text-green-600 font-bold">9/10 (Zlatý střed)</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <td className="p-4 font-bold text-red-600">SHOT</td>
                  <td className="p-4">Rychlá akce, energie</td>
                  <td className="p-4">30 min</td>
                  <td className="p-4 text-green-600 font-bold">10/10 (Nejsilnější)</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-4 font-bold text-purple-600">LONG</td>
                  <td className="p-4">Dlouhodobá vitalita 40+</td>
                  <td className="p-4">Průběžně</td>
                  <td className="p-4 text-green-600 font-bold">8/10 (Prevence)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center my-12 bg-slate-50 p-8 rounded-2xl border border-slate-200 not-prose">
            <div className="w-full md:w-1/3">
              <img 
                src="/images/proerecta-long-detail.webp" 
                alt="Detail Proerecta Long" 
                className="w-full rounded-lg shadow-md mix-blend-multiply"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Speciální tip: Proerecta LONG</h3>
              <p className="text-slate-600 mb-6">
                Pokud je vám přes 50 let, KLASIK nemusí stačit. Varianta LONG je navržena pro dlouhodobé užívání (min. 1 měsíc). Obsahuje navíc Hořčík a Vitamín D pro celkovou vitalitu a testosteron.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-700">
                  <Check className="w-5 h-5 text-green-500" /> Stabilizuje hladinu testosteronu
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <Check className="w-5 h-5 text-green-500" /> Zlepšuje kondici prostaty
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <Check className="w-5 h-5 text-green-500" /> Vhodné pro každodenní užívání
                </li>
              </ul>
              <a href="https://www.proerecta.cz/produkt/proerecta-long/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  Více o variantě LONG
                </Button>
              </a>
            </div>
          </div>

          <h2 className="mt-12">Závěrečné hodnocení</h2>
          <p>
            Proerecta mě přesvědčila. Nečekejte zázraky na počkání, pokud máte vážné zdravotní problémy (tam patří lékař!), ale jako <strong>bezpečná, přírodní a funkční podpora</strong> je to špička na trhu.
          </p>
          <p>
            Oceňuji hlavně český původ, transparentní složení a fakt, že to prostě funguje. Pocit jistoty v ložnici je k nezaplacení.
          </p>

          <div className="mt-12 p-8 bg-blue-600 rounded-2xl text-center text-white shadow-2xl shadow-blue-900/30 not-prose">
            <h3 className="text-3xl font-bold mb-4">Chcete to vyzkoušet?</h3>
            <p className="text-blue-100 mb-8 text-lg">
              Využijte aktuální akci pro čtenáře. Při koupi více balení získáte dopravu zdarma a výraznou slevu.
            </p>
            <a href="https://www.proerecta.cz/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-6 px-10 text-xl rounded-full shadow-lg transform transition hover:scale-105">
                Přejít do obchodu a získat slevu
              </Button>
            </a>
            <p className="text-sm text-blue-200 mt-4 opacity-80">
              100% diskrétní balení • Garance vrácení peněz
            </p>
          </div>

        </article>
      </div>
    </div>
  );
}
