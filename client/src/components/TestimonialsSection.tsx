import { Star, User } from "lucide-react";

const testimonials = [
  {
    name: "Jiří K.",
    text: "Jsem velmi spokojen. 49 let, teď mohu posoudit zlepšení výdrže, tvrdosti, lehčí udržení erekce.",
    rating: 5
  },
  {
    name: "Petr F.",
    text: "49 let, v minulosti se nějaké problémy s erekci vyskytly. S Proerectou jsem spokojený. Člověk si i více věří.",
    rating: 5
  }
];

export function TestimonialsSection() {
  const affiliateLink = "https://www.proerecta.cz/reference/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c";

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-50 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 md:mb-16">
          
          {/* Avatars Group */}
          <div className="flex items-center justify-center -space-x-4 mb-8">
            <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg">
              <img src="/images/avatar-1.webp" alt="User" className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = "https://randomuser.me/api/portraits/men/32.jpg"} />
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg z-10">
              <img src="/images/avatar-2.webp" alt="User" className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = "https://randomuser.me/api/portraits/women/44.jpg"} />
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg z-20">
              <img src="/images/avatar-3.webp" alt="User" className="w-full h-full object-cover" onError={(e) => e.currentTarget.src = "https://randomuser.me/api/portraits/men/85.jpg"} />
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-white bg-[#2A2A5A] text-white flex items-center justify-center shadow-lg z-30">
              <div className="text-center leading-none">
                <span className="block text-xs font-bold">500+</span>
                <span className="block text-[8px]">dalších</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2A2A5A] mb-4 leading-tight">
            Přes 95 % českých mužů, žen i párů je s účinky spokojených a další denně přibývají
          </h2>
          
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto mb-8">
            Češi a Slováci se zkušeností s produkty Proerecta mají uspokojivý milostný život a výbornou sexuální kondici.
          </p>

          <a 
            href={affiliateLink}
            className="inline-block bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-red-200 transition-transform hover:scale-105"
          >
            Přejít na reference
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 flex-grow leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
                  <User className="w-6 h-6" />
                </div>
                <div className="font-bold text-slate-900">
                  {testimonial.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
