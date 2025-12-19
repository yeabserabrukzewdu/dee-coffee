
import React, { useState } from 'react';

export function ContactToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (showNotification) {
      setShowNotification(false);
    }
  };

  return (
    <>
      {/* Backdrop for mobile/desktop to close when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-[2px] transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-3 md:gap-4">
        {/* Sub Buttons Container */}
        <div 
          className={`flex flex-col gap-3 md:gap-4 transition-all duration-300 transform origin-bottom ${
            isOpen 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-8 opacity-0 scale-90 pointer-events-none'
          }`}
        >
          
          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/251911223344" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-end gap-3"
            onClick={() => setIsOpen(false)}
          >
            <span className="bg-white text-gray-900 text-sm font-bold py-1.5 px-3 rounded-lg shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block whitespace-nowrap">
              WhatsApp
            </span>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg text-white hover:scale-110 transition-transform duration-300 hover:shadow-green-500/50">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </div>
          </a>

          {/* Call Button */}
          <a 
            href="tel:+251911223344" 
            className="group flex items-center justify-end gap-3"
            onClick={() => setIsOpen(false)}
          >
            <span className="bg-white text-gray-900 text-sm font-bold py-1.5 px-3 rounded-lg shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block whitespace-nowrap">
              Call Now
            </span>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg text-white hover:scale-110 transition-transform duration-300 hover:shadow-blue-500/50">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
          </a>
        </div>

        {/* Main Toggle Button */}
        <div className="relative">
          {/* Glowing Ring Animation - Only if notification is active */}
          {!isOpen && showNotification && (
            <span className="absolute inset-0 rounded-full bg-gold-accent opacity-75 animate-ping"></span>
          )}

          {/* Notification Badge */}
          {showNotification && !isOpen && (
            <span className="absolute -top-1 -right-1 z-[60] flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white text-[11px] font-bold border-2 border-white shadow-lg animate-pulse">
              1
            </span>
          )}
          
          <button 
            onClick={handleToggle}
            className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 z-50 ${isOpen ? 'bg-gray-800 rotate-90 text-white' : 'bg-gold-accent text-gray-900 hover:bg-[#d4af7a]'}`}
            aria-label="Contact options"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
