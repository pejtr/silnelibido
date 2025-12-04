import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

import { useState } from "react";

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
}

export function ProductCard({ name, price, currency, image, description, features, popular, url, badge }: ProductProps) {
  const [selectedPackage, setSelectedPackage] = useState(1);

  const packages = [
    { count: 1, discount: 0, label: "1 balení" },
    { count: 2, discount: 5, label: "2 balení (-5%)" },
    { count: 3, discount: 10, label: "3 balení (-10%)" }
  ];

  const currentPrice = Math.round(price * selectedPackage * (1 - (packages.find(p => p.count === selectedPackage)?.discount || 0) / 100));

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
      
      <CardContent className="flex-grow p-6">
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
        {/* Package Selection */}
        <div className="grid grid-cols-3 gap-2 w-full mb-2">
          {packages.map((pkg) => (
            <button
              key={pkg.count}
              onClick={() => setSelectedPackage(pkg.count)}
              className={`text-xs py-2 px-1 rounded border transition-all ${
                selectedPackage === pkg.count
                  ? "bg-primary text-white border-primary font-bold shadow-sm"
                  : "bg-white text-slate-600 border-slate-200 hover:border-primary/50"
              }`}
            >
              {pkg.label}
            </button>
          ))}
        </div>

        <div className="flex items-baseline gap-1 w-full">
          <span className="text-sm font-medium text-muted-foreground mr-1">Cena:</span>
          <span className="text-3xl font-bold text-primary">{currentPrice}</span>
          <span className="text-sm font-medium text-muted-foreground">{currency}</span>
        </div>
        
        <Button 
          className="w-full font-bold text-base py-6 shadow-md hover:shadow-lg transition-all group" 
          variant={popular ? "default" : "outline"}
          onClick={() => window.location.href = url}
        >
          Koupit {selectedPackage > 1 ? `${selectedPackage} balení` : ''} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
