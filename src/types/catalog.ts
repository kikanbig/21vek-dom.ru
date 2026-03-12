export interface CatalogProduct {
  code: string;
  name: string;
  class: string;
  subcategory: string;
  description: string;
  price: number;
  oldPrice: number;
  rating: number;
  producer: { id?: string; name?: string };
  country: string;
  images: string[];
  mainImage: string;
  attributes: AttributeGroup[];
  sourceUrl: string;
  status: string;
}

export interface AttributeGroup {
  group: string;
  items: { name: string; value: string }[];
}

export interface SubcategoryInfo {
  slug: string;
  name: string;
  count: number;
}

export interface CategoryInfo {
  name: string;
  slug: string;
  subcategories: SubcategoryInfo[];
}

export interface CatalogMeta {
  generated: string;
  total: number;
  scraped: number;
  missing: number;
}

export interface CatalogData {
  meta: CatalogMeta;
  categories: Record<string, CategoryInfo>;
  products: CatalogProduct[];
}
