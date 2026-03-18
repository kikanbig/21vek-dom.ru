import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
          {/* Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-4">
              Обработка файлов cookie
            </h1>
            <p className="text-lg text-muted-foreground">
              ООО «ТРИОВИСТ»
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Что такое файлы cookie?</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Файлы cookie — это текстовые файлы, сохраненные в браузере компьютера (мобильного устройства) пользователя официального интернет-сайта ООО «Триовист» при его посещении с целью отражения совершенных действий.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Файлы cookie могут собираться, систематизироваться, храниться, изменяться, использоваться, обезличиваться, блокироваться, удаляться с использованием средств автоматизации.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Целью обработки файлов cookie является обеспечение корректного и безопасного использования предлагаемых на сайте возможностей и услуг, удобства пользователей сайта, повышение качества его функционирования, создания персонализированной рекламы и сбора аналитической информации.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                ООО «Триовист» не использует файлы cookie для идентификации субъектов персональных данных.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Какие файлы cookie и для чего мы обрабатываем?</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                На сайте обрабатываются следующие типы файлов cookie:
              </p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-foreground/40 mt-1">—</span>
                  <span><strong>Необходимые файлы cookie</strong> — используются для функционирования корректной работы сайта, не могут быть отключены в наших системах (вместе с тем, пользователь может настроить браузер, чтобы он блокировал такие файлы cookie или уведомлял пользователя об их использовании — но в таком случае некоторые разделы сайта могут не работать);</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground/40 mt-1">—</span>
                  <span><strong>Функциональные файлы cookie</strong> — являются критически важными для работы отдельных страниц сайта и обеспечивают работу полезных функций;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-foreground/40 mt-1">—</span>
                  <span><strong>Рекламные файлы cookie</strong> — могут использоваться для сбора данных об интересах пользователей, посещаемых страницах для целей маркетинга и улучшения качества рекламы, в том числе для предоставление более актуального контента и персонализации рекламных предложений.</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Как долго мы обрабатываем файлы cookie?</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Срок, на который дается согласие пользователем сайта в отношении обработки файлов cookie, составляет один год. Вместе с тем, с целью соблюдения безызбыточности обработки файлов cookie, основная их часть обрабатывается не более одного дня, после чего файлы cookie удаляются с помощью использования средств автоматизации.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Как можно настроить обработку файлов cookie?</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Пользователи могут принять или отклонить обработку функциональных и рекламных файлов cookie на сайте, обработку необходимых файлов cookie пользователь может настроить у себя в браузере, при этом корректная работа сайта возможна только в случае использования необходимых файлов cookie.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                В настройках своего браузера пользователи могут регулировать сбор всех или некоторых файлов cookie, некоторые браузеры позволяют посещать интернет-сайты в режиме «инкогнито», чтобы ограничить хранимый на компьютере объем информации и автоматически удалять некоторые типы файлов cookie.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Кроме того, пользователь может удалить ранее сохраненные файлы cookie, выбрав соответствующую опцию в истории браузера.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Подробнее о параметрах управления файлов cookie можно ознакомиться на страницах сайтов основных браузеров:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li><a href="https://support.mozilla.org/ru/kb/udalenie-kukov-dlya-udaleniya-informacii-kotoruyu-" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Firefox</a></li>
                <li><a href="https://support.google.com/chrome/answer/95647?hl=ru" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Chrome</a></li>
                <li><a href="https://support.apple.com/ru-ru/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Safari</a></li>
                <li><a href="https://help.opera.com/ru/latest/web-preferences/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Opera</a></li>
                <li><a href="https://support.microsoft.com/ru-ru/microsoft-edge/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Microsoft Edge</a></li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Что делать, если остались вопросы?</h2>
              <p className="text-foreground/80 leading-relaxed">
                Пользователь всегда может направить сообщение с имеющимся у него вопросом, в части использования ООО «Триовист» файлов cookie, на электронную почту{' '}
                <a href="mailto:pd@21vek.by" className="text-foreground hover:underline">pd@21vek.by</a>
              </p>
            </section>

            <div className="border-t border-border pt-8 mt-12">
              <p className="text-sm text-muted-foreground">
                © 2004–2026 21vek.by, Общество с ограниченной ответственностью «Триовист»<br />
                Юр.адрес: 220020, Минск, пр. Победителей, 100, оф. 203<br />
                E-mail: 21@21vek.by
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
