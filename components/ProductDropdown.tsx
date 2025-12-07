"use client";

import { useState } from "react";
import Image from "next/image";
import { useAffiliateLink } from "@/hooks/useAffiliateLink";
import productsData from "../data/products.json";

interface ProductDropdownProps {
  gender: "men" | "women";
  children: React.ReactNode;
  className?: string;
}

function ProductItem({ product }: { product: any }) {
  const { url: productUrl, trackClick } = useAffiliateLink(product.url);
  
  return (
    <a 
      href={productUrl} onClick={trackClick}
      className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group/item"
    >
      <div className="w-16 h-16 flex-shrink-0 bg-white rounded-md border border-gray-100 p-1 flex items-center justify-center relative">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill
          className="object-contain group-hover/item:scale-110 transition-transform duration-300"
          sizes="64px"
        />
      </div>
      <div>
        <h4 className="font-bold text-[#2A2A5A] group-hover/item:text-[#D32F2F] transition-colors">
          {product.name}
        </h4>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>
        <span className="text-sm font-bold text-[#D32F2F] mt-2 block">
          {product.price} {product.currency}
        </span>
      </div>
    </a>
  );
}

export function ProductDropdown({ gender, children, className = "" }: ProductDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Filter products based on gender
  // For women: only "proerecta-women"
  // For men: everything else
  const products = productsData.filter(product => {
    if (gender === "women") {
      return product.id === "proerecta-women";
    } else {
      return product.id !== "proerecta-women";
    }
  });

  const { url: viewAllLink, trackClick: trackViewAllClick } = useAffiliateLink(gender === "women" ? "https://www.proerecta.cz/produkt/proerecta-women/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" : "https://www.proerecta.cz/produkty/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c");

  return (
    <div 
      className={`relative group ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children}
      
      {/* Dropdown Content */}
      <div 
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] transition-all duration-300 z-50 ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden p-6">
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100 text-center">
            <a 
              href={viewAllLink} onClick={trackViewAllClick}
              className="text-sm font-bold text-[#2A2A5A] hover:text-[#D32F2F] transition-colors inline-flex items-center gap-1"
            >
              Zobrazit vše pro {gender === "women" ? "ženy" : "muže"}
              <span className="text-lg">›</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
