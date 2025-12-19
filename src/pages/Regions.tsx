import { RegionsHeader } from '@/components/RegionsHeader';
import { Footer } from '@/components/Footer';
import { HeroCarousel } from '@/components/landing/HeroCarousel';
import { WhyVisit } from '@/components/landing/WhyVisit';
import { StoreCategories } from '@/components/landing/StoreCategories';
import { StoreGallery } from '@/components/landing/StoreGallery';
import { StoreLocation } from '@/components/landing/StoreLocation';
import { FinalCTA } from '@/components/landing/FinalCTA';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <RegionsHeader />
      <main className="flex-1">
        <HeroCarousel />
        <WhyVisit />
        <StoreCategories />
        <StoreGallery />
        <StoreLocation />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
