import { useState, useEffect } from "react";
import { ShoppingBag, X } from "lucide-react";

const RECENT_CUSTOMERS = [
  { name: "Petr", city: "Aše", time: "před chvílí" },
  { name: "Jan", city: "Prahy", time: "před 2 minutami" },
  { name: "Martin", city: "Brna", time: "před 5 minutami" },
  { name: "Tomáš", city: "Ostravy", time: "před 12 minutami" },
  { name: "Josef", city: "Plzně", time: "před 8 minutami" },
  { name: "Pavel", city: "Liberce", time: "před 15 minutami" },
  { name: "Jaroslav", city: "Olomouce", time: "před 3 minutami" },
  { name: "Miroslav", city: "Českých Budějovic", time: "před 20 minutami" },
  { name: "Zdeněk", city: "Hradce Králové", time: "před 7 minutami" },
  { name: "Václav", city: "Pardubic", time: "před 10 minutami" },
  { name: "Michal", city: "Zlína", time: "před 4 minutami" },
  { name: "David", city: "Kladna", time: "před 9 minutami" },
  { name: "Jakub", city: "Mostu", time: "před 14 minutami" },
  { name: "Lukáš", city: "Karviné", time: "před 6 minutami" },
  { name: "Jiří", city: "Opavy", time: "před 18 minutami" },
  { name: "František", city: "Jihlavy", time: "před 11 minutami" },
  { name: "Karel", city: "Teplic", time: "před 25 minutami" },
  { name: "Milan", city: "Děčína", time: "před 16 minutami" },
  { name: "Vladimír", city: "Chomutova", time: "před 22 minutami" },
  { name: "Roman", city: "Přerova", time: "před 13 minutami" }
];

export function RecentPurchases() {
  const [isVisible, setIsVisible] = useState(false);
  const [customer, setCustomer] = useState(RECENT_CUSTOMERS[0]);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Initial delay before showing the first notification
    const initialTimeout = setTimeout(() => {
      if (!isClosed) setIsVisible(true);
    }, 5000);

    // Cycle through customers
    const interval = setInterval(() => {
      if (isClosed) return;
      
      setIsVisible(false);
      
      setTimeout(() => {
        if (isClosed) return;
        const randomCustomer = RECENT_CUSTOMERS[Math.floor(Math.random() * RECENT_CUSTOMERS.length)];
        setCustomer(randomCustomer);
        setIsVisible(true);
      }, 8000); // Wait 8s before showing next one (longer pause)
      
    }, 30000); // Show new one every 30s (less frequent)

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isClosed]);

  if (isClosed) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="bg-white rounded-lg shadow-xl border border-slate-100 p-4 flex items-center gap-4 max-w-xs relative overflow-hidden">
        {/* Close button */}
        <button 
          onClick={() => setIsClosed(true)}
          className="absolute top-1 right-1 text-slate-400 hover:text-slate-600 p-1"
        >
          <X className="w-3 h-3" />
        </button>

        {/* Icon */}
        <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
          <ShoppingBag className="w-5 h-5 text-green-600" />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <span className="text-xs text-slate-500 font-medium">{customer.time} nakoupil(a)</span>
          <span className="text-sm font-bold text-[#2A2A5A]">{customer.name} z {customer.city}</span>
          <span className="text-[10px] text-green-600 font-bold flex items-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Ověřený nákup
          </span>
        </div>
      </div>
    </div>
  );
}
