import { SetCard } from "@/components/SetCard";
import { sets } from "@/data/sets";
import cardLP from "@/assets/card-lp.png";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/80">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="flex items-center gap-6">
              <img 
                src={cardLP} 
                alt="Карта Любимый покупатель" 
                className="h-40 w-auto object-contain shadow-lg"
              />
              <img 
                src={logo} 
                alt="21vek.by" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Для держателей карт «Любимый покупатель»
              </h1>
              <p className="text-muted-foreground mb-4">
                Выгодные наборы товаров со скидками до 20%
              </p>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary text-xl">{sets.length}</span> уникальных наборов
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sets.map((set) => (
            <SetCard key={set.id} {...set} />
          ))}
        </div>
      </main>

    </div>
  );
};

export default Index;
