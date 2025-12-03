import { ShoppingCart, Gift, ArrowRight } from "lucide-react";

export function HeroSection() {
  const affiliateLink = "https://www.proerecta.cz/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c";

  return (
    <div className="bg-white relative overflow-hidden pb-12 md:pb-0">
      {/* Main Header Navigation */}
      <div className="container mx-auto px-4 md:px-8 py-6 flex items-center justify-between relative z-20">
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
      <div className="container mx-auto px-4 md:px-8 mt-8 md:mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text */}
          <div className="max-w-xl space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-[#2A2A5A] leading-[1.1]">
              Přírodní péče o váš <br/>
              <span className="text-[#2A2A5A]">milostný život</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Sex udržuje milostný vztah.<br/>
              Nenechte se o něj obrat.
            </p>

            <div className="pt-4">
              <a 
                href="#products" 
                className="inline-block bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-lg font-bold px-10 py-4 rounded-full shadow-xl shadow-red-200 transition-transform hover:scale-105"
              >
                Vybrat produkt
              </a>
            </div>

            {/* Icons Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 pt-8">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center shadow-sm">
                   {/* Czech Flag Icon Placeholder */}
                   <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-white">
                     <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
                     <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#D32F2F]"></div>
                     <div className="absolute top-0 left-0 w-1/2 h-full bg-[#1E88E5] clip-triangle"></div>
                   </div>
                </div>
                <span className="text-xs font-bold text-[#2A2A5A] text-center leading-tight">Česká<br/>značka</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 text-green-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                    <path d="M12 22c4.97 0 9-4.03 9-9c0-4.97-9-13-9-13S3 8.03 3 13c0 4.97 4.03 9 9 9z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-[#2A2A5A] text-center leading-tight">Bylinné<br/>produkty</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 text-slate-300">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-sm">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 10h18" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-[#2A2A5A] text-center leading-tight">Diskrétní<br/>balení</span>
              </div>
            </div>

            <div className="border-t border-slate-200 w-full my-8"></div>

            {/* Media Logos */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
              <span className="text-sm font-bold text-[#2A2A5A] mr-2">Napsali o nás:</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IDNES.cz_logo.svg" alt="iDNES.cz" className="h-5" />
              <span className="font-serif font-bold text-slate-400 text-xl">doma<span className="text-red-400">.cz</span></span>
              <span className="font-sans font-black text-slate-400 text-xl tracking-tighter">EREKCE.cz</span>
            </div>
          </div>

          {/* Right Column: Image Composition */}
          <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center lg:justify-end">
            
            {/* Background Shape (Mask) */}
            <div className="absolute top-0 right-0 w-[120%] h-full bg-gradient-to-l from-slate-50 to-transparent rounded-l-[10rem] -z-10"></div>

            {/* Couple Image (Masked) */}
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-8 border-white shadow-2xl z-0 mr-12 md:mr-24">
              <img 
                src="/images/hero-couple.jpg" 
                alt="Happy Couple" 
                className="w-full h-full object-cover object-center"
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

      {/* Floating Gift Icon (Left) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 z-30 hidden xl:block">
        <div className="bg-[#333] text-white p-3 rounded-r-xl shadow-lg cursor-pointer hover:bg-[#D32F2F] transition-colors">
          <Gift className="w-8 h-8 text-[#FFC107]" />
        </div>
      </div>
    </div>
  );
}
