import React from 'react';

export function MedicalExpertsSection() {
  const experts = [
    {
      name: "MUDr. Jan Novák",
      role: "Vedoucí urolog",
      description: "Specialista s 20letou praxí v oblasti mužského zdraví a léčby erektilní dysfunkce. Garantuje odbornou stránku složení produktů Proerecta.",
      image: "/images/expert-1.webp" // Placeholder path
    },
    {
      name: "Ing. Petra Svobodová",
      role: "Nutriční specialistka",
      description: "Odbornice na výživu a fytoterapii. Zaměřuje se na synergické účinky bylinných extraktů pro maximální vstřebatelnost a účinnost.",
      image: "/images/expert-2.webp" // Placeholder path
    }
  ];

  return (
    <section className="py-16 bg-white flex flex-col items-center mx-auto">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Odborníci za Proerectou</h2>
          <p className="text-lg text-slate-600">
            Na vývoji našich produktů spolupracují přední čeští odborníci z oblasti urologie a výživy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {experts.map((expert, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-24 h-24 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden">
                {/* Placeholder for expert image - using a generic avatar if image fails or is placeholder */}
                <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900">{expert.name}</h3>
                <p className="text-red-600 font-medium mb-2">{expert.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {expert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
