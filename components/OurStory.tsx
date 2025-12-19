
import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

export function OurStory() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#FDFBF7] dark:bg-[#121212] min-h-screen">
      
      {/* Story Page Hero */}
      <div className="relative h-[60vh] flex items-center justify-center">
         <div className="absolute inset-0 z-0">
             <img 
              src="/Company.webp"
               alt="Ethiopian Landscape" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-colors duration-300"></div>
         </div>
         <div className="relative z-10 text-center px-6 drop-shadow-lg max-w-4xl mx-auto">
             <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 fade-in-up">{t('ourStory.pageTitle')}</h1>
             <p className="text-xl md:text-2xl text-white font-medium fade-in-up" style={{ animationDelay: '100ms' }}>{t('ourStory.pageSubtitle')}</p>
         </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Sticky Sidebar Image - Fixed: Sticky is applied to the container, not the Reveal */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-auto self-start z-10">
            <Reveal>
               <div className="relative rounded-lg overflow-hidden shadow-2xl group">
                  <img 
                    src="OUR COFFEE.webp"  
                    alt="Ethiopian coffee farmer"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                      <div className="border-l-4 border-gold-accent pl-4">
                          <p className="font-display text-2xl font-bold text-white mb-2 leading-tight">"Coffee is our bread."</p>
                          <p className="text-gray-300 italic text-sm">- Local saying in Kaffa</p>
                      </div>
                  </div>
               </div>
            </Reveal>
          </div>
          
          {/* Main Text Content */}
          <div className="lg:w-2/3 space-y-12">
             <Reveal delay={100}>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2C1810] dark:text-white mb-8 leading-tight">
                  {t('ourStory.headline')}
                </h2>
                <div className="prose dark:prose-invert prose-lg text-[#4A3728] dark:text-gray-300 max-w-none">
                  <p className="leading-relaxed mb-6 text-lg">{t('ourStory.body')}</p>
                  <p className="leading-relaxed mb-6 text-lg">{t('ourStory.history')}</p>
                  <p className="leading-relaxed text-lg">{t('ourStory.mission')}</p>
                </div>
             </Reveal>

             <div className="h-px bg-[#4A3728]/10 dark:bg-white/10 w-full my-8"></div>

             <Reveal delay={200}>
                <h3 className="font-display text-3xl font-bold text-[#2C1810] dark:text-white mb-8">
                   {t('ourStory.pillars.title')}
                </h3>
                
                <div className="space-y-10">
                   {/* Direct Trade */}
                   <div className="bg-white dark:bg-[#181818] p-8 rounded-xl shadow-lg border-l-4 border-gold-accent hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-4 mb-4">
                         <div className="p-2 bg-[#FDFBF7] dark:bg-[#222] rounded-full text-gold-accent">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                         </div>
                         <h4 className="font-display text-2xl font-bold text-[#2C1810] dark:text-white">
                           {t('ourStory.pillars.directTrade.title')}
                         </h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                         {t('ourStory.pillars.directTrade.description')}
                      </p>
                   </div>

                   {/* Quality */}
                   <div className="bg-white dark:bg-[#181818] p-8 rounded-xl shadow-lg border-l-4 border-gold-accent hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-4 mb-4">
                         <div className="p-2 bg-[#FDFBF7] dark:bg-[#222] rounded-full text-gold-accent">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                         </div>
                         <h4 className="font-display text-2xl font-bold text-[#2C1810] dark:text-white">
                           {t('ourStory.pillars.quality.title')}
                         </h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                         {t('ourStory.pillars.quality.description')}
                      </p>
                   </div>

                   {/* Global */}
                   <div className="bg-white dark:bg-[#181818] p-8 rounded-xl shadow-lg border-l-4 border-gold-accent hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-4 mb-4">
                         <div className="p-2 bg-[#FDFBF7] dark:bg-[#222] rounded-full text-gold-accent">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                         </div>
                         <h4 className="font-display text-2xl font-bold text-[#2C1810] dark:text-white">
                           {t('ourStory.pillars.global.title')}
                         </h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                         {t('ourStory.pillars.global.description')}
                      </p>
                   </div>
                </div>
             </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
