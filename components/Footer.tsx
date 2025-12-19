
import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#F5F2EB] dark:bg-[#181818] text-[#4A3728] dark:text-gray-400 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        <Reveal>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <a href="#/" className="inline-block mb-4">
                  <img 
                    src="/logos.webp" 
                    alt="DEE COFFEE" 
                    className="h-20 w-auto object-contain filter drop-shadow-sm" 
                  />
              </a>
              <h3 className="font-display text-xl font-bold text-[#2C1810] dark:text-white mb-2">DEE COFFEE</h3>
              <p className="text-sm leading-relaxed max-w-xs">{t('footer.tagline')}</p>
            </div>

            <div>
              <h4 className="font-bold text-[#2C1810] dark:text-white mb-4 tracking-wider">{t('footer.shop.title')}</h4>
              <ul className="space-y-2">
                <li><a href="#/coffee" className="hover:text-gold-accent dark:hover:text-white transition-colors">{t('footer.shop.all')}</a></li>
                <li><a href="#/coffee?type=washed" className="hover:text-gold-accent dark:hover:text-white transition-colors">{t('footer.shop.washed')}</a></li>
                <li><a href="#/coffee?type=natural" className="hover:text-gold-accent dark:hover:text-white transition-colors">{t('footer.shop.natural')}</a></li>
                <li><a href="#/coffee?type=roasted" className="hover:text-gold-accent dark:hover:text-white transition-colors font-bold text-[#2C1810] dark:text-white">{t('footer.shop.roasted')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#2C1810] dark:text-white mb-4 tracking-wider">{t('footer.about.title')}</h4>
              <ul className="space-y-2">
                <li><a href="#/story" className="hover:text-gold-accent dark:hover:text-white transition-colors">{t('footer.about.story')}</a></li>
                <li><a href="#/order" className="hover:text-gold-accent dark:hover:text-white transition-colors">{t('footer.about.contact')}</a></li>
                <li><a href="#/#faq" className="hover:text-gold-accent dark:hover:text-white transition-colors">{t('footer.about.faqs')}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#2C1810] dark:text-white mb-4 tracking-wider">{t('footer.follow')}</h4>
              <div className="flex items-center gap-4 flex-wrap">
                <a href="#" aria-label="Facebook" className="text-[#1877F2] hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" aria-label="X (Twitter)" className="text-black dark:text-white hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.309 17.41z"></path></svg>
                </a>
                <a href="#" aria-label="Instagram" className="text-[#E4405F] hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-[#0077B5] hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" aria-label="YouTube" className="text-[#FF0000] hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#4A3728]/10 dark:border-gray-800 text-center text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
