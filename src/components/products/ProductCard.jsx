import { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';
import ImageModal from '../common/ImageModal';
import WhatsAppButton from '../common/WhatsAppButton';
import { categories } from '../../data/shopData';

export default function ProductCard({ product, index = 0 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) return null;

  // Find category dynamically
  const category = categories.find((c) => c.id === product.categoryId);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
        className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
      >
        {/* Product Image Area - Touching opens Image Modal */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsModalOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsModalOpen(true);
            }
          }}
          aria-label={`View larger image of ${product.name}`}
          className="relative aspect-square w-full overflow-hidden bg-slate-100 cursor-pointer group/img select-none focus:outline-none focus:ring-2 focus:ring-[#F04423]"
        >
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="group-hover/img:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Dynamic Category Badge */}
          {category && (
            <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-[#101B4B]/90 text-white backdrop-blur-md shadow-sm pointer-events-none">
              {category.name}
            </span>
          )}

          {/* Zoom Hint on Hover / Focus */}
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/img:opacity-100 group-focus/img:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
            <div className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#101B4B] text-xs font-bold shadow-lg backdrop-blur-sm flex items-center gap-1.5 transform scale-90 group-hover/img:scale-100 transition-transform">
              <ZoomIn className="w-3.5 h-3.5 text-[#F04423]" />
              <span>Tap to preview</span>
            </div>
          </div>
        </div>

        {/* Product Information */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold font-outfit text-[#101B4B] group-hover:text-[#F04423] transition-colors leading-snug line-clamp-2">
              {product.name}
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#555555] line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Enquiry CTA Only (No Price) */}
          <div className="mt-5 pt-4 border-t border-slate-100">
            <WhatsAppButton
              productName={product.name}
              variant="primary"
              size="md"
              className="w-full text-xs sm:text-sm py-2.5 font-bold shadow-sm hover:shadow-md"
            >
              Enquire on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </motion.article>

      {/* Fullscreen Product Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        src={product.image}
        alt={product.name}
        title={product.name}
      />
    </>
  );
}
