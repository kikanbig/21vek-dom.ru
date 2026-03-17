import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import promoImage from '@/assets/promos/kitchen-promo-banner.png';

const KitchenPromo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full bg-muted">
          <div className="container mx-auto px-4 py-8">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[2/1] md:aspect-[3/1] lg:aspect-[3.75/1]">
              <img
                src={promoImage}
                alt="Скидка 12% на все кухни"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-background py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span>С 18 по 31 марта</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-heading font-black text-foreground mb-6 leading-tight">
              Ваша кухня. Ваши правила.
            </h1>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Кухня — это не просто мебель. Это место, где начинается утро. Где собирается семья. Где происходит жизнь.
              </p>
              
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="text-2xl font-bold text-foreground mb-2">
                  Скидка 12% на все кухни
                </p>
                <p className="text-muted-foreground">
                  С 18 по 31 марта в 21vek.by ДОМ
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Приходите. Откройте каждый ящик. Потрогайте столешницу. Почувствуйте свою кухню до покупки.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-muted rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Приходите к нам в магазин
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">21vek.by ДОМ</p>
                    <p className="text-muted-foreground">ТРЦ «Червенский», ул. Маяковского 6</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Режим работы</p>
                    <p className="text-muted-foreground">Ежедневно с 10:00 до 22:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Телефон</p>
                    <a href="tel:+375291234567" className="text-primary hover:text-primary/80 transition-colors">
                      +375 (29) 123-45-67
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://yandex.by/maps/-/CDdkbPCl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Построить маршрут
                  <ArrowRight className="w-5 h-5" />
                </a>
                
                <Link
                  to="/shop/Мебель/Кухни"
                  className="inline-flex items-center justify-center gap-2 bg-background border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  Смотреть каталог кухонь
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Условия акции
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Акция действует с 18 по 31 марта 2026 года</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Скидка 12% распространяется на все кухни из ассортимента 21vek.by ДОМ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Скидка не суммируется с другими акциями и спецпредложениями</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Количество товара ограничено</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KitchenPromo;
