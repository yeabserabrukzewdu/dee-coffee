import { useState, useEffect } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Use a singleton pattern to initialize the client only once.
let supabaseInstance: SupabaseClient | null = null;

export function useSupabase() {
  const [supabase, setSupabase] = useState<SupabaseClient | null>(supabaseInstance);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(!supabaseInstance);

  useEffect(() => {
    // If the instance is already created, no need to fetch again.
    if (supabaseInstance) {
      return;
    }

    const initSupabase = async () => {
      try {
        const response = await fetch('/api/config');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch Supabase configuration.');
        }
        const config = await response.json();
        
        if (!config.supabaseUrl || !config.supabaseKey) {
          throw new Error('Supabase URL or Key is missing from configuration response.');
        }

        // Create and store the singleton instance.
        supabaseInstance = createClient(config.supabaseUrl, config.supabaseKey);
        setSupabase(supabaseInstance);
      } catch (err: any) {
        console.error("Supabase initialization error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    // Only run initialization if the instance doesn't exist.
    if (!supabaseInstance) {
        initSupabase();
    }
  }, []);

  return { supabase, error, loading };
}
