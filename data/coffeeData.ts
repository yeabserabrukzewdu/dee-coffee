
import type { CoffeeProduct } from '../types';

// The base product data. Names and descriptions will come from translations.
export const coffeeProducts: Omit<CoffeeProduct, 'name' | 'description'>[] = [
  {
    id: 'yirgacheffe-g1-washed',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop',
    price: 0, // Price hidden for B2B usually
    region: 'Gedeo Zone',
    altitude: '1,950 - 2,150 masl',
    process: 'Washed',
    grade: 'G1',
    score: '88+'
  },
  {
    id: 'guji-natural-g1',
    image: 'https://images.unsplash.com/photo-1559525839-4f3460eb539c?q=80&w=2070&auto=format&fit=crop',
    price: 0,
    region: 'Guji Zone',
    altitude: '2,000 - 2,200 masl',
    process: 'Natural',
    grade: 'G1',
    score: '89+'
  },
  {
    id: 'sidama-g2-washed',
    image: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?q=80&w=1960&auto=format&fit=crop',
    price: 0,
    region: 'Sidama Region',
    altitude: '1,800 - 2,000 masl',
    process: 'Washed',
    grade: 'G2',
    score: '85+'
  },
  {
    id: 'harrar-g4-natural',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2ae5460963?q=80&w=2070&auto=format&fit=crop',
    price: 0,
    region: 'East Hararghe',
    altitude: '1,500 - 1,800 masl',
    process: 'Natural',
    grade: 'G4',
    score: '84+'
  }
];
