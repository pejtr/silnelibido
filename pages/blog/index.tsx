import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { TopBar } from "@/components/TopBar";
import { MobileHeader } from "@/components/MobileHeader";
import { Footer } from "@/components/Footer";
import { DesktopStickyNav } from "@/components/DesktopStickyNav";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Magazín Silné Libido | Proerecta</title>
        <meta name="description" content="Odborné články, tipy a rady pro vaše sexuální zdraví, vitalitu a sebevědomí." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>
      
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-[oklch(0.22_0.08_275)]">
        <TopBar />
        <MobileHeader />
        <DesktopStickyNav />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <div className="relative bg-[#2A2A5A] text-white py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
               <Image 
                 src="/images/blog-hero-hiker.webp" 
                 alt="Blog Hero" 
                 fill 
                 className="object-cover"
                 priority
               />
            </div>
            <div className="container px-4 md:px-8 relative z-10 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Magazín Silné Libido</h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                Odborné články, tipy a rady pro vaše sexuální zdraví, vitalitu a sebevědomí.
              </p>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="bg-white mx-0 md:mx-4 rounded-t-[2.5rem] -mt-8 relative z-20 pt-12 pb-24 px-4 md:px-8 shadow-sm">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Link href={`/blog/${post.id}`} key={post.id} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#D32F2F] uppercase tracking-wide">
                        {post.category}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-bold text-[#2A2A5A] mb-3 group-hover:text-[#D32F2F] transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                          <User className="w-3 h-3" />
                          {post.author}
                        </div>
                        <span className="text-[#D32F2F] font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Číst článek <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
