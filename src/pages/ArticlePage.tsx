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
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-neutral-300">
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
        <article className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              to="/inspiration"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors font-medium mb-12 text-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Все статьи
            </Link>

            {/* Intro - large readable text */}
            <p className="text-2xl md:text-3xl font-heading font-semibold text-foreground leading-relaxed mb-16 border-l-4 border-foreground pl-8 text-balance">
              {article.intro}
            </p>

            {/* First image pair - full width */}
            {article.images.length >= 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 -mx-4 md:-mx-0">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img src={article.images[0]} alt="" className="w-full h-full object-cover" loading="eager" />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img src={article.images[1]} alt="" className="w-full h-full object-cover" loading="eager" />
                </div>
              </div>
            )}

            {/* Sections - full articles with large text */}
            {article.sections.map((section, index) => (
              <div key={index} className="mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-6">
                  {section.heading}
                </h2>
                <div className="space-y-6">
                  {section.text.split('\n\n').map((para, i) => (
                    <p key={i} className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Section image - 5-7 photos per article */}
                {(section.image || article.images[index + 2]) && (
                  <div className="mt-10 -mx-4 md:mx-0">
                    <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={section.image || article.images[index + 2]!}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
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
