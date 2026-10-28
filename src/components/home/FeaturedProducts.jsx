import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ProductCard from '../products/ProductCard';
import { products } from '../../data/shopData';

export default function FeaturedProducts() {
  // Read active sports products where featured is true
  const sportsProducts = products.filter((p) => p.categoryId === 'sports');
  const featuredList = sportsProducts.filter((p) => p.featured === true);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TOP PICKS"
          title="Featured Sports Equipment"
          subtitle="Explore our handpicked selection of top-performing equipment, tournament gear, and athletic favorites."
          action={
            <Link
              to="/products?category=sports"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-[#FFF0ED] text-[#101B4B] hover:text-[#F04423] font-bold text-sm transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#F04423]" />
              <span>View Sports Gear</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          }
        />

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {featuredList.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Bottom CTA to View Entire Catalogue */}
        <div className="mt-12 text-center">
          <Link
            to="/products?category=sports"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#101B4B] text-white hover:bg-[#18286E] font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <span>Browse Complete Sports Catalogue ({sportsProducts.length} Items)</span>
            <ArrowRight className="w-4 h-4 text-[#F04423]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
