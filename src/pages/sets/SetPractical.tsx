import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import setImage from '@/assets/promos/set-practical.jpg';
import textileImage from '@/assets/sets/set-practical-textile.jpg';
import dishesImage from '@/assets/sets/set-practical-dishes.jpg';
import plumbingImage from '@/assets/sets/set-practical-plumbing.jpg';
import furnitureImage from '@/assets/sets/set-practical-furniture.jpg';

const SetPractical = () => {
  const items = [
    {
      name: 'Текстиль',
      description: 'Любые товары из ассортимента 21vek.by и 21vek.by ДОМ',
      quantity: 4,
      discount: '10%',
      image: textileImage,
    },
    {
      name: 'Посуда для сервировки',
      description: 'Любые товары из ассортимента 21vek.by и 21vek.by ДОМ поштучно',
      quantity: 4,
      discount: '15%',
      image: dishesImage,
    },
    {
      name: 'Сантехника',
      description: 'Любой товар из ассортимента 21vek.by и 21vek.by ДОМ',
      quantity: 1,
      discount: '15%',
      image: plumbingImage,
    },
    {
      name: 'Любой элемент мебели',
      description: 'Весь ассортимент мебели 21vek.by и 21vek.by ДОМ на ваш выбор',
      quantity: 1,
      discount: '10%',
      image: furnitureImage,
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
            className="inline-flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 transition-all px-4 py-2 rounded-lg font-medium mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Все акции
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={setImage}
                alt="Сет Практичный"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Сет «Практичный»
                </h1>
                <p className="inline-block text-xl font-semibold text-highlight-foreground bg-highlight px-4 py-2 rounded-full mb-3">
                  Магия СЕТА в 21vek.by ДОМ! ✨
                </p>
                <p className="text-lg text-muted-foreground">
                  Универсальное решение для тех, кто хочет обустроить дом по-своему! 
                  Выбирайте из всего ассортимента 21vek.by ДОМ: текстиль, посуду, сантехнику 
                  и мебель — и получите скидку на каждый товар. Полная свобода выбора! 
                  Скидка до 15%!
                </p>
                <p className="inline-block text-lg text-highlight-foreground bg-highlight font-medium mt-3 px-4 py-2 rounded-full">
                  Приходи, смотри и заказывай свой идеальный набор!
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
                          <span className="text-base font-bold bg-destructive text-destructive-foreground px-3 py-1 rounded-lg whitespace-nowrap shadow-lg">
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

export default SetPractical;
