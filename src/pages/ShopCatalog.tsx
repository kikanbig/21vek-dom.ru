import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CatalogGrid } from '@/components/catalog/CatalogGrid';

export default function ShopCatalog() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <CatalogGrid />
      </main>
      <Footer />
    </div>
  );
}
