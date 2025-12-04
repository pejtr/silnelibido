import { ShoppingCart, Gift, HelpCircle } from "lucide-react";

import { useState, useEffect } from "react";

export function HeroSection() {
  const affiliateLink = "https://www.proerecta.cz/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c";
  const [ctaText, setCtaText] = useState("Probudit libido");
  const [showGift, setShowGift] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        const rect = productsSection.getBoundingClientRect();
        // Hide if the top of products section is near or above the viewport bottom
        // Using window.innerHeight * 0.8 to hide it a bit before it fully enters view
        if (rect.top < window.innerHeight * 0.8) {
          setShowGift(false);
          setShowQuiz(true);
        } else {
          setShowGift(true);
          setShowQuiz(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simple A/B test: 50% chance for each variant
    const variant = Math.random() > 0.5 ? "A" : "B";
    if (variant === "B") {
      setCtaText("Rozproudit libido");
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
          <div className="flex items-center gap-6">
            <a href="https://www.proerecta.cz/produkty/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" className="hover:text-[#D32F2F] transition-colors flex items-center gap-1">
              Pro muže <span className="text-xs">›</span>
            </a>
            <a href="https://www.proerecta.cz/produkt/proerecta-women/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" className="hover:text-[#D32F2F] transition-colors flex items-center gap-1">
              Pro ženy <span className="text-xs">›</span>
            </a>
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
      <div className="relative">
        {/* Mobile Background Image */}
        <div className="md:hidden absolute top-0 left-0 w-full h-full z-0">
          <img 
            src="/images/hero-couple.jpg" 
            alt="Background" 
            className="w-full h-full object-cover object-[center_20%]"
            fetchPriority="high"
            decoding="async"
          />
          {/* Blue Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#2A2A5A]/60 mix-blend-multiply"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#2A2A5A]/80 via-transparent to-[#2A2A5A]/90"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 mt-0 md:mt-16 relative z-10 pt-12 pb-24 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="max-w-xl space-y-6 md:space-y-8 text-center lg:text-left relative z-10">
              <h1 className="text-3xl md:text-6xl font-bold text-white md:text-[#2A2A5A] leading-[1.2] md:leading-[1.1] drop-shadow-lg md:drop-shadow-none">
                Přírodní péče o váš <br/>
                <span className="text-white md:text-[#2A2A5A]">milostný život</span>
              </h1>
              
              <p className="text-base md:text-xl text-white/90 md:text-slate-600 leading-relaxed drop-shadow-md md:drop-shadow-none max-w-xs mx-auto md:max-w-none">
                Sex udržuje milostný vztah.<br className="hidden md:block"/>
                Nenechte se o něj obrat.
              </p>

              {/* Sticky Gift Icon (Mobile & Desktop) */}
              <a 
                href="#products" 
                className={`fixed top-1/2 -translate-y-1/2 left-0 z-[100] transition-all duration-500 active:scale-95 hover:scale-105 group ${showGift ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
              >
                 <div className="bg-[#333]/80 p-3 rounded-r-xl backdrop-blur-sm shadow-lg border-l-0 border border-white/10 group-hover:bg-[#333]">
                    <Gift className="w-8 h-8 text-[#FFC107] animate-pulse group-hover:animate-none" />
                 </div>
              </a>

              {/* Sticky Quiz Icon (Mobile & Desktop) - Appears when Gift disappears */}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  const quizElement = document.getElementById('quiz');
                  if (quizElement) {
                    const targetPosition = quizElement.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`fixed top-1/2 -translate-y-1/2 left-0 z-[100] transition-all duration-500 active:scale-95 hover:scale-105 group ${showQuiz ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                aria-label="Spustit kvíz"
              >
                 <div className="bg-[#2A2A5A]/90 p-3 rounded-r-xl backdrop-blur-sm shadow-lg border-l-0 border border-white/10 group-hover:bg-[#2A2A5A]">
                    <HelpCircle className="w-8 h-8 text-white animate-bounce group-hover:animate-none" />
                    <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-white text-[#2A2A5A] text-xs font-bold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      Kvíz: Vyberte si produkt
                    </span>
                 </div>
              </button>



              <div className="pt-4">
                <a 
                  href="#products" 
                  className="inline-flex items-center justify-center gap-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-lg font-bold px-12 py-4 rounded-full shadow-xl shadow-red-900/50 md:shadow-red-200 transition-transform hover:scale-105 w-full md:w-auto animate-zoom-in-out"
                >
                  {ctaText} <span className="text-4xl animate-flicker ml-1">🔥</span>
                </a>
              </div>

              {/* Text-based Rating */}
              <div className="flex justify-center lg:justify-start pt-1 pb-1">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-[#FFC107]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white md:text-[#2A2A5A] font-bold text-sm drop-shadow-md md:drop-shadow-none">
                    4.8/5 <span className="font-normal opacity-90">(1500+ recenzí)</span>
                  </span>
                </div>
              </div>

              {/* Icons Row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-12 pt-4 md:pt-4">
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

              <div className="hidden md:block border-t border-slate-200 w-full my-8"></div>

              {/* Media Logos - Desktop Only */}
              <div className="hidden md:flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                <span className="text-sm font-bold text-[#2A2A5A] mr-2">Napsali o nás:</span>
                <img src="/images/idnes-logo.png" alt="iDNES.cz" className="h-16 object-contain" loading="lazy" />
                <span className="font-serif font-bold text-slate-400 text-xl">doma<span className="text-red-400">.cz</span></span>
                <span className="font-sans font-black text-slate-400 text-xl tracking-tighter">EREKCE.cz</span>
              </div>
            </div>

            {/* Right Column: Image Composition (Desktop Only) */}
            <div className="hidden md:flex relative h-[500px] md:h-[600px] w-full items-center justify-center lg:justify-end">
              
              {/* Background Shape (Mask) */}
              <div className="absolute top-0 right-0 w-[120%] h-full bg-gradient-to-l from-slate-50 to-transparent rounded-l-[10rem] -z-10"></div>

              {/* Couple Image (Masked) */}
              <div className="relative w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-0 mr-12 md:mr-24 flex items-center -translate-x-[151px]">
                <img 
                  src="/images/hero-couple.jpg" 
                  alt="Happy Couple" 
                  className="w-full h-full object-cover object-[center_20%] scale-125"
                />
              </div>

              {/* Product Image (Overlay) */}
              <div className="absolute bottom-0 right-0 md:right-12 w-[200px] md:w-[280px] z-20 transform translate-y-10">
                <img 
                  src="/images/proerecta-shot-trans.png" 
                  alt="Proerecta Shot" 
                  className="w-full h-auto drop-shadow-2xl"
                />
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


    </div>
  );
}
