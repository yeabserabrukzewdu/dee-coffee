
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#181818] shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-display text-2xl font-bold text-white">
          Dee Coffee
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/#" className="text-gray-300 hover:text-white transition-colors">{t('nav.home')}</a>
          <a href="/#story" className="text-gray-300 hover:text-white transition-colors">{t('nav.story')}</a>
          <a href="/#coffee" className="text-gray-300 hover:text-white transition-colors">{t('nav.coffee')}</a>
          <a href="#/gallery" className="text-gray-300 hover:text-white transition-colors">{t('nav.gallery')}</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className="text-gray-300 hover:text-white transition-colors font-semibold w-10 text-center"
            aria-label="Toggle language"
          >
            {language === 'en' ? 'አማ' : 'EN'}
          </button>
          <a href="#/order" className="bg-gold-accent text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all">
            {t('nav.shop')}
          </a>
        </div>
      </div>
    </header>
  );
}