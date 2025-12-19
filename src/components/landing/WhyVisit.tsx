import { Sparkles } from 'lucide-react';

import allInOne from '@/assets/benefits/benefit-all-in-one.jpg';
import readySolutions from '@/assets/benefits/benefit-ready-solutions.jpg';
import seeInPerson from '@/assets/benefits/benefit-see-live.jpg';
import anyBudget from '@/assets/benefits/benefit-any-budget.jpg';
import oneVisit from '@/assets/benefits/benefit-one-visit.jpg';
import service from '@/assets/benefits/benefit-service.jpg';

const benefits = [
  {
    text: 'Всё в одном месте — мебель, техника, текстиль и аксессуары',
    image: allInOne,
  },
  {
    text: 'Готовые интерьерные решения — не нужно долго искать и подбирать',
    image: readySolutions,
  },
  {
    text: 'Посмотреть вживую — оцените качество и стиль перед покупкой',
    image: seeInPerson,
  },
  {
    text: 'Решения под любой бюджет — от практичных до премиальных вариантов',
    image: anyBudget,
  },
  {
    text: 'Один визит вместо поездок по разным магазинам — экономия времени и сил',
    image: oneVisit,
  },
  {
    text: 'Удобный сервис — доставка, сборка и все услуги в одном месте',
    image: service,
  },
];

export const WhyVisit = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 via-background to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Ваш идеальный визит</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Почему стоит к нам приехать
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.text}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Number badge */}
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
              </div>
              
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-lg md:text-xl text-white font-semibold leading-tight">
                  {benefit.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Text - Styled prominently */}
        <div className="text-center mt-16 md:mt-20">
          <div className="relative inline-block">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 blur-2xl -z-10 scale-150" />
            
            <p className="text-2xl md:text-3xl lg:text-4xl text-foreground max-w-4xl mx-auto leading-relaxed font-medium">
              Приезжайте за вдохновением и новогодним настроением —{' '}
              <span className="text-primary font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                создайте дом мечты к празднику
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
