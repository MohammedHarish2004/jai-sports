import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ArrowLeft, Home, Search } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function NotFound() {
  useEffect(() => {
    document.title = `404 — Page Not Found | ${siteConfig.brandName}`;
  }, []);

  return (
    <div className="min-h-[75vh] bg-[#F5F6F8] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-12 text-center border border-slate-200/80 shadow-xl space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-[#FFF0ED] text-[#F04423] mx-auto flex items-center justify-center border border-[#F04423]/20 shadow-sm">
          <Trophy className="w-10 h-10 rotate-12" />
        </div>

        <div>
          <span className="text-xs font-black uppercase tracking-wider text-[#F04423]">
            ERROR 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-outfit text-[#101B4B] mt-1">
            Out of Bounds!
          </h1>
          <p className="mt-3 text-sm text-[#555555] leading-relaxed">
            The page you are looking for has been moved, deleted, or doesn’t exist on our field.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#101B4B] text-white font-bold text-sm hover:bg-[#18286E] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F04423] text-white font-bold text-sm hover:bg-[#D63617] transition-colors shadow-md"
          >
            <Search className="w-4 h-4" />
            <span>Search Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
