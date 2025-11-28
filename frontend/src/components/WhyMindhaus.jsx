import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyMindhaus = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {language === 'de' ? 'Warum Mindhaus?' : 'Why Mindhaus?'}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {language === 'de'
              ? 'Ihre strategischen Partner für erfolgreiche Markteintritte'
              : 'Your strategic partners for successful market entries'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whyMindhaus.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-emerald-300 group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMindhaus;
