import React from 'react';
import { Button } from './ui/button';
import { mockData } from '../mockData';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Background Elements with Logo-inspired colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-emerald-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        
        {/* Mint Leaf SVG with Logo colors */}
        <div className="absolute top-1/4 right-1/4 opacity-5 animate-float">
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-gradient-logo">
            <defs>
              <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
            <path d="M60 10 C30 10, 10 30, 10 60 C10 90, 30 110, 60 110 C90 110, 110 90, 110 60 C110 30, 90 10, 60 10 Z" 
                  fill="url(#leafGradient)" stroke="url(#leafGradient)" strokeWidth="2"/>
            <path d="M60 10 C70 30, 80 50, 60 60 C40 50, 50 30, 60 10 Z" 
                  fill="none" stroke="url(#leafGradient)" strokeWidth="1"/>
          </svg>
        </div>
        
        {/* Globe SVG with Logo colors */}
        <div className="absolute bottom-1/4 left-1/4 opacity-5 animate-float delay-300">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="globeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="none" stroke="url(#globeGradient)" strokeWidth="2"/>
            <ellipse cx="50" cy="50" rx="20" ry="45" fill="none" stroke="url(#globeGradient)" strokeWidth="1"/>
            <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke="url(#globeGradient)" strokeWidth="1"/>
            <line x1="5" y1="50" x2="95" y2="50" stroke="url(#globeGradient)" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <svg width="80" height="80" viewBox="0 0 80 80" className="group-hover:scale-110 transition-transform duration-300">
                    <defs>
                      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#10B981" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <path d="M40 8 C20 8, 8 20, 8 40 C8 60, 20 72, 40 72 C60 72, 72 60, 72 40 C72 20, 60 8, 40 8 Z" 
                          fill="url(#logoGradient)" stroke="url(#logoGradient)" strokeWidth="2" filter="url(#glow)"/>
                    <path d="M40 8 C46 20, 52 32, 40 40 C28 32, 34 20, 40 8 Z" 
                          fill="white" stroke="url(#logoGradient)" strokeWidth="1"/>
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" className="absolute -top-2 -right-2 group-hover:rotate-180 transition-transform duration-500">
                    <defs>
                      <linearGradient id="globeSmallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#10B981" />
                      </linearGradient>
                    </defs>
                    <circle cx="12" cy="12" r="10" fill="none" stroke="url(#globeSmallGradient)" strokeWidth="1"/>
                    <ellipse cx="12" cy="12" rx="4" ry="10" fill="none" stroke="url(#globeSmallGradient)" strokeWidth="1"/>
                    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="url(#globeSmallGradient)" strokeWidth="1"/>
                  </svg>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  MINDhaus
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 glow-effect"
            >
              {mockData.hero.primaryCTA}
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {mockData.hero.secondaryCTA}
            </Button>
          </div>

          {/* Video/Image Placeholder */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={mockData.hero.videoPlaceholder} 
                alt="MINDhaus Office" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Info */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-slate-500 text-sm">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full"></span>
              <span>Dubai, UAE</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></span>
              <span>Globales Netzwerk</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-gradient-to-r from-emerald-600 to-purple-600 rounded-full"></span>
              <span>10+ Jahre Erfahrung</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;