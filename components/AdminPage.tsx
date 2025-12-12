
import React, { useState, useEffect } from 'react';
import { useSupabase } from '../hooks/useSupabase';

// In a real application, use environment variables.
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'deecoffee_admin_password';

type SampleRequest = {
  id: number;
  created_at: string;
  full_name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  country: string;
  interest: string;
};

type GalleryImage = {
  id: number;
  created_at: string;
  image_path: string;
  alt: string;
  publicUrl?: string; // Optional: will be populated after fetch
};

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);

  const [requests, setRequests] = useState<SampleRequest[]>([]);
  const [requestsLoading, setRequestsLoading] = useState(false);
  const [requestsError, setRequestsError] = useState<string | null>(null);
  
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [galleryError, setGalleryError] = useState<string | null>(null);
  
  const [newImageFile, setNewImageFile] = useState<File | null>(null);
  const [newImageAlt, setNewImageAlt] = useState('');

  const { supabase, error: supabaseError, loading: supabaseLoading } = useSupabase();

  const fetchRequests = async () => {
    if (!supabase) return;

    setRequestsLoading(true);
    setRequestsError(null);
    try {
      const { data, error } = await supabase
        .from('sample_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setRequests(data as SampleRequest[]);
    } catch (err: any) {
      setRequestsError(err.message || 'Failed to fetch sample requests.');
    } finally {
      setRequestsLoading(false);
    }
  };

  const fetchImages = async () => {
    if (!supabase) return;

    setGalleryLoading(true);
    setGalleryError(null);
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      const imagesWithUrls = data.map(image => {
        const { data: { publicUrl } } = supabase.storage.from('gallery-images').getPublicUrl(image.image_path);
        return { ...image, publicUrl };
      });

      setGalleryImages(imagesWithUrls as GalleryImage[]);
    } catch (err: any) {
      setGalleryError(err.message || 'Failed to fetch gallery images.');
    } finally {
      setGalleryLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated && supabase) {
      fetchRequests();
      fetchImages();
    }
  }, [isAuthenticated, supabase]);

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError(null);
    } else {
      setAuthError('Invalid username or password. Please try again.');
    }
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setRequests([]);
    setGalleryImages([]);
  };

  const handleAddImage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!supabase || !newImageFile || !newImageAlt) return;

    setGalleryLoading(true);
    setGalleryError(null);
    try {
      const filePath = `public/${Date.now()}-${newImageFile.name}`;
      
      const { error: uploadError } = await supabase.storage
        .from('gallery-images')
        .upload(filePath, newImageFile);

      if (uploadError) throw uploadError;

      const { error: insertError } = await supabase
        .from('gallery_images')
        .insert([{ image_path: filePath, alt: newImageAlt }]);
      
      if (insertError) throw insertError;
      
      setNewImageFile(null);
      setNewImageAlt('');
      (e.target as HTMLFormElement).reset();
      fetchImages();
    } catch (err: any) {
      setGalleryError(err.message || 'Failed to add image.');
    } finally {
      setGalleryLoading(false);
    }
  };
  
  const handleDeleteImage = async (image: GalleryImage) => {
    if (!supabase || !window.confirm('Are you sure you want to delete this image?')) return;

    setGalleryLoading(true);
    setGalleryError(null);
    try {
      // 1. Delete from storage
      const { error: storageError } = await supabase.storage
        .from('gallery-images')
        .remove([image.image_path]);
      if (storageError) throw storageError;

      // 2. Delete from database
      const { error: dbError } = await supabase
        .from('gallery_images')
        .delete()
        .match({ id: image.id });
        
      if (dbError) throw dbError;
      
      fetchImages();
    } catch (err: any) {
      setGalleryError(err.message || 'Failed to delete image.');
    } finally {
      setGalleryLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7] dark:bg-[#121212] transition-colors duration-300">
        <div className="w-full max-w-md mx-auto">
          <form onSubmit={handleLoginSubmit} className="bg-white dark:bg-[#181818] p-8 md:p-12 rounded-lg shadow-2xl transition-colors duration-300">
            <h1 className="font-display text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Admin Access</h1>
            
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Username</label>
              <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="w-full bg-[#FDFBF7] dark:bg-[#222] border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-accent transition-colors duration-300" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full bg-[#FDFBF7] dark:bg-[#222] border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gold-accent transition-colors duration-300" 
                required 
              />
            </div>

            <div className="mt-6">
              <button type="submit" className="w-full bg-gold-accent text-gray-900 font-bold py-3 px-6 rounded-full text-lg hover:bg-opacity-90 transition-all">Login</button>
              {authError && <p className="text-red-500 mt-4 text-center">{authError}</p>}
            </div>
            <div className="text-center mt-6">
              <a href="/#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gold-accent">← Back to Main Site</a>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (supabaseLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7] dark:bg-[#121212] text-gold-accent text-xl">Connecting to database...</div>;
  }

  if (supabaseError) {
    return <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7] dark:bg-[#121212] text-red-500 text-xl text-center p-8">Error: {supabaseError}</div>;
  }

  return (
    <section className="min-h-screen bg-[#FDFBF7] dark:bg-[#121212] py-12 md:py-20 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <div>
            <a href="/#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mr-6">← Back to Site</a>
            <button onClick={handleLogout} className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-bold py-2 px-6 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">Logout</button>
          </div>
        </div>
        
        {/* Gallery Management */}
        <div className="bg-white dark:bg-[#181818] p-8 rounded-lg shadow-2xl mb-12 transition-colors duration-300">
            <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6">Gallery Management</h2>
            {galleryError && <p className="text-red-500 mb-4">{galleryError}</p>}
            <form onSubmit={handleAddImage} className="grid md:grid-cols-3 gap-4 items-end mb-8">
                <div>
                    <label htmlFor="imageFile" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Image File</label>
                    <input type="file" id="imageFile" onChange={e => e.target.files && setNewImageFile(e.target.files[0])} accept="image/*" className="w-full text-sm text-gray-700 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gold-accent file:text-gray-900 hover:file:bg-opacity-90" required />
                </div>
                <div>
                    <label htmlFor="imageAlt" className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Description (Alt Text)</label>
                    <input type="text" id="imageAlt" value={newImageAlt} onChange={e => setNewImageAlt(e.target.value)} placeholder="A farmer picking coffee..." className="w-full bg-[#FDFBF7] dark:bg-[#222] border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-gold-accent" required />
                </div>
                <button type="submit" disabled={galleryLoading} className="bg-gold-accent text-gray-900 font-bold py-2 px-5 rounded-full hover:bg-opacity-90 transition-all disabled:opacity-50 text-sm h-fit">
                    {galleryLoading ? 'Adding...' : 'Add Image'}
                </button>
            </form>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {galleryImages.map(image => (
                    <div key={image.id} className="relative group">
                        <img src={image.publicUrl} alt={image.alt} className="w-full h-32 object-cover rounded-md" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => handleDeleteImage(image)} className="text-red-500 hover:text-red-400 font-bold">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            {!galleryLoading && galleryImages.length === 0 && <p className="text-gray-500 text-center py-4">No gallery images found. Add one above.</p>}
        </div>

        {/* Sample Requests */}
        <div className="bg-white dark:bg-[#181818] p-8 rounded-lg shadow-2xl transition-colors duration-300">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Sample Requests</h2>
            <button onClick={fetchRequests} disabled={requestsLoading} className="bg-gold-accent text-gray-900 font-bold py-2 px-5 rounded-full hover:bg-opacity-90 transition-all disabled:opacity-50">
              {requestsLoading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>

          {requestsError && <p className="text-red-500 mb-4">{requestsError}</p>}
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
              <thead className="text-xs text-gray-700 dark:text-gray-400 uppercase bg-[#FDFBF7] dark:bg-[#222]">
                <tr>
                  <th scope="col" className="px-6 py-3">Date</th>
                  <th scope="col" className="px-6 py-3">Full Name</th>
                  <th scope="col" className="px-6 py-3">Company</th>
                  <th scope="col" className="px-6 py-3">Email</th>
                  <th scope="col" className="px-6 py-3">Phone</th>
                  <th scope="col" className="px-6 py-3">Country</th>
                  <th scope="col" className="px-6 py-3">Address</th>
                  <th scope="col" className="px-6 py-3">Interest</th>
                </tr>
              </thead>
              <tbody>
                {requestsLoading && ( <tr><td colSpan={8} className="text-center py-8"><div className="text-gold-accent">Loading requests...</div></td></tr> )}
                {!requestsLoading && requests.length === 0 && ( <tr><td colSpan={8} className="text-center py-8 text-gray-500">{requestsError ? 'Could not load data.' : 'No sample requests found.'}</td></tr> )}
                {requests.map((req) => (
                  <tr key={req.id} className="bg-white dark:bg-[#181818] border-b border-gray-200 dark:border-gray-700 hover:bg-[#FDFBF7] dark:hover:bg-[#2a2a2a] transition-colors">
                    <td className="px-6 py-4">{new Date(req.created_at).toLocaleDateString()}</td>
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{req.full_name}</td>
                    <td className="px-6 py-4">{req.company}</td>
                    <td className="px-6 py-4">{req.email}</td>
                    <td className="px-6 py-4">{req.phone}</td>
                    <td className="px-6 py-4">{req.country}</td>
                    <td className="px-6 py-4">{req.address}</td>
                    <td className="px-6 py-4">{req.interest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
