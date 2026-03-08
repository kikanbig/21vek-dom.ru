import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '@/data/articles';

export const InspirationSection = () => {
  const featured = articles[0];
  const secondary = articles.slice(1, 3);

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
              Вдохновляйтесь советами дизайнеров и готовыми решениями
            </p>
          </div>
          <Link
            to="/inspiration"
            className="hidden md:flex items-center gap-2 text-foreground font-bold hover:underline transition-colors"
          >
            Все статьи
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured large card */}
          <Link to={`/inspiration/${featured.slug}`} className="group relative rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3] cursor-pointer block">
            <img
              src={featured.coverImage}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="inline-block px-3 py-1 bg-white text-foreground text-xs font-bold rounded-full mb-3 uppercase tracking-wide">
                {featured.category}
              </span>
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2 group-hover:underline underline-offset-2">
                {featured.title}
              </h3>
              <p className="text-white/75 text-sm">
                {featured.subtitle}
              </p>
            </div>
          </Link>

          {/* Two smaller cards */}
          <div className="grid grid-cols-2 gap-4">
            {secondary.map((article) => (
              <Link
                key={article.id}
                to={`/inspiration/${article.slug}`}
                className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer block"
              >
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">
                    {article.category}
                  </span>
                  <h3 className="text-white font-semibold text-sm md:text-base leading-tight group-hover:underline underline-offset-2">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
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
