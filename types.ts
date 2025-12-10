
export interface CoffeeProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  region: string;
  altitude: string;
  process: 'Washed' | 'Natural' | 'Anaerobic' | 'Honey';
  grade: string;
  score?: string; // Cupping score
}
