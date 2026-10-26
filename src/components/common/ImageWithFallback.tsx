import React, { useState } from 'react';
import { Trees, ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  containerClassName?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackSrc,
  loading = 'lazy',
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Reliable fallback landscaping placeholder
  const defaultFallback = 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1200&q=80';

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center text-slate-300">
          <Trees className="w-8 h-8 opacity-40 animate-bounce" />
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 bg-stone-100 flex flex-col items-center justify-center p-4 text-center text-stone-500">
          <ImageOff className="w-8 h-8 text-stone-400 mb-2" />
          <span className="text-xs font-medium text-stone-600">Landscaping showcase image unavailable</span>
          <span className="text-[11px] text-stone-400 mt-1 max-w-[200px] truncate">{alt}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            if (fallbackSrc && src !== fallbackSrc) {
              // Try the provided fallback
              setHasError(false);
            } else {
              setHasError(true);
            }
          }}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          {...props}
        />
      )}
    </div>
  );
}
