import React from 'react';
import { mockData } from '../mockData';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={mockData.founder.image} 
                alt={mockData.founder.name}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-100 rounded-full opacity-80 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 rounded-full opacity-80 group-hover:scale-110 transition-transform duration-300 delay-150"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-800 leading-tight">
                Wer wir sind
              </h2>
              <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-slate-800">
                  {mockData.founder.name}
                </h3>
                <p className="text-lg text-emerald-600 font-medium">
                  {mockData.founder.title}
                </p>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                {mockData.founder.description}
              </p>

              <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-emerald-500">
                <p className="text-slate-700 font-medium italic">
                  "{mockData.founder.location}"
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">10+</div>
                  <div className="text-sm text-slate-600">Jahre Erfahrung</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-slate-600">Projekte</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">100%</div>
                  <div className="text-sm text-slate-600">Praxisnähe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;