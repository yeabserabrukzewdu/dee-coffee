
import React, { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

export function HomeAbout() {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-32 bg-[#FDFBF7] dark:bg-[#121212] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative">
             <Reveal>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                    <img 
                        src="coffee.webp"  
                        alt="Coffee Cupping in Ethiopia" 
                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-4 border-gold-accent -z-0 rounded-lg hidden md:block"></div>
             </Reveal>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <Reveal delay={200}>
                <span className="text-gold-accent font-bold tracking-widest uppercase text-sm mb-4 block">Ethiopia's Premium Exporters</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2C1810] dark:text-white mb-6 leading-tight">
                    Your Partner for <span className="text-gold-accent">Coffee Export in Ethiopia</span>
                </h2>
                <div className="space-y-6 text-[#4A3728] dark:text-gray-300 text-lg leading-relaxed">
                    <p>
                        As one of the leading <strong>Ethiopian coffee export companies</strong>, we bridge the gap between discerning global roasters and the ancient traditions of our highlands.
                    </p>
                    <p>
                        We specialize in exporting high-quality green coffee beans, including the famous Yirgacheffe, Guji, and Sidama varieties. With over two decades of experience, our fully integrated supply chain ensures 100% traceability from the farm to your container at the port of Djibouti.
                    </p>
                </div>
                <div className="mt-10">
                    <a href="#/story" className="inline-flex items-center gap-2 text-[#2C1810] dark:text-white font-bold border-b-2 border-gold-accent hover:text-gold-accent transition-colors pb-1">
                        Read Our Company Profile
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
