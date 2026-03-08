import setImage from '@/assets/promos/set-kids-opt.jpg';
import mattressImage from '@/assets/sets/set-kids-mattress.jpg';
import protectorImage from '@/assets/sets/set-kids-protector.jpg';
import pillowImage from '@/assets/sets/set-kids-pillow.jpg';
import { SetPageLayout } from '@/components/sets/SetPageLayout';

const SetKids = () => {
  const items = [
    {
      name: 'Матрас 90/80х200',
      description: 'Любой матрас Lagoma подходящего размера на ваш выбор',
      quantity: 1,
      discount: '15%',
      image: mattressImage,
    },
    {
      name: 'Наматрасник защитный 90/80х200',
      description: 'Любая модель из экспозиции витрины сна',
      quantity: 1,
      discount: '10%',
      image: protectorImage,
    },
    {
      name: 'Подушка',
      description: 'Любая модель из экспозиции витрины сна',
      quantity: 1,
      discount: '10%',
      image: pillowImage,
    },
  ];

  return (
    <SetPageLayout
      title='Сет «Детский»'
      tagline="Детский матрас + аксессуары"
      description="Заботьтесь о здоровье вашего ребёнка с первых лет жизни! Сет «Детский» включает ортопедический матрас Lagoma, специально разработанный для правильного формирования осанки, защитный наматрасник и удобную подушку. Скидка до 15%!"
      image={setImage}
      imageAlt="Сет Детский"
      items={items}
    />
  );
};

export default SetKids;
