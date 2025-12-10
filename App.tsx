
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

function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');

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

  // Simple Router
  if (route === '#/order' || route.startsWith('#/order')) {
    pageContent = <OrderPage />;
  } else if (route === '#/admin') {
    pageContent = <AdminPage />;
  } else if (route === '#/gallery') {
    pageContent = <GalleryPage />;
  } else if (route === '#/story') {
    pageContent = <OurStory />;
  } else if (route === '#/coffee') {
    pageContent = <OurCoffee />;
  } else if (route.startsWith('#/coffee/')) {
    const coffeeId = route.split('/')[2];
    pageContent = <CoffeeDetail id={coffeeId} />;
  } else {
    // Homepage
    pageContent = (
      <>
        <Hero />
        <Featured />
        <Services />
        {/* Restored Export Offerings Section */}
        <OurCoffee embedded={true} />
        <Process />
      </>
    );
  }
  
  const showHeaderFooter = route !== '#/admin';

  return (
    <div className="bg-[#FDFBF7] dark:bg-[#121212] min-h-screen transition-colors duration-300">
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
