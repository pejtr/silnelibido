"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useAffiliateLink } from "@/hooks/useAffiliateLink";

export function AboutCompanySection() {
  const { url: aboutUrl, trackClick } = useAffiliateLink("https://www.proerecta.cz/o-nas/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#112255]">
              O společnosti
            </h2>
            <div className="w-20 h-1 bg-[#D32F2F]"></div>
            <p className="text-slate-600 leading-relaxed">
              Jsme česká společnost, která se již od roku 2010 specializuje na vývoj a výrobu přírodních doplňků stravy pro podporu mužského zdraví a vitality. Naším cílem je přinášet účinná a bezpečná řešení bez chemie.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Všechny naše produkty jsou vyráběny v České republice pod přísnou kontrolou a splňují nejpřísnější normy kvality. Spolupracujeme s odborníky na výživu a urologii, abychom zajistili maximální efektivitu našich receptur.
            </p>
            
            <div className="pt-4">
              <a 
                href={aboutUrl}
                onClick={trackClick}
                className="inline-flex items-center gap-2 text-[#D32F2F] font-bold hover:text-[#B71C1C] transition-colors group"
              >
                Více o nás
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* New Badges */}
            <div className="flex flex-wrap gap-4 pt-8 pb-8 border-b border-slate-100">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative shadow-sm">
                    <Image src="/images/czech-flag.jpg" alt="Česká značka" fill className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#112255] font-bold text-sm leading-tight">Česká<br/>značka</span>
                  </div>
               </div>
               
               <div className="w-px h-10 bg-slate-200 mx-2 hidden md:block"></div>
               
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#66BB6A]" stroke="currentColor" strokeWidth="0" fillRule="evenodd" clipRule="evenodd">
                      <path fill="currentColor" d="M12.0002 2.99976C12.0002 2.99976 12.0002 10.0002 16.0002 14.0002C20.0002 18.0002 21.0002 21.0002 21.0002 21.0002C21.0002 21.0002 18.0002 22.0002 14.0002 18.0002C10.0002 14.0002 2.99976 14.0002 2.99976 14.0002C2.99976 14.0002 2.99976 8.00024 6.00024 5.00024C9.00024 2.00024 12.0002 2.99976 12.0002 2.99976Z" />
                      <path stroke="white" strokeWidth="1.5" strokeLinecap="round" d="M12 3C12 3 12 10 16 14" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#112255] font-bold text-sm leading-tight">Bylinné<br/>produkty</span>
                  </div>
               </div>

               <div className="w-px h-10 bg-slate-200 mx-2 hidden md:block"></div>

               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-slate-300" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="5" width="18" height="14" rx="2" fill="#F5F5F5" stroke="#E0E0E0" />
                      <path d="M3 10L12 16L21 10" stroke="#E0E0E0" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#112255] font-bold text-sm leading-tight">Diskrétní<br/>balení</span>
                  </div>
               </div>
            </div>
            
            {/* As Seen On Section (Integrated) */}
            <div className="pt-2">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <h3 className="text-[#112255] font-bold text-base whitespace-nowrap">
                  Napsali o nás:
                </h3>
                
                <div className="flex flex-wrap justify-center items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="relative h-6 w-24">
                    <Image 
                      src="/images/idnes-logo.png" 
                      alt="iDNES.cz" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="relative h-6 w-24">
                    <Image 
                      src="/images/doma-logo.jpg" 
                      alt="doma.cz" 
                      fill
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                  <div className="relative h-6 w-24">
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
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="relative z-10 bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-lg">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-square relative bg-white rounded-xl overflow-hidden shadow-sm p-4 flex items-center justify-center">
                        <Image src="/images/products/proerecta-klasik.webp" alt="Proerecta Klasik" width={150} height={150} className="object-contain" />
                    </div>
                    <div className="aspect-square relative bg-white rounded-xl overflow-hidden shadow-sm p-4 flex items-center justify-center">
                        <Image src="/images/products/proerecta-long.webp" alt="Proerecta Long" width={150} height={150} className="object-contain" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="aspect-square relative bg-white rounded-xl overflow-hidden shadow-sm p-4 flex items-center justify-center">
                        <Image src="/images/products/proerecta-shot.webp" alt="Proerecta Shot" width={150} height={150} className="object-contain" />
                    </div>
                    <div className="aspect-square relative bg-white rounded-xl overflow-hidden shadow-sm p-4 flex items-center justify-center">
                        <Image src="/images/products/proerecta-women.webp" alt="Proerecta Women" width={150} height={150} className="object-contain" />
                    </div>
                  </div>
               </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-50 rounded-full blur-3xl -z-10 opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
