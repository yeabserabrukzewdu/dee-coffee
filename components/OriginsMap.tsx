
import React, { useState } from 'react';
import { EthiopiaMap } from './EthiopiaMap';
import { regionsData } from '../data/regions';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

export function OriginsMap() {
  const { t } = useTranslation();
  const [selectedRegionId, setSelectedRegionId] = useState<string>('yirgacheffe');

  const selectedRegion = regionsData.find(r => r.id === selectedRegionId) || regionsData[0];

  return (
    <section className="relative min-h-[800px] flex items-center overflow-hidden bg-gray-900 transition-all duration-700">
      
      {/* Dynamic Background */}
      {regionsData.map((region) => (
        <div
          key={region.id}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${selectedRegionId === region.id ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${region.image}')` }}
        />
      ))}
      <div className="absolute inset-0 bg-transparent dark:bg-black/60 transition-colors duration-300"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-20">
        <Reveal>
            <div className="text-center mb-12">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Explore Origins</h2>
                <p className="text-white text-lg max-w-2xl mx-auto drop-shadow-md">Click on a region to discover its unique terroir and flavor profile.</p>
            </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Map Column */}
          <div className="order-2 lg:order-1 h-[400px] lg:h-[600px]">
             <EthiopiaMap 
                selectedRegionId={selectedRegionId} 
                onSelectRegion={setSelectedRegionId} 
             />
          </div>

          {/* Info Column */}
          <div className="order-1 lg:order-2">
            <Reveal key={selectedRegionId} className="bg-white/10 dark:bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-xl border border-white/20 shadow-2xl">
                <span className="text-gold-accent font-bold tracking-widest uppercase text-sm mb-2 block shadow-black">Selected Region</span>
                <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                    {selectedRegion.name}
                </h3>
                <p className="text-xl text-white leading-relaxed mb-8 drop-shadow-md">
                    {selectedRegion.description}
                </p>
                
                <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gold-accent/20 flex items-center justify-center text-gold-accent shadow-sm">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                        </div>
                        <div>
                            <span className="block text-xs text-gray-200 uppercase drop-shadow-sm">Primary Process</span>
                            <span className="text-white font-medium drop-shadow-sm">
                                {['yirgacheffe', 'sidama', 'limmu'].includes(selectedRegionId) ? 'Washed & Natural' : 'Natural / Dry Process'}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gold-accent/20 flex items-center justify-center text-gold-accent shadow-sm">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        </div>
                        <div>
                            <span className="block text-xs text-gray-200 uppercase drop-shadow-sm">Elevation</span>
                            <span className="text-white font-medium drop-shadow-sm">1,800 - 2,300 masl</span>
                        </div>
                    </div>
                </div>

                <a 
                    href={`#/coffee/${selectedRegionId}`} 
                    className="inline-block bg-white text-gray-900 hover:bg-gold-accent font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                >
                    View Coffees
                </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
