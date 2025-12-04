import { TopBar } from "@/components/TopBar";
import { MobileHeader } from "@/components/MobileHeader";
import { Footer } from "@/components/Footer";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "./NotFound";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:id");
  const post = blogPosts.find((p: any) => p.id === params?.id);

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
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors"
                  aria-label="Sdílet na Facebooku"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center hover:bg-sky-200 transition-colors"
                  aria-label="Sdílet na Twitteru"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:bg-indigo-200 transition-colors"
                  aria-label="Sdílet na LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 max-w-4xl py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8 prose prose-lg prose-slate max-w-none prose-headings:text-[#2A2A5A] prose-a:text-[#D32F2F] prose-img:rounded-xl">
            {/* Main Article Image */}
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto rounded-2xl shadow-lg mb-8"
            />

            <p className="lead text-xl text-slate-600 font-medium mb-8">
              {post.excerpt}
            </p>
            
            {/* Content Image */}
            {post.contentImage && (
              <figure className="my-8">
                <img 
                  src={post.contentImage} 
                  alt={`Ilustrace k článku: ${post.title}`} 
                  className="w-full h-auto rounded-xl shadow-md"
                />
                <figcaption className="text-center text-sm text-slate-500 mt-2">
                  Ilustrační foto
                </figcaption>
              </figure>
            )}

            {/* Dynamic Content */}
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <>
                {/* Fallback content if no dynamic content exists */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h2>Proč je to důležité?</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </>
            )}

            {/* Sources Section */}
            {post.sources && post.sources.length > 0 && (
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-[#2A2A5A] mb-4 flex items-center gap-2">
                  <span className="bg-slate-100 p-1 rounded">📚</span> Zdroje a studie
                </h3>
                <ul className="list-none pl-0 space-y-2 text-sm text-slate-500">
                  {post.sources.map((source: string, index: number) => (
                    <li key={index} className="pl-4 border-l-2 border-slate-200 hover:border-[#D32F2F] transition-colors">
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Articles */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-[#2A2A5A] mb-8">Mohlo by vás také zajímat</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogPosts
                  .filter(p => p.id !== post.id) // Exclude current post
                  .sort(() => 0.5 - Math.random()) // Randomize
                  .slice(0, 3) // Take 3
                  .map(relatedPost => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group block">
                      <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 h-full flex flex-col">
                        <div className="h-40 overflow-hidden relative">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                          <span className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider mb-2 block">
                            {relatedPost.category}
                          </span>
                          <h4 className="font-bold text-[#2A2A5A] group-hover:text-[#D32F2F] transition-colors line-clamp-2 mb-2">
                            {relatedPost.title}
                          </h4>
                          <div className="mt-auto pt-2 flex items-center text-xs text-slate-400">
                            <Clock className="w-3 h-3 mr-1" /> {relatedPost.readTime}
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
              </div>
            </div>
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
              <a href="https://www.proerecta.cz/produkty/?utm_medium=affiliate&utm_campaign=affial.com&utm_source=pap&a_aid=5d5a767017fee&a_bid=fd5e6b0c" className="block w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-center font-bold py-3 rounded-full transition-colors">
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
