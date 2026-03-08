import setImage from '@/assets/promos/set-kitchen-light-opt.jpg';
import kitchenFacadeImage from '@/assets/sets/set-kitchen-facade.jpg';
import tableImage from '@/assets/sets/set-dining-table.jpg';
import appliancesImage from '@/assets/sets/set-kitchen-appliances.jpg';
import { SetPageLayout } from '@/components/sets/SetPageLayout';

const SetKitchenLight = () => {
  const items = [
    {
      name: 'Кухня',
      description: 'Все модели кухонь из ассортимента 21vek.by ДОМ',
      quantity: 1,
      discount: '10%',
      image: kitchenFacadeImage,
    },
    {
      name: 'Стол обеденный/для гостиной',
      description: 'Все модели столов из ассортимента 21vek.by ДОМ',
      quantity: 1,
      discount: '15%',
      image: tableImage,
    },
    {
      name: 'Техника для кухни',
      description: 'Любая техника для кухни из ассортимента 21vek.by ДОМ',
      quantity: 1,
      discount: '10%',
      image: appliancesImage,
    },
  ];

  const extraContent = (
    <ul className="space-y-2 text-base mt-4">
      <li className="flex items-center gap-3">
        <span className="text-xs font-black bg-foreground text-background px-2 py-0.5 rounded">−10%</span>
        <span className="text-foreground">на мебель для кухни</span>
      </li>
      <li className="flex items-center gap-3">
        <span className="text-xs font-black bg-foreground text-background px-2 py-0.5 rounded">−15%</span>
        <span className="text-foreground">на обеденный стол</span>
      </li>
      <li className="flex items-center gap-3">
        <span className="text-xs font-black bg-foreground text-background px-2 py-0.5 rounded">−10%</span>
        <span className="text-foreground">на бытовую технику</span>
      </li>
    </ul>
  );

  return (
    <SetPageLayout
      title='Сет «Кухня Лайт»'
      tagline="Кухня + стол + техника"
      description="Выбирайте любую кухню, любой стол и любую технику из нашего ассортимента. При покупке этих товаров вместе ваша выгода составит:"
      image={setImage}
      imageAlt="Сет Кухня Лайт"
      items={items}
      extraContent={extraContent}
    />
  );
};

export default SetKitchenLight;
