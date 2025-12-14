
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const closeMenu = () => setIsMenuOpen(false);

  // Updated: White text with shadow, hover gold
  const navLinkClasses = `text-white hover:text-gold-accent transition-colors font-medium relative group drop-shadow-md`;
  const underlineClasses = "absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-accent transition-all duration-300 group-hover:w-full shadow-sm";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-[#1a1a1a]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      
      {/* Top Bar Widget */}
      <div className={`w-full bg-[#0f291e] text-gray-200 border-b border-white/10 transition-all duration-500 overflow-hidden ${scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'}`}>
        <div className="container mx-auto px-6 h-10 flex justify-between items-center text-xs md:text-sm font-medium">
          
          {/* Contact Info (Left) */}
          <div className="flex items-center gap-4 md:gap-6">
            <a href="mailto:info@deecoffee.com" className="flex items-center gap-2 hover:text-gold-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              <span className="hidden sm:inline">info@deecoffee.com</span>
            </a>
            <a href="tel:+251911223344" className="flex items-center gap-2 hover:text-gold-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+251 911 22 33 44</span>
            </a>
          </div>

          {/* Social Links (Right) */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1 text-gray-400 text-xs uppercase tracking-wider mr-2">
              <span>Follow Us:</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="hover:text-gold-accent transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gold-accent transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-gold-accent transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gold-accent transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Header Bar */}
      <div className="container mx-auto px-6 py-5 flex justify-between items-center relative z-50">
        {/* Logo */}
        <a href="#/" onClick={closeMenu} className="flex items-center gap-3 group z-20">
            <img 
              src="/logos.png"
              alt="DEE COFFEE" 
              className="h-12 md:h-14 w-auto object-contain transform transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="font-display font-bold text-xl md:text-2xl tracking-wide text-white drop-shadow-md transition-colors duration-300">
              DEE COFFEE
            </span>
        </a>

        {/* Desktop Navigation - Centered Absolutely - visible only on LG and up */}
        <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-max">
          <a href="#/" className={navLinkClasses}>
            {t('nav.home')}
            <span className={underlineClasses}></span>
          </a>
          <a href="#/story" className={navLinkClasses}>
            {t('nav.story')}
             <span className={underlineClasses}></span>
          </a>
          <a href="#/coffee" className={navLinkClasses}>
            {t('nav.coffee')}
             <span className={underlineClasses}></span>
          </a>
          <a href="#/gallery" className={navLinkClasses}>
            {t('nav.gallery')}
             <span className={underlineClasses}></span>
          </a>
        </nav>

        {/* Desktop Right Side Actions - visible only on LG and up */}
        <div className="hidden lg:flex items-center space-x-4 z-20">
          <button 
            onClick={toggleLanguage}
            className="text-white hover:text-gold-accent transition-colors font-semibold w-10 text-center uppercase tracking-wide text-sm drop-shadow-md"
            aria-label="Toggle language"
          >
            {language === 'en' ? 'አማ' : 'EN'}
          </button>
          <a href="#/order" className="bg-gold-accent text-[#2C1810] font-bold py-2.5 px-6 rounded-full hover:bg-opacity-90 transition-all text-sm shadow-md hover:shadow-lg">
            {t('nav.shop')}
          </a>
        </div>

        {/* Mobile/Tablet Actions (Language + Hamburger) - visible on screens smaller than LG */}
        <div className="flex lg:hidden items-center gap-4 z-20">
          <button 
            onClick={toggleLanguage}
            className="text-white border-white hover:text-gold-accent hover:border-gold-accent transition-colors font-semibold text-xs border rounded px-2 py-1 drop-shadow-md"
            aria-label="Toggle language"
          >
            {language === 'en' ? 'አማ' : 'EN'}
          </button>

          <button 
            className="text-white drop-shadow-md focus:outline-none p-1 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu - Dark background to support white text */}
      <div 
        className={`absolute top-full left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 shadow-2xl transition-all duration-300 ease-in-out lg:hidden -z-10 overflow-hidden ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-full opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
          <a href="#/" onClick={closeMenu} className="text-lg font-medium text-white hover:text-gold-accent transition-colors block py-2 border-b border-gray-800">{t('nav.home')}</a>
          <a href="#/story" onClick={closeMenu} className="text-lg font-medium text-white hover:text-gold-accent transition-colors block py-2 border-b border-gray-800">{t('nav.story')}</a>
          <a href="#/coffee" onClick={closeMenu} className="text-lg font-medium text-white hover:text-gold-accent transition-colors block py-2 border-b border-gray-800">{t('nav.coffee')}</a>
          <a href="#/gallery" onClick={closeMenu} className="text-lg font-medium text-white hover:text-gold-accent transition-colors block py-2 border-b border-gray-800">{t('nav.gallery')}</a>
          
          <div className="pt-2 pb-4">
            <a href="#/order" onClick={closeMenu} className="block w-full text-center bg-gold-accent text-[#2C1810] font-bold py-3 rounded-full hover:bg-opacity-90 transition-all shadow-lg">
              {t('nav.shop')}
            </a>
          </div>
          
          {/* Mobile Socials in Menu */}
          <div className="flex justify-center gap-6 pt-4 border-t border-gray-800">
             <a href="#" className="text-gray-400 hover:text-gold-accent"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
             <a href="#" className="text-gray-400 hover:text-gold-accent"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
          </div>
        </div>
      </div>
    </header>
  );
}
