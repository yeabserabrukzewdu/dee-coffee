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

function App() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      window.scrollTo(0, 0);
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  let pageContent;
  if (route === '#/order') {
    pageContent = <OrderPage />;
  } else if (route === '#/admin') {
    pageContent = <AdminPage />;
  } else if (route === '#/gallery') {
    pageContent = <GalleryPage />;
  } else {
    pageContent = (
      <>
        <Hero />
        <Featured />
        <OurStory />
        <OurCoffee />
        <Process />
      </>
    );
  }
  
  const showHeaderFooter = route !== '#/admin';

  return (
    <div className="bg-[#121212]">
      {showHeaderFooter && <Header />}
      <main>
        {pageContent}
      </main>
      {showHeaderFooter && <Footer />}
    </div>
  );
}

export default App;