import { TopBar } from "@/components/TopBar";
import { HeroSection } from "@/components/HeroSection";
import { MobileHeader } from "@/components/MobileHeader";
import { Footer } from "@/components/Footer";
import { DesktopStickyNav } from "@/components/DesktopStickyNav";
import { RelatedArticles } from "@/components/RelatedArticles";
import { TableOfContents } from "@/components/TableOfContents";
import { PopularArticles } from "@/components/PopularArticles";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { blogPosts } from "@/data/blogPosts";
import { ArrowUp, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { GetStaticProps, GetStaticPaths } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = blogPosts.find((post) => post.id === params?.id);
  return { props: { article } };
};

export default function BlogArticlePage({ article }: { article: typeof blogPosts[0] }) {
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

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Head>
          <title>Článek nenalezen - Silné Libido</title>
        </Head>
        <TopBar />
        <MobileHeader />
        <DesktopStickyNav />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-[#2A2A5A] mb-4">Článek nenalezen</h1>
          <Link href="/blog">
            <button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold px-6 py-3 rounded-full">
              Zpět na blog
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Schema.org structured data for article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Silné Libido",
      "logo": {
        "@type": "ImageObject",
        "url": "https://silnelibido.cz/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://silnelibido.cz/blog/${article.id}`
    },
    "articleBody": article.content,
    "keywords": article.category
  };

  // Generate FAQ Schema if available
  const faqSchema = article.faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{article.title} - Silné Libido</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={article.category} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:url" content={`https://silnelibido.cz/blog/${article.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={article.image} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </Head>
      <TopBar />
      <MobileHeader />
      <DesktopStickyNav />
      <HeroSection ageTarget={null} />

      {/* Article Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-8">
            <Link href="/blog" className="hover:text-[#D32F2F]">Blog</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{article.title}</span>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="inline-block bg-[#D32F2F] text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
              {article.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#2A2A5A] mb-4 leading-tight">
              {article.title}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-8 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] rounded-full flex items-center justify-center text-white font-bold">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-slate-900">{article.author}</p>
                  <p className="text-xs text-slate-500">{article.date}</p>
                </div>
              </div>
              <span className="text-slate-400">•</span>
              <span className="text-sm">{article.readTime}</span>
              <span className="text-slate-400">•</span>
              <button className="flex items-center gap-2 text-[#D32F2F] hover:text-[#B71C1C] transition-colors">
                <Share2 className="w-4 h-4" />
                Sdílet
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden mb-12 shadow-lg">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Layout with Sidebar */}
          <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Main Content Column */}
            <div className="flex-1 min-w-0">
              {/* Mobile Table of Contents */}
              <TableOfContents mobile />

              <div className="prose prose-lg max-w-none mb-12">
                <div 
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  className="text-slate-700 leading-relaxed"
                />
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents />
              <PopularArticles articles={blogPosts.slice(0, 3)} />
            </div>
          </div>

          {/* Sources */}
          {article.sources && article.sources.length > 0 && (
            <div className="bg-slate-50 p-6 rounded-xl mb-12 border border-slate-200">
              <h3 className="font-bold text-[#2A2A5A] mb-4">Zdroje a reference:</h3>
              <ul className="space-y-2">
                {article.sources.map((source, index) => (
                  <li key={index} className="text-sm text-slate-600 flex gap-3">
                    <span className="text-[#D32F2F] font-bold flex-shrink-0">{index + 1}.</span>
                    <span>{source}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Articles */}
          <RelatedArticles 
            currentArticleId={article.id} 
            allArticles={blogPosts} 
            maxArticles={3} 
            manualRelatedIds={article.relatedIds}
          />
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
