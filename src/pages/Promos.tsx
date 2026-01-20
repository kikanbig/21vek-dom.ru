import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Percent, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import setComfortable from '@/assets/promos/set-comfortable.png';
import setConvenient from '@/assets/promos/set-convenient.jpg';
import setKids from '@/assets/promos/set-kids.jpg';
import setDining1 from '@/assets/promos/set-dining-1.jpg';
import setDining2 from '@/assets/promos/set-dining-2.jpg';
import setPractical from '@/assets/promos/set-practical.jpg';

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
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Все акции
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Выбирайте готовые комплекты товаров со скидкой — выгоднее, чем покупать по отдельности!
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promos.map((promo) => (
              <Link
                to={promo.link}
                key={promo.id}
                className="group relative rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Discount badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-sm font-bold">
                    <Percent className="w-4 h-4" />
                    {promo.discount}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    Сет «{promo.title}»
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {promo.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {promo.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm">
                    Подробнее
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
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
