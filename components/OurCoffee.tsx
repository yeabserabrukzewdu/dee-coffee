
import React, { useState } from 'react';
import { coffeeProducts as baseCoffeeProducts } from '../data/coffeeData';
import { CoffeeCard } from './CoffeeCard';
import { useTranslation } from '../contexts/LanguageContext';
import type { CoffeeProduct } from '../types';
import { Reveal } from './Reveal';

interface OurCoffeeProps {
  embedded?: boolean;
}

export function OurCoffee({ embedded = false }: OurCoffeeProps) {
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
    <section className={`${embedded ? 'py-20 md:py-32' : 'min-h-screen'} bg-[#FDFBF7] dark:bg-[#121212] transition-colors duration-300`}>
      
      {/* Coffee Page Hero - Only shown when NOT embedded */}
      {!embedded && (
        <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
           {/* Background Image */}
           <div className="absolute inset-0 z-0">
             <img 
                src="OUR COFFEE.jpg" 
               alt="Green Coffee Beans" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-[#FDFBF7]/70 dark:bg-black/60 transition-opacity duration-300"></div>
           </div>
           
           <div className="container mx-auto px-6 text-center relative z-10 drop-shadow-xl pt-24">
              <Reveal>
                  <h1 className="font-display text-5xl md:text-6xl font-bold text-[#2C1810] dark:text-white mb-6 shadow-none dark:shadow-black">
                      {t('ourCoffee.headline')}
                  </h1>
                  <p className="text-xl text-[#4A3728] dark:text-gray-200 max-w-2xl mx-auto shadow-none dark:shadow-black font-medium">
                      {t('ourCoffee.subheadline')}
                  </p>
              </Reveal>
           </div>
        </div>
      )}

      <div className={`container mx-auto px-6 ${embedded ? '' : 'py-20'}`}>
        
        {/* Section Header - Only shown when embedded */}
        {embedded && (
            <Reveal className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-balance text-[#2C1810] dark:text-white transition-colors duration-300">
                {t('ourCoffee.headline')}
              </h2>
              <p className="mt-3 text-lg text-[#4A3728] dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
                {t('ourCoffee.subheadline')}
              </p>
            </Reveal>
        )}
        
        {/* Filters */}
        <Reveal delay={100} className="flex justify-center mb-16">
            <div className="inline-flex bg-white dark:bg-[#222] p-2 rounded-full shadow-lg border border-[#4A3728]/10 dark:border-gray-800">
                {['All', 'Washed', 'Natural'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFilter(type as any)}
                        className={`px-8 py-3 rounded-full text-base font-bold transition-all duration-300 ${
                            filter === type 
                            ? 'bg-gold-accent text-[#2C1810] shadow-md transform scale-105' 
                            : 'text-[#4A3728] hover:text-[#2C1810] dark:text-gray-500 dark:hover:text-white'
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 100}>
              <CoffeeCard product={product} />
            </Reveal>
          ))}
        </div>

        {filteredProducts.length === 0 && (
             <div className="text-center py-20 text-[#4A3728] dark:text-gray-500">
                 No products found for this category.
             </div>
        )}

        {/* View All Button - Only shown when embedded */}
        {embedded && (
            <div className="text-center mt-16">
               <Reveal delay={200}>
                 <a href="#/coffee" className="inline-flex items-center gap-2 text-gold-accent font-bold text-lg hover:text-opacity-80 transition-all border-b-2 border-transparent hover:border-gold-accent pb-1">
                  View Full Catalogue
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
               </Reveal>
            </div>
        )}

      </div>
    </section>
  );
}
