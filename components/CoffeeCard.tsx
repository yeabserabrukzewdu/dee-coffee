
import React from 'react';
import type { CoffeeProduct } from '../types';
import { useTranslation } from '../contexts/LanguageContext';

interface CoffeeCardProps {
  product: CoffeeProduct;
}

export function CoffeeCard({ product }: CoffeeCardProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-[#222] rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity"></div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-white">{product.name}</h3>
        <p className="mt-2 text-gray-400 text-sm h-16">{product.description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold gold-accent">${product.price.toFixed(2)}</span>
          <a href="#/order" className="border-2 border-gold-accent text-white font-bold text-sm py-2 px-4 rounded-full hover:bg-gold-accent hover:text-gray-900 transition-all">
            {t('nav.addToCart')}
          </a>
        </div>
      </div>
    </div>
  );
}