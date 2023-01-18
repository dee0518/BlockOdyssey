export interface iProductResponse {
  products: iProduct[];
  total: number;
  limit: number;
  skip: number;
  condition: iProductSearch;
}

export interface iProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  [key: string]: string | number | string[];
}

export interface iProductSearch {
  category: string;
  keyword: string;
}

export interface iSelectList {
  id: string;
  title: string;
}
