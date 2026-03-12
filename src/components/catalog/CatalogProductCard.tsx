import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { SmartProductImage } from './SmartProductImage';
import type { CatalogProduct } from '@/types/catalog';

function formatPrice(price: number): string {
  if (!price) return '';
  const parts = price.toFixed(2).split('.');
  const intPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${intPart},${parts[1]}`;
}

export function CatalogProductCard({ product }: { product: CatalogProduct }) {
  const hasDiscount = product.oldPrice > 0 && product.oldPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <Link
      to={`/product/${product.code}`}
      className="group flex flex-col bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#f8f8f8]">
        {product.mainImage ? (
          <SmartProductImage
            originalSrc={product.mainImage}
            alt={product.name}
            size="small"
            objectFit="contain"
            className="w-full h-full p-2 group-hover:scale-[1.03] transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <span className="text-2xl text-muted-foreground/50">?</span>
            </div>
          </div>
        )}

        {hasDiscount && (
          <div className="absolute top-2 left-2 bg-[#ff4d00] text-white text-[11px] font-bold px-1.5 py-0.5 rounded">
            -{discountPercent}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-3 pt-3 pb-4 gap-1.5">
        {/* Price block - first, like Hoff */}
        <div className="flex items-baseline gap-2 flex-wrap">
          {product.price > 0 ? (
            <>
              <span className="text-[17px] font-bold text-foreground leading-none">
                {formatPrice(product.price)}&nbsp;р.
              </span>
              {hasDiscount && (
                <span className="text-xs text-muted-foreground/70 line-through">
                  {formatPrice(product.oldPrice)}&nbsp;р.
                </span>
              )}
            </>
          ) : (
            <span className="text-sm text-muted-foreground">Цена по запросу</span>
          )}
        </div>

        {/* Name */}
        <h3 className="text-[13px] leading-[1.35] text-foreground/80 line-clamp-2 min-h-[35px]">
          {product.name}
        </h3>

        {/* Rating */}
        {product.rating > 0 && (
          <div className="flex items-center gap-1 mt-auto">
            <div className="flex gap-px">
              {[1, 2, 3, 4, 5].map(s => (
                <Star
                  key={s}
                  className={`h-3 w-3 ${
                    s <= Math.round(product.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-muted text-muted'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] text-muted-foreground">{product.rating.toFixed(1)}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
