import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { products, categories } from '../../data/shopData';
import { isCategoryComingSoon } from '../../utils/productFilters';
import { formatProductPrice } from '../../utils/productFilters';
import { siteConfig } from '../../config/siteConfig';
import { createProductEnquiryUrl } from '../../utils/whatsapp';

const popularKeywords = [
  'Football',
  'Cricket',
  'Trophy',
  'Medal',
  'Badminton',
  'Kids',
  'Snare Drum',
  'Guitar',
  'Dumbbell',
  'Jersey',
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Live real-time filtered results across active available products & categories
  const trimmed = query.trim().toLowerCase();
  const searchResults = trimmed
    ? products.filter((p) => {
        const cat = categories.find((c) => c.id === p.categoryId);
        if (cat?.comingSoon) return false;
        const nameMatch = p.name.toLowerCase().includes(trimmed);
        const descMatch = p.description.toLowerCase().includes(trimmed);
        const catMatch = cat ? cat.name.toLowerCase().includes(trimmed) : false;
        return nameMatch || descMatch || catMatch;
      })
    : [];

  const handleSelectProduct = (product) => {
    onClose();
    navigate(`/products?category=${product.categoryId}&search=${encodeURIComponent(product.name)}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onClose();
      navigate(`/products?search=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeywordClick = (kw) => {
    setQuery(kw);
    inputRef.current?.focus();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 sm:px-6">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A1132]/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Search Input Bar */}
            <form
              onSubmit={handleSubmit}
              className="p-4 sm:p-5 border-b border-slate-100 flex items-center gap-3 bg-white"
            >
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#F04423] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search football, cricket bat, trophy, guitar, shoes..."
                className="w-full text-base sm:text-lg font-medium text-[#222222] placeholder-slate-400 focus:outline-none bg-transparent"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear input"
                  className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold transition-colors cursor-pointer shrink-0"
              >
                ESC
              </button>
            </form>

            {/* Results or Suggestions Body */}
            <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 divide-y divide-slate-100">
              {trimmed ? (
                /* LIVE RESULTS */
                <div>
                  <div className="flex items-center justify-between mb-3 px-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span>Matching Products ({searchResults.length})</span>
                    {searchResults.length > 0 && (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="text-[#F04423] hover:underline cursor-pointer"
                      >
                        View in Catalogue →
                      </button>
                    )}
                  </div>

                  {searchResults.length > 0 ? (
                    <div className="space-y-2">
                      {searchResults.map((product) => {
                        const cat = categories.find((c) => c.id === product.categoryId);
                        const priceText = formatProductPrice(
                          product.price,
                          siteConfig.currency.symbol
                        );
                        const enquiryUrl = createProductEnquiryUrl(product.name);

                        return (
                          <div
                            key={product.id}
                            className="group flex items-center justify-between gap-3 p-3 rounded-2xl hover:bg-[#FFF0ED] transition-colors border border-transparent hover:border-[#F04423]/20"
                          >
                            <div
                              onClick={() => handleSelectProduct(product)}
                              className="flex items-center gap-3.5 flex-1 min-w-0 cursor-pointer"
                            >
                              <img
                                src={product.image}
                                alt={product.name}
                                loading="lazy"
                                decoding="async"
                                className="w-12 h-12 rounded-xl object-cover bg-slate-100 shrink-0 border border-slate-200/80"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                              <div className="min-w-0 flex-1">
                                <h4 className="text-sm font-bold text-[#101B4B] group-hover:text-[#F04423] truncate transition-colors">
                                  {product.name}
                                </h4>
                                <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500">
                                  {cat && (
                                    <span className="font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md text-[10px]">
                                      {cat.name}
                                    </span>
                                  )}
                                  <span className="text-[#F04423] font-bold text-[11px]">Click to view / Enquire</span>
                                </div>
                              </div>
                            </div>

                            {/* Direct WhatsApp Enquiry Icon Button */}
                            <a
                              href={enquiryUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Enquire about ${product.name} on WhatsApp`}
                              className="w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm transition-transform active:scale-95"
                            >
                              <MessageCircle className="w-4 h-4" />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* NO RESULTS FOUND */
                    <div className="py-10 text-center space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#FFF0ED] text-[#F04423] mx-auto flex items-center justify-center">
                        <Search className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-[#101B4B]">
                        No products found matching &ldquo;{query}&rdquo;
                      </h4>
                      <p className="text-xs text-slate-500 max-w-sm mx-auto">
                        Try searching for sports equipment, trophies, medals, kids kits, or musical instruments.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                /* SUGGESTIONS & POPULAR SEARCHES WHEN INPUT IS EMPTY */
                <div className="space-y-5">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Popular Searches
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {popularKeywords.map((kw, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => handleKeywordClick(kw)}
                          className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-[#FFF0ED] hover:text-[#F04423] text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
                        >
                          {kw}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Browse by Category
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {categories.map((cat) => {
                        const isComingSoon = isCategoryComingSoon(cat);
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => {
                              onClose();
                              navigate(`/products?category=${cat.slug}`);
                            }}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-[#FFF0ED] text-left transition-colors group cursor-pointer"
                          >
                            <span className="text-xs font-bold text-slate-700 group-hover:text-[#F04423] truncate">
                              {cat.name}
                            </span>
                            {isComingSoon ? (
                              <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 shrink-0">
                                Soon
                              </span>
                            ) : (
                              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#F04423] group-hover:translate-x-0.5 transition-all shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F04423]" />
                Live instant product search
              </span>
              <button
                type="button"
                onClick={handleSubmit}
                className="font-bold text-[#F04423] hover:underline cursor-pointer"
              >
                Go to Catalogue →
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
