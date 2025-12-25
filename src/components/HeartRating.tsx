import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeartRatingProps {
  value: number | null;
  onChange: (value: number) => void;
}

export const HeartRating = ({ value, onChange }: HeartRatingProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hearts row */}
      <div className="flex items-center justify-between w-full">
        {Array.from({ length: 11 }, (_, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            className="group flex flex-col items-center transition-transform hover:scale-110 active:scale-95 focus:outline-none"
            aria-label={`Оценка ${i} из 10`}
          >
            <Heart
              className={cn(
                "w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 transition-all duration-300",
                value !== null && i <= value
                  ? "fill-heart-filled text-heart-filled heart-glow animate-heart-fill"
                  : "fill-transparent text-heart-empty hover:text-heart-filled/40"
              )}
              strokeWidth={1.5}
            />
            <span
              className={cn(
                "text-base lg:text-xl xl:text-2xl font-bold mt-1 transition-colors",
                value !== null && i <= value
                  ? "text-[hsl(320,85%,55%)]"
                  : "text-muted-foreground"
              )}
            >
              {i}
            </span>
          </button>
        ))}
      </div>
      
      {/* Labels */}
      <div className="flex justify-between w-full text-sm lg:text-base text-muted-foreground mt-3">
        <span className="font-medium">Точно не порекомендую</span>
        <span className="font-medium">Обязательно порекомендую</span>
      </div>
    </div>
  );
};
