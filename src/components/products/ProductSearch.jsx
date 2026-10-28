import { Search, X } from 'lucide-react';

export default function ProductSearch({
  value = '',
  onChange,
  onClear,
  placeholder = 'Search cricket bat, trophy, football...',
  className = '',
}) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
        <Search className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 sm:py-3 bg-white text-sm sm:text-base text-[#222222] placeholder-slate-400 rounded-xl sm:rounded-2xl border border-slate-200/90 hover:border-slate-300 focus:border-[#F04423] focus:ring-2 focus:ring-[#F04423]/20 focus:outline-none transition-all shadow-sm"
      />

      {value && (
        <button
          type="button"
          onClick={onClear}
          aria-label="Clear search query"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-[#F04423] transition-colors"
        >
          <div className="w-5 h-5 rounded-full bg-slate-100 hover:bg-[#FFF0ED] flex items-center justify-center">
            <X className="w-3.5 h-3.5" />
          </div>
        </button>
      )}
    </div>
  );
}
