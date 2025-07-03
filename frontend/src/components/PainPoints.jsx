import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { mockData } from '../mockData';

const PainPoints = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Bekannte Herausforderungen?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Diese Probleme lösen wir täglich mit KI-Automatisierung für unsere Kunden
          </p>
        </div>

        {/* Pain Points Grid - 2x3 Layout (6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mockData.painPoints.map((item, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="text-red-600">
                      <path d="M6 0C2.69 0 0 2.69 0 6s2.69 6 6 6 6-2.69 6-6S9.31 0 6 0zM5.25 2.25h1.5v4.5h-1.5v-4.5zm0 6h1.5v1.5h-1.5v-1.5z"/>
                    </svg>
                  </div>
                  <span className="text-red-600 font-medium text-xs uppercase tracking-wide">Problem</span>
                </div>
                <CardTitle className="text-lg font-bold text-slate-800 mb-3 leading-tight">
                  {item.problem}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="border-t-2 border-emerald-100 pt-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="text-emerald-600">
                        <path d="M6 0C2.69 0 0 2.69 0 6s2.69 6 6 6 6-2.69 6-6S9.31 0 6 0zM4.875 9L1.5 5.625 2.625 4.5l2.25 2.25 4.5-4.5L10.5 3.375 4.875 9z"/>
                      </svg>
                    </div>
                    <span className="text-emerald-600 font-medium text-xs uppercase tracking-wide">Lösung</span>
                  </div>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-emerald-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Lassen Sie uns Ihre Herausforderungen lösen
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Kostenlose Potenzialanalyse – erfahren Sie, wie KI-Automatisierung Ihr Unternehmen voranbringt
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105">
            Jetzt Potenzialanalyse anfordern
          </button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;