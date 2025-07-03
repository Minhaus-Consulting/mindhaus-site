import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { mockData } from '../mockData';

const WhyMindhaus = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Warum MINDhaus Consulting?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Mehr als nur Beratung – wir sind Ihr Partner für nachhaltige digitale Transformation
          </p>
        </div>

        {/* Why MINDhaus Grid - 2x3 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.whyMindhaus.map((item, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 leading-tight">
                  {item.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Bereit für Ihre digitale Transformation?
          </h3>
          <p className="text-lg text-slate-600 mb-6">
            Entdecken Sie, wie unsere maßgeschneiderten KI-Lösungen Ihr Unternehmen voranbringen können
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Kostenlose Potenzialanalyse anfordern
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyMindhaus;