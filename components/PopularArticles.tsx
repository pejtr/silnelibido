"use client";

import Link from "next/link";
import Image from "next/image";
import { TrendingUp } from "lucide-react";

interface Article {
  id: string;
  title: string;
  image: string;
  date: string;
}

interface PopularArticlesProps {
  articles: Article[];
}

export function PopularArticles({ articles }: PopularArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mt-8">
      <div className="flex items-center gap-2 mb-6 text-[#2A2A5A] font-bold border-b border-slate-100 pb-2">
        <TrendingUp className="w-5 h-5 text-[#D32F2F]" />
        <span>Nejčtenější články</span>
      </div>
      
      <div className="flex flex-col gap-6">
        {articles.map((article, index) => (
          <Link key={article.id} href={`/blog/${article.id}`} className="group flex gap-4 items-start p-2 rounded-lg hover:bg-slate-50 transition-all duration-300 hover:translate-x-1">
            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-0 left-0 bg-[#D32F2F] text-white w-6 h-6 flex items-center justify-center text-xs font-bold rounded-br-lg z-10">
                {index + 1}
              </div>
            </div>
            
            <div className="flex flex-col pt-1">
              <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#D32F2F] transition-colors line-clamp-2 mb-1 leading-snug">
                {article.title}
              </h4>
              <span className="text-xs text-slate-500 group-hover:text-slate-600 transition-colors">{article.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
