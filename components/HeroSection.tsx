"use client";

import { ShoppingCart, Gift, HelpCircle } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useAffiliateLink } from "@/hooks/useAffiliateLink";
import { ProductDropdown } from "./ProductDropdown";

interface HeroSectionProps {
  ageTarget: string | null;
}

export function HeroSection({ ageTarget }: HeroSectionProps) {
  const baseAffiliateLink = "https://www.proerecta.cz/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c";
  const { url: affiliateLink, trackClick: trackHeroClick } = useAffiliateLink(baseAffiliateLink);
  
  const { url: productsLink } = useAffiliateLink("https://www.proerecta.cz/produkty/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c");
  const { url: womenLink } = useAffiliateLink("https://www.feminus.cz/blog/estrogen/maca-a-jeji-podivuhodne-ucinky-na-zenske-telo/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=a812cc02");
  const { url: aboutLink } = useAffiliateLink("https://www.proerecta.cz/o-nas/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c");
  const { url: contactLink } = useAffiliateLink("https://www.proerecta.cz/kontakty/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c");
  const { url: blogLink } = useAffiliateLink("https://www.proerecta.cz/blog/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c");
  const [ctaText, setCtaText] = useState("Probudit libido");
  const [showGift, setShowGift] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Determine content based on ageTarget prop (SSR)
  const isTarget35 = ageTarget === '35';
  
  const heroImageMobile = isTarget35 ? "/images/hero-couple-35-mobile.webp" : "/images/hero-couple-mobile.webp";
  const heroImageDesktop = isTarget35 ? "/images/hero-couple-35.webp" : "/images/hero-couple.webp";
  
  const headline = isTarget35 ? {
    main: "Maximalizujte svůj",
    highlight: "sexuální potenciál",
    sub: "Více energie, tvrdší erekce a lepší výdrž. Buďte vždy připraven.",
    cta: "Posílit libido"
  } : {
    main: "Přírodní péče o váš",
    highlight: "milostný život",
    sub: "Sex udržuje milostný vztah. Nenechte se o něj obrat.",
    cta: "Probudit libido"
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only apply parallax on desktop
      if (window.innerWidth >= 1024) {
        const x = (window.innerWidth - e.clientX * 2) / 50;
        const y = (window.innerHeight - e.clientY * 2) / 50;
        setOffset({ x, y });
      }
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      // Apply parallax on mobile/tablet based on tilt
      if (window.innerWidth < 1024 && e.beta && e.gamma) {
        // beta is front-to-back tilt in degrees, gamma is left-to-right
        const x = e.gamma / 2; // limit movement
        const y = (e.beta - 45) / 2; // subtract 45deg as base holding angle
        setOffset({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('deviceorientation', handleDeviceOrientation);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const productsSection = document.getElementById('products');
          
          // Determine scroll direction
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsScrollingUp(false); // Scrolling down
          } else {
            setIsScrollingUp(true); // Scrolling up
          }
          setLastScrollY(currentScrollY);

          if (productsSection) {
            const rect = productsSection.getBoundingClientRect();
            // Logic for switching between Gift and Quiz based on section visibility
            // But now also respecting scroll direction for visibility
            
            if (rect.top < window.innerHeight * 0.8) {
              // In products section or below
              setShowGift(false);
              // Show quiz only if scrolling up
              setShowQuiz(isScrollingUp);
            } else {
              // Above products section
              // Show gift only if scrolling up
              setShowGift(isScrollingUp);
              setShowQuiz(false);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isScrollingUp]);

  useEffect(() => {
    // Simple A/B/C test: 33% chance for each variant
    const rand = Math.random();
    let variant = "A";
    
    if (rand < 0.33) {
      variant = "A";
      setCtaText(headline.cta);
    } else if (rand < 0.66) {
      variant = "B";
      setCtaText(isTarget35 ? "Zvýšit výkon" : "Rozproudit vášeň");
    } else {
      variant = "C";
      setCtaText(isTarget35 ? "Chci maximální výkon" : "Zažehnout vášeň");
    }
    // In a real app, we would log this exposure to analytics here
    console.log(`A/B Test Variant: ${variant}`);
  }, [headline.cta, isTarget35]);

  return (
    <div className="bg-white relative pb-0 md:pb-0">
      {/* Desktop Header Navigation */}
      <div className="hidden md:flex container mx-auto px-4 md:px-8 py-6 items-center justify-between relative z-20">
        {/* Logo */}
        <a href={affiliateLink} onClick={trackHeroClick} className="flex-shrink-0">
          <Image 
            src="/images/logo.svg" 
            alt="Proerecta" 
            width={96}
            height={96}
            className="h-8 md:h-24 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-bold text-[#2A2A5A] text-sm uppercase tracking-wide">
          <div className="flex items-center gap-4">
            <ProductDropdown gender="men" direction="down">
              <a href={productsLink} className="bg-[#112255] text-white px-5 py-2 rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-md group">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:text-blue-200 transition-colors"><path d="M16 3h5v5"/><path d="m21 3-6.75 6.75"/><circle cx="10" cy="14" r="6"/></svg>
                PRO MUŽE
              </a>
            </ProductDropdown>
            <ProductDropdown gender="women" direction="down">
              <a href={womenLink} className="bg-[#D65A8A] text-white px-5 py-2 rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-md group">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:text-pink-200 transition-colors"><path d="M12 15v7"/><path d="M9 19h6"/><circle cx="12" cy="9" r="6"/></svg>
                PRO ŽENY
              </a>
            </ProductDropdown>
          </div>
          <a href="#reference" className="hover:text-[#D32F2F] transition-colors">Reference</a>
          <a href={aboutLink} className="hover:text-[#D32F2F] transition-colors">O nás</a>
          <a href={contactLink} className="hover:text-[#D32F2F] transition-colors">Kontakty</a>
          <a href="/blog" className="hover:text-[#D32F2F] transition-colors font-bold text-[#D32F2F] flex items-center gap-1">
            💡 Tipy
          </a>
          <a href={blogLink} className="hover:text-[#D32F2F] transition-colors flex items-center gap-1">
            Ostatní <span className="text-[10px]">▼</span>
          </a>
        </nav>

        {/* Cart Button */}
        <a 
          href={affiliateLink} onClick={trackHeroClick}
          className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-colors shadow-lg shadow-red-200"
        >
          <div className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-white text-[#D32F2F] text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">0</span>
          </div>
          Košík je prázdný
        </a>
      </div>

      {/* Hero Content */}
      <div className="relative md:bg-none">
        {/* Mobile Background Image (Full Screen) */}
        <div className="md:hidden absolute top-0 left-0 w-full h-[110%] z-0">
          <Image 
            src={heroImageMobile}
            alt="Background" 
            fill
            className="object-cover object-[center_top]"
            priority
            sizes="100vw"
          />
          {/* Dark Overlay for readability */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#2A2A5A]/40 mix-blend-multiply"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#2A2A5A]/60 via-transparent to-[#2A2A5A]/90"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 mt-0 md:mt-16 relative z-10 pt-8 pb-0 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="max-w-xl space-y-4 md:space-y-8 text-center relative z-10 flex flex-col items-center mx-auto">
              <h1 className="text-3xl md:text-6xl font-bold text-white md:text-[#2A2A5A] leading-[1.1] md:leading-[1.1] drop-shadow-lg md:drop-shadow-none text-center">
                {headline.main} <br/>
                <span className="text-white md:text-[#2A2A5A]">{headline.highlight}</span>
              </h1>
              
              <p className="text-base md:text-xl text-white md:text-slate-600 leading-snug drop-shadow-md md:drop-shadow-none max-w-[90%] md:max-w-none mx-auto">
                {headline.sub}
              </p>

              <div className="pt-4">
                <a 
                  href="#products" 
                  className="inline-flex items-center justify-center gap-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-lg font-bold px-8 py-3 md:px-12 md:py-4 rounded-full shadow-xl shadow-red-900/50 md:shadow-red-200 transition-transform hover:scale-105 w-auto md:w-auto animate-zoom-in-out"
                >
                  {ctaText} <span className="text-3xl md:text-4xl animate-flicker ml-1">🔥</span>
                </a>
              </div>

              {/* Text-based Rating */}
              <div className="flex justify-center pt-1 pb-1">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-[#FFC107]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white md:text-slate-600 font-bold text-sm">4.8/5 (1500+ recenzí)</span>
                </div>
              </div>

              {/* Benefit Icons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 bg-white/10 md:bg-slate-100 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 md:border-slate-200">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-medium text-white md:text-slate-700">Česká značka</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 md:bg-slate-100 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 md:border-slate-200">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-medium text-white md:text-slate-700">Bylinné složení</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 md:bg-slate-100 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 md:border-slate-200">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-medium text-white md:text-slate-700">Diskrétní balení</span>
                </div>
              </div>
            </div>

            {/* Right Column: Image (Desktop Only) */}
            <div className="hidden md:block relative h-[600px] w-full">
              <div 
                className="absolute inset-0 transition-transform duration-100 ease-out"
                style={{ 
                  transform: `translate(${offset.x}px, ${offset.y}px)` 
                }}
              >
                <Image
                  src={heroImageDesktop}
                  alt="Happy Couple"
                  fill
                  className="object-cover object-center rounded-bl-[100px]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* Floating Product Image */}
              <div className="absolute -bottom-12 -left-12 w-[380px] h-[380px] animate-float">
                <Image
                  src="/images/proerecta-klasik-trans-new.png"
                  alt="Proerecta Klasik"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>
              <div className="absolute bottom-24 -left-24 w-[280px] h-[280px] animate-float" style={{ animationDelay: "1s" }}>
                <Image
                  src="/images/proerecta-long-trans.png"
                  alt="Proerecta Long"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>
              <div className="absolute -bottom-8 left-48 w-[240px] h-[240px] animate-float" style={{ animationDelay: "2s" }}>
                <Image
                  src="/images/proerecta-shot-trans.png"
                  alt="Proerecta Shot"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 240px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Icons (Mobile Only) */}
        <div className={`fixed left-4 top-[56%] -translate-y-1/2 z-[9999] flex flex-col gap-3 transition-opacity duration-300 md:hidden ${showGift || showQuiz ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {/* Gift Icon */}
          <div className={`transition-all duration-500 transform ${showGift ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0 absolute'}`}>
            <a 
              href="#products"
              className="bg-[#D32F2F] text-white p-2 rounded-full shadow-lg flex items-center justify-center w-10 h-10 animate-pulse touch-manipulation"
              aria-label="Dárek k nákupu"
            >
              <Gift className="w-5 h-5" />
            </a>
          </div>

          {/* Quiz Icon */}
          <div className={`transition-all duration-500 transform ${showQuiz ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0 absolute'}`}>
            <button 
              onClick={() => {
                const quizSection = document.getElementById('quiz-section');
                if (quizSection) {
                  quizSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-[#112255] text-white p-2 rounded-full shadow-lg flex items-center justify-center w-10 h-10 animate-bounce touch-manipulation"
              aria-label="Spustit průvodce výběrem"
            >
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
