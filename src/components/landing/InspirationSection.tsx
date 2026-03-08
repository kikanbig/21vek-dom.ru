import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '@/data/articles';

export const InspirationSection = () => {
  const featured = articles[0];
  const secondary = articles.slice(1, 6);

  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
              Идеи для интерьера
            </h2>
            <p className="text-lg text-muted-foreground">
              Вдохновляйтесь советами дизайнеров и готовыми решениями
            </p>
          </div>
          <Link
            to="/inspiration"
            className="hidden md:flex items-center gap-2 text-foreground font-bold hover:underline transition-colors text-lg"
          >
            Все статьи
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Grid - 6 article cards with photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured large card */}
          <Link to={`/inspiration/${featured.slug}`} className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer block md:col-span-2 md:row-span-2 bg-neutral-200">
            <img
              src={featured.coverImage}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
              <span className="inline-block px-4 py-1.5 bg-white text-foreground text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
                {featured.category}
              </span>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 group-hover:underline underline-offset-2">
                {featured.title}
              </h3>
              <p className="text-white/90 text-base md:text-lg">
                {featured.subtitle}
              </p>
            </div>
          </Link>

          {/* 4 more article cards with covers */}
          {secondary.map((article) => (
            <Link
              key={article.id}
              to={`/inspiration/${article.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer block bg-neutral-200"
            >
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-2">
                  {article.category}
                </span>
                <h3 className="text-white font-bold text-lg md:text-xl leading-tight group-hover:underline underline-offset-2">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <Link
          to="/inspiration"
          className="md:hidden w-full mt-6 flex items-center justify-center gap-2 py-3 text-foreground font-bold"
        >
          Все статьи
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
