import { Link, useParams } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CategoryInfo } from '@/types/catalog';
import { getCategoryName, getSubcategoryName } from '@/hooks/useCatalog';

interface CategoryNavProps {
  categories: CategoryInfo[];
  className?: string;
}

export function CategoryNav({ categories, className }: CategoryNavProps) {
  const { category, subcategory } = useParams<{ category?: string; subcategory?: string }>();

  return (
    <aside className={cn('', className)}>
      <Link
        to="/shop"
        className={cn(
          'block px-3 py-2 rounded-lg text-[13px] font-semibold uppercase tracking-wide transition-colors',
          !category
            ? 'text-primary'
            : 'text-muted-foreground hover:text-foreground'
        )}
      >
        Все товары
      </Link>

      <div className="mt-2 space-y-0.5">
        {categories.map(cat => {
          const isOpen = category === cat.slug;
          const isActive = isOpen && !subcategory;

          return (
            <div key={cat.slug}>
              <Link
                to={`/shop/${cat.slug}`}
                className={cn(
                  'flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground font-medium'
                    : isOpen
                      ? 'text-foreground font-medium bg-muted/60'
                      : 'text-foreground/80 hover:bg-muted hover:text-foreground'
                )}
              >
                <span>{cat.name}</span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform duration-200',
                    isActive ? 'text-primary-foreground' : 'text-muted-foreground',
                    isOpen && 'rotate-180'
                  )}
                />
              </Link>

              {isOpen && (
                <div className="mt-1 mb-2 ml-2 space-y-px">
                  {cat.subcategories.map(sub => {
                    const isSubActive = subcategory === sub.slug;
                    return (
                      <Link
                        key={sub.slug}
                        to={`/shop/${cat.slug}/${sub.slug}`}
                        className={cn(
                          'flex items-center justify-between px-3 py-2 rounded-md text-sm transition-all',
                          isSubActive
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        )}
                      >
                        <span className="leading-tight">{sub.name}</span>
                        <span className={cn(
                          'text-xs tabular-nums ml-2 flex-shrink-0',
                          isSubActive ? 'text-primary/70' : 'text-muted-foreground/50'
                        )}>
                          {sub.count}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export function Breadcrumbs() {
  const { category, subcategory } = useParams<{ category?: string; subcategory?: string }>();

  return (
    <nav className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
      <Link to="/shop" className="hover:text-foreground transition-colors">
        Каталог
      </Link>
      {category && (
        <>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to={`/shop/${category}`} className={cn(
            'hover:text-foreground transition-colors',
            !subcategory && 'text-foreground font-medium'
          )}>
            {getCategoryName(category)}
          </Link>
        </>
      )}
      {subcategory && (
        <>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-medium">
            {getSubcategoryName(subcategory)}
          </span>
        </>
      )}
    </nav>
  );
}
