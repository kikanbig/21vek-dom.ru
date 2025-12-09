# 🚀 Инструкция по деплою проекта 21vek-dom.ru

## 📦 Клонирование репозитория

```bash
# Клонировать проект
git clone https://github.com/kikanbig/21vek-dom.ru.git
cd 21vek-dom.ru

# Установить зависимости
npm install
```

## 🛠️ Локальная разработка

```bash
# Запустить dev-сервер
npm run dev

# Проект будет доступен на http://localhost:5173
```

## 📦 Сборка для продакшена

```bash
# Собрать проект
npm run build

# Результат будет в папке dist/
```

## 🌐 Деплой на собственный домен

### Вариант 1: Статический хостинг (Nginx, Apache)

```bash
# После сборки скопируйте содержимое папки dist/ на сервер
npm run build

# Пример для Nginx
scp -r dist/* user@your-server:/var/www/21vek-dom.ru/

# Настройка Nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/21vek-dom.ru;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Вариант 2: Vercel

```bash
# Установить Vercel CLI
npm install -g vercel

# Деплой
vercel --prod

# Следовать инструкциям для подключения домена
```

### Вариант 3: Netlify

```bash
# Установить Netlify CLI
npm install -g netlify-cli

# Деплой
netlify deploy --prod --dir=dist

# Следовать инструкциям для подключения домена
```

### Вариант 4: Railway (текущий деплой)

```bash
# Установить Railway CLI
npm install -g @railway/cli

# Авторизоваться
railway login

# Создать новый проект
railway init

# Деплой
railway up

# Добавить домен через Railway Dashboard
# https://railway.app/dashboard → Settings → Domains
```

### Вариант 5: Docker

```bash
# Использовать готовый Dockerfile (если есть) или создать:

# Dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Собрать и запустить
docker build -t 21vek-dom .
docker run -p 80:80 21vek-dom
```

## 🔧 Переменные окружения

Если проект использует переменные окружения, создайте файл `.env`:

```bash
# .env
VITE_API_URL=https://your-api.com
VITE_APP_NAME=21vek-dom.ru
```

## 📊 Мониторинг и обновления

### Синхронизация с оригинальными репозиториями

```bash
# Обновить все репозитории
npm run sync:all

# Обновить конкретный репозиторий
npm run sync:hoff  # Главная страница
npm run sync:sets  # Страница сетов

# Проверить статус
npm run sync:status
```

### Автоматическая синхронизация

Проект настроен на автоматическую синхронизацию через GitHub Actions:
- **Ежедневно в 2:00 UTC**
- **Вручную через GitHub Actions** (вкладка Actions → Sync Repositories → Run workflow)

## 🔒 Настройка CI/CD для вашего домена

### GitHub Actions для автоматического деплоя

Создайте файл `.github/workflows/deploy-custom.yml`:

```yaml
name: Deploy to Custom Domain

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to server
        uses: easingthemes/ssh-deploy@main
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          REMOTE_USER: ${{ secrets.REMOTE_USER }}
          TARGET: /var/www/21vek-dom.ru
          SOURCE: dist/
```

## 📞 Контакты и поддержка

- **GitHub Issues**: https://github.com/kikanbig/21vek-dom.ru/issues
- **Документация проекта**: [PROJECT_RULES.md](./PROJECT_RULES.md)
- **README**: [README.md](./README.md)

## 🏗️ Архитектура проекта

Проект представляет собой **мульти-репозиторий конструктор**:

- **Главная страница** (`/`) - из репозитория `hoff-divan-insights`
- **Страница сетов** (`/sets`) - из репозитория `project-2870847f-5dea-434d-9cca-4fbca27ed98e`

Подробности в [PROJECT_RULES.md](./PROJECT_RULES.md)

## 🔄 Обновление проекта

```bash
# Получить последние изменения
git pull origin main

# Установить новые зависимости (если есть)
npm install

# Пересобрать
npm run build

# Задеплоить
# (команда зависит от выбранного метода деплоя)
```

## ⚠️ Важные замечания

1. **Node.js версия**: Требуется Node.js 18 или выше
2. **Сборка**: Всегда используйте `npm run build` для продакшена
3. **Роутинг**: Проект использует React Router - настройте fallback на `index.html`
4. **Синхронизация**: Регулярно запускайте `npm run sync:all` для получения обновлений

## 📈 Рекомендации по производительности

- Используйте CDN для статических файлов
- Включите gzip/brotli сжатие на сервере
- Настройте кэширование для ассетов
- Используйте HTTPS для безопасности

---

**Успешного деплоя! 🚀**

