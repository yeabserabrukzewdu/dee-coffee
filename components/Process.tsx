
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
      {/* If reversed (image on right), slide from right. Else (image on left), slide from left. */}
      <Reveal direction={isReversed ? 'right' : 'left'} className="relative group">
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
      {/* If reversed (text on left), slide from left. Else (text on right), slide from right. */}
      <Reveal direction={isReversed ? 'left' : 'right'} delay={200}>
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

const FeatureIcon = ({ name }: { name: string }) => {
  switch(name) {
    case 'quality':
      return <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case 'expertise':
      return <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    case 'support':
      return <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
    case 'packing':
      return <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
    case 'processing':
      return <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;
    case 'procurement':
      return <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
    default:
      return null;
  }
}

export function Process() {
  const { t } = useTranslation();
  
  return (
    <section className="py-24 md:py-32 bg-[#FDFBF7] dark:bg-[#121212] relative overflow-hidden">
      {/* Decorative connecting line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#4A3728]/10 dark:bg-gray-800 hidden md:block -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal className="text-center mb-24">
          <span className="text-gold-accent font-bold tracking-widest uppercase text-sm mb-4 block">
             {t('process.howWeWork')}
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-balance text-[#2C1810] dark:text-white transition-colors duration-300">
            {t('process.headline')}
          </h2>
          <p className="mt-6 text-xl text-[#4A3728] dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
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

        {/* New 6 Key Details Section */}
        <div className="mt-32 max-w-7xl mx-auto">
             <Reveal className="text-center mb-16">
                 <h2 className="font-display text-3xl md:text-5xl font-bold text-[#2C1810] dark:text-white mb-6">
                    {t('process.features.title')}
                 </h2>
                 <p className="text-lg text-[#4A3728] dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    {t('process.features.description')}
                 </p>
             </Reveal>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {['quality', 'expertise', 'support', 'packing', 'processing', 'procurement'].map((key, index) => (
                     <Reveal 
                        key={key} 
                        delay={index * 100} 
                        direction={index % 2 === 0 ? 'left' : 'right'} 
                        className="bg-white dark:bg-[#181818] p-8 rounded-2xl shadow-lg border-t-4 border-gold-accent hover:-translate-y-2 transition-transform duration-300"
                     >
                         <div className="w-14 h-14 bg-[#FDFBF7] dark:bg-[#222] rounded-full flex items-center justify-center mb-6 text-gold-accent shadow-sm">
                             <FeatureIcon name={key} />
                         </div>
                         <h3 className="font-display text-xl font-bold text-[#2C1810] dark:text-white mb-4">
                            {t(`process.features.list.${key}.title`)}
                         </h3>
                         <p className="text-[#4A3728] dark:text-gray-400 leading-relaxed text-sm">
                            {t(`process.features.list.${key}.desc`)}
                         </p>
                     </Reveal>
                 ))}
             </div>
        </div>

        <Reveal className="text-center mt-20" direction="up">
            <a href="#/order" className="inline-block bg-gold-accent text-[#2C1810] font-bold py-4 px-10 rounded-full text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {t('process.startOrder')}
            </a>
        </Reveal>
      </div>
    </section>
  );
}
