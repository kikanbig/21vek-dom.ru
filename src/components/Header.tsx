import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, MapPin, Phone, Clock, Sofa, Home, ShoppingBag, Sparkles, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo-21vek.png';

const NAV_ITEMS = [
  { to: '/shop', label: 'Каталог', icon: ShoppingBag },
  { to: '/shop/furniture', label: 'Мебель', icon: Sofa },
  { to: '/shop/home', label: 'Для дома', icon: Home },
  { to: '/promos', label: 'Акции', icon: Sparkles },
  { to: '/inspiration', label: 'Идеи', icon: Newspaper },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground/90">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3 md:gap-4">
              <Link to="/" className="flex-shrink-0 -my-1 py-1 pr-2 touch-manipulation">
                <img src={logo} alt="21vek.by ДОМ" className="h-6 md:h-6 w-auto hover:opacity-80 transition-opacity" />
              </Link>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden sm:inline">Минск, ул. Маяковского, 6</span>
                <span className="sm:hidden">г. Минск</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+375447829302" className="hover:text-white transition-colors">+375 44 782 93 02</a>
                <span className="text-white/50">|</span>
                <a href="tel:+375447826715" className="hover:text-white transition-colors">+375 44 782 67 15</a>
              </div>
              <div className="flex items-center gap-1 text-white/70">
                <Clock className="h-4 w-4" />
                <span>с 10:00 до 22:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <button 
              className="lg:hidden text-foreground p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map(item => {
                const isActive = item.to === '/shop'
                  ? location.pathname === '/shop'
                  : location.pathname.startsWith(item.to);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-muted'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img src={logo} alt="21vek.by ДОМ" className="h-8 w-auto hover:opacity-80 transition-opacity" />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 mt-6">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className="py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >
              Главная
            </Link>
            {NAV_ITEMS.map(item => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                >
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Телефоны:</span>
                </div>
                <a href="tel:+375447829302" className="ml-6 hover:text-foreground">+375 44 782 93 02</a>
                <a href="tel:+375447826715" className="ml-6 hover:text-foreground">+375 44 782 67 15</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                с 10:00 до 22:00
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
