
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const slidesData = [
  {
    image: "https://images.unsplash.com/photo-1552346987-2a07c8a034e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    key: "slide1"
  },
  {
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    key: "slide2"
  },
  {
    image: "https://images.unsplash.com/photo-1621914809838-958b7633b4d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    key: "slide3"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, language } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide(prev => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const currentSlideKey = slidesData[currentSlide].key;

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className="w-full h-full bg-black bg-opacity-60"></div>
        </div>
      ))}

      <div className="relative z-10 px-4">
        <div key={`${currentSlide}-${language}`} className="fade-in-up">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-balance">
            {t(`hero.${currentSlideKey}.headline`)}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300 text-balance">
            {t(`hero.${currentSlideKey}.subheadline`)}
          </p>
        </div>
        
        <a href="#/order" className="mt-8 inline-block bg-gold-accent text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
          {t('hero.shopButton')}
        </a>
      </div>

      <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}