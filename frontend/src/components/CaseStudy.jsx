import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { mockData } from '../mockData';

const CaseStudy = () => {
  const caseStudy = mockData.caseStudy;

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Erfolgsgeschichte aus der Praxis
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Wie ein B2B-Softwareanbieter mit KI-Automatisierung durchstartete
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Case Study Content */}
          <div className="space-y-6">
            <Card className="bg-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">
                  {caseStudy.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {caseStudy.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-slate-800 text-lg">Ergebnisse nach 6 Monaten:</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="text-emerald-600">
                            <path d="M10 3L4.5 8.5 2 6"/>
                          </svg>
                        </div>
                        <span className="text-slate-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                  <blockquote className="text-lg text-slate-700 italic mb-2">
                    "{caseStudy.testimonial}"
                  </blockquote>
                  <cite className="text-emerald-700 font-semibold not-italic">
                    – {caseStudy.author}
                  </cite>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Visual Results */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-emerald-500 text-white border-0 shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold mb-2">320%</div>
                  <div className="text-xl opacity-90">Marketing-ROI Steigerung</div>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-500 text-white border-0 shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold mb-2">45 → 20</div>
                  <div className="text-xl opacity-90">Tage Time-to-Hire</div>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-500 text-white border-0 shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-xl opacity-90">Pipeline-Vorhersagbarkeit</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Ähnliche Ergebnisse für Ihr Unternehmen?
          </h3>
          <p className="text-lg text-slate-600 mb-6">
            Lassen Sie uns gemeinsam analysieren, welches Potenzial in Ihren Prozessen steckt
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Kostenlose Potenzialanalyse starten
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;