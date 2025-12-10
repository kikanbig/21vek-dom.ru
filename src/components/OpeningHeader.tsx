import { useState } from 'react';
import { Menu, MapPin, Phone, Clock } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import logo from '@/assets/logo-21vek.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-[hsl(318,100%,18%)] text-white/90">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <img src={logo} alt="21vek.by ДОМ" className="h-6 w-auto" />
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>г. Минск</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+375293021021" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                +375 29 302 10 21
              </a>
              <div className="flex items-center gap-1 text-white/70">
                <Clock className="h-4 w-4" />
                <span>с 8:00 до 22:00</span>
              </div>
            </div>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Контакты</SheetTitle>
          </SheetHeader>
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+375293021021" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +375 29 302 10 21
              </a>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                с 8:00 до 22:00
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};