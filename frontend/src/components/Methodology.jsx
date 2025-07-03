import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { mockData } from '../mockData';

const Methodology = () => {
  const steps = mockData.storyBrand.plan;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
            Unser bewährter 3-Schritte-Plan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Strukturierter Weg zur erfolgreichen Digitalisierung mit messbaren Ergebnissen
          </p>
          
          {/* Large Header with CTAs */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-2xl p-8 text-white mb-12">
            <h3 className="text-3xl font-bold mb-4">Bereit für Ihre digitale Transformation?</h3>
            <p className="text-xl mb-6 opacity-90">Starten Sie jetzt mit unserem bewährten Prozess</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Kostenloses Erstgespräch
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Methodik-Guide herunterladen
              </Button>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={step.step} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-emerald-500/10 transition-all duration-500"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="text-4xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    {index === 0 && "🎯"}
                    {index === 1 && "🚀"}
                    {index === 2 && "✨"}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                  {step.title}
                </CardTitle>
                <CardDescription className="text-slate-600 text-base">
                  {step.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wide">
                    Ergebnisse:
                  </h4>
                  <ul className="space-y-2">
                    {index === 0 && (
                      <>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                          <span className="text-slate-600">Klare Ist-Analyse</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full"></div>
                          <span className="text-slate-600">Potenzial-Bewertung</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                          <span className="text-slate-600">Erste Empfehlungen</span>
                        </li>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                          <span className="text-slate-600">Detaillierte Roadmap</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full"></div>
                          <span className="text-slate-600">Tool-Auswahl</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                          <span className="text-slate-600">Budget-Planung</span>
                        </li>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                          <span className="text-slate-600">Schrittweise Umsetzung</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full"></div>
                          <span className="text-slate-600">Team-Training</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                          <span className="text-slate-600">Nachhaltige Prozesse</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
                
                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connection Lines */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
          <svg width="100%" height="100" viewBox="0 0 800 100" className="opacity-20">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
            <path d="M100 50 Q250 25 400 50 T700 50" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" values="0;-10" dur="1s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>

        {/* Success Outcomes */}
        <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8 text-white text-center">
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