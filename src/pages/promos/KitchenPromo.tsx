import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MapPin, Clock, Phone, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import promoImage from '@/assets/promos/kitchen-promo-banner.png';

const KitchenPromo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>

          {/* Header */}
          <div className="mb-10">
            {/* Promo Badge */}
            <div className="inline-flex items-center gap-4 bg-destructive text-destructive-foreground px-6 py-4 rounded-2xl mb-8">
              <span className="text-2xl font-black">−12% на все кухни</span>
              <span className="text-2xl font-black opacity-40">·</span>
              <span className="text-2xl font-black">С 18 по 31 марта</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-black text-foreground mb-6 leading-tight">
              Ваша кухня.<br />Ваши правила.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              Кухня — это не просто мебель. Это место, где начинается утро. Где собирается семья. Где происходит жизнь.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-12">
            <img
              src={promoImage}
              alt="Скидка 12% на все кухни"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-foreground/80 leading-relaxed text-center max-w-2xl mx-auto">
              Приходите. Откройте каждый ящик. Потрогайте столешницу. Почувствуйте свою кухню до покупки.
            </p>
          </div>

          {/* Store Info */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Приходите к нам в магазин
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-foreground mx-auto mb-3" />
                <p className="font-semibold text-foreground mb-2">21vek.by ДОМ</p>
                <p className="text-muted-foreground text-sm">ТРЦ «Червенский»<br />ул. Маяковского 6</p>
              </div>

              <div className="text-center">
                <Clock className="w-8 h-8 text-foreground mx-auto mb-3" />
                <p className="font-semibold text-foreground mb-2">Режим работы</p>
                <p className="text-muted-foreground text-sm">Ежедневно<br />с 10:00 до 22:00</p>
              </div>

              <div className="text-center">
                <Phone className="w-8 h-8 text-foreground mx-auto mb-3" />
                <p className="font-semibold text-foreground mb-2">Телефон</p>
                <a href="tel:+375291234567" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  +375 (29) 123-45-67
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="https://yandex.by/maps/-/CDdkbPCl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:bg-foreground/90 transition-colors"
              >
                Построить маршрут
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Terms */}
          <div className="border-t border-border pt-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/60 mb-4">
              Условия акции
            </h3>
            <ul className="space-y-3 text-muted-foreground text-sm max-w-2xl">
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-0.5">—</span>
                <span>Акция действует с 18 по 31 марта 2026 года</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-0.5">—</span>
                <span>Скидка 12% распространяется на все кухни из ассортимента 21vek.by ДОМ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-0.5">—</span>
                <span>Скидка не суммируется с другими акциями и спецпредложениями</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-0.5">—</span>
                <span>Количество товара ограничено</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default KitchenPromo;
