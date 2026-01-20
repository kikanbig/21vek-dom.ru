import { ArrowRight, Play } from 'lucide-react';
import countryHouseImg from '@/assets/inspiration/country-house-opt.jpg';
import rentalApartmentImg from '@/assets/inspiration/rental-apartment-opt.jpg';
import modernLivingImg from '@/assets/inspiration/modern-living-opt.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  type: 'image' | 'video';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Дом с верандой',
    description: 'Уютный интерьер загородного дома с панорамными окнами и натуральными материалами',
    image: countryHouseImg,
    type: 'image',
  },
  {
    id: 2,
    title: 'Квартира под сдачу',
    description: 'Стильное решение для арендного жилья',
    image: rentalApartmentImg,
    type: 'image',
  },
  {
    id: 3,
    title: 'Современная гостиная',
    description: 'Минимализм и функциональность',
    image: modernLivingImg,
    type: 'video',
  },
];

export const InspirationSection = () => {
  return (
    <section className="bg-muted py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
              Идеи для интерьера
            </h2>
            <p className="text-muted-foreground">
              Вдохновляйтесь готовыми проектами от наших дизайнеров
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
            Все проекты
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Grid - Featured + 2 smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured large card */}
          <div className="group relative rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3] cursor-pointer">
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-3">
                Популярное
              </span>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                {projects[0].title}
              </h3>
              <p className="text-white/80">
                {projects[0].description}
              </p>
            </div>
          </div>

          {/* Two smaller cards */}
          <div className="grid grid-cols-2 gap-4">
            {projects.slice(1).map((project) => (
              <div
                key={project.id}
                className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Play button for video type */}
                {project.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm md:text-base">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <button className="md:hidden w-full mt-6 flex items-center justify-center gap-2 py-3 text-primary font-medium">
          Все проекты
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
