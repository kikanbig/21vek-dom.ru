#!/bin/bash
# Скрипт ПОЛНОЙ синхронизации с dom.21vek
# Использование: ./sync.sh

set -e

SOURCE="../dom.21vek"
TARGET="."

echo "🔄 Синхронизация с dom.21vek..."

# 1. Получаем последний коммит из dom.21vek
cd "$SOURCE"
git pull origin main
COMMIT=$(git rev-parse --short HEAD)
echo "📌 Коммит dom.21vek: $COMMIT"
cd - > /dev/null

# 2. ПОЛНОСТЬЮ заменяем src/
echo "🗑️  Удаляю старый src/..."
rm -rf "$TARGET/src"

echo "📁 Копирую новый src/..."
cp -r "$SOURCE/src" "$TARGET/"

# 3. Синхронизируем конфиги
echo "⚙️  Синхронизирую конфиги..."
cp "$SOURCE/package.json" "$TARGET/"
cp "$SOURCE/package-lock.json" "$TARGET/"
cp "$SOURCE/vite.config.ts" "$TARGET/"
cp "$SOURCE/tsconfig.json" "$TARGET/"
cp "$SOURCE/tsconfig.app.json" "$TARGET/"
cp "$SOURCE/tsconfig.node.json" "$TARGET/"
cp "$SOURCE/tailwind.config.ts" "$TARGET/" 2>/dev/null || true
cp "$SOURCE/postcss.config.js" "$TARGET/" 2>/dev/null || true
cp "$SOURCE/components.json" "$TARGET/" 2>/dev/null || true
cp "$SOURCE/index.html" "$TARGET/"

# 4. Переустанавливаем зависимости
echo "📦 Устанавливаю зависимости..."
rm -rf node_modules
npm install

# 5. Билд
echo "🔨 Собираю проект..."
npm run build

echo "✅ Синхронизация завершена! Коммит: $COMMIT"
echo ""
echo "Для деплоя выполните:"
echo "  git add -A && git commit -m '🔄 sync dom.21vek ($COMMIT)' && git push && railway up"

