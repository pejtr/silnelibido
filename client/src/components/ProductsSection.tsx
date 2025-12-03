import { ProductCard } from "./ProductCard";
import productsData from "../data/products.json";

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Stylish Down Arrow */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-red-100/50 rounded-full blur-xl animate-pulse"></div>
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#D32F2F" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-12 h-12 animate-bounce relative z-10 drop-shadow-sm"
              >
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Vyberte si své řešení
          </h2>
          <p className="text-lg text-slate-600">
            Ať už potřebujete okamžitou podporu nebo dlouhodobou péči, máme pro vás řešení.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {productsData.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              popular={index === 0} // Mark the first one (Klasik) as popular/default
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
