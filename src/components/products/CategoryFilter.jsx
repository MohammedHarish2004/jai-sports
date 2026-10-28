import { categories, products } from '../../data/shopData';
import { isCategoryComingSoon } from '../../utils/productFilters';

export default function CategoryFilter({
  selectedCategory = 'all',
  onSelectCategory,
}) {
  // Compute active products count across active categories
  const activeCount = products.filter((p) => {
    const cat = categories.find((c) => c.id === p.categoryId);
    return cat && !cat.comingSoon;
  }).length;

  const getCategoryCount = (categoryId) => {
    return products.filter((p) => p.categoryId === categoryId).length;
  };

  return (
    <div className="w-full">
      {/* Category Pills / Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
        {/* All Products Tab */}
        <button
          type="button"
          onClick={() => onSelectCategory('all')}
          className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-[#101B4B] text-white shadow-md shadow-[#101B4B]/20'
              : 'bg-white text-[#222222] hover:bg-slate-100 border border-slate-200/80'
          }`}
        >
          <span>All Products</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
              selectedCategory === 'all'
                ? 'bg-[#F04423] text-white'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            {activeCount}
          </span>
        </button>

        {/* Dynamically generated Category Tabs */}
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.slug || selectedCategory === cat.id;
          const isComingSoon = isCategoryComingSoon(cat);
          const count = getCategoryCount(cat.id);

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.slug)}
              className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-[#101B4B] text-white shadow-md shadow-[#101B4B]/20'
                  : 'bg-white text-[#222222] hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              <span>{cat.name}</span>
              {isComingSoon ? (
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    isSelected
                      ? 'bg-amber-400 text-slate-900'
                      : 'bg-amber-100 text-amber-800 border border-amber-200/80'
                  }`}
                >
                  Soon
                </span>
              ) : (
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                    isSelected
                      ? 'bg-[#F04423] text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
