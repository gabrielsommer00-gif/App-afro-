import { ImageOff } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SafeImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  loading?: 'eager' | 'lazy';
  sizes?: string;
}

export function SafeImage({
  src,
  webpSrc,
  alt,
  className = '',
  fallbackLabel,
  loading = 'lazy',
  sizes,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src, webpSrc]);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-[#F0E8DC] text-[#655248] p-6 text-center ${className}`}
      >
        <ImageOff className="w-6 h-6 mb-2 opacity-60" aria-hidden="true" />
        <span className="text-xs font-medium tracking-wide max-w-[18ch]">
          {fallbackLabel || alt}
        </span>
      </div>
    );
  }

  if (webpSrc) {
    return (
      <picture className="contents">
        <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          sizes={sizes}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={className}
        />
      </picture>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      sizes={sizes}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
