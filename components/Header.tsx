
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { coffeeProducts } from '../data/coffeeData';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    // Initial theme check
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }

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

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'am' : 'en');
  };

  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClasses = `text-white hover:text-gold-accent transition-colors font-medium relative group drop-shadow-md flex items-center`;
  const underlineClasses = "absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gold-accent transition-all duration-300 group-hover:w-full shadow-sm";

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
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="text-[#1877F2] hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="text-white hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-[#E4405F] hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#0077B5] hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-[#FF0000] hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Header Bar */}
      <div className="container mx-auto px-6 py-5 flex justify-between items-center relative z-50">
        <a href="#/" onClick={closeMenu} className="flex items-center gap-3 group z-20">
            <img 
              src="/logos.webp" 
              alt="DEE COFFEE" 
              className="h-12 md:h-14 w-auto object-contain transform transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="font-display font-bold text-xl md:text-2xl tracking-wide text-white drop-shadow-md transition-colors duration-300">
              DEE COFFEE
            </span>
        </a>

        <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 top-0 transform -translate-x-1/2 w-max h-full">
          <a href="#/" className={navLinkClasses}>
            {t('nav.home')}
            <span className={underlineClasses}></span>
          </a>
          <a href="#/story" className={navLinkClasses}>
            {t('nav.story')}
             <span className={underlineClasses}></span>
          </a>
          
          <div className="relative group/dropdown h-full flex items-center">
              <a href="#/coffee" className={`gap-1 ${navLinkClasses}`}>
                {t('nav.coffee')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-70 transition-transform duration-300 group-hover/dropdown:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className={`${underlineClasses} group-hover/dropdown:w-full`}></span>
              </a>

              <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 pt-0 pointer-events-none group-hover/dropdown:pointer-events-auto">
                   <div className="bg-[#1a1a1a]/95 backdrop-blur-md border border-white/10 rounded-b-lg shadow-2xl overflow-hidden max-h-0 opacity-0 group-hover/dropdown:max-h-96 group-hover/dropdown:opacity-100 transition-all duration-500 ease-in-out">
                       <div className="py-2 flex flex-col">
                           {coffeeProducts.map((product) => (
                               <a 
                                   key={product.id}
                                   href={`#/coffee/${product.id}`}
                                   className="px-4 py-2 text-sm text-gray-300 hover:text-gold-accent hover:bg-white/5 transition-colors text-center whitespace-nowrap"
                               >
                                   {t(`coffee.${product.id}.name`)}
                               </a>
                           ))}
                       </div>
                   </div>
              </div>
          </div>

          <a href="#/gallery" className={navLinkClasses}>
            {t('nav.gallery')}
             <span className={underlineClasses}></span>
          </a>
        </nav>

        <div className="hidden lg:flex items-center space-x-3 z-20">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="text-white hover:text-gold-accent transition-all p-2 rounded-full hover:bg-white/10"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
          
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

        <div className="flex lg:hidden items-center gap-3 z-20">
          <button 
            onClick={toggleTheme}
            className="text-white hover:text-gold-accent transition-all p-1.5"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>

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
          
          <div className="border-b border-gray-800 pb-2">
            <a href="#/coffee" onClick={closeMenu} className="text-lg font-medium text-white hover:text-gold-accent transition-colors block py-2 flex justify-between items-center">
              {t('nav.coffee')}
            </a>
            <div className="pl-4 space-y-2 mt-2">
               {coffeeProducts.map(product => (
                  <a key={product.id} href={`#/coffee/${product.id}`} onClick={closeMenu} className="block text-sm text-gray-400 hover:text-gold-accent">
                    {t(`coffee.${product.id}.name`)}
                  </a>
               ))}
            </div>
          </div>

          <a href="#/gallery" onClick={closeMenu} className="text-lg font-medium text-white hover:text-gold-accent transition-colors block py-2 border-b border-gray-800">{t('nav.gallery')}</a>
          
          <div className="pt-2 pb-4">
            <a href="#/order" onClick={closeMenu} className="block w-full text-center bg-gold-accent text-[#2C1810] font-bold py-3 rounded-full hover:bg-opacity-90 transition-all shadow-lg">
              {t('nav.shop')}
            </a>
          </div>
          
          {/* Mobile Socials in Menu - Vibrant Colors by Default */}
          <div className="flex justify-center gap-8 pt-6 border-t border-gray-800 flex-wrap">
             <a href="#" className="text-[#1877F2] hover:opacity-80 transition-opacity">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
             </a>
             <a href="#" className="text-white hover:opacity-80 transition-opacity">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z"></path></svg>
             </a>
             <a href="#" className="text-[#E4405F] hover:opacity-80 transition-opacity">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
             </a>
             <a href="#" className="text-[#0077B5] hover:opacity-80 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
             </a>
             <a href="#" className="text-[#FF0000] hover:opacity-80 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
             </a>
          </div>
        </div>
      </div>
    </header>
  );
}
