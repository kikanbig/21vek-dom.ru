import { RegionsHeader } from '@/components/RegionsHeader';
import { Footer } from '@/components/Footer';
import { HeroCarousel } from '@/components/landing/HeroCarousel';
import { StoreCategories } from '@/components/landing/StoreCategories';
import { StoreTour } from '@/components/landing/StoreTour';
import { StoreGallery } from '@/components/landing/StoreGallery';
import { StoreLocation } from '@/components/landing/StoreLocation';
import { FinalCTA } from '@/components/landing/FinalCTA';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <RegionsHeader />
      <main className="flex-1">
        <HeroCarousel />
        <StoreCategories />
        <StoreTour />
        <StoreGallery />
        <StoreLocation />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
