"use client";

import { Leaf, Truck, Package, RotateCcw } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Leaf className="w-8 h-8 text-[#D32F2F]" />,
      title: "Přírodní doplňky",
      description: "Bezpečná a účinná podpora bez chemie"
    },
    {
      icon: <Truck className="w-8 h-8 text-[#D32F2F]" />,
      title: "Doprava zdarma",
      description: "Při objednávce nad 1500 Kč"
    },
    {
      icon: <Package className="w-8 h-8 text-[#D32F2F]" />,
      title: "Diskrétní balení",
      description: "Nikdo nepozná, co je uvnitř"
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-[#D32F2F]" />,
      title: "Garance vrácení",
      description: "Peníze zpět, pokud nebudete spokojeni"
    }
  ];

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 hover:bg-white hover:shadow-md rounded-xl transition-all duration-300 group">
              <div className="mb-4 p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform border border-slate-100">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-[#112255] mb-2 group-hover:text-[#D32F2F] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
