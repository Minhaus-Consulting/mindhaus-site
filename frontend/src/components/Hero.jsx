import React from 'react';
import { Button } from './ui/button';
import { mockData } from '../mockData';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>
        
        {/* Mint Leaf SVG */}
        <div className="absolute top-1/4 right-1/4 opacity-5 animate-float">
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-emerald-500">
            <path d="M60 10 C30 10, 10 30, 10 60 C10 90, 30 110, 60 110 C90 110, 110 90, 110 60 C110 30, 90 10, 60 10 Z" 
                  fill="currentColor" stroke="currentColor" strokeWidth="2"/>
            <path d="M60 10 C70 30, 80 50, 60 60 C40 50, 50 30, 60 10 Z" 
                  fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
        
        {/* Globe SVG */}
        <div className="absolute bottom-1/4 left-1/4 opacity-5 animate-float delay-300">
          <svg width="100" height="100" viewBox="0 0 100 100" className="text-blue-500">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
            <ellipse cx="50" cy="50" rx="20" ry="45" fill="none" stroke="currentColor" strokeWidth="1"/>
            <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke="currentColor" strokeWidth="1"/>
            <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <svg width="60" height="60" viewBox="0 0 60 60" className="text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                    <path d="M30 5 C15 5, 5 15, 5 30 C5 45, 15 55, 30 55 C45 55, 55 45, 55 30 C55 15, 45 5, 30 5 Z" 
                          fill="currentColor" stroke="currentColor" strokeWidth="2"/>
                    <path d="M30 5 C35 15, 40 25, 30 30 C20 25, 25 15, 30 5 Z" 
                          fill="white" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 20 20" className="absolute -top-2 -right-2 text-blue-500 group-hover:rotate-180 transition-transform duration-500">
                    <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <ellipse cx="10" cy="10" rx="3" ry="8" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <ellipse cx="10" cy="10" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </div>
                <div className="text-2xl font-bold text-slate-800">
                  MIND<span className="text-emerald-500">haus</span>
                </div>
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            {mockData.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            {mockData.hero.subtitle}
          </p>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {mockData.hero.cta}
            </Button>
            
            {/* Secondary Info */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-slate-500 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>Dubai, UAE</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Globales Netzwerk</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>10+ Jahre Erfahrung</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;