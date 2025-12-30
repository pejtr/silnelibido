"use client";

import Image from "next/image";

export function AsSeenOnSection() {
  return (
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <h3 className="text-[#112255] font-bold text-lg md:text-xl whitespace-nowrap">
            Napsali o nás:
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="relative h-8 w-32">
              <Image 
                src="/images/idnes-logo.png" 
                alt="iDNES.cz" 
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-8 w-32">
              <Image 
                src="/images/doma-logo.jpg" 
                alt="doma.cz" 
                fill
                className="object-contain mix-blend-multiply"
              />
            </div>
            <div className="relative h-8 w-32">
              <Image 
                src="/images/erekce-logo.jpg" 
                alt="EREKCE.cz" 
                fill
                className="object-contain mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
