#!/bin/bash

# Скрипт для применения кастомных модификаций после синхронизации
# Использование: ./scripts/apply-modifications.sh

set -e

echo "🔧 Применение кастомных модификаций..."

# 1. Исправляем RegionsHeader.tsx - переименовываем export
if [ -f "src/components/RegionsHeader.tsx" ]; then
    if grep -q "export const Header = () => {" "src/components/RegionsHeader.tsx"; then
        sed -i '' 's/export const Header = () => {/export const RegionsHeader = () => {/g' "src/components/RegionsHeader.tsx"
        echo "  ✅ RegionsHeader.tsx: переименован export Header → RegionsHeader"
    fi
fi

# 2. Исправляем Regions.tsx - меняем импорт и использование Header на RegionsHeader
if [ -f "src/pages/Regions.tsx" ]; then
    # Меняем импорт
    if grep -q "import { Header } from '@/components/Header';" "src/pages/Regions.tsx"; then
        sed -i '' "s|import { Header } from '@/components/Header';|import { RegionsHeader } from '@/components/RegionsHeader';|g" "src/pages/Regions.tsx"
        echo "  ✅ Regions.tsx: изменен импорт Header → RegionsHeader"
    fi
    
    # Меняем использование
    if grep -q "<Header />" "src/pages/Regions.tsx"; then
        sed -i '' 's|<Header />|<RegionsHeader />|g' "src/pages/Regions.tsx"
        echo "  ✅ Regions.tsx: изменено использование <Header /> → <RegionsHeader />"
    fi
fi

# 3. Исправляем OpeningHeader.tsx - переименовываем export
if [ -f "src/components/OpeningHeader.tsx" ]; then
    if grep -q "export const Header = () => {" "src/components/OpeningHeader.tsx"; then
        sed -i '' 's/export const Header = () => {/export const OpeningHeader = () => {/g' "src/components/OpeningHeader.tsx"
        echo "  ✅ OpeningHeader.tsx: переименован export Header → OpeningHeader"
    fi
fi

# 4. Исправляем Opening.tsx - меняем импорт и использование Header на OpeningHeader
if [ -f "src/pages/Opening.tsx" ]; then
    # Меняем импорт
    if grep -q "import { Header } from '@/components/Header';" "src/pages/Opening.tsx"; then
        sed -i '' "s|import { Header } from '@/components/Header';|import { OpeningHeader } from '@/components/OpeningHeader';|g" "src/pages/Opening.tsx"
        echo "  ✅ Opening.tsx: изменен импорт Header → OpeningHeader"
    fi
    
    # Меняем использование
    if grep -q "<Header />" "src/pages/Opening.tsx"; then
        sed -i '' 's|<Header />|<OpeningHeader />|g' "src/pages/Opening.tsx"
        echo "  ✅ Opening.tsx: изменено использование <Header /> → <OpeningHeader />"
    fi
fi

# 5. Добавляем навигацию для кнопки "Сеты" в Header.tsx
if [ -f "src/components/Header.tsx" ]; then
    # Добавляем импорт Link, если его нет
    if ! grep -q "import { Link } from 'react-router-dom';" "src/components/Header.tsx"; then
        sed -i '' '/import { useState } from '\''react'\'';/a\
import { Link } from '\''react-router-dom'\'';' "src/components/Header.tsx"
        echo "  ✅ Header.tsx: добавлен импорт Link"
    fi

    # Оборачиваем кнопку Сеты в Link (десктоп версия)
    if ! grep -B1 'font-semibold">Сеты</Button>' "src/components/Header.tsx" | grep -q "Link to=\"/sets\""; then
        sed -i '' 's|<Button variant="ghost" className="text-sm whitespace-nowrap font-semibold">Сеты</Button>|<Link to="/sets"><Button variant="ghost" className="text-sm whitespace-nowrap font-semibold">Сеты</Button></Link>|g' "src/components/Header.tsx"
        echo "  ✅ Header.tsx: добавлена навигация для десктоп кнопки Сеты"
    fi
    
    # Оборачиваем кнопку Сеты в Link (мобильная версия)
    if ! grep -B1 'justify-start font-semibold">Сеты</Button>' "src/components/Header.tsx" | grep -q "Link to=\"/sets\""; then
        sed -i '' 's|<Button variant="ghost" className="justify-start font-semibold">Сеты</Button>|<Link to="/sets"><Button variant="ghost" className="justify-start font-semibold">Сеты</Button></Link>|g' "src/components/Header.tsx"
        echo "  ✅ Header.tsx: добавлена навигация для мобильной кнопки Сеты"
    fi
fi

echo ""
echo "🎉 Все кастомные модификации применены!"
