import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-2.5">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-[#555555]">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1 hover:text-[#F04423] transition-colors font-medium"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              {isLast || !item.to ? (
                <span className="font-semibold text-[#101B4B]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="hover:text-[#F04423] transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
