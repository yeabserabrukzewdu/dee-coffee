
import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

export function OurStory() {
  const { t } = useTranslation();
  return (
    <section id="story" className="py-20 md:py-32">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <Reveal className="w-full">
          <img 
            src="https://images.unsplash.com/photo-1507133314543-a813952185dd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Ethiopian coffee farmer"
            className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-square"
          />
        </Reveal>
        <Reveal delay={200}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-balance text-gray-900 dark:text-white transition-colors duration-300">
            {t('ourStory.headline')}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
            {t('ourStory.body')}
          </p>
          <button className="mt-6 border-2 border-gold-accent text-gray-900 dark:text-white font-bold py-3 px-8 rounded-full hover:bg-gold-accent hover:text-gray-900 transition-all">
            {t('nav.learnMore')}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
