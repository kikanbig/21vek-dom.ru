import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MapPin, Play } from 'lucide-react';
import banner1 from '@/assets/banners/banner-1.jpg';
import banner2a from '@/assets/banners/banner-2a.jpg';
import banner2b from '@/assets/banners/banner-2b.jpg';
import banner3 from '@/assets/banners/banner-3.jpg';

const slides = [
  {
    id: 1,
    title: '2700 м²',
    subtitle: 'всё для дома в одном месте',
    description: 'Супермаркет мебели и товаров для дома в Минске',
    highlight: true,
    image: banner1,
    secondImage: null,
  },
  {
    id: 2,
    title: 'Новый формат',
    subtitle: 'мебель + товары для дома',
    description: 'Готовые решения для каждой комнаты. Всё можно увидеть и сравнить вживую',
    highlight: false,
    image: banner2a,
    secondImage: banner2b,
  },
  {
    id: 3,
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

  const openRoute = () => {
    window.open('https://yandex.ru/maps/?rtext=~53.925,27.587&rtt=auto', '_blank');
  };

  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {currentSlideData.secondImage ? (
          // Split screen for slide with two images
          <div className="w-full h-full flex">
            <div className="w-1/2 h-full relative">
              <img 
                src={currentSlideData.image} 
                alt="Мебельный зал" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="w-1/2 h-full relative">
              <img 
                src={currentSlideData.secondImage} 
                alt="Товары для дома" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        ) : (
          <img 
            src={currentSlideData.image} 
            alt="Супермаркет мебели 2700 м²" 
            className="w-full h-full object-cover transition-opacity duration-700"
            loading="eager"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-3xl text-white">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ${
                index === currentSlide 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4 absolute'
              }`}
            >
              {index === currentSlide && (
                <>
                  <div className="inline-block mb-4 px-4 py-2 bg-primary rounded-full text-sm font-medium">
                    Мы открылись
                  </div>
                  
                  {slide.highlight ? (
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-2 leading-none">
                      {slide.title}
                    </h1>
                  ) : (
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                  )}
                  
                  <p className="text-2xl md:text-4xl font-light mb-4 text-white/90">
                    {slide.subtitle}
                  </p>
                  
                  <p className="text-lg md:text-xl mb-8 text-white/80 max-w-xl">
                    {slide.description}
                  </p>
                </>
              )}
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              size="lg" 
              onClick={openRoute}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto gap-2"
            >
              <MapPin className="w-5 h-5" />
              Построить маршрут
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToGallery}
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8 py-6 h-auto gap-2"
            >
              <Play className="w-5 h-5" />
              Посмотреть залы
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8 py-6 h-auto gap-2"
            >
              Посмотреть мебель
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
        aria-label="Следующий слайд"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-primary w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
