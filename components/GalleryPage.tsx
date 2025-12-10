
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { useSupabase } from '../hooks/useSupabase';
import { Reveal } from './Reveal';

type GalleryImage = {
  id: number;
  src: string; // This will now be the public URL
  alt: string;
};

function Lightbox({ image, onClose }: { image: GalleryImage, onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 fade-in-up"
      onClick={onClose}
      style={{ animationDuration: '300ms' }}
    >
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <img 
          src={image.src} 
          alt={image.alt} 
          className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
        />
        <p className="text-center text-white mt-4 text-lg">{image.alt}</p>
      </div>
       <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl font-bold"
        aria-label="Close image view"
      >
        &times;
      </button>
    </div>
  );
}

export function GalleryPage() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [imagesLoading, setImagesLoading] = useState(true);
  const [imagesError, setImagesError] = useState<string | null>(null);
  const { supabase, error: supabaseError, loading: supabaseLoading } = useSupabase();

  useEffect(() => {
    const fetchImages = async () => {
      if (!supabase) {
        // Wait for the supabase client to be initialized by the hook.
        return;
      }
      try {
        setImagesLoading(true);
        const { data: dbData, error: dbError } = await supabase
          .from('gallery_images')
          .select('id, alt, image_path')
          .order('created_at', { ascending: false });

        if (dbError) throw dbError;
        
        const imagesWithUrls = dbData.map(image => {
          const { data: publicUrlData } = supabase.storage
            .from('gallery-images')
            .getPublicUrl(image.image_path);
          
          return {
            id: image.id,
            alt: image.alt,
            src: publicUrlData.publicUrl,
          };
        });

        setImages(imagesWithUrls);
      } catch (err: any) {
        setImagesError(err.message || 'Failed to fetch images.');
      } finally {
        setImagesLoading(false);
      }
    };
    
    fetchImages();
  }, [supabase]);

  const isLoading = supabaseLoading || imagesLoading;
  const error = supabaseError || imagesError;

  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-[#FDFBF7] dark:bg-[#121212] transition-colors duration-300 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Reveal>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-balance text-gray-900 dark:text-white transition-colors duration-300">
                {t('galleryPage.headline')}
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300">
                {t('galleryPage.subheadline')}
              </p>
            </Reveal>
          </div>

          {isLoading && <p className="text-center text-gold-accent">Loading gallery...</p>}
          {error && <p className="text-center text-red-500">Error: {error}</p>}

          {!isLoading && !error && (
             images.length > 0 ? (
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6">
                  {images.map((image, index) => (
                    <Reveal 
                      key={image.id}
                      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group break-inside-avoid mb-4 md:mb-6"
                      delay={index * 100}
                    >
                      <div onClick={() => setSelectedImage(image)}>
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-end p-4">
                          <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                            {image.alt}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500">The gallery is currently empty. Add images from the admin dashboard.</p>
              )
          )}
        </div>
      </section>

      {selectedImage && <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </>
  );
}
