import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import logo from '@/assets/logo-21vek-dom.png';

const NAV_ITEMS = [
  { to: '/shop', label: 'Каталог', exact: true },
  { to: '/shop/furniture', label: 'Мебель' },
  { to: '/shop/home', label: 'Для дома' },
  { to: '/promos', label: 'Акции' },
  { to: '/inspiration', label: 'Идеи' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-black/[0.06]">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-14 gap-8">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="21vek.by ДОМ" className="h-7 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1">
            {NAV_ITEMS.map(item => {
              const isActive = item.exact
                ? location.pathname === item.to
                : location.pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    'px-3 py-1.5 text-[13px] font-medium rounded-full transition-colors',
                    isActive
                      ? 'bg-foreground text-background'
                      : 'text-foreground/70 hover:text-foreground hover:bg-black/[0.04]'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop contacts */}
          <div className="hidden lg:flex items-center gap-4 text-[13px] text-foreground/60">
            <a href="tel:+375447829302" className="hover:text-foreground transition-colors tabular-nums">
              +375 44 782 93 02
            </a>
            <span className="text-foreground/20">|</span>
            <span>Минск, Маяковского 6</span>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden ml-auto w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/[0.04] transition-colors"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="left" className="w-[280px] p-0">
          <SheetHeader className="px-5 pt-5 pb-4 border-b border-border/50">
            <SheetTitle>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img src={logo} alt="21vek.by ДОМ" className="h-6 w-auto" />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col py-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="px-5 py-3 text-[15px] text-foreground/80 hover:bg-black/[0.03] transition-colors"
            >
              Главная
            </Link>
            {NAV_ITEMS.map(item => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className="px-5 py-3 text-[15px] text-foreground/80 hover:bg-black/[0.03] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto border-t border-border/50 px-5 py-4 space-y-2">
            <a href="tel:+375447829302" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground">
              <Phone className="h-3.5 w-3.5" />
              +375 44 782 93 02
            </a>
            <a href="tel:+375447826715" className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground">
              <Phone className="h-3.5 w-3.5" />
              +375 44 782 67 15
            </a>
            <p className="text-xs text-foreground/40 pt-1">
              Минск, ул. Маяковского 6 · 10:00–22:00
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
