import setImage from '@/assets/promos/set-convenient.jpg';
import mattressImage from '@/assets/sets/set-convenient-mattress.jpg';
import protectorImage from '@/assets/sets/set-convenient-protector.jpg';
import pillowsImage from '@/assets/sets/set-convenient-pillows.jpg';
import { SetPageLayout } from '@/components/sets/SetPageLayout';

const SetConvenient = () => {
  const items = [
    {
      name: 'Матрас 160х200',
      description: 'Любой матрас из популярной коллекции Lagoma на ваш выбор',
      quantity: 1,
      discount: '15%',
      image: mattressImage,
    },
    {
      name: 'Наматрасник защитный 160',
      description: 'Любая модель из экспозиции витрины сна',
      quantity: 1,
      discount: '10%',
      image: protectorImage,
    },
    {
      name: 'Подушка',
      description: 'Любые модели из экспозиции витрины сна на ваш выбор',
      quantity: 2,
      discount: '10%',
      image: pillowsImage,
    },
  ];

  return (
    <SetPageLayout
      title='Сет «Удобный»'
      tagline="Матрас + наматрасник + подушки"
      description="Обновите свою спальню без лишних трат! Сет «Удобный» — это популярный матрас Lagoma с защитным наматрасником и двумя комфортными подушками. Идеальное решение для тех, кто ценит качественный сон. Выгода до 15%!"
      image={setImage}
      imageAlt="Сет Удобный"
      items={items}
    />
  );
};

export default SetConvenient;
