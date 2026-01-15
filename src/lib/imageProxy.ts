const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export type ImageSize = 'small' | 'medium' | 'big';

export function getProxiedImageUrl(
  originalUrl: string | null | undefined,
  size: ImageSize = 'medium'
): string {
  if (!originalUrl) return '/placeholder.svg';
  
  // If it's already a proxied URL or local URL, return as-is
  if (originalUrl.startsWith('/') || originalUrl.includes('supabase.co/functions')) {
    return originalUrl;
  }
  
  // Only proxy 21vek.by images
  if (originalUrl.includes('cdn21vek.by') || originalUrl.includes('21vek.by')) {
    return `${SUPABASE_URL}/functions/v1/proxy-image?url=${encodeURIComponent(originalUrl)}&size=${size}`;
  }
  
  return originalUrl;
}
