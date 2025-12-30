"use client";

import { ProductCard } from "./ProductCard";
import productsData from "../data/products.json";

export function ProductsSection() {
  return (
    <section id="products" className="pt-12 pb-24 bg-slate-50 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Vyberte si řešení pro problémy s erekcí
          </h2>
          <p className="text-lg text-slate-600">
            Ať už potřebujete okamžitou podporu nebo dlouhodobou péči, máme pro vás řešení.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
          {productsData.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              popular={index === 0} // Mark the first one (Klasik) as popular/default
              className="w-full max-w-md"
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500 mb-4">
            * Výsledky se mohou individuálně lišit. Doplněk stravy nenahrazuje pestrou stravu.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Skladem - odesíláme do 24 hodin
          </div>
        </div>
      </div>
    </section>
  );
}
