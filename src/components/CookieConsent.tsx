import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Мы используем cookies
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Этот сайт использует файлы cookie для улучшения работы и повышения эффективности сайта.
              Продолжая использовать сайт, вы соглашаетесь с использованием файлов cookie.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
            >
              Отклонить
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-foreground text-background rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors"
            >
              Принять
            </button>
            <button
              onClick={handleDecline}
              className="p-2 text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
