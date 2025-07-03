import React from 'react';
import { mockData } from '../mockData';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHN0eWxlPgouY2xzLTEge2ZpbGw6IHVybCgjZ3JhZGllbnQpO30KPHN0eWxlPgoKPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjM0I4MkY2Ii8+CjxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjOEI1Q0Y2Ii8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzEwQjk4MSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxOCIgY2xhc3M9ImNscy0xIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSI+TUg8L3RleHQ+Cjwvc3ZnPgo="
                alt="MINDhaus Consulting"
                className="h-10 w-auto"
              />
              <div className="text-xl font-bold">
                MINDhaus
              </div>
            </div>
            <p className="text-slate-300 text-sm">
              KI-Automatisierung für Sales, Marketing & HR aus Dubai.
            </p>
            <div className="text-sm text-slate-400">
              <div className="font-semibold text-slate-300 mb-1">{mockData.company.name}</div>
              <div>{mockData.company.location}</div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-emerald-400">KI-Services</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Online-Marketing-Strategie</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Sales & Marketing Automatisierung</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">HR-Automation</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Tool-Selection & Workshops</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-emerald-400">Unternehmen</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Über uns</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Methodik</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Case Studies</li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">Karriere</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-emerald-400">Kontakt</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <div>{mockData.contact.address}</div>
              <div className="hover:text-emerald-400 cursor-pointer transition-colors">
                {mockData.contact.email}
              </div>
              <div className="hover:text-emerald-400 cursor-pointer transition-colors">
                {mockData.contact.emailSecondary}
              </div>
              <div>{mockData.contact.phone}</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">
              © 2024 {mockData.company.fullName}. Alle Rechte vorbehalten.
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