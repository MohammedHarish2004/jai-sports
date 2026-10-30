import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CategoryFilter from '../components/products/CategoryFilter';
import ProductSearch from '../components/products/ProductSearch';
import ProductGrid from '../components/products/ProductGrid';
import CategoryComingSoon from '../components/products/CategoryComingSoon';
import { categories, products } from '../data/shopData';
import { findCategory, filterProducts, isCategoryComingSoon } from '../utils/productFilters';
import Seo from '../components/common/Seo';

const categorySeo = {
  sports: {
    title: 'Sports Equipment in Trichy | Jai Sports',
    description: 'Shop cricket bats, footballs, badminton rackets, basketballs and other sports goods in Trichy at Jai Sports.',
    keywords: [
      'sports equipment shop Trichy',
      'sports goods store Tiruchirappalli',
      'cricket shop Trichy',
      'cricket bats Trichy',
      'football shop Trichy',
      'badminton rackets Trichy',
      'school sports equipment Trichy',
    ],
    heading: 'Sports Equipment in Trichy',
  },
  trophies: {
    title: 'Trophies & Medals Shop in Trichy | Jai Sports',
    description: 'Shop championship trophies, sports cups, medals, shields and custom awards for tournaments and school events at Jai Sports, Trichy.',
    keywords: [
      'trophy shop in Trichy',
      'sports trophies Trichy',
      'medal shop Trichy',
      'custom trophies Trichy',
      'school sports day trophies',
    ],
    heading: 'Trophies & Medals Shop in Trichy',
  },
  kids: {
    title: 'Kids Sports & Activity Gear in Trichy | Jai Sports',
    description: 'Explore kids sports gear, wooden puzzles, Montessori learning materials and educational activity products at Jai Sports in Trichy.',
    keywords: ['kids sports shop Trichy', 'Montessori materials Trichy', 'educational toys Trichy', 'wooden puzzles Trichy'],
    heading: 'Kids Sports & Activity Gear',
  },
  fitness: {
    title: 'Fitness Equipment Shop in Trichy | Jai Sports',
    description: 'Browse dumbbells, home gym equipment, strength-training gear and fitness accessories at Jai Sports, Trichy.',
    keywords: ['fitness equipment Trichy', 'gym equipment shop Trichy', 'dumbbells Trichy', 'home gym equipment Trichy'],
    heading: 'Fitness Equipment in Trichy',
  },
  uniforms: {
    title: 'Sports & School Uniforms in Trichy | Jai Sports',
    description: 'Shop custom team wear, sports uniforms, school cadet uniforms, NCC, Scouts and Guides uniform items at Jai Sports in Trichy.',
    keywords: ['sports uniforms Trichy', 'team jerseys Trichy', 'NCC uniform shop Trichy', 'Scouts uniform Trichy', 'school uniform shop Trichy'],
    heading: 'Sports & School Uniforms in Trichy',
  },
  'musical-instruments': {
    title: 'Musical Instruments in Trichy | Jai Sports',
    description: 'Discover school band instruments, drums, guitars, keyboards and percussion at Jai Sports, a musical instruments shop in Trichy.',
    keywords: ['musical instruments shop Trichy', 'guitar shop Trichy', 'drum shop Trichy', 'school band instruments Trichy'],
    heading: 'Musical Instruments in Trichy',
  },
};

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read params from URL
  const categoryParam = searchParams.get('category') || 'all';
  const initialSearchParam = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearchParam);

  // Sync state if URL search query changes
  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  // Find active category if any
  const currentCategory = useMemo(() => {
    return findCategory(categoryParam);
  }, [categoryParam]);

  const isInvalidCategory = categoryParam !== 'all' && !currentCategory;
  const isComingSoon = useMemo(() => {
    return isCategoryComingSoon(currentCategory);
  }, [currentCategory]);

  // Active available products count
  const activeTotalCount = useMemo(() => {
    return products.filter((p) => {
      const cat = categories.find((c) => c.id === p.categoryId);
      return cat && !cat.comingSoon;
    }).length;
  }, []);

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    if (isInvalidCategory || isComingSoon) return [];
    return filterProducts({
      categorySlug: categoryParam,
      searchQuery: searchQuery,
    });
  }, [categoryParam, searchQuery, isInvalidCategory, isComingSoon]);

  const seo = categorySeo[currentCategory?.slug] || {
    title: 'Sports Equipment & Trophies Catalogue | Jai Sports Trichy',
    description: 'Browse sports equipment, trophies, medals, fitness gear and more from Jai Sports, a trusted sports shop in Trichy.',
    keywords: ['sports shop Trichy', 'trophies shop Trichy'],
  };

  // Handler for category selection
  const handleSelectCategory = (slug) => {
    const newParams = new URLSearchParams(searchParams);
    if (!slug || slug === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', slug);
    }
    setSearchParams(newParams);
  };

  // Handler for search changes
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    const newParams = new URLSearchParams(searchParams);
    if (query.trim()) {
      newParams.set('search', query.trim());
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSearchParams({});
  };

  // Prepare breadcrumbs
  const breadcrumbItems = useMemo(() => {
    const items = [{ label: 'Products', to: '/products' }];
    if (currentCategory) {
      items.push({ label: currentCategory.name });
    } else if (isInvalidCategory) {
      items.push({ label: 'Category Not Found' });
    }
    return items;
  }, [currentCategory, isInvalidCategory]);

  return (
    <div className="py-8 sm:py-12 bg-[#F5F6F8] min-h-[80vh]">
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        noindex={isInvalidCategory}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
                isComingSoon
                  ? 'bg-amber-50 text-amber-800 border border-amber-200'
                  : 'bg-[#FFF0ED] text-[#F04423] border border-[#F04423]/20'
              }`}>
                {isComingSoon
                  ? 'COMING SOON'
                  : currentCategory
                  ? currentCategory.name.toUpperCase()
                  : 'COMPLETE CATALOGUE'}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-outfit text-[#101B4B] tracking-tight">
                {currentCategory ? (seo.heading || currentCategory.name) : 'Explore Our Products'}
              </h1>

              <p className="mt-2.5 text-sm sm:text-base text-[#555555] leading-relaxed">
                {currentCategory
                  ? currentCategory.description
                  : 'Browse our full collection of genuine competition sports equipment and young champion essentials.'}
              </p>
            </div>

            {/* Product Search Box */}
            <div className="w-full lg:w-80 shrink-0">
              <ProductSearch
                value={searchQuery}
                onChange={handleSearchChange}
                onClear={() => handleSearchChange('')}
                placeholder="Search products or gear..."
              />
            </div>
          </div>

          {/* Dynamic Category Navigation Tabs */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <CategoryFilter
              selectedCategory={categoryParam}
              onSelectCategory={handleSelectCategory}
            />
          </div>
        </div>

        {/* Category Coming Soon View */}
        {isComingSoon ? (
          <CategoryComingSoon
            category={currentCategory}
            onSelectCategory={handleSelectCategory}
          />
        ) : (
          <>
            {/* Active Filter Indicators & Total Results */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-500 px-1">
              <div className="flex flex-wrap items-center gap-2.5 min-w-0">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <span>Showing</span>
                  <strong className="font-bold text-[#101B4B]">{filteredProducts.length}</strong>
                  <span>of</span>
                  <strong className="font-semibold text-slate-700">{activeTotalCount}</strong>
                  <span>products</span>
                </span>

                {searchQuery && (
                  <span className="inline-flex items-center gap-1.5 bg-[#FFF0ED] text-[#F04423] border border-[#F04423]/25 px-3 py-1 rounded-full text-xs font-bold max-w-full">
                    <span className="truncate max-w-[220px] sm:max-w-md">
                      Search: &ldquo;{searchQuery}&rdquo;
                    </span>
                    <button
                      type="button"
                      onClick={() => handleSearchChange('')}
                      aria-label="Remove search filter"
                      className="hover:text-[#101B4B] font-extrabold cursor-pointer ml-0.5 text-xs"
                    >
                      ✕
                    </button>
                  </span>
                )}
              </div>

              {(categoryParam !== 'all' || searchQuery) && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="font-bold text-xs sm:text-sm text-[#F04423] hover:underline cursor-pointer shrink-0"
                >
                  Clear All Filters
                </button>
              )}
            </div>

            {/* Product Grid or Empty State */}
            <ProductGrid
              products={filteredProducts}
              onResetFilters={handleResetFilters}
              emptyTitle={
                isInvalidCategory
                  ? 'Category Not Found'
                  : searchQuery
                  ? `No results for "${searchQuery}"`
                  : 'No Products in this Category'
              }
              emptyDescription={
                isInvalidCategory
                  ? 'The selected category does not exist. Please browse our available categories above.'
                  : searchQuery
                  ? 'We could not find any products matching your search term. Check spelling or try a broader search.'
                  : 'There are currently no products listed under this category. Check back soon or browse our full catalogue.'
              }
            />
          </>
        )}
      </div>
    </div>
  );
}
