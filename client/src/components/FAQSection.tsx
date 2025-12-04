import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Jak rychle Proerecta účinkuje?",
    answer: "Účinek nastupuje přibližně 30-60 minut po užití tobolky. U varianty SHOT je nástup ještě rychlejší, již do 30 minut."
  },
  {
    question: "Je užívání bezpečné?",
    answer: "Ano, Proerecta je doplněk stravy s přírodním složením, který je řádně notifikován a schválen Státním zdravotním ústavem ČR. Neobsahuje žádné nebezpečné chemické látky."
  },
  {
    question: "Jak je zásilka zabalená?",
    answer: "Absolutně diskrétně. Používáme neutrální krabice bez jakéhokoliv loga nebo nápisu, který by prozrazoval obsah. Nikdo (ani pošťák, ani sousedé) se nedozví, co jste si objednali."
  },
  {
    question: "Pomůže mi Proerecta i ve vyšším věku?",
    answer: "Ano, Proerecta je navržena tak, aby pomáhala dospělým mužům každého věku. Máme mnoho spokojených zákazníků ve věku 60+."
  },
  {
    question: "Musím Proerectu užívat pravidelně?",
    answer: "Proerecta KLASIK a SHOT jsou určeny pro jednorázové užití před sexem. Nemusíte je brát každý den. Pro dlouhodobou péči o vitalitu doporučujeme variantu LONG."
  }
];

export function FAQSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Často kladené otázky
          </h2>
          <p className="text-lg text-slate-600">
            Máte další dotazy? Zde jsou odpovědi na ty nejčastější.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border border-slate-200 px-6 py-2">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-slate-100 last:border-0">
              <AccordionTrigger className="text-left text-lg font-medium py-6 hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
