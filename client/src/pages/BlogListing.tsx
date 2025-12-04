import { TopBar } from "@/components/TopBar";
import { MobileHeader } from "@/components/MobileHeader";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

// Blog post data structure
export const blogPosts = [
  {
    id: "5-prirodnich-zabijaku-erekce",
    title: "5 přírodních zabijáků erekce: Co jíte a ani o tom nevíte?",
    excerpt: "Možná si myslíte, že žijete zdravě, ale některé běžné potraviny mohou nenápadně sabotovat váš sexuální výkon. Odhalte skryté nepřátele vaší erekce.",
    image: "/images/blog/food-killers.jpg",
    date: "4. 12. 2025",
    author: "MUDr. Jan Novák",
    readTime: "5 min čtení",
    category: "Životní styl"
  },
  {
    id: "testosteron-po-tricitce",
    title: "Testosteron po třicítce: Proč klesá a jak ho přirozeně nastartovat?",
    excerpt: "Cítíte úbytek energie a menší chuť na sex? Na vině může být klesající testosteron. Zjistěte, jak tento proces zvrátit bez chemie.",
    image: "/images/blog/testosterone.jpg",
    date: "28. 11. 2025",
    author: "Petr Dvořák",
    readTime: "7 min čtení",
    category: "Hormony"
  },
  {
    id: "kotvicnik-zemni-zazrak-nebo-mytus",
    title: "Kotvičník zemní (Tribulus): Zázrak pro libido, nebo jen mýtus?",
    excerpt: "Tribulus Terrestris je legendární bylinka pro mužskou sílu. Co na to ale říká věda? Podívali jsme se na studie a reálné účinky.",
    image: "/images/blog/tribulus.jpg",
    date: "20. 11. 2025",
    author: "MUDr. Jan Novák",
    readTime: "6 min čtení",
    category: "Bylinky"
  },
  {
    id: "erekce-vs-psychika",
    title: "Erektilní dysfunkce vs. psychika: Je to v hlavě, nebo v těle?",
    excerpt: "Stres, úzkost a obavy ze selhání mohou být stejně ničivé jako fyzické problémy. Naučte se rozlišit příčinu a najít řešení.",
    image: "/images/blog/psychology.jpg",
    date: "15. 11. 2025",
    author: "Mgr. Lenka Svobodová",
    readTime: "8 min čtení",
    category: "Psychologie"
  },
  {
    id: "top-7-potravin-pro-pevnou-erekci",
    title: "TOP 7 potravin pro pevnou erekci, které máte běžně v lednici",
    excerpt: "Nemusíte hned běžet do lékárny. Někdy stačí upravit jídelníček. Těchto 7 superpotravin prokazatelně podporuje prokrvení a libido.",
    image: "/images/blog/superfoods.jpg",
    date: "10. 11. 2025",
    author: "Petr Dvořák",
    readTime: "4 min čtení",
    category: "Výživa"
  }
];

export default function BlogListing() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <TopBar />
      <MobileHeader />
      
      <main className="flex-grow">
        {/* Hero Header */}
        <div className="bg-[#2A2A5A] text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/pattern.png')]"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Magazín Silné Libido</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Odborné články, tipy a rady pro vaše sexuální zdraví, vitalitu a sebevědomí.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group block h-full">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-slate-100 transform hover:-translate-y-1">
                  {/* Image Placeholder - In real app would be actual image */}
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                      <span className="text-white font-bold flex items-center gap-2">
                        Číst článek <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                    {/* Fallback for missing images */}
                    <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100">
                      <span className="text-4xl">📝</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <span className="bg-red-50 text-[#D32F2F] px-2 py-1 rounded-full font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-[#2A2A5A] mb-3 group-hover:text-[#D32F2F] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100 mt-auto">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" /> {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-white py-16 border-t border-slate-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#2A2A5A] mb-4">Nenechte si ujít nové články</h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Přihlaste se k odběru a získejte nejen nejnovější tipy pro vaše zdraví, ale i exkluzivní slevy na produkty Proerecta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Váš e-mail" 
                className="px-6 py-3 rounded-full border border-slate-300 focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] w-full"
              />
              <button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-3 rounded-full font-bold transition-colors whitespace-nowrap">
                Odebírat
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
