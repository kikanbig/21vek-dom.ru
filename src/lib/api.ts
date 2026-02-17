// API client for Railway backend
const API_URL = import.meta.env.VITE_API_URL || '';

export interface Product {
  id: string;
  external_id: string | null;
  name: string;
  description: string | null;
  main_image: string | null;
  images: string[] | null;
  source_url: string | null;
  created_at: string;
  updated_at: string;
}

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/api/products`);
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }
  return response.json();
}

export async function fetchProduct(id: string): Promise<Product | null> {
  const response = await fetch(`${API_URL}/api/products/${id}`);
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error(`Failed to fetch product: ${response.status}`);
  }
  return response.json();
}
