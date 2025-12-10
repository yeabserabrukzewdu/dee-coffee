
import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

const ProcessStep = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => (
  <Reveal delay={delay} className="text-center">
    <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 rounded-full bg-[#FDFBF7] dark:bg-[#181818] border-2 border-gold-accent transition-colors duration-300 shadow-md dark:shadow-none">
      {icon}
    </div>
    <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{title}</h3>
    <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xs mx-auto transition-colors duration-300">{description}</p>
  </Reveal>
);

export function Process() {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-balance text-gray-900 dark:text-white transition-colors duration-300">
            {t('process.headline')}
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            {t('process.subheadline')}
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-12">
          <ProcessStep 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
            title={t('process.sourcing.title')}
            description={t('process.sourcing.description')}
            delay={0}
          />
          <ProcessStep 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.388 1.033l1.563 1.563-1.033 1.033-1.563-1.563 1.033-1.033zm-2.066 2.066l1.563 1.563-10.33 10.33-1.563-1.563 10.33-10.33zm-3.099 3.099l1.563 1.563-7.232 7.232-1.563-1.563 7.232-7.232zM3.12 14.28l1.563 1.563-1.033 1.033-1.563-1.563 1.033-1.033z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 14a2 2 0 100-4 2 2 0 000 4z" /><path d="M12.923 12.923c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0-1.023.39 0 1.414.39 1.023 1.414 0zM10 20l-6-6" /></svg>}
            title={t('process.roasting.title')}
            description={t('process.roasting.description')}
            delay={200}
          />
          <ProcessStep 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1V10a1 1 0 00-1-1H7a1 1 0 00-1 1v10a1 1 0 001 1h2a1 1 0 001-1v-5a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 001 1h2a1 1 0 001-1z" /></svg>}
            title={t('process.brewing.title')}
            description={t('process.brewing.description')}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
}
