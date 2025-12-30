import Head from "next/head";
import dynamic from "next/dynamic";
import { TopBar } from "@/components/TopBar";
import { HeroSection } from "@/components/HeroSection";
import { MobileHeader } from "@/components/MobileHeader";
import { Footer } from "@/components/Footer";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { DesktopStickyNav } from "@/components/DesktopStickyNav";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import productsData from "@/data/products.json";

// Lazy load below-the-fold components
const IngredientsSection = dynamic(() => import("@/components/IngredientsSection").then(mod => mod.IngredientsSection), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});
const FeaturesSection = dynamic(() => import("@/components/FeaturesSection").then(mod => mod.FeaturesSection));
const ProductsSection = dynamic(() => import("@/components/ProductsSection").then(mod => mod.ProductsSection));
const ProductQuiz = dynamic(() => import("@/components/ProductQuiz").then(mod => mod.ProductQuiz));
const ComparisonTable = dynamic(() => import("@/components/ComparisonTable").then(mod => mod.ComparisonTable));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection").then(mod => mod.TestimonialsSection));
const FAQSection = dynamic(() => import("@/components/FAQSection").then(mod => mod.FAQSection));
const BenefitsSection = dynamic(() => import("@/components/BenefitsSection"));

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [ageTarget, setAgeTarget] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { age } = router.query;
      setAgeTarget(typeof age === 'string' ? age : null);
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Prepare JSON-LD Structured Data
  const productSchema = productsData.map(product => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://silnelibido.cz${product.image}`,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Proerecta"
    },
    "offers": {
      "@type": "Offer",
      "url": product.url,
      "priceCurrency": product.currency,
      "price": product.price,
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    }
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Jak rychle Proerecta účinkuje?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Účinek nastupuje přibližně 30-60 minut po užití tobolky. U varianty SHOT je nástup ještě rychlejší, již do 30 minut."
        }
      },
      {
        "@type": "Question",
        "name": "Je užívání bezpečné?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ano, Proerecta je doplněk stravy s přírodním složením, který je řádně notifikován a schválen Státním zdravotním ústavem ČR. Neobsahuje žádné nebezpečné chemické látky."
        }
      },
      {
        "@type": "Question",
        "name": "Jak je zásilka zabalená?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutně diskrétně. Používáme neutrální krabice bez jakéhokoliv loga nebo nápisu, který by prozrazoval obsah. Nikdo (ani pošťák, ani sousedé) se nedozví, co jste si objednali."
        }
      },
      {
        "@type": "Question",
        "name": "Pomůže mi Proerecta i ve vyšším věku?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ano, Proerecta je navržena tak, aby pomáhala dospělým mužům každého věku. Máme mnoho spokojených zákazníků ve věku 60+."
        }
      },
      {
        "@type": "Question",
        "name": "Musím Proerectu užívat pravidelně?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proerecta KLASIK a SHOT jsou určeny pro jednorázové užití před sexem. Nemusíte je brát každý den. Pro dlouhodobou péči o vitalitu doporučujeme variantu LONG."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Proerecta - Pevná Erekce</title>
        <meta name="description" content="Proerecta pro pevnou erekci a zdravou prostatu." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
        {/* Preload critical hero image based on age target */}
        <link 
          rel="preload" 
          as="image" 
          href={ageTarget === '35' ? "/images/hero-couple-35-mobile.webp" : "/images/hero-couple-mobile.webp"} 
          media="(max-width: 768px)"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {productSchema.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </Head>
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-[oklch(0.22_0.08_275)]">
        <TopBar />
        <MobileHeader />
        <ExitIntentPopup />
        <DesktopStickyNav />
        
        {/* Main Centered Container */}
        <div className="w-full max-w-[1400px] mx-auto bg-white shadow-2xl my-0 md:my-8 md:rounded-[2.5rem] overflow-hidden flex flex-col min-h-screen relative">
          <main className="flex-grow">
            <HeroSection ageTarget={ageTarget} />
            
            <IngredientsSection />
            
            {/* Stylish Down Arrow Divider */}
            <div className="bg-white flex justify-center pt-0 pb-8 -mb-12 relative z-10">
              <div className="relative">
                <div className="absolute -inset-4 bg-red-100/50 rounded-full blur-xl animate-pulse"></div>
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#D32F2F" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-12 h-12 animate-bounce relative z-10 drop-shadow-sm"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7"/>
                </svg>
              </div>
            </div>

            <ComparisonTable />
            <ProductsSection />
            <FeaturesSection />
            <ProductQuiz />
            <FAQSection />

            <div id="reference">
              <TestimonialsSection />
            </div>

            <BenefitsSection />
          </main>
          <Footer />
        </div>

        {/* Scroll to Top Button */}
        <button
          className={`fixed bottom-12 md:bottom-8 right-2 md:right-8 rounded-full w-12 h-12 p-0 shadow-xl transition-all duration-300 z-50 bg-[#D32F2F] md:hover:bg-[#B71C1C] touch-manipulation text-white flex items-center justify-center cursor-pointer active:scale-95 ${
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
