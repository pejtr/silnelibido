import React from 'react';
import { ShieldCheck, CheckCircle, Award } from 'lucide-react';

export const CertificationsSection = () => {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Certifikovaná kvalita a bezpečnost
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Proerecta splňuje nejpřísnější standardy kvality. Vaše zdraví je pro nás na prvním místě.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* GMP Certified */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-[#1e1e4b]">
              <ShieldCheck size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">GMP Certified</h3>
            <p className="text-sm text-slate-600">
              Vyrobeno v souladu se správnou výrobní praxí (Good Manufacturing Practice).
            </p>
          </div>

          {/* Made in EU */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-[#1e1e4b]">
              <Award size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Vyrobeno v EU</h3>
            <p className="text-sm text-slate-600">
              Produkt splňuje všechny legislativní požadavky Evropské unie.
            </p>
          </div>

          {/* Approved by SZÚ */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-[#1e1e4b]">
              <CheckCircle size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Schváleno SZÚ</h3>
            <p className="text-sm text-slate-600">
              Notifikováno a schváleno Státním zdravotním ústavem České republiky.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
