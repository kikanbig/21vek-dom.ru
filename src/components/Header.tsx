import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import logo from '@/assets/logo-21vek-dom.png';
import { OFFICIAL_DOM_URL } from '@/constants/officialSite';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const articlesActive = location.pathname.startsWith('/inspiration');

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-black/[0.06]">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-14 gap-8">
          <a href={OFFICIAL_DOM_URL} className="flex-shrink-0">
            <img src={logo} alt="21vek.by ДОМ" className="h-7 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center flex-1">
            <Link
              to="/inspiration"
              className={cn(
                'px-3 py-1.5 text-[13px] font-medium rounded-full transition-colors',
                articlesActive
                  ? 'bg-foreground text-background'
                  : 'text-foreground/70 hover:text-foreground hover:bg-black/[0.04]'
              )}
            >
              Статьи
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4 text-[13px] text-foreground/60 flex-shrink-0">
            <a
              href="tel:+375447829302"
              className="hover:text-foreground transition-colors tabular-nums"
            >
              +375 44 782 93 02
            </a>
            <span className="text-foreground/20">|</span>
            <span>Минск, Маяковского 6</span>
          </div>

          <button
            className="lg:hidden ml-auto w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/[0.04] transition-colors"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Открыть контакты"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="left" className="w-[280px] p-0">
          <SheetHeader className="px-5 pt-5 pb-4 border-b border-border/50">
            <SheetTitle>
              <a href={OFFICIAL_DOM_URL} onClick={() => setIsMenuOpen(false)}>
                <img src={logo} alt="21vek.by ДОМ" className="h-6 w-auto" />
              </a>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col py-2 border-b border-border/50">
            <Link
              to="/inspiration"
              onClick={() => setIsMenuOpen(false)}
              className="px-5 py-3 text-[15px] text-foreground/80 hover:bg-black/[0.03] transition-colors"
            >
              Статьи
            </Link>
          </nav>
          <div className="mt-auto border-t border-border/50 px-5 py-4 space-y-2">
            <a
              href="tel:+375447829302"
              className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground"
            >
              <Phone className="h-3.5 w-3.5" />
              +375 44 782 93 02
            </a>
            <a
              href="tel:+375447826715"
              className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground"
            >
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
