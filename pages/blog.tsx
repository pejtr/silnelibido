import { TopBar } from "@/components/TopBar";
import { HeroSection } from "@/components/HeroSection";
import { MobileHeader } from "@/components/MobileHeader";
import { Footer } from "@/components/Footer";
import { DesktopStickyNav } from "@/components/DesktopStickyNav";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <MobileHeader />
      <DesktopStickyNav />
      <HeroSection ageTarget={null} />

      {/* Blog Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2A2A5A] mb-4">
              📚 Magazín Silné Libido
            </h1>
            <p className="text-lg text-slate-600">
              Odborné články o zdraví, vitalitě a sexuální wellness od lékařů a specialistů.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((article) => (
              <Link key={article.id} href={`/blog/${article.id}`}>
                <div className="group cursor-pointer h-full">
                  {/* Article Card */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border border-slate-200">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-slate-200">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-[#D32F2F] text-white px-3 py-1 rounded-full text-xs font-bold">
                        {article.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h2 className="font-bold text-xl text-[#2A2A5A] mb-3 line-clamp-2 group-hover:text-[#D32F2F] transition-colors">
                        {article.title}
                      </h2>
                      
                      <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">
                        {article.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4 mt-auto">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{article.author}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </div>
                        <span className="text-slate-400">{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Chcete dostávat nové články přímo do emailu?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Přihlaste se k odběru našeho newsletteru a buďte první, kdo se dozví o nových tipech a studiích.
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Váš email..."
                className="flex-1 px-4 py-3 rounded-full text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-[#D32F2F] font-bold px-6 py-3 rounded-full hover:bg-slate-100 transition-colors"
              >
                Přihlásit se
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#D32F2F] hover:bg-[#B71C1C] text-white p-3 rounded-full shadow-lg transition-all z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      <Footer />
    </div>
  );
}
