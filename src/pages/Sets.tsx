import { SetCard } from "@/components/SetCard";
import { sets } from "@/data/sets";
import cardLP from "@/assets/card-lp.png";
import logo from "@/assets/logo.png";
import { useState, useEffect } from "react";
import TopHeader from "@/components/TopHeader";
import BannerCarousel from "@/components/BannerCarousel";
const Index = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;
      
      if (!isMobile) {
        setIsHeaderVisible(true);
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Header - 21vek style */}
      <TopHeader />
      
      {/* Main Header */}
      <header className={`border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/80 transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <img 
                src={cardLP} 
                alt="Карта Любимый покупатель" 
                className="h-32 md:h-40 w-auto object-contain shadow-lg"
              />
              <img 
                src={logo} 
                alt="21vek.by" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Для держателей карт «Любимый покупатель»
              </h1>
              <p className="text-muted-foreground mb-4">
                Выгодные наборы товаров со скидками до 20%
              </p>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary text-xl">{sets.length}</span> уникальных набора
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Banner Carousel */}
      <section className="container mx-auto px-4 py-6">
        <BannerCarousel />
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sets.map((set) => (
            <SetCard key={set.id} {...set} />
          ))}
        </div>
      </main>

    </div>
  );
};

export default Index;

