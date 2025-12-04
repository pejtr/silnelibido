import { TopBar } from "@/components/TopBar";
import { MobileHeader } from "@/components/MobileHeader";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

import { blogPosts } from "@/data/blogPosts";

import { SEO } from "@/components/SEO";
import { EbookDownload } from "@/components/EbookDownload";

export default function BlogListing() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <SEO 
        title="Magazín"
        description="Odborné články o mužském zdraví, erekci, testosteronu a libidu. Tipy, rady a recenze ověřených produktů."
        canonical="/blog"
      />
      <TopBar />
      <MobileHeader />
      
      <main className="flex-grow">
        {/* Hero Header with Image Background */}
        <div className="relative bg-[#0f172a] text-white overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog-hero-hiker.jpg" 
              alt="Muž na túře v horách" 
              className="w-full h-full object-cover object-center opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Magazín Silné Libido
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                  Odborné články, tipy a rady pro vaše sexuální zdraví, vitalitu a sebevědomí.
                </p>
              </div>

              {/* Right Content - Ebook Form Card */}
              <div className="lg:ml-auto w-full max-w-md">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
                  <div className="inline-block bg-[#D32F2F]/20 text-[#ff8a80] text-xs font-bold px-3 py-1 rounded-full mb-4 border border-[#D32F2F]/30">
                    📥 E-BOOK ZDARMA
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                    7denní restart testosteronu
                  </h2>
                  
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    Cítíte se bez energie? Stáhněte si náš exkluzivní manuál a přirozeně nastartujte svou mužskou sílu za pouhý týden.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3 text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-[#D32F2F]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#ff8a80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Jídelníček pro podporu erekce
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-[#D32F2F]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#ff8a80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Ranní rituály pro zvýšení libida
                    </li>
                    <li className="flex items-start gap-3 text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-[#D32F2F]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#ff8a80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      Jak odbourat stres (zabiják testosteronu)
                    </li>
                  </ul>
                  
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <input 
                        type="email" 
                        placeholder="vas@email.cz" 
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all"
                        required
                      />
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] hover:from-[#B71C1C] hover:to-[#9A1616] text-white font-bold py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                      Získat e-book ZDARMA
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          {/* EbookDownload removed as it's now in hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group block h-full">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-slate-100 transform hover:-translate-y-1">
                  {/* Image */}
                  <div className="h-48 bg-slate-200 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                      <span className="text-white font-bold flex items-center gap-2">
                        Číst článek <ArrowRight className="w-4 h-4" />
                      </span>
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
