import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Clock, ArrowRight, Store, ShieldCheck, MessageCircle } from 'lucide-react';
import WhatsAppButton from '../common/WhatsAppButton';
import ProductCard from './ProductCard';
import { products } from '../../data/shopData';

export default function CategoryComingSoon({ category, onSelectCategory }) {
  // Grab a few top featured active sports products as recommendations
  const previewSportsProducts = products
    .filter((p) => p.categoryId === 'sports' && p.featured)
    .slice(0, 4);

  const sportsCount = products.filter((p) => p.categoryId === 'sports').length;

  return (
    <div className="space-y-12">
      {/* Main Coming Soon Banner Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden bg-gradient-to-br from-[#101B4B] via-[#142159] to-[#0A1132] rounded-3xl sm:rounded-[32px] p-8 sm:p-12 lg:p-14 text-white shadow-xl border border-white/10"
      >
        {/* Subtle Decorative Gradients & Glows */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#F04423]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-[#3B82F6]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[#FFA08A] backdrop-blur-md mb-6">
            <Clock className="w-3.5 h-3.5 text-[#F04423]" />
            <span>Digital Catalogue Arriving Soon</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-outfit tracking-tight leading-tight text-white">
            The <span className="text-[#F04423]">{category?.name}</span> Collection is on its way!
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            We are curating and photographing our exclusive range of {category?.name?.toLowerCase() || 'products'} for our online catalogue. However, a full assortment is <strong className="text-white font-semibold">already in stock at our Trichy retail showroom</strong>!
          </p>

          {/* Key In-Store Benefits / Custom Orders */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <Store className="w-5 h-5 text-[#F04423] mb-2" />
              <h4 className="text-sm font-bold text-white">In-Store Stock</h4>
              <p className="text-xs text-slate-400 mt-1">
                Available right now at our Madurai Road store in Trichy.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-[#F04423] mb-2" />
              <h4 className="text-sm font-bold text-white">Bulk School Orders</h4>
              <p className="text-xs text-slate-400 mt-1">
                Custom quotes and personalization for institutions & clubs.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-[#F04423] mb-2" />
              <h4 className="text-sm font-bold text-white">Catalogues on Request</h4>
              <p className="text-xs text-slate-400 mt-1">
                WhatsApp us to receive instant photos, specs, and pricing.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <WhatsAppButton
              customNote={`Hi Jai Sports, I am looking for ${category?.name || 'products'}. Please share the current models, catalogues, and pricing available.`}
              variant="primary"
              size="lg"
              className="text-sm sm:text-base py-3.5 px-6 font-bold shadow-lg shadow-[#F04423]/30"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Inquire About {category?.name} on WhatsApp
            </WhatsAppButton>

            <Link
              to="/products?category=sports"
              onClick={() => onSelectCategory && onSelectCategory('sports')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base transition-colors"
            >
              <span>Explore Sports Equipment ({sportsCount})</span>
              <ArrowRight className="w-4 h-4 text-[#F04423]" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Recommended Live Sports Products Grid */}
      {previewSportsProducts.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F04423]">
                AVAILABLE NOW IN CATALOGUE
              </span>
              <h3 className="text-2xl font-black font-outfit text-[#101B4B] mt-1">
                Explore Our Active Sports Gear
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Browse official match balls, bats, rackets, and athletic gear available for instant order.
              </p>
            </div>

            <Link
              to="/products?category=sports"
              onClick={() => onSelectCategory && onSelectCategory('sports')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#F04423] hover:text-[#D63617] group shrink-0"
            >
              <span>View All {sportsCount} Sports Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewSportsProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
