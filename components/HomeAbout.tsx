
import React from 'react';
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
                        src="https://images.unsplash.com/photo-1621262078652-3d71241198cb?q=80&w=1974&auto=format&fit=crop" 
                        alt="Coffee Cupping" 
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
                <span className="text-gold-accent font-bold tracking-widest uppercase text-sm mb-4 block">Who We Are</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    Welcome to <span className="text-gold-accent">DEE COFFEE</span>
                </h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    <p>
                        Rooted in the highlands of Ethiopia, we are more than just exporters; we are the bridge between the world's most discerning roasters and the ancient traditions of Ethiopian coffee farming.
                    </p>
                    <p>
                        With over two decades of experience, our vertical integration ensures 100% traceability. From the red cherry to the final export container, we maintain rigorous quality control to deliver the distinct flavor profiles of Yirgacheffe, Guji, Sidama, and beyond.
                    </p>
                </div>
                <div className="mt-10">
                    <a href="#/story" className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-bold border-b-2 border-gold-accent hover:text-gold-accent transition-colors pb-1">
                        Read Our Story
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
