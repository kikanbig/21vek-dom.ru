import { useState } from 'react';
import { Search, Heart, ShoppingCart, User, Menu, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '@/assets/logo.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Минск</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Доставка и оплата</a>
              <a href="#" className="hover:text-foreground transition-colors">Магазины</a>
              <a href="#" className="hover:text-foreground transition-colors">Для бизнеса</a>
              <a href="#" className="hover:text-foreground transition-colors">+375 (29) 123-45-67</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <a href="/" className="flex items-center gap-3">
              <img src={logo} alt="21vek.by" className="h-12 w-auto" />
            </a>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Поиск мебели..." 
                className="pl-10 bg-muted/50 border-0"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Categories navigation */}
        <nav className="hidden lg:flex items-center gap-1 pb-4 overflow-x-auto">
          <Button variant="ghost" className="text-sm whitespace-nowrap">Диваны</Button>
          <Button variant="ghost" className="text-sm whitespace-nowrap">Кровати</Button>
          <Button variant="ghost" className="text-sm whitespace-nowrap">Столы</Button>
          <Button variant="ghost" className="text-sm whitespace-nowrap">Стулья</Button>
          <Button variant="ghost" className="text-sm whitespace-nowrap">Шкафы</Button>
          <Button variant="ghost" className="text-sm whitespace-nowrap">Кухни</Button>
          <Button variant="ghost" className="text-sm whitespace-nowrap">Гардеробные</Button>
          <Button variant="ghost" className="text-sm whitespace-nowrap">Детская мебель</Button>
          <Button variant="ghost" className="text-sm whitespace-nowrap">Офисная мебель</Button>
          <Button variant="ghost" className="text-sm whitespace-nowrap text-primary">Акции</Button>
          <Button variant="ghost" className="text-sm whitespace-nowrap font-semibold">Сеты</Button>
          <Button variant="ghost" className="text-sm whitespace-nowrap font-semibold">Лоты</Button>
        </nav>
      </div>

      {/* Mobile search */}
      <div className="md:hidden border-t border-border/40 px-4 py-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Поиск мебели..." 
            className="pl-10 bg-muted/50 border-0"
          />
        </div>
      </div>
    </header>
  );
};