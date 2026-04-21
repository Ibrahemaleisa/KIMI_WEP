export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: string;
  collection: string;
  sizes: string[];
  colors?: string[];
  tags: string[];
  inStock: boolean;
  featured: boolean;
  bestseller: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface User {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  isAdmin: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  shippingAddress: Address;
  createdAt: string;
}

export interface Address {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}
