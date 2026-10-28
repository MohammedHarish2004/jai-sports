import { motion } from 'framer-motion';
import ImageWithFallback from '../common/ImageWithFallback';
import WhatsAppButton from '../common/WhatsAppButton';
import { formatProductPrice } from '../../utils/productFilters';
import { categories } from '../../data/shopData';
import { siteConfig } from '../../config/siteConfig';

export default function ProductCard({ product, index = 0 }) {
  if (!product) return null;

  // Find category dynamically
  const category = categories.find((c) => c.id === product.categoryId);
  const formattedPrice = formatProductPrice(product.price, siteConfig.currency.symbol);
  const isPriceOnRequest = product.price === null || product.price === undefined;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      {/* Product Image Area */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Dynamic Category Badge */}
        {category && (
          <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-[#101B4B]/90 text-white backdrop-blur-md shadow-sm">
            {category.name}
          </span>
        )}
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
  );
}
