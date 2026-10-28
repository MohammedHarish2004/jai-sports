import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Trophy,
  Users,
  HeartHandshake,
  MessageCircle,
  Truck,
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const features = [
  {
    icon: ShieldCheck,
    title: 'Quality Sports Products',
    description: 'We source verified, high-performance sports equipment tested for durability and competitive standards.',
  },
  {
    icon: Trophy,
    title: 'Trophies and Awards',
    description: 'Custom championship trophies, laser-engraved shields, and die-cast medals for memorable ceremonies.',
  },
  {
    icon: Users,
    title: 'Products for All Age Groups',
    description: 'From lightweight toddler starter sets to collegiate and professional athletic competition gear.',
  },
  {
    icon: HeartHandshake,
    title: 'Friendly Customer Support',
    description: 'Get honest recommendations and sizing advice tailored to your tournament, academy, or school budget.',
  },
  {
    icon: MessageCircle,
    title: 'Easy WhatsApp Enquiries',
    description: 'No complicated carts—chat directly with our store team for instant quotes, customization, and stock checks.',
  },
  {
    icon: Truck,
    title: 'Bulk & Institutional Supply',
    description: 'Special discounted packages and timely dispatch for sports clubs, academies, and inter-school events.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="THE JAI SPORTS ADVANTAGE"
          title="Why Choose Jai Sports?"
          subtitle="We combine passion for athletics with dependable craftsmanship, honest pricing, and personal customer service."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FFF0ED] text-[#F04423] flex items-center justify-center mb-6 group-hover:bg-[#F04423] group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold font-outfit text-[#101B4B] mb-2.5">
                  {feature.title}
                </h3>

                <p className="text-sm text-[#555555] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
