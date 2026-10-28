import { SearchX, RotateCcw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmptyState({
  title = 'No Products Found',
  description = 'We could not find any products matching your current filters or search query.',
  onClear,
  clearLabel = 'Clear Filters',
  secondaryAction = {
    label: 'Browse All Products',
    to: '/products',
  },
}) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-14 text-center max-w-lg mx-auto shadow-sm">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#FFF0ED] text-[#F04423] mx-auto flex items-center justify-center mb-5 border border-[#F04423]/20">
        <SearchX className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold font-outfit text-[#101B4B] mb-2">
        {title}
      </h3>

      <p className="text-sm sm:text-base text-[#555555] mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        {onClear && (
          <button
            type="button"
            onClick={onClear}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#F04423] text-white font-semibold text-sm hover:bg-[#D63617] transition-colors shadow-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{clearLabel}</span>
          </button>
        )}

        {secondaryAction && secondaryAction.to && (
          <Link
            to={secondaryAction.to}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-[#101B4B] text-[#101B4B] font-semibold text-sm transition-colors"
          >
            <span>{secondaryAction.label}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
