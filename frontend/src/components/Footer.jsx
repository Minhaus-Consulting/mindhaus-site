import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();

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
              {language === 'de' 
                ? 'Strategische Beratung für Markteintritte DACH, UAE & Saudi-Arabien' 
                : 'Strategic Consulting for Market Entry DACH, UAE & Saudi Arabia'}
            </p>
            <div className="text-sm text-slate-400">
              <div className="font-semibold text-slate-300 mb-1">{t.company.name}</div>
              <div>{t.company.location}</div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-emerald-400">
              {language === 'de' ? 'Services' : 'Services'}
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {t.services.slice(0, 4).map((service, index) => (
                <li key={index} className="hover:text-emerald-400 cursor-pointer transition-colors">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-emerald-400">
              {language === 'de' ? 'Unternehmen' : 'Company'}
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                {language === 'de' ? 'Über uns' : 'About us'}
              </li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                {language === 'de' ? 'Methodik' : 'Methodology'}
              </li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                {language === 'de' ? 'Use Cases' : 'Use Cases'}
              </li>
              <li className="hover:text-emerald-400 cursor-pointer transition-colors">
                {language === 'de' ? 'Karriere' : 'Career'}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-emerald-400">
              {language === 'de' ? 'Kontakt' : 'Contact'}
            </h3>
            <div className="space-y-2 text-sm text-slate-300">
              <div>{t.contact.address}</div>
              <div className="hover:text-emerald-400 cursor-pointer transition-colors">
                {t.contact.email}
              </div>
              <div className="hover:text-emerald-400 cursor-pointer transition-colors">
                {t.contact.emailSecondary}
              </div>
              <div>{t.contact.phone}</div>
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <h3 className="font-semibold text-emerald-400 mb-4">
            {language === 'de' ? 'Zahlungsmöglichkeiten' : 'Payment Methods'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Bank Transfer */}
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl">🏦</span>
                <h4 className="font-semibold text-white">
                  {language === 'de' ? 'Banküberweisung (EUR)' : 'Bank Transfer (EUR)'}
                </h4>
              </div>
              <p className="text-sm text-slate-300">
                {language === 'de' 
                  ? 'SEPA-Überweisung auf unser EUR-Konto (keine Gebühren)'
                  : 'SEPA transfer to our EUR account (no fees)'}
              </p>
            </div>

            {/* Credit Cards via Mamo */}
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl">💳</span>
                <h4 className="font-semibold text-white">
                  {language === 'de' ? 'Kreditkarten via Mamo' : 'Credit Cards via Mamo'}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-6" />
              </div>
              <p className="text-xs text-slate-300">
                {language === 'de' 
                  ? 'Visa, Mastercard, American Express, mada, Apple Pay, Google Pay'
                  : 'Visa, Mastercard, American Express, mada, Apple Pay, Google Pay'}
              </p>
            </div>
          </div>

          {/* Payment Fees Notice */}
          <div className="bg-amber-900/20 border border-amber-600/30 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">⚠️</span>
              <div className="flex-1">
                <h4 className="font-semibold text-amber-400 mb-2">
                  {language === 'de' 
                    ? 'Wichtiger Hinweis zu Kreditkarten-Gebühren' 
                    : 'Important Notice on Credit Card Fees'}
                </h4>
                <p className="text-sm text-slate-300 mb-3">
                  {language === 'de' 
                    ? 'Bei Zahlung per Kreditkarte über Mamo fallen Transaktionsgebühren an, die vom Kunden getragen werden (exklusive Beratungshonorar):'
                    : 'Credit card payments via Mamo incur transaction fees borne by the customer (exclusive of consulting fees):'}
                </p>
                <ul className="text-xs text-slate-300 space-y-1 mb-3">
                  <li>• {language === 'de' ? 'UAE-Karten: 2.9% + AED 1' : 'UAE cards: 2.9% + AED 1'}</li>
                  <li>• {language === 'de' ? 'Internationale Karten: 3.4% + AED 1' : 'International cards: 3.4% + AED 1'}</li>
                  <li>• {language === 'de' ? 'Währungskonvertierung: +2%' : 'Currency conversion: +2%'}</li>
                </ul>
                <a 
                  href="https://www.mamopay.com/business/pricing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:text-emerald-300 underline"
                >
                  {language === 'de' 
                    ? '→ Vollständige Mamo Gebührenübersicht ansehen' 
                    : '→ View complete Mamo pricing'}
                </a>
              </div>
            </div>
          </div>

          {/* Supported Payment Methods Logos */}
          <div className="text-center">
            <p className="text-xs text-slate-400 mb-3">
              {language === 'de' 
                ? 'Unterstützte Zahlungsmethoden' 
                : 'Supported Payment Methods'}
            </p>
            <div className="flex justify-center items-center flex-wrap gap-4 opacity-60">
              <div className="text-slate-400 text-sm">SEPA</div>
              <div className="text-slate-600">•</div>
              <div className="text-slate-400 text-sm">Visa</div>
              <div className="text-slate-600">•</div>
              <div className="text-slate-400 text-sm">Mastercard</div>
              <div className="text-slate-600">•</div>
              <div className="text-slate-400 text-sm">Amex</div>
              <div className="text-slate-600">•</div>
              <div className="text-slate-400 text-sm">Apple Pay</div>
              <div className="text-slate-600">•</div>
              <div className="text-slate-400 text-sm">Google Pay</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">
              © 2024 {t.company.fullName}. {language === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                {language === 'de' ? 'Impressum' : 'Imprint'}
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                {language === 'de' ? 'Datenschutz' : 'Privacy'}
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                {language === 'de' ? 'AGB' : 'Terms'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
