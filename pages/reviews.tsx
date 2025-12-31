import Head from "next/head";
import { TopBar } from "@/components/TopBar";
import { HeroSection } from "@/components/HeroSection";
import { MobileHeader } from "@/components/MobileHeader";
import { Footer } from "@/components/Footer";
import { DesktopStickyNav } from "@/components/DesktopStickyNav";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Star, CheckCircle2, User } from "lucide-react";

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Head>
        <title>Recenze a zkušenosti zákazníků - Silné Libido</title>
        <meta name="description" content="Přečtěte si reálné zkušenosti a recenze mužů, kteří vyzkoušeli produkty Proerecta." />
      </Head>

      <TopBar />
      <MobileHeader />
      <DesktopStickyNav />
      <HeroSection ageTarget={null} />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2A2A5A] mb-4">Zkušenosti našich zákazníků</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Podívejte se, co o produktech Proerecta říkají muži, kteří je již vyzkoušeli.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Ověřené recenze</h3>
            <p className="text-slate-600 text-sm">Všechny recenze pocházejí od skutečných zákazníků.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-600">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <h3 className="font-bold text-lg mb-2">Vysoké hodnocení</h3>
            <p className="text-slate-600 text-sm">Průměrné hodnocení 4.8/5 z více než 1000 recenzí.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
              <User className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Diskrétnost</h3>
            <p className="text-slate-600 text-sm">Respektujeme soukromí našich zákazníků.</p>
          </div>
        </div>

        <TestimonialsSection />
      </div>

      <Footer />
    </div>
  );
}
