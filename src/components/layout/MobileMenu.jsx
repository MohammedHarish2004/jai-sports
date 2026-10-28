import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Phone, Mail, MapPin, Sparkles, Search } from 'lucide-react';
import { categories } from '../../data/shopData';
import { isCategoryComingSoon } from '../../utils/productFilters';
import { siteConfig } from '../../config/siteConfig';
import WhatsAppButton from '../common/WhatsAppButton';
import jaiLogo from '../../assets/jailogo.png';

export default function MobileMenu({ isOpen, onClose, onOpenSearch }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A1132]/60 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl flex flex-col lg:hidden overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-[#101B4B] text-white">
              <div className="flex items-center rounded-xl shadow-sm">
                <img
                  src={jaiLogo}
                  alt={siteConfig.brandName}
                  className="h-8 w-auto max-w-[150px] object-contain"
                />
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close mobile menu"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="p-5 flex-1 space-y-6">
              {/* Quick Search Trigger for Mobile */}
              {onOpenSearch && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenSearch();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-[#FFF0ED] text-slate-500 hover:text-[#F04423] text-sm font-medium transition-colors border border-slate-200"
                >
                  <Search className="w-4 h-4 text-[#F04423]" />
                  <span>Search sports, trophies...</span>
                </button>
              )}

              {/* Primary Pages */}
              <nav className="space-y-1">
                <Link
                  to="/"
                  onClick={onClose}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-base font-bold text-[#101B4B] hover:bg-[#FFF0ED] hover:text-[#F04423] transition-colors"
                >
                  <span>Home</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </Link>

                <Link
                  to="/about"
                  onClick={onClose}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-base font-bold text-[#101B4B] hover:bg-[#FFF0ED] hover:text-[#F04423] transition-colors"
                >
                  <span>About Us</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </Link>

                <Link
                  to="/services"
                  onClick={onClose}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-base font-bold text-[#101B4B] hover:bg-[#FFF0ED] hover:text-[#F04423] transition-colors"
                >
                  <span>Services</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </Link>

                <Link
                  to="/contact"
                  onClick={onClose}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-base font-bold text-[#101B4B] hover:bg-[#FFF0ED] hover:text-[#F04423] transition-colors"
                >
                  <span>Contact Us</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </Link>
              </nav>

              {/* Dynamic Categories Section */}
              <div className="pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2 px-3">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Product Categories
                  </span>
                  <Link
                    to="/products"
                    onClick={onClose}
                    className="text-xs font-bold text-[#F04423] hover:underline"
                  >
                    View All
                  </Link>
                </div>

                <div className="space-y-1">
                  <Link
                    to="/products"
                    onClick={onClose}
                    className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-[#222222] hover:bg-slate-50 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#F04423]" />
                      All Products
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                  </Link>

                  {/* Dynamically generated category links */}
                  {categories.map((category) => {
                    const isComingSoon = isCategoryComingSoon(category);
                    return (
                      <Link
                        key={category.id}
                        to={`/products?category=${category.slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-medium text-[#444444] hover:text-[#F04423] hover:bg-slate-50 transition-colors"
                      >
                        <span>{category.name}</span>
                        {isComingSoon ? (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200/80">
                            Soon
                          </span>
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Quick Contact Info */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-500 px-3">
                <div className="flex items-start gap-2 text-slate-600">
                  <Phone className="w-3.5 h-3.5 text-[#F04423] shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.displayPhone}
                    {siteConfig.displayPhone2 ? ` / ${siteConfig.displayPhone2}` : ''}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Mail className="w-3.5 h-3.5 text-[#F04423]" />
                  <span>{siteConfig.email}</span>
                </div>
                <div className="flex items-start gap-2 text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-[#F04423] shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.address.city} - {siteConfig.address.pincode}, {siteConfig.address.country}
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Footer CTA */}
            <div className="p-5 border-t border-slate-100 bg-slate-50">
              <WhatsAppButton
                variant="primary"
                size="md"
                className="w-full justify-center shadow-lg"
              >
                Chat on WhatsApp
              </WhatsAppButton>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
