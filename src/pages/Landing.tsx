import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PromoBanner } from '@/components/landing/PromoBanner';
import { PromoGrid } from '@/components/landing/PromoGrid';
import { LazySection } from '@/components/LazySection';
import { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';

// Lazy load компоненты ниже fold
const ProductCatalog = lazy(() => import('@/components/catalog/ProductCatalog').then(m => ({ default: m.ProductCatalog })));
const VirtualTour = lazy(() => import('@/components/landing/VirtualTour'));
const StoreLocation = lazy(() => import('@/components/landing/StoreLocation').then(m => ({ default: m.StoreLocation })));
const InspirationSection = lazy(() => import('@/components/landing/InspirationSection').then(m => ({ default: m.InspirationSection })));

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-16">
    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
  </div>
);

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Баннерная карусель - загружается сразу */}
        <PromoBanner />
        
        {/* Акции - загружается сразу (выше fold) */}
        <PromoGrid />
        
        {/* Каталог товаров - lazy */}
        <LazySection minHeight="600px">
          <Suspense fallback={<LoadingFallback />}>
            <ProductCatalog />
          </Suspense>
        </LazySection>
        
        {/* Виртуальный тур - lazy */}
        <LazySection minHeight="400px">
          <Suspense fallback={<LoadingFallback />}>
            <VirtualTour />
          </Suspense>
        </LazySection>
        
        {/* Как добраться - lazy */}
        <LazySection minHeight="500px">
          <Suspense fallback={<LoadingFallback />}>
            <StoreLocation />
          </Suspense>
        </LazySection>
        
        {/* Идеи для интерьера - lazy */}
        <LazySection minHeight="400px">
          <Suspense fallback={<LoadingFallback />}>
            <InspirationSection />
          </Suspense>
        </LazySection>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
