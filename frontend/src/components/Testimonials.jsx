import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { mockData } from '../mockData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = mockData.testimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Erfolgsgeschichten aus der Praxis – von der Strategie bis zur Umsetzung
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-sm border-slate-700 min-h-[300px] flex flex-col justify-center">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-6">
                <Avatar className="w-20 h-20 border-4 border-gradient-to-r from-blue-400 to-emerald-400">
                  <AvatarImage src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} />
                  <AvatarFallback className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xl">
                    {testimonials[currentIndex].author[0]}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </CardHeader>
            
            <CardContent className="text-center">
              <blockquote className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="space-y-2">
                <div className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-slate-400">
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
              <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/>
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-purple-600 to-emerald-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-emerald-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
              <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-blue-400 to-emerald-400 scale-125'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8 text-slate-300">
            Vertrauen von führenden Unternehmen
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {mockData.clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:bg-white/10"
              >
                <span className="text-slate-300 font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-slate-300">Kundenzufriedenheit</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              150+
            </div>
            <div className="text-slate-300">Erfolgreiche Projekte</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-slate-300">Support & Beratung</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;