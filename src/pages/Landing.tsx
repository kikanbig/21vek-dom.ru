import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CategoryBar } from '@/components/landing/CategoryBar';
import { PromoBanner } from '@/components/landing/PromoBanner';
import { BestsellersSection } from '@/components/landing/BestsellersSection';
import { ProductCatalog } from '@/components/catalog/ProductCatalog';
import { PromoGrid } from '@/components/landing/PromoGrid';
import { InspirationSection } from '@/components/landing/InspirationSection';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Категории */}
        <CategoryBar />
        
        {/* Баннерная карусель */}
        <PromoBanner />
        
        {/* Хиты продаж */}
        <BestsellersSection />
        
        {/* Акции */}
        <PromoGrid />
        
        {/* Каталог товаров */}
        <ProductCatalog />
        
        {/* Идеи для интерьера */}
        <InspirationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
