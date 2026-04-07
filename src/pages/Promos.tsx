import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';

import heroBanner from '@/assets/banners/promos-hero-new-opt.jpg';
import setComfortable from '@/assets/promos/set-comfortable-opt.jpg';
import setConvenient from '@/assets/promos/set-convenient-opt.jpg';
import setKids from '@/assets/promos/set-kids-opt.jpg';
import setDining1 from '@/assets/promos/set-dining-1-opt.jpg';
import setDining2 from '@/assets/promos/set-dining-2-opt.jpg';
import setPractical from '@/assets/promos/set-practical-opt.jpg';
import setKitchenLight from '@/assets/promos/set-kitchen-light-opt.jpg';
import spacePromoTile from '@/assets/promos/space-promo-tile.png';

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
    title: 'Хьюстон, у нас скидки!',
    subtitle: 'До 40% · с 8 по 22 апреля',
    description: 'Космические скидки на мебель и товары для дома в 21vek.by ДОМ',
    image: spacePromoTile,
    discount: 'до 40%',
    link: '/promos/space',
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

const promoCardClass =
  'group relative rounded-2xl overflow-hidden aspect-square bg-background border border-black/[0.06] shadow-sm';

const PROMOS_PER_ROW = 4;
const promosFirstRow = promos.slice(0, PROMOS_PER_ROW);
const promosSecondRow = promos.slice(PROMOS_PER_ROW);

const PromoStoryBlock = () => (
  <section aria-label="О магазине и акциях" className="w-full py-2 md:py-4">
    <div className="w-full rounded-3xl border border-black/[0.06] bg-gradient-to-b from-muted/40 to-background px-5 py-8 md:px-10 md:py-10 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <p className="text-lg md:text-xl font-semibold text-foreground tracking-tight text-center mb-6">
        В 21vek.by ДОМ всегда есть повод заглянуть.
      </p>
      <div className="space-y-4 text-[15px] md:text-base text-foreground/80 leading-relaxed max-w-none">
        <p>
          Мы верим: идеальный дом не должен стоить целое состояние. Поэтому в нашем магазине
          постоянно действуют выгодные акции и специальные предложения на мебель, интерьеры и бытовую
          технику.
        </p>
        <p>
          Диваны, кухни, спальни, столы, кресла, техника для дома — здесь всегда можно найти то, что
          вы давно хотели, по лучшей цене.
        </p>
        <p>
          Каждый найдёт то, что ему по душе — и по кошельку. Молодая пара, которая обустраивает первую
          квартиру. Семья, которая решила обновить гостиную. Или тот, кто просто давно хотел кресло, в
          котором хочется остаться навсегда.
        </p>
        <p>
          Приходите, смотрите, трогайте, сравнивайте. 2&nbsp;700 кв.м. мебели и техники. Всё вживую.
          Всё по честным ценам. А наши акции сделают покупку ещё приятнее.
        </p>
        <p className="font-medium text-foreground pt-1">
          21vek.by ДОМ — ваш идеальный дом начинается здесь.
        </p>
      </div>
      <p className="mt-8 pt-6 border-t border-black/[0.06] text-center text-sm md:text-[15px] font-medium text-foreground/90">
        📍 ТРЦ «Червенский», ул. Маяковского 6
      </p>
    </div>
  </section>
);

const PromoTileContent = ({ promo }: { promo: Promo }) => (
  <>
    <img
      src={promo.image}
      alt={promo.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
      <h3 className="text-white font-bold text-sm md:text-base mb-1">
        {promo.link.startsWith('/promos/') ? promo.title : `Сет «${promo.title}»`}
      </h3>
      <p className="text-white/65 text-xs line-clamp-2">{promo.subtitle}</p>
    </div>
  </>
);

const Promos = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="relative overflow-hidden rounded-3xl mb-10 md:mb-14">
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
                Сет — это выгода
                <br className="hidden md:block" /> без компромиссов
              </h1>
              <p className="text-base md:text-xl text-white/75 max-w-xl leading-relaxed">
                Продуманная комбинация товаров, собранная в одно предложение. Выбирай, приходи, экономь.
              </p>
              <p className="text-sm font-semibold text-white/60 mt-2">
                📍 ул. Маяковского 6, ТРЦ «Червенский»
              </p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {promosFirstRow.map((promo) => (
                <Link
                  key={promo.id}
                  to={promo.link}
                  className={`${promoCardClass} cursor-pointer`}
                >
                  <PromoTileContent promo={promo} />
                </Link>
              ))}
            </div>
            <PromoStoryBlock />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
              {promosSecondRow.map((promo) => (
                <Link
                  key={promo.id}
                  to={promo.link}
                  className={`${promoCardClass} cursor-pointer`}
                >
                  <PromoTileContent promo={promo} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Promos;
