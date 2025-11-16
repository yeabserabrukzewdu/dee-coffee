
import React from 'react';
import { coffeeProducts as baseCoffeeProducts } from '../data/coffeeData';
import { CoffeeCard } from './CoffeeCard';
import { useTranslation } from '../contexts/LanguageContext';
import type { CoffeeProduct } from '../types';

export function OurCoffee() {
  const { t } = useTranslation();

  const coffeeProducts: CoffeeProduct[] = baseCoffeeProducts.map(product => ({
    ...product,
    name: t(`coffee.${product.id}.name`),
    description: t(`coffee.${product.id}.description`),
  }));

  return (
    <section id="coffee" className="py-20 md:py-32 bg-[#181818]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-balance">
            {t('ourCoffee.headline')}
          </h2>
          <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
            {t('ourCoffee.subheadline')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeProducts.map((product, index) => (
            <div key={product.id} className="fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <CoffeeCard product={product} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
           <a href="#/order" className="inline-block bg-gold-accent text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
            {t('nav.viewAll')}
          </a>
        </div>
      </div>
    </section>
  );
}