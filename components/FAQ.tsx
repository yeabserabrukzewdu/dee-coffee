
import React, { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Reveal } from './Reveal';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="border-b border-[#4A3728]/10 dark:border-white/10 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-start text-left focus:outline-none group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={`text-lg md:text-xl font-bold transition-colors duration-300 pr-8 ${isOpen ? 'text-gold-accent' : 'text-[#2C1810] dark:text-white group-hover:text-gold-accent'}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 transform transition-transform duration-300 mt-1 ${isOpen ? 'rotate-180 text-gold-accent' : 'rotate-0 text-gray-400'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[#4A3728] dark:text-gray-300 leading-relaxed text-base md:text-lg">
          {answer}
        </p>
      </div>
    </div>
  );
};

export function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    'moq', 
    'samples', 
    'payment', 
    'shipping', 
    'certification', 
    'visit', 
    'roasted', 
    'carriers'
  ];

  return (
    <section id="faq" className="py-24 bg-[#F5F2EB] dark:bg-[#181818] transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <Reveal className="text-center mb-16">
          <span className="text-gold-accent font-bold tracking-widest uppercase text-sm mb-4 block">
             Common Questions
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#2C1810] dark:text-white mb-6">
            {t('faq.headline')}
          </h2>
          <p className="text-lg text-[#4A3728] dark:text-gray-400">
            {t('faq.subheadline')}
          </p>
        </Reveal>

        <div className="bg-white dark:bg-[#222] rounded-2xl shadow-xl p-6 md:p-10 border-t-4 border-gold-accent">
          {questions.map((key, index) => (
            <Reveal key={key} delay={index * 50}>
               <FaqItem 
                 question={t(`faq.questions.${key}.q`)}
                 answer={t(`faq.questions.${key}.a`)}
                 isOpen={openIndex === index}
                 onClick={() => handleClick(index)}
               />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
