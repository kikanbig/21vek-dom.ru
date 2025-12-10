import { useState } from 'react';
import { X } from 'lucide-react';
import photo1 from '@/assets/gallery/photo-1.jpg';
import photo2 from '@/assets/gallery/photo-2.jpg';
import photo3 from '@/assets/gallery/photo-3.jpg';
import photo4 from '@/assets/gallery/photo-4.jpg';
import photo5 from '@/assets/gallery/photo-5.jpg';
import photo6 from '@/assets/gallery/photo-6.jpg';
import photo7 from '@/assets/gallery/photo-7.jpg';
import photo8 from '@/assets/gallery/photo-8.jpg';
import photo9 from '@/assets/gallery/photo-9.jpg';
import photo10 from '@/assets/gallery/photo-10.jpg';
import photo11 from '@/assets/gallery/photo-11.jpg';
import photo12 from '@/assets/gallery/photo-12.jpg';
import photo13 from '@/assets/gallery/photo-13.jpg';
import photo14 from '@/assets/gallery/photo-14.jpg';
import photo15 from '@/assets/gallery/photo-15.jpg';
import photo16 from '@/assets/gallery/photo-16.jpg';
import photo17 from '@/assets/gallery/photo-17.jpg';
import photo18 from '@/assets/gallery/photo-18.jpg';
import photo19 from '@/assets/gallery/photo-19.jpg';
import photo20 from '@/assets/gallery/photo-20.jpg';
import photo21 from '@/assets/gallery/photo-21.jpg';
import photo22 from '@/assets/gallery/photo-22.jpg';
import photo23 from '@/assets/gallery/photo-23.jpg';
import photo24 from '@/assets/gallery/photo-24.jpg';
import photo25 from '@/assets/gallery/photo-25.jpg';
import photo26 from '@/assets/gallery/photo-26.jpg';
import photo27 from '@/assets/gallery/photo-27.jpg';
import photo28 from '@/assets/gallery/photo-28.jpg';
import photo29 from '@/assets/gallery/photo-29.jpg';
import photo30 from '@/assets/gallery/photo-30.jpg';
import photo31 from '@/assets/gallery/photo-31.jpg';
import photo32 from '@/assets/gallery/photo-32.jpg';
import photo33 from '@/assets/gallery/photo-33.jpg';
import photo34 from '@/assets/gallery/photo-34.jpg';
import photo35 from '@/assets/gallery/photo-35.jpg';
import photo36 from '@/assets/gallery/photo-36.jpg';
import photo37 from '@/assets/gallery/photo-37.jpg';
import photo38 from '@/assets/gallery/photo-38.jpg';
import photo39 from '@/assets/gallery/photo-39.jpg';
import photo40 from '@/assets/gallery/photo-40.jpg';
import photo41 from '@/assets/gallery/photo-41.jpg';
import photo42 from '@/assets/gallery/photo-42.jpg';
import photo43 from '@/assets/gallery/photo-43.jpg';
import photo44 from '@/assets/gallery/photo-44.jpg';
import photo45 from '@/assets/gallery/photo-45.jpg';

const galleryImages = [
  { id: 1, src: photo1, alt: 'Открытие магазина' },
  { id: 2, src: photo2, alt: 'Гости на открытии' },
  { id: 3, src: photo3, alt: 'Сервировка стола' },
  { id: 4, src: photo4, alt: 'Посуда и декор' },
  { id: 5, src: photo5, alt: 'Торговый зал' },
  { id: 6, src: photo6, alt: 'Новогодняя ёлка' },
  { id: 7, src: photo7, alt: 'Свечи и текстиль' },
  { id: 8, src: photo8, alt: 'Обеденные столы' },
  { id: 9, src: photo9, alt: 'Детская комната' },
  { id: 10, src: photo10, alt: 'Рабочий стол' },
  { id: 11, src: photo11, alt: 'Спальня' },
  { id: 12, src: photo12, alt: 'Кровать' },
  { id: 13, src: photo13, alt: 'Детские корзины' },
  { id: 14, src: photo14, alt: 'Детская кровать' },
  { id: 15, src: photo15, alt: 'Корзины для хранения' },
  { id: 16, src: photo16, alt: 'Спальня с декором' },
  { id: 17, src: photo17, alt: 'Ванная комната' },
  { id: 18, src: photo18, alt: 'Кресло с подушкой' },
  { id: 19, src: photo19, alt: 'Кресло со свечами' },
  { id: 20, src: photo20, alt: 'Вывески магазина' },
  { id: 21, src: photo21, alt: 'Торговый зал' },
  { id: 22, src: photo22, alt: 'Подушки' },
  { id: 23, src: photo23, alt: 'Детское постельное' },
  { id: 24, src: photo24, alt: 'Информационный стенд' },
  { id: 25, src: photo25, alt: 'Новогодний декор' },
  { id: 26, src: photo26, alt: 'Обеденная группа' },
  { id: 27, src: photo27, alt: 'Пледы' },
  { id: 28, src: photo28, alt: 'Вход в магазин' },
  { id: 29, src: photo29, alt: 'Диван с пуфом' },
  { id: 30, src: photo30, alt: 'Светлый диван' },
  { id: 31, src: photo31, alt: 'Журнальный столик' },
  { id: 32, src: photo32, alt: 'Кухня' },
  { id: 33, src: photo33, alt: 'Стеллаж с подушками' },
  { id: 34, src: photo34, alt: 'Раковина' },
  { id: 35, src: photo35, alt: 'Сервировка' },
  { id: 36, src: photo36, alt: 'Спальня с лампой' },
  { id: 37, src: photo37, alt: 'Зал диванов' },
  { id: 38, src: photo38, alt: 'Жёлтый диван' },
  { id: 39, src: photo39, alt: 'Холодильники' },
  { id: 40, src: photo40, alt: 'Рабочее место' },
  { id: 41, src: photo41, alt: 'Зал столов и посуды' },
  { id: 42, src: photo42, alt: 'Праздничный стол' },
  { id: 43, src: photo43, alt: 'Подарки под ёлкой' },
  { id: 44, src: photo44, alt: 'Зона обслуживания' },
  { id: 45, src: photo45, alt: 'Телевизор с рекламой' },
];

export const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
        Фотогалерея
      </h2>
      
      {/* Gallery grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <div 
            key={image.id}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(image.src)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-muted-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Увеличенное фото"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
