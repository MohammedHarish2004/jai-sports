import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ImageWithFallback from '../common/ImageWithFallback';
import { categories, products } from '../../data/shopData';
import { isCategoryComingSoon } from '../../utils/productFilters';

export default function CategorySection() {
  const getProductCount = (categoryId) => {
    return products.filter((p) => p.categoryId === categoryId).length;
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="CATEGORIES"
          title="Shop by Category"
          subtitle="Discover specialized equipment, victory trophies, and training gear built for performance and durability."
          action={
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#F04423] hover:text-[#D63617] group"
            >
              <span>Explore Sports Equipment</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          }
        />

        {/* Dynamic Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => {
            const count = getProductCount(category.id);
            const isComingSoon = isCategoryComingSoon(category);

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Link
                  to={`/products?category=${category.slug}`}
                  className="group relative flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
                >
                  {/* Category Image Area */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.name}
                      aspectRatio="aspect-[4/3]"
                      className="group-hover:scale-108 transition-transform duration-500 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101B4B]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Item count or Coming Soon tag */}
                    <div className="absolute top-4 right-4">
                      {isComingSoon ? (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white backdrop-blur-md shadow-sm">
                          Coming Soon
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-[#101B4B] backdrop-blur-md shadow-sm">
                          {count} Products
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl sm:text-2xl font-black font-outfit text-[#101B4B] group-hover:text-[#F04423] transition-colors">
                          {category.name}
                        </h3>
                        <div className="w-8 h-8 rounded-full bg-[#FFF0ED] text-[#F04423] flex items-center justify-center group-hover:bg-[#F04423] group-hover:text-white transition-all duration-200 shrink-0">
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      <p className="text-sm text-[#555555] line-clamp-2 leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center text-xs font-bold uppercase tracking-wider text-[#F04423]">
                      <span>{isComingSoon ? 'Coming Soon' : 'View Products'}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
