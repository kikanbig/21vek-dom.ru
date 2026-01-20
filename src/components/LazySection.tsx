import { ReactNode } from 'react';
import { useLazyLoad } from '@/hooks/useLazyLoad';
import { Loader2 } from 'lucide-react';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  minHeight?: string;
}

export function LazySection({ 
  children, 
  fallback,
  rootMargin = '300px',
  minHeight = '200px'
}: LazySectionProps) {
  const { ref, isVisible } = useLazyLoad(rootMargin);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? 'auto' : minHeight }}>
      {isVisible ? children : (
        fallback || (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )
      )}
    </div>
  );
}

