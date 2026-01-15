import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { CategoryGrid } from '@/components/CategoryGrid';
import { ProductsSection } from '@/components/ProductsSection';
import { Footer } from '@/components/Footer';

const Shop = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
