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
  
  // For 21vek.by images (cdn21vek.by, static.21vek.by, etc.):
  // Always use proxy to avoid mobile hotlinking issues with referrer policy
  if (originalUrl.includes('21vek.by')) {
    return `${SUPABASE_URL}/functions/v1/proxy-image?url=${encodeURIComponent(originalUrl)}&size=${size}`;
  }
  
  return originalUrl;
}
