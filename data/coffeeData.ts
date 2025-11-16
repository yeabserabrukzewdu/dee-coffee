
import type { CoffeeProduct } from '../types';

// The base product data. Names and descriptions will come from translations.
export const coffeeProducts: Omit<CoffeeProduct, 'name' | 'description'>[] = [
  {
    id: 'yirgacheffe-delight',
    image: 'https://images.unsplash.com/photo-1611732694616-a455ffe60580?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 22.50,
  },
  {
    id: 'sidamo-heirloom',
    image: 'https://images.unsplash.com/photo-1599159516825-c6a65a7a7266?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 20.00,
  },
  {
    id: 'harrar-wild-reserve',
    image: 'https://images.unsplash.com/photo-1629896483758-76a08c02a7b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 24.00,
  },
];