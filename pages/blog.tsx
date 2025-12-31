import Head from "next/head";
import { TopBar } from "@/components/TopBar";
import { HeroSection } from "@/components/HeroSection";
import { MobileHeader } from "@/components/MobileHeader";
import { Footer } from "@/components/Footer";
import { DesktopStickyNav } from "@/components/DesktopStickyNav";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { useState } from "react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="min-h-screen bg-slate-50">
      <Head>
        <title>Blog o mužském zdraví - Silné Libido</title>
        <meta name="description" content="Odborné články o erekci, libidu, testosteronu a zdravém životním stylu pro muže." />
      </Head>

      <TopBar />
      <MobileHeader />
      <DesktopStickyNav />
      <HeroSection ageTarget={null} />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2A2A5A] mb-4">Blog o mužském zdraví</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nejnovější poznatky, tipy a rady pro lepší sexuální život a vitalitu.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === null
                ? "bg-[#D32F2F] text-white shadow-lg"
                : "bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            Všechny články
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-[#D32F2F] text-white shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group">
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-slate-100">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#D32F2F]">
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
                  
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <span className="text-[#D32F2F] text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Číst více <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
