import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface SetCardProps {
  title: string;
  subtitle: string;
  discount: string;
  icon: LucideIcon;
  image: string;
  items: string[];
}

export const SetCard = ({
  title,
  subtitle,
  discount,
  icon: Icon,
  image,
  items,
}: SetCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-card">
      {/* Discount Badge */}
      <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground font-bold text-base px-4 py-1.5 shadow-lg">
        -{discount}
      </Badge>

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Icon */}
        <div className="absolute bottom-4 left-6 w-14 h-14 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <Icon className="w-7 h-7" strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-card-foreground mb-1">
            {title}
          </h3>
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            {subtitle}
          </p>
        </div>

        {/* Items List */}
        <div className="space-y-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 text-sm text-card-foreground/80"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </Card>
  );
};
