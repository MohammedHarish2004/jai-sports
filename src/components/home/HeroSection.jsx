import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const heroBanners = [
  {
    id: 'sports',
    image: '/images/banners/banner-sports.jpg',
    badge: 'OFFICIAL SPORTS EQUIPMENT',
    title: 'Gear Up. Play Hard. Win Big.',
    subtitle: 'Tournament-grade footballs, English willow cricket bats, pro badminton and court gear engineered for victory.',
    categorySlug: 'sports',
    buttonText: 'Shop Sports Gear',
    accentColor: '#F04423',
  },
  {
    id: 'trophies',
    image: '/images/banners/banner-trophies.jpg',
    badge: 'CHAMPIONSHIP AWARDS',
    title: 'Victory Trophies & Custom Medals',
    subtitle: 'Majestic golden championship cups, laser-etched crystal awards, and die-cast medals for unforgettable ceremonies.',
    categorySlug: 'trophies',
    buttonText: 'Explore Trophies',
    accentColor: '#F59E0B',
  },
  {
    id: 'kids',
    image: '/images/banners/banner-kids.jpg',
    badge: 'YOUNG CHAMPIONS',
    title: 'Safe & Exciting Sports Gear for Kids',
    subtitle: 'Lightweight junior cricket starter sets, foam training balls, and durable athletic gear built for young champions.',
    categorySlug: 'kids',
    buttonText: 'Browse Kids Gear',
    accentColor: '#38BDF8',
  },
  {
    id: 'fitness',
    image: '/images/banners/banner-fitness.jpg',
    badge: 'TEAM KITS & FITNESS',
    title: 'Custom Team Uniforms & Training Gear',
    subtitle: 'Dry-fit sublimated jerseys, gym dumbbells, agility trainers, and tournament duffle bags for sports teams and clubs.',
    categorySlug: 'uniforms',
    buttonText: 'Explore Uniforms & Gear',
    accentColor: '#F04423',
  },
  {
    id: 'music',
    image: '/images/banners/banner-music.jpg',
    badge: 'MUSICAL INSTRUMENTS',
    title: 'School Band Gear & Musical Instruments',
    subtitle: 'Marching snare drums, acoustic guitars, brass trumpets, electronic keyboards, and rhythm percussion instruments.',
    categorySlug: 'musical-instruments',
    buttonText: 'Shop Instruments',
    accentColor: '#F59E0B',
  },
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0A1132] select-none"
      aria-label="Featured category banners"
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={650}
        grabCursor={true}
        pagination={{
          el: '.hero-custom-pagination',
          clickable: true,
        }}
        className="w-full h-full"
      >
        {heroBanners.map((banner, index) => (
          <SwiperSlide key={banner.id} className="relative w-full overflow-hidden">
            <div className="relative w-full h-[500px] sm:h-[560px] md:h-[620px] lg:h-[680px] flex items-end sm:items-center">
              {/* Background Image: First banner eager-loads for LCP; rest are lazy-loaded */}
              <img
                src={banner.image}
                alt={banner.title}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center sm:object-center"
              />

              {/* DESKTOP Overlay: Horizontal gradient on the left side, keeping right side image open and clear */}
              <div className="hidden sm:block absolute inset-0 sm:w-[80%] lg:w-[65%] bg-gradient-to-r from-[#0A1132]/95 via-[#0A1132]/75 to-transparent z-10" />

              {/* MOBILE Overlay: Soft subtle gradient from bottom up, so the photo is completely visible, NOT blue-blocked */}
              <div className="sm:hidden absolute inset-0 bg-gradient-to-t from-[#0A1132]/95 via-[#0A1132]/45 to-transparent z-10" />
              <div className="sm:hidden absolute inset-0 bg-black/15 z-10" />

              {/* Content Container */}
              <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-0 pt-8 sm:pt-0 w-full">
                <div className="max-w-2xl sm:max-w-3xl space-y-3 sm:space-y-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-sm font-bold tracking-wider uppercase">
                    <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFA08A]" />
                    <span>{banner.badge}</span>
                  </div>

                  {/* Banner Headline */}
                  <h1 className="text-2xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-outfit text-white tracking-tight leading-[1.12] drop-shadow-md">
                    {banner.title}
                  </h1>

                  {/* Banner Subtitle */}
                  <p className="text-xs sm:text-base md:text-lg lg:text-xl text-slate-100 sm:text-slate-200 leading-relaxed font-normal max-w-xl drop-shadow line-clamp-2 sm:line-clamp-none">
                    {banner.subtitle}
                  </p>

                  {/* CTA Button */}
                  <div className="pt-1 sm:pt-4">
                    <Link
                      to={`/products?category=${banner.categorySlug}`}
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl bg-[#F04423] hover:bg-[#D63617] active:bg-[#B82B10] text-white font-bold text-xs sm:text-base shadow-xl shadow-[#F04423]/35 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <span>{banner.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots (Centered at bottom, no buttons) */}
      <div className="hero-custom-pagination" />
    </section>
  );
}
