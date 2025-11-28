import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {language === 'de' ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'}
          </h2>
        </div>

        <div className="space-y-4">
          {t.faq.map((item, index) => (
            <div key={index} className="bg-slate-50 rounded-xl overflow-hidden border-2 border-slate-200 hover:border-emerald-300 transition-colors">
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-800 text-lg">{item.question}</span>
                <span className="text-2xl text-emerald-600">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
