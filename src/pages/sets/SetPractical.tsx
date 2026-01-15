import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import setImage from '@/assets/promos/set-practical.jpg';

const SetPractical = () => {
  const items = [
    {
      name: 'Текстиль',
      description: 'Любые товары из ассортимента витрины 21vek.by ДОМ',
      quantity: 4,
      discount: '10%',
    },
    {
      name: 'Посуда для сервировки',
      description: 'Любые товары из ассортимента витрины 21vek.by ДОМ поштучно',
      quantity: 4,
      discount: '10%',
    },
    {
      name: 'Сантехника',
      description: 'Любой товар из ассортимента витрины 21vek.by ДОМ',
      quantity: 1,
      discount: '10%',
    },
    {
      name: 'Любой элемент мебели',
      description: 'Весь ассортимент мебели 21vek.by ДОМ на ваш выбор',
      quantity: 1,
      discount: '10%',
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
                alt="Сет Практичный"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  Максимальная свобода
                </div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Сет «Практичный»
                </h1>
                <p className="text-lg text-muted-foreground">
                  Универсальное решение для тех, кто хочет обустроить дом по-своему! 
                  Выбирайте из всего ассортимента 21vek.by ДОМ: текстиль, посуду, сантехнику 
                  и мебель — и получите скидку на каждый товар. Полная свобода выбора!
                  <span className="text-primary font-semibold"> Скидка 10% на всё!</span>
                </p>
              </div>

              {/* Items */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">
                  Что входит в сет
                </h2>
                <div className="space-y-3">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="font-medium text-foreground">
                            {item.name}
                          </h3>
                          <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                            -{item.discount}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Количество: <span className="font-semibold text-foreground">{item.quantity} шт.</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 space-y-4">
                <p className="text-sm text-muted-foreground">
                  * Скидка предоставляется при покупке сета целиком
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
