import { MapPin, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FinalCTA = () => {
  const openRoute = () => {
    window.open('https://yandex.ru/maps/?ll=27.5479,53.8942&z=17&text=Минск, ул. Маяковского, 6&rtext=~53.8942,27.5479', '_blank');
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            25–28 декабря
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Приезжайте на выходных
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-white/80">
            Супермаркет мебели 2700 м² ждёт вас!<br />
            Готовые решения, вдохновение, всё в одном месте.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={openRoute}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 h-auto gap-2 font-semibold"
            >
              <MapPin className="w-5 h-5" />
              Построить маршрут
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="border-white/30 text-white bg-white/10 hover:bg-white/20 text-lg px-10 py-7 h-auto gap-2"
            >
              <a href="tel:+375291234567">
                <Phone className="w-5 h-5" />
                Позвонить
              </a>
            </Button>
          </div>
          
          <p className="mt-8 text-white/60 text-sm">
            г. Минск, ул. Маяковского, 6 • 10:00–22:00
          </p>
        </div>
      </div>
    </section>
  );
};
