import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import sofaImage from '@/assets/products/sofa-corner.jpg';
import bedImage from '@/assets/products/bed-double.jpg';
import tableImage from '@/assets/products/table-dining.jpg';
import wardrobeImage from '@/assets/products/wardrobe.jpg';
import chairImage from '@/assets/products/office-chair.jpg';
import dresserImage from '@/assets/products/dresser.jpg';
import bookshelfImage from '@/assets/products/bookshelf.jpg';
import tvStandImage from '@/assets/products/tv-stand.jpg';

const products = [
  { title: 'Диван угловой "Комфорт" с оттоманкой', price: 1333, oldPrice: 1833, discount: 27, image: sofaImage },
  { title: 'Кровать двуспальная "Уют" 160x200', price: 1000, oldPrice: 1433, discount: 30, image: bedImage },
  { title: 'Стол обеденный раздвижной "Классик"', price: 666, oldPrice: 933, discount: 29, image: tableImage },
  { title: 'Шкаф-купе "Модерн" 3-х дверный', price: 1666, oldPrice: 2333, discount: 29, image: wardrobeImage },
  { title: 'Кресло офисное эргономичное "Профи"', price: 500, oldPrice: 666, discount: 25, image: chairImage },
  { title: 'Комод "Элегант" с 5 ящиками', price: 433, oldPrice: 600, discount: 28, image: dresserImage },
  { title: 'Стеллаж открытый "Лофт" из массива', price: 833, oldPrice: 1166, discount: 29, image: bookshelfImage },
  { title: 'Тумба ТВ "Минимал" с выдвижными ящиками', price: 566, oldPrice: 766, discount: 26, image: tvStandImage },
];

export const ProductsSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Хиты продаж
          </h2>
          <Button variant="ghost" className="text-primary hidden md:flex items-center gap-1">
            Все товары
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center md:hidden">
          <Button variant="outline" className="border-primary text-primary">
            Показать больше
          </Button>
        </div>
      </div>
    </section>
  );
};