import { Card } from "@/components/ui/card";
import { SmartProductImage } from "./SmartProductImage";
import { Heart } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Product {
  id: string;
  name: string;
  main_image: string | null;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const isMobile = useIsMobile();

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Card 
      className="group cursor-pointer overflow-hidden border border-border/50 hover:border-border shadow-sm hover:shadow-lg transition-all duration-300 bg-card rounded-lg"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted flex items-center justify-center p-2">
        {product.main_image ? (
          <SmartProductImage
            originalSrc={product.main_image}
            alt={product.name}
            size={isMobile ? "mobile" : "small"}
            objectFit="contain"
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-muted">
            <span className="text-5xl">📦</span>
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-200 shadow-sm"
        >
          <Heart 
            className={`h-5 w-5 transition-colors ${
              isFavorite 
                ? "fill-red-500 text-red-500" 
                : "text-muted-foreground hover:text-foreground"
            }`} 
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Product Name */}
        <h3 className="font-medium text-foreground line-clamp-2 text-base leading-snug group-hover:text-primary transition-colors min-h-[2.75rem]">
          {product.name}
        </h3>

        {/* CTA hint */}
        <p className="text-sm text-muted-foreground">
          Подробнее →
        </p>
      </div>
    </Card>
  );
};
