import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CategoryInfo } from '@/types/catalog';
import { getCategoryName, getSubcategoryName } from '@/hooks/useCatalog';

const CATEGORY_ICONS: Record<string, string> = {
  furniture: '🛋️',
  home: '🏠',
};

interface CategoryNavProps {
  categories: CategoryInfo[];
  className?: string;
}

export function CategoryNav({ categories, className }: CategoryNavProps) {
  const { category, subcategory } = useParams<{ category?: string; subcategory?: string }>();

  return (
    <aside className={cn('space-y-1', className)}>
      <Link
        to="/shop"
        className={cn(
          'flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
          !category
            ? 'bg-primary text-primary-foreground'
            : 'text-foreground hover:bg-muted'
        )}
      >
        Все товары
      </Link>

      {categories.map(cat => (
        <div key={cat.slug}>
          <Link
            to={`/shop/${cat.slug}`}
            className={cn(
              'flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
              category === cat.slug && !subcategory
                ? 'bg-primary text-primary-foreground'
                : 'text-foreground hover:bg-muted'
            )}
          >
            <span>{CATEGORY_ICONS[cat.slug] || '📁'}</span>
            {cat.name}
          </Link>

          {category === cat.slug && (
            <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-border pl-3">
              {cat.subcategories.map(sub => (
                <Link
                  key={sub.slug}
                  to={`/shop/${cat.slug}/${sub.slug}`}
                  className={cn(
                    'flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors',
                    subcategory === sub.slug
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  <span>{sub.name}</span>
                  <span className="text-xs opacity-60">{sub.count}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
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
