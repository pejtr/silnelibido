import { useState, useEffect } from "react";
import { ShoppingBag, X, ExternalLink } from "lucide-react";
import productsData from "../data/products.json";

// Extended customer data with regions for geolocation simulation
const CUSTOMER_DATABASE = [
  // Prague & Central Bohemia
  { name: "Jan", city: "Prahy", region: "prague", time: "před 2 minutami" },
  { name: "Petr", city: "Kladna", region: "central", time: "před 5 minutami" },
  { name: "Tomáš", city: "Mělníka", region: "central", time: "před 12 minutami" },
  { name: "Lukáš", city: "Benešova", region: "central", time: "před 8 minutami" },
  { name: "Martin", city: "Berouna", region: "central", time: "před 15 minutami" },
  
  // Moravia (Brno, Ostrava, Olomouc, Zlin)
  { name: "Jiří", city: "Brna", region: "moravia", time: "před 3 minutami" },
  { name: "Pavel", city: "Ostravy", region: "moravia", time: "před 7 minutami" },
  { name: "Michal", city: "Olomouce", region: "moravia", time: "před 10 minutami" },
  { name: "David", city: "Zlína", region: "moravia", time: "před 4 minutami" },
  { name: "Jakub", city: "Opavy", region: "moravia", time: "před 14 minutami" },
  { name: "František", city: "Přerova", region: "moravia", time: "před 9 minutami" },
  { name: "Marek", city: "Prostějova", region: "moravia", time: "před 18 minutami" },
  
  // West Bohemia (Plzen, Karlovy Vary)
  { name: "Josef", city: "Plzně", region: "west", time: "před 6 minutami" },
  { name: "Václav", city: "Chebu", region: "west", time: "před 11 minutami" },
  { name: "Karel", city: "Karlových Varů", region: "west", time: "před 20 minutami" },
  { name: "Milan", city: "Sokolova", region: "west", time: "před 16 minutami" },
  
  // North Bohemia (Liberec, Usti)
  { name: "Jaroslav", city: "Liberce", region: "north", time: "před 5 minutami" },
  { name: "Zdeněk", city: "Ústí nad Labem", region: "north", time: "před 13 minutami" },
  { name: "Roman", city: "Mostu", region: "north", time: "před 8 minutami" },
  { name: "Vladimír", city: "Děčína", region: "north", time: "před 22 minutami" },
  { name: "Miroslav", city: "Teplic", region: "north", time: "před 17 minutami" },
  
  // South Bohemia (Ceske Budejovice)
  { name: "Stanislav", city: "Českých Budějovic", region: "south", time: "před 9 minutami" },
  { name: "Ondřej", city: "Tábora", region: "south", time: "před 14 minutami" },
  { name: "Filip", city: "Písku", region: "south", time: "před 19 minutami" },
  
  // East Bohemia (Hradec, Pardubice)
  { name: "Matěj", city: "Hradce Králové", region: "east", time: "před 4 minutami" },
  { name: "Vojtěch", city: "Pardubic", region: "east", time: "před 10 minutami" },
  { name: "Adam", city: "Chrudimi", region: "east", time: "před 15 minutami" }
];

// Fallback generic list if geolocation fails or for variety
const GENERIC_CUSTOMERS = CUSTOMER_DATABASE;

