import { TopBar } from "../components/TopBar";
import { HeroSection } from "@/components/HeroSection";
import { MobileHeader } from "@/components/MobileHeader";
import { lazy, Suspense } from "react";
import { Footer } from "@/components/Footer";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { LazyLoad } from "@/components/LazyLoad";

const IngredientsSection = lazy(() => import("@/components/IngredientsSection").then(module => ({ default: module.IngredientsSection })));
const FeaturesSection = lazy(() => import("@/components/FeaturesSection").then(module => ({ default: module.FeaturesSection })));
const ProductsSection = lazy(() => import("@/components/ProductsSection").then(module => ({ default: module.ProductsSection })));
const ProductQuiz = lazy(() => import("@/components/ProductQuiz").then(module => ({ default: module.ProductQuiz })));
const ComparisonTable = lazy(() => import("@/components/ComparisonTable").then(module => ({ default: module.ComparisonTable })));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(module => ({ default: module.TestimonialsSection })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(module => ({ default: module.FAQSection })));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
import { DesktopStickyNav } from "@/components/DesktopStickyNav";
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
      <DesktopStickyNav />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Content Wrapper for White Card Effect */}
        <div className="bg-white mx-0 md:mx-4 rounded-[2.5rem] overflow-hidden mb-4 shadow-sm">
          <LazyLoad minHeight="800px" rootMargin="200px">
            <Suspense fallback={<div className="h-96" />}>
              <IngredientsSection />
            </Suspense>
          </LazyLoad>
          
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

          <LazyLoad minHeight="400px">
            <Suspense fallback={<div className="h-48" />}>
              <ComparisonTable />
            </Suspense>
          </LazyLoad>

          <LazyLoad minHeight="600px">
            <Suspense fallback={<div className="h-96" />}>
              <ProductsSection />
            </Suspense>
          </LazyLoad>

          <LazyLoad minHeight="600px">
            <Suspense fallback={<div className="h-96" />}>
              <FeaturesSection />
            </Suspense>
          </LazyLoad>

          <LazyLoad minHeight="500px">
            <Suspense fallback={<div className="h-64" />}>
              <ProductQuiz />
            </Suspense>
          </LazyLoad>

          <LazyLoad minHeight="400px">
            <Suspense fallback={<div className="h-48" />}>
              <FAQSection />
            </Suspense>
          </LazyLoad>

          <div id="reference">
            <LazyLoad minHeight="600px">
              <Suspense fallback={<div className="h-96" />}>
                <TestimonialsSection />
              </Suspense>
            </LazyLoad>
          </div>

          <LazyLoad minHeight="400px">
            <Suspense fallback={<div className="h-48" />}>
              <BenefitsSection />
            </Suspense>
          </LazyLoad>
        </div>

      </main>
      <Footer />

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
  );
}
