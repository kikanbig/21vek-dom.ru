import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { getArticleBySlug } from '@/data/articles';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-black text-foreground mb-4">Статья не найдена</h1>
            <Link to="/inspiration" className="text-foreground/60 hover:text-foreground underline">
              Вернуться к статьям
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-10 md:pb-14 text-center max-w-3xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">
                {article.category} · {article.readTime} чтения
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight mb-3">
                {article.title}
              </h1>
              <p className="text-base md:text-lg text-white/70">
                {article.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-2xl mx-auto">
            {/* Back link */}
            <Link
              to="/inspiration"
              className="inline-flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors font-medium mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Все статьи
            </Link>

            {/* Intro */}
            <p className="text-xl md:text-2xl font-heading font-semibold text-foreground leading-relaxed mb-12 border-l-4 border-foreground pl-6">
              {article.intro}
            </p>

            {/* First image pair */}
            {article.images.length >= 2 && (
              <div className="grid grid-cols-2 gap-3 mb-12 -mx-4 md:-mx-12">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img src={article.images[0]} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img src={article.images[1]} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            )}

            {/* Sections */}
            {article.sections.map((section, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-2xl md:text-3xl font-heading font-black text-foreground mb-4">
                  {section.heading}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {section.text}
                </p>

                {/* Insert image after 2nd section */}
                {index === 1 && article.images.length >= 3 && (
                  <div className="mt-8 -mx-4 md:-mx-12">
                    <div className="aspect-[16/9] rounded-xl overflow-hidden">
                      <img src={article.images[2]} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                )}

                {/* Insert image after last section */}
                {index === article.sections.length - 1 && article.images.length >= 4 && (
                  <div className="mt-8 -mx-4 md:-mx-12">
                    <div className="aspect-[16/9] rounded-xl overflow-hidden">
                      <img src={article.images[3]} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Closing CTA */}
            <div className="border-t border-border pt-10 mt-12 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-3">
                21vek.by ДОМ
              </p>
              <p className="text-lg font-bold text-foreground mb-2">
                Приходите за вдохновением
              </p>
              <p className="text-muted-foreground mb-6">
                📍 ул. Маяковского 6, ТРЦ «Червенский»
              </p>
              <Link
                to="/inspiration"
                className="inline-flex items-center gap-2 text-foreground font-bold hover:underline"
              >
                ← Все статьи
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;
