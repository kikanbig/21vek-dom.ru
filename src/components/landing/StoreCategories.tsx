import sofas from '@/assets/categories/sofas.jpg';
import beds from '@/assets/categories/beds.jpg';
import kitchen from '@/assets/categories/kitchen.jpg';
import wardrobe from '@/assets/categories/wardrobe.jpg';
import armchairs from '@/assets/categories/armchairs.jpg';
import office from '@/assets/categories/office.jpg';
import kids from '@/assets/categories/kids.jpg';
import newCategory from '@/assets/categories/new.jpg';

const categories = [
  { name: 'Гостиная', image: sofas, description: 'Диваны, кресла, столы' },
  { name: 'Спальня', image: beds, description: 'Кровати, матрасы, комоды' },
  { name: 'Кухня', image: kitchen, description: 'Столы, стулья, буфеты' },
  { name: 'Прихожая', image: wardrobe, description: 'Шкафы, вешалки, обувницы' },
  { name: 'Хранение', image: office, description: 'Стеллажи, ящики, органайзеры' },
  { name: 'Текстиль', image: armchairs, description: 'Шторы, подушки, пледы' },
  { name: 'Декор', image: kids, description: 'Вазы, картины, зеркала' },
  { name: 'Мелочи', image: newCategory, description: 'Светильники, крючки, корзины' },
];

export const StoreCategories = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Что вы найдёте
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Всё для дома в одном месте — от мебели до деталей, которые «собирают» интерьер
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{category.name}</h3>
                <p className="text-sm text-white/80">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
