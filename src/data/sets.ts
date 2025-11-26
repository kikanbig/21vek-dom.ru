import {
  Bed,
  ShoppingCart,
  Baby,
  Sparkles,
  Sofa,
  UtensilsCrossed,
  Bath,
  UtensilsCrossed as Dining,
  ChefHat,
  Trees,
  Package,
  Moon,
  Armchair,
  Gamepad2,
  Star,
} from "lucide-react";

import setComfort from "@/assets/set-comfort.jpg";
import setConvenient from "@/assets/set-convenient.jpg";
import setKids from "@/assets/set-kids.jpg";
import setProfitable from "@/assets/set-profitable.jpg";
import setLight from "@/assets/set-light.jpg";
import setTasty from "@/assets/set-tasty.jpg";
import setSantech from "@/assets/set-santech.jpg";
import setDining from "@/assets/set-dining.jpg";
import setKitchen from "@/assets/set-kitchen.jpg";
import setDacha from "@/assets/set-dacha.jpg";
import setPractical from "@/assets/set-practical.jpg";
import setBedroom from "@/assets/set-bedroom.jpg";
import setLiving from "@/assets/set-living.jpg";
import setTeen from "@/assets/set-teen.jpg";
import setMaximum from "@/assets/set-maximum.jpg";

export interface Set {
  id: number;
  title: string;
  subtitle: string;
  discount: string;
  icon: any;
  image: string;
  items: string[];
}

export const sets: Set[] = [
  {
    id: 1,
    title: "Комфортный",
    subtitle: "Сет 1",
    discount: "20%",
    icon: Bed,
    image: setComfort,
    items: [
      "Кровать 160x200 с высокой спинкой",
      "Матрас 160x200 Veluna",
      "2 ортопедические подушки",
    ],
  },
  {
    id: 2,
    title: "Удобный",
    subtitle: "Сет 2",
    discount: "20%",
    icon: Package,
    image: setConvenient,
    items: [
      "Матрас 160х200 Lagoma",
      "Защитный наматрасник 160",
      "2 подушки",
    ],
  },
  {
    id: 3,
    title: "Детский",
    subtitle: "Сет 3",
    discount: "20%",
    icon: Baby,
    image: setKids,
    items: [
      "Матрас 90/80х200 Lagoma",
      "Защитный наматрасник 90/80х200",
      "Подушка детская",
    ],
  },
  {
    id: 4,
    title: "Выгодный",
    subtitle: "Сет 4",
    discount: "10-20%",
    icon: ShoppingCart,
    image: setProfitable,
    items: [
      "Крупная бытовая техника Beko/Indesit",
      "Стол обеденный",
      "4 обеденных стула",
    ],
  },
  {
    id: 5,
    title: "Лёгкий",
    subtitle: "Сет 5",
    discount: "10-20%",
    icon: Sparkles,
    image: setLight,
    items: [
      "2 единицы мелкой бытовой техники",
      "Корпусная мебель (комод)",
      "Стол обеденный",
    ],
  },
  {
    id: 6,
    title: "Вкусный",
    subtitle: "Сет 6",
    discount: "10-20%",
    icon: UtensilsCrossed,
    image: setTasty,
    items: [
      "Техника для кухни Beko/Indesit",
      "Стол обеденный",
      "Посуда для приготовления",
    ],
  },
  {
    id: 7,
    title: "СанТехнологичный",
    subtitle: "Сет 7",
    discount: "20%",
    icon: Bath,
    image: setSantech,
    items: [
      "Душевая кабина 21Vek",
      "Набор сантехники (унитаз-комплект)",
      "Текстиль для ванной",
    ],
  },
  {
    id: 8,
    title: "Обеденный",
    subtitle: "Сет 8",
    discount: "20%",
    icon: Dining,
    image: setDining,
    items: [
      "Стол для гостиной",
      "4 обеденных стула",
      "Посуда для сервировки (4 комплекта)",
    ],
  },
  {
    id: 9,
    title: "Кухонный",
    subtitle: "Сет 9",
    discount: "15-20%",
    icon: ChefHat,
    image: setKitchen,
    items: [
      "Кухня (готовое решение)",
      "Стол обеденный",
      "4 обеденных стула",
    ],
  },
  {
    id: 10,
    title: "Дачный",
    subtitle: "Сет 10",
    discount: "20%",
    icon: Trees,
    image: setDacha,
    items: [
      "2 матраса в скрутке",
      "Комплект садовой мебели 21Vek",
      "4 стула для гостиной",
    ],
  },
  {
    id: 11,
    title: "Практичный",
    subtitle: "Сет 11",
    discount: "20%",
    icon: Package,
    image: setPractical,
    items: [
      "2 единицы текстиля",
      "2 единицы посуды",
      "1 единица сантехники",
      "Любой элемент мебели",
    ],
  },
  {
    id: 12,
    title: "Спальный",
    subtitle: "Сет 12",
    discount: "20%",
    icon: Moon,
    image: setBedroom,
    items: [
      "Комплект спальни (мин. 4 элемента)",
      "Матрас от 140 размера Lagoma/Veluna",
      "Обязательно: кровать, шкаф, комод",
    ],
  },
  {
    id: 13,
    title: "Гостиный",
    subtitle: "Сет 13",
    discount: "20%",
    icon: Armchair,
    image: setLiving,
    items: [
      "Гостиная (мин. 2 элемента)",
      "Диван",
      "Журнальный стол или пуф (опционально)",
    ],
  },
  {
    id: 14,
    title: "Подростковый",
    subtitle: "Сет 14",
    discount: "20%",
    icon: Gamepad2,
    image: setTeen,
    items: [
      "Детская/подростковая (мин. 4 элемента)",
      "Матрас 80/90 Lagoma/Veluna",
      "Обязательно: кровать, шкаф, комод",
    ],
  },
  {
    id: 15,
    title: "Максимальный",
    subtitle: "Сет 15",
    discount: "20%",
    icon: Star,
    image: setMaximum,
    items: [
      "2 единицы БТ Beko/Indesit",
      "Мелкая бытовая техника",
      "Диван",
      "Матрас Lagoma/Veluna",
      "Корпусная мебель",
      "3 единицы сопутствующего товара",
    ],
  },
];
