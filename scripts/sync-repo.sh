#!/bin/bash

# Скрипт ПОЛНОЙ синхронизации изменений из оригинального репозитория
# Использование: ./scripts/sync-repo.sh <repo-name> [component-name]

set -e

if [ $# -lt 1 ]; then
    echo "Использование: $0 <repo-name> [component-name] | --list | --status"
    echo ""
    echo "Команды:"
    echo "  --list           Показать список всех репозиториев"
    echo "  --status         Показать статус всех репозиториев"
    echo ""
    echo "Примеры:"
    echo "  $0 hoff-divan-insights"
    echo "  $0 sets SetCard"
    echo "  $0 --list"
    exit 1
fi

# Обработка специальных команд
if [ "$1" = "--list" ]; then
    echo "📋 Список репозиториев для синхронизации:"
    echo ""
    if [ -f "config/repos.json" ]; then
        cat config/repos.json | grep -A 2 '"name"' | grep -E '("name"|"description")' | sed 's/.*"name": "\([^"]*\)".*/📦 \1/' | sed 's/.*"description": "\([^"]*\)".*/   └─ \1/'
    else
        echo "❌ Конфигурационный файл config/repos.json не найден"
    fi
    exit 0
elif [ "$1" = "--status" ]; then
    echo "📊 Статус репозиториев:"
    echo ""

    # Проверяем hoff-divan-insights
    if [ -d "../hoff-divan-insights" ]; then
        cd "../hoff-divan-insights"
        last_commit=$(git log --oneline -1 2>/dev/null | head -1)
        cd - > /dev/null
        echo "✅ hoff-divan-insights: $last_commit"
    else
        echo "❌ hoff-divan-insights: Репозиторий не найден локально"
    fi

    # Проверяем sets-repo
    if [ -d "../repos/sets-repo" ]; then
        cd "../repos/sets-repo"
        last_commit=$(git log --oneline -1 2>/dev/null | head -1)
        cd - > /dev/null
        echo "✅ sets-repo: $last_commit"
    else
        echo "❌ sets-repo: Репозиторий не найден локально"
    fi

    echo ""
    echo "📋 Всего репозиториев для синхронизации: 2"
    exit 0
fi

REPO_NAME=$1
COMPONENT_NAME=${2:-""}

echo "🔄 Синхронизация репозитория: $REPO_NAME"

# Определяем правильный путь к репозиторию из конфигурации
REPO_PATH=""
if [ -f "config/repos.json" ]; then
    REPO_PATH=$(cat config/repos.json | grep -A 10 "\"name\": \"$REPO_NAME\"" | grep "localPath" | sed 's/.*"localPath": "\([^"]*\)".*/\1/')

    if [ -z "$REPO_PATH" ]; then
        echo "❌ Репозиторий '$REPO_NAME' не найден в config/repos.json"
        echo "Доступные репозитории:"
        cat config/repos.json | grep '"name"' | sed 's/.*"name": "\([^"]*\)".*/  - \1/'
        exit 1
    fi
else
    # Fallback для обратной совместимости
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
fi

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

# ПОЛНАЯ СИНХРОНИЗАЦИЯ - копируем ВСЁ
echo "🔄 ПОЛНАЯ синхронизация репозитория: $REPO_NAME"

case $REPO_NAME in
    "hoff-divan-insights")
        echo "📋 Копирование ВСЕХ файлов из hoff-divan-insights..."
        # Копируем ВСЕ компоненты
        echo "🔧 Копирование компонентов..."
        cp -r "$REPO_PATH/src/components/"* src/components/ 2>/dev/null || true
        echo "  ✅ Все компоненты скопированы"
        
        # Копируем главную страницу
        echo "📄 Копирование главной страницы..."
        cp "$REPO_PATH/src/pages/Index.tsx" src/pages/ 2>/dev/null || true
        echo "  ✅ Index.tsx скопирован"
        
        # Копируем ассеты
        echo "🖼️ Копирование ассетов..."
        cp -r "$REPO_PATH/src/assets/"* src/assets/ 2>/dev/null || true
        echo "  ✅ Ассеты скопированы"
        ;;

    "sets-repo")
        echo "📋 Копирование файлов из sets-repo..."
        # Копируем компоненты
        echo "🔧 Копирование компонентов..."
        cp "$REPO_PATH/src/components/SetCard.tsx" src/components/ 2>/dev/null || true
        cp "$REPO_PATH/src/components/TopHeader.tsx" src/components/ 2>/dev/null || true
        cp "$REPO_PATH/src/components/BannerCarousel.tsx" src/components/ 2>/dev/null || true
        echo "  ✅ Компоненты скопированы"
        
        # Копируем страницу
        echo "📄 Копирование страницы..."
        cp "$REPO_PATH/src/pages/Index.tsx" src/pages/Sets.tsx 2>/dev/null || true
        echo "  ✅ Index.tsx → Sets.tsx"
        
        # Копируем данные
        echo "📊 Копирование данных..."
        cp "$REPO_PATH/src/data/sets.ts" src/data/ 2>/dev/null || true
        echo "  ✅ sets.ts скопирован"
        
        # Копируем ассеты
        echo "🖼️ Копирование ассетов..."
        cp -r "$REPO_PATH/src/assets/"* src/assets/ 2>/dev/null || true
        echo "  ✅ Ассеты скопированы"
        ;;
esac

# Применяем кастомные модификации после синхронизации
if [ -f "scripts/apply-modifications.sh" ]; then
    echo ""
    echo "🔧 Применение кастомных модификаций..."
    ./scripts/apply-modifications.sh
fi

echo ""
echo "🎉 Синхронизация завершена!"
echo "📝 Не забудьте:"
echo "   1. Протестировать изменения: npm run dev"
echo "   2. Проверить сборку: npm run build"
echo "   3. Закоммитить изменения: git add . && git commit -m 'Sync $REPO_NAME'"
