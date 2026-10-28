export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = false,
  dark = false,
  className = '',
  action,
}) {
  return (
    <div
      className={`mb-10 md:mb-14 ${
        centered ? 'text-center mx-auto max-w-3xl' : 'w-full'
      } ${className}`}
    >
      <div
        className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 ${
          centered ? 'md:flex-col md:items-center text-center' : ''
        }`}
      >
        <div className={centered ? 'max-w-3xl mx-auto' : 'max-w-2xl'}>
          {badge && (
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
                dark
                  ? 'bg-[#F04423]/20 text-[#FFA08A] border border-[#F04423]/40'
                  : 'bg-[#FFF0ED] text-[#F04423] border border-[#F04423]/20'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F04423] animate-pulse" />
              {badge}
            </div>
          )}

          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-black font-outfit tracking-tight leading-tight ${
              dark ? 'text-white' : 'text-[#101B4B]'
            }`}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className={`mt-3 text-base sm:text-lg leading-relaxed ${
                dark ? 'text-slate-300' : 'text-[#555555]'
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {action && (
          <div className="shrink-0 mt-2 md:mt-0 md:self-end">
            {action}
          </div>
        )}
      </div>
    </div>
  );
}
