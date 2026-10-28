import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy } from 'lucide-react';

export default function ImageModal({
  isOpen,
  onClose,
  src,
  alt = 'Product image',
  title = '',
}) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title || alt || 'Product image preview'}
          onClick={onClose}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8 cursor-pointer select-none"
        >
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm pointer-events-none"
          />

          {/* Cancel Button (Top Right Corner of Screen) */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Cancel and close image"
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-30 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 active:scale-90 text-white flex items-center justify-center backdrop-blur-md border border-white/25 shadow-2xl cursor-pointer transition-all focus:outline-none"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </motion.button>

          {/* Modal Content - Stopping propagation so clicking on the image does NOT close */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 max-w-full max-h-full flex flex-col items-center justify-center cursor-default pointer-events-auto"
          >
            {/* The Image Alone Container */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black/40 border border-white/10 max-w-[92vw] sm:max-w-[85vw] md:max-w-4xl max-h-[82vh] flex items-center justify-center">
              {/* Cancel Button (Directly on Image Top Right) */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Cancel"
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 active:scale-90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-md cursor-pointer transition-all focus:outline-none"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>

              {src ? (
                <img
                  src={src}
                  alt={alt || title}
                  loading="lazy"
                  decoding="async"
                  className="max-h-[82vh] max-w-[92vw] sm:max-w-[85vw] md:max-w-4xl w-auto h-auto object-contain rounded-2xl sm:rounded-3xl select-none"
                />
              ) : (
                <div className="w-[85vw] max-w-sm aspect-square bg-gradient-to-br from-[#101B4B] to-[#18286E] p-8 flex flex-col items-center justify-center text-center text-white">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                    <Trophy className="w-8 h-8 text-[#F04423]" />
                  </div>
                  <p className="text-lg font-bold font-outfit text-white mb-2 leading-snug">
                    {title || alt}
                  </p>
                  <span className="text-xs text-[#FFA08A] uppercase tracking-wider font-semibold">
                    Jai Sports — Photo Updating Soon
                  </span>
                </div>
              )}
            </div>

            {/* Product Title Caption */}
            {title && (
              <div className="mt-3.5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/95 text-xs sm:text-sm font-semibold tracking-wide text-center max-w-[90vw] truncate shadow-lg">
                {title}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

