import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-2xl mb-4">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <span>Proerecta</span>
            </div>
            <p className="max-w-xs leading-relaxed">
              Přírodní péče o mužské zdraví a sebevědomí. Česká značka s tradicí a ověřenou kvalitou.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Odkazy</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Domů</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Produkty</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">O nás</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Právní informace</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Obchodní podmínky</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ochrana osobních údajů</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Doprava a platba</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reklamace</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Proerecta. Všechna práva vyhrazena.</p>
          <p className="mt-2 text-slate-600">
            Tento web je provozován nezávislým affiliate partnerem.
          </p>
        </div>
      </div>
    </footer>
  );
}
