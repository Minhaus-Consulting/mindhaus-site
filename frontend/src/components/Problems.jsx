import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { mockData } from '../mockData';

const Problems = () => {
  const problems = mockData.storyBrand.problems;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Die Herausforderungen unserer Zeit
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Unternehmen stehen vor komplexen Digitalisierungsherausforderungen, die ohne die richtige Strategie zum Stillstand führen können.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-slate-700 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                    <path d="M12 8v4M12 16h.01"/>
                  </svg>
                </div>
                <CardTitle className="text-white text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                  {problem}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300 text-base">
                  {index === 0 && "Projekte bleiben stecken, Teams arbeiten ineffizient, und die Konkurrenz zieht vorbei."}
                  {index === 1 && "Expertise verlässt das Unternehmen, ohne strukturiert dokumentiert zu werden."}
                  {index === 2 && "Ohne klare Roadmap entstehen Insellösungen, die nicht zusammenarbeiten."}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sci-Fi Visual Elements */}
        <div className="flex justify-center space-x-8 mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
            <svg width="32" height="32" viewBox="0 0 32 32" className="text-blue-400">
              <path d="M16 2L26 7v10c0 5.55-3.84 9.739-9 11C11.84 26.739 8 22.55 8 17V7l8-5z" fill="currentColor" opacity="0.3"/>
              <path d="M16 8v8M16 20h.01" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-emerald-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
            <svg width="32" height="32" viewBox="0 0 32 32" className="text-purple-400">
              <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 8v8l4 4" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-emerald-500/30">
            <svg width="32" height="32" viewBox="0 0 32 32" className="text-emerald-400">
              <path d="M16 2L24 8v8l-8 6-8-6V8l8-6z" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 2v22M8 8l16 8M24 8L8 16" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
            </svg>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Lassen Sie uns diese Herausforderungen gemeinsam lösen
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Mit bewährten Methoden und globalem Netzwerk bringen wir Ihr Unternehmen sicher durch die digitale Transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problems;