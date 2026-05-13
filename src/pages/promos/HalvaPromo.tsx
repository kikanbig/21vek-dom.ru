import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MapPin, Clock, Phone, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STORE_YANDEX_ROUTE_URL } from '@/constants/storeRoute';
import halvaBanner from '@/assets/promos/halva-promo-banner.png';

const HalvaPromo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto max-w-6xl px-4 pt-6 md:pt-8">
          <div className="rounded-2xl overflow-hidden border border-black/[0.06] shadow-sm bg-[#7b2cbf]">
            <img
              src={halvaBanner}
              alt="Рассрочка 12 месяцев по Халве на всю бытовую технику в 21vek.by ДОМ, с 11 по 20 мая"
              className="block w-full h-auto"
            />
          </div>
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
            <div className="inline-flex flex-wrap items-center gap-4 bg-amber-500 text-amber-950 px-6 py-4 rounded-2xl mb-8">
              <span className="text-2xl font-black">Халва · 12 мес</span>
              <span className="text-2xl font-black opacity-40">·</span>
              <span className="text-2xl font-black">11–20 мая</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-black text-foreground mb-6 leading-tight">
              Рассрочка 12 месяцев по Халве ⚡
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl font-semibold">
              На всю бытовую технику в 21vek.by ДОМ
            </p>
            <p className="mt-4 text-lg text-muted-foreground">С 11 по 20 мая</p>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 mb-16">
            <div className="space-y-8">
              <div className="rounded-3xl border border-black/[0.06] bg-gradient-to-b from-muted/40 to-background px-6 py-8 md:px-8 md:py-10 space-y-6 text-base md:text-lg text-foreground/85 leading-relaxed">
                <p className="text-2xl font-semibold text-foreground">Здравствуйте, дорогой покупатель!</p>
                <p>
                  Всего 10 дней — и возможность забрать любимую технику домой, а платить частями целый
                  год.
                </p>
                <p>
                  С 11 по 20 мая в магазине 21vek.by ДОМ действует рассрочка по карте Халва на 12
                  месяцев — на всю бытовую технику без исключения.
                </p>

                <div className="pt-2 space-y-4">
                  <p className="font-semibold text-foreground">🎁 Абсолютно вся техника — в рассрочку</p>
                  <p>От самого маленького гаджета до техники для всей семьи:</p>
                  <ul className="space-y-2 pl-1 list-none">
                    <li>💆 массажёры, фены, стайлеры</li>
                    <li>☕️ кофемашины</li>
                    <li>🧹 пылесосы, утюги, отпариватели</li>
                    <li>🍳 микроволновки, плиты, духовые шкафы</li>
                    <li>📺 телевизоры</li>
                    <li>❄️ холодильники, стиральные и посудомоечные машины</li>
                  </ul>
                  <p>…и всё остальное, что делает дом удобнее.</p>
                </div>

                <div className="pt-2 space-y-3">
                  <p className="font-semibold text-foreground">Условия предельно простые:</p>
                  <ul className="space-y-2">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Рассрочка 12 месяцев по карте Халва</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>0% переплаты — платите ровно ту сумму, что на ценнике</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Действует на всю бытовую технику в магазине</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Оформление за пару минут прямо в торговом зале</span>
                    </li>
                  </ul>
                </div>

                <p className="rounded-2xl bg-amber-100/80 border border-amber-200/80 px-4 py-3 text-foreground font-medium">
                  💛 Предложение действует только в магазине 21vek.by ДОМ с 11 по 20 мая.
                </p>
              </div>

              <div className="rounded-3xl border border-black/[0.06] bg-muted/30 px-6 py-8 md:px-8 md:py-10 space-y-5">
                <p className="text-xl font-semibold text-foreground">📍 Приезжайте в 21vek.by ДОМ</p>
                <p>У нас вы сможете:</p>
                <ul className="space-y-2 list-none pl-0">
                  <li>— посмотреть технику вживую и сравнить модели,</li>
                  <li>— получить совет от наших консультантов,</li>
                  <li>— оформить покупку по Халве прямо на месте.</li>
                </ul>

                <div className="pt-4 border-t border-black/[0.06] space-y-3">
                  <p className="font-semibold text-foreground">Как оформить:</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Приезжаете в 21vek.by ДОМ с 11 по 20 мая</li>
                    <li>Выбираете технику — от фена до холодильника</li>
                    <li>Оплачиваете картой Халва</li>
                    <li>Забираете покупку и платите частями 12 месяцев</li>
                  </ol>
                </div>

                <p className="font-semibold text-foreground pt-2">
                  Ждём вас в 21vek.by ДОМ!
                  <br />
                  Только 10 дней — с 11 по 20 мая ⏳
                </p>

                <p className="text-muted-foreground">
                  📍 Минск, Маяковского, 6, ТРЦ «Червенский»
                  <br />
                  🕐 10:00 – 22:00
                </p>

                <p className="text-muted-foreground pt-2">
                  С теплом,
                  <br />
                  Команда 21vek.by ДОМ
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-black/[0.06] bg-white p-6 md:p-8 h-fit lg:sticky lg:top-24">
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

          <div className="border-t border-border pt-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/60 mb-4">
              Кратко об акции
            </h3>
            <ul className="space-y-3 text-muted-foreground text-sm max-w-3xl">
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-0.5">—</span>
                <span>Рассрочка 12 месяцев по карте Халва с 11 по 20 мая 2026 года</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-0.5">—</span>
                <span>Только в магазине 21vek.by ДОМ, ТРЦ «Червенский», ул. Маяковского 6</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-0.5">—</span>
                <span>На всю бытовую технику в ассортименте магазина</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-foreground/40 mt-0.5">—</span>
                <span>Уточняйте условия у консультантов в зале</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HalvaPromo;
