import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { mockData } from '../mockData';

const Services = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const filters = ['all', 'Sales', 'Marketing', 'HR', 'Service', 'Operations'];
  
  const filteredServices = selectedFilter === 'all' 
    ? mockData.services 
    : mockData.services.filter(service => service.areas.includes(selectedFilter));

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ganzheitliche Beratung, Strategie & KI-Architektur – für Unternehmen mit echtem Digitalisierungsbedarf.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-emerald-500 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              {filter === 'all' ? 'Alle Bereiche' : filter}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {service.areas.map((area) => (
                      <Badge 
                        key={area} 
                        variant="secondary" 
                        className="text-xs bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                      >
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
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
                
                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies Teaser */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Praxisbeispiele & Success Stories
            </h3>
            <p className="text-slate-600 mb-6">
              Erfahren Sie, wie wir anderen Unternehmen geholfen haben, ihre Digitalisierungsziele zu erreichen.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-bold">HR</span>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">CRM</span>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 font-bold">KI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;