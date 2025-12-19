import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

// Updated to use image placeholders. 
// Replace the 'image' URLs below with your actual logo file paths (e.g., '/assets/logos/organic.png')
const certifications = [
  { id: 'org', label: 'RAINFOREST ALLIANCE', image: '1.webp' },
  { id: 'ft', label: 'Ethiopian national Coffee Assn', image: '2.webp' },
  { id: 'rfa', label: 'E.C.X', image: '3.webp' },
  { id: 'eca', label: 'African fine Coffee Assn', image: '4.webp' },
  { id: 'sca', label: 'Ethiopian Coffee Assn', image: '5.webp' },
  { id: 'cq', label: 'USDA ORGANIC', image: '6.webp' },
  { id: 'jas', label: 'JR petrolium', image: '7.png' },
  { id: 'eu', label: 'EU Organic', image: '3.webp' },
];

const infiniteCertifications = [...certifications, ...certifications, ...certifications];

const LogoItem: React.FC<{ item: typeof certifications[0] }> = ({ item }) => (
  <div className="flex flex-col items-center justify-center min-w-[100px] md:min-w-[120px] shrink-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-default group/item">
     <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-4 relative">
        <img 
            src={item.image} 
            alt={item.label} 
            className="w-full h-full object-contain group-hover/item:grayscale-0 transition-all duration-300  dark:group-hover/item:invert-0 select-none pointer-events-none" 
        />
     </div>
     <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase text-center whitespace-nowrap text-gray-500 dark:text-gray-400 select-none">{item.label}</span>
  </div>
);

export function Featured() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // 1 = moving right (content moves left), -1 = moving left
  const directionRef = useRef(1); 
  const lastScrollLeftRef = useRef(0);
  const scrollSpeed = 0.5; // Base auto-scroll speed

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Initial scroll to the middle set to allow scrolling both ways immediately
    if (scrollContainer.scrollLeft === 0) {
        // We use a timeout to ensure layout is done
        setTimeout(() => {
            if(scrollContainer) {
                 const oneSetWidth = scrollContainer.scrollWidth / 3;
                 scrollContainer.scrollLeft = oneSetWidth;
            }
        }, 100);
    }

    let animationFrameId: number;

    const animate = () => {
      if (!isPaused && scrollContainer) {
        // Increment scroll position based on direction
        scrollContainer.scrollLeft += (scrollSpeed * directionRef.current);

        const totalWidth = scrollContainer.scrollWidth;
        const oneSetWidth = totalWidth / 3;

        // Infinite Loop Logic
        // If we have scrolled past the 2nd set (into 3rd), jump back to start of 2nd set
        if (scrollContainer.scrollLeft >= oneSetWidth * 2) {
             scrollContainer.scrollLeft = oneSetWidth + (scrollContainer.scrollLeft - (oneSetWidth * 2));
        } 
        // If we have scrolled past the 2nd set backwards (into 1st), jump to end of 2nd set
        else if (scrollContainer.scrollLeft <= 0) {
             scrollContainer.scrollLeft = oneSetWidth; // Or strictly: oneSetWidth + scrollContainer.scrollLeft if negative (not possible with scrollLeft usually)
        }
        else if (scrollContainer.scrollLeft < oneSetWidth && directionRef.current === -1) {
            // Optimization: if we go too far left into set 1, seamlessly jump to set 2
            // This is tricky because scrollLeft < oneSetWidth is valid for manual scroll.
            // We just let the buffer handle it.
            // But if we hit exactly 0, we reset.
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const handleTouchStart = () => {
    setIsPaused(true);
    if(scrollRef.current) lastScrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = () => {
    if (scrollRef.current) {
        const current = scrollRef.current.scrollLeft;
        const diff = current - lastScrollLeftRef.current;
        
        // Determine direction based on drag
        // If diff > 0, scrollLeft is increasing (user dragging left, content moving right-to-left) -> Direction 1
        // If diff < 0, scrollLeft is decreasing (user dragging right, content moving left-to-right) -> Direction -1
        if (Math.abs(diff) > 1) { // Threshold to ignore micro-movements
            directionRef.current = diff > 0 ? 1 : -1;
        }
        lastScrollLeftRef.current = current;
    }
  };

  const handleTouchEnd = () => {
     // Small delay before resuming to let momentum settle if any (though overflow:auto has its own momentum)
     // Native momentum might fight our JS loop if we resume immediately while momentum is active.
     // However, simpler is often better. We resume JS, which effectively cancels browser momentum 
     // because we override scrollLeft on next frame.
     setTimeout(() => setIsPaused(false), 50);
  };

  return (
    <section className="py-16 bg-[#FDFBF7] dark:bg-[#1a1a1a] text-[#4A3728] dark:text-gray-200 transition-colors duration-300 border-t border-[#4A3728]/5 dark:border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <Reveal>
          <h3 className="text-sm font-bold tracking-[0.2em] text-[#4A3728] dark:text-gray-500 uppercase">
            {t('featured.title')}
          </h3>
        </Reveal>
      </div>

      <div className="relative w-full group px-4 md:px-0">
          {/* Gradient Edges for Smooth Fade */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#FDFBF7] dark:from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#FDFBF7] dark:from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>

          {/* Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 md:gap-16 items-center pb-8 pt-4 px-6 no-scrollbar cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
              {infiniteCertifications.map((cert, index) => (
                  <LogoItem key={`${cert.id}-${index}`} item={cert} />
              ))}
          </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
