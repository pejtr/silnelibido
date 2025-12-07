"use client";

import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const affiliateLink = "https://www.proerecta.cz/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c";

  return (
    <footer className="bg-[#F8F9FE] text-[#2A2A5A] pt-16 pb-8 mx-0 md:mx-4 mb-0 md:mb-4 rounded-b-[2.5rem] relative z-10">
      <div className="container px-4 md:px-8">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Logo & Contact */}
          <div className="space-y-6">
            <img 
              src="/images/logo.svg" 
              alt="Proerecta" 
              className="h-8"
            />
            <p className="text-sm text-slate-500 font-medium">the all natural solution for your sexual health</p>
            
            <div className="flex gap-4 text-[#D32F2F]">
              <Facebook className="w-6 h-6 cursor-pointer hover:opacity-80" />
              <Instagram className="w-6 h-6 cursor-pointer hover:opacity-80" />
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 space-y-3 inline-block min-w-[240px]">
              <a href="tel:+420607657370" className="flex items-center gap-3 font-bold hover:text-[#D32F2F] transition-colors">
                <Phone className="w-5 h-5 text-[#2A2A5A]" />
                +420 607 657 370
              </a>
              <a href="mailto:info@proerecta.cz" className="flex items-center gap-3 font-bold hover:text-[#D32F2F] transition-colors">
                <Mail className="w-5 h-5 text-[#2A2A5A]" />
                info@proerecta.cz
              </a>
            </div>
          </div>

          {/* Column 2: FAQ */}
          <div>
            <h3 className="font-extrabold text-lg mb-6">Často se lidé ptají</h3>
            <ul className="space-y-3 text-sm font-medium underline decoration-slate-300 underline-offset-4">
              <li><a href={affiliateLink} className="hover:text-[#D32F2F] hover:decoration-[#D32F2F] transition-all">Jak dlouho Proerecta účinkuje?</a></li>
              <li><a href={affiliateLink} className="hover:text-[#D32F2F] hover:decoration-[#D32F2F] transition-all">Má Proerecta nějaké omezení užívání?</a></li>
              <li><a href={affiliateLink} className="hover:text-[#D32F2F] hover:decoration-[#D32F2F] transition-all">Jak je Proerecta zabalená a označená?</a></li>
              <li><a href={affiliateLink} className="hover:text-[#D32F2F] hover:decoration-[#D32F2F] transition-all">Pomůže mi Proerecta i ve vysokém věku?</a></li>
              <li><a href={affiliateLink} className="hover:text-[#D32F2F] hover:decoration-[#D32F2F] transition-all">Není to jen placebo?</a></li>
            </ul>
          </div>

          {/* Column 3: Interest */}
          <div>
            <h3 className="font-extrabold text-lg mb-6">Může vás zajímat</h3>
            <ul className="space-y-3 text-sm font-medium underline decoration-slate-300 underline-offset-4">
              <li><a href={affiliateLink} className="hover:text-[#D32F2F] hover:decoration-[#D32F2F] transition-all">Diskrétní balení Proerecta</a></li>
              <li><a href={affiliateLink} className="hover:text-[#D32F2F] hover:decoration-[#D32F2F] transition-all">Doprava a platba</a></li>
              <li><a href={affiliateLink} className="hover:text-[#D32F2F] hover:decoration-[#D32F2F] transition-all">Garance vrácení peněz</a></li>
              <li><a href={affiliateLink} className="hover:text-[#D32F2F] hover:decoration-[#D32F2F] transition-all">Často kladené otázky</a></li>
            </ul>
          </div>

          {/* Column 4: Menu */}
          <div>
            <h3 className="font-extrabold text-lg mb-6">Proerecta</h3>
            <ul className="space-y-3 text-sm font-medium underline decoration-slate-300 underline-offset-4">
              <li><Link href="/blog" className="hover:text-[#D32F2F] hover:decoration-[#D32F2F] transition-all font-bold text-[#D32F2F]">Magazín Silné Libido</Link></li>
              <li><a href={affiliateLink} className="hover:text-[#D32F2F] hover:decoration-[#D32F2F] transition-all">Reference</a></li>
              <li><a href={affiliateLink} className="hover:text-[#D32F2F] hover:decoration-[#D32F2F] transition-all">Produkty</a></li>
              <li><a href={affiliateLink} className="hover:text-[#D32F2F] hover:decoration-[#D32F2F] transition-all">O nás</a></li>
              <li><a href={affiliateLink} className="hover:text-[#D32F2F] hover:decoration-[#D32F2F] transition-all">Kontakty</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200 w-full mb-8"></div>

        {/* Bottom Section: Company Info & Logos */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 text-sm text-slate-600">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            <div><span className="font-bold">Provozuje:</span> eMarkest, s.r.o.</div>
            <div><span className="font-bold">IČ:</span> 24272973</div>
            <div className="pl-[78px]">Domažlická 1232/3</div>
            <div><span className="font-bold">DIČ:</span> CZ24272973</div>
            <div className="pl-[78px]">130 00 3, ČR</div>
          </div>

          <div className="flex gap-2 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
            {/* Payment Logos Placeholder - using divs to simulate layout */}
            <div className="h-8 w-12 bg-white border border-slate-200 rounded flex items-center justify-center font-bold text-[10px] text-blue-800 italic">VISA</div>
            <div className="h-8 w-12 bg-white border border-slate-200 rounded flex items-center justify-center font-bold text-[10px] text-red-600">MC</div>
            <div className="h-8 w-20 bg-white border border-slate-200 rounded flex items-center justify-center font-bold text-[10px] text-blue-600">Balíkovna</div>
            <div className="h-8 w-16 bg-[#FDB913] border border-slate-200 rounded flex items-center justify-center font-bold text-[10px] text-[#2A2A5A]">GLS</div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500 border-t border-slate-200 pt-4">
          &copy; {new Date().getFullYear()} eMarkest, s.r.o. • <a href="#" className="underline hover:text-[#D32F2F]">Zpracování osobních údajů</a> • <a href="#" className="underline hover:text-[#D32F2F]">Obchodní podmínky</a>
        </div>

      </div>
    </footer>
  );
}
