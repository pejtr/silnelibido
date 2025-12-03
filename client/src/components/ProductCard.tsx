import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

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
  return (
    <Card className={`flex flex-col h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg ${popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'}`}>
      {badge && (
        <div 
          className="absolute top-4 left-4 text-white text-[10px] font-bold px-3 py-3 rounded-full z-20 shadow-md flex items-center justify-center text-center leading-tight w-[60px] h-[60px] transform -rotate-12"
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
        <div className="flex items-baseline gap-1 w-full">
          <span className="text-sm font-medium text-muted-foreground mr-1">od</span>
          <span className="text-3xl font-bold text-primary">{price}</span>
          <span className="text-sm font-medium text-muted-foreground">{currency}</span>
        </div>
        
        <Button 
          className="w-full font-bold text-base py-6 shadow-md hover:shadow-lg transition-all group" 
          variant={popular ? "default" : "outline"}
          onClick={() => window.open(url, '_blank')}
        >
          Zjistit více <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
