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
      className="group flex flex-col bg-white rounded-xl border border-black/[0.06] overflow-hidden hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-200"
    >
      {/* Image — small fixed height */}
      <div className="relative h-[130px] overflow-hidden bg-[#fafafa]">
        {product.mainImage ? (
          <SmartProductImage
            originalSrc={product.mainImage}
            alt={product.name}
            size="small"
            objectFit="contain"
            className="w-full h-full p-5 group-hover:scale-[1.03] transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-black/[0.04] flex items-center justify-center">
              <span className="text-base text-foreground/20">?</span>
            </div>
          </div>
        )}

        {hasDiscount && (
          <div className="absolute top-2.5 left-2.5 bg-red-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-md">
            -{discountPercent}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-3 pt-2.5 pb-3 gap-1">
        {/* Name first — subtle */}
        <h3 className="text-[13px] leading-[1.4] text-foreground/70 line-clamp-2 min-h-[37px]">
          {product.name}
        </h3>

        {/* Price block */}
        <div className="flex items-baseline gap-2 flex-wrap mt-auto">
          {product.price > 0 ? (
            <>
              <span className="text-[16px] font-semibold text-foreground tracking-tight">
                {formatPrice(product.price)}&nbsp;р.
              </span>
              {hasDiscount && (
                <span className="text-[11px] text-foreground/35 line-through">
                  {formatPrice(product.oldPrice)}&nbsp;р.
                </span>
              )}
            </>
          ) : (
            <span className="text-[13px] text-foreground/40">Цена по запросу</span>
          )}
        </div>

        {/* Rating */}
        {product.rating > 0 && (
          <div className="flex items-center gap-1 mt-1">
            <div className="flex gap-px">
              {[1, 2, 3, 4, 5].map(s => (
                <Star
                  key={s}
                  className={`h-2.5 w-2.5 ${
                    s <= Math.round(product.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-black/[0.06] text-black/[0.06]'
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] text-foreground/35">{product.rating.toFixed(1)}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
