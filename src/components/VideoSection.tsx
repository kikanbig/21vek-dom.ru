export const VideoSection = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Video */}
        <div className="w-full lg:w-1/2">
          <video 
            className="w-full rounded-lg shadow-lg"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/opening.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
        
        {/* Text area */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            Новое открытие: магазин <span className="text-primary">21Vek.by ДОМ</span> в ТЦ "ЧЕРВЕНСКИЙ"
          </h2>
          
          <p className="text-muted-foreground leading-relaxed">
            6 декабря состоялось долгожданное событие для всех ценителей комфорта и стиля — открытие нового магазина <span className="text-primary">21Vek.by ДОМ</span> в торговом центре "ЧЕРВЕНСКИЙ".
          </p>

          <div className="space-y-4">
            <h3 className="inline-block bg-primary text-primary-foreground px-2 py-1 text-xl font-bold">
              Пространство для вдохновения
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Новый магазин — это не просто торговая точка, а настоящий шоурум современных интерьерных решений. Здесь представлены:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span><strong className="text-primary">Современная мебель</strong> для создания уютной атмосферы</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span><strong className="text-primary">Стильная бытовая техника</strong>, которая станет украшением любой кухни</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span><strong className="text-primary">Декоративное освещение</strong> для создания идеального настроения</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span><strong className="text-primary">Системы умного дома</strong> для современного образа жизни</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span><strong className="text-primary">Текстиль и аксессуары</strong> для завершения интерьерного образа</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span><strong className="text-primary">Готовые интерьерные решения</strong> для разных стилей и бюджетов</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="inline-block bg-primary text-primary-foreground px-2 py-1 text-xl font-bold">
              Консультанты, которым можно доверять
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Наши специалисты всегда рады помочь с выбором, ответить на вопросы и поделиться полезными советами. Мы ценим комфорт каждого покупателя — никакого навязывания, только профессиональная поддержка тогда, когда она вам нужна.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="inline-block bg-primary text-primary-foreground px-2 py-1 text-xl font-bold">
              Увидеть. Прикоснуться. Влюбиться.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Посетите экспозицию готовых интерьерных решений, где каждый предмет можно увидеть в действии и в контексте реального интерьера.
            </p>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Адрес:</strong> г. Минск, ул. Маяковского, 6<br />
              ТЦ "ЧЕРВЕНСКИЙ"
            </p>
            <p className="mt-4 text-foreground font-medium">
              Приходите за вдохновением и воплощайте дом своей мечты вместе с <span className="text-primary">21Vek.by ДОМ</span>!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};