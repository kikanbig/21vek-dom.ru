import { Link } from 'react-router-dom';
import type { Article } from '@/data/articles';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link
      to={`/inspiration/${article.slug}`}
      className="group block"
    >
      <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-3">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        
        {/* Category */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold uppercase tracking-widest bg-white text-foreground px-2.5 py-1 rounded-full">
            {article.category}
          </span>
        </div>
        
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-sm md:text-base leading-tight line-clamp-2 group-hover:underline underline-offset-2">
            {article.title}
          </h3>
          <p className="text-white/60 text-xs mt-1">{article.readTime} чтения</p>
        </div>
      </div>
    </Link>
  );
};
