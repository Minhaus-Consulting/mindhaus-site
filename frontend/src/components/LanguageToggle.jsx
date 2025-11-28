import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
      aria-label="Toggle language"
    >
      <span className="text-2xl">{language === 'de' ? '🇩🇪' : '🇬🇧'}</span>
      <span className="font-medium text-slate-700">
        {language === 'de' ? 'DE' : 'EN'}
      </span>
      <svg 
        className="w-4 h-4 text-slate-500" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" 
        />
      </svg>
    </button>
  );
};

export default LanguageToggle;
