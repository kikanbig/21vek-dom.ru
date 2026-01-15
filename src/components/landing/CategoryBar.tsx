import { Percent } from 'lucide-react';

export const CategoryBar = () => {
  return (
    <section className="bg-card border-b border-border/50 sticky top-0 z-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-3">
          <button
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            <Percent className="h-5 w-5" />
            <span>Акции</span>
          </button>
        </div>
      </div>
    </section>
  );
};
