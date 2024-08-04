export interface Product {
  id: number;
  name: string;
  listPrice: number;
  spotPrice: number;
  imageUrl: string;
  isFavorited: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Monitor LED 27" Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50',
    listPrice:2899,
    spotPrice:2599,
    imageUrl: '/product.png',
    isFavorited: false
  },
  {
    id: 2,
    name: 'Monitor LED 27" Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50',
    listPrice:2899,
    spotPrice:2599,
    imageUrl: '/product.png',
    isFavorited: false
  }
];
