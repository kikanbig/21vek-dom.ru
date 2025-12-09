import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useEffect, useCallback } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

import banner1 from "@/assets/banner-1.jpg";
import banner2 from "@/assets/banner-2.jpg";
import banner3 from "@/assets/banner-3.jpg";

const banners = [
  {
    id: 1,
    image: banner1,
    title: "Скидки до 50%",
    subtitle: "На популярные сеты для дома",
  },
  {
    id: 2,
    image: banner2,
    title: "Бесплатная доставка",
    subtitle: "При заказе от 100 рублей",
  },
  {
    id: 3,
    image: banner3,
    title: "Новые лоты",
    subtitle: "Выгодные предложения каждый день",
  },
];

const BannerCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const scrollTo = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <div className="w-full relative">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className="relative h-48 md:h-64 lg:h-80 rounded-xl overflow-hidden mx-1">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center">
                  <div className="text-white px-6 md:px-10 max-w-lg">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg">
                      {banner.title}
                    </h2>
                    <p className="text-sm md:text-lg lg:text-xl opacity-90 drop-shadow-md">
                      {banner.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation arrows like 21vek */}
        <CarouselPrevious className="left-2 md:left-4 h-10 w-10 md:h-12 md:w-12 bg-white/90 border-none text-[rgb(127,0,88)] hover:bg-white shadow-lg" />
        <CarouselNext className="right-2 md:right-4 h-10 w-10 md:h-12 md:w-12 bg-white/90 border-none text-[rgb(127,0,88)] hover:bg-white shadow-lg" />
      </Carousel>

      {/* Dot indicators like 21vek */}
      <div className="flex justify-center gap-2 mt-4">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              current === index 
                ? "bg-[rgb(127,0,88)] w-6" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
