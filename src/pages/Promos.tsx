import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import puzzleBanner from '@/assets/banners/puzzle-pastel-opt.jpg';
import promoValentine from '@/assets/banners/promo-valentine.jpg';
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
    title: 'Неделя влюблённых',
    subtitle: 'Скидка 20% на все матрасы',
    description: 'С 13 по 22 февраля — скидка 20% на все матрасы в магазине на Маяковского, 6',
    image: promoValentine,
    discount: '-20%',
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
            className="inline-flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 transition-all px-4 py-2 rounded-lg font-medium mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            На главную
          </Link>

          {/* Definition Banner */}
          <div className="relative overflow-hidden rounded-3xl mb-8">
            {/* Background image */}
            <img 
              src={puzzleBanner} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="relative p-8 md:p-12 lg:p-16 text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4 leading-relaxed">
                <span className="text-white/90">Сет</span> — это продуманная комбинация товаров,<br className="hidden md:block" /> собранная в одно выгодное предложение.
              </p>
              <p className="text-lg md:text-xl font-bold text-white mb-4">
                📍 21vek.by ДОМ, ул. Маяковского 6, ТРЦ «Червенский»
              </p>
              <p className="text-xl md:text-2xl font-semibold text-white">
                Приходи, сравнивай и заказывай свой идеальный набор!
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
            {promos.map((promo) => (
              <Link
                to={promo.link}
                key={promo.id}
                className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer bg-background"
              >
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Discount badge */}
                <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-2.5 py-1 rounded-lg text-sm font-bold shadow-lg">
                  {promo.discount}
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-base md:text-lg mb-1">
                    {promo.title.startsWith('Неделя') ? promo.title : `Сет «${promo.title}»`}
                  </h3>
                  <p className="text-white/80 text-sm line-clamp-2">
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
