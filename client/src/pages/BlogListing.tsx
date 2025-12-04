import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Calendar, User, Clock, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { blogPosts } from "@/data/blogPosts";

import { SEO } from "@/components/SEO";
import { EbookDownload } from "@/components/EbookDownload";

export default function BlogListing() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("E-book byl úspěšně odeslán na váš e-mail!");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <SEO 
        title="Magazín"
        description="Odborné články o mužském zdraví, erekci, testosteronu a libidu. Tipy, rady a recenze ověřených produktů."
        canonical="/blog"
      />
      {/* Custom Blog Header */}
      <header className="bg-white py-4 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-1">
              <span className="text-2xl font-bold text-[#2A2A5A]">proerecta</span>
              <div className="w-2 h-2 bg-[#D32F2F] rounded-full mt-1"></div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <Link href="/">
              <a className="hover:text-[#D32F2F] transition-colors">Domů</a>
            </Link>
            <Link href="/blog">
              <a className="hover:text-[#D32F2F] transition-colors">Odborné články</a>
            </Link>
            <a href="https://www.proerecta.cz/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#D32F2F] transition-colors">
              Doprava zdarma od 1500 Kč
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      
      <main className="flex-grow">
        {/* Hero Header with Image Background */}
        <div className="relative bg-[#0f172a] text-white overflow-hidden min-h-[600px] flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/blog-hero-hiker.jpg" 
              alt="Muž na túře v horách" 
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient overlay: Dark at bottom for text, dark at right for form, clear at top-left for man */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0f172a]/40 to-[#0f172a]/90"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 py-12 relative z-10 h-full flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end h-full">
              
              {/* Left Content - Pushed to bottom */}
              <div className="lg:col-span-7 lg:pb-12 order-2 lg:order-1">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
                  Magazín Silné Libido
                </h1>
                <p className="text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed drop-shadow-md">
                  Odborné články, tipy a rady pro vaše sexuální zdraví, vitalitu a sebevědomí.
                </p>
              </div>

              {/* Right Content - Ebook Form Card */}
              <div className="lg:col-span-5 lg:ml-auto w-full max-w-md order-1 lg:order-2 mb-8 lg:mb-0">
                <div className="bg-[#1e293b]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors">
                  {/* Glow effect */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D32F2F]/30 rounded-full blur-3xl group-hover:bg-[#D32F2F]/40 transition-all"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-block bg-[#D32F2F]/20 text-[#ff8a80] text-[10px] font-bold px-3 py-1 rounded-full mb-5 border border-[#D32F2F]/30 tracking-wider uppercase">
                      📥 E-book zdarma
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-3 text-white leading-tight">
                      7denní restart <br/>
                      <span className="text-[#ff5252]">testosteronu</span>
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
                  
                  {isSuccess ? (
                    <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center animate-in fade-in zoom-in duration-300">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/20">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Úspěšně odesláno!</h3>
                      <p className="text-slate-200 text-sm">
                        E-book je na cestě do vaší schránky. Zkontrolujte prosím i složku spam.
                      </p>
                      <button 
                        onClick={() => setIsSuccess(false)}
                        className="mt-6 text-sm text-slate-300 hover:text-white underline underline-offset-4"
                      >
                        Odeslat na jiný e-mail
                      </button>
                    </div>
                  ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div>
                        <input 
                          type="email" 
                          placeholder="vas@email.cz" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#D32F2F] to-[#B71C1C] hover:from-[#B71C1C] hover:to-[#9A1616] text-white font-bold py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Odesílám...
                          </>
                        ) : (
                          "Získat e-book ZDARMA"
                        )}
                      </button>
                    </form>
                  )}
                  </div>
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
