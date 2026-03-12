import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useCatalog, CATEGORY_ORDER, SUBCATEGORY_ORDER } from '@/hooks/useCatalog';
import { CatalogProductCard } from './CatalogProductCard';
import { SUBCATEGORY_IMAGES, CATEGORY_IMAGES } from '@/lib/categoryImages';

export function LandingCatalog() {
  const { data, loading } = useCatalog();

  if (loading) {
    return (
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (!data) return null;

  const categories = Object.values(data.categories)
    .sort((a, b) => {
      const ia = CATEGORY_ORDER.indexOf(a.slug);
      const ib = CATEGORY_ORDER.indexOf(b.slug);
      return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
    })
    .map(cat => {
      const order = SUBCATEGORY_ORDER[cat.slug];
      if (order) {
        cat.subcategories.sort((a, b) => {
          const ia = order.indexOf(a.slug);
          const ib = order.indexOf(b.slug);
          return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
        });
      }
      return cat;
    });
  const popular = data.products
    .filter(p => p.mainImage && p.price > 0)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 8);

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-heading font-bold text-foreground">
            Каталог товаров
          </h2>
          <Link to="/shop" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
            Весь каталог <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Main categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {categories.map(cat => (
            <Link
              key={cat.slug}
              to={`/shop/${cat.slug}`}
              className="group relative overflow-hidden rounded-2xl h-48 md:h-56"
            >
              <img
                src={CATEGORY_IMAGES[cat.slug]}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-heading font-bold text-white mb-1">
                  {cat.name}
                </h3>
                <p className="text-white/80 text-sm">
                  {cat.subcategories.reduce((sum, s) => sum + s.count, 0)} товаров
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-5 w-5 text-white" />
              </div>
            </Link>
          ))}
        </div>

        {/* Subcategories grid */}
        {categories.map(cat => (
          <div key={cat.slug} className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                {cat.name}
              </h3>
              <Link
                to={`/shop/${cat.slug}`}
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                Все <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
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
                    <span className="text-xs text-white/70 block">{sub.count} шт.</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Popular products */}
        {popular.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                Популярные товары
              </h3>
              <Link
                to="/shop"
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                Смотреть все <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {popular.map(p => (
                <CatalogProductCard key={p.code} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
