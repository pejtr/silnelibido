"use client";

import Image from "next/image";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import { useAffiliateLink } from "@/hooks/useAffiliateLink";

export function Footer() {
  const { url: homeLink, trackClick } = useAffiliateLink("https://www.proerecta.cz/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c");
  
  const footerLinks = {
    faq: [
      { text: "Jak dlouho Proerecta účinkuje?", url: "https://www.proerecta.cz/faq/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c#ucinky" },
      { text: "Má Proerecta nějaké omezení užívání?", url: "https://www.proerecta.cz/faq/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c#omezeni" },
      { text: "Jak je Proerecta zabalená a označená?", url: "https://www.proerecta.cz/faq/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c#baleni" },
      { text: "Pomůže mi Proerecta i ve vysokém věku?", url: "https://www.proerecta.cz/faq/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c#vek" },
      { text: "Není to jen placebo?", url: "https://www.proerecta.cz/faq/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c#placebo" },
    ],
    interest: [
      { text: "Diskrétní balení Proerecta", url: "https://www.proerecta.cz/diskretni-baleni/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" },
      { text: "Doprava a platba", url: "https://www.proerecta.cz/doprava-a-platba/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" },
      { text: "Garance vrácení peněz", url: "https://www.proerecta.cz/garance-vraceni-penez/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" },
      { text: "Často kladené otázky", url: "https://www.proerecta.cz/faq/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" },
    ],
    company: [
      { text: "Reference", url: "https://www.proerecta.cz/reference/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" },
      { text: "Produkty", url: "https://www.proerecta.cz/produkty/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" },
      { text: "O nás", url: "https://www.proerecta.cz/o-nas/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" },
      { text: "Kontakty", url: "https://www.proerecta.cz/kontakty/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" },
    ]
  };

  return (
    <footer className="bg-[#112255] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <a href={homeLink} onClick={trackClick} className="block">
              <Image src="/images/proerecta-logo-white.svg" alt="Proerecta" width={180} height={40} className="h-10 w-auto" />
            </a>
            <p className="text-sm text-slate-300 font-medium">the all natural solution</p>
            <div className="flex gap-4">
              <a href="#" className="bg-[#B71C1C] text-white p-1.5 rounded hover:bg-[#D32F2F] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-[#B71C1C] text-white p-1.5 rounded hover:bg-[#D32F2F] transition-colors">
                <Instagram size={18} />
              </a>
            </div>
            <div className="space-y-3 pt-2">
              <a href="tel:+420607657370" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors font-medium">
                <Phone size={18} className="text-[#B71C1C]" />
                +420 607 657 370
              </a>
              <a href="mailto:info@proerecta.cz" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors font-medium">
                <Mail size={18} className="text-[#B71C1C]" />
                info@proerecta.cz
              </a>
            </div>
          </div>

          {/* FAQ Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Často se lidé ptají</h3>
            <ul className="space-y-3">
              {footerLinks.faq.map((link, i) => (
                <li key={i}>
                  <a href={link.url} className="text-slate-300 hover:text-white text-sm underline decoration-slate-500 hover:decoration-white transition-all">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Interest Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Může vás zajímat</h3>
            <ul className="space-y-3">
              {footerLinks.interest.map((link, i) => (
                <li key={i}>
                  <a href={link.url} className="text-slate-300 hover:text-white text-sm underline decoration-slate-500 hover:decoration-white transition-all">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Proerecta</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a href={link.url} className="text-slate-300 hover:text-white text-sm underline decoration-slate-500 hover:decoration-white transition-all">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-slate-400 space-y-1">
            <p><span className="font-bold text-slate-300">Provozuje:</span> eMarkest, s.r.o.</p>
            <p>Domažlická 1232/3</p>
            <p>130 00 Praha 3, ČR</p>
          </div>
          
          <div className="text-xs text-slate-400 space-y-1">
            <p><span className="font-bold text-slate-300">IČ:</span> 24272973</p>
            <p><span className="font-bold text-slate-300">DIČ:</span> CZ24272973</p>
          </div>

          <div className="flex items-center gap-4 bg-white p-2 rounded">
            <Image src="/images/visa-logo.png" alt="Visa" width={50} height={30} className="h-6 w-auto object-contain" />
            <Image src="/images/mastercard-logo.png" alt="Mastercard" width={50} height={30} className="h-6 w-auto object-contain" />
            <Image src="/images/balikovna-logo.png" alt="Balíkovna" width={80} height={30} className="h-6 w-auto object-contain" />
            <Image src="/images/gls-logo.png" alt="GLS" width={60} height={30} className="h-6 w-auto object-contain" />
            <Image src="/images/dpd-logo.png" alt="DPD" width={60} height={30} className="h-6 w-auto object-contain" />
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500 border-t border-slate-800 pt-4">
          © 2025 eMarkest, s.r.o. • <a href="#" className="hover:text-white underline">Zpracování osobních údajů</a> • <a href="#" className="hover:text-white underline">Obchodní podmínky</a>
        </div>
      </div>
    </footer>
  );
}
