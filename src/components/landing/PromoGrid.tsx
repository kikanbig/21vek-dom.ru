import { ArrowRight, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';

import setComfortable from '@/assets/promos/set-comfortable-opt.jpg';
import setConvenient from '@/assets/promos/set-convenient-opt.jpg';
import setKids from '@/assets/promos/set-kids-opt.jpg';
import setDining1 from '@/assets/promos/set-dining-1-opt.jpg';
import setDining2 from '@/assets/promos/set-dining-2-opt.jpg';
import setPractical from '@/assets/promos/set-practical-opt.jpg';

interface Promo {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  discount: string;
  link: string;
}

const promos: Promo[] = [
  {
    id: 1,
    title: 'Комфортный',
    subtitle: 'Кровать + матрас + подушки',
    image: setComfortable,
    discount: 'до 15%',
    link: '/sets/comfortable',
  },
  {
    id: 2,
    title: 'Удобный',
    subtitle: 'Матрас + наматрасник + подушки',
    image: setConvenient,
    discount: 'до 15%',
    link: '/sets/convenient',
  },
  {
    id: 3,
    title: 'Детский',
    subtitle: 'Детский матрас + аксессуары',
    image: setKids,
    discount: 'до 15%',
    link: '/sets/kids',
  },
  {
    id: 4,
    title: 'Обеденный',
    subtitle: 'Стол + стулья + посуда',
    image: setDining1,
    discount: 'до 15%',
    link: '/sets/dining-1',
  },
  {
    id: 5,
    title: 'Обеденный+',
    subtitle: 'Стол + стулья + кастрюли',
    image: setDining2,
    discount: 'до 15%',
    link: '/sets/dining-2',
  },
  {
    id: 6,
    title: 'Практичный',
    subtitle: 'Текстиль + посуда + мебель',
    image: setPractical,
    discount: 'до 15%',
    link: '/sets/practical',
  },
];

export const PromoGrid = () => {
  return (
    <section className="bg-background py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            Акции
          </h2>
          <Link 
            to="/promos"
            className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Смотреть все
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Discount badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-lg text-xs font-bold">
                <Percent className="w-3 h-3" />
                {promo.discount}
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-sm mb-0.5">
                  {promo.title}
                </h3>
                <p className="text-white/70 text-xs line-clamp-2">
                  {promo.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