export function RecentPurchases() {
  const [isVisible, setIsVisible] = useState(false);
  const [customer, setCustomer] = useState(CUSTOMER_DATABASE[0]);
  const [product, setProduct] = useState(productsData[0]);
  const [isClosed, setIsClosed] = useState(false);
  const [userRegion, setUserRegion] = useState<string | null>(null);

  // Simulate geolocation detection
  useEffect(() => {
    // In a real app, we would use an IP geolocation API here
    // For this demo, we'll simulate a random region assignment to show the feature
    const regions = ["prague", "central", "moravia", "west", "north", "south", "east"];
    // 40% chance of being Prague/Central (most populous), otherwise random
    const randomRegion = Math.random() < 0.4 
      ? (Math.random() > 0.5 ? "prague" : "central") 
      : regions[Math.floor(Math.random() * regions.length)];
    
    setUserRegion(randomRegion);
    console.log(`Simulated User Region: ${randomRegion}`);
  }, []);

  const getRelevantCustomer = () => {
    let pool = GENERIC_CUSTOMERS;
    
    // If we have a user region, try to prioritize customers from that region or nearby
    if (userRegion) {
      const regionalCustomers = CUSTOMER_DATABASE.filter(c => c.region === userRegion);
      // If we have customers from this region, use them with 70% probability
      if (regionalCustomers.length > 0 && Math.random() < 0.7) {
        pool = regionalCustomers;
      }
    }
    
    return pool[Math.floor(Math.random() * pool.length)];
  };

  const getRandomProduct = () => {
    // Weighted random selection - Klasik and Shot are most popular
    const rand = Math.random();
    if (rand < 0.4) return productsData.find(p => p.id === "proerecta-klasik") || productsData[0];
    if (rand < 0.7) return productsData.find(p => p.id === "proerecta-shot") || productsData[1];
    if (rand < 0.85) return productsData.find(p => p.id === "proerecta-long") || productsData[2];
    return productsData[Math.floor(Math.random() * productsData.length)];
  };

  useEffect(() => {
    let initialTimeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    let hasTriggered = false;

    const startNotifications = () => {
      if (hasTriggered || isClosed) return;
      hasTriggered = true;

      // Initial delay before showing the first notification
      // On mobile, we want a longer delay (e.g., 10s) compared to desktop (5s)
      const isMobile = window.innerWidth < 768;
      const delay = isMobile ? 10000 : 5000;

      initialTimeout = setTimeout(() => {
        if (!isClosed) {
          setCustomer(getRelevantCustomer());
          setProduct(getRandomProduct());
          setIsVisible(true);
        }
      }, delay);

      // Cycle through customers
      interval = setInterval(() => {
        if (isClosed) return;
        
        setIsVisible(false);
        
        setTimeout(() => {
          if (isClosed) return;
          setCustomer(getRelevantCustomer());
          setProduct(getRandomProduct());
          setIsVisible(true);
        }, 8000); // Wait 8s before showing next one
        
      }, 30000); // Show new one every 30s
    };

    const handleScroll = () => {
      if (hasTriggered) return;

      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const isMobile = window.innerWidth < 768;

      // On mobile, wait for 50% scroll. On desktop, trigger immediately (or with low threshold)
      if (!isMobile || scrollPercentage > 50) {
        startNotifications();
        // Remove listener once triggered
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Check immediately in case we are already scrolled or on desktop
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isClosed, userRegion]);

  if (isClosed) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <a 
        href={product.url}
        className="block bg-white rounded-lg shadow-xl border border-slate-100 p-4 max-w-xs relative overflow-hidden hover:shadow-2xl hover:border-slate-200 transition-all group cursor-pointer"
      >
        {/* Close button - stopPropagation to prevent link click */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsClosed(true);
          }}
          className="absolute top-1 right-1 text-slate-300 hover:text-slate-500 p-1 z-10 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>

        <div className="flex items-start gap-3">
          {/* Product Image or Icon */}
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-500" 
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-100 p-1 rounded-full border border-white">
              <ShoppingBag className="w-3 h-3 text-green-600" />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1 mb-0.5">
              <span className="text-[10px] text-green-600 font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Ověřený nákup
              </span>
              <span className="text-[10px] text-slate-400">• {customer.time}</span>
            </div>
            
            <div className="text-sm font-bold text-[#2A2A5A] leading-tight mb-0.5 truncate pr-4">
              {customer.name} z {customer.city}
            </div>
            
            <div className="text-xs text-slate-500 leading-tight">
              zakoupil <span className="font-semibold text-[#D32F2F] group-hover:underline decoration-[#D32F2F]/30 underline-offset-2">{product.name}</span>
            </div>
          </div>
          
          {/* External Link Icon Hint */}
          <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </div>
        </div>
      </a>
    </div>
  );
}
