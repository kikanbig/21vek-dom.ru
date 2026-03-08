import setImage from '@/assets/promos/set-dining-2.jpg';
import tableImage from '@/assets/sets/set-dining-table.jpg';
import chairsImage from '@/assets/sets/set-dining-chairs.jpg';
import cookwareImage from '@/assets/sets/set-dining-cookware.jpg';
import { SetPageLayout } from '@/components/sets/SetPageLayout';

const SetDining2 = () => {
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
      name: 'Набор посуды для приготовления',
      description: 'Кастрюли Lara Симфония или сковородки Lara LR01-300',
      quantity: 1,
      discount: '15%',
      image: cookwareImage,
    },
  ];

  return (
    <SetPageLayout
      title='Сет «Обеденный» с посудой для приготовления'
      tagline="Стол + стулья + посуда для готовки"
      description="Идеальный выбор для любителей готовить! Элегантная обеденная группа из стола и 4 стульев в комплекте с профессиональной посудой Lara — кастрюлями или сковородками премиум-класса. Экономия до 15%!"
      image={setImage}
      imageAlt="Сет Обеденный для кулинаров"
      items={items}
    />
  );
};

export default SetDining2;
