import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface SetItem {
  name: string;
  description: string;
  quantity: number;
  discount: string;
  image: string;
}

interface SetPageLayoutProps {
  title: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  items: SetItem[];
  extraContent?: React.ReactNode;
}

export const SetPageLayout = ({
  title,
  tagline,
  description,
  image,
  imageAlt,
  items,
  extraContent,
}: SetPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Link
            to="/promos"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Все акции
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                {/* Category label */}
                <p className="text-sm font-bold uppercase tracking-widest text-foreground/40 mb-3">
                  Акция · 21vek.by ДОМ
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5 leading-tight">
                  {title}
                </h1>
                {/* Tagline — black bold, no color */}
                <p className="text-xl font-bold text-foreground mb-4 border-l-4 border-foreground pl-4">
                  {tagline}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {description}
                </p>
                {extraContent}
                <p className="text-base font-bold text-foreground mt-5 italic">
                  Приходи, смотри и заказывай свой идеальный набор!
                </p>
              </div>

              {/* Items */}
              <div className="space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-foreground/40">
                  Что входит в сет
                </h2>
                <div className="space-y-3">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row gap-4 p-4 bg-card border border-border rounded-2xl hover:border-foreground/20 transition-colors"
                    >
                      {/* Image Preview */}
                      <div className="sm:w-40 md:w-44 flex-shrink-0">
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
                          <h3 className="text-base md:text-lg font-bold text-foreground">
                            {item.name}
                          </h3>
                          {/* Black discount tag */}
                          <span className="text-sm font-black bg-foreground text-background px-3 py-1 rounded-md whitespace-nowrap">
                            -{item.discount}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Количество:{' '}
                          <span className="font-semibold text-foreground">
                            {item.quantity} шт.
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2 space-y-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground/60">
                  Скидки предоставляются только при покупке всех товаров вместе.
                </p>
                <Button size="lg" className="w-full sm:w-auto" asChild>
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
