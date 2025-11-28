import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={t.founder.image} 
                alt={t.founder.name}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Decorative Elements with clean colors */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-300"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-100 rounded-full opacity-60 group-hover:scale-110 transition-transform duration-300 delay-150"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                {language === 'de' ? 'Wer wir sind' : 'Who we are'}
              </h2>
              <div className="w-20 h-1 bg-emerald-500 rounded-full"></div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-slate-800">
                  {t.founder.name}
                </h3>
                <p className="text-lg text-blue-600 font-medium">
                  {t.founder.title}
                </p>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed">
                {t.founder.description}
              </p>

              <div className="bg-emerald-50 rounded-xl p-6 border-l-4 border-emerald-500">
                <p className="text-slate-700 font-medium italic">
                  "{t.founder.quote}"
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">
                    {t.founder.stats.experience}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    {language === 'de' ? 'Jahre Erfahrung' : 'Years Experience'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">
                    {t.founder.stats.teamMembers}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    {language === 'de' ? 'Team-Mitglieder' : 'Team Members'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">
                    {t.founder.stats.languages}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    {language === 'de' ? 'Sprachen' : 'Languages'}
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h4 className="font-semibold text-slate-800 mb-3">
                  {language === 'de' ? 'Unser Team spricht:' : 'Our team speaks:'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {t.team.languages.map((lang, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white rounded-full text-sm font-medium text-slate-700 shadow-sm"
                    >
                      {lang}
                    </span>
                  ))}
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
