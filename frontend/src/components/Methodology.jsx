import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { mockData } from '../mockData';

const Methodology = () => {
  const steps = mockData.storyBrand.plan;

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Unser bewährter 3-Schritte-Plan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Strukturierter Weg zur erfolgreichen Digitalisierung mit messbaren Ergebnissen
          </p>
          
          {/* Large Header with CTAs - Bentobox style */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Bereit für Ihre digitale Transformation?</h3>
            <p className="text-xl text-slate-600 mb-6 opacity-90">Starten Sie jetzt mit unserem bewährten Prozess</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Kostenloses Erstgespräch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Methodik-Guide herunterladen
              </Button>
            </div>
          </div>
        </div>

        {/* Steps Grid - Clean 3 column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={step.step} className="relative overflow-hidden group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    {index === 0 && "🎯"}
                    {index === 1 && "🚀"}
                    {index === 2 && "✨"}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                  {step.title}
                </CardTitle>
                <CardDescription className="text-slate-600 text-base">
                  {step.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wide">
                    Ergebnisse:
                  </h4>
                  <ul className="space-y-2">
                    {index === 0 && (
                      <>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span className="text-slate-600">Klare Ist-Analyse</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-slate-600">Potenzial-Bewertung</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-slate-600">Erste Empfehlungen</span>
                        </li>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span className="text-slate-600">Detaillierte Roadmap</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-slate-600">Tool-Auswahl</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-slate-600">Budget-Planung</span>
                        </li>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span className="text-slate-600">Schrittweise Umsetzung</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-slate-600">Team-Training</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-slate-600">Nachhaltige Prozesse</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
                
                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1 bg-emerald-500 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Outcomes */}
        <div className="bg-emerald-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Das Ergebnis</h3>
          <p className="text-xl mb-6 opacity-90">
            {mockData.storyBrand.success}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-90">Erfolgsrate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">3-6x</div>
              <div className="text-sm opacity-90">ROI Steigerung</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">60%</div>
              <div className="text-sm opacity-90">Zeitersparnis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;