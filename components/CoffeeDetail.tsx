
import React from 'react';
import { coffeeProducts } from '../data/coffeeData';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

interface CoffeeDetailProps {
  id: string;
}

export function CoffeeDetail({ id }: CoffeeDetailProps) {
  const { t } = useTranslation();
  
  // Find the basic product data
  const baseProduct = coffeeProducts.find(p => p.id === id);
  
  if (!baseProduct) {
    return <div className="pt-40 text-center">Product not found</div>;
  }

  // Merge with translations
  const product = {
    ...baseProduct,
    name: t(`coffee.${id}.name`),
    description: t(`coffee.${id}.description`),
    longDescription: t(`coffee.${id}.longDescription`),
    tastingNotes: t(`coffee.${id}.tastingNotes`).split(','),
  };

  return (
    <div className="bg-[#FDFBF7] dark:bg-[#121212] min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 fade-in-up">
              {product.name}
            </h1>
            <p className="text-xl text-gold-accent font-medium tracking-wider uppercase fade-in-up" style={{ animationDelay: '200ms' }}>
              {product.region}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <Reveal>
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-6">
                About this Coffee
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {product.longDescription}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Cup Profile
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.tastingNotes?.map((note, idx) => (
                  <span key={idx} className="bg-coffee-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                    {note.trim()}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Sidebar / Specs */}
          <div className="lg:col-span-1">
            <Reveal delay={300}>
              <div className="bg-white dark:bg-[#181818] p-8 rounded-xl shadow-xl border-t-4 border-gold-accent sticky top-32">
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                  Specifications
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Region</span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{product.region}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Altitude</span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{product.altitude}</span>
                  </div>
                   <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Processing</span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{product.process}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Grade</span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{product.grade}</span>
                  </div>
                   <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Harvest Season</span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{product.harvestSeason}</span>
                  </div>
                   <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Varietals</span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{product.varietals}</span>
                  </div>
                </div>

                <div className="mt-10">
                  <a href={`#/order?product=${product.id}`} className="block w-full text-center bg-gold-accent text-gray-900 font-bold py-4 rounded-full hover:bg-opacity-90 transition-all shadow-lg transform hover:scale-105">
                    Request Sample / Quote
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </div>
  );
}
