import React from 'react';
import { mockData } from '../mockData';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-emerald-500">
                  <path d="M20 3 C10 3, 3 10, 3 20 C3 30, 10 37, 20 37 C30 37, 37 30, 37 20 C37 10, 30 3, 20 3 Z" 
                        fill="currentColor" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 3 C23 10, 27 17, 20 20 C13 17, 17 10, 20 3 Z" 
                        fill="white" stroke="currentColor" strokeWidth="1"/>
                </svg>
                <svg width="12" height="12" viewBox="0 0 12 12" className="absolute -top-1 -right-1 text-blue-400">
                  <circle cx="6" cy="6" r="5" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <ellipse cx="6" cy="6" rx="2" ry="5" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <ellipse cx="6" cy="6" rx="5" ry="2" fill="none" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
              <div className="text-xl font-bold">
                MIND<span className="text-emerald-500">haus</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              Digitalisierung & KI-Beratung aus Dubai für Unternehmen im Wandel.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-emerald-400">Leistungen</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Strategieberatung</li>
              <li>KI-Integration</li>
              <li>Tool-Implementierung</li>
              <li>Change Management</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-emerald-400">Unternehmen</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Über uns</li>
              <li>Team</li>
              <li>Karriere</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-emerald-400">Kontakt</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <div>Dubai, UAE</div>
              <div>{mockData.contact.email}</div>
              <div>{mockData.contact.phone}</div>
              <div className="flex space-x-3 pt-2">
                <a href={mockData.contact.linkedin} className="text-blue-400 hover:text-blue-300 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">
              © 2024 MINDhaus Consulting. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">Impressum</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">AGB</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;