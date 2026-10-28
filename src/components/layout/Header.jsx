import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  ChevronDown,
  Search,
  PhoneCall,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { categories } from '../../data/shopData';
import { isCategoryComingSoon } from '../../utils/productFilters';
import WhatsAppButton from '../common/WhatsAppButton';
import SearchModal from '../common/SearchModal';
import MobileMenu from './MobileMenu';
import jaiLogo from '../../assets/jailogo2.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  // Global keyboard shortcut (Ctrl+K or Cmd+K) to open search
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow duration-300">
        {/* Top Mini Bar for contact announcement */}
        <div className="hidden lg:block bg-[#101B4B] text-white py-1.5 px-4 text-xs font-medium">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#F04423]" />
                {siteConfig.tagline}
              </span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-300">
                Trophies • Medals • Cricket • Football • Kids Gear • Fitness
              </span>
            </div>

            <div className="flex items-center gap-5">
              <a
                href={`tel:${siteConfig.displayPhone2 ? siteConfig.displayPhone2.replace(/[^0-9]/g, '') : siteConfig.whatsappNumber}`}
                className="flex items-center gap-1.5 hover:text-[#F04423] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#F04423]" />
                <span>Call: {siteConfig.displayPhone} / {siteConfig.displayPhone2}</span>
              </a>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">{siteConfig.businessHours.weekdays}</span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Brand Logo & Name */}
            <Link to="/" className="flex items-center group shrink-0 py-1">
              <img
                src={jaiLogo}
                alt={siteConfig.brandName}
                decoding="async"
                className="h-10 sm:h-12 w-auto max-h-12 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 lg:gap-2">
              <Link
                to="/"
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-[#F04423] bg-[#FFF0ED]'
                    : 'text-[#222222] hover:text-[#F04423] hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  isActive('/about')
                    ? 'text-[#F04423] bg-[#FFF0ED]'
                    : 'text-[#222222] hover:text-[#F04423] hover:bg-slate-50'
                }`}
              >
                About Us
              </Link>

              {/* Dynamic Products Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    isActive('/products')
                      ? 'text-[#F04423] bg-[#FFF0ED]'
                      : 'text-[#222222] hover:text-[#F04423] hover:bg-slate-50'
                  }`}
                  aria-expanded={productsDropdownOpen}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      productsDropdownOpen ? 'rotate-180 text-[#F04423]' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* Dropdown Menu - dynamically generated from categories data */}
                {productsDropdownOpen && (
                  <div
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                    className="absolute left-0 mt-1 w-72 rounded-2xl bg-white shadow-2xl border border-slate-200/90 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="px-4 py-2 border-b border-slate-100 mb-1 flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                        Catalogue
                      </span>
                      <Link
                        to="/products"
                        onClick={() => setProductsDropdownOpen(false)}
                        className="text-xs font-bold text-[#F04423] hover:underline"
                      >
                        All Products →
                      </Link>
                    </div>

                    {/* Dynamically generated category items */}
                    {categories.map((category) => {
                      const isComingSoon = isCategoryComingSoon(category);
                      return (
                        <Link
                          key={category.id}
                          to={`/products?category=${category.slug}`}
                          onClick={() => setProductsDropdownOpen(false)}
                          className="flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-[#222222] hover:bg-[#FFF0ED] hover:text-[#F04423] transition-colors group"
                        >
                          <span>{category.name}</span>
                          {isComingSoon ? (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200/80">
                              Soon
                            </span>
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#F04423] group-hover:translate-x-0.5 transition-all" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                to="/services"
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  isActive('/services')
                    ? 'text-[#F04423] bg-[#FFF0ED]'
                    : 'text-[#222222] hover:text-[#F04423] hover:bg-slate-50'
                }`}
              >
                Services
              </Link>

              <Link
                to="/contact"
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  isActive('/contact')
                    ? 'text-[#F04423] bg-[#FFF0ED]'
                    : 'text-[#222222] hover:text-[#F04423] hover:bg-slate-50'
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Right Actions: Search + Orange Enquire Button + Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Trigger Button - Never overlaps navigation */}
              <button
                type="button"
                onClick={() => setSearchModalOpen(true)}
                aria-label="Search equipment & products"
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-[#FFF0ED] text-slate-600 hover:text-[#F04423] transition-colors cursor-pointer text-xs font-semibold"
              >
                <Search className="w-4 h-4 text-slate-500" />
                <span className="hidden xl:inline text-slate-500 font-medium">Search...</span>
                <kbd className="hidden xl:inline text-[10px] bg-white border border-slate-200 rounded px-1.5 py-0.5 text-slate-400 font-mono shadow-xs">⌘K</kbd>
              </button>

              {/* Prominent Orange Enquire Now Button */}
              <div className="hidden sm:block">
                <WhatsAppButton
                  variant="header"
                  size="md"
                  className="shadow-sm hover:shadow-md"
                >
                  Enquire Now
                </WhatsAppButton>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Toggle navigation menu"
                className="lg:hidden w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-[#101B4B] transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Global Live Instant Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSearch={() => setSearchModalOpen(true)}
      />
    </>
  );
}
