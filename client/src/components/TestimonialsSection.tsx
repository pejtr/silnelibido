import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Petr F.",
    age: 49,
    text: "Po čtyřicítce už to nebylo ono. Stres v práci, únava... Zkusil jsem Proerectu a lituju, že jsem to neudělal dřív. Manželka je nadšená a já taky!",
    rating: 5
  },
  {
    name: "Jiří K.",
    age: 38,
    text: "Měl jsem obavy z nové partnerky, nechtěl jsem selhat. Proerecta mi dodala jistotu, kterou jsem potřeboval. Vše proběhlo na jedničku s hvězdičkou.",
    rating: 5
  },
  {
    name: "Martin S.",
    age: 52,
    text: "Zkoušel jsem různé doplňky, ale většina nefungovala. Proerecta Klasik mě překvapila rychlým nástupem. Konečně se cítím zase jako chlap.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Přes 150 000 spokojených mužů
            </h2>
            <p className="text-lg text-slate-600">
              Nejste v tom sami. Tisíce mužů v Česku řeší stejný problém a našli řešení, které funguje. Přidejte se k nim a získejte zpět své sebevědomí.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-3xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-slate-600">Spokojenost zákazníků</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-slate-600">Let na českém trhu</div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 grid gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-4">"{testimonial.text}"</p>
                <div className="font-bold text-slate-900">
                  {testimonial.name}, <span className="text-slate-500 font-normal">{testimonial.age} let</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
