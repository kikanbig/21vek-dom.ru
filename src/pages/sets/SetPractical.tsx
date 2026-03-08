import setImage from '@/assets/promos/set-practical.jpg';
import textileImage from '@/assets/sets/set-practical-textile.jpg';
import dishesImage from '@/assets/sets/set-practical-dishes.jpg';
import plumbingImage from '@/assets/sets/set-practical-plumbing.jpg';
import furnitureImage from '@/assets/sets/set-practical-furniture.jpg';
import { SetPageLayout } from '@/components/sets/SetPageLayout';

const SetPractical = () => {
  const items = [
    {
      name: 'Текстиль',
      description: 'Любые товары из ассортимента 21vek.by и 21vek.by ДОМ',
      quantity: 4,
      discount: '10%',
      image: textileImage,
    },
    {
      name: 'Посуда для сервировки',
      description: 'Любые товары из ассортимента 21vek.by и 21vek.by ДОМ поштучно',
      quantity: 4,
      discount: '15%',
      image: dishesImage,
    },
    {
      name: 'Сантехника',
      description: 'Любой товар из ассортимента 21vek.by и 21vek.by ДОМ',
      quantity: 1,
      discount: '15%',
      image: plumbingImage,
    },
    {
      name: 'Любой элемент мебели',
      description: 'Весь ассортимент мебели 21vek.by и 21vek.by ДОМ на ваш выбор',
      quantity: 1,
      discount: '10%',
      image: furnitureImage,
    },
  ];

  return (
    <SetPageLayout
      title='Сет «Практичный»'
      tagline="Текстиль + посуда + мебель"
      description="Универсальное решение для тех, кто хочет обустроить дом по-своему! Выбирайте из всего ассортимента 21vek.by ДОМ: текстиль, посуду, сантехнику и мебель — и получите скидку на каждый товар. Полная свобода выбора! Скидка до 15%!"
      image={setImage}
      imageAlt="Сет Практичный"
      items={items}
    />
  );
};

export default SetPractical;
