import { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, ChevronDown, Loader2, PackageX, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCatalogProducts, getCategoryName, getSubcategoryName } from '@/hooks/useCatalog';
import type { SortOption } from '@/hooks/useCatalog';
import { CatalogProductCard } from './CatalogProductCard';
import { CategoryNav, Breadcrumbs } from './CategoryNav';
import { cn } from '@/lib/utils';
import { SUBCATEGORY_IMAGES } from '@/lib/categoryImages';

const SORT_LABELS: Record<SortOption, string> = {
  name: 'По названию',
  'price-asc': 'Сначала дешевле',
  'price-desc': 'Сначала дороже',
  rating: 'По рейтингу',
};

const PAGE_SIZE = 24;

export function CatalogGrid() {
  const { category, subcategory } = useParams<{ category?: string; subcategory?: string }>();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortOption>('name');
  const [page, setPage] = useState(1);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  useEffect(() => {
    setPage(1);
    setSearch('');
  }, [category, subcategory]);

  const { products, categories, loading } = useCatalogProducts({
    categorySlug: category,
    subcategorySlug: subcategory,
    search,
    sort,
  });

  const pageProducts = useMemo(
    () => products.slice(0, page * PAGE_SIZE),
    [products, page]
  );

  const hasMore = pageProducts.length < products.length;

  const currentCategory = useMemo(
    () => category ? categories.find(c => c.slug === category) : null,
    [category, categories]
  );

  const showSubcategoryCards = category && !subcategory && currentCategory && !search;

  const title = subcategory
    ? getSubcategoryName(subcategory)
    : category
      ? getCategoryName(category)
      : 'Каталог товаров';

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumbs />

      <div className="flex gap-8 mt-4">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-[120px]">
            <CategoryNav categories={categories} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-heading font-bold text-foreground">{title}</h1>
              <p className="text-sm text-muted-foreground mt-1">
                {products.length} {pluralize(products.length, 'товар', 'товара', 'товаров')}
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск по названию или артикулу..."
                  value={search}
                  onChange={e => { setSearch(e.target.value); setPage(1); }}
                  className="pl-9"
                />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-1.5 whitespace-nowrap">
                    <SlidersHorizontal className="h-4 w-4" />
                    <span className="hidden sm:inline">{SORT_LABELS[sort]}</span>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {(Object.keys(SORT_LABELS) as SortOption[]).map(key => (
                    <DropdownMenuItem
                      key={key}
                      onClick={() => { setSort(key); setPage(1); }}
                      className={cn(sort === key && 'font-semibold text-primary')}
                    >
                      {SORT_LABELS[key]}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                onClick={() => setShowMobileSidebar(!showMobileSidebar)}
              >
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Category Nav */}
          {showMobileSidebar && (
            <div className="lg:hidden mb-6 p-4 bg-muted/50 rounded-lg border border-border">
              <CategoryNav categories={categories} />
            </div>
          )}

          {/* Subcategory Cards (when in category without subcategory) */}
          {showSubcategoryCards && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
              {currentCategory.subcategories.map(sub => (
                <Link
                  key={sub.slug}
                  to={`/shop/${category}/${sub.slug}`}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3]"
                >
                  <img
                    src={SUBCATEGORY_IMAGES[sub.slug]}
                    alt={sub.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="text-sm font-medium text-white leading-tight line-clamp-2">
                      {sub.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* All categories preview on main /shop page */}
          {!category && !search && (
            <div className="space-y-8 mb-10">
              {categories.map(cat => (
                <div key={cat.slug}>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-heading font-bold text-foreground">{cat.name}</h2>
                    <Link
                      to={`/shop/${cat.slug}`}
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      Все товары <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {cat.subcategories.map(sub => (
                      <Link
                        key={sub.slug}
                        to={`/shop/${cat.slug}/${sub.slug}`}
                        className="group relative overflow-hidden rounded-xl aspect-[4/3]"
                      >
                        <img
                          src={SUBCATEGORY_IMAGES[sub.slug]}
                          alt={sub.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <span className="text-sm font-medium text-white leading-tight line-clamp-2">
                            {sub.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Product Grid */}
          {(category || search) && (
            <>
              {pageProducts.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                    {pageProducts.map(product => (
                      <CatalogProductCard key={product.code} product={product} />
                    ))}
                  </div>

                  {hasMore && (
                    <div className="flex justify-center mt-10">
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => setPage(p => p + 1)}
                        className="gap-2"
                      >
                        Показать ещё
                        <span className="text-muted-foreground text-sm">
                          ({products.length - pageProducts.length})
                        </span>
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <PackageX className="h-16 w-16 text-muted-foreground/40 mb-4" />
                  <h2 className="text-xl font-medium text-foreground mb-2">Ничего не найдено</h2>
                  <p className="text-muted-foreground max-w-md">
                    {search
                      ? `По запросу «${search}» товаров не найдено. Попробуйте изменить запрос.`
                      : 'В этой категории пока нет товаров.'}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function pluralize(n: number, one: string, few: string, many: string): string {
  const abs = Math.abs(n) % 100;
  const lastDigit = abs % 10;
  if (abs > 10 && abs < 20) return many;
  if (lastDigit > 1 && lastDigit < 5) return few;
  if (lastDigit === 1) return one;
  return many;
}
