import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { mockData } from '../mockData';

const Services = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const filters = ['all', 'Sales', 'Marketing', 'HR', 'Service', 'Operations'];
  
  const filteredServices = selectedFilter === 'all' 
    ? mockData.services 
    : mockData.services.filter(service => service.areas.includes(selectedFilter));

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Large Header Section with Bentobox style */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-2xl p-12 shadow-lg mb-12 relative overflow-hidden">
            {/* Subtle background patterns */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-50 rounded-full opacity-50"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
                Unsere Leistungen
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Ganzheitliche Beratung, Strategie & KI-Architektur – für Unternehmen mit echtem Digitalisierungsbedarf
              </p>
              
              {/* Video/Image Placeholder */}
              <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl mb-8">
                <img 
                  src="https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg" 
                  alt="Services Overview" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Two CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Kostenlose Beratung starten
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Service-Portfolio herunterladen
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedFilter === filter
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 border border-slate-200'
              }`}
            >
              {filter === 'all' ? 'Alle Bereiche' : filter}
            </button>
          ))}
        </div>

        {/* Services Grid - 2x2 Bentobox Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden cursor-pointer bg-white"
            >
              {/* Service Header Image */}
              {service.headerImage && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.headerImage} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">{service.title}</h3>
                  </div>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {service.areas.map((area) => (
                      <Badge 
                        key={area} 
                        className={`text-xs transition-all duration-300 ${
                          area === 'Sales' ? 'bg-blue-100 text-blue-700' :
                          area === 'Marketing' ? 'bg-purple-100 text-purple-700' :
                          area === 'HR' ? 'bg-emerald-100 text-emerald-700' :
                          'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {!service.headerImage && (
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-all duration-300">
                    {service.title}
                  </CardTitle>
                )}
                
                <CardDescription className="text-slate-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wide">
                    Ihre Vorteile:
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-slate-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Featured Service Highlight */}
                {service.featured && (
                  <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                    <span className="text-sm font-medium text-emerald-700">
                      ⭐ Unser Hauptfokus: Strategische Beratung für nachhaltige Transformation
                    </span>
                  </div>
                )}
                
                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1 bg-emerald-500 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies Teaser - Bentobox style */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Praxisbeispiele & Success Stories
            </h3>
            <p className="text-xl text-slate-600 mb-6">
              Erfahren Sie, wie wir anderen Unternehmen geholfen haben, ihre Digitalisierungsziele zu erreichen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">HR</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Mitarbeiter-Onboarding</h4>
              <p className="text-sm text-slate-600">50% schnellere Einarbeitung durch KI-gestützte Prozesse</p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">CRM</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Sales-Automatisierung</h4>
              <p className="text-sm text-slate-600">300% Steigerung der Lead-Qualifikation</p>
            </div>
            
            <div className="bg-emerald-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">KI</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Predictive Analytics</h4>
              <p className="text-sm text-slate-600">Vorhersage-Genauigkeit von 95% erreicht</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;