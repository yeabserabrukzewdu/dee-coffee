
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Featured } from './components/Featured';
import { OurStory } from './components/OurStory';
import { OurCoffee } from './components/OurCoffee';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { OrderPage } from './components/OrderPage';
import { AdminPage } from './components/AdminPage';
import { GalleryPage } from './components/GalleryPage';
import { Services } from './components/Services';
import { ContactToggle } from './components/ContactToggle';
import { CoffeeDetail } from './components/CoffeeDetail';
import { HomeAbout } from './components/HomeAbout';
import { Numbers } from './components/Numbers';
import { OriginsMap } from './components/OriginsMap';
import { SEO } from './components/SEO';
import { useTranslation } from './contexts/LanguageContext';

function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');
  const { t } = useTranslation();

  useEffect(() => {
    const handleHashChange = () => {
      window.scrollTo(0, 0);
      setRoute(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  let pageContent;
  let seoData = { title: '', description: '', keywords: [] as string[] };

  // Simple Router & SEO Data Mapping
  if (route === '#/order' || route.startsWith('#/order')) {
    pageContent = <OrderPage />;
    seoData = { 
      title: t('orderPage.headline'), 
      description: t('orderPage.subheadline'),
      keywords: ['Buy Ethiopian Coffee', 'Wholesale Coffee', 'Request Quote', 'Coffee Price FOB']
    };
  } else if (route === '#/admin') {
    pageContent = <AdminPage />;
    seoData = { 
      title: 'Admin Dashboard', 
      description: 'Internal management area.',
      keywords: []
    };
  } else if (route === '#/gallery') {
    pageContent = <GalleryPage />;
    seoData = { 
      title: t('nav.gallery'), 
      description: t('galleryPage.subheadline'),
      keywords: ['Coffee Washing Station', 'Coffee Drying Beds', 'Ethiopian Coffee Farm']
    };
  } else if (route === '#/story') {
    pageContent = <OurStory />;
    seoData = { 
      title: t('ourStory.pageTitle'), 
      description: t('ourStory.pageSubtitle'),
      keywords: ['History of Coffee', 'Ethiopian Coffee Culture', 'Family Owned Exporter']
    };
  } else if (route === '#/coffee') {
    pageContent = <OurCoffee />;
    seoData = { 
      title: t('ourCoffee.headline'), 
      description: t('ourCoffee.subheadline'),
      keywords: ['Yirgacheffe Green Coffee', 'Guji Natural', 'Sidama Washed', 'Specialty Coffee Ethiopia']
    };
  } else if (route.startsWith('#/coffee/')) {
    const coffeeId = route.split('/')[2];
    pageContent = <CoffeeDetail id={coffeeId} />;
    seoData = { 
        title: t(`coffee.${coffeeId}.name`), 
        description: t(`coffee.${coffeeId}.description`),
        keywords: [t(`coffee.${coffeeId}.name`), 'Single Origin', 'Specialty Grade', 'Ethiopian Beans']
    };
  } else {
    // Homepage
    pageContent = (
      <>
        <Hero />
        <HomeAbout />
        <Numbers />
        <OriginsMap />
        <Featured />
        <Services />
        <Process />
      </>
    );
    seoData = { 
      title: 'Leading Coffee Export Company', 
      description: 'DEE COFFEE is a top-rated Ethiopian coffee export company. We supply premium green coffee beans from Yirgacheffe, Guji, and Sidama to roasters worldwide.',
      keywords: ['Top Coffee Exporters', 'Best Ethiopian Coffee', 'Direct Trade Coffee', 'Addis Ababa Exporters']
    };
  }
  
  const showHeaderFooter = route !== '#/admin';

  return (
    <div className="bg-[#FDFBF7] dark:bg-[#121212] min-h-screen transition-colors duration-300">
      <SEO 
        title={seoData.title} 
        description={seoData.description} 
        path={route} 
        keywords={seoData.keywords}
      />
      
      {showHeaderFooter && <Header />}
      <main>
        {pageContent}
      </main>
      {showHeaderFooter && <ContactToggle />}
      {showHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
