import Image from "next/image";
import Link from "next/link";
import { Check, Star, ShoppingCart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  features: string[];
  badge?: string | { text: string; color: string };
  url: string;
  // Optional fields that might not be in JSON
  rating?: number;
  reviewsCount?: number;
}

interface ProductShowcaseProps {
  products: Product[];
}

export function ProductShowcase({ products }: ProductShowcaseProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A2A5A] mb-4">
            Vyberte si řešení na míru
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ať už potřebujete okamžitou podporu erekce, dlouhodobou péči o prostatu nebo zvýšení libida, máme pro vás řešení.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => {
            // Handle badge which can be string or object in JSON
            const badgeText = typeof product.badge === 'object' ? product.badge?.text : product.badge;
            const badgeColor = typeof product.badge === 'object' ? product.badge?.color : '#D32F2F';
            
            // Default values for missing fields
            const rating = product.rating || 4.8;
            const reviewsCount = product.reviewsCount || 150 + Math.floor(Math.random() * 100);

            return (
              <div 
                key={product.id}
                className={`relative bg-white rounded-2xl border-2 transition-all duration-300 flex flex-col ${
                  badgeText 
                    ? "border-[#D32F2F] shadow-xl scale-105 z-10" 
                    : "border-slate-100 shadow-lg hover:border-slate-200 hover:shadow-xl"
                }`}
                style={badgeText && typeof product.badge === 'object' ? { borderColor: badgeColor } : {}}
              >
                {badgeText && (
                  <div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap"
                    style={{ backgroundColor: badgeColor || '#D32F2F' }}
                  >
                    {badgeText}
                  </div>
                )}

                <div className="p-6 flex-grow flex flex-col">
                  <div className="relative h-48 mb-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-2 justify-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-current" : "text-slate-300"}`} />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">({reviewsCount} recenzí)</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#2A2A5A] mb-2 text-center">{product.name}</h3>
                  <p className="text-slate-600 text-sm text-center mb-6">{product.description}</p>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6 border-t border-slate-100 text-center">
                    <div className="text-3xl font-bold text-[#2A2A5A] mb-4">
                      {product.price} Kč
                    </div>
                    
                    <Link href={product.url} target="_blank" rel="noopener noreferrer">
                      <button 
                        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-white shadow-lg hover:shadow-xl`}
                        style={{ backgroundColor: badgeText ? (badgeColor || '#D32F2F') : '#0f172a' }}
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Koupit nyní
                      </button>
                    </Link>
                    
                    <p className="text-xs text-slate-500 mt-3 flex items-center justify-center gap-1">
                      <Check className="w-3 h-3" /> Skladem, odesíláme ihned
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
