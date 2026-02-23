import { useState, useEffect, useRef } from "react";
import { fetchProducts, type Product } from "@/lib/api";
import { getProxiedImageUrl } from "@/lib/imageProxy";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

// Fisher-Yates shuffle
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const DESKTOP_BATCH = 24;
const MOBILE_BATCH = 12;

export const ProductCatalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const isMobile = useIsMobile();
  const batchSize = isMobile ? MOBILE_BATCH : DESKTOP_BATCH;
  const [visibleCount, setVisibleCount] = useState(batchSize);
  const { toast } = useToast();

  const prefetchedUrlsRef = useRef<Set<string>>(new Set());

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await fetchProducts();
      setProducts(shuffleArray(data || []));
      setVisibleCount(batchSize);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить товары",
        variant: "destructive",
      });
      setProducts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // Reset visible count when switching mobile/desktop
  useEffect(() => {
    setVisibleCount((c) => Math.min(c, batchSize));
  }, [batchSize]);

  // Prefetch next batch of images when products change or visibleCount changes
  useEffect(() => {
    if (products.length === 0) return;
    
    const prefetchSize = 'small';
    const nextBatchStart = visibleCount;
    const nextBatchEnd = Math.min(visibleCount + batchSize, products.length);
    const nextBatch = products.slice(nextBatchStart, nextBatchEnd);
    
    nextBatch.forEach((product) => {
      if (product.main_image && !prefetchedUrlsRef.current.has(product.main_image)) {
        prefetchedUrlsRef.current.add(product.main_image);
        const img = new Image();
        img.src = getProxiedImageUrl(product.main_image, prefetchSize);
      }
    });
  }, [products, visibleCount, batchSize]);

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">Каталог товаров</h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 bg-muted/50 rounded-lg">
            <p className="text-6xl mb-4">📦</p>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Каталог пуст
            </h3>
            <p className="text-muted-foreground mb-6">
              Нажмите "Загрузить товары", чтобы спарсить каталог с 21vek.by
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.slice(0, visibleCount).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>

            {visibleCount < products.length && (
              <div className="flex justify-center mt-8">
                <Button
                  variant="outline"
                  onClick={() => setVisibleCount((c) => Math.min(c + batchSize, products.length))}
                >
                  Показать ещё
                </Button>
              </div>
            )}
          </>
        )}

        <ProductModal
          product={selectedProduct}
          open={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </section>
  );
};
