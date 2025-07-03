import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { mockData } from '../mockData';

const Testimonials = () => {
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

        {/* Testimonial Grid - 6 smaller testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mockData.testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center pb-3">
                <div className="flex justify-center mb-3">
                  <Avatar className="w-12 h-12 border-2 border-emerald-100">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback className="bg-emerald-500 text-white text-sm">
                      {testimonial.author[0]}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Stars */}
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-yellow-400">
                      <path d="M8 1.6l1.6 3.2L13 5.4l-2.4 2.4L11.2 11 8 9.2 4.8 11l.6-3.2L3 5.4l3.4-.6L8 1.6z"/>
                    </svg>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="text-center">
                <blockquote className="text-sm text-slate-700 leading-relaxed mb-3 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-slate-800">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-slate-500">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mockData.clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <span className="text-slate-600 font-medium text-sm text-center">{client}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats - 3 column layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-emerald-600 mb-2">
              98%
            </div>
            <div className="text-slate-600">Kundenzufriedenheit</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              150+
            </div>
            <div className="text-slate-600">Erfolgreiche Projekte</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">
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