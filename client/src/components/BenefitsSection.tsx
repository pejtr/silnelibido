import React from 'react';
import { Leaf, Truck, PackageCheck, RefreshCw } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Leaf className="w-12 h-12 text-[#D32F2F]" />,
      title: "Prvotřídní přírodní doplňky",
      description: "Špičková kvalita použitých surovin zaručuje účinnost a bezpečnost produktů Proerecta."
    },
    {
      icon: <Truck className="w-12 h-12 text-[#D32F2F]" />,
      title: "Okamžité odesílání",
      description: "Zboží odesíláme následující den od obdržení vaší objednávky. Zásilku obdržíte nejrychleji, jak je to možné."
    },
    {
      icon: <PackageCheck className="w-12 h-12 text-[#D32F2F]" />,
      title: "Diskrétní balení",
      description: "Balíky zbytečně neoznačujeme reklamou, logem ani letáky. Jen vy víte, co je v balíčku."
    },
    {
      icon: <RefreshCw className="w-12 h-12 text-[#D32F2F]" />,
      title: "30 dní na vrácení zboží",
      description: "Nic nekomplikujeme. Pokud chcete zboží vrátit, do 30 dnů ho vraťte a my vám pošleme peníze na účet."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#112255] mb-12">
          Pomáháme vám žít lepší a spokojenější sexuální život
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-[#D32F2F] mb-3 uppercase">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="w-full max-w-4xl mx-auto h-px bg-gray-300"></div>
      </div>
    </section>
  );
};

export default BenefitsSection;
