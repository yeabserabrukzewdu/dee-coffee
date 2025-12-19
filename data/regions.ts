
export interface RegionData {
  id: string;
  name: string;
  description: string;
  image: string;
  path: string;
  cx: string;
  cy: string;
  color: string; // Theme color for background transitions
  labelOffset?: { x: number; y: number };
}

export const ethiopiaOutlinePath = "M280.5,45.2 C295.1,48.5 310.2,52.1 325.4,55.8 C340.1,52.5 355.2,42.1 368.5,35.2 C385.2,26.5 405.1,18.2 425.5,15.5 C445.2,12.8 465.1,18.5 482.5,25.2 C500.1,32.1 515.2,45.5 530.5,55.1 C545.8,64.8 565.1,72.5 580.2,80.5 C605.5,93.8 628.1,105.2 650.5,120.5 C675.2,137.5 700.1,155.2 725.5,175.2 C745.2,190.5 765.1,208.2 780.5,230.5 C790.2,245.1 795.5,260.5 790.2,280.5 C785.1,300.2 770.5,315.5 755.2,325.5 C730.1,342.1 705.5,355.2 680.2,365.5 C655.1,375.8 630.5,385.2 605.2,395.5 C590.1,401.8 575.5,410.2 560.2,420.5 C545.1,430.8 535.5,450.2 525.2,470.5 C515.1,490.8 505.5,515.2 490.2,530.5 C475.1,545.8 455.5,555.2 430.2,560.5 C405.1,565.8 380.5,568.2 355.2,565.5 C330.1,562.8 305.5,555.2 280.2,545.5 C265.1,539.8 250.5,530.2 235.2,520.5 C220.1,510.8 205.5,500.2 190.2,490.5 C175.1,480.8 160.5,470.2 145.2,460.5 C130.1,450.8 115.5,440.2 100.2,430.5 C85.1,420.8 70.5,410.2 60.2,395.5 C50.1,380.8 45.5,360.2 50.2,340.5 C55.1,320.8 65.5,305.2 80.2,290.5 C95.1,275.8 115.5,265.2 130.2,250.5 C145.1,235.8 155.5,215.2 165.2,195.5 C175.1,175.8 185.5,155.2 200.2,140.5 C215.1,125.8 235.5,115.2 250.2,100.5 C260.1,90.8 270.5,70.2 280.5,45.2 Z";

export const regionsData: RegionData[] = [
  {
    id: 'harrar',
    name: 'Harrar',
    description: 'Ancient, wild, and intense. The birthplace of the natural process.',
    image: 'https://images.unsplash.com/photo-1611854779393-1b2ae5460963?q=80&w=2070&auto=format&fit=crop',
    path: 'M460.5,260.2 C480.2,255.5 500.5,250.2 520.2,248.5 C550.5,245.2 580.2,250.5 605.5,260.2 C630.2,270.5 650.5,285.2 660.2,300.5 C665.5,310.2 655.2,315.5 640.5,320.2 C620.2,325.5 600.5,330.2 580.2,325.5 C560.5,320.2 545.2,310.5 525.5,300.2 C505.2,290.5 485.5,285.2 465.2,280.5 C455.2,278.2 450.5,265.5 460.5,260.2 Z',
    cx: '560',
    cy: '285',
    color: '#3d2b1f',
    labelOffset: { x: 0, y: -20 }
  },
  {
    id: 'kaffa',
    name: 'Kaffa',
    description: 'The historic birthplace of Arabica coffee. Ancient highland forest coffee.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1961&auto=format&fit=crop',
    path: 'M450.2,310.5 C470.5,305.2 490.2,300.5 510.5,305.2 C530.2,310.5 545.5,325.2 555.2,345.5 C565.5,365.2 550.2,385.5 530.5,395.2 C510.2,405.5 490.5,400.2 475.2,385.5 C460.5,370.2 445.2,355.5 440.5,335.2 C438.2,325.5 442.5,312.5 450.2,310.5 Z',
    cx: '495',
    cy: '350',
    color: '#1b3d2f'
  },
  {
    id: 'sidama',
    name: 'Sidama',
    description: 'Balanced and diverse. Notes of spice, wine, and chocolate.',
    image: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?q=80&w=1960&auto=format&fit=crop',
    path: 'M365.2,345.5 C380.5,340.2 395.2,345.5 405.5,360.2 C415.2,375.5 410.5,395.2 400.2,410.5 C390.5,425.2 375.2,420.5 365.5,410.2 C355.2,400.5 345.5,385.2 350.2,365.5 C352.5,355.2 358.5,348.5 365.2,345.5 Z',
    cx: '380',
    cy: '380',
    color: '#2a1b15'
  },
  {
    id: 'yirgacheffe',
    name: 'Yirgacheffe',
    description: 'Floral and tea-like. The global standard for washed coffee.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop',
    path: 'M385.5,415.2 C395.2,412.5 402.5,418.2 405.2,425.5 C408.5,435.2 400.5,445.2 390.2,442.5 C380.5,440.2 378.2,430.5 380.5,420.5 C381.5,416.5 383.5,415.5 385.5,415.2 Z',
    cx: '430',
    cy: '425',
    color: '#4e3b2c',
    labelOffset: { x: 40, y: -10 }
  },
  {
    id: 'sheko',
    name: 'Sheko',
    description: 'A unique wild variety from the Sheko forests. Spicy and bold.',
    image: 'https://images.unsplash.com/photo-1559525839-4f3460eb539c?q=80&w=2070&auto=format&fit=crop',
    path: 'M410.5,415.2 C430.2,405.5 450.5,410.2 465.2,425.5 C480.5,440.2 475.2,460.5 460.5,480.5 C445.2,500.2 425.5,490.5 410.2,475.5 C395.5,460.2 390.5,440.2 400.2,425.5 C402.5,420.5 405.5,418.2 410.5,415.2 Z',
    cx: '450',
    cy: '455',
    color: '#2c1e1a',
    labelOffset: { x: 20, y: 10 }
  },
  {
    id: 'limmu',
    name: 'Limmu',
    description: 'Sweet and winey. Forest grown coffee with smooth body.',
    image: 'https://images.unsplash.com/photo-1621914809838-958b7633b4d4?q=80&w=1974&auto=format&fit=crop',
    path: 'M260.5,330.2 C280.5,320.5 300.2,325.5 315.5,340.2 C330.2,355.5 325.5,375.2 310.2,390.5 C295.5,405.2 275.2,400.5 260.5,385.5 C245.2,370.2 240.5,350.2 250.2,335.5 C252.5,332.5 255.5,331.2 260.5,330.2 Z',
    cx: '290',
    cy: '360',
    color: '#3a2e24'
  }
];
