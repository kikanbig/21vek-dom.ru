import { useRef, useCallback, useEffect } from "react";
import { getProxiedImageUrl, type ImageSize } from "@/lib/imageProxy";

/**
 * Hook that prefetches images with controlled parallelism.
 * Loads up to 3 images at once for faster gallery loading.
 */
export function useImagePrefetch() {
  const queueRef = useRef<string[]>([]);
  const activeCountRef = useRef(0);
  const prefetchedRef = useRef<Set<string>>(new Set());
  const MAX_PARALLEL = 3;

  const processQueue = useCallback(() => {
    while (activeCountRef.current < MAX_PARALLEL && queueRef.current.length > 0) {
      const next = queueRef.current.shift();
      if (!next) break;

      activeCountRef.current++;
      const img = new Image();
      img.referrerPolicy = "no-referrer";
      img.decoding = "async";

      const done = () => {
        activeCountRef.current--;
        processQueue();
      };

      img.onload = done;
      img.onerror = done;
      img.src = next;
    }
  }, []);

  const prefetch = useCallback(
    (originalUrls: (string | null | undefined)[], size: ImageSize = "big") => {
      const urls = originalUrls
        .filter((u): u is string => !!u)
        .map((u) => getProxiedImageUrl(u, size))
        .filter((u) => !prefetchedRef.current.has(u));

      urls.forEach((u) => {
        prefetchedRef.current.add(u);
        queueRef.current.push(u);
      });

      processQueue();
    },
    [processQueue]
  );

  const clear = useCallback(() => {
    queueRef.current = [];
  }, []);

  // Cleanup on unmount
  useEffect(() => () => clear(), [clear]);

  return { prefetch, clear };
}
