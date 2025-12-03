import { TopBar } from "../components/TopBar";
import { HeroSection } from "@/components/HeroSection";
import { IngredientsSection } from "@/components/IngredientsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

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
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-[oklch(0.22_0.08_275)]">
      <TopBar />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Content Wrapper for White Card Effect */}
        <div className="bg-white mx-0 md:mx-4 rounded-[2.5rem] overflow-hidden mb-4 shadow-sm">
          <IngredientsSection />
          <FeaturesSection />
          <ProductsSection />
          <div id="reference">
            <TestimonialsSection />
          </div>
          <FAQSection />
        </div>
      </main>
      <Footer />

      {/* Scroll to Top Button */}
      <Button
        className={`fixed bottom-8 right-8 rounded-full w-12 h-12 p-0 shadow-xl transition-all duration-300 z-50 bg-[#D32F2F] hover:bg-[#B71C1C] text-white ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        onClick={scrollToTop}
      >
        <ArrowUp className="w-6 h-6" />
      </Button>
    </div>
  );
}
