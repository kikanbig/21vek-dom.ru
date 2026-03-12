import { useState, useCallback, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Star,
  Truck,
  Shield,
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
  const parts = price.toFixed(2).split('.');
  const intPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return `${intPart},${parts[1]}`;
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
      <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center gap-4 py-20">
          <h1 className="text-2xl font-bold">Товар не найден</h1>
          <Link to="/shop">
            <Button variant="outline">Вернуться в каталог</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1 text-[13px] text-muted-foreground mb-4 flex-wrap">
            <Link to="/shop" className="hover:text-primary transition-colors">Каталог</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={`/shop/${product.class}`} className="hover:text-primary transition-colors">
              {getCategoryName(product.class)}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              to={`/shop/${product.class}/${product.subcategory}`}
              className="hover:text-primary transition-colors"
            >
              {getSubcategoryName(product.subcategory)}
            </Link>
          </nav>

          {/* Main card */}
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="grid lg:grid-cols-[520px,1fr] gap-0">
              {/* Gallery */}
              <div className="p-6">
                <div
                  className="relative aspect-square max-h-[480px] bg-[#fafafa] rounded-lg overflow-hidden cursor-zoom-in group"
                  onClick={() => images.length > 0 && setLightbox(true)}
                >
                  {images.length > 0 ? (
                    <SmartProductImage
                      originalSrc={images[currentImage]}
                      alt={product.name}
                      size="big"
                      objectFit="contain"
                      className="w-full h-full p-4"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-2xl text-muted-foreground/40">?</span>
                      </div>
                    </div>
                  )}

                  {images.length > 1 && (
                    <>
                      <button
                        onClick={e => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <ChevronLeft className="h-4 w-4 text-foreground" />
                      </button>
                      <button
                        onClick={e => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <ChevronRight className="h-4 w-4 text-foreground" />
                      </button>
                    </>
                  )}

                  {hasDiscount && (
                    <div className="absolute top-2.5 left-2.5 bg-red-500 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
                      -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                    </div>
                  )}
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="flex gap-1.5 mt-3 overflow-x-auto scrollbar-hide">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-colors ${
                          idx === currentImage
                            ? 'border-primary'
                            : 'border-transparent hover:border-foreground/20'
                        }`}
                      >
                        <SmartProductImage
                          originalSrc={img}
                          alt={`${product.name} ${idx + 1}`}
                          size="small"
                          objectFit="contain"
                          className="w-full h-full"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Info panel */}
              <div className="border-t lg:border-t-0 lg:border-l border-border/50 p-6 lg:p-8 flex flex-col">
                <h1 className="text-xl font-bold text-foreground leading-snug">
                  {product.name}
                </h1>

                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  {product.rating > 0 && (
                    <div className="flex items-center gap-1">
                      <div className="flex gap-px">
                        {[1, 2, 3, 4, 5].map(s => (
                          <Star
                            key={s}
                            className={`h-3.5 w-3.5 ${
                              s <= Math.round(product.rating)
                                ? 'fill-amber-400 text-amber-400'
                                : 'fill-muted text-muted'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{product.rating.toFixed(1)}</span>
                    </div>
                  )}
                  <span className="text-xs text-muted-foreground">Арт. {product.code}</span>
                </div>

                {product.producer?.name && (
                  <div className="text-[13px] text-muted-foreground mt-2">
                    Бренд: <span className="text-foreground font-medium">{product.producer.name}</span>
                  </div>
                )}

                {/* Price */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  {product.price > 0 ? (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-[28px] font-bold text-foreground leading-none">
                          {formatPrice(product.price)}
                        </span>
                        <span className="text-[28px] font-bold text-foreground leading-none">р.</span>
                      </div>
                      {hasDiscount && (
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(product.oldPrice)} р.
                          </span>
                          <span className="text-xs font-semibold text-[#ff4d00]">
                            Выгода {formatPrice(product.oldPrice - product.price)} р.
                          </span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="text-lg text-muted-foreground">Цена по запросу</span>
                  )}
                </div>

                {/* CTA */}
                {product.sourceUrl && (
                  <a
                    href={product.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-lg bg-foreground text-background text-[13px] font-medium hover:opacity-90 transition-opacity"
                  >
                    Купить на 21vek.by
                    <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                  </a>
                )}

                {/* Info badges */}
                <div className="mt-6 space-y-3 text-[13px] text-muted-foreground">
                  <div className="flex items-center gap-2.5">
                    <Truck className="h-4 w-4 flex-shrink-0" />
                    <span>Доставка по Минску</span>
                  </div>
                  {product.warranty && (
                    <div className="flex items-center gap-2.5">
                      <Shield className="h-4 w-4 flex-shrink-0" />
                      <span>Гарантия {product.warranty}</span>
                    </div>
                  )}
                  {product.country && (
                    <div className="flex items-center gap-2.5">
                      <span className="w-4 text-center flex-shrink-0">🌍</span>
                      <span>{product.country}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs: Description / Attributes */}
          {(hasDescription || hasAttributes) && (
            <div className="bg-white rounded-xl mt-4 overflow-hidden">
              <div className="flex border-b border-border/50">
                {hasDescription && (
                  <button
                    onClick={() => setActiveTab('desc')}
                    className={`px-6 py-3.5 text-sm font-medium transition-colors relative ${
                      activeTab === 'desc'
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Описание
                    {activeTab === 'desc' && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </button>
                )}
                {hasAttributes && (
                  <button
                    onClick={() => setActiveTab('attrs')}
                    className={`px-6 py-3.5 text-sm font-medium transition-colors relative ${
                      activeTab === 'attrs'
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Характеристики
                    {activeTab === 'attrs' && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </button>
                )}
              </div>

              <div className="p-6 lg:p-8">
                {activeTab === 'desc' && hasDescription && (
                  <div
                    className="prose prose-sm max-w-none text-foreground/80 prose-p:leading-relaxed prose-p:mb-3 prose-b:text-foreground prose-strong:text-foreground prose-headings:text-foreground"
                    dangerouslySetInnerHTML={{ __html: cleanDescription }}
                  />
                )}

                {activeTab === 'attrs' && hasAttributes && (
                  <div className="space-y-6">
                    {product.attributes.map((group, gi) => (
                      <div key={gi}>
                        {group.group && (
                          <h3 className="text-sm font-semibold text-foreground mb-3">{group.group}</h3>
                        )}
                        <dl className="grid grid-cols-1 gap-0">
                          {group.items.map((item, ii) => (
                            <div
                              key={ii}
                              className={`flex text-[13px] py-2.5 ${
                                ii % 2 === 0 ? 'bg-[#fafafa]' : 'bg-white'
                              } -mx-3 px-3 rounded`}
                            >
                              <dt className="text-muted-foreground w-1/2 flex-shrink-0">
                                {item.name}
                              </dt>
                              <dd className="text-foreground font-medium">{item.value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Related Products */}
          {related.length > 0 && (
            <section className="mt-8 mb-4">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Похожие товары
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {related.map(p => (
                  <CatalogProductCard key={p.code} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
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
