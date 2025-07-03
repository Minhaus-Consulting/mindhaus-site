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
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Erfolgsgeschichten aus der Praxis – von der Strategie bis zur Umsetzung
          </p>
        </div>

        {/* Testimonial Grid - 3 columns on desktop, responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-16 h-16 border-4 border-emerald-100">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback className="bg-emerald-500 text-white text-lg">
                      {testimonial.author[0]}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-yellow-400">
                      <path d="M10 2l2.5 5.5L18 8.5l-4 4 1 6-5-2.5L5 18.5l1-6-4-4 5.5-1L10 2z"/>
                    </svg>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="text-center">
                <blockquote className="text-lg text-slate-700 leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="space-y-1">
                  <div className="text-lg font-semibold text-slate-800">
                    {testimonial.author}
                  </div>
                  <div className="text-slate-500">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8 text-slate-600">
            Vertrauen von führenden Unternehmen
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {mockData.clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="text-slate-600 font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats - 3 column layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-emerald-600 mb-2">
              98%
            </div>
            <div className="text-slate-600">Kundenzufriedenheit</div>
          </div>
          <div className="text-center bg-white rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              150+
            </div>
            <div className="text-slate-600">Erfolgreiche Projekte</div>
          </div>
          <div className="text-center bg-white rounded-xl p-8 shadow-lg">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              24/7
            </div>
            <div className="text-slate-600">Support & Beratung</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;