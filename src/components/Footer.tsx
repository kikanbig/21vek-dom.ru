import { Link } from 'react-router-dom';
import logo from '@/assets/logo-21vek-dom.png';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/[0.06] mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="21vek.by ДОМ" className="h-6 w-auto" />
          </Link>

          <div className="flex flex-col lg:flex-row justify-between gap-6">
            {/* Navigation links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-foreground/50">
              <a href="https://www.21vek.by/services/delivery.html" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Доставка</a>
              <a href="https://www.21vek.by/self_delivery/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Самовывоз</a>
              <a href="https://www.21vek.by/contacts/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Контакты</a>
              <a href="https://www.21vek.by/services/credit.html" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Оплата частями</a>
              <a href="https://www.21vek.by/company/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">О нас</a>
            </div>

            {/* Contact info */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-foreground/50">
              <a href="tel:+375447829302" className="hover:text-foreground transition-colors tabular-nums">+375 44 782 93 02</a>
              <a href="tel:+375447826715" className="hover:text-foreground transition-colors tabular-nums">+375 44 782 67 15</a>
              <a href="https://t.me/+375447829302" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Telegram</a>
              <a href="viber://chat?number=%2B375447829302" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Viber</a>
            </div>
          </div>

          <div className="pt-4 border-t border-black/[0.04] text-[11px] text-foreground/25">
            Минск, ул. Маяковского 6 · 10:00–22:00
          </div>
        </div>
      </div>
    </footer>
  );
};
