import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { feedbacks } from '../../data/feedback';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Google "G" icon
function GoogleIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

export default function CustomerFeedback() {
  const swiperRef = useRef(null);

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
              <GoogleIcon className="w-4 h-4" />
              <span>GOOGLE REVIEWS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-outfit text-[#101B4B] tracking-tight">
              What Our Customers Say
            </h2>

            <p className="mt-2 text-xs sm:text-base text-[#555555] max-w-xl">
              Trusted by athletes, schools, tournament organizers, and sports academies across Trichy and beyond.
            </p>
          </div>

          {/* Rating Summary Badge & Slider Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <div className="flex items-center gap-3 bg-[#F5F6F8] p-3 sm:p-3.5 rounded-2xl border border-slate-200/80">
              <GoogleIcon className="w-6 h-6 sm:w-7 sm:h-7" />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-base sm:text-lg text-[#101B4B] leading-none">4.2</span>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">
                  Verified Customer Reviews
                </span>
              </div>
            </div>

            {/* Custom Previous / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous reviews"
                className="w-10 h-10 rounded-xl bg-[#F5F6F8] hover:bg-[#101B4B] hover:text-white text-slate-700 border border-slate-200 flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next reviews"
                className="w-10 h-10 rounded-xl bg-[#101B4B] hover:bg-[#F04423] text-white flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Slider for Mobile, Tablet, Laptop & Desktop */}
        <div className="relative">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            grabCursor={true}
            pagination={{
              el: '.custom-feedback-pagination',
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="!overflow-visible py-2"
          >
            {feedbacks.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-[#F5F6F8] rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full min-h-[280px]">
                  <div>
                    {/* Header: User Avatar + Name + Google Verified */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            item.name
                          )}&background=101B4B&color=fff`;
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm sm:text-base text-[#101B4B] truncate">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                          <CheckCircle className="w-3 h-3 shrink-0" />
                          <span>Verified Review</span>
                        </div>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-3 text-amber-400">
                      {[...Array(item.stars || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    {/* Review Description */}
                    <p className="text-xs sm:text-sm text-[#444444] leading-relaxed italic line-clamp-4">
                      &ldquo;{item.description}&rdquo;
                    </p>
                  </div>

                  {/* Bottom Google attribution */}
                  <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Google Review</span>
                    <GoogleIcon className="w-3.5 h-3.5 opacity-80" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Dedicated Pagination Container below review cards */}
          <div className="custom-feedback-pagination mt-8 flex items-center justify-center gap-1.5" />
        </div>
      </div>
    </section>
  );
}
