import { ArrowRight, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

import sofaImage from '@/assets/products/sofa-corner.jpg';
import bedImage from '@/assets/products/bed-double.jpg';
import tableImage from '@/assets/products/table-dining.jpg';
import wardrobeImage from '@/assets/products/wardrobe.jpg';
import chairImage from '@/assets/products/office-chair.jpg';
import dresserImage from '@/assets/products/dresser.jpg';
import bookshelfImage from '@/assets/products/bookshelf.jpg';
import tvStandImage from '@/assets/products/tv-stand.jpg';

interface Product {
  id: number;
  name: string;
  image: string;
  oldPrice?: number;
  price: number;
  discount?: number;
}

const bestsellers: Product[] = [
  {
    id: 1,
    name: 'Диван угловой "Комфорт"',
    image: sofaImage,
    oldPrice: 89990,
    price: 69990,
    discount: 22,
  },
  {
    id: 2,
    name: 'Кровать "Уют" 160x200',
    image: bedImage,
    oldPrice: 45990,
    price: 35990,
    discount: 22,
  },
  {
    id: 3,
    name: 'Стол обеденный "Классик"',
    image: tableImage,
    price: 24990,
  },
  {
    id: 4,
    name: 'Шкаф-купе "Модерн"',
    image: wardrobeImage,
    oldPrice: 54990,
    price: 44990,
    discount: 18,
  },
  {
    id: 5,
    name: 'Кресло офисное "Профи"',
    image: chairImage,
    price: 15990,
  },
  {
    id: 6,
    name: 'Комод "Элегант"',
    image: dresserImage,
    oldPrice: 29990,
    price: 22990,
    discount: 23,
  },
  {
    id: 7,
    name: 'Стеллаж "Лофт"',
    image: bookshelfImage,
    price: 18990,
  },
  {
    id: 8,
    name: 'Тумба ТВ "Минимал"',
    image: tvStandImage,
    oldPrice: 19990,
    price: 14990,
    discount: 25,
  },
];

const formatPrice = (price: number) => {
  return price.toLocaleString('ru-RU') + ' ₽';
};

export const BestsellersSection = () => {
  return (
    <section className="bg-background py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            Хиты продаж
          </h2>
          <button className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
            Смотреть все
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bestsellers.map((product) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Discount badge */}
              {product.discount && (
                <div className="absolute top-3 left-3 z-10 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded">
                  -{product.discount}%
                </div>
              )}
              
              {/* Favorite button */}
              <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors">
                <Heart className="w-4 h-4 text-muted-foreground hover:text-destructive" />
              </button>

              {/* Image */}
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-foreground">
                    {formatPrice(product.price)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.oldPrice)}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
