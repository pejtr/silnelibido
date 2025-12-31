import Head from "next/head";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { MobileHeader } from "@/components/MobileHeader";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { DesktopStickyNav } from "@/components/DesktopStickyNav";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import productsData from "@/data/products.json";

// Lazy load below-the-fold components
const IngredientsSection = dynamic(() => import("@/components/IngredientsSection").then(mod => mod.IngredientsSection), {
  loading: () => <div className="h-96 bg-slate-50 animate-pulse" />
});

const ComparisonSection = dynamic(() => import("@/components/ComparisonSection"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />
});

const BenefitsSection = dynamic(() => import("@/components/BenefitsSection"));

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [ageTarget, setAgeTarget] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const age = params.get('age');
      setAgeTarget(age);
    }
  }, []);

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

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-[#0f172a]">
      <div className="w-full max-w-[1440px] mx-auto bg-white shadow-2xl min-h-screen flex flex-col relative">
      <Head>
        <title>Proerecta: Pevná erekce a podpora vitality</title>
        <meta name="description" content="Proerecta - přírodní doplňky stravy pro podporu erekce, libida a prostaty. Ověřené složení, rychlý nástup účinku. Diskrétní doručení do 48h." />
        <meta name="keywords" content="erekce, libido, prostata, proerecta, potence, sexuální zdraví" />
        <meta property="og:title" content="Proerecta - Pevná erekce a silné libido" />
        <meta property="og:description" content="Přírodní doplňky stravy pro podporu mužského zdraví. Vyzkoušejte Proerecta Klasik, Long nebo Shot." />
        <meta property="og:image" content="https://silnelibido.cz/og-image.jpg" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </Head>

      <TopBar />
      <MobileHeader />
      <DesktopStickyNav />

      <main className="flex-grow">
        <HeroSection ageTarget={ageTarget} />
        
        <div id="products">
          <ProductShowcase products={productsData.products} />
        </div>

        <div id="benefits">
          <BenefitsSection />
        </div>

        <div id="features">
          <FeaturesSection />
        </div>

        <div id="ingredients">
          <IngredientsSection />
        </div>

        <div id="comparison">
          <ComparisonSection />
        </div>

        <div id="reviews">
          <TestimonialsSection />
        </div>

        <div id="faq">
          <FAQSection />
        </div>
      </main>

      <Footer />
      </div>
      <ExitIntentPopup />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#D32F2F] hover:bg-[#B71C1C] text-white p-3 rounded-full shadow-lg transition-all z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
