
import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

export function Featured() {
  const { t } = useTranslation();
  return (
    <section className="py-12 bg-[#FDFBF7] dark:bg-[#1a1a1a] text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <Reveal>
          <h3 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-8">
            {t('featured.title')}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
            {/* Simulated Certification Logos - Text representation for now */}
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 border-4 border-green-700 rounded-full flex items-center justify-center font-bold text-green-700 mb-2">ORG</div>
               <span className="text-xs font-bold">Organic</span>
            </div>
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 border-4 border-blue-600 rounded-full flex items-center justify-center font-bold text-blue-600 mb-2">FT</div>
               <span className="text-xs font-bold">Fair Trade</span>
            </div>
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 border-4 border-green-500 rounded-full flex items-center justify-center font-bold text-green-500 mb-2">RFA</div>
               <span className="text-xs font-bold">Rainforest</span>
            </div>
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 border-4 border-black dark:border-white rounded-full flex items-center justify-center font-bold text-black dark:text-white mb-2 transition-colors duration-300">ECA</div>
               <span className="text-xs font-bold">Ethiopian Coffee Assn</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
