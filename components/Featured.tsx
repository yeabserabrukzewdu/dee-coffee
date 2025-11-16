
import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

export function Featured() {
  const { t } = useTranslation();
  return (
    <section className="py-12 bg-[#181818]">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-sm font-bold tracking-widest text-gray-500 uppercase">
          {t('featured.title')}
        </h3>
        <div className="flex justify-center items-center space-x-8 md:space-x-12 mt-6">
          {/* Replace with actual logos */}
          <span className="font-display text-2xl text-gray-400">Forbes</span>
          <span className="font-display text-2xl text-gray-400">Wired</span>
          <span className="font-display text-2xl text-gray-400">Vogue</span>
          <span className="font-display text-2xl text-gray-400">GQ</span>
        </div>
      </div>
    </section>
  );
}