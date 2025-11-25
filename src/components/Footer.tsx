import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div>
            <a href="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="21vek.by" className="h-12 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              Качественная мебель для вашего дома по доступным ценам
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h3 className="font-heading font-bold mb-4">Каталог</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Диваны</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Кровати</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Столы и стулья</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Шкафы</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Кухни</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Детская мебель</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-heading font-bold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">О компании</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Гарантия</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Возврат товара</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Акции</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-heading font-bold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+375291234567" className="hover:text-primary transition-colors">
                    +375 (29) 123-45-67
                  </a>
                  <p className="text-muted-foreground">Ежедневно 9:00 - 21:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:info@21vek.by" className="hover:text-primary transition-colors">
                  info@21vek.by
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Минск, пр-т Независимости, д. 1
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © 2025 21vek.by. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};