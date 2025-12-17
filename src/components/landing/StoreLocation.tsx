import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Correct coordinates for Minsk, Mayakovskogo 6
const STORE_LAT = 53.8942;
const STORE_LNG = 27.5479;

const navButtons = [
  {
    name: 'Google Maps',
    url: `https://www.google.com/maps/dir/?api=1&destination=${STORE_LAT},${STORE_LNG}`,
  },
  {
    name: 'Яндекс.Карты',
    url: `https://yandex.ru/maps/?ll=27.5479,53.8942&z=17&text=Минск, ул. Маяковского, 6&rtext=~53.8942,27.5479`,
  },
  {
    name: '2ГИС',
    url: `https://2gis.by/minsk/directions/points/${STORE_LNG},${STORE_LAT}`,
  },
];

export const StoreLocation = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Как добраться
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ждём гостей из регионов — удобная парковка и легко найти
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map - Modern 3D style */}
          <div className="relative group perspective-1000">
            {/* Animated background orbs */}
            <div className="absolute -inset-8 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-[rgb(71,35,99)]/30 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
            
            {/* Grid pattern overlay */}
            <div className="absolute -inset-4 bg-[linear-gradient(rgba(71,35,99,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(71,35,99,0.1)_1px,transparent_1px)] bg-[size:20px_20px] rounded-3xl opacity-50" />
            
            {/* Main map container with 3D effect */}
            <div className="relative aspect-[4/3] transform group-hover:scale-[1.02] transition-all duration-500">
              {/* Shadow layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent rounded-2xl transform translate-y-4 blur-xl" />
              
              {/* Map frame */}
              <div className="relative h-full rounded-2xl overflow-hidden bg-card shadow-2xl">
                {/* Glassmorphism top bar */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-white/90 via-white/80 to-white/90 backdrop-blur-md z-10 flex items-center justify-between px-4 border-b border-border/30">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">21 Век • Маяковского 6</span>
                  <div className="w-16" />
                </div>
                
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.5!2d${STORE_LNG}!3d${STORE_LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6a1d%3A0x5cbe8a7e7e6f3b1a!2z0YPQuy4g0JzQsNGP0LrQvtCy0YHQutC-0LPQviwgNiwg0JzQuNC90YHQuiwg0JHQtdC70LDRgNGD0YHRjA!5e0!3m2!1sru!2sby!4v1`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта магазина"
                  className="absolute inset-0 pt-12"
                />
                
                {/* Floating location card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-border/50 z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(71,35,99)] to-primary flex items-center justify-center shrink-0 shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground truncate">ТЦ «21 век»</p>
                      <p className="text-sm text-muted-foreground truncate">ул. Маяковского, 6</p>
                    </div>
                    <div className="px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      Открыто
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Адрес</p>
                    <p className="text-muted-foreground">г. Минск, ул. Маяковского, 6</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Время работы</p>
                    <p className="text-muted-foreground">Ежедневно с 10:00 до 22:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Телефон</p>
                    <a href="tel:+375291234567" className="text-primary hover:underline">
                      +375 (29) 123-45-67
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons - gray block */}
            <div className="bg-gray-700 rounded-2xl p-6 md:p-8 text-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Navigation className="w-5 h-5" />
                </div>
                <p className="font-semibold text-lg">
                  Построить маршрут в:
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {navButtons.map((btn) => (
                  <Button
                    key={btn.name}
                    asChild
                    className="h-12 bg-white/20 hover:bg-white/30 text-white border-0"
                  >
                    <a href={btn.url} target="_blank" rel="noopener noreferrer">
                      {btn.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
