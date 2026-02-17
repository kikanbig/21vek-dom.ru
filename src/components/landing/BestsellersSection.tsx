import { ArrowRight, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useEffect, useState, useMemo } from 'react';
import { fetchProducts, type Product } from '@/lib/api';
import { getProxiedImageUrl } from '@/lib/imageProxy';

// Fisher-Yates shuffle
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const BestsellersSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      setLoading(false);
    };

    loadProducts();
  }, []);

  // Memoize shuffled products to prevent re-shuffle on every render
  const displayProducts = useMemo(() => {
    return shuffleArray(products).slice(0, 8);
  }, [products]);

  if (loading || displayProducts.length === 0) {
    return null;
  }

  return (
    <section className="bg-background py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            Хиты продаж
          </h2>
          <button className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
            Смотреть все
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayProducts.map((product) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Favorite button */}
              <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors">
                <Heart className="w-4 h-4 text-muted-foreground hover:text-destructive" />
              </button>

              {/* Image */}
              <div className="aspect-square overflow-hidden bg-muted">
                {product.main_image ? (
                  <img
                    src={getProxiedImageUrl(product.main_image, 'small')}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    Нет фото
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
