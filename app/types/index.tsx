export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  products: CartItem[];
  couponCode?: string | null;
  discount?: number;
}
