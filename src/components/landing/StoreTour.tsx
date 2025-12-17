import { CheckCircle2, Clock, Check } from 'lucide-react';
import sofaCorner from '@/assets/products/sofa-corner.jpg';
import tourRooms from '@/assets/tour/tour-rooms.jpg';
import tourFurniture from '@/assets/tour/tour-furniture.jpg';
import tourHomegoods from '@/assets/tour/tour-homegoods.jpg';
import tourCheckout from '@/assets/tour/tour-checkout.jpg';

const tourSteps = [
  { step: 1, title: 'Готовые комнаты', description: 'Смотрите готовые решения и вдохновляйтесь', time: '15 мин', image: tourRooms },
  { step: 2, title: 'Мебель', description: 'Выбирайте из широкого ассортимента', time: '25 мин', image: tourFurniture },
  { step: 3, title: 'Товары для дома', description: 'Текстиль, декор, мелочи', time: '15 мин', image: tourHomegoods },
  { step: 4, title: 'Касса', description: 'Оформление и доставка', time: '5 мин', image: tourCheckout },
];

const checklist = [
  'Ширина стен для мебели',
  'Высота потолков',
  'Размеры дверных проёмов',
  'Фото текущего интерьера',
  'Список нужных предметов',
];

export const StoreTour = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-xl mb-4" style={{ backgroundColor: 'rgba(71, 35, 99, 0.15)', color: 'rgb(71, 35, 99)' }}>
            <Clock className="w-6 h-6" />
            60 минут
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Маршрут по магазину
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Чёткий сценарий визита: посмотрите всё за один час
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Roadmap */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block" />
            
            <div className="space-y-0">
              {tourSteps.map((item, index) => (
                <div key={item.step} className="relative">
                  {/* Step content */}
                  <div className="flex items-start gap-4 md:gap-6 pb-8 last:pb-0">
                    {/* Circle indicator */}
                    <div className="relative z-10 shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/30">
                        {item.step}
                      </div>
                    </div>
                    
                    {/* Content card with image */}
                    <div className="flex-1 bg-card rounded-xl border border-border overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300 group">
                      {/* Image */}
                      <div className="h-32 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {/* Text content */}
                      <div className="p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">
                              {item.description}
                            </p>
                          </div>
                          <div className="shrink-0 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            {item.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connector dots */}
                  {index < tourSteps.length - 1 && (
                    <div className="absolute left-6 top-12 flex flex-col gap-1.5 hidden md:flex">
                      <div className="w-0.5 h-1.5 bg-primary/40 rounded-full mx-auto" />
                      <div className="w-0.5 h-1.5 bg-primary/30 rounded-full mx-auto" />
                      <div className="w-0.5 h-1.5 bg-primary/20 rounded-full mx-auto" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* End marker */}
            <div className="flex items-center gap-4 md:gap-6 mt-4">
              <div className="relative z-10 shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30">
                  <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="text-lg font-medium text-primary">
                Готово! Вы успели всё посмотреть
              </div>
            </div>
          </div>

          {/* Checklist with background image */}
          <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
            {/* Background image */}
            <img 
              src={sofaCorner} 
              alt="Интерьер" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
            
            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="font-semibold text-2xl text-white mb-2">Что замерить дома</h3>
                <p className="text-white/70">Подготовьтесь перед поездкой</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-sm text-white/90">
                  💡 <strong>Совет:</strong> Сделайте фото комнаты с разных ракурсов — так проще подобрать мебель на месте
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
