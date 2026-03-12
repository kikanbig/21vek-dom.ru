import { useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Star,
  Truck,
  Shield,
  Loader2,
  ZoomIn,
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
  return price.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function ProductPage() {
  const { code } = useParams<{ code: string }>();
  const { product, related, loading } = useCatalogProduct(code);
  const [currentImage, setCurrentImage] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const images = product?.images?.length ? product.images : product?.mainImage ? [product.mainImage] : [];
  const hasDiscount = product && product.oldPrice > 0 && product.oldPrice > product.price;

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
      <div className="min-h-screen flex flex-col bg-background">
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
      <div className="min-h-screen flex flex-col bg-background">
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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6 flex-wrap">
            <Link to="/shop" className="hover:text-foreground transition-colors">Каталог</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to={`/shop/${product.class}`} className="hover:text-foreground transition-colors">
              {getCategoryName(product.class)}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              to={`/shop/${product.class}/${product.subcategory}`}
              className="hover:text-foreground transition-colors"
            >
              {getSubcategoryName(product.subcategory)}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium line-clamp-1">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery */}
            <div className="space-y-4">
              <div
                className="relative aspect-square bg-muted/30 rounded-xl overflow-hidden border border-border/40 cursor-zoom-in group"
                onClick={() => images.length > 0 && setLightbox(true)}
              >
                {images.length > 0 ? (
                  <SmartProductImage
                    originalSrc={images[currentImage]}
                    alt={product.name}
                    size="big"
                    objectFit="contain"
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <span className="text-6xl">📦</span>
                  </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/5">
                  <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" />
                </div>

                {images.length > 1 && (
                  <>
                    <button
                      onClick={e => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={e => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-background transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        idx === currentImage
                          ? 'border-primary'
                          : 'border-border/40 hover:border-border'
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

            {/* Info */}
            <div className="space-y-6">
              {product.producer?.name && (
                <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {product.producer.name}
                </span>
              )}

              <h1 className="text-2xl lg:text-3xl font-heading font-bold text-foreground leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 flex-wrap">
                {product.rating > 0 && (
                  <div className="flex items-center gap-1.5">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map(s => (
                        <Star
                          key={s}
                          className={`h-4 w-4 ${
                            s <= Math.round(product.rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{product.rating.toFixed(1)}</span>
                  </div>
                )}
                <span className="text-xs text-muted-foreground">Арт. {product.code}</span>
                {product.country && (
                  <span className="text-xs text-muted-foreground">{product.country}</span>
                )}
              </div>

              {/* Price */}
              <div className="bg-muted/50 rounded-xl p-5 space-y-3 border border-border/40">
                {product.price > 0 ? (
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-foreground">
                        {formatPrice(product.price)} р.
                      </span>
                      {hasDiscount && (
                        <span className="text-lg text-muted-foreground line-through">
                          {formatPrice(product.oldPrice)} р.
                        </span>
                      )}
                    </div>
                    {hasDiscount && (
                      <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                        Скидка {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-xl text-muted-foreground">Цена по запросу</span>
                )}

                {product.sourceUrl && (
                  <a
                    href={product.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="w-full gap-2 mt-2">
                      <ExternalLink className="h-4 w-4" />
                      Купить на 21vek.by
                    </Button>
                  </a>
                )}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="h-4 w-4" />
                  <span>Доставка по Минску</span>
                </div>
                {product.warranty && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Гарантия {product.warranty}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              {product.description && (
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold">Описание</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Attributes */}
              {product.attributes.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">Характеристики</h2>
                  {product.attributes.map((group, gi) => (
                    <div key={gi} className="space-y-2">
                      {group.group && (
                        <h3 className="text-sm font-medium text-foreground">{group.group}</h3>
                      )}
                      <dl className="grid grid-cols-1 gap-y-1.5">
                        {group.items.map((item, ii) => (
                          <div key={ii} className="flex text-sm gap-2">
                            <dt className="text-muted-foreground flex-shrink-0 w-1/2 border-b border-dotted border-border pb-1">
                              {item.name}
                            </dt>
                            <dd className="font-medium pb-1">{item.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="text-xl font-heading font-bold text-foreground mb-6">
                Похожие товары
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={() => setLightbox(false)}
          >
            <X className="h-6 w-6" />
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-1.5 rounded-full">
              {currentImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
