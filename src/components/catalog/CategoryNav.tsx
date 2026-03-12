import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
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
          'block px-3 py-2 text-[13px] font-medium tracking-wide transition-colors rounded-lg',
          !category
            ? 'text-foreground'
            : 'text-foreground/50 hover:text-foreground'
        )}
      >
        Все товары
      </Link>

      <div className="mt-1 space-y-px">
        {categories.map(cat => {
          const isOpen = category === cat.slug;
          const isActive = isOpen && !subcategory;

          return (
            <div key={cat.slug}>
              <Link
                to={`/shop/${cat.slug}`}
                className={cn(
                  'flex items-center justify-between px-3 py-2 rounded-lg text-[13px] transition-colors',
                  isActive
                    ? 'bg-foreground text-background font-medium'
                    : isOpen
                      ? 'text-foreground font-medium'
                      : 'text-foreground/65 hover:text-foreground hover:bg-black/[0.03]'
                )}
              >
                <span>{cat.name}</span>
                <ChevronRight
                  className={cn(
                    'h-3.5 w-3.5 transition-transform duration-200',
                    isActive ? 'text-background/50' : 'text-foreground/25',
                    isOpen && 'rotate-90'
                  )}
                />
              </Link>

              {isOpen && (
                <div className="mt-0.5 mb-1.5 ml-3 border-l border-black/[0.06] pl-2.5 space-y-px">
                  {cat.subcategories.map(sub => {
                    const isSubActive = subcategory === sub.slug;
                    return (
                      <Link
                        key={sub.slug}
                        to={`/shop/${cat.slug}/${sub.slug}`}
                        className={cn(
                          'flex items-center justify-between px-2.5 py-1.5 rounded-md text-[12px] transition-all',
                          isSubActive
                            ? 'text-foreground font-medium bg-black/[0.04]'
                            : 'text-foreground/50 hover:text-foreground/80 hover:bg-black/[0.02]'
                        )}
                      >
                        <span className="leading-tight">{sub.name}</span>
                        <span className={cn(
                          'text-[10px] tabular-nums ml-2 flex-shrink-0',
                          isSubActive ? 'text-foreground/40' : 'text-foreground/25'
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
    <nav className="flex items-center gap-1.5 text-[13px] text-foreground/40 flex-wrap">
      <Link to="/shop" className="hover:text-foreground transition-colors">
        Каталог
      </Link>
      {category && (
        <>
          <ChevronRight className="h-3 w-3" />
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
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground font-medium">
            {getSubcategoryName(subcategory)}
          </span>
        </>
      )}
    </nav>
  );
}
