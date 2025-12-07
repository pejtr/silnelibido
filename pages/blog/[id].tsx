import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { TopBar } from "@/components/TopBar";
import { MobileHeader } from "@/components/MobileHeader";
import { Footer } from "@/components/Footer";
import { DesktopStickyNav } from "@/components/DesktopStickyNav";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

interface BlogPostProps {
  post: typeof blogPosts[0];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const post = blogPosts.find((p) => p.id === params?.id);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
};

export default function BlogPost({ post }: BlogPostProps) {
  // JSON-LD Structured Data for BlogPosting
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `https://silnelibido.cz${post.image}`,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Proerecta",
      "logo": {
        "@type": "ImageObject",
        "url": "https://silnelibido.cz/images/logo.svg"
      }
    },
    "datePublished": post.date.split('. ').reverse().join('-'), // Convert to ISO format roughly (needs proper parsing if strict)
    "description": post.excerpt,
    "articleBody": post.content.replace(/<[^>]*>?/gm, '') // Strip HTML tags for schema
  };

  return (
    <>
      <Head>
        <title>{post.title} | Magazín Silné Libido</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={`https://silnelibido.cz${post.image}`} />
        <meta property="og:type" content="article" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
        />
      </Head>
      
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-[oklch(0.22_0.08_275)]">
        <TopBar />
        <MobileHeader />
        <DesktopStickyNav />
        
        <main className="flex-grow">
          {/* Article Header */}
          <div className="bg-[#2A2A5A] text-white pt-12 pb-24 relative overflow-hidden">
             <div className="absolute inset-0 z-0 opacity-10">
               <Image 
                 src={post.contentImage || post.image} 
                 alt="Background" 
                 fill 
                 className="object-cover blur-sm"
               />
            </div>
            <div className="container px-4 md:px-8 relative z-10">
              <Link href="/blog" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-wide">
                <ArrowLeft className="w-4 h-4" /> Zpět na magazín
              </Link>
              
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-block bg-[#D32F2F] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6">
                  {post.category}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white mx-0 md:mx-4 rounded-t-[2.5rem] -mt-12 relative z-20 pt-12 pb-24 px-4 md:px-8 shadow-sm">
            <div className="container mx-auto max-w-3xl">
              
              {/* Main Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 shadow-lg">
                <Image
                  src={post.contentImage || post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <article 
                className="prose prose-lg prose-slate max-w-none prose-headings:text-[#2A2A5A] prose-headings:font-bold prose-a:text-[#D32F2F] prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                <span className="font-bold text-[#2A2A5A] flex items-center gap-2">
                  <Share2 className="w-5 h-5" /> Sdílet článek
                </span>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-100 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center hover:bg-indigo-100 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Sources */}
              {post.sources && (
                <div className="mt-12 bg-slate-50 p-6 rounded-xl text-sm text-slate-500">
                  <h3 className="font-bold text-slate-700 mb-4 uppercase tracking-wide text-xs">Zdroje a studie</h3>
                  <ul className="space-y-2 list-disc pl-4">
                    {post.sources.map((source, i) => (
                      <li key={i}>{source}</li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
