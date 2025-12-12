
import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

export function OurStory() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#FDFBF7] dark:bg-[#121212] min-h-screen">
      
      {/* Story Page Hero */}
      <div className="relative h-[50vh] flex items-center justify-center">
         <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" 
               alt="Ethiopian Landscape" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-transparent dark:bg-black/60 transition-colors duration-300"></div>
         </div>
         <div className="relative z-10 text-center px-6 drop-shadow-lg">
             <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4 fade-in-up">{t('ourStory.pageTitle')}</h1>
             <p className="text-xl text-white font-medium max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '100ms' }}>{t('ourStory.pageSubtitle')}</p>
         </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Reveal className="w-full sticky top-32">
            <img 
              src="https://images.unsplash.com/photo-1507133314543-a813952185dd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Ethiopian coffee farmer"
              className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/5]"
            />
             <div className="mt-6 p-6 bg-white dark:bg-[#181818] rounded-lg shadow-lg border-l-4 border-gold-accent">
                <p className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">"Coffee is our bread."</p>
                <p className="text-gray-600 dark:text-gray-400 italic">- Local saying in Kaffa</p>
             </div>
          </Reveal>
          
          <div className="space-y-8">
            <Reveal delay={200}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-balance text-gray-900 dark:text-white mb-6">
                {t('ourStory.headline')}
              </h2>
              <div className="prose dark:prose-invert prose-lg text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed mb-6">
                  {t('ourStory.body')}
                </p>
                <p className="leading-relaxed mb-6">
                  {t('ourStory.history')}
                </p>
                <p className="leading-relaxed">
                  {t('ourStory.mission')}
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
               <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">Why DEE COFFEE?</h3>
               <ul className="space-y-4">
                  {[
                    { title: "Direct Trade", desc: "We skip the middlemen to ensure fair prices for farmers and better value for roasters." },
                    { title: "Quality Guarantee", desc: "Every lot is Q-graded in our lab before export." },
                    { title: "Sustainable", desc: "We support organic and shade-grown farming practices." }
                  ].map((item, idx) => (
                      <li key={idx} className="flex gap-4">
                          <div className="mt-1 bg-gold-accent rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center text-gray-900 font-bold text-xs">✓</div>
                          <div>
                              <strong className="block text-gray-900 dark:text-white">{item.title}</strong>
                              <span className="text-gray-600 dark:text-gray-400">{item.desc}</span>
                          </div>
                      </li>
                  ))}
               </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
