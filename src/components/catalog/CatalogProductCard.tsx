import { Link } from 'react-router-dom';
import { Star, ExternalLink } from 'lucide-react';
import { SmartProductImage } from './SmartProductImage';
import type { CatalogProduct } from '@/types/catalog';

function formatPrice(price: number): string {
  if (!price) return '';
  return price.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function CatalogProductCard({ product }: { product: CatalogProduct }) {
  const hasDiscount = product.oldPrice > 0 && product.oldPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <Link
      to={`/product/${product.code}`}
      className="group relative flex flex-col bg-card rounded-xl border border-border/40 overflow-hidden hover:shadow-card-hover hover:border-border transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden bg-muted/30 p-3">
        {product.mainImage ? (
          <SmartProductImage
            originalSrc={product.mainImage}
            alt={product.name}
            size="small"
            objectFit="contain"
            className="w-full h-full group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            <span className="text-4xl">📦</span>
          </div>
        )}

        {hasDiscount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            -{discountPercent}%
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4 gap-2">
        {product.producer?.name && (
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
            {product.producer.name}
          </span>
        )}

        <h3 className="font-medium text-sm leading-snug line-clamp-2 text-foreground group-hover:text-primary transition-colors min-h-[2.5rem]">
          {product.name}
        </h3>

        {product.rating > 0 && (
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs text-muted-foreground">{product.rating.toFixed(1)}</span>
          </div>
        )}

        <div className="mt-auto pt-2">
          {product.price > 0 ? (
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-lg font-bold text-foreground">
                {formatPrice(product.price)} р.
              </span>
              {hasDiscount && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.oldPrice)} р.
                </span>
              )}
            </div>
          ) : (
            <span className="text-sm text-muted-foreground">Цена по запросу</span>
          )}
        </div>
      </div>
    </Link>
  );
}
