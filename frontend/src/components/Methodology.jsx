import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Methodology = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {language === 'de' ? 'Unsere Methodik' : 'Our Methodology'}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {language === 'de'
              ? 'Bewährter 3-Phasen-Ansatz für erfolgreiche Markteintritte'
              : 'Proven 3-phase approach for successful market entries'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.storyBrand.plan.map((phase) => (
            <div key={phase.step} className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-emerald-300">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                  {phase.step}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {phase.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
              {phase.step < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="text-emerald-500 text-4xl">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
