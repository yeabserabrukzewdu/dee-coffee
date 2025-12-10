
import type { CoffeeProduct } from '../types';

// The base product data. Names and descriptions will come from translations.
export const coffeeProducts: Omit<CoffeeProduct, 'name' | 'description' | 'longDescription' | 'tastingNotes'>[] = [
  {
    id: 'guji',
    image: 'https://images.unsplash.com/photo-1559525839-4f3460eb539c?q=80&w=2070&auto=format&fit=crop',
    price: 0,
    region: 'Guji Zone',
    altitude: '2,000 - 2,200 masl',
    process: 'Natural',
    grade: 'G1',
    score: '89+',
    harvestSeason: 'October - January',
    varietals: 'Heirloom, Kurume'
  },
  {
    id: 'yirgacheffe',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop',
    price: 0, 
    region: 'Gedeo Zone',
    altitude: '1,950 - 2,150 masl',
    process: 'Washed',
    grade: 'G1',
    score: '88+',
    harvestSeason: 'October - January',
    varietals: 'Heirloom, Kurume, Dega'
  },
  {
    id: 'sidama',
    image: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?q=80&w=1960&auto=format&fit=crop',
    price: 0,
    region: 'Sidama Region',
    altitude: '1,800 - 2,200 masl',
    process: 'Washed',
    grade: 'G2',
    score: '85+',
    harvestSeason: 'October - January',
    varietals: 'Heirloom'
  },
  {
    id: 'harrar',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2ae5460963?q=80&w=2070&auto=format&fit=crop',
    price: 0,
    region: 'East Hararghe',
    altitude: '1,500 - 1,800 masl',
    process: 'Natural',
    grade: 'G4',
    score: '84+',
    harvestSeason: 'October - February',
    varietals: 'Longberry, Shortberry'
  },
  {
    id: 'limmu',
    image: 'https://images.unsplash.com/photo-1621914809838-958b7633b4d4?q=80&w=1974&auto=format&fit=crop',
    price: 0,
    region: 'Jimma Zone',
    altitude: '1,400 - 2,000 masl',
    process: 'Washed',
    grade: 'G2',
    score: '85+',
    harvestSeason: 'November - January',
    varietals: 'Heirloom'
  },
  {
    id: 'bale',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1961&auto=format&fit=crop',
    price: 0,
    region: 'Bale Zone',
    altitude: '1,800 - 2,300 masl',
    process: 'Natural', // Often known for wild forest coffee
    grade: 'G3',
    score: '86+',
    harvestSeason: 'November - February',
    varietals: 'Wild Forest'
  }
];
