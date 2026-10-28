import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Trophy,
  Target,
  Eye,
  ShieldCheck,
  Sparkles,
  Heart,
  ArrowRight,
  Flame,
  CheckCircle2,
  Calendar,
  Medal,
  Award,
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { siteConfig } from '../config/siteConfig';
import legacyImg from '../assets/51years.png';

const coreValues = [
  {
    icon: ShieldCheck,
    title: 'Authenticity & Durability',
    description: 'We believe genuine sports gear builds genuine champions. Every product in our collection is vetted for build quality, bounce accuracy, and safety.',
  },
  {
    icon: Trophy,
    title: 'Honoring Achievement',
    description: 'Every sports milestone deserves to be remembered. We create trophies and medals with precision engraving that winners treasure for decades.',
  },
  {
    icon: Sparkles,
    title: 'Nurturing Young Talent',
    description: 'Sports build resilience, discipline, and teamwork. Our kids line ensures youngsters start their athletic journey with safe, age-appropriate gear.',
  },
  {
    icon: Heart,
    title: 'Customer-First Guidance',
    description: 'We offer personalized consultations for tournament coordinators, coaches, and parents looking for reliable advice within their budget.',
  },
];

const pillars = [
  {
    title: 'Comprehensive Sports Equipment',
    description: 'From football, cricket, basketball, and badminton to fitness and track essentials, we cater to athletes across every discipline.',
  },
  {
    title: 'Championship Trophies & Awards',
    description: 'Custom crystal trophies, heavy metallic cups, personalized medals, and commemorative wooden plaques customized for your event.',
  },
  {
    title: 'Safe Gear for Young Champions',
    description: 'Scaled-down, lightweight, durable athletic kits designed to make sports enjoyable and accessible for toddlers and junior players.',
  },
  {
    title: 'Institutional & Team Supply',
    description: 'Reliable bulk fulfillment, customized team uniforms, bibs, and maintenance accessories for academies and schools.',
  },
];

const legacyMilestones = [
  {
    year: '1975',
    title: 'The Foundation in Trichy',
    description: 'Jai Sports opened its doors with a singular vision: providing authentic, durable sports equipment to young students and school athletes.',
  },
  {
    year: '1992',
    title: 'Nurturing Inter-School Champions',
    description: 'Became the preferred sports partner for schools, colleges, and athletic meets across Tiruchirappalli and neighboring districts.',
  },
  {
    year: '2010',
    title: 'Awards & Trophy Craftsmanship',
    description: 'Expanded state-of-the-art precision engraving, die-cast championship medals, and custom crystal trophies for state & district tournaments.',
  },
  {
    year: `${new Date().getFullYear()}`,
    title: '51 Years of Enduring Heritage',
    description: 'A celebrated milestone of half a century inspiring student success. Then. Now. Always empowering the next generation of champions.',
  },
];

