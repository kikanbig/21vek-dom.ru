import { MapPin, Clock, Phone, Navigation, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

import locationAddress from '@/assets/location/location-address-opt.jpg';
import locationHours from '@/assets/location/location-hours-opt.jpg';
import locationPhone from '@/assets/location/location-phone-opt.jpg';
import locationParking from '@/assets/location/location-parking-opt.jpg';

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
    image: locationAddress,
  },
  {
    icon: Clock,
    title: 'Время работы',
    value: 'Ежедневно с 10:00 до 22:00',
    subtitle: 'Без выходных',
    image: locationHours,
  },
  {
    icon: Phone,
    title: 'Телефоны',
    value: '+375 44 782 93 02',
    phones: [
      { number: '+375 44 782 93 02', href: 'tel:+375447829302' },
      { number: '+375 44 782 67 15', href: 'tel:+375447826715' },
    ],
    image: locationPhone,
  },
  {
    icon: Car,
    title: 'Парковка',
    value: 'Бесплатная парковка',
    subtitle: 'Более 500 мест',
    image: locationParking,
  },
];

export const StoreLocation = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Как добраться
          </h2>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto">
          {/* Info cards grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                {/* Background image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-5 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-5 h-5 text-white/80" />
                    <p className="text-xs text-white/70 uppercase tracking-wider">
                      {item.title}
                    </p>
                  </div>
                  {'phones' in item && item.phones ? (
                    <div className="flex flex-col gap-1">
                      {item.phones.map((phone: { number: string; href: string }) => (
                        <a
                          key={phone.number}
                          href={phone.href}
                          className="font-semibold text-white hover:text-white/80 block text-sm md:text-base"
                        >
                          {phone.number}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p className="font-semibold text-white text-sm md:text-base leading-tight">{item.value}</p>
                  )}
                  {item.subtitle && (
                    <p className="text-sm text-white/70 mt-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map and CTA */}
          <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-xl">
            {/* Map */}
            <div className="aspect-[21/9] md:aspect-[3/1] w-full relative">
              <iframe
                src={`https://yandex.ru/map-widget/v1/?ll=${STORE_LNG}%2C${STORE_LAT}&z=16&pt=${STORE_LNG}%2C${STORE_LAT}%2Cpm2rdm`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Карта магазина"
                className="absolute inset-0"
              />
            </div>

            {/* CTA Bar */}
            <div className="p-6 md:p-8 bg-muted/50 flex flex-col md:flex-row items-center justify-between gap-4">
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
                className="h-14 px-8 text-lg gap-3 bg-foreground hover:bg-foreground/90 text-background shrink-0"
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