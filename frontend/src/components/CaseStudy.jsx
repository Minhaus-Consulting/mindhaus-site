import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CaseStudy = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              {t.caseStudy.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {t.caseStudy.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {t.caseStudy.results.map((result, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">✓</div>
                <p className="text-slate-700 font-medium">{result}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-xl p-8 border-l-4 border-emerald-500">
            <p className="text-lg text-slate-700 italic mb-4">
              "{t.caseStudy.testimonial}"
            </p>
            <p className="text-slate-600 font-medium">— {t.caseStudy.author}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
