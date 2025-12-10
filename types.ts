
export interface CoffeeProduct {
  id: string;
  name: string;
  description: string; // Short description for cards
  longDescription?: string; // Detailed description for specific page
  image: string;
  price: number;
  region: string;
  altitude: string;
  process: 'Washed' | 'Natural' | 'Anaerobic' | 'Honey';
  grade: string;
  score?: string; // Cupping score
  harvestSeason?: string;
  varietals?: string;
  tastingNotes?: string[];
}
