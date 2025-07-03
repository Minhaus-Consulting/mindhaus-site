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

        {/* Pain Points Table */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mockData.painPoints.map((item, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-red-600">
                      <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8S12.42 0 8 0zM7 3h2v6H7V3zm0 8h2v2H7v-2z"/>
                    </svg>
                  </div>
                  <span className="text-red-600 font-semibold text-sm">PROBLEM</span>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 mb-4">
                  {item.problem}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="border-t-2 border-emerald-100 pt-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-emerald-600">
                        <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8S12.42 0 8 0zM6.5 12L2 7.5 3.5 6l3 3 6-6L14 4.5 6.5 12z"/>
                      </svg>
                    </div>
                    <span className="text-emerald-600 font-semibold text-sm">LÖSUNG</span>
                  </div>
                  <p className="text-slate-700 font-medium">
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