import { Send } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Navigation links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <a href="https://www.21vek.by/services/delivery.html" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors">Доставка</a>
            <a href="https://www.21vek.by/services/payment.html" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors">Оплата</a>
            <a href="https://www.21vek.by/self_delivery/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors">Самовывоз</a>
            <a href="https://www.21vek.by/contacts/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors">Контакты</a>
            <a href="https://www.21vek.by/services/credit.html" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors">Оплата частями</a>
            <a href="https://www.21vek.by/company/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors">О нас</a>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a href="tel:+375293021021" className="hover:underline">+375 29 302-10-21</a>
            <a href="tel:+375255021021" className="hover:underline">+375 25 502-10-21</a>
            <a href="tel:+375173021021" className="hover:underline">+375 17 302-10-21</a>
            <a href="https://t.me/shop21vek" target="_blank" rel="noopener noreferrer" className="hover:underline">Telegram</a>
            <a href="mailto:info@21vek.by" className="hover:underline">Почта</a>
            <a href="https://www.21vek.by/contacts/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <Send className="h-4 w-4" />
              Написать нам
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
