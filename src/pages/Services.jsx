import { useEffect } from 'react';
import {
  Trophy,
  Award,
  Medal,
  Sparkles,
  Shirt,
  PackageCheck,
  CheckCircle2,
  Flame,
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { services } from '../data/services';
import { siteConfig } from '../config/siteConfig';

const iconMap = {
  Trophy,
  Award,
  Medal,
  Sparkles,
  Shirt,
  PackageCheck,
};

export default function Services() {
  useEffect(() => {
    document.title = `Services — ${siteConfig.brandName} | Trophies, Customization & Bulk Supply`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F6F8] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Services Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF0ED] text-[#F04423] border border-[#F04423]/20">
            <Flame className="w-3.5 h-3.5 text-[#F04423]" />
            <span>CUSTOM SOLUTIONS & PROCUREMENT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-outfit text-[#101B4B] tracking-tight">
            Our Professional Services
          </h1>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            From customized championship trophies with laser engraving to team jersey sublimation and institutional sports packages, we cater to all your athletic requirements.
          </p>
        </div>

        {/* Responsive Grid of Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Trophy;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Header */}
                  <div className="w-14 h-14 rounded-2xl bg-[#101B4B] text-[#F04423] flex items-center justify-center mb-6 shadow-sm">
                    <IconComponent className="w-7 h-7 text-[#F04423]" />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold font-outfit text-[#101B4B] mb-3">
                    {service.title}
                  </h2>

                  <p className="text-sm text-[#555555] leading-relaxed mb-6">
                    {service.fullDescription || service.shortDescription}
                  </p>

                  {/* Highlights Checklist */}
                  {service.highlights && service.highlights.length > 0 && (
                    <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-100">
                      <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
                        Key Features
                      </span>
                      {service.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#F04423] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action */}
                <div className="pt-5 border-t border-slate-100">
                  <WhatsAppButton
                    customNote={`I would like to enquire about your "${service.title}" service.`}
                    variant="outline"
                    size="sm"
                    className="w-full justify-center"
                  >
                    Enquire for {service.title}
                  </WhatsAppButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-[#101B4B] text-white p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden border border-white/10">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFA08A] block">
              NEED A CUSTOM PROPOSAL?
            </span>
            <h3 className="text-2xl sm:text-4xl font-black font-outfit text-white">
              Planning a Tournament or Annual Sports Day?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We specialize in fulfilling bulk requirement orders for schools, corporate sports leagues, and sports clubs with personalized engraving and scheduled dispatch.
            </p>
            <div className="pt-2">
              <WhatsAppButton
                customNote="I am planning a tournament / event and need a custom quotation."
                variant="primary"
                size="lg"
                className="shadow-lg shadow-[#F04423]/30"
              >
                Discuss Tournament Requirements
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
