import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmartProductImage } from "./SmartProductImage";
import { useImagePrefetch } from "@/hooks/useImagePrefetch";

interface Product {
  id: string;
  name: string;
  description: string | null;
  main_image: string | null;
  images: string[] | null;
  source_url: string | null;
}

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, open, onClose }: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const { prefetch, clear } = useImagePrefetch();

  const images = product?.images?.length
    ? product.images
    : product?.main_image
    ? [product.main_image]
    : [];

  // Reset index when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [product?.id]);

  // Prefetch disabled for testing

  if (!product) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-6xl w-[95vw] max-h-[95vh] overflow-hidden p-0 bg-background border-0 shadow-2xl">
        {/* Custom close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 p-2 rounded-full bg-background/90 backdrop-blur-sm hover:bg-muted transition-colors shadow-md"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-[95vh] overflow-y-auto lg:overflow-hidden">
          {/* Left: Image Gallery - Takes more space */}
          <div className="lg:w-[60%] bg-muted/30 p-4 lg:p-8 flex flex-col flex-shrink-0">
            {/* Main Image */}
            <div className="relative h-[50vh] lg:flex-1 lg:min-h-[500px] flex items-center justify-center bg-background rounded-xl overflow-hidden">
              {images.length > 0 ? (
                <>
                  <SmartProductImage
                    originalSrc={images[currentImageIndex]}
                    alt={product.name}
                    size="big"
                    className="max-w-full max-h-full object-contain"
                  />

                  {/* Navigation arrows */}
                  {images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-3 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg"
                        onClick={nextImage}
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>
                    </>
                  )}

                  {/* Image counter */}
                  {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm text-sm font-medium shadow-md">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  )}

                  {/* Favorite button */}
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute top-4 right-4 p-3 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background transition-all shadow-md"
                  >
                    <Heart
                      className={`h-6 w-6 transition-colors ${
                        isFavorite
                          ? "fill-red-500 text-red-500"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    />
                  </button>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <span className="text-8xl">📦</span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-thin">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                      index === currentImageIndex
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <SmartProductImage
                      originalSrc={img}
                      alt={`${product.name} ${index + 1}`}
                      size="small"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="lg:w-[40%] p-6 lg:p-8 overflow-y-auto flex flex-col">
            {/* Product Title */}
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-6">
              {product.name}
            </h1>

            {/* Description */}
            {product.description && (
              <div className="flex-1 mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Описание</h3>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  {product.description
                    .split("\n")
                    .filter((p) => p.trim())
                    .map((paragraph, index) => {
                      const isHeading =
                        (paragraph.length < 60 &&
                          (paragraph.endsWith(":") || paragraph.endsWith("."))) ||
                        /^[А-ЯЁA-Z\s\d\-:]+$/.test(paragraph.trim()) ||
                        /^(Характеристики|Особенности|Комплектация|Материал|Размеры|Преимущества|Описание|Гарантия)/i.test(
                          paragraph.trim()
                        );

                      if (isHeading) {
                        return (
                          <p key={index} className="font-semibold text-foreground pt-2">
                            {paragraph.trim()}
                          </p>
                        );
                      }

                      return (
                        <p key={index} className="text-sm lg:text-base">
                          {paragraph.trim()}
                        </p>
                      );
                    })}
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="mt-auto pt-6 border-t border-border">
              {product.source_url && (
                <a
                  href={product.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  Смотреть на 21vek.by
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
