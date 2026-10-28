import { motion } from 'framer-motion';
import { Trophy, Sparkles } from 'lucide-react';
import WhatsAppButton from '../common/WhatsAppButton';
import { siteConfig } from '../../config/siteConfig';

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#101B4B] via-[#142159] to-[#0A1132] p-8 sm:p-12 lg:p-16 text-white shadow-2xl border border-white/10"
        >
          {/* Subtle Orange Glow Graphic */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F04423]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#18286E]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F04423]/25 border border-[#F04423]/40 text-[#FFA08A] text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#F04423]" />
              <span>CUSTOM ORDERS & SPECIAL QUOTES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-outfit tracking-tight text-white leading-tight mb-4">
              Looking for the Right Sports Gear or a Special Trophy?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Whether you are organizing a school championship, equipping your sports club, or searching for the perfect gear for your young athlete, <span className="text-white font-semibold">{siteConfig.brandName}</span> is here to help with personalized recommendations and fast WhatsApp support.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <WhatsAppButton
                customNote="I am looking for specific sports gear or customized trophies."
                variant="primary"
                size="lg"
                className="shadow-xl shadow-[#F04423]/30"
              >
                Chat with Us on WhatsApp
              </WhatsAppButton>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 px-2 py-1 justify-center sm:justify-start">
                <Trophy className="w-4 h-4 text-[#F04423]" />
                <span>Quick quotes • Custom engraving • Pan-India dispatch</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
