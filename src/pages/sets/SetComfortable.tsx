import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import setImage from '@/assets/promos/set-comfortable-opt.jpg';
import bedImage from '@/assets/sets/set-comfortable-bed.jpg';
import mattressImage from '@/assets/sets/set-comfortable-mattress.jpg';
import pillowsImage from '@/assets/sets/set-comfortable-pillows.jpg';
import { SetPageLayout } from '@/components/sets/SetPageLayout';

const SetComfortable = () => {
  const items = [
    {
      name: 'Кровать 160x200',
      description: 'Двуспальная кровать MODULA Карпин с подъемным механизмом 160х200',
      quantity: 1,
      discount: '7%',
      image: bedImage,
    },
    {
      name: 'Матрас 160x200',
      description: 'Премиальные матрасы коллекции Veluna на ваш выбор',
      quantity: 1,
      discount: '15%',
      image: mattressImage,
    },
    {
      name: 'Подушка ортопедическая',
      description: 'Любые модели из экспозиции витрины сна на ваш выбор',
      quantity: 2,
      discount: '7%',
      image: pillowsImage,
    },
  ];

  return (
    <SetPageLayout
      title='Сет «Комфортный»'
      tagline="Кровать + матрас + подушки"
      description="Мечтаете о крепком и здоровом сне? Сет «Комфортный» — это готовое решение для вашей спальни! Элегантная кровать, ортопедический матрас премиум-класса и две подушки с эффектом памяти превратят каждую ночь в настоящий отдых. Экономия до 15%!"
      image={setImage}
      imageAlt="Сет Комфортный"
      items={items}
    />
  );
};

export default SetComfortable;
