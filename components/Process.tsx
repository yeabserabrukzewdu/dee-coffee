
import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

interface StepProps {
  number: string;
  title: string;
  description: string;
  detail: string;
  image: string;
  isReversed?: boolean;
}

const ProcessStep = ({ number, title, description, detail, image, isReversed = false }: StepProps) => (
  <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-24 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
    {/* Image Side */}
    <div className="w-full md:w-1/2">
      <Reveal className="relative group">
        <div className="absolute inset-0 bg-gold-accent transform translate-x-4 translate-y-4 rounded-2xl transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
           <img 
             src={image} 
             alt={title} 
             className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
           />
           <div className="absolute inset-0 bg-transparent dark:bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
        </div>
      </Reveal>
    </div>

    {/* Text Side */}
    <div className="w-full md:w-1/2">
      <Reveal delay={200}>
        <div className="flex items-center gap-4 mb-6">
           <span className="font-display text-6xl md:text-8xl font-bold text-[#E6D5BC] dark:text-gray-800 select-none">
             {number}
           </span>
           <div className="h-px bg-gold-accent flex-grow max-w-[100px]"></div>
        </div>
        
        <h3 className="font-display text-3xl md:text-4xl font-bold text-[#2C1810] dark:text-white mb-4">
          {title}
        </h3>
        
        <p className="text-lg font-medium text-gold-accent mb-6">
          {description}
        </p>

        <p className="text-[#4A3728] dark:text-gray-300 leading-relaxed text-lg">
          {detail}
        </p>
      </Reveal>
    </div>
  </div>
);

export function Process() {
  const { t } = useTranslation();
  
  return (
    <section className="py-24 md:py-32 bg-[#FDFBF7] dark:bg-[#121212] relative overflow-hidden">
      {/* Decorative connecting line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden md:block -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal className="text-center mb-24">
          <span className="text-gold-accent font-bold tracking-widest uppercase text-sm mb-4 block">
             How We Work
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-balance text-gray-900 dark:text-white transition-colors duration-300">
            {t('process.headline')}
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            {t('process.subheadline')}
          </p>
        </Reveal>

        <div className="max-w-6xl mx-auto">
          <ProcessStep 
            number="01"
            title={t('process.sourcing.title')}
            description={t('process.sourcing.description')}
            detail={t('process.sourcing.detail')}
            image="hand picking.png"
          />
          
          <ProcessStep 
            number="02"
            title={t('process.roasting.title')}
            description={t('process.roasting.description')}
            detail={t('process.roasting.detail')}
            image="drying.webp"
            isReversed={true}
          />
          
          <ProcessStep 
            number="03"
            title={t('process.brewing.title')}
            description={t('process.brewing.description')}
            detail={t('process.brewing.detail')}
            image="export.webp"
          />
        </div>

        <Reveal className="text-center mt-12">
            <a href="#/order" className="inline-block bg-gold-accent text-[#2C1810] font-bold py-4 px-10 rounded-full text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Start Your Order
            </a>
        </Reveal>
      </div>
    </section>
  );
}
