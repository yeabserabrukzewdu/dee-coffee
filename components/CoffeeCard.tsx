
import React from 'react';
import type { CoffeeProduct } from '../types';
import { useTranslation } from '../contexts/LanguageContext';

interface CoffeeCardProps {
  product: CoffeeProduct;
}

export function CoffeeCard({ product }: CoffeeCardProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-[#222] rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative overflow-hidden h-56">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        {product.score && (
             <div className="absolute top-4 right-4 bg-gold-accent text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Score: {product.score}
             </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-gold-accent transition-colors">
                {product.name}
            </h3>
            <p className="text-sm italic text-gray-500 dark:text-gray-400">
                {product.description}
            </p>
        </div>
        
        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 py-4 border-t border-b border-gray-100 dark:border-gray-700">
            <div>
                <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">{t('coffee.specs.region')}</span>
                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{product.region}</span>
            </div>
            <div>
                <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">{t('coffee.specs.process')}</span>
                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{product.process}</span>
            </div>
            <div>
                <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">{t('coffee.specs.altitude')}</span>
                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{product.altitude}</span>
            </div>
            <div>
                <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">{t('coffee.specs.grade')}</span>
                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{product.grade}</span>
            </div>
        </div>

        {/* Action */}
        <div className="mt-auto">
          <a href="#/order" className="block w-full text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-sm py-3 px-4 rounded-lg hover:bg-gold-accent dark:hover:bg-gold-accent hover:text-gray-900 transition-all shadow-md">
            {t('nav.addToCart')}
          </a>
        </div>
      </div>
    </div>
  );
}
