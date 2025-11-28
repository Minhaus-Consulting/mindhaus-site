import React from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section className="pt-16 min-h-screen bg-white overflow-hidden">
      {/* Background Elements with subtle colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-50 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-50 rounded-full opacity-30 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-50 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 mb-6 leading-relaxed max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 flex-wrap">
            {t.hero.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-lg">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-emerald-700 font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.primaryCTA}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {t.hero.secondaryCTA}
            </Button>
          </div>

          {/* Video/Image Placeholder */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={t.hero.videoPlaceholder} 
                alt={language === 'de' ? 'Strategische Beratung Team' : 'Strategic Consulting Team'} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Secondary Info */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-slate-500 text-sm">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span>DACH • UAE • Saudi Arabia</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>{language === 'de' ? 'Strategische Beratung' : 'Strategic Consulting'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>{language === 'de' ? '10+ Jahre Erfahrung' : '10+ Years Experience'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
