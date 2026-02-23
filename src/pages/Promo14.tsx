import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import bannerImage from '@/assets/banners/promo-sofas-banner.jpg';

const Promo14 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative w-full bg-black">
          <div className="relative aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5] overflow-hidden">
            <img
              src={bannerImage}
              alt="Скидка 12% на все диваны — только до 8 марта"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center justify-start">
              <div className="px-6 sm:px-10 md:px-16 max-w-xl text-left">
                <span className="inline-block px-4 py-1.5 mb-3 text-sm sm:text-base font-bold rounded-full bg-destructive text-destructive-foreground shadow-lg">
                  25 февраля — 8 марта
                </span>
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-2 leading-tight">
                  −12% на&nbsp;все диваны
                </h1>
                <p className="text-sm sm:text-lg md:text-xl text-white/90 leading-relaxed">
                  Только в&nbsp;21vek.by&nbsp;ДОМ на&nbsp;Маяковского,&nbsp;6, ТРЦ&nbsp;«Червенский»
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-3 mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 transition-all px-4 py-2 rounded-lg font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              На главную
            </Link>
            <Link
              to="/promos"
              className="inline-flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 transition-all px-4 py-2 rounded-lg font-medium"
            >
              Все акции
            </Link>
          </div>

          <div className="max-w-3xl space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                🛋️ −12% на все диваны в 21vek.by ДОМ!
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                С <strong className="text-foreground">25 февраля по 8 марта</strong> действует скидка{' '}
                <strong className="text-destructive">12%</strong> на все диваны на витрине нашего магазина!
                Угловые, прямые, раскладные — выбирайте свой идеальный диван по лучшей цене.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-3">
                Приходите в 21vek.by ДОМ, присядьте, оцените комфорт вживую — и забирайте со скидкой.
                Такие цены бывают редко!
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Условия акции</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-0.5">•</span>
                  Скидка 12% действует на все диваны на витрине магазина
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-0.5">•</span>
                  Период акции: с 25 февраля по 8 марта 2026 г.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-0.5">•</span>
                  Адрес: г. Минск, ул. Маяковского, 6, ТРЦ «Червенский»
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-0.5">•</span>
                  Скидка предоставляется при покупке в магазине
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <Button size="lg" className="w-full md:w-auto" asChild>
                <a href="tel:+375447829302">Получить консультацию</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Promo14;
