import { Button } from '@/components/ui/button';
import heroBanner from '@/assets/hero-banner.jpg';

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero with background image */}
      <div className="relative h-[500px] md:h-[600px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src={heroBanner} 
            alt="Современная мебель для вашего дома" 
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary backdrop-blur-sm rounded-full text-sm font-medium">
              Специальное предложение
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Мебель вашей<br />мечты
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Стильные решения для дома и офиса.<br />
              Доставка по всей Беларуси.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto"
              >
                Смотреть каталог
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8 py-6 h-auto"
              >
                Акции и скидки
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};