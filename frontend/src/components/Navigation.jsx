import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Über uns' },
    { id: 'methodology', label: 'Methodik' },
    { id: 'services', label: 'Leistungen' },
    { id: 'testimonials', label: 'Referenzen' },
    { id: 'contact', label: 'Kontakt' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <svg width="32" height="32" viewBox="0 0 32 32" className="group-hover:scale-110 transition-transform duration-300">
                <defs>
                  <linearGradient id="navLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
                <path d="M16 2 C8 2, 2 8, 2 16 C2 24, 8 30, 16 30 C24 30, 30 24, 30 16 C30 8, 24 2, 16 2 Z" 
                      fill="url(#navLogoGradient)" stroke="url(#navLogoGradient)" strokeWidth="2"/>
                <path d="M16 2 C18 8, 21 14, 16 16 C11 14, 14 8, 16 2 Z" 
                      fill="white" stroke="url(#navLogoGradient)" strokeWidth="1"/>
              </svg>
              <svg width="10" height="10" viewBox="0 0 10 10" className="absolute -top-1 -right-1">
                <defs>
                  <linearGradient id="navGlobeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
                <circle cx="5" cy="5" r="4" fill="none" stroke="url(#navGlobeGradient)" strokeWidth="1"/>
                <ellipse cx="5" cy="5" rx="1.5" ry="4" fill="none" stroke="url(#navGlobeGradient)" strokeWidth="1"/>
                <ellipse cx="5" cy="5" rx="4" ry="1.5" fill="none" stroke="url(#navGlobeGradient)" strokeWidth="1"/>
              </svg>
            </div>
            <div className={`text-lg font-bold transition-colors ${
              isScrolled ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent' : 'text-white'
            }`}>
              MINDhaus
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:bg-gradient-to-r hover:from-blue-600 hover:to-emerald-600 hover:bg-clip-text hover:text-transparent ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 glow-effect"
              onClick={() => scrollToSection('contact')}
            >
              Beratung anfragen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMobileMenuOpen ? (
                  <path d="M18 6 L6 18 M6 6 L18 18" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-lg mt-2 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 text-white py-3 rounded-full"
                onClick={() => scrollToSection('contact')}
              >
                Beratung anfragen
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;