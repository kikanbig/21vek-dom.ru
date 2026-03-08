import setCardImage from '@/assets/promos/set-dining-1-card.jpg';
import tableImage from '@/assets/sets/set-dining-table.jpg';
import chairsImage from '@/assets/sets/set-dining-chairs.jpg';
import dishesImage from '@/assets/sets/set-dining-dishes.jpg';
import { SetPageLayout } from '@/components/sets/SetPageLayout';

const SetDining1 = () => {
  const items = [
    {
      name: 'Стол для гостиной',
      description: 'Любая модель из ассортимента 21vek.by ДОМ',
      quantity: 1,
      discount: '10%',
      image: tableImage,
    },
    {
      name: 'Стул обеденный/для гостиной',
      description: 'Любая модель из ассортимента 21vek.by ДОМ',
      quantity: 4,
      discount: '10%',
      image: chairsImage,
    },
    {
      name: 'Набор посуды для сервировки',
      description: 'JEWEL Аквамарин или JEWEL Жасмин — 16 предметов',
      quantity: 1,
      discount: '15%',
      image: dishesImage,
    },
  ];

  return (
    <SetPageLayout
      title='Сет «Обеденный» с посудой для сервировки'
      tagline="Стол + стулья + посуда для сервировки"
      description="Создайте уютное пространство для семейных обедов и праздничных ужинов! Стильный обеденный стол, 4 элегантных стула и роскошный набор посуды JEWEL станут украшением вашей столовой. Выгода до 15%!"
      image={setCardImage}
      imageAlt="Сет Обеденный"
      items={items}
    />
  );
};

export default SetDining1;
