
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
            {/* Logo & Tagline */}
            <div>
              <a href="#/" className="inline-block mb-4">
                  <img 
                     src="/logos.png"
                    alt="DEE COFFEE" 
                    className="h-20 w-auto object-contain filter drop-shadow-sm" 
                  />
              </a>
              <h3 className="font-display text-xl font-bold text-[#2C1810] dark:text-white mb-2">DEE COFFEE</h3>
              <p className="text-sm leading-relaxed max-w-xs">{t('footer.tagline')}</p>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-bold text-[#2C1810] dark:text-white mb-4 tracking-wider">{t('footer.shop.title')}</h4>
              <ul className="space-y-2">
                <li><a href="#/coffee" className="hover:text-gold-accent dark:hover:text-white transition-colors">{t('footer.shop.all')}</a></li>
                <li><a href="#/coffee" className="hover:text-gold-accent dark:hover:text-white transition-colors">{t('footer.shop.subscriptions')}</a></li>
                <li><a href="#/order" className="hover:text-gold-accent dark:hover:text-white transition-colors">{t('footer.shop.gear')}</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-[#2C1810] dark:text-white mb-4 tracking-wider">{t('footer.about.title')}</h4>
              <ul className="space-y-2">
                <li><a href="#/story" className="hover:text-gold-accent dark:hover:text-white transition-colors">{t('footer.about.story')}</a></li>
                <li><a href="#/order" className="hover:text-gold-accent dark:hover:text-white transition-colors">{t('footer.about.contact')}</a></li>
                <li><a href="#/gallery" className="hover:text-gold-accent dark:hover:text-white transition-colors">{t('footer.about.faqs')}</a></li>
              </ul>
            </div>

            {/* Connect Section */}
            <div>
              <h4 className="font-bold text-[#2C1810] dark:text-white mb-4 tracking-wider">{t('footer.follow')}</h4>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="Facebook" className="hover:text-gold-accent dark:hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" aria-label="Twitter" className="hover:text-gold-accent dark:hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-gold-accent dark:hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-gold-accent dark:hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
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
