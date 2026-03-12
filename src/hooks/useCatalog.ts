import { useState, useEffect, useMemo, useCallback } from 'react';
import type { CatalogData, CatalogProduct, CategoryInfo } from '@/types/catalog';

let catalogCache: CatalogData | null = null;
let loadingPromise: Promise<CatalogData> | null = null;

async function loadCatalog(): Promise<CatalogData> {
  if (catalogCache) return catalogCache;
  if (loadingPromise) return loadingPromise;
  loadingPromise = fetch('/catalog.json')
    .then(r => r.json())
    .then((data: CatalogData) => {
      catalogCache = data;
      return data;
    });
  return loadingPromise;
}

export type SortOption = 'name' | 'price-asc' | 'price-desc' | 'rating';

export function useCatalog() {
  const [data, setData] = useState<CatalogData | null>(catalogCache);
  const [loading, setLoading] = useState(!catalogCache);

  useEffect(() => {
    if (catalogCache) {
      setData(catalogCache);
      setLoading(false);
      return;
    }
    loadCatalog().then(d => {
      setData(d);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}

export function useCatalogProducts(opts: {
  categorySlug?: string;
  subcategorySlug?: string;
  search?: string;
  sort?: SortOption;
}) {
  const { data, loading } = useCatalog();
  const { categorySlug, subcategorySlug, search, sort = 'name' } = opts;

  const filtered = useMemo(() => {
    if (!data) return [];
    let items = data.products;

    if (categorySlug) {
      items = items.filter(p => p.class === categorySlug);
    }
    if (subcategorySlug) {
      items = items.filter(p => p.subcategory === subcategorySlug);
    }
    if (search && search.trim().length > 1) {
      const q = search.toLowerCase().trim();
      items = items.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.code.includes(q) ||
        (p.producer?.name || '').toLowerCase().includes(q)
      );
    }

    const sorted = [...items];
    switch (sort) {
      case 'price-asc':
        sorted.sort((a, b) => (a.price || 99999) - (b.price || 99999));
        break;
      case 'price-desc':
        sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'rating':
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        sorted.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    }
    return sorted;
  }, [data, categorySlug, subcategorySlug, search, sort]);

  const categories = useMemo(() => {
    if (!data) return [];
    const cats = Object.values(data.categories);
    cats.sort((a, b) => {
      const ia = CATEGORY_ORDER.indexOf(a.slug);
      const ib = CATEGORY_ORDER.indexOf(b.slug);
      return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
    });
    for (const cat of cats) {
      const order = SUBCATEGORY_ORDER[cat.slug];
      if (order) {
        cat.subcategories.sort((a, b) => {
          const ia = order.indexOf(a.slug);
          const ib = order.indexOf(b.slug);
          return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
        });
      }
    }
    return cats;
  }, [data]);

  return { products: filtered, categories, loading, total: data?.meta.total ?? 0 };
}

export function useCatalogProduct(code: string | undefined) {
  const { data, loading } = useCatalog();

  const product = useMemo(() => {
    if (!data || !code) return null;
    return data.products.find(p => p.code === code) ?? null;
  }, [data, code]);

  const related = useMemo(() => {
    if (!data || !product) return [];
    return data.products
      .filter(p => p.code !== product.code && p.subcategory === product.subcategory && p.mainImage)
      .slice(0, 8);
  }, [data, product]);

  return { product, related, loading };
}

export const CATEGORY_ORDER = ['furniture', 'home'];

export const SUBCATEGORY_ORDER: Record<string, string[]> = {
  furniture: [
    'sofas', 'beds', 'mattresses', 'armchairs', 'wardrobes',
    'tables', 'chairs', 'dressers', 'shelves', 'mirrors', 'poufs',
  ],
  home: [
    'cookware', 'plates', 'glasses', 'mugs', 'cutlery',
    'bedlinen', 'blankets', 'pillows', 'towels', 'decor', 'other',
  ],
};

const CATEGORY_NAMES: Record<string, string> = {
  furniture: 'Мебель',
  home: 'Товары для дома',
};

const SUBCATEGORY_NAMES: Record<string, string> = {
  poufs: 'Банкетки и пуфы', sofas: 'Диваны', mirrors: 'Зеркала',
  armchairs: 'Кресла', beds: 'Кровати', mattresses: 'Матрасы',
  shelves: 'Полки', tables: 'Столы', chairs: 'Стулья',
  dressers: 'Тумбы и комоды', wardrobes: 'Шкафы и стеллажи',
  decor: 'Декор', mugs: 'Кружки и чайники', blankets: 'Пледы и покрывала',
  pillows: 'Подушки и одеяла', towels: 'Полотенца', bedlinen: 'Постельное белье',
  cookware: 'Посуда для готовки', glasses: 'Стаканы и бокалы',
  cutlery: 'Столовые приборы', plates: 'Тарелки и блюда', other: 'Другое',
};

export function getCategoryName(slug: string): string {
  return CATEGORY_NAMES[slug] || slug;
}

export function getSubcategoryName(slug: string): string {
  return SUBCATEGORY_NAMES[slug] || slug;
}
