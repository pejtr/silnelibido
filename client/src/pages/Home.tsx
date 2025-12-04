import { TopBar } from "../components/TopBar";
import { HeroSection } from "@/components/HeroSection";
import { MobileHeader } from "@/components/MobileHeader";
import { IngredientsSection } from "@/components/IngredientsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ProductQuiz } from "@/components/ProductQuiz";
import { ComparisonTable } from "@/components/ComparisonTable";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
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
      <MobileHeader />
      <ExitIntentPopup />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Content Wrapper for White Card Effect */}
        <div className="bg-white mx-0 md:mx-4 rounded-[2.5rem] overflow-hidden mb-4 shadow-sm">
          <FeaturesSection />
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

          <ProductsSection />
          <ComparisonTable />
          <div id="reference">
            <TestimonialsSection />
          </div>
          <ProductQuiz />
          <FAQSection />
        </div>
        <NewsletterSection />
      </main>
      <Footer />

      {/* Scroll to Top Button */}
      <Button
        className={`fixed bottom-8 right-4 md:right-8 rounded-full w-12 h-12 p-0 shadow-xl transition-all duration-300 z-50 bg-[#D32F2F] hover:bg-[#B71C1C] text-white ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        onClick={scrollToTop}
      >
        <ArrowUp className="w-6 h-6" />
      </Button>
    </div>
  );
}
