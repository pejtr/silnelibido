import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check, RefreshCw, HelpCircle } from "lucide-react";
import productsData from "../data/products.json";

type Question = {
  id: number;
  text: string;
  options: {
    text: string;
    nextId?: number;
    resultId?: string;
  }[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "Pro koho hledáte produkt?",
    options: [
      { text: "Pro muže", nextId: 2 },
      { text: "Pro ženy", resultId: "proerecta-women" },
    ],
  },
  {
    id: 2,
    text: "Jaký je váš hlavní cíl?",
    options: [
      { text: "Okamžitá podpora erekce", nextId: 3 },
      { text: "Dlouhodobá péče a vitalita", nextId: 4 },
      { text: "Zdraví prostaty", resultId: "proerecta-prostate" },
    ],
  },
  {
    id: 3,
    text: "Jakou formu preferujete?",
    options: [
      { text: "Klasické tobolky", resultId: "proerecta-klasik" },
      { text: "Rychlý nápoj (Shot)", resultId: "proerecta-shot" },
      { text: "Chutné bonbony", resultId: "proerecta-gumidci" },
    ],
  },
  {
    id: 4,
    text: "Kolik je vám let?",
    options: [
      { text: "Méně než 40", resultId: "proerecta-klasik" },
      { text: "Více než 40", resultId: "proerecta-long" },
    ],
  },
];

export function ProductQuiz() {
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [resultId, setResultId] = useState<string | null>(null);
  const [isStarted, setIsStarted] = useState(false);

  const currentQuestion = questions.find((q) => q.id === currentQuestionId);
  const resultProduct = resultId ? productsData.find((p) => p.id === resultId) : null;

  const handleOptionClick = (option: { nextId?: number; resultId?: string }) => {
    if (option.resultId) {
      setResultId(option.resultId);
    } else if (option.nextId) {
      setCurrentQuestionId(option.nextId);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionId(1);
    setResultId(null);
    setIsStarted(false);
  };

  if (!isStarted) {
    return (
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          {/* Bouncing Arrow */}
          <div className="flex justify-center mb-4">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#D32F2F" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-8 h-8 animate-bounce"
            >
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </div>
          <Card className="max-w-3xl mx-auto overflow-hidden border-none shadow-xl bg-white">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 bg-[#2A2A5A] p-8 flex flex-col justify-center items-center text-center text-white">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                  <HelpCircle className="w-8 h-8 text-[#FFC107]" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Nevíte si rady?</h3>
                <p className="text-white/80 text-sm">
                  Odpovězte na 3 jednoduché otázky a najdeme pro vás ideální řešení.
                </p>
              </div>
              <div className="w-full md:w-3/5 p-8 flex flex-col justify-center items-center text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Najděte svůj ideální produkt
                </h2>
                <p className="text-slate-600 mb-8">
                  Každý muž (i žena) má jiné potřeby. Náš krátký průvodce vám pomůže vybrat to nejlepší pro vás.
                </p>
                <Button 
                  onClick={() => setIsStarted(true)}
                  className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full md:w-auto"
                >
                  Spustit průvodce <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-slate-50" id="quiz">
      <div className="container px-4 md:px-6">
        <Card className="max-w-2xl mx-auto border-none shadow-2xl bg-white overflow-hidden">
          <CardHeader className="bg-[#2A2A5A] text-white p-6 text-center relative">
            <CardTitle className="text-xl md:text-2xl font-bold flex items-center justify-center gap-2">
              {resultProduct ? (
                <>
                  <Check className="w-6 h-6 text-green-400" /> Vaše ideální volba
                </>
              ) : (
                <>
                  Otázka {questions.findIndex(q => q.id === currentQuestionId) + 1} z {questions.length}
                </>
              )}
            </CardTitle>
            {!resultProduct && (
              <div className="absolute bottom-0 left-0 h-1 bg-[#D32F2F] transition-all duration-500" 
                style={{ width: `${((questions.findIndex(q => q.id === currentQuestionId) + 1) / questions.length) * 100}%` }}>
              </div>
            )}
          </CardHeader>
          
          <CardContent className="p-8">
            {resultProduct ? (
              <div className="text-center animate-in fade-in zoom-in duration-500">
                <div className="mb-6 relative inline-block">
                  <div className="absolute inset-0 bg-red-100 rounded-full blur-xl opacity-50 animate-pulse"></div>
                  <img 
                    src={resultProduct.image} 
                    alt={resultProduct.name} 
                    className="h-48 md:h-64 object-contain relative z-10 mx-auto drop-shadow-xl"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-[#2A2A5A] mb-2">{resultProduct.name}</h3>
                <p className="text-slate-600 mb-6 max-w-md mx-auto">{resultProduct.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.location.href = resultProduct.url}
                    className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    Koupit nyní - {resultProduct.price} {resultProduct.currency}
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={resetQuiz}
                    className="border-slate-200 hover:bg-slate-50 text-slate-600 px-6 py-6 rounded-full"
                  >
                    <RefreshCw className="mr-2 w-4 h-4" /> Zkusit znovu
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in slide-in-from-right duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-center text-slate-800 mb-8">
                  {currentQuestion?.text}
                </h3>
                
                <div className="grid gap-4">
                  {currentQuestion?.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className="w-full text-left p-5 rounded-xl border-2 border-slate-100 hover:border-[#D32F2F] hover:bg-red-50 transition-all duration-200 flex items-center justify-between group"
                    >
                      <span className="font-medium text-lg text-slate-700 group-hover:text-[#D32F2F]">{option.text}</span>
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#D32F2F] transition-colors" />
                    </button>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <button 
                    onClick={resetQuiz}
                    className="text-sm text-slate-400 hover:text-slate-600 underline decoration-slate-300 underline-offset-4"
                  >
                    Začít znovu
                  </button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
