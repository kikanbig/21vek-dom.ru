import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import bannerImage from '@/assets/banners/promo-valentine.jpg';

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
              alt="Неделя влюбленных — скидка 20% на матрасы"
              className="w-full h-full object-cover"
            />
            {/* Text overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent flex items-center justify-end">
              <div className="px-6 sm:px-10 md:px-16 max-w-xl text-right">
                <span className="inline-block px-4 py-1.5 mb-3 text-sm sm:text-base font-bold rounded-full bg-destructive text-destructive-foreground shadow-lg">
                  13–22 февраля
                </span>
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-2 leading-tight">
                  Неделя влюблённых в&nbsp;21vek.by&nbsp;ДОМ
                </h1>
                <p className="text-sm sm:text-lg md:text-xl text-white/90 leading-relaxed">
                  Скидка <span className="font-bold text-yellow-400">20%</span> на все матрасы в нашем магазине на&nbsp;Маяковского,&nbsp;6
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
                💕 Неделя влюблённых в 21vek.by ДОМ!
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                С <strong className="text-foreground">13 по 22 февраля</strong> дарим скидку{' '}
                <strong className="text-destructive">20%</strong> на все матрасы в нашем магазине! 
                Приходите на Маяковского, 6 — выбирайте матрас мечты по лучшей цене.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Условия акции</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-0.5">•</span>
                  Скидка 20% действует на все матрасы в экспозиции магазина
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-0.5">•</span>
                  Период акции: с 13 по 22 февраля 2026 г.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-0.5">•</span>
                  Адрес: г. Минск, ул. Маяковского, 6
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
