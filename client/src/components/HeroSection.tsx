import { ShoppingCart, Gift, HelpCircle } from "lucide-react";

import { useState, useEffect } from "react";
import { ProductDropdown } from "./ProductDropdown";

export function HeroSection() {
  const affiliateLink = "https://www.proerecta.cz/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c";
  const [ctaText, setCtaText] = useState("Probudit libido");
  const [showGift, setShowGift] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [heroImage, setHeroImage] = useState("/images/hero-couple.webp");
  const [headline, setHeadline] = useState({
    main: "Přírodní péče o váš",
    highlight: "milostný život",
    sub: "Sex udržuje milostný vztah. Nenechte se o něj obrat.",
    cta: "Probudit libido"
  });

  useEffect(() => {
    // Check URL parameters for age targeting
    const params = new URLSearchParams(window.location.search);
    const ageParam = params.get('age');
    
    if (ageParam === '35') {
      setHeroImage("/images/hero-couple-35.webp");
      setHeadline({
        main: "Maximalizujte svůj",
        highlight: "sexuální potenciál",
        sub: "Více energie, tvrdší erekce a lepší výdrž. Buďte vždy připraven.",
        cta: "Chci maximální výkon"
      });
    } else {
      setHeroImage("/images/hero-couple.webp");
      setHeadline({
        main: "Přírodní péče o váš",
        highlight: "milostný život",
        sub: "Sex udržuje milostný vztah. Nenechte se o něj obrat.",
        cta: "Probudit libido"
      });
    }
  }, []);

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
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isScrollingUp]);

  useEffect(() => {
    // Simple A/B/C test: 33% chance for each variant
    const rand = Math.random();
    let variant = "A";
    
    if (rand < 0.33) {
      variant = "A";
      setCtaText("Probudit libido");
    } else if (rand < 0.66) {
      variant = "B";
      setCtaText("Rozproudit vášeň");
    } else {
      variant = "C";
      setCtaText("Zažehnout vášeň");
    }
    // In a real app, we would log this exposure to analytics here
    console.log(`A/B Test Variant: ${variant}`);
  }, []);

  return (
    <div className="bg-white relative pb-0 md:pb-0">
      {/* Desktop Header Navigation */}
      <div className="hidden md:flex container mx-auto px-4 md:px-8 py-6 items-center justify-between relative z-20">
        {/* Logo */}
        <a href={affiliateLink} className="flex-shrink-0">
          <img 
            src="/images/logo.svg" 
            alt="Proerecta" 
            className="h-8 md:h-24"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-bold text-[#2A2A5A] text-sm uppercase tracking-wide">
          <div className="flex items-center gap-4">
            <ProductDropdown gender="men">
              <a href="https://www.proerecta.cz/produkty/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" className="bg-[#112255] text-white px-5 py-2 rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-md group">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:text-blue-200 transition-colors"><path d="M16 3h5v5"/><path d="m21 3-6.75 6.75"/><circle cx="10" cy="14" r="6"/></svg>
                PRO MUŽE
              </a>
            </ProductDropdown>
            <ProductDropdown gender="women">
              <a href="https://www.feminus.cz/blog/estrogen/maca-a-jeji-podivuhodne-ucinky-na-zenske-telo/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=a812cc02" className="bg-[#D65A8A] text-white px-5 py-2 rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-md group">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:text-pink-200 transition-colors"><path d="M12 15v7"/><path d="M9 19h6"/><circle cx="12" cy="9" r="6"/></svg>
                PRO ŽENY
              </a>
            </ProductDropdown>
          </div>
          <a href="#reference" className="hover:text-[#D32F2F] transition-colors">Reference</a>
          <a href="https://www.proerecta.cz/o-nas/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" className="hover:text-[#D32F2F] transition-colors">O nás</a>
          <a href="https://www.proerecta.cz/kontakty/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" className="hover:text-[#D32F2F] transition-colors">Kontakty</a>
          <a href="https://www.proerecta.cz/blog/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" className="hover:text-[#D32F2F] transition-colors flex items-center gap-1">
            Ostatní <span className="text-[10px]">▼</span>
          </a>
        </nav>

        {/* Cart Button */}
        <a 
          href={affiliateLink}
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
          <img 
            src={heroImage}
            alt="Background" 
            className="w-full h-full object-cover object-[center_top]"
            fetchPriority="high"
            decoding="async"
          />
          {/* Dark Overlay for readability */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#2A2A5A]/40 mix-blend-multiply"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#2A2A5A]/60 via-transparent to-[#2A2A5A]/90"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 mt-0 md:mt-16 relative z-10 pt-8 pb-0 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="max-w-xl space-y-4 md:space-y-8 text-left relative z-10">
              <h1 className="text-3xl md:text-6xl font-bold text-white md:text-[#2A2A5A] leading-[1.1] md:leading-[1.1] drop-shadow-lg md:drop-shadow-none">
                {headline.main} <br/>
                <span className="text-white md:text-[#2A2A5A]">{headline.highlight}</span>
              </h1>
              
              <p className="text-base md:text-xl text-white md:text-slate-600 leading-snug drop-shadow-md md:drop-shadow-none max-w-[90%] md:max-w-none">
                {headline.sub}
              </p>

              



              <div className="pt-4">
                <a 
                  href="#products" 
                  className="inline-flex items-center justify-center gap-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-lg font-bold px-8 py-3 md:px-12 md:py-4 rounded-full shadow-xl shadow-red-900/50 md:shadow-red-200 transition-transform hover:scale-105 w-auto md:w-auto animate-zoom-in-out"
                >
                  {headline.cta} <span className="text-3xl md:text-4xl animate-flicker ml-1">🔥</span>
                </a>
              </div>

              {/* Text-based Rating */}
              <div className="flex justify-start pt-1 pb-1">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-[#FFC107]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white md:text-[#2A2A5A] font-bold text-sm drop-shadow-md md:drop-shadow-none">
                    4.8/5
                  </span>
                </div>
              </div>

              {/* Icons Row */}
              <div className="flex flex-wrap justify-start gap-2 md:gap-12 pt-2 md:pt-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-white/10 md:bg-transparent flex items-center justify-center backdrop-blur-sm md:backdrop-blur-none border border-white/20 md:border-none">
                     <img src="/images/icon-czech-flag-round.png" alt="Česká značka" className="w-12 h-12 object-contain drop-shadow-md" />
                  </div>
                  <span className="text-xs font-bold text-white md:text-[#2A2A5A] text-center leading-tight drop-shadow-md md:drop-shadow-none">Česká<br/>značka</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-white/10 md:bg-transparent flex items-center justify-center backdrop-blur-sm md:backdrop-blur-none border border-white/20 md:border-none">
                    <img src="/images/icon-herbal-leaf-round.png" alt="Bylinné produkty" className="w-12 h-12 object-contain drop-shadow-md" />
                  </div>
                  <span className="text-xs font-bold text-white md:text-[#2A2A5A] text-center leading-tight drop-shadow-md md:drop-shadow-none">Bylinné<br/>produkty</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-white/10 md:bg-transparent flex items-center justify-center backdrop-blur-sm md:backdrop-blur-none border border-white/20 md:border-none">
                    <img src="/images/icon-discrete-box-round.png" alt="Diskrétní balení" className="w-12 h-12 object-contain drop-shadow-md" />
                  </div>
                  <span className="text-xs font-bold text-white md:text-[#2A2A5A] text-center leading-tight drop-shadow-md md:drop-shadow-none">Diskrétní<br/>balení</span>
                </div>
              </div>

              {/* Mobile Product Image (Bottom Right) */}
              <div className="md:hidden absolute bottom-[-40px] right-[-80px] w-[220px] z-20 flex items-end">
                <div className="w-[30%] relative z-10 translate-x-8">
                  <img 
                    src="/images/proerecta-shot-trans.png" 
                    alt="Proerecta Shot" 
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
                <div className="w-[70%] -ml-8 mb-2 relative z-0">
                  <img 
                   src="/images/proerecta-klasik-trans-new.webp" 
                    alt="Proerecta Klasik" 
                    className="w-full h-auto drop-shadow-xl"
                  />
                </div>
              </div>

              <div className="hidden md:block border-t border-slate-200 w-full my-8"></div>

              {/* Media Logos - Desktop Only */}
              <div className="hidden md:flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                <span className="text-sm font-bold text-[#2A2A5A] mr-2">Napsali o nás:</span>
                <div className="flex items-center gap-8 h-8">
                  <img src="/images/idnes-logo.png" alt="iDNES.cz" className="h-full object-contain" loading="lazy" />
                  <span className="font-serif font-bold text-slate-400 text-2xl flex items-center h-full">doma<span className="text-red-400">.cz</span></span>
                  <span className="font-sans font-black text-slate-400 text-2xl tracking-tighter flex items-center h-full">EREKCE.cz</span>
                </div>
              </div>
            </div>

            {/* Right Column: Image Composition (Desktop Only) */}
            <div className="hidden md:flex relative h-[500px] md:h-[600px] w-full items-center justify-center lg:justify-end">
              
              {/* Background Shape (Mask) */}
              <div className="absolute top-0 right-0 w-[120%] h-full bg-gradient-to-l from-slate-50 to-transparent rounded-l-[10rem] -z-10"></div>

              {/* Couple Image (Masked) */}
              <div className="relative w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-0 mr-12 md:mr-24 flex items-center -translate-x-[151px]">
                <img 
                  src={heroImage}
                  alt="Happy Couple" 
                  className="w-full h-full object-cover object-[center_20%] scale-125 -scale-x-100"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>

              {/* Product Image (Overlay - Left - Small Shot) */}
              <div 
                className="absolute bottom-0 left-[-50px] md:left-[-150px] lg:left-[-280px] w-[280px] md:w-[400px] lg:w-[550px] z-20 transform translate-y-10 flex items-end animate-float transition-transform duration-100 ease-out group"
                style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
              >
                <div className="w-[35%] relative z-10 translate-x-8">
                  <img 
                    src="/images/proerecta-shot-trans.png" 
                    alt="Proerecta Shot" 
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
                {/* Long Product (Much Larger, next to Shot) */}
                <div className="w-[65%] -ml-16 mb-4 relative z-0 group/product">
                  <img 
                    src="/images/proerecta-klasik-trans-new.webp" 
                    alt="Proerecta Klasik" 
                    className="w-full h-auto drop-shadow-[0_25px_25px_rgba(0,0,0,0.35)]"
                  />
                  
                  {/* Interactive Tooltip */}
                  <div className="absolute top-1/4 right-4 z-30">
                    <div className="relative group/tooltip">
                      <button className="w-6 h-6 bg-white/90 backdrop-blur text-[#2A2A5A] rounded-full shadow-lg flex items-center justify-center font-bold text-xs border border-[#2A2A5A]/10 hover:scale-110 transition-transform cursor-help">
                        i
                      </button>
                      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-48 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 translate-x-2 group-hover/tooltip:translate-x-0 text-left">
                        <p className="text-xs font-bold text-[#2A2A5A] mb-1">Proerecta Klasik</p>
                        <p className="text-[10px] text-slate-600 leading-tight">
                          Okamžitá podpora erekce do 45 minut. Užívejte 1-2 tobolky před akcí.
                        </p>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-white rotate-45 border-l border-b border-slate-100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
              
              {/* Red Arrow Decoration */}
              <div className="absolute top-1/4 right-0 w-24 h-24 z-10 hidden lg:block">
                 <svg viewBox="0 0 100 100" fill="none" stroke="#D32F2F" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M20 80 C 50 80, 80 50, 80 20 M 80 20 L 50 20 M 80 20 L 80 50" />
                 </svg>
              </div>

              {/* Floating Leaves */}
              <div className="absolute bottom-20 right-[300px] w-16 h-16 z-30 animate-bounce duration-[3000ms]">
                 <img src="/images/zensen.png" alt="Leaf" className="w-full h-full object-contain opacity-80 rotate-45" />
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* Sticky Gift Icon (Desktop Only) - Moved to root for z-index fix */}
      <a 
        href="#products" 
        className={`hidden md:block fixed top-1/2 -translate-y-1/2 left-0 z-[9999] transition-all duration-500 active:scale-95 hover:scale-105 group touch-manipulation opacity-80 hover:opacity-100 ${showGift ? 'translate-x-0' : '-translate-x-full'}`}
      >
         <div className="bg-[#333]/80 p-2 rounded-r-xl backdrop-blur-sm shadow-lg border-l-0 border border-white/10 group-hover:bg-[#333]">
            <Gift className="w-7 h-7 text-[#FFC107] animate-pulse group-hover:animate-none" />
         </div>
      </a>

      {/* Sticky Quiz Icon (Mobile & Desktop) - Appears when Gift disappears - Moved to root for z-index fix */}
      <button 
        onClick={(e) => {
          e.preventDefault();
          const quizElement = document.getElementById('quiz-section');
          if (quizElement) {
            const targetPosition = quizElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }}
        className={`fixed top-[calc(56%+2px)] md:top-1/2 -translate-y-1/2 left-0 z-[9999] transition-all duration-500 active:scale-95 md:hover:scale-105 group touch-manipulation opacity-100 md:opacity-80 md:hover:opacity-100 ${showQuiz ? 'translate-x-0' : '-translate-x-full'}`}
        aria-label="Spustit kvíz"
      >
         <div className="bg-[#2A2A5A]/90 p-2 rounded-r-xl backdrop-blur-sm shadow-lg border-l-0 border border-white/10 md:group-hover:bg-[#2A2A5A]">
            <HelpCircle className="w-7 h-7 text-white animate-bounce md:group-hover:animate-none" />
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white text-[#2A2A5A] text-xs font-bold px-2 py-1 rounded shadow-md opacity-0 md:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Kvíz: Vyberte si produkt
            </span>
         </div>
      </button>
    </div>
  );
}