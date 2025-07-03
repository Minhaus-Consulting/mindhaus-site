import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { mockData } from '../mockData';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-900/20 rounded-full blur-3xl"></div>
        
        {/* Dubai location indicator */}
        <div className="absolute top-1/2 right-1/4 opacity-10">
          <svg width="80" height="80" viewBox="0 0 80 80" className="text-emerald-400">
            <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="40" cy="40" r="3" fill="currentColor"/>
            <text x="40" y="60" textAnchor="middle" className="text-xs" fill="currentColor">Dubai</text>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight">
                Bereit für den nächsten Schritt?
              </h2>
              <p className="text-xl text-slate-300">
                Lassen Sie uns gemeinsam Ihre Digitalisierungsstrategie entwickeln.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">📧</span>
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-slate-300">{mockData.contact.email}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">📞</span>
                </div>
                <div>
                  <div className="font-semibold">Telefon</div>
                  <div className="text-slate-300">{mockData.contact.phone}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🌍</span>
                </div>
                <div>
                  <div className="font-semibold">Standort</div>
                  <div className="text-slate-300">{mockData.contact.address}</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">💼</span>
                </div>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <a href={mockData.contact.linkedin} className="text-blue-400 hover:text-blue-300 transition-colors">
                    Marwa Toprak
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="font-semibold mb-4 text-emerald-400">
                Warum MINDhaus Consulting?
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Kostenloses Erstgespräch</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Individuelle Lösungskonzepte</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Globales Expertennetzwerk</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Praxiserprobte Methoden</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/5 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">
                Jetzt unverbindlich anfragen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Ihr Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-slate-600 text-white placeholder-slate-300"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="E-Mail Adresse"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-slate-600 text-white placeholder-slate-300"
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="company"
                    placeholder="Unternehmen"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white/10 border-slate-600 text-white placeholder-slate-300"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="bg-white/10 border-slate-600 text-white placeholder-slate-300"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;