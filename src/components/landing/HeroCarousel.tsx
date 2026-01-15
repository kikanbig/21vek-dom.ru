import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import banner1 from '@/assets/banners/banner-1.jpg';
import banner2a from '@/assets/banners/banner-2a.jpg';
import banner2b from '@/assets/banners/banner-2b.jpg';
import banner3 from '@/assets/banners/banner-3.jpg';
import promoBanner from '@/assets/banners/promo-banner-2.png';

interface Slide {
  id: number;
  type: 'default' | 'image';
  title: string;
  subtitle: string;
  description: string;
  highlight?: boolean;
  image: string;
  secondImage?: string | null;
}

const slides: Slide[] = [
  {
    id: 1,
    type: 'default',
    title: '2700 м²',
    subtitle: 'всё для дома в одном месте',
    description: 'Супермаркет мебели и товаров для дома в Минске',
    highlight: true,
    image: banner1,
    secondImage: null,
  },
  {
    id: 2,
    type: 'image',
    title: 'Специальная цена',
    subtitle: '',
    description: '',
    image: promoBanner,
    secondImage: null,
  },
  {
    id: 3,
    type: 'default',
    title: 'Специальное предложение',
    subtitle: 'БЕСПЛАТНАЯ ДОСТАВКА по Беларуси на сумму от 500 рублей',
    description: 'На праздничные выходные 25–28 декабря!',
    highlight: false,
    image: banner2a,
    secondImage: banner2b,
  },
  {
    id: 4,
    type: 'default',
    title: 'Приезжайте',
    subtitle: 'на выходных 25–28 декабря',
    description: 'Удобно планировать поездку на один визит без маршрута по разным салонам',
    highlight: false,
    image: banner3,
    secondImage: null,
  },
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const currentSlideData = slides[currentSlide];

  // Render image-only slide (full banner image)
  const renderImageSlide = (slide: Slide) => (
    <div className="w-full h-full bg-primary relative overflow-hidden flex items-center justify-center p-4">
      <img 
        src={slide.image} 
        alt={slide.title} 
        className="h-full w-auto object-contain"
        loading="eager"
      />
    </div>
  );

  // Render default slide
  const renderDefaultSlide = (slide: Slide) => (
    <>
      {/* Background */}
      <div className="absolute inset-0">
        {slide.secondImage ? (
          <div className="w-full h-full flex">
            <div className="w-1/2 h-full relative overflow-hidden">
              <img 
                src={slide.image} 
                alt="Мебельный зал" 
                className="w-full h-full object-cover scale-105 transition-transform duration-[8000ms] hover:scale-110"
                loading="eager"
              />
            </div>
            <div className="w-1/2 h-full relative overflow-hidden">
              <img 
                src={slide.secondImage} 
                alt="Товары для дома" 
                className="w-full h-full object-cover scale-105 transition-transform duration-[8000ms] hover:scale-110"
                loading="eager"
              />
            </div>
          </div>
        ) : (
          <img 
            src={slide.image} 
            alt="Супермаркет мебели 2700 м²" 
            className="w-full h-full object-cover scale-105 transition-all duration-[8000ms]"
            loading="eager"
          />
        )}
        
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-primary/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-4xl text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-primary/90 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Мы открылись
          </div>
          
          {/* Title */}
          {slide.highlight ? (
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-heading font-black mb-2 leading-[1.1] tracking-tighter pt-2">
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                {slide.title}
              </span>
            </h1>
          ) : (
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 leading-tight tracking-tight">
              {slide.title}
            </h1>
          )}
          
          {/* Subtitle */}
          <p className="text-2xl md:text-4xl lg:text-5xl font-light mb-6 text-white/90 tracking-wide">
            {slide.subtitle}
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            {slide.description}
          </p>
        </div>
      </div>
    </>
  );

  return (
    <section className="relative w-full h-[500px] md:h-[550px] overflow-hidden">
      {/* Slide content */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {slide.type === 'image' ? renderImageSlide(slide) : renderDefaultSlide(slide)}
          </div>
        ))}
      </div>

      {/* Navigation arrows - hidden on mobile */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group"
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft className="w-6 h-6 text-white transition-transform group-hover:-translate-x-0.5" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group"
        aria-label="Следующий слайд"
      >
        <ChevronRight className="w-6 h-6 text-white transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Slide indicators - redesigned */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-1 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'w-12 bg-primary' 
                : 'w-8 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          >
            {index === currentSlide && (
              <span className="absolute inset-0 rounded-full bg-primary animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};
