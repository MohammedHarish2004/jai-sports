import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, Award, Medal, Sparkles, Shirt, PackageCheck } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { services } from '../../data/services';

const iconMap = {
  Trophy,
  Award,
  Medal,
  Sparkles,
  Shirt,
  PackageCheck,
};

export default function ServicesPreview() {
  // Display top 3 services for preview
  const previewServices = services.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="OUR EXPERTISE"
          title="Custom Services & Solutions"
          subtitle="Beyond retail products, we provide end-to-end tournament customization, team outfitting, and bulk institutional supply."
          action={
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#F04423] hover:text-[#D63617] group"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {previewServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Trophy;

            return (
              <div
                key={service.id}
                className="bg-[#F5F6F8] rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#101B4B] text-[#F04423] flex items-center justify-center mb-5 shadow-sm">
                    <IconComponent className="w-6 h-6 text-[#F04423]" />
                  </div>

                  <h3 className="text-xl font-bold font-outfit text-[#101B4B] mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#555555] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F04423] hover:text-[#D63617]"
                >
                  <span>Learn Details & Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
