import React, { createContext, useState, useContext, PropsWithChildren } from 'react';
import { translations as enTranslations } from '../locales/en';
import { translations as amTranslations } from '../locales/am';

type Translations = typeof enTranslations;

interface LanguageContextType {
  language: 'en' | 'am';
  setLanguage: (language: 'en' | 'am') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const languages = {
  en: enTranslations,
  am: amTranslations,
};

const getNestedTranslation = (key: string, translations: Translations): string => {
  return key.split('.').reduce((obj: any, currentKey: string) => {
    return obj?.[currentKey];
  }, translations) || key;
};

export const LanguageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'am'>('en');
  
  const t = (key: string): string => {
    const translationSet = languages[language];
    return getNestedTranslation(key, translationSet);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
