import { TopBar } from "@/components/TopBar";
import { MobileHeader } from "@/components/MobileHeader";
import { Footer } from "@/components/Footer";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { blogPosts } from "./BlogListing";
import NotFound from "./NotFound";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:id");
  const post = blogPosts.find(p => p.id === params?.id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!post) return <NotFound />;

  // Schema.org Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": [
      `https://silnelibido.cz${post.image}`
    ],
    "datePublished": post.date.split('. ').reverse().join('-'), // Simple conversion, ideally use ISO format in data
    "dateModified": post.date.split('. ').reverse().join('-'),
    "author": [{
      "@type": "Person",
      "name": post.author
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Silné Libido",
      "logo": {
        "@type": "ImageObject",
        "url": "https://silnelibido.cz/images/logo.svg"
      }
    },
    "description": post.excerpt
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.id}`}
        type="article"
        image={post.image}
        publishedTime={post.date} // Needs ISO format for strict compliance, but this is a start
        author={post.author}
        schema={articleSchema}
      />
      <TopBar />
      <MobileHeader />
      
      <main className="flex-grow">
        {/* Article Header */}
        <div className="bg-slate-50 py-12 md:py-20 border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#D32F2F] mb-8 transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" /> Zpět na magazín
            </Link>
            
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
              <span className="bg-red-100 text-[#D32F2F] px-3 py-1 rounded-full font-bold uppercase tracking-wider text-xs">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-[#2A2A5A] leading-tight mb-8">
              {post.title}
            </h1>

            <div className="flex items-center justify-between border-t border-slate-200 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-[#2A2A5A] text-sm">{post.author}</p>
                  <p className="text-xs text-slate-500">Odborný redaktor</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center hover:bg-sky-200 transition-colors">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-200 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 max-w-4xl py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8 prose prose-lg prose-slate max-w-none prose-headings:text-[#2A2A5A] prose-a:text-[#D32F2F] prose-img:rounded-xl">
            <p className="lead text-xl text-slate-600 font-medium mb-8">
              {post.excerpt}
            </p>
            
            {/* Placeholder content - will be replaced by actual content */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <h2>Proč je to důležité?</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <div className="bg-red-50 border-l-4 border-[#D32F2F] p-6 my-8 rounded-r-xl">
              <h3 className="text-[#D32F2F] font-bold mt-0">Tip odborníka</h3>
              <p className="mb-0">
                Pravidelné užívání přírodních doplňků může výrazně zlepšit vaše výsledky. Nečekejte na zázrak, začněte s prevencí ještě dnes.
              </p>
            </div>

            <h2>Jak to řešit?</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            
            <ul>
              <li>Bod číslo jedna pro lepší zdraví</li>
              <li>Druhý důležitý krok, který nesmíte vynechat</li>
              <li>Třetí tip pro maximální efekt</li>
            </ul>

            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Product Widget */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-[#2A2A5A] mb-4">Doporučujeme</h3>
              <div className="bg-slate-50 rounded-xl p-4 mb-4 flex items-center justify-center">
                <img src="/images/proerecta-shot-trans.png" alt="Proerecta Shot" className="h-40 object-contain" />
              </div>
              <h4 className="font-bold text-lg mb-2">Proerecta SHOT</h4>
              <p className="text-sm text-slate-500 mb-4">Okamžitá podpora erekce do 30 minut. Bylinný nápoj pro maximální výkon.</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-[#D32F2F]">od 399 Kč</span>
                <div className="flex text-yellow-400 text-xs">★★★★★</div>
              </div>
              <a href="https://www.proerecta.cz/produkty/" className="block w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-center font-bold py-3 rounded-full transition-colors">
                Vyzkoušet ihned
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
