import { useState } from 'react';
import { Trophy } from 'lucide-react';

export default function ImageWithFallback({
  src,
  alt = 'Sports Product',
  className = '',
  aspectRatio = 'aspect-square',
  fallbackText = 'Jai Sports',
  ...props
}) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`${aspectRatio} ${className} w-full bg-gradient-to-br from-[#101B4B] to-[#18286E] flex flex-col items-center justify-center p-6 text-center text-white relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-[#F04423]/10 backdrop-blur-[1px]" />
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-3 relative z-10 border border-white/20">
          <Trophy className="w-8 h-8 text-[#F04423]" />
        </div>
        <p className="text-sm font-semibold tracking-wide text-white/90 relative z-10 font-outfit">
          {alt || fallbackText}
        </p>
        <span className="text-[11px] text-white/60 uppercase tracking-wider mt-1 relative z-10">
          Jai Sports
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className={`${aspectRatio} ${className} w-full object-cover transition-transform duration-300`}
      {...props}
    />
  );
}
