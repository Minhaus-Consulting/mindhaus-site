import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t, language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  const filters = ['all', 'Strategy', 'Marketing', 'Networking', 'HR'];
  
  const filteredServices = selectedFilter === 'all' 
    ? t.services 
    : t.services.filter(service => service.areas.includes(selectedFilter));

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Large Header Section */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-2xl p-12 shadow-lg mb-12 relative overflow-hidden">
            {/* Subtle background patterns */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-50 rounded-full opacity-50"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
                {language === 'de' ? 'Unsere Services' : 'Our Services'}
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                {language === 'de' 
                  ? 'Strategische Beratung für individuelle Markteintritte – keine Standardlösungen'
                  : 'Strategic consulting for individual market entries – no standard solutions'}
              </p>
              
              {/* Image */}
              <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl mb-8">
                <img 
                  src="/images/strategy-session.jpg" 
                  alt={language === 'de' ? 'Strategische Beratung' : 'Strategic Consulting'} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3">
                {filters.map((filter) => (
                  <Button
                    key={filter}
                    variant={selectedFilter === filter ? 'default' : 'outline'}
                    className={`${
                      selectedFilter === filter
                        ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                        : 'bg-white hover:bg-slate-100 text-slate-700'
                    } px-6 py-2 rounded-full transition-all duration-300`}
                    onClick={() => setSelectedFilter(filter)}
                  >
                    {filter === 'all' ? (language === 'de' ? 'Alle' : 'All') : filter}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <Card 
              key={service.id} 
              className={`group hover:shadow-2xl transition-all duration-500 border-2 ${
                service.featured ? 'border-emerald-500 bg-emerald-50/30' : 'border-slate-200 hover:border-emerald-300'
              }`}
            >
              {service.headerImage && (
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.headerImage} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  {service.featured && (
                    <Badge className="absolute top-4 right-4 bg-emerald-500 text-white">
                      {language === 'de' ? 'Empfohlen' : 'Featured'}
                    </Badge>
                  )}
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-4xl">{service.icon}</span>
                  {service.results && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {service.results}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-2xl text-slate-800 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base text-slate-600 mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      {language === 'de' ? 'Leistungen:' : 'Benefits:'}
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2 text-slate-600">
                          <span className="text-emerald-500 mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    {service.areas.map((area, index) => (
                      <Badge key={index} variant="outline" className="bg-white">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'de' 
              ? 'Bereit für Ihren individuellen Markteintritt?' 
              : 'Ready for your individual market entry?'}
          </h3>
          <p className="text-xl mb-8 opacity-90">
            {language === 'de'
              ? 'Lassen Sie uns gemeinsam Ihre Strategie entwickeln'
              : 'Let\'s develop your strategy together'}
          </p>
          <Button 
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {language === 'de' ? 'Kostenlose Beratung anfordern' : 'Request Free Consultation'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
