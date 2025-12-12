
import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

export function SupplyChain() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-[#F5F2EB] dark:bg-[#1a1a1a] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <Reveal>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    {t('supplyChain.headline')}
                </h2>
                <p className="text-xl text-gold-accent font-medium uppercase tracking-wider">
                    {t('supplyChain.subheadline')}
                </p>
            </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Direct Trade */}
            <Reveal delay={100} className="bg-white dark:bg-[#222] p-8 rounded-xl shadow-lg border-b-4 border-gold-accent hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#0f291e] rounded-full flex items-center justify-center mb-6 text-gold-accent shadow-md">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('supplyChain.direct.title')}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t('supplyChain.direct.desc')}</p>
            </Reveal>

            {/* Quality */}
            <Reveal delay={200} className="bg-white dark:bg-[#222] p-8 rounded-xl shadow-lg border-b-4 border-gold-accent hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#0f291e] rounded-full flex items-center justify-center mb-6 text-gold-accent shadow-md">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('supplyChain.quality.title')}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t('supplyChain.quality.desc')}</p>
            </Reveal>

            {/* Logistics */}
            <Reveal delay={300} className="bg-white dark:bg-[#222] p-8 rounded-xl shadow-lg border-b-4 border-gold-accent hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#0f291e] rounded-full flex items-center justify-center mb-6 text-gold-accent shadow-md">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('supplyChain.logistics.title')}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t('supplyChain.logistics.desc')}</p>
            </Reveal>
        </div>
      </div>
    </section>
  );
}
