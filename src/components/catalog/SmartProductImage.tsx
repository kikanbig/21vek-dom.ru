import { useEffect, useMemo, useState, useRef } from "react";
import type { ImgHTMLAttributes } from "react";
import { getProxiedImageUrl, type ImageSize } from "@/lib/imageProxy";
import { cn } from "@/lib/utils";

type SmartProductImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  originalSrc?: string | null;
  size?: ImageSize;
  objectFit?: "cover" | "contain";
};

export function SmartProductImage({
  originalSrc,
  alt,
  className,
  onError,
  size = "medium",
  objectFit = "cover",
  ...imgProps
}: SmartProductImageProps) {
  // Progressive strategy for modal images:
  // show `small` quickly, then upgrade to requested size.
  const previewSrc = useMemo(() => {
    if (!originalSrc) return "/placeholder.svg";
    if (size !== "big") return null;
    return getProxiedImageUrl(originalSrc, "small");
  }, [originalSrc, size]);

  const mainSrc = useMemo(
    () => getProxiedImageUrl(originalSrc, size),
    [originalSrc, size]
  );

  const [src, setSrc] = useState(previewSrc ?? mainSrc);
  const [isLoading, setIsLoading] = useState(true);
  const triedFallbackRef = useRef(false);

  useEffect(() => {
    // Reset fallback state when originalSrc changes
    triedFallbackRef.current = false;
    
    // For big images, check if main is already cached
    if (size === "big" && originalSrc) {
      const testImg = new Image();
      testImg.src = mainSrc;
      // If cached, it loads instantly
      if (testImg.complete && testImg.naturalWidth > 0) {
        setSrc(mainSrc);
        setIsLoading(false);
        return;
      }
    }
    setSrc(previewSrc ?? mainSrc);
    setIsLoading(true);
  }, [previewSrc, mainSrc, size, originalSrc]);

  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    // If proxy failed, try original URL directly (for mobile browsers)
    if (!triedFallbackRef.current && originalSrc && src !== originalSrc) {
      triedFallbackRef.current = true;
      setSrc(originalSrc);
      return;
    }
    
    setSrc("/placeholder.svg");
    setIsLoading(false);
    onError?.(e);
  };

  const handleLoad = () => {
    // If we loaded the preview for a big image, upgrade to the big version immediately.
    if (previewSrc && src === previewSrc) {
      setSrc(mainSrc);
      setIsLoading(true);
      return;
    }

    setIsLoading(false);
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && <div className="absolute inset-0 bg-muted animate-pulse" />}
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full transition-opacity duration-300",
          objectFit === "contain" ? "object-contain" : "object-cover",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        crossOrigin="anonymous"
        referrerPolicy="origin"
        decoding="async"
        loading="lazy"
        {...imgProps}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
}
