import { ShoppingCart, Gift, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const affiliateLink = "https://www.proerecta.cz/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c";
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white relative overflow-hidden pb-0 md:pb-0">
      {/* Mobile Header (Menu - Logo - Cart) */}
      <div className={`md:hidden bg-white px-4 py-3 flex items-center justify-between relative z-50 transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 w-full shadow-md' : ''}`}>
        <button className="flex flex-col items-center gap-1 text-[#2A2A5A]">
          <Menu className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase">Menu</span>
        </button>
        
        <a href={affiliateLink} className="flex-shrink-0">
          <img 
            src="/images/logo.svg" 
            alt="Proerecta" 
            className="h-6"
          />
        </a>

        {isSticky ? (
          <a 
            href={affiliateLink}
            className="bg-[#D32F2F] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:bg-[#B71C1C] transition-colors uppercase tracking-wide"
          >
            Probudit libido 🔥
          </a>
        ) : (
          <a href={affiliateLink} className="flex flex-col items-center gap-1 text-[#D32F2F] relative">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 fill-[#D32F2F] animate-pulse" />
              <span className="absolute -top-1 -right-1 bg-[#2A2A5A] text-white text-[9px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold animate-bounce">0</span>
            </div>
            <span className="text-[10px] font-bold uppercase">Košík</span>
          </a>
        )}
      </div>

      {/* Red Curve Separator (Mobile Only) */}
      <div className="md:hidden w-full h-4 bg-white relative z-20">
         <div className="absolute top-0 left-0 w-full h-full bg-[#D32F2F] rounded-b-[50%] scale-x-150"></div>
      </div>

      {/* Desktop Header Navigation */}
      <div className="hidden md:flex container mx-auto px-4 md:px-8 py-6 items-center justify-between relative z-20">
        {/* Logo */}
        <a href={affiliateLink} className="flex-shrink-0">
          <img 
            src="/images/logo.svg" 
            alt="Proerecta" 
            className="h-8 md:h-10"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-bold text-[#2A2A5A] text-sm uppercase tracking-wide">
          <a href="#products" className="hover:text-[#D32F2F] transition-colors">Produkty</a>
          <a href="#testimonials" className="hover:text-[#D32F2F] transition-colors">Reference</a>
          <a href="#about" className="hover:text-[#D32F2F] transition-colors">O nás</a>
          <a href="#contact" className="hover:text-[#D32F2F] transition-colors">Kontakty</a>
          <a href="#other" className="hover:text-[#D32F2F] transition-colors flex items-center gap-1">
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

              {/* Mobile Gift Icon */}
              <a href="#products" className="md:hidden fixed top-[calc(30%-11px)] left-0 z-40 transition-transform active:scale-95">
                 <div className="bg-[#333]/80 p-3 rounded-r-xl backdrop-blur-sm shadow-lg border-l-0 border border-white/10">
                    <Gift className="w-8 h-8 text-[#FFC107] animate-pulse" />
                 </div>
              </a>

              <div className="pt-4">
                <a 
                  href="#products" 
                  className="inline-block bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-lg font-bold px-12 py-4 rounded-full shadow-xl shadow-red-900/50 md:shadow-red-200 transition-transform hover:scale-105 w-full md:w-auto"
                >
                  Probudit libido 🔥
                </a>
              </div>

              {/* Icons Row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-12 pt-8 md:pt-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center shadow-sm border-2 border-white/20 md:border-none">
                     {/* Czech Flag Icon Placeholder */}
                     <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white">
                       <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
                       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#D32F2F]"></div>
                       <div className="absolute top-0 left-0 w-1/2 h-full bg-[#1E88E5] clip-triangle"></div>
                     </div>
                  </div>
                  <span className="text-xs font-bold text-white md:text-[#2A2A5A] text-center leading-tight drop-shadow-md md:drop-shadow-none">Česká<br/>značka</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 text-green-400 md:text-green-500 bg-white/10 md:bg-transparent rounded-full p-1 md:p-0 backdrop-blur-sm md:backdrop-blur-none">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                      <path d="M12 22c4.97 0 9-4.03 9-9c0-4.97-9-13-9-13S3 8.03 3 13c0 4.97 4.03 9 9 9z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-white md:text-[#2A2A5A] text-center leading-tight drop-shadow-md md:drop-shadow-none">Bylinné<br/>produkty</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 text-slate-200 md:text-slate-300 bg-white/10 md:bg-transparent rounded-full p-1 md:p-0 backdrop-blur-sm md:backdrop-blur-none">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 10h18" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-white md:text-[#2A2A5A] text-center leading-tight drop-shadow-md md:drop-shadow-none">Diskrétní<br/>balení</span>
                </div>
              </div>

              <div className="hidden md:block border-t border-slate-200 w-full my-8"></div>

              {/* Media Logos - Desktop Only */}
              <div className="hidden md:flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                <span className="text-sm font-bold text-[#2A2A5A] mr-2">Napsali o nás:</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IDNES.cz_logo.svg" alt="iDNES.cz" className="h-5" />
                <span className="font-serif font-bold text-slate-400 text-xl">doma<span className="text-red-400">.cz</span></span>
                <span className="font-sans font-black text-slate-400 text-xl tracking-tighter">EREKCE.cz</span>
              </div>
            </div>

            {/* Right Column: Image Composition (Desktop Only) */}
            <div className="hidden md:flex relative h-[500px] md:h-[600px] w-full items-center justify-center lg:justify-end">
              
              {/* Background Shape (Mask) */}
              <div className="absolute top-0 right-0 w-[120%] h-full bg-gradient-to-l from-slate-50 to-transparent rounded-l-[10rem] -z-10"></div>

              {/* Couple Image (Masked) */}
              <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-0 mr-12 md:mr-24 flex items-center -translate-x-[30px]">
                <img 
                  src="/images/hero-couple.jpg" 
                  alt="Happy Couple" 
                  className="w-full h-full object-cover object-[center_20%] scale-110"
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

      {/* Floating Gift Icon (Desktop Left) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 z-30 hidden xl:block">
        <div className="bg-[#333] text-white p-3 rounded-r-xl shadow-lg cursor-pointer hover:bg-[#D32F2F] transition-colors">
          <Gift className="w-8 h-8 text-[#FFC107]" />
        </div>
      </div>
    </div>
  );
}
