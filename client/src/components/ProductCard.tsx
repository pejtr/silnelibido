import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface Package {
  id: string;
  name: string;
  price: number;
  originalPrice: number | null;
  savings: number | null;
  description: string;
  badge: string | null;
}

interface ProductProps {
  name: string;
  price: number;
  currency: string;
  image: string;
  description: string;
  features: string[];
  popular?: boolean;
  url: string;
  badge?: {
    text: string;
    color: string;
  };
  packages?: Package[];
}

export function ProductCard({ name, price, currency, image, description, features, popular, url, badge, packages }: ProductProps) {
  // Default to the first package (cheapest option)
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(0);
  
  const currentPackage = packages ? packages[selectedPackageIndex] : null;
  const displayPrice = currentPackage ? currentPackage.price : price;

  return (
    <Card className={`flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg ${popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'}`}>
      {badge && (
        <div 
          className="absolute top-4 left-4 text-white text-base font-bold px-4 py-4 rounded-full z-20 shadow-md flex items-center justify-center text-center leading-tight w-[120px] h-[120px] transform -rotate-12"
          style={{ backgroundColor: badge.color }}
        >
          {badge.text}
        </div>
      )}
      {popular && !badge && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
          NEJPRODÁVANĚJŠÍ
        </div>
      )}
      
      <CardHeader className="p-0">
        <div className="aspect-square w-full bg-secondary/30 flex items-center justify-center p-6">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow p-6 pb-2">
        <CardTitle className="text-xl font-bold mb-2 text-foreground">{name}</CardTitle>
        <p className="text-muted-foreground text-sm mb-4 min-h-[60px]">{description}</p>
        
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex flex-col gap-4">
        {/* Package Selection Grid */}
        {packages && (
          <div className="grid grid-cols-3 gap-2 w-full mb-2">
            {packages.map((pkg, index) => (
              <button
                key={pkg.id}
                onClick={() => setSelectedPackageIndex(index)}
                className={`relative flex flex-col items-center justify-between p-2 rounded-lg border transition-all h-full ${
                  selectedPackageIndex === index
                    ? "bg-white border-[#D32F2F] ring-1 ring-[#D32F2F] shadow-md z-10"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-500"
                }`}
              >
                {/* Badge for package */}
                {pkg.badge && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#D32F2F] text-white text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap uppercase tracking-wide shadow-sm">
                    {pkg.badge}
                  </div>
                )}
                
                <div className="text-xs font-medium text-center mb-1 pt-1 leading-tight min-h-[2.5em] flex items-center justify-center">
                  {pkg.name}
                </div>
                
                <div className="flex flex-col items-center mt-auto">
                  {/* Original Price (crossed out) */}
                  {pkg.originalPrice && (
                    <span className="text-[10px] line-through text-slate-400 mb-0.5">
                      {pkg.originalPrice} Kč
                    </span>
                  )}
                  
                  {/* Current Price */}
                  <div className={`font-bold ${selectedPackageIndex === index ? "text-[#D32F2F] text-base" : "text-slate-700 text-sm"}`}>
                    {pkg.price} Kč
                  </div>
                  
                  {/* Savings */}
                  {pkg.savings && selectedPackageIndex === index && (
                    <div className="text-[9px] text-green-600 font-bold mt-0.5 bg-green-50 px-1 rounded">
                      Ušetříte {pkg.savings} Kč
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Selected Package Details */}
        {currentPackage && (
          <div className="w-full text-center bg-slate-50 p-2 rounded border border-slate-100 text-xs text-slate-600 whitespace-pre-line">
            {currentPackage.description}
          </div>
        )}

        {/* Total Price Display */}
        <div className="flex items-baseline gap-1 w-full pt-2">
          <span className="text-lg font-medium text-slate-700 mr-1">Celkem:</span>
          <span className="text-3xl font-bold text-[#2A2A5A]">{displayPrice}</span>
          <span className="text-lg font-bold text-[#2A2A5A]">{currency}</span>
        </div>
        
        <Button 
          className="w-full font-bold text-base py-6 shadow-md hover:shadow-lg transition-all group bg-[#D32F2F] hover:bg-[#B71C1C] text-white" 
          onClick={() => window.location.href = url}
        >
          Koupit <ShoppingCart className="ml-2 w-5 h-5" />
        </Button>
        
        <div className="flex items-center justify-end w-full gap-1 text-xs text-green-600 font-medium">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          Skladem - Pozítří u vás
        </div>
      </CardFooter>
    </Card>
  );
}
