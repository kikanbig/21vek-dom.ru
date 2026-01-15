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
  
  // Direct loading for 21vek.by images (works on dom.21vek.by subdomain)
  return originalUrl;
}
