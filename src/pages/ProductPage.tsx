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
  const intPart = Math.floor(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return intPart;
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
          <Loader2 className="h-6 w-6 animate-spin text-foreground/30" />
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
            <nav className="flex items-center gap-1.5 py-3 text-[13px] text-foreground/40 flex-wrap">
              <Link to="/shop" className="hover:text-foreground transition-colors">Каталог</Link>
              <ChevronRight className="h-3 w-3" />
              <Link to={`/shop/${product.class}`} className="hover:text-foreground transition-colors">
                {getCategoryName(product.class)}
              </Link>
              <ChevronRight className="h-3 w-3" />
              <Link
                to={`/shop/${product.class}/${product.subcategory}`}
                className="hover:text-foreground transition-colors"
              >
                {getSubcategoryName(product.subcategory)}
              </Link>
            </nav>
          </div>
        </div>

        {/* Product section */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Gallery */}
            <div>
              <div
                className="relative bg-[#f7f7f7] rounded-2xl overflow-hidden cursor-zoom-in"
                onClick={() => images.length > 0 && setLightbox(true)}
              >
                <div className="aspect-[4/3]">
                  {images.length > 0 ? (
                    <SmartProductImage
                      originalSrc={images[currentImage]}
                      alt={product.name}
                      size="big"
                      objectFit="contain"
                      className="w-full h-full p-6"
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
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow transition-shadow"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={e => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center hover:shadow transition-shadow"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </>
                )}

                {hasDiscount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-[11px] font-semibold px-2 py-1 rounded-lg">
                    -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </div>
                )}

                {images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/40 text-white text-[11px] px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {currentImage + 1} / {images.length}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden transition-all ${
                        idx === currentImage
                          ? 'ring-2 ring-foreground ring-offset-2'
                          : 'opacity-50 hover:opacity-80'
                      }`}
                    >
                      <SmartProductImage
                        originalSrc={img}
                        alt={`${product.name} ${idx + 1}`}
                        size="small"
                        objectFit="contain"
                        className="w-full h-full bg-[#f7f7f7]"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Info */}
            <div className="lg:sticky lg:top-20">
              {/* Brand tag */}
              {product.producer?.name && (
                <div className="text-[12px] font-medium text-foreground/40 uppercase tracking-wider mb-2">
                  {product.producer.name}
                </div>
              )}

              <h1 className="text-2xl font-semibold text-foreground leading-tight tracking-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mt-2 text-[12px] text-foreground/35">
                <span>Арт. {product.code}</span>
                {product.rating > 0 && (
                  <>
                    <span>·</span>
                    <span className="text-amber-500">★ {product.rating.toFixed(1)}</span>
                  </>
                )}
              </div>

              {/* Price */}
              <div className="mt-6">
                {product.price > 0 ? (
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-[32px] font-bold text-foreground tracking-tight leading-none">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-[20px] font-semibold text-foreground/60">р.</span>
                    </div>
                    {hasDiscount && (
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-[14px] text-foreground/30 line-through">
                          {formatPrice(product.oldPrice)} р.
                        </span>
                        <span className="text-[12px] font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded">
                          -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <span className="text-lg text-foreground/40">Цена по запросу</span>
                )}
              </div>

              {/* CTA */}
              {product.sourceUrl && (
                <a
                  href={product.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-6 w-full py-3.5 rounded-xl bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity"
                >
                  Купить на 21vek.by
                  <ExternalLink className="h-4 w-4 opacity-40" />
                </a>
              )}

              {/* Info section */}
              <div className="mt-6 pt-6 border-t border-black/[0.06] space-y-4">
                <div className="flex items-start gap-3">
                  <Truck className="h-[18px] w-[18px] text-foreground/30 flex-shrink-0 mt-px" />
                  <div>
                    <div className="text-[13px] font-medium text-foreground">Доставка по Минску</div>
                    <div className="text-[12px] text-foreground/40 mt-0.5">Подробности уточняйте</div>
                  </div>
                </div>
                {product.warranty && (
                  <div className="flex items-start gap-3">
                    <Shield className="h-[18px] w-[18px] text-foreground/30 flex-shrink-0 mt-px" />
                    <div>
                      <div className="text-[13px] font-medium text-foreground">Гарантия {product.warranty}</div>
                    </div>
                  </div>
                )}
                {product.country && (
                  <div className="flex items-start gap-3">
                    <MapPin className="h-[18px] w-[18px] text-foreground/30 flex-shrink-0 mt-px" />
                    <div>
                      <div className="text-[13px] font-medium text-foreground">{product.country}</div>
                    </div>
                  </div>
                )}
              </div>
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
                    className={`px-6 py-4 text-[14px] font-medium transition-colors relative ${
                      activeTab === 'desc'
                        ? 'text-foreground'
                        : 'text-foreground/35 hover:text-foreground/60'
                    }`}
                  >
                    Описание
                    {activeTab === 'desc' && (
                      <span className="absolute bottom-0 left-6 right-6 h-[2px] bg-foreground rounded-full" />
                    )}
                  </button>
                )}
                {hasAttributes && (
                  <button
                    onClick={() => setActiveTab('attrs')}
                    className={`px-6 py-4 text-[14px] font-medium transition-colors relative ${
                      activeTab === 'attrs'
                        ? 'text-foreground'
                        : 'text-foreground/35 hover:text-foreground/60'
                    }`}
                  >
                    Характеристики
                    {activeTab === 'attrs' && (
                      <span className="absolute bottom-0 left-6 right-6 h-[2px] bg-foreground rounded-full" />
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {(hasDescription || hasAttributes) && (
          <div className="bg-[#fafafa]">
            <div className="container mx-auto px-4 py-8 lg:py-10">
              <div className="max-w-3xl">
                {activeTab === 'desc' && hasDescription && (
                  <div
                    className="prose prose-sm max-w-none text-foreground/70 prose-p:leading-relaxed prose-p:mb-3 prose-b:text-foreground prose-strong:text-foreground prose-headings:text-foreground"
                    dangerouslySetInnerHTML={{ __html: cleanDescription }}
                  />
                )}

                {activeTab === 'attrs' && hasAttributes && (
                  <div className="space-y-8">
                    {product.attributes.map((group, gi) => (
                      <div key={gi}>
                        {group.group && (
                          <h3 className="text-[14px] font-semibold text-foreground mb-4">{group.group}</h3>
                        )}
                        <dl className="space-y-0">
                          {group.items.map((item, ii) => (
                            <div
                              key={ii}
                              className="flex text-[13px] py-3 border-b border-black/[0.04] last:border-0"
                            >
                              <dt className="text-foreground/40 w-1/2 flex-shrink-0">
                                {item.name}
                              </dt>
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
            <h2 className="text-xl font-semibold text-foreground mb-6">
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
