import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { mockData } from '../mockData';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-slate-600">
            Alles was Sie über KI-Automatisierung wissen müssen
          </p>
        </div>

        <div className="space-y-4">
          {mockData.faq.map((item, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="cursor-pointer" onClick={() => toggleFAQ(index)}>
                <CardTitle className="flex items-center justify-between text-lg font-semibold text-slate-800">
                  <span>{item.question}</span>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </CardTitle>
              </CardHeader>
              
              {openIndex === index && (
                <CardContent className="pt-0">
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-slate-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Weitere Fragen?
          </h3>
          <p className="text-lg text-slate-600 mb-6">
            {mockData.secondaryCTA}
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Jetzt Erstgespräch vereinbaren
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;