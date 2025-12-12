
import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#F5F2EB] dark:bg-[#181818] text-gray-600 dark:text-gray-400 transition-colors duration-300">
      <div className="container mx-auto px-6 py-12">
        <Reveal>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">DEE COFFEE</h3>
              <p className="text-sm">{t('footer.tagline')}</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 tracking-wider">{t('footer.shop.title')}</h4>
              <ul>
                <li className="mb-2"><a href="#/coffee" className="hover:text-gold-accent dark:hover:text-white">{t('footer.shop.all')}</a></li>
                <li className="mb-2"><a href="#/coffee" className="hover:text-gold-accent dark:hover:text-white">{t('footer.shop.subscriptions')}</a></li>
                <li className="mb-2"><a href="#/order" className="hover:text-gold-accent dark:hover:text-white">{t('footer.shop.gear')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 tracking-wider">{t('footer.about.title')}</h4>
              <ul>
                <li className="mb-2"><a href="#/story" className="hover:text-gold-accent dark:hover:text-white">{t('footer.about.story')}</a></li>
                <li className="mb-2"><a href="#/order" className="hover:text-gold-accent dark:hover:text-white">{t('footer.about.contact')}</a></li>
                <li className="mb-2"><a href="#/gallery" className="hover:text-gold-accent dark:hover:text-white">{t('footer.about.faqs')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 tracking-wider">{t('footer.follow')}</h4>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook">
                  <svg className="w-6 h-6 hover:text-gold-accent dark:hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>
                </a>
                <a href="#" aria-label="Instagram">
                  <svg className="w-6 h-6 hover:text-gold-accent dark:hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919 4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" /></svg>
                </a>
                <a href="#" aria-label="Twitter">
                  <svg className="w-6 h-6 hover:text-gold-accent dark:hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.634 4.208 3.803 4.649-.625.17-1.284.26-1.96.26-.306 0-.6-.03-1.003-.095.69 1.954 2.693 3.374 5.068 3.415-1.815 1.422-4.12 2.13-6.62 2.13-.431 0-.858-.025-1.274-.075 2.346 1.503 5.143 2.373 8.14 2.373 9.773 0 15.12-8.125 14.807-15.473.994-.718 1.858-1.617 2.548-2.643z" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
