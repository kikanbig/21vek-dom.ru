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
  Infinity,
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
import setUnlimited from "@/assets/set-unlimited.jpg";

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
    discount: "7-15%",
    icon: Bed,
    image: setComfort,
    items: [
      "Кровать 160x200 с высокой спинкой (скидка 7%)",
      "Матрас 160x200 Veluna (скидка 15%)",
      "2 ортопедические подушки (скидка 7%)",
    ],
  },
  {
    id: 2,
    title: "Удобный",
    subtitle: "Сет 2",
    discount: "7-10%",
    icon: Package,
    image: setConvenient,
    items: [
      "Матрас 160х200 Lagoma (скидка 10%)",
      "Защитный наматрасник 160 (скидка 7%)",
      "2 подушки (скидка 7%)",
    ],
  },
  {
    id: 3,
    title: "Детский",
    subtitle: "Сет 3",
    discount: "7-10%",
    icon: Baby,
    image: setKids,
    items: [
      "Матрас 90/80х200 Lagoma (скидка 10%)",
      "Защитный наматрасник 90/80х200 (скидка 7%)",
      "Подушка детская (скидка 7%)",
    ],
  },
  {
    id: 4,
    title: "Выгодный",
    subtitle: "Сет 4",
    discount: "7-15%",
    icon: ShoppingCart,
    image: setProfitable,
    items: [
      "Крупная бытовая техника Beko/Indesit (скидка 7%)",
      "Стол обеденный (скидка 15%)",
      "4 обеденных стула (скидка 15%)",
    ],
  },
  {
    id: 5,
    title: "Лёгкий",
    subtitle: "Сет 5",
    discount: "7-10%",
    icon: Sparkles,
    image: setLight,
    items: [
      "2 единицы мелкой бытовой техники Beko/Indesit (скидка 7%)",
      "Малогабаритный элемент мебели (комод) (скидка 10%)",
      "Стол обеденный (скидка 10%)",
    ],
  },
  {
    id: 6,
    title: "Вкусный",
    subtitle: "Сет 6",
    discount: "7-10%",
    icon: UtensilsCrossed,
    image: setTasty,
    items: [
      "Техника для кухни Beko/Indesit (скидка 7%)",
      "Стол обеденный (скидка 10%)",
      "Набор посуды для приготовления (скидка 10%)",
    ],
  },
  {
    id: 7,
    title: "СанТехнологичный",
    subtitle: "Сет 7",
    discount: "15%",
    icon: Bath,
    image: setSantech,
    items: [
      "Душевая кабина 21Vek (скидка 15%)",
      "Набор сантехники (унитаз-комплект) (скидка 15%)",
      "Набор текстиля для ванной (скидка 15%)",
    ],
  },
  {
    id: 8,
    title: "Обеденный",
    subtitle: "Сет 8",
    discount: "10%",
    icon: Dining,
    image: setDining,
    items: [
      "Стол для гостиной (скидка 10%)",
      "4 обеденных стула (скидка 10%)",
      "Набор посуды для сервировки (скидка 10%)",
    ],
  },
  {
    id: 9,
    title: "Кухонный",
    subtitle: "Сет 9",
    discount: "10%",
    icon: ChefHat,
    image: setKitchen,
    items: [
      "Кухня (готовое решение) (скидка 10%)",
      "Стол обеденный (скидка 10%)",
      "4 обеденных стула (скидка 10%)",
    ],
  },
  {
    id: 10,
    title: "Дачный",
    subtitle: "Сет 10",
    discount: "10-15%",
    icon: Trees,
    image: setDacha,
    items: [
      "2 матраса в скрутке Lagoma (скидка 10%)",
      "Комплект садовой мебели 21Vek (скидка 15%)",
      "4 стула для гостиной (скидка 10%)",
    ],
  },
  {
    id: 11,
    title: "Практичный",
    subtitle: "Сет 11",
    discount: "10%",
    icon: Package,
    image: setPractical,
    items: [
      "4 единицы текстиля (скидка 10%)",
      "4 единицы посуды для сервировки (скидка 10%)",
      "1 единица сантехники (скидка 10%)",
      "Любой элемент мебели (скидка 10%)",
    ],
  },
  {
    id: 12,
    title: "Спальный",
    subtitle: "Сет 12",
    discount: "10-15%",
    icon: Moon,
    image: setBedroom,
    items: [
      "Комплект спальни (мин. 4 элемента) (скидка 10%)",
      "Матрас от 140 размера Lagoma/Veluna (скидка 15%)",
      "Обязательно: кровать, шкаф, комод",
    ],
  },
  {
    id: 13,
    title: "Гостиный",
    subtitle: "Сет 13",
    discount: "7-10%",
    icon: Armchair,
    image: setLiving,
    items: [
      "Гостиная (мин. 2 элемента) (скидка 10%)",
      "Диван (скидка 7%)",
      "Журнальный стол или пуф (опционально)",
    ],
  },
  {
    id: 14,
    title: "Подростковый",
    subtitle: "Сет 14",
    discount: "10-15%",
    icon: Gamepad2,
    image: setTeen,
    items: [
      "Детская/подростковая (мин. 4 элемента) (скидка 10%)",
      "Матрас 80/90 Lagoma/Veluna (скидка 15%)",
      "Обязательно: кровать, шкаф, комод",
    ],
  },
  {
    id: 15,
    title: "Максимальный",
    subtitle: "Сет 15",
    discount: "7-15%",
    icon: Star,
    image: setMaximum,
    items: [
      "2 единицы БТ Beko/Indesit (скидка 7%)",
      "Мелкая бытовая техника (скидка 7%)",
      "Диван (скидка 7%)",
      "Матрас Lagoma/Veluna (скидка 15%)",
      "Корпусная мебель (скидка 10%)",
      "3 единицы сопутствующего товара (скидка 10%)",
    ],
  },
  {
    id: 16,
    title: "Безграничный",
    subtitle: "Сет 16",
    discount: "15%",
    icon: Infinity,
    image: setUnlimited,
    items: [
      "Выбери на сайте 21vek.by любые товары, которых нет в магазине на сумму от 1500 рублей",
      "Оформи заказ в магазине по цене онлайна",
      "Получи скидку на ВСЁ - 15%",
    ],
  },
];
