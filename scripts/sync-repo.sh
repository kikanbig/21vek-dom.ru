#!/bin/bash

# Скрипт синхронизации изменений из оригинального репозитория
# Использование: ./scripts/sync-repo.sh <repo-name> [component-name]

set -e

if [ $# -lt 1 ]; then
    echo "Использование: $0 <repo-name> [component-name]"
    echo "Примеры:"
    echo "  $0 hoff-divan-insights"
    echo "  $0 sets SetCard"
    exit 1
fi

REPO_NAME=$1
COMPONENT_NAME=${2:-""}

echo "🔄 Синхронизация репозитория: $REPO_NAME"

# Определяем правильный путь к репозиторию
REPO_PATH=""
case $REPO_NAME in
    "hoff-divan-insights")
        REPO_PATH="../hoff-divan-insights"
        ;;
    "sets-repo")
        REPO_PATH="../repos/sets-repo"
        ;;
    *)
        echo "❌ Неизвестный репозиторий: $REPO_NAME"
        echo "Доступные: hoff-divan-insights, sets-repo"
        exit 1
        ;;
esac

# Проверяем, что репозиторий существует
if [ ! -d "$REPO_PATH" ]; then
    echo "❌ Репозиторий $REPO_PATH не найден"
    exit 1
fi

cd "$REPO_PATH"

# Получаем последние изменения
echo "📥 Получение последних изменений..."
git fetch origin
git pull origin main

cd - > /dev/null

echo "✅ Репозиторий обновлен"

# Если указан конкретный компонент, копируем только его
if [ -n "$COMPONENT_NAME" ]; then
    echo "🔄 Синхронизация компонента: $COMPONENT_NAME"

    case $REPO_NAME in
        "hoff-divan-insights")
            # Копируем компоненты из hoff-divan-insights
            if [ -f "$REPO_PATH/src/components/$COMPONENT_NAME.tsx" ]; then
                cp "$REPO_PATH/src/components/$COMPONENT_NAME.tsx" "src/components/"
                echo "✅ Компонент $COMPONENT_NAME обновлен"
            else
                echo "❌ Компонент $COMPONENT_NAME не найден в репозитории"
                exit 1
            fi
            ;;

        "sets-repo")
            # Копируем компоненты из sets репозитория
            if [ "$COMPONENT_NAME" = "SetCard" ]; then
                cp "$REPO_PATH/src/components/SetCard.tsx" "src/components/"
                cp "$REPO_PATH/src/data/sets.ts" "src/data/"
                echo "✅ Компонент SetCard и данные обновлены"
            else
                echo "❌ Неизвестный компонент: $COMPONENT_NAME"
                exit 1
            fi
            ;;
    esac
else
    echo "🔄 Полная синхронизация репозитория: $REPO_NAME"

    case $REPO_NAME in
        "hoff-divan-insights")
            # Синхронизируем hoff-divan-insights (главная страница)
            echo "📋 Синхронизация главной страницы..."

            # Копируем компоненты
            cp "$REPO_PATH/src/components/Header.tsx" src/components/
            cp "$REPO_PATH/src/components/HeroSection.tsx" src/components/
            cp "$REPO_PATH/src/components/CategoryGrid.tsx" src/components/
            cp "$REPO_PATH/src/components/ProductsSection.tsx" src/components/
            cp "$REPO_PATH/src/components/Footer.tsx" src/components/

            # Копируем ассеты (если они изменились)
            cp -r "$REPO_PATH/src/assets/*" src/assets/ 2>/dev/null || true

            echo "✅ Главная страница синхронизирована"
            ;;

        "sets-repo")
            # Синхронизируем sets репозиторий
            echo "📋 Синхронизация страницы сетов..."

            cp "$REPO_PATH/src/components/SetCard.tsx" src/components/
            cp "$REPO_PATH/src/data/sets.ts" src/data/
            cp -r "$REPO_PATH/src/assets/*" src/assets/ 2>/dev/null || true

            echo "✅ Страница сетов синхронизирована"
            ;;
    esac
fi

echo ""
echo "🎉 Синхронизация завершена!"
echo "📝 Не забудьте:"
echo "   1. Протестировать изменения: npm run dev"
echo "   2. Проверить сборку: npm run build"
echo "   3. Закоммитить изменения: git add . && git commit -m 'Sync $REPO_NAME'"
