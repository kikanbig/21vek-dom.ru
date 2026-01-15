import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import promoBed from '@/assets/banners/promo-bed.png';
import promoSale from '@/assets/banners/promo-sale.jpg';
import promoBedroom from '@/assets/banners/promo-bedroom.jpg';
import promoKitchen from '@/assets/banners/promo-kitchen.jpg';
import promoOffice from '@/assets/banners/promo-office.jpg';

interface Banner {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description?: string;
  badge?: string;
  link?: string;
  isSpecialOffer?: boolean;
}

const banners: Banner[] = [
  {
    id: 1,
    image: promoBed,
    title: 'Специальное предложение только до 31 января',
    subtitle: '21vek.by ДОМ!',
    description: 'Преобразите свою спальню выгодно: тахта Involux Sale 90x200 + матрас LAGOMA Ilta 90x200x18 — всего за 670 рублей!',
    badge: '670 руб.',
    link: '/catalog',
    isSpecialOffer: true,
  },
  {
    id: 2,
    image: promoSale,
    title: 'Зимняя распродажа',
    subtitle: 'Скидки до 50% на диваны и кресла',
    badge: 'до -50%',
    link: '/catalog',
  },
  {
    id: 3,
    image: promoBedroom,
    title: 'Комфорт для спальни',
    subtitle: 'Кровати, матрасы и текстиль',
    badge: 'Новинки',
    link: '/catalog',
  },
  {
    id: 4,
    image: promoKitchen,
    title: 'Кухни мечты',
    subtitle: 'Современный дизайн по доступным ценам',
    badge: 'от 15 000 ₽',
    link: '/catalog',
  },
  {
    id: 5,
    image: promoOffice,
    title: 'Домашний офис',
    subtitle: 'Эргономичная мебель для продуктивной работы',
    badge: '-30%',
    link: '/catalog',
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
        <div className="relative rounded-2xl overflow-hidden aspect-[3.75/1] bg-muted-foreground/10">
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
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
                <div className="px-8 md:px-16 max-w-xl">
                  {banner.badge && (
                    <span className={`inline-block px-4 py-1.5 mb-3 text-sm md:text-base font-bold rounded-full ${
                      banner.isSpecialOffer 
                        ? 'bg-yellow-500 text-black' 
                        : 'bg-destructive text-destructive-foreground'
                    }`}>
                      {banner.badge}
                    </span>
                  )}
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-1">
                    {banner.title}
                  </h2>
                  <p className="text-lg md:text-2xl font-semibold text-yellow-400 mb-2">
                    {banner.subtitle}
                  </p>
                  {banner.description && (
                    <p className="text-sm md:text-lg text-white/95 leading-relaxed">
                      {banner.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/90 backdrop-blur-sm shadow-lg hover:bg-background transition-all duration-200 z-10"
            aria-label="Предыдущий баннер"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/90 backdrop-blur-sm shadow-lg hover:bg-background transition-all duration-200 z-10"
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