export default function About() {
  useEffect(() => {
    document.title = `51 Years Legacy (1975-2027) — ${siteConfig.brandName} | About Us`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F6F8]">
      {/* About Page Hero */}
      <section className="bg-gradient-to-b from-[#101B4B] via-[#142159] to-[#101B4B] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F04423_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1 lg:col-span-7 space-y-5"
            >

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-outfit text-white leading-tight">
                Inspiring Student Success.{' '}
                <span className="text-[#F04423]">Then. Now. Always.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Founded in <strong className="text-white">1975</strong>, <span className="text-white font-semibold">{siteConfig.brandName}</span> is proud to mark <strong className="text-[#F04423]">51 continuous years</strong> of equipping athletes, schools, colleges, and tournaments with tournament-grade sporting gear and championship trophies.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F04423] hover:bg-[#D63617] text-white font-bold text-sm shadow-lg shadow-[#F04423]/25 transition-all"
                >
                  <span>Explore Product Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <WhatsAppButton
                  variant="dark"
                  size="md"
                  className="rounded-xl border-white/20"
                >
                  Contact Our Team
                </WhatsAppButton>
              </div>
            </motion.div>

            {/* 51 Years Showcase Badge Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 lg:order-2 lg:col-span-5"
            >
              <div className="">
                <img
                  src={legacyImg}
                  alt="51 Years (1975-2027) Legacy - Inspiring Student Success"
                  loading="lazy"
                  decoding="async"
                  className="w-80 sm:w-100 rounded-3xl h-auto mx-auto object-contain drop-shadow-md"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dedicated 51 Years Legacy Heritage Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="51 YEARS HERITAGE (1975–2027)"
            title="Half a Century of Inspiring Champions"
            subtitle="From our beginnings in Tiruchirappalli to equipping hundreds of schools and state tournaments, our commitment to students has remained steadfast."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {legacyMilestones.map((milestone, idx) => (
              <div
                key={idx}
                className="bg-[#F5F6F8] rounded-3xl p-6 border border-slate-200/80 hover:border-[#F04423]/40 transition-all hover:shadow-lg group flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101B4B] text-white text-xs font-black tracking-wider mb-4">
                    <Calendar className="w-3.5 h-3.5 text-[#F04423]" />
                    <span>{milestone.year}</span>
                  </div>
                  <h3 className="text-lg font-bold font-outfit text-[#101B4B] group-hover:text-[#F04423] transition-colors mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-[11px] font-bold text-[#F04423]">
                  <Medal className="w-3.5 h-3.5" />
                  <span>Inspiring Student Success</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="bg-[#F5F6F8] rounded-3xl p-8 sm:p-10 border border-slate-200/80 relative overflow-hidden flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#101B4B] text-[#F04423] flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#F04423]" />
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#F04423] block mb-1">
                  OUR PURPOSE
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-outfit text-[#101B4B] mb-4">
                  Our Mission
                </h2>
                <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                  To supply durable, performance-driven sports equipment, authentic awards, and accessible athletic goods to sports lovers, schools, and tournament organizers—fostering sporting excellence and a lifelong love for fitness.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-[#101B4B]">
                <CheckCircle2 className="w-4 h-4 text-[#F04423]" />
                <span>Dedicated to player growth at every stage</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-[#101B4B] text-white rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#FFA08A] flex items-center justify-center mb-6 border border-white/10">
                <Eye className="w-7 h-7 text-[#F04423]" />
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#FFA08A] block mb-1">
                  THE FUTURE
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-outfit text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  To become the region’s most trusted sports and trophy partner, renowned for unwavering product reliability, personalized customer advisory, and celebrating the triumphs of athletes from grassroots to the podium.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#F04423]" />
                <span>Every victory celebrated with honor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 sm:py-24 bg-[#F5F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHAT WE DO"
            title="Our Product & Service Offerings"
            subtitle="From individual athletes to large institutional tournaments, discover what sets our offerings apart."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0ED] text-[#F04423] font-black text-sm flex items-center justify-center shrink-0">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-outfit text-[#101B4B] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#555555] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR GUIDING VALUES"
            title="What Drives Jai Sports Every Day"
            subtitle="Our standards are rooted in integrity, enthusiasm for sports, and genuine care for our community."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coreValues.map((val, index) => {
              const Icon = val.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F5F6F8] rounded-3xl p-7 border border-slate-200/80 hover:border-slate-300 shadow-sm transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white text-[#F04423] flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-6 h-6 text-[#F04423]" />
                  </div>
                  <h3 className="text-lg font-bold font-outfit text-[#101B4B] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Action CTA */}
          <div className="mt-16 bg-gradient-to-r from-[#101B4B] to-[#18286E] text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black font-outfit mb-2">
                Ready to find the ideal sports gear?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Browse our product catalog or contact our shop team directly via WhatsApp for quick quotations.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/products"
                className="px-6 py-3 rounded-xl bg-white text-[#101B4B] font-bold text-sm hover:bg-slate-100 transition-colors"
              >
                View Catalogue
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-[#F04423] text-white font-bold text-sm hover:bg-[#D63617] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
