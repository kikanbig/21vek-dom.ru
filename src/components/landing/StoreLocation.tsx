import { MapPin, Clock, Phone, Navigation, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Correct coordinates for Minsk, Mayakovskogo 6
const STORE_LAT = 53.884799;
const STORE_LNG = 27.565861;

const YANDEX_ROUTE_URL = `https://yandex.ru/maps/?rtext=~${STORE_LAT},${STORE_LNG}`;

const contactInfo = [
  {
    icon: MapPin,
    title: 'Адрес',
    value: 'г. Минск, ул. Маяковского, 6',
    subtitle: 'ТРЦ «ЧЕРВЕНСКИЙ»',
  },
  {
    icon: Clock,
    title: 'Время работы',
    value: 'Ежедневно с 10:00 до 22:00',
    subtitle: 'Без выходных',
  },
  {
    icon: Phone,
    title: 'Телефон',
    value: '+375 44 782 93 02',
    href: 'tel:+375447829302',
  },
  {
    icon: Car,
    title: 'Парковка',
    value: 'Бесплатная парковка',
    subtitle: 'Более 500 мест',
  },
];

export const StoreLocation = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Как добраться
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ждём гостей из регионов — удобная парковка и легко найти
          </p>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto">
          {/* Info cards grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl border border-border p-5 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {item.title}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-semibold text-primary hover:underline block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-semibold text-foreground">{item.value}</p>
                )}
                {item.subtitle && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Map and CTA */}
          <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-xl">
            {/* Map */}
            <div className="aspect-[21/9] md:aspect-[3/1] w-full relative">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.5!2d${STORE_LNG}!3d${STORE_LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfd35b1e6a1d%3A0x5cbe8a7e7e6f3b1a!2z0YPQuy4g0JzQsNGP0LrQvtCy0YHQutC-0LPQviwgNiwg0JzQuNC90YHQuiwg0JHQtdC70LDRgNGD0YHRjA!5e0!3m2!1sru!2sby!4v1`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта магазина"
                className="absolute inset-0"
              />
            </div>

            {/* CTA Bar */}
            <div className="p-6 md:p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="font-heading font-bold text-xl md:text-2xl text-foreground">
                  Приезжайте к нам!
                </p>
                <p className="text-muted-foreground">
                  2700 м² мебели ждут вас каждый день
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-lg gap-3 bg-primary hover:bg-primary/90 shrink-0"
              >
                <a href={YANDEX_ROUTE_URL} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-5 h-5" />
                  Построить маршрут
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
