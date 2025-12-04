import { Zap, Heart, Clock, Shield, Leaf, Lock } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Okamžitý účinek",
    description: "Stačí užít 30-60 minut před akcí. Nástup je rychlý a spolehlivý."
  },
  {
    icon: Leaf,
    title: "Přírodní složení",
    description: "Ženšen, Maca, Rhodiola a aminokyseliny. Žádná nebezpečná chemie."
  },
  {
    icon: Shield,
    title: "Bezpečné a ověřené",
    description: "Schváleno Státním zdravotním ústavem ČR. Česká výroba s tradicí."
  },
  {
    icon: Zap,
    title: "Pevná erekce",
    description: "Podporuje mikrocirkulaci krve pro maximální tvrdost a výdrž."
  },
  {
    icon: Lock,
    title: "100% Diskrétní",
    description: "Balíček bez loga a reklam. Nikdo nepozná, co jste si objednali."
  },
  {
    icon: Heart,
    title: "Vyšší libido",
    description: "Afrodiziakální byliny přirozeně zvyšují chuť na sex a vitalitu."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Proč muži volí Proerectu?
          </h2>
          <p className="text-lg text-slate-600">
            Kombinace moderní vědy a tradiční bylinné medicíny pro maximální výkon bez vedlejších účinků.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
