"use client";

import Link from "next/link";
import Image from "next/image";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
}

interface RelatedArticlesProps {
  currentArticleId: string;
  allArticles: Article[];
  maxArticles?: number;
  manualRelatedIds?: string[];
}

export function RelatedArticles({ currentArticleId, allArticles, maxArticles = 3, manualRelatedIds }: RelatedArticlesProps) {
  // Get current article for category matching
  const currentArticle = allArticles.find(a => a.id === currentArticleId);
  
  let relatedArticles: Article[] = [];

  if (manualRelatedIds && manualRelatedIds.length > 0) {
    // If manual IDs are provided, use them
    relatedArticles = allArticles.filter(article => manualRelatedIds.includes(article.id));
    
    // Sort them to match the order in manualRelatedIds
    relatedArticles.sort((a, b) => {
      return manualRelatedIds.indexOf(a.id) - manualRelatedIds.indexOf(b.id);
    });
  } else {
    // Default logic: Filter out current article and prioritize same category, then random
    relatedArticles = allArticles
      .filter(article => article.id !== currentArticleId)
      .sort((a, b) => {
        // Prioritize same category
        if (a.category === currentArticle?.category && b.category !== currentArticle?.category) return -1;
        if (a.category !== currentArticle?.category && b.category === currentArticle?.category) return 1;
        // Then randomize
        return Math.random() - 0.5;
      })
      .slice(0, maxArticles);
  }

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t-2 border-slate-200">
      <h2 className="text-3xl md:text-4xl font-bold text-[#2A2A5A] mb-8">
        📚 Doporučené články
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link key={article.id} href={`/blog/${article.id}`} title={article.excerpt}>
            <div className="group cursor-pointer h-full">
              {/* Article Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col" itemScope itemType="https://schema.org/BlogPosting">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    itemProp="image"
                  />
                  <div className="absolute top-3 left-3 bg-[#D32F2F] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-[#2A2A5A] mb-2 line-clamp-2 group-hover:text-[#D32F2F] transition-colors" itemProp="headline">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-grow" itemProp="description">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3 mt-auto">
                    <span className="font-medium" itemProp="author">{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  {/* Hidden schema.org properties */}
                  <meta itemProp="datePublished" content={article.date} />
                  <meta itemProp="keywords" content={article.category} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <Link href="/blog" title="Přejít na blog s více články">
          <button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold px-8 py-3 rounded-full transition-colors shadow-lg" aria-label="Zobrazit všechny články">
            Zobrazit všechny články →
          </button>
        </Link>
      </div>
    </section>
  );
}
