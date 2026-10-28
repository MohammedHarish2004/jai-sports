import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServicesPreview from '../components/home/ServicesPreview';
import CustomerFeedback from '../components/home/CustomerFeedback';
import CTASection from '../components/home/CTASection';
import { siteConfig } from '../config/siteConfig';

export default function Home() {
  useEffect(() => {
    document.title = `${siteConfig.brandName} — ${siteConfig.tagline} | Sports Equipment, Trophies & Awards`;
  }, []);

  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <WhyChooseUs />
      <ServicesPreview />
      <CustomerFeedback />
      <CTASection />
    </div>
  );
}
