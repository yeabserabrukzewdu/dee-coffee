
import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

export function Numbers() {
  const { t } = useTranslation();

  const stats = [
    {
      id: 'farms',
      // Icon: Farmer with a hat
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
           {/* Hat Top */}
           <path d="M7 8c0-3 2.5-5 5-5s5 2 5 5" />
           {/* Hat Brim */}
           <path d="M4 8h16" />
           {/* Head */}
           <circle cx="12" cy="11" r="3" />
           {/* Body */}
           <path d="M5 22v-2a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v2" />
        </svg>
      ),
      title: t('numbers.farms.title'),
      subtitle: t('numbers.farms.subtitle')
    },
    {
      id: 'stations',
      // Icon: Water drop/waves (Washing stations)
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
           <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
           <path d="M10 15a2 2 0 0 0 2 2" /> 
        </svg>
      ),
      title: t('numbers.stations.title'),
      subtitle: t('numbers.stations.subtitle')
    },
    {
      id: 'export',
      // Icon: Cargo Ship with Containers
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
           {/* Containers stacked */}
           <rect x="3" y="10" width="4" height="6" />
           <rect x="8" y="8" width="4" height="8" />
           <rect x="13" y="10" width="4" height="6" />
           <rect x="18" y="11" width="3" height="5" />
           {/* Ship Hull */}
           <path d="M2 17l2 4h16l2-4H2z" />
           {/* Water Line */}
           <path d="M2 21h20" />
        </svg>
      ),
      title: t('numbers.export.title'),
      subtitle: t('numbers.export.subtitle')
    }
  ];

  return (
    <section className="py-24 bg-[#FDFBF7] dark:bg-[#121212] transition-colors duration-300 relative border-y border-[#4A3728]/5 dark:border-white/5">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#4A3728] dark:text-gold-accent mb-4">
              {t('numbers.title')}
            </h2>
            <div className="h-0.5 w-16 bg-gold-accent mx-auto"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <Reveal key={stat.id} delay={index * 150} className="group">
              <div className="flex flex-col items-center">
                <div className="text-gold-accent mb-6 transform transition-transform duration-500 group-hover:scale-110 drop-shadow-sm">
                  {stat.icon}
                </div>
                <h3 className="font-display text-4xl font-bold text-[#2C1810] dark:text-white mb-3 leading-tight group-hover:text-gold-accent transition-colors duration-300">
                  {stat.title}
                </h3>
                <p className="text-[#4A3728]/80 dark:text-gray-400 font-medium text-lg max-w-xs mx-auto">
                  {stat.subtitle}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
