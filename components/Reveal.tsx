
import React, { useEffect, useRef, useState, PropsWithChildren } from 'react';

interface RevealProps {
  className?: string;
  delay?: number; // Delay in milliseconds
  threshold?: number; // Intersection threshold (0.0 - 1.0)
  direction?: 'up' | 'left' | 'right'; // Animation direction
}

export const Reveal: React.FC<PropsWithChildren<RevealProps>> = ({ 
  children, 
  className = '', 
  delay = 0, 
  threshold = 0.1,
  direction = 'up' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before the bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const directionClass = `reveal-${direction}`;

  return (
    <div
      ref={ref}
      className={`reveal ${directionClass} ${isVisible ? 'active' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
