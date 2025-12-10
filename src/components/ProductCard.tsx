import { Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  title: string;
  discount?: number;
  image: string;
}

export const ProductCard = ({ title, discount = 7, image }: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <Badge className="absolute top-3 left-3 z-10 bg-destructive text-destructive-foreground font-bold">
        −{discount}%
      </Badge>
      <button className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors">
        <Heart className="h-5 w-5 text-muted-foreground hover:text-destructive transition-colors" />
      </button>
      
      {/* Product Image */}
      <div className="aspect-square bg-muted/50 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="font-medium line-clamp-2 min-h-[3rem]">
          {title}
        </h3>
      </div>
    </div>
  );
};