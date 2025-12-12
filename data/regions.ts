
export interface RegionData {
  id: string;
  name: string;
  description: string;
  image: string;
  path: string; // SVG path data
  cx: string; // Label center x
  cy: string; // Label center y
}

export const regionsData: RegionData[] = [
  {
    id: 'harrar',
    name: 'Harrar',
    description: 'Ancient, wild, and intense. The birthplace of the natural process.',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2074&auto=format&fit=crop',
    path: 'M450,250 C480,240 520,230 550,240 C580,250 600,280 580,310 C560,340 520,350 490,340 C460,330 440,280 450,250 Z',
    cx: '510',
    cy: '290'
  },
  {
    id: 'sidama',
    name: 'Sidama',
    description: 'Balanced and diverse. Notes of spice, wine, and chocolate.',
    image: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?q=80&w=1960&auto=format&fit=crop',
    path: 'M320,350 C340,340 370,345 380,370 C390,395 370,420 340,430 C310,440 290,410 300,380 C305,360 315,355 320,350 Z',
    cx: '340',
    cy: '390'
  },
  {
    id: 'yirgacheffe',
    name: 'Yirgacheffe',
    description: 'Floral and tea-like. The global standard for washed coffee.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop',
    path: 'M340,430 C355,425 365,435 360,450 C355,465 335,465 330,450 C325,440 330,435 340,430 Z',
    cx: '345',
    cy: '445'
  },
  {
    id: 'guji',
    name: 'Guji',
    description: 'Fruity and complex. Famous for strawberry and blueberry notes.',
    image: 'https://images.unsplash.com/photo-1559525839-4f3460eb539c?q=80&w=2070&auto=format&fit=crop',
    path: 'M360,450 C380,440 410,450 420,480 C430,510 400,530 370,520 C350,510 340,480 360,450 Z',
    cx: '385',
    cy: '490'
  },
  {
    id: 'limmu',
    name: 'Limmu',
    description: 'Sweet and winey. Forest grown coffee with smooth body.',
    image: 'https://images.unsplash.com/photo-1621914809838-958b7633b4d4?q=80&w=1974&auto=format&fit=crop',
    path: 'M200,300 C230,290 260,300 270,330 C280,360 250,380 220,370 C190,360 180,330 200,300 Z',
    cx: '230',
    cy: '340'
  },
  {
    id: 'bale',
    name: 'Bale',
    description: 'Wild and herbal. Sourced from the Harenna cloud forest.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1961&auto=format&fit=crop',
    path: 'M380,370 C410,360 440,380 430,410 C420,440 390,440 380,410 C375,400 375,380 380,370 Z',
    cx: '410',
    cy: '400'
  }
];
