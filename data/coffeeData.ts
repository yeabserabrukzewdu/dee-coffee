
import type { CoffeeProduct } from '../types';

// The base product data. Names and descriptions will come from translations.
export const coffeeProducts: Omit<CoffeeProduct, 'name' | 'description' | 'longDescription' | 'tastingNotes'>[] = [
  {
    id: 'guji',
    image: '/GUJI.jpg',
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
    image: 'YIRGACHEFE.jpg',
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
    image: 'SIDAMA.webp',
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
    image: 'HARRAR.jpg',
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
    image: 'LIMMU.jpg',
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
    image: 'BALE.jpg',
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
