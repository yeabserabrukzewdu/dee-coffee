
import React, { useState } from 'react';
import { coffeeProducts as baseCoffeeProducts } from '../data/coffeeData';
import { CoffeeCard } from './CoffeeCard';
import { useTranslation } from '../contexts/LanguageContext';
import type { CoffeeProduct } from '../types';
import { Reveal } from './Reveal';

export function OurCoffee() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'All' | 'Washed' | 'Natural'>('All');

  const coffeeProducts: CoffeeProduct[] = baseCoffeeProducts.map(product => ({
    ...product,
    name: t(`coffee.${product.id}.name`),
    description: t(`coffee.${product.id}.description`),
  }));

  const filteredProducts = filter === 'All' 
    ? coffeeProducts 
    : coffeeProducts.filter(p => p.process === filter);

  return (
    <section id="coffee" className="py-20 md:py-32 bg-[#FDFBF7] dark:bg-[#181818] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-balance text-gray-900 dark:text-white transition-colors duration-300">
            {t('ourCoffee.headline')}
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            {t('ourCoffee.subheadline')}
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={100} className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 dark:bg-[#222] p-1 rounded-full">
                {['All', 'Washed', 'Natural'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFilter(type as any)}
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                            filter === type 
                            ? 'bg-gold-accent text-gray-900 shadow-md' 
                            : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                        }`}
                    >
                        {type === 'All' ? t('ourCoffee.filters.all') : 
                         type === 'Washed' ? t('ourCoffee.filters.washed') : 
                         t('ourCoffee.filters.natural')}
                    </button>
                ))}
            </div>
        </Reveal>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 100}>
              <CoffeeCard product={product} />
            </Reveal>
          ))}
        </div>

        {filteredProducts.length === 0 && (
             <div className="text-center py-20 text-gray-500">
                 No products found for this category.
             </div>
        )}

        <div className="text-center mt-16">
           <Reveal delay={200}>
             <a href="#/order" className="inline-flex items-center gap-2 text-gold-accent font-bold text-lg hover:text-opacity-80 transition-all border-b-2 border-transparent hover:border-gold-accent pb-1">
              {t('nav.viewAll')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
           </Reveal>
        </div>
      </div>
    </section>
  );
}
