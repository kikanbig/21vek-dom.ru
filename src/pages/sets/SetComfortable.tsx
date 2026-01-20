import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import setImage from '@/assets/promos/set-comfortable-opt.jpg';
import bedImage from '@/assets/sets/set-comfortable-bed.jpg';
import mattressImage from '@/assets/sets/set-comfortable-mattress.jpg';
import pillowsImage from '@/assets/sets/set-comfortable-pillows.jpg';

const SetComfortable = () => {
  const items = [
    {
      name: 'Кровать 160x200',
      description: 'Двуспальная кровать MODULA Карпин с подъемным механизмом 160х200',
      quantity: 1,
      discount: '7%',
      image: bedImage,
    },
    {
      name: 'Матрас 160x200',
      description: 'Премиальные матрасы коллекции Veluna на ваш выбор',
      quantity: 1,
      discount: '15%',
      image: mattressImage,
    },
    {
      name: 'Подушка ортопедическая',
      description: 'Любые модели из экспозиции витрины сна на ваш выбор',
      quantity: 2,
      discount: '7%',
      image: pillowsImage,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Link
            to="/promos"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Все акции
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={setImage}
                alt="Сет Комфортный"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Сет «Комфортный»
                </h1>
                <p className="text-lg text-muted-foreground">
                  Мечтаете о крепком и здоровом сне? Сет «Комфортный» — это готовое решение 
                  для вашей спальни! Элегантная кровать, ортопедический матрас премиум-класса 
                  и две подушки с эффектом памяти превратят каждую ночь в настоящий отдых. 
                  <span className="text-yellow-500 font-semibold"> Экономия до 15%!</span>
                </p>
              </div>

              {/* Items */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">
                  Что входит в сет
                </h2>
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row gap-4 p-4 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors"
                    >
                      {/* Image Preview */}
                      <div className="sm:w-40 md:w-48 flex-shrink-0">
                        <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="text-lg md:text-xl font-semibold text-foreground">
                            {item.name}
                          </h3>
                          <span className="text-base font-bold text-white bg-red-500 px-3 py-1 rounded-lg whitespace-nowrap">
                            -{item.discount}
                          </span>
                        </div>
                        <p className="text-base text-muted-foreground">
                          {item.description}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Количество: <span className="font-semibold text-foreground">{item.quantity} шт.</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 space-y-4">
              <p className="text-base font-bold text-foreground">
                Скидки предоставляются только при покупке всех товаров вместе.
              </p>
                <Button size="lg" className="w-full md:w-auto" asChild>
                  <a href="tel:+375447829302">Получить консультацию</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SetComfortable;
