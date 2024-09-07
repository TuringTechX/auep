// types/project.ts
export interface Project {
    id: string;
    name: string;
    description: string;
    goal: number;
    fundedAmount: number;
    imageUrl: string;
  }
  
// src/types/product.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  afriCoinPrice: number;
  imageUrl: string;
  country: string;
  category: string;
}
