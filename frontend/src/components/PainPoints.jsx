import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PainPoints = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {language === 'de' ? 'Ihre Herausforderungen' : 'Your Challenges'}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {language === 'de' 
              ? 'Wir verstehen die Herausforderungen bei Marktein tritten und bieten individuelle Lösungen'
              : 'We understand the challenges of market entries and offer individual solutions'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.painPoints.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-emerald-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">❌</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800 mb-2">{item.problem}</h3>
                </div>
              </div>
              <div className="mt-4 flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-emerald-700 font-medium">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
