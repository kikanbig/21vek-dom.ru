#!/bin/bash

# Скрипт для применения кастомных модификаций после синхронизации
# Использование: ./scripts/apply-modifications.sh

set -e

echo "🔧 Применение кастомных модификаций..."

if [ ! -f "config/custom-modifications.json" ]; then
    echo "❌ Файл config/custom-modifications.json не найден"
    exit 1
fi

# Применяем модификации из конфигурации
while IFS= read -r modification; do
    id=$(echo "$modification" | sed 's/.*"id": "\([^"]*\)".*/\1/')
    description=$(echo "$modification" | sed 's/.*"description": "\([^"]*\)".*/\1/')
    file=$(echo "$modification" | sed 's/.*"file": "\([^"]*\)".*/\1/')

    echo "📝 Применение: $description"

    # Проверяем существование файла
    if [ ! -f "$file" ]; then
        echo "⚠️  Файл $file не найден, пропускаем..."
        continue
    fi

    # Применяем изменения
    case $id in
        "sets-navigation")
            # Добавляем импорт Link, если его нет
            if ! grep -q "import { Link } from 'react-router-dom';" "$file"; then
                sed -i '' '1a\
import { Link } from '\''react-router-dom'\'';
' "$file"
                echo "  ✅ Добавлен импорт Link"
            fi

            # Оборачиваем кнопку Сеты в Link (десктоп)
            if ! grep -A1 -B1 "Сеты</Button>" "$file" | grep -q "Link to=\"/sets\""; then
                # Находим строку с кнопкой Сеты и оборачиваем её
                sed -i '' 's|<Button variant="ghost" className="text-sm whitespace-nowrap font-semibold">Сеты</Button>|<Link to="/sets">\
            <Button variant="ghost" className="text-sm whitespace-nowrap font-semibold">Сеты</Button>\
          </Link>|g' "$file"
                echo "  ✅ Добавлена навигация для десктоп кнопки Сеты"
            fi
            ;;

        "mobile-sets-navigation")
            # Оборачиваем кнопку Сеты в Link (мобильная версия)
            if ! grep -A1 -B1 "justify-start font-semibold\">Сеты</Button>" "$file" | grep -q "Link to=\"/sets\""; then
                sed -i '' 's|<Button variant="ghost" className="justify-start font-semibold">Сеты</Button>|<Link to="/sets">\
              <Button variant="ghost" className="justify-start font-semibold">Сеты</Button>\
            </Link>|g' "$file"
                echo "  ✅ Добавлена навигация для мобильной кнопки Сеты"
            fi
            ;;
    esac

    echo "  ✅ Модификация $id применена"

done < <(cat config/custom-modifications.json | grep -o '"id": "[^"]*",[^}]*}' | sed 's/,$//')

echo ""
echo "🎉 Все кастомные модификации применены!"
echo "📝 Рекомендуется:"
echo "   npm run build  # Проверить сборку"
echo "   npm run dev    # Протестировать функциональность"
