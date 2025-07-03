import React from 'react';
import { mockData } from '../mockData';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={mockData.founder.image} 
                alt={mockData.founder.name}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Decorative Elements with Logo Colors */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full opacity-80 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-emerald-400/20 rounded-full opacity-80 group-hover:scale-110 transition-transform duration-300 delay-150"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-emerald-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-emerald-500/10 transition-all duration-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                Wer wir sind
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  {mockData.founder.name}
                </h3>
                <p className="text-lg text-purple-600 font-medium">
                  {mockData.founder.title}
                </p>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                {mockData.founder.description}
              </p>

              <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-xl p-6 border-l-4 border-gradient-to-b border-blue-500">
                <p className="text-slate-700 font-medium italic">
                  "{mockData.founder.quote}"
                </p>
              </div>

              {/* Key Stats with Logo Colors */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {mockData.founder.stats.experience}
                  </div>
                  <div className="text-sm text-slate-600">Jahre Erfahrung</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {mockData.founder.stats.projects}
                  </div>
                  <div className="text-sm text-slate-600">Projekte</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {mockData.founder.stats.success}
                  </div>
                  <div className="text-sm text-slate-600">Praxisnähe</div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-6">
                {mockData.clientLogos.map((client, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-100 via-purple-100 to-emerald-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-slate-700">{client}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Office Images Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Unser Team & Arbeitsumgebung
            </h3>
            <p className="text-xl text-slate-600">
              Globales Netzwerk mit lokaler Expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockData.officeImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={image} 
                  alt={`Office ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold mb-1">
                    {index === 0 && "Modernes Büro"}
                    {index === 1 && "Team Collaboration"}
                    {index === 2 && "Innovation Space"}
                    {index === 3 && "Beratungsraum"}
                    {index === 4 && "Arbeitsplatz"}
                  </h4>
                  <p className="text-sm opacity-90">
                    {index === 0 && "Offene Arbeitsräume fördern Kreativität"}
                    {index === 1 && "Teamarbeit steht im Mittelpunkt"}
                    {index === 2 && "Raum für innovative Ideen"}
                    {index === 3 && "Persönliche Beratungsgespräche"}
                    {index === 4 && "Fokussiertes Arbeiten"}
                  </p>
                </div>
                
                {/* Glow border effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-emerald-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-emerald-500/20 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;