
import React, { useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export function SEO({ title, description, path, keywords = [] }: SEOProps) {
  const { language } = useTranslation();
  const baseUrl = window.location.origin;
  const fullUrl = `${baseUrl}/${path.replace('#/', '')}`;
  
  // Default keywords that apply to the whole site
  const defaultKeywords = [
    'Ethiopian Coffee',
    'Green Coffee Beans',
    'Coffee Export Ethiopia',
    'Ethiopian Coffee Exporters',
    'Arabica Coffee',
    'Yirgacheffe',
    'Sidama',
    'Guji',
    'Bulk Coffee Supplier'
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])].join(', ');

  useEffect(() => {
    // 1. Update Document Title
    document.title = `${title} | DEE COFFEE Ethiopia`;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', allKeywords);

    // 4. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // 5. Inject JSON-LD Structured Data
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';

    // Define Schema.org data
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          "name": "DEE COFFEE - Ethiopian Coffee Exporters",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-Photoroom-png-Photoroom-d6v4.png"
          },
          "description": "Leading exporters of premium green coffee beans from Ethiopia to the world.",
          "address": {
             "@type": "PostalAddress",
             "addressLocality": "Addis Ababa",
             "addressCountry": "Ethiopia"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+251-911-22-33-44",
            "contactType": "sales",
            "areaServed": "Global"
          }
        },
        {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          "url": baseUrl,
          "name": "DEE COFFEE - Coffee Export Ethiopia",
          "description": "Premium Green Coffee Exporter from Ethiopia.",
          "publisher": {
            "@id": `${baseUrl}/#organization`
          },
          "inLanguage": language
        }
      ]
    };

    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

  }, [title, description, path, fullUrl, language, baseUrl, allKeywords]);

  return null;
}
