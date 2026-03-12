import { useState, useCallback, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Truck,
  Shield,
  MapPin,
  Loader2,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SmartProductImage } from '@/components/catalog/SmartProductImage';
import { CatalogProductCard } from '@/components/catalog/CatalogProductCard';
import { useCatalogProduct, getCategoryName, getSubcategoryName } from '@/hooks/useCatalog';

function formatPrice(price: number): string {
  if (!price) return '';
  return Math.floor(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function sanitizeHtml(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '')
    .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
}

export default function ProductPage() {
  const { code } = useParams<{ code: string }>();
  const { product, related, loading } = useCatalogProduct(code);
  const [currentImage, setCurrentImage] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [activeTab, setActiveTab] = useState<'desc' | 'attrs'>('desc');

  const images = product?.images?.length ? product.images : product?.mainImage ? [product.mainImage] : [];
  const hasDiscount = product && product.oldPrice > 0 && product.oldPrice > product.price;

  const cleanDescription = useMemo(() => {
    if (!product?.description) return '';
    return sanitizeHtml(product.description);
  }, [product?.description]);

  const hasDescription = cleanDescription.replace(/<[^>]*>/g, '').trim().length > 0;
  const hasAttributes = (product?.attributes?.length ?? 0) > 0;

  const nextImage = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentImage(i => (i + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentImage(i => (i - 1 + images.length) % images.length);
  }, [images.length]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-foreground/20" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center gap-4 py-20">
          <h1 className="text-xl font-semibold">Товар не найден</h1>
          <Link to="/shop">
            <Button variant="outline" size="sm">Вернуться в каталог</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="border-b border-black/[0.05]">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-1.5 py-3 text-[12px] text-foreground/35 flex-wrap">
              <Link to="/shop" className="hover:text-foreground transition-colors">Каталог</Link>
              <span>/</span>
              <Link to={`/shop/${product.class}`} className="hover:text-foreground transition-colors">
                {getCategoryName(product.class)}
              </Link>
              <span>/</span>
              <Link
                to={`/shop/${product.class}/${product.subcategory}`}
                className="hover:text-foreground transition-colors"
              >
                {getSubcategoryName(product.subcategory)}
              </Link>
              <span>/</span>
              <span className="text-foreground/50 truncate max-w-[300px]">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product section — 3-column like divan.ru */}
        <div className="container mx-auto px-4 py-6 lg:py-8">
          <div className="flex gap-6 lg:gap-8 items-start">

            {/* Vertical thumbnails (desktop only) */}
            {images.length > 1 && (
              <div className="hidden lg:flex flex-col gap-2 w-[72px] flex-shrink-0">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-[72px] h-[72px] rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      idx === currentImage
                        ? 'border-foreground'
                        : 'border-transparent opacity-40 hover:opacity-70'
                    }`}
                  >
                    <SmartProductImage
                      originalSrc={img}
                      alt={`${product.name} ${idx + 1}`}
                      size="small"
                      objectFit="contain"
                      className="w-full h-full bg-[#f5f5f5] p-1"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Main image */}
            <div className="flex-1 min-w-0 max-w-[600px]">
              <div
                className="relative bg-[#f5f5f5] rounded-2xl overflow-hidden cursor-zoom-in"
                onClick={() => images.length > 0 && setLightbox(true)}
              >
                <div className="aspect-square">
                  {images.length > 0 ? (
                    <SmartProductImage
                      originalSrc={images[currentImage]}
                      alt={product.name}
                      size="big"
                      objectFit="contain"
                      className="w-full h-full p-8"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-foreground/10 text-6xl font-light">?</span>
                    </div>
                  )}
                </div>

                {images.length > 1 && (
                  <>
                    <button
                      onClick={e => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-white transition-all"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={e => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center hover:bg-white transition-all"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {hasDiscount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                    -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </div>
                )}
              </div>

              {/* Mobile thumbnails */}
              {images.length > 1 && (
                <div className="flex lg:hidden gap-2 mt-3 overflow-x-auto scrollbar-hide">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                        idx === currentImage
                          ? 'border-foreground'
                          : 'border-transparent opacity-40 hover:opacity-70'
                      }`}
                    >
                      <SmartProductImage
                        originalSrc={img}
                        alt={`${product.name} ${idx + 1}`}
                        size="small"
                        objectFit="contain"
                        className="w-full h-full bg-[#f5f5f5]"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info panel */}
            <div className="hidden lg:block w-[340px] flex-shrink-0 sticky top-20">
              <h1 className="text-[22px] font-bold text-foreground leading-snug">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mt-2">
                {product.producer?.name && (
                  <span className="text-[12px] text-foreground/40">
                    {product.producer.name}
                  </span>
                )}
                <span className="text-[12px] text-foreground/25">Арт. {product.code}</span>
                {product.rating > 0 && (
                  <span className="text-[12px] text-amber-500">★ {product.rating.toFixed(1)}</span>
                )}
              </div>

              {/* Price */}
              <div className="mt-5">
                {product.price > 0 ? (
                  <div>
                    <span className="text-[28px] font-bold text-foreground tracking-tight">
                      {formatPrice(product.price)} р.
                    </span>
                    {hasDiscount && (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[13px] text-foreground/25 line-through">
                          {formatPrice(product.oldPrice)} р.
                        </span>
                        <span className="text-[11px] font-semibold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
                          -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <span className="text-foreground/40">Цена по запросу</span>
                )}
              </div>

              {/* CTA */}
              {product.sourceUrl && (
                <a
                  href={product.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-5 w-full py-3.5 rounded-full bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity"
                >
                  Купить на 21vek.by
                  <ExternalLink className="h-3.5 w-3.5 opacity-40" />
                </a>
              )}

              {/* Delivery & info */}
              <div className="mt-6 pt-5 border-t border-black/[0.06] space-y-3.5">
                <div className="flex items-center gap-3">
                  <Truck className="h-4 w-4 text-foreground/25 flex-shrink-0" />
                  <div className="text-[13px]">
                    <span className="text-foreground">Доставка по Минску</span>
                  </div>
                </div>
                {product.warranty && (
                  <div className="flex items-center gap-3">
                    <Shield className="h-4 w-4 text-foreground/25 flex-shrink-0" />
                    <span className="text-[13px] text-foreground">Гарантия {product.warranty}</span>
                  </div>
                )}
                {product.country && (
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-foreground/25 flex-shrink-0" />
                    <span className="text-[13px] text-foreground">{product.country}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile info (below image) */}
          <div className="lg:hidden mt-6">
            <h1 className="text-xl font-bold text-foreground leading-snug">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-1.5 text-[12px] text-foreground/35">
              {product.producer?.name && <span>{product.producer.name}</span>}
              <span>Арт. {product.code}</span>
              {product.rating > 0 && (
                <span className="text-amber-500">★ {product.rating.toFixed(1)}</span>
              )}
            </div>

            <div className="mt-4">
              {product.price > 0 ? (
                <span className="text-[26px] font-bold text-foreground tracking-tight">
                  {formatPrice(product.price)} р.
                </span>
              ) : (
                <span className="text-foreground/40">Цена по запросу</span>
              )}
              {hasDiscount && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[13px] text-foreground/25 line-through">
                    {formatPrice(product.oldPrice)} р.
                  </span>
                </div>
              )}
            </div>

            {product.sourceUrl && (
              <a
                href={product.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-4 w-full py-3 rounded-full bg-foreground text-background text-[14px] font-medium"
              >
                Купить на 21vek.by
                <ExternalLink className="h-3.5 w-3.5 opacity-40" />
              </a>
            )}

            <div className="mt-5 pt-4 border-t border-black/[0.06] flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-foreground/50">
              <div className="flex items-center gap-1.5">
                <Truck className="h-3.5 w-3.5" />
                <span>Доставка по Минску</span>
              </div>
              {product.warranty && (
                <div className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5" />
                  <span>Гарантия {product.warranty}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabs: Description / Attributes */}
        {(hasDescription || hasAttributes) && (
          <div className="border-t border-black/[0.05]">
            <div className="container mx-auto px-4">
              <div className="flex gap-0">
                {hasDescription && (
                  <button
                    onClick={() => setActiveTab('desc')}
                    className={`px-5 py-3.5 text-[13px] font-medium transition-colors relative ${
                      activeTab === 'desc'
                        ? 'text-foreground'
                        : 'text-foreground/30 hover:text-foreground/60'
                    }`}
                  >
                    Описание
                    {activeTab === 'desc' && (
                      <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-foreground rounded-full" />
                    )}
                  </button>
                )}
                {hasAttributes && (
                  <button
                    onClick={() => setActiveTab('attrs')}
                    className={`px-5 py-3.5 text-[13px] font-medium transition-colors relative ${
                      activeTab === 'attrs'
                        ? 'text-foreground'
                        : 'text-foreground/30 hover:text-foreground/60'
                    }`}
                  >
                    Характеристики
                    {activeTab === 'attrs' && (
                      <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-foreground rounded-full" />
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {(hasDescription || hasAttributes) && (
          <div className="bg-[#fafafa]">
            <div className="container mx-auto px-4 py-8">
              <div className="max-w-2xl">
                {activeTab === 'desc' && hasDescription && (
                  <div
                    className="prose prose-sm max-w-none text-foreground/65 prose-p:leading-relaxed prose-p:mb-3 prose-b:text-foreground prose-strong:text-foreground prose-headings:text-foreground"
                    dangerouslySetInnerHTML={{ __html: cleanDescription }}
                  />
                )}

                {activeTab === 'attrs' && hasAttributes && (
                  <div className="space-y-6">
                    {product.attributes.map((group, gi) => (
                      <div key={gi}>
                        {group.group && (
                          <h3 className="text-[13px] font-semibold text-foreground mb-3">{group.group}</h3>
                        )}
                        <dl className="space-y-0">
                          {group.items.map((item, ii) => (
                            <div
                              key={ii}
                              className="flex text-[13px] py-2.5 border-b border-black/[0.04] last:border-0"
                            >
                              <dt className="text-foreground/35 w-1/2 flex-shrink-0">{item.name}</dt>
                              <dd className="text-foreground">{item.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Related Products */}
        {related.length > 0 && (
          <div className="container mx-auto px-4 py-10">
            <h2 className="text-lg font-semibold text-foreground mb-5">
              Похожие товары
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {related.map(p => (
                <CatalogProductCard key={p.code} product={p} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />

      {/* Lightbox */}
      {lightbox && images.length > 0 && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            onClick={() => setLightbox(false)}
          >
            <X className="h-5 w-5" />
          </button>

          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <SmartProductImage
              originalSrc={images[currentImage]}
              alt={product.name}
              size="big"
              objectFit="contain"
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-4 py-1.5 rounded-full">
              {currentImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
