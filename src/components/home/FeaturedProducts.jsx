import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ProductCard from '../products/ProductCard';
import { categories, products } from '../../data/shopData';

export default function FeaturedProducts() {
  const activeCategories = categories.filter((c) => !c.comingSoon);

  // Exactly 2 products per category (6 categories x 2 = 12 products total)
  const featuredList = activeCategories.flatMap((cat) => {
    const catProducts = products.filter((p) => p.categoryId === cat.id);
    const marked = catProducts.filter((p) => p.featured);
    if (marked.length >= 2) return marked.slice(0, 2);
    const remaining = catProducts.filter((p) => !p.featured);
    return [...marked, ...remaining].slice(0, 2);
  });

  const totalActiveProducts = products.filter((p) => {
    const cat = categories.find((c) => c.id === p.categoryId);
    return cat && !cat.comingSoon;
  }).length;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TOP PICKS"
          title="Featured Products"
          subtitle="Explore handpicked favorites across all our specialized departments — sports, trophies, music, fitness, uniforms, and learning essentials."
          action={
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-[#FFF0ED] text-[#101B4B] hover:text-[#F04423] font-bold text-sm transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#F04423]" />
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          }
        />

        {/* Featured Products Grid: Exactly 12 Items (2 per Category) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {featuredList.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Bottom CTA to View Entire Catalogue */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-[#101B4B] text-white hover:bg-[#18286E] font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <span>Browse Complete Product Catalogue ({totalActiveProducts} Items)</span>
            <ArrowRight className="w-4 h-4 text-[#F04423]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
