
import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

// Updated to use image placeholders. 
// Replace the 'image' URLs below with your actual logo file paths (e.g., '/assets/logos/organic.png')
const certifications = [
  { id: 'org', label: 'RAINFOREST ALLIANCE', image: '1.png' },
  { id: 'ft', label: 'Ethiopian national Coffee Assn', image: '2.png' },
  { id: 'rfa', label: 'E.C.X', image: '3.png' },
  { id: 'eca', label: 'African fine Coffee Assn', image: '4.jpg' },
  { id: 'sca', label: 'Ethiopian Coffee Assn', image: '5.png' },
  { id: 'cq', label: 'USDA ORGANIC', image: '6.png' },
  { id: 'jas', label: 'JR petrolium', image: '7.png' },
  { id: 'eu', label: 'EU Organic', image: '1.png' },
];

const LogoItem: React.FC<{ item: typeof certifications[0] }> = ({ item }) => (
  <div className="flex flex-col items-center justify-center mx-8 md:mx-12 opacity-70 hover:opacity-100 transition-all duration-300 cursor-default group/item">
     <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 relative">
        <img 
            src={item.image} 
            alt={item.label} 
            className="w-full h-full object-contain  group-hover/item:grayscale-0 transition-all duration-300  dark:group-hover/item:invert-0" 
        />
     </div>
     <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-center whitespace-nowrap text-gray-500 dark:text-gray-400">{item.label}</span>
  </div>
);

export function Featured() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-[#FDFBF7] dark:bg-[#1a1a1a] text-[#4A3728] dark:text-gray-200 transition-colors duration-300 border-t border-[#4A3728]/5 dark:border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <Reveal>
          <h3 className="text-sm font-bold tracking-[0.2em] text-[#4A3728] dark:text-gray-500 uppercase">
            {t('featured.title')}
          </h3>
        </Reveal>
      </div>

      <div className="relative w-full overflow-hidden group">
          {/* Scroll Container */}
          <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
              {/* Set 1 */}
              <div className="flex items-center">
                  {certifications.map((cert) => (
                      <LogoItem key={`1-${cert.id}`} item={cert} />
                  ))}
              </div>
              {/* Set 2 (Clone) */}
              <div className="flex items-center">
                  {certifications.map((cert) => (
                      <LogoItem key={`2-${cert.id}`} item={cert} />
                  ))}
              </div>
              {/* Set 3 (Clone for safety on wide screens) */}
              <div className="flex items-center">
                  {certifications.map((cert) => (
                      <LogoItem key={`3-${cert.id}`} item={cert} />
                  ))}
              </div>
              {/* Set 4 (Clone for safety) */}
              <div className="flex items-center">
                  {certifications.map((cert) => (
                      <LogoItem key={`4-${cert.id}`} item={cert} />
                  ))}
              </div>
          </div>
          
          {/* Gradient Edges for Smooth Fade */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FDFBF7] dark:from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FDFBF7] dark:from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); } /* Move 1 set out of 4 */
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}