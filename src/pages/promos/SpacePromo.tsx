import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MapPin, Clock, Phone, ArrowRight, ArrowLeft, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STORE_YANDEX_ROUTE_URL } from '@/constants/storeRoute';
import promoImage from '@/assets/promos/space-promo-banner.png';
import astronautImage from '@/assets/promos/space-promo-astronaut.png';

const SpacePromo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto max-w-6xl px-4 pt-6 md:pt-8">
          <img
            src={promoImage}
            alt="Хьюстон, у нас скидки до 40% на мебель и товары для дома"
            className="block w-full h-auto"
          />
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
          <Link
            to="/promos"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            К акциям
          </Link>

          <div className="mb-10">
            <div className="inline-flex flex-wrap items-center gap-4 bg-primary text-primary-foreground px-6 py-4 rounded-2xl mb-8">
              <span className="text-2xl font-black">до 40%</span>
              <span className="text-2xl font-black opacity-40">·</span>
              <span className="text-2xl font-black">С 8 по 22 апреля</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-black text-foreground mb-6 leading-tight">
              Хьюстон, у нас скидки!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl">
              С 8 по 22 апреля в магазине 21vek.by ДОМ высадились космонавты — и принесли скидки до
              40% на мебель и товары для дома.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 mb-16">
            <div className="rounded-3xl border border-black/[0.06] bg-gradient-to-b from-muted/40 to-background px-6 py-8 md:px-8 md:py-10">
              <div className="space-y-5 text-base md:text-lg text-foreground/80 leading-relaxed">
                <p className="text-xl md:text-2xl font-semibold text-foreground flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-primary" />
                  Хьюстон, у нас скидки!
                </p>
                <p>
                  С 8 по 22 апреля в магазине 21vek.by ДОМ высадились космонавты — и принесли скидки
                  до 40% на мебель и товары для дома!
                </p>
                <p>
                  👨‍🚀 Ищи стикеры-космонавты на ценниках — они укажут процент скидки.
                </p>
                <p>
                  Диваны, кухни, матрасы, декор — невесомые цены по всему магазину.
                </p>
                <p className="font-semibold text-foreground">
                  Приезжай, пока скидки не улетели!
                </p>
                <p className="font-medium text-foreground">
                  📍 Минск, ул. Маяковского, 6, ТРЦ «Червенский»
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden border border-black/[0.06] bg-gradient-to-b from-[#26104f] via-[#4b2294] to-[#c295ff] shadow-sm">
                <img
                  src={astronautImage}
                  alt="Космонавт с шарами 40%"
                  className="block w-full h-auto"
                />
              </div>

              <div className="rounded-3xl border border-black/[0.06] bg-white p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
                  Приходите к нам в магазин
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-foreground mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">21vek.by ДОМ</p>
                      <p className="text-muted-foreground">ТРЦ «Червенский», ул. Маяковского 6</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-foreground mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Режим работы</p>
                      <p className="text-muted-foreground">Ежедневно с 10:00 до 22:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-foreground mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Телефон</p>
                      <a
                        href="tel:+375447829302"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +375 44 782 93 02
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href={STORE_YANDEX_ROUTE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:bg-foreground/90 transition-colors"
                >
                  Построить маршрут
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/60 mb-4">
              Условия акции
            </h3>
            <ul className="space-y-3 text-muted-foreground text-sm max-w-3xl">
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-0.5">—</span>
                <span>Акция действует с 8 по 22 апреля 2026 года</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-0.5">—</span>
                <span>Скидки до 40% действуют на выделенные товары со стикерами-космонавтами</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-0.5">—</span>
                <span>Предложение действует в магазине 21vek.by ДОМ в ТРЦ «Червенский»</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-0.5">—</span>
                <span>Количество акционного товара ограничено</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SpacePromo;
