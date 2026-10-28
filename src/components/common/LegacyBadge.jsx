import legacyImg from '../../assets/51years.png';

export default function LegacyBadge({
  variant = 'badge', // 'badge', 'compact', 'inline', 'card'
  className = '',
}) {
  if (variant === 'compact') {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-[#101B4B]/10 border border-orange-500/30 text-xs font-bold ${className}`}
      >
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F04423] text-white font-black text-[10px]">
          51
        </span>
        <span className="text-[#101B4B]">
          <strong className="text-[#F04423]">51 Years</strong> Legacy (1975–2027)
        </span>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`inline-flex items-center gap-2.5 text-xs font-semibold ${className}`}>
        <span className="px-2 py-0.5 rounded-md bg-[#F04423] text-white font-extrabold tracking-wide text-[11px]">
          51 YEARS
        </span>
        <span className="text-slate-300">1975 – 2027 • Inspiring Student Success</span>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div
        className={`bg-white rounded-3xl p-6 sm:p-8 border-2 border-orange-200 shadow-xl shadow-orange-500/5 relative overflow-hidden flex flex-col sm:flex-row items-center gap-6 ${className}`}
      >
        <div className="w-36 sm:w-44 shrink-0 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
          <img
            src={legacyImg}
            alt="51 Years (1975-2027) Legacy - Inspiring Student Success"
            className="w-full h-auto object-contain mx-auto"
          />
        </div>
        <div className="flex-1 text-center sm:text-left space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0ED] text-[#F04423] text-xs font-bold uppercase tracking-wider">
            <span>Golden Milestone</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black font-outfit text-[#101B4B]">
            Celebrating 51 Years of Sporting Legacy
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Since 1975, Jai Sports has been an enduring cornerstone for school tournaments, collegiate sports, district champions, and generations of athletes across Tamil Nadu.
          </p>
          <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-bold text-[#101B4B]">
            <span className="text-[#F04423]">1975 TO 2027</span>
            <span>•</span>
            <span className="text-slate-700">Inspiring Student Success</span>
            <span>•</span>
            <span className="text-slate-500">
              Then. Now. <strong className="text-[#F04423]">Always.</strong>
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Default 'badge' variant
  return (
    <div
      className={`inline-block bg-white p-2.5 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow ${className}`}
    >
      <img
        src={legacyImg}
        alt="51 Years (1975-2027) Legacy - Inspiring Student Success"
        className="w-28 sm:w-36 h-auto object-contain mx-auto"
      />
    </div>
  );
}
