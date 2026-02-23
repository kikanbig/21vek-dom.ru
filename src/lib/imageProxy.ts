const API_URL = import.meta.env.VITE_API_URL || '';

export type ImageSize = 'mobile' | 'small' | 'big';

export function getProxiedImageUrl(
  originalUrl: string | null | undefined,
  size: ImageSize = 'small'
): string {
  if (!originalUrl) return '/placeholder.svg';
  
  // If it's already a proxied URL or local URL, return as-is
  if (originalUrl.startsWith('/') || originalUrl.includes('/api/proxy-image')) {
    return originalUrl;
  }
  
  // For 21vek.by images (cdn21vek.by, static.21vek.by, etc.):
  // Use proxy to avoid mobile hotlinking issues with referrer policy
  if (originalUrl.includes('21vek.by')) {
    return `${API_URL}/api/proxy-image?url=${encodeURIComponent(originalUrl)}&size=${size}`;
  }
  
  return originalUrl;
}
