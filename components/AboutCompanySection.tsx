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

            {/* Certifications */}
            <div className="flex flex-wrap gap-6 pt-6 items-center opacity-80">
               <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full border-2 border-slate-200 flex items-center justify-center p-2">
                    <span className="text-[10px] font-bold text-center text-slate-400">GMP<br/>CERTIFIED</span>
                  </div>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full border-2 border-slate-200 flex items-center justify-center p-2">
                    <span className="text-[10px] font-bold text-center text-slate-400">MADE IN<br/>EU</span>
                  </div>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full border-2 border-slate-200 flex items-center justify-center p-2">
                    <span className="text-[10px] font-bold text-center text-slate-400">100%<br/>NATURAL</span>
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
