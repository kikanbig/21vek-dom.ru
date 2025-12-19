import { useState } from 'react';
import { Menu, MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import logo from '@/assets/logo-21vek.png';

export const RegionsHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground/90">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <img src={logo} alt="21vek.by ДОМ" className="h-6 w-auto" />
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>г. Минск</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+375447833254" className="hover:text-white transition-colors">+375 44 783 32 54</a>
                <span className="text-white/50">|</span>
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

      {/* Categories navigation - white background */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <button 
              className="lg:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <nav className="hidden lg:flex items-center gap-2">
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Меню</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-1 mt-6">
            
          </nav>
          <div className="mt-8 pt-6 border-t border-border">
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Телефоны:</span>
                </div>
                <a href="tel:+375447833254" className="ml-6 hover:text-foreground">+375 44 783 32 54</a>
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
