import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroBanner from '@/assets/banners/promos-hero-new-opt.jpg';
import promoSofas from '@/assets/banners/promo-sofas-banner.jpg';
import setComfortable from '@/assets/promos/set-comfortable-opt.jpg';
import setConvenient from '@/assets/promos/set-convenient-opt.jpg';
import setKids from '@/assets/promos/set-kids-opt.jpg';
import setDining1 from '@/assets/promos/set-dining-1-opt.jpg';
import setDining2 from '@/assets/promos/set-dining-2-opt.jpg';
import setPractical from '@/assets/promos/set-practical-opt.jpg';
import setKitchenLight from '@/assets/promos/set-kitchen-light-opt.jpg';

interface Promo {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  discount: string;
  link: string;
}

const promos: Promo[] = [
  {
    id: 8,
    title: '−12% на диваны',
    subtitle: 'Только до 8 марта',
    description: 'С 25 февраля по 8 марта — скидка 12% на все диваны на витрине в 21vek.by ДОМ',
    image: promoSofas,
    discount: '-12%',
    link: '/promo14',
  },
  {
    id: 7,
    title: 'Кухня Лайт',
    subtitle: 'Кухня + стол + техника',
    description: 'Готовая кухня с обеденным столом и бытовой техникой по выгодной цене',
    image: setKitchenLight,
    discount: 'до 15%',
    link: '/sets/kitchen-light',
  },
  {
    id: 1,
    title: 'Комфортный',
    subtitle: 'Кровать + матрас + подушки',
    description: 'Готовое решение для спальни: элегантная кровать, ортопедический матрас и подушки',
    image: setComfortable,
    discount: 'до 15%',
    link: '/sets/comfortable',
  },
  {
    id: 2,
    title: 'Удобный',
    subtitle: 'Матрас + наматрасник + подушки',
    description: 'Обновите спальное место с матрасом Lagoma и качественными аксессуарами',
    image: setConvenient,
    discount: 'до 15%',
    link: '/sets/convenient',
  },
  {
    id: 3,
    title: 'Детский',
    subtitle: 'Детский матрас + аксессуары',
    description: 'Забота о здоровье ребёнка: ортопедический матрас и гипоаллергенные аксессуары',
    image: setKids,
    discount: 'до 15%',
    link: '/sets/kids',
  },
  {
    id: 4,
    title: 'Обеденный',
    subtitle: 'Стол + стулья + посуда для сервировки',
    description: 'Полный комплект для обеденной зоны с красивой посудой JEWEL',
    image: setDining1,
    discount: 'до 15%',
    link: '/sets/dining-1',
  },
  {
    id: 5,
    title: 'Обеденный+',
    subtitle: 'Стол + стулья + посуда для готовки',
    description: 'Обеденная группа с профессиональной посудой Lara для кулинаров',
    image: setDining2,
    discount: 'до 15%',
    link: '/sets/dining-2',
  },
  {
    id: 6,
    title: 'Практичный',
    subtitle: 'Текстиль + посуда + мебель',
    description: 'Универсальный набор: выбирайте из всего ассортимента 21vek.by ДОМ',
    image: setPractical,
    discount: 'до 15%',
    link: '/sets/practical',
  },
];

const Promos = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>

          {/* Definition Banner */}
          <div className="relative overflow-hidden rounded-3xl mb-10">
            <img
              src={heroBanner}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative py-14 px-6 md:py-20 md:px-12 text-center flex flex-col items-center gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                21vek.by ДОМ · Акции
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight max-w-3xl">
                Сет — это выгода<br className="hidden md:block" /> без компромиссов
              </h1>
              <p className="text-base md:text-xl text-white/75 max-w-xl leading-relaxed">
                Продуманная комбинация товаров, собранная в одно предложение. Выбирай, приходи, экономь.
              </p>
              <p className="text-sm font-semibold text-white/60 mt-2">
                📍 ул. Маяковского 6, ТРЦ «Червенский»
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
            {promos.map((promo) => (
              <Link
                to={promo.link}
                key={promo.id}
                className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer bg-background"
              >
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Discount badge — black/white */}
                <div className="absolute top-3 right-3 bg-white text-foreground px-2.5 py-1 rounded-lg text-sm font-black shadow-lg">
                  {promo.discount}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-white font-bold text-sm md:text-base mb-1">
                    {promo.title.startsWith('−12%') ? promo.title : `Сет «${promo.title}»`}
                  </h3>
                  <p className="text-white/65 text-xs line-clamp-2">
                    {promo.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Promos;
