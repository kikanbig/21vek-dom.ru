import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="bg-[rgb(127,0,88)] text-white text-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Left side - City */}
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="hidden sm:inline">г. Минск</span>
          </div>

          {/* Center - Links */}
          <div className="flex items-center gap-6">
            <a href="#sets" className="hover:opacity-80 transition-opacity font-medium">
              Сеты
            </a>
            <a href="#lots" className="hover:opacity-80 transition-opacity font-medium">
              Лоты
            </a>
            <a href="#sales" className="hover:opacity-80 transition-opacity font-medium">
              Акции
            </a>
          </div>

          {/* Right side - Contacts */}
          <div className="flex items-center gap-4">
            <a href="https://t.me/shop21vek" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Telegram</span>
            </a>
            <a href="tel:+375293021021" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">+375 29 302 10 21</span>
            </a>
            <div className="hidden lg:flex items-center gap-1 text-white/80">
              <Clock className="h-4 w-4" />
              <span>с 8:00 до 22:00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
