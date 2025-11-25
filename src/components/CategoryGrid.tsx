import sofasImage from '@/assets/categories/sofas.jpg';
import bedsImage from '@/assets/categories/beds.jpg';
import kitchenImage from '@/assets/categories/kitchen.jpg';
import armchairsImage from '@/assets/categories/armchairs.jpg';
import wardrobeImage from '@/assets/categories/wardrobe.jpg';
import kidsImage from '@/assets/categories/kids.jpg';
import officeImage from '@/assets/categories/office.jpg';
import newImage from '@/assets/categories/new.jpg';

const categories = [
  { name: 'Диваны', image: sofasImage },
  { name: 'Кровати', image: bedsImage },
  { name: 'Кухни', image: kitchenImage },
  { name: 'Кресла', image: armchairsImage },
  { name: 'Гардеробные', image: wardrobeImage },
  { name: 'Детская', image: kidsImage },
  { name: 'Офисная', image: officeImage },
  { name: 'Новинки', image: newImage },
];

export const CategoryGrid = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
          Популярные категории
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#"
              className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center p-4">
                  <span className="text-white font-medium text-center text-sm">
                    {category.name}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};