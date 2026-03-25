import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles, getArticleCategories } from '@/data/articles';
import { ArticleCard } from '@/components/inspiration/ArticleCard';

const InspirationPage = () => {
  const categories = getArticleCategories();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Header */}
          <Link
            to="/promos"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Все акции
          </Link>

          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-3">
              21vek.by ДОМ · Блог
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-foreground mb-4">
              Идеи для интерьера
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Вдохновляйтесь готовыми проектами, советами дизайнеров и практическими руководствами
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === null
                  ? 'bg-foreground text-background'
                  : 'bg-muted text-foreground/60 hover:bg-foreground/10'
              }`}
            >
              Все
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-foreground text-background'
                    : 'bg-muted text-foreground/60 hover:bg-foreground/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InspirationPage;
