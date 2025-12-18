import { useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gallery1 from '@/assets/gallery/gallery-1.jpg';
import gallery2 from '@/assets/gallery/gallery-2.jpg';
import gallery3 from '@/assets/gallery/gallery-3.jpg';
import gallery4 from '@/assets/gallery/gallery-4.jpg';
import gallery5 from '@/assets/gallery/gallery-5.jpg';
import gallery6 from '@/assets/gallery/gallery-6.jpg';
import gallery7 from '@/assets/gallery/gallery-7.jpg';
import gallery8 from '@/assets/gallery/gallery-8.jpg';
import gallery9 from '@/assets/gallery/gallery-9.jpg';
import gallery10 from '@/assets/gallery/gallery-10.jpg';
import gallery11 from '@/assets/gallery/gallery-11.jpg';
import gallery12 from '@/assets/gallery/gallery-12.jpg';
import gallery13 from '@/assets/gallery/gallery-13.jpg';
import gallery14 from '@/assets/gallery/gallery-14.jpg';
import gallery15 from '@/assets/gallery/gallery-15.jpg';
import gallery16 from '@/assets/gallery/gallery-16.jpg';
import gallery17 from '@/assets/gallery/gallery-17.jpg';

const galleryImages = [
  { src: gallery1, alt: 'Диваны в магазине', caption: 'Диваны на любой вкус' },
  { src: gallery2, alt: 'Зал мягкой мебели', caption: 'Большой выбор мебели' },
  { src: gallery3, alt: 'Диваны разных цветов', caption: 'Яркие решения' },
  { src: gallery4, alt: 'Столовая зона', caption: 'Посуда и столы' },
  { src: gallery5, alt: 'Бытовая техника', caption: 'Холодильники и техника' },
  { src: gallery6, alt: 'Обеденные столы', caption: 'Обеденные группы' },
  { src: gallery7, alt: 'Спальня темная', caption: 'Элегантная спальня' },
  { src: gallery8, alt: 'Спальня светлая', caption: 'Уютная спальня' },
  { src: gallery9, alt: 'Кресло и комод', caption: 'Зона отдыха' },
  { src: gallery10, alt: 'Белый обеденный стол', caption: 'Классика интерьера' },
  { src: gallery11, alt: 'Кухня', caption: 'Кухонный гарнитур' },
  { src: gallery12, alt: 'Спальня с торшером', caption: 'Уютный отдых' },
  { src: gallery13, alt: 'Рабочее место', caption: 'Домашний офис' },
  { src: gallery14, alt: 'Сервировка', caption: 'Посуда и декор' },
  { src: gallery15, alt: 'Ванная комната', caption: 'Сантехника' },
  { src: gallery16, alt: 'Компьютерный стол', caption: 'Рабочая зона' },
  { src: gallery17, alt: 'Новогодние подарки', caption: 'Праздничный декор' },
];

const videos = [
  { id: 'fRnDhodrJTI', title: '1 этаж', thumbnail: gallery3 },
  { id: '5Hqoz7ID1fM', title: '2 этаж', thumbnail: gallery7 },
];

export const StoreGallery = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Фото и видео
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Как выглядит формат
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Готовые интерьерные решения и вдохновение для вашего дома
          </p>
        </div>

        {/* Video section - Two videos */}
        <div className="mb-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="relative rounded-2xl overflow-hidden cursor-pointer group bg-card border border-border"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="aspect-video relative">
                <img 
                  src={video.thumbnail} 
                  alt={`Видео-тур ${video.title}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform" />
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-primary/50">
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                
                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <p className="text-white/80 text-sm mb-1">Видео-тур</p>
                  <h3 className="text-white text-lg md:text-xl font-semibold">{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <button 
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Видео-тур по магазину"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl"
              />
            </div>
          </div>
        )}

        {/* Photo gallery - Masonry-like grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                index === 0 || index === 5 ? 'md:row-span-2 aspect-[3/4] md:aspect-auto' : 'aspect-square'
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Expand className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <p className="text-white font-medium text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image lightbox - Modern design */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            {/* Navigation */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
            
            {/* Image */}
            <div className="max-w-6xl max-h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
              <img 
                src={galleryImages[selectedImage].src} 
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-xl"
              />
              <div className="text-center mt-4">
                <p className="text-white font-medium">{galleryImages[selectedImage].caption}</p>
                <p className="text-white/60 text-sm mt-1">{selectedImage + 1} / {galleryImages.length}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
