
import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

export function Services() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-[#0f291e] text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
                <h2 className="font-display text-4xl font-bold mb-6">{t('services.headline')}</h2>
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <div className="bg-gold-accent p-3 rounded-full h-fit w-fit">
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-gold-accent">{t('services.quality.title')}</h3>
                            <p className="text-gray-300 leading-relaxed">{t('services.quality.desc')}</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-gold-accent p-3 rounded-full h-fit w-fit">
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2 text-gold-accent">{t('services.logistics.title')}</h3>
                            <p className="text-gray-300 leading-relaxed">{t('services.logistics.desc')}</p>
                        </div>
                    </div>
                </div>
            </Reveal>
            <Reveal delay={200} className="relative h-96">
                 <img 
                    src="labratory.webp" 
                    alt="Coffee bags ready for export" 
                    className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
                 />
                 <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#181818] p-6 rounded-lg shadow-xl border border-gold-accent max-w-xs hidden md:block transition-colors duration-300">
                    <p className="text-gold-accent font-display text-4xl font-bold mb-1">100%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Traceability from the farm to the container.</p>
                 </div>
            </Reveal>
        </div>
      </div>
    </section>
  );
}
