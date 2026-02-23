import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import promoSofasBanner from '@/assets/banners/promo-sofas-banner.jpg';
import setComfortable from '@/assets/promos/set-comfortable-opt.jpg';
import setDining1 from '@/assets/promos/set-dining-1-opt.jpg';
import setDining2 from '@/assets/promos/set-dining-2-opt.jpg';

interface Banner {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description?: string;
  badge?: string;
  discount?: string;
  link?: string;
  isSpecialOffer?: boolean;
}

const banners: Banner[] = [
  {
    id: 1,
    image: promoSofasBanner,
    title: '−12% на все диваны',
    subtitle: 'Только до 8 марта',
    description: 'Угловые, прямые, раскладные — выбирайте свой идеальный диван по лучшей цене в 21vek.by ДОМ',
    discount: '-12%',
    link: '/promo14',
  },
  {
    id: 2,
    image: setComfortable,
    title: 'Сет «Комфортный»',
    subtitle: 'Кровать + матрас + подушки',
    description: 'Кровать 160x200, матрас премиум-класса Veluna и 2 ортопедические подушки',
    discount: '-15%',
    link: '/sets/comfortable',
  },
  {
    id: 3,
    image: setDining1,
    title: 'Сет «Обеденный»',
    subtitle: 'Стол + стулья + посуда для сервировки',
    description: 'Стол, 4 стула и набор посуды JEWEL (16 предметов) для праздничных ужинов',
    discount: '-15%',
    link: '/sets/dining-1',
  },
  {
    id: 4,
    image: setDining2,
    title: 'Сет «Обеденный+»',
    subtitle: 'Стол + стулья + посуда для приготовления',
    description: 'Стол, 4 стула и профессиональные кастрюли/сковородки Lara для кулинаров',
    discount: '-15%',
    link: '/sets/dining-2',
  },
];

export const PromoBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);

  return (
    <section className="relative w-full bg-muted">
      <div className="container mx-auto px-4 py-4">
        {/* Адаптивный aspect ratio: выше на мобильных для читаемости */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[2/1] md:aspect-[3/1] lg:aspect-[3.75/1] bg-muted-foreground/10">
          {/* Banners */}
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-all duration-500 ease-out ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center">
                <div className="px-4 sm:px-8 md:px-16 max-w-xl">
                  {/* Discount badge - large */}
                  {banner.discount && (
                    <span className="inline-block px-3 py-1 sm:px-5 sm:py-2 mb-2 sm:mb-3 text-xl sm:text-2xl md:text-4xl font-bold rounded-lg sm:rounded-xl bg-destructive text-destructive-foreground shadow-lg">
                      {banner.discount}
                    </span>
                  )}
                  {/* Special offer badge */}
                  {banner.badge && (
                    <span className={`inline-block px-3 py-1 sm:px-4 sm:py-1.5 mb-2 sm:mb-3 text-xs sm:text-sm md:text-base font-bold rounded-full ${
                      banner.isSpecialOffer 
                        ? 'bg-yellow-500 text-black' 
                        : 'bg-destructive text-destructive-foreground'
                    }`}>
                      {banner.badge}
                    </span>
                  )}
                  <h2 className="text-base sm:text-xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-0.5 sm:mb-1 leading-tight">
                    {banner.title}
                  </h2>
                  <p className="text-sm sm:text-lg md:text-2xl font-semibold text-yellow-400 mb-1 sm:mb-2">
                    {banner.subtitle}
                  </p>
                  {banner.description && (
                    <p className="text-xs sm:text-sm md:text-lg text-white/95 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {banner.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Navigation - hidden on mobile */}
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/90 backdrop-blur-sm shadow-lg hover:bg-background transition-all duration-200 z-10"
            aria-label="Предыдущий баннер"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/90 backdrop-blur-sm shadow-lg hover:bg-background transition-all duration-200 z-10"
            aria-label="Следующий баннер"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-background/60 hover:bg-background/80'
                }`}
                aria-label={`Перейти к баннеру ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
