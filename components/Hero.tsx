
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const slidesData = [
  {
    image: "/slide-01.jpg",
    key: "slide1"
  },
  {
    image: "/slide-02.webp",
    key: "slide2"
  },
  {
    image: "/slide-03.jpg",
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
          {/* Dark overlay only in dark mode */}
          <div className="w-full h-full bg-transparent dark:bg-black/60 transition-colors duration-1000"></div>
        </div>
      ))}

      <div className="relative z-10 px-4 drop-shadow-xl">
        <div key={`${currentSlide}-${language}`} className="fade-in-up">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-balance text-white shadow-black">
            {t(`hero.${currentSlideKey}.headline`)}
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-100 text-balance font-medium shadow-black">
            {t(`hero.${currentSlideKey}.subheadline`)}
          </p>
        </div>
        
        <a href="#/order" className="mt-8 inline-block bg-gold-accent text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
          {t('hero.shopButton')}
        </a>
      </div>

      <div className="absolute z-30 bottom-12 left-1/2 -translate-x-1/2 flex space-x-3">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 shadow-md ${currentSlide === index ? 'bg-gold-accent scale-125' : 'bg-white/70 hover:bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Gradient Fade Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#FDFBF7] dark:from-[#121212] via-[#FDFBF7]/60 dark:via-[#121212]/60 to-transparent z-20 pointer-events-none"></div>

      {/* Foam/Wave Texture Bottom Transition */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none leading-none">
         <svg 
           className="w-full h-16 md:h-24 lg:h-32 text-[#FDFBF7] dark:text-[#121212] transition-colors duration-300 fill-current"
           viewBox="0 0 1440 320" 
           preserveAspectRatio="none"
         >
            <path fillOpacity="0.4" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,181.3C672,181,768,203,864,224C960,245,1056,267,1152,250.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <path fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,208C384,213,480,235,576,240C672,245,768,235,864,218.7C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
      </div>
    </section>
  );
}
