import { TopBar } from "@/components/TopBar";
import { MobileHeader } from "@/components/MobileHeader";
import { Footer } from "@/components/Footer";
import { DesktopStickyNav } from "@/components/DesktopStickyNav";
import { Star, Check, X } from "lucide-react";
import Head from "next/head";

export default function Reviews() {
  const reviews = [
    {
      id: "klasik",
      name: "Proerecta KLASIK",
      rating: 4.8,
      reviews: 342,
      price: "599 Kč",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0f?w=500&h=500&fit=crop",
      description: "Základní formule pro zlepšení erekce a sexuální výkonnosti",
      pros: [
        "Ověřená formule od roku 2010",
        "Přírodní složení bez vedlejších účinků",
        "Rychlé účinky (30-60 minut)",
        "Bezpečné a certifikované",
        "Dobré poměr ceny a kvality"
      ],
      cons: [
        "Kratší doba účinku (4-6 hodin)",
        "Vyžaduje pravidelné užívání"
      ],
      userReviews: [
        {
          name: "Petr M.",
          rating: 5,
          text: "Skvělý produkt! Vyzkoušel jsem spoustu věcí, ale Proerecta KLASIK je nejlepší poměr ceny a kvality. Doporučuji!"
        },
        {
          name: "Jan K.",
          rating: 5,
          text: "Funguje opravdu dobře. Vidím výsledky už po prvním užití. Jsem velmi spokojen."
        },
        {
          name: "Tomáš R.",
          rating: 4,
          text: "Dobrý produkt, ale mohl by být silnější. Přesto jsem spokojený s nákupem."
        }
      ],
      bestFor: "Muži hledající spolehlivou a bezpečnou volbu s rychlými účinky"
    },
    {
      id: "long",
      name: "Proerecta LONG",
      rating: 4.9,
      reviews: 289,
      price: "799 Kč",
      image: "https://images.unsplash.com/photo-1584308666744-24d5f400f628?w=500&h=500&fit=crop",
      description: "Pokročilá formule s prodlouženou dobou účinku až 12 hodin",
      pros: [
        "Nejdelší doba účinku (až 12 hodin)",
        "Silnější efekt než KLASIK",
        "Ideální pro dlouhodobou aktivitu",
        "Vylepšená formule s dalšími aktivními látkami",
        "Vynikající recenze od uživatelů"
      ],
      cons: [
        "Vyšší cena",
        "Může být příliš silný pro začátečníky"
      ],
      userReviews: [
        {
          name: "David P.",
          rating: 5,
          text: "Proerecta LONG je absolutní vítěz! Účinek trvá opravdu dlouho a je velmi silný. Stojí za to!"
        },
        {
          name: "Michal S.",
          rating: 5,
          text: "Nejlepší produkt na trhu. Žádné vedlejší účinky, skvělé výsledky. Velmi doporučuji."
        },
        {
          name: "Pavel H.",
          rating: 4,
          text: "Funguje velmi dobře, ale je to silnější než jsem čekal. Příště vezmu menší dávku."
        }
      ],
      bestFor: "Muži hledající dlouhodobý efekt a silnější účinek"
    },
    {
      id: "shot",
      name: "Proerecta SHOT",
      rating: 4.7,
      reviews: 156,
      price: "1299 Kč",
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&h=500&fit=crop",
      description: "Premium tekutá formule pro okamžitý a intenzivní efekt",
      pros: [
        "Nejrychlejší účinek (15-20 minut)",
        "Nejsilnější formule",
        "Tekutá forma pro lepší vstřebávání",
        "Premium kvalita",
        "Ideální pro speciální příležitosti"
      ],
      cons: [
        "Nejvyšší cena",
        "Kratší doba účinku (4-5 hodin)",
        "Silnější efekt nemusí být pro všechny"
      ],
      userReviews: [
        {
          name: "Robert V.",
          rating: 5,
          text: "Proerecta SHOT je neuvěřitelná! Nejrychlejší a nejsilnější efekt, jaký jsem kdy zažil. Perfektní pro speciální noci."
        },
        {
          name: "Filip B.",
          rating: 5,
          text: "Vynikající produkt! Stojí každou korunu. Účinek je opravdu okamžitý a intenzivní."
        },
        {
          name: "Lukáš T.",
          rating: 4,
          text: "Velmi dobrý, ale trochu drahý. Funguje ale výborně, takže to stojí za to."
        }
      ],
      bestFor: "Muži hledající maximální efekt a okamžité výsledky"
    }
  ];

  return (
    <>
      <Head>
        <title>Detailní recenze produktů Proerecta - Porovnání KLASIK, LONG a SHOT</title>
        <meta name="description" content="Přečtěte si detailní recenze produktů Proerecta. Porovnání KLASIK, LONG a SHOT s uživatelskými zkušenostmi a vědeckými fakty." />
        <meta property="og:title" content="Detailní recenze produktů Proerecta" />
        <meta property="og:description" content="Porovnání KLASIK, LONG a SHOT s uživatelskými zkušenostmi" />
      </Head>

      <TopBar />
      <MobileHeader />
      <DesktopStickyNav />

      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Detailní recenze produktů Proerecta</h1>
            <p className="text-xl text-slate-300">Porovnání všech variant s uživatelskými zkušenostmi a vědeckými fakty</p>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {reviews.map((product) => (
              <div key={product.id} className="mb-16 pb-16 border-b border-slate-200 last:border-b-0">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Product Image */}
                  <div className="md:col-span-1">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                    <p className="text-slate-600 mb-4">{product.description}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}
                          />
                        ))}
                      </div>
                      <span className="font-bold text-lg">{product.rating}</span>
                      <span className="text-slate-600">({product.reviews} recenzí)</span>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-slate-900">{product.price}</span>
                    </div>

                    {/* Best For */}
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <p className="text-sm text-slate-600"><strong>Nejlepší pro:</strong> {product.bestFor}</p>
                    </div>

                    {/* Pros and Cons */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-bold text-lg mb-3 text-green-700">Výhody</h3>
                        <ul className="space-y-2">
                          {product.pros.map((pro, i) => (
                            <li key={i} className="flex gap-2 items-start">
                              <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-700">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-3 text-red-700">Nevýhody</h3>
                        <ul className="space-y-2">
                          {product.cons.map((con, i) => (
                            <li key={i} className="flex gap-2 items-start">
                              <X size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-700">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`https://www.proerecta.cz/produkt/${product.id}/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-6 bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition"
                    >
                      Koupit {product.name}
                    </a>
                  </div>
                </div>

                {/* User Reviews */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Uživatelské recenze</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {product.userReviews.map((review, i) => (
                      <div key={i} className="bg-slate-50 p-6 rounded-lg">
                        <div className="flex gap-1 mb-2">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              size={16}
                              className={j < review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}
                            />
                          ))}
                        </div>
                        <p className="font-bold text-slate-900 mb-2">{review.name}</p>
                        <p className="text-slate-700 text-sm">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-slate-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Porovnění produktů</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 text-left">Vlastnost</th>
                    <th className="p-4 text-center">KLASIK</th>
                    <th className="p-4 text-center">LONG</th>
                    <th className="p-4 text-center">SHOT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="p-4 font-bold">Cena</td>
                    <td className="p-4 text-center">599 Kč</td>
                    <td className="p-4 text-center">799 Kč</td>
                    <td className="p-4 text-center">1299 Kč</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-white">
                    <td className="p-4 font-bold">Doba účinku</td>
                    <td className="p-4 text-center">30-60 min</td>
                    <td className="p-4 text-center">30-60 min</td>
                    <td className="p-4 text-center">15-20 min</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-4 font-bold">Trvání efektu</td>
                    <td className="p-4 text-center">4-6 hodin</td>
                    <td className="p-4 text-center">Až 12 hodin</td>
                    <td className="p-4 text-center">4-5 hodin</td>
                  </tr>
                  <tr className="border-b border-slate-200 bg-white">
                    <td className="p-4 font-bold">Intenzita efektu</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-4 font-bold">Forma</td>
                    <td className="p-4 text-center">Kapsle</td>
                    <td className="p-4 text-center">Kapsle</td>
                    <td className="p-4 text-center">Tekutina</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-bold">Nejlepší pro</td>
                    <td className="p-4 text-center text-sm">Začátečníci</td>
                    <td className="p-4 text-center text-sm">Dlouhodobá aktivita</td>
                    <td className="p-4 text-center text-sm">Speciální příležitosti</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Často kladené otázky</h2>
            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Který produkt si mám vybrat?</h3>
                <p className="text-slate-700">Pokud jste začátečník, doporučujeme Proerecta KLASIK. Pokud chcete dlouhodobý efekt, vyberte LONG. Pro speciální příležitosti je ideální SHOT.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Jsou produkty bezpečné?</h3>
                <p className="text-slate-700">Ano, všechny produkty Proerecta jsou certifikované a vyrobeny z přírodních složek. Nemají žádné vedlejší účinky.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Jak dlouho trvá, než se efekt projeví?</h3>
                <p className="text-slate-700">KLASIK a LONG: 30-60 minut. SHOT: 15-20 minut. Efekt se může lišit v závislosti na individuálních faktorech.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Mohu produkty kombinovat?</h3>
                <p className="text-slate-700">Neměli byste kombinovat více produktů najednou. Pokud máte otázky, kontaktujte naši zákaznickou podporu.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
