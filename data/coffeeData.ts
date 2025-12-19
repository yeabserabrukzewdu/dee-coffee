
import type { CoffeeProduct } from '../types';

// The base product data. Names and descriptions will come from translations.
export const coffeeProducts: Omit<CoffeeProduct, 'name' | 'description' | 'longDescription' | 'tastingNotes'>[] = [
  {
    id: 'sheko',
    image: 'GUJI.webp',
    price: 0,
    region: 'Sheko Zone',
    altitude: '1,700 - 2,000 masl',
    process: 'Natural',
    process: 'Roasted',
    grade: 'G1',
    score: '89+',
    harvestSeason: 'October - January',
    varietals: 'Sheko Variety'
  },
  {
    id: 'yirgacheffe',
    image: 'YIRGACHEFE.webp',
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
    process: 'Roasted',
    grade: 'G2',
    score: '85+',
    harvestSeason: 'October - January',
    varietals: 'Heirloom'
  },
  {
    id: 'harrar',
    image: 'HARRAR.webp',
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
    image: 'LIMMU.webp',
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
    id: 'kaffa',
    image: 'BALE.webp',
    price: 0,
    region: 'Kaffa Zone',
    altitude: '1,500 - 2,100 masl',
    process: 'Natural',
    process: 'Roasted',
    grade: 'G1',
    score: '90+',
    harvestSeason: 'November - February',
    varietals: 'Ancient Heirloom'
  }
];
