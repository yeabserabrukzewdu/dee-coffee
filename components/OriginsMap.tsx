
import React, { useState, useEffect, useRef } from 'react';
import { regionsData } from '../data/regions';
import { coffeeProducts } from '../data/coffeeData';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

export function OriginsMap() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<number | null>(null);

  const activeRegion = regionsData[activeIndex];

  // Handle auto-rotation
  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = window.setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % regionsData.length);
      }, 6000); // Switch every 6 seconds
    }
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [isAutoPlaying]);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false); // Stop auto-play if user interacts
    if (timerRef.current) window.clearInterval(timerRef.current);
  };

  return (
    <section className="relative h-[800px] md:h-[900px] bg-[#121212] overflow-hidden text-white group/slider">
      
      {/* Background Layer with Transitions */}
      {regionsData.map((region, index) => {
        // Find matching product data to use its image
        const product = coffeeProducts.find(p => p.id === region.id);
        const imageSrc = product ? product.image : region.image;

        return (
          <div
            key={region.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Image with Ken Burns Effect */}
            <div className={`absolute inset-0 w-full h-full transform transition-transform duration-[10000ms] ease-linear ${index === activeIndex ? 'scale-110' : 'scale-100'}`}>
               <img
                  src={imageSrc}
                  alt={region.name}
                  className="w-full h-full object-cover"
               />
            </div>
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
          </div>
        );
      })}

      {/* Main Content Content */}
      <div className="absolute inset-0 z-20 container mx-auto px-6 flex flex-col justify-center h-full pb-32 md:pb-0">
        <div className="max-w-3xl">
          {/* Animated Text Wrapper */}
          <div key={activeRegion.id} className="animate-fadeIn">
            
            <div className="flex items-center gap-4 mb-6 overflow-hidden">
                <span className="text-gold-accent font-bold tracking-[0.3em] uppercase text-sm animate-slideRight">
                  Ethiopian Origins
                </span>
                <div className="h-px bg-gold-accent w-24 animate-growWidth origin-left"></div>
            </div>

            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-none drop-shadow-2xl animate-slideUp" style={{ animationDelay: '100ms' }}>
              {t(`coffee.${activeRegion.id}.name`)}
            </h2>

            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-8 max-w-xl drop-shadow-lg animate-slideUp" style={{ animationDelay: '200ms' }}>
              {t(`coffee.${activeRegion.id}.description`)}
            </p>

            <div className="flex flex-wrap gap-4 animate-slideUp" style={{ animationDelay: '300ms' }}>
                <a 
                    href={`#/coffee/${activeRegion.id}`} 
                    className="group flex items-center gap-3 bg-transparent border border-white/30 hover:border-gold-accent hover:bg-gold-accent text-white hover:text-[#2C1810] px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                    <span className="font-bold tracking-wider text-sm uppercase">Explore Region</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation "Film Strip" */}
      <div className="absolute bottom-0 left-0 w-full z-30 bg-gradient-to-t from-black via-black/80 to-transparent pt-20 pb-8">
        <div className="container mx-auto px-6">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                {regionsData.map((region, index) => {
                    // Find matching product data for thumbnail
                    const product = coffeeProducts.find(p => p.id === region.id);
                    const imageSrc = product ? product.image : region.image;

                    return (
                        <button
                            key={region.id}
                            onClick={() => handleManualSelect(index)}
                            className={`relative flex-shrink-0 w-40 h-28 md:w-56 md:h-36 rounded-xl overflow-hidden transition-all duration-500 snap-center group/card border-2 ${
                                index === activeIndex 
                                ? 'border-gold-accent scale-105 shadow-[0_0_20px_rgba(200,164,110,0.3)]' 
                                : 'border-white/10 opacity-60 hover:opacity-100 hover:scale-105'
                            }`}
                        >
                            <img 
                                src={imageSrc} 
                                alt={region.name} 
                                className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${index === activeIndex ? 'bg-black/20' : ''}`}></div>
                            
                            <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/90 to-transparent">
                                <span className={`block font-display font-bold text-lg text-white ${index === activeIndex ? 'text-gold-accent' : ''}`}>
                                    {t(`coffee.${region.id}.name`)}
                                </span>
                            </div>

                            {/* Progress Bar for Active Item */}
                            {index === activeIndex && isAutoPlaying && (
                                <div className="absolute bottom-0 left-0 h-1 bg-gold-accent animate-progressBar w-full origin-left"></div>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
      </div>

      {/* CSS Animations (Injected here for scoped usage) */}
      <style>{`
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes growWidth {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes progressBar {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
        }
        .animate-slideUp { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-slideRight { animation: slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-growWidth { animation: growWidth 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        .animate-progressBar { animation: progressBar 6s linear forwards; }
        
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>

    </section>
  );
}
