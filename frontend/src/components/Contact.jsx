import React from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              {language === 'de' ? 'Kontaktieren Sie uns' : 'Contact Us'}
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              {language === 'de'
                ? 'Lassen Sie uns gemeinsam Ihre individuelle Markteintritts-Strategie entwickeln'
                : 'Let\'s develop your individual market entry strategy together'}
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                  <p className="text-slate-600">{t.contact.email}</p>
                  <p className="text-slate-600">{t.contact.emailSecondary}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📱</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">
                    {language === 'de' ? 'Telefon' : 'Phone'}
                  </h3>
                  <p className="text-slate-600">{t.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">
                    {language === 'de' ? 'Standort' : 'Location'}
                  </h3>
                  <p className="text-slate-600">{t.contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              {language === 'de' ? 'Beratungsgespräch anfragen' : 'Request Consultation'}
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {language === 'de' ? 'Name' : 'Name'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder={language === 'de' ? 'Ihr Name' : 'Your name'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder={language === 'de' ? 'Ihre Email' : 'Your email'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {language === 'de' ? 'Nachricht' : 'Message'}
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder={language === 'de' ? 'Erzählen Sie uns von Ihrem Projekt...' : 'Tell us about your project...'}
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 text-lg font-semibold rounded-lg"
              >
                {language === 'de' ? 'Nachricht senden' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
