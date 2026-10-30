import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServicesPreview from '../components/home/ServicesPreview';
import CustomerFeedback from '../components/home/CustomerFeedback';
import CTASection from '../components/home/CTASection';
import Seo from '../components/common/Seo';

export default function Home() {
  return (
    <div>
      <Seo
        title="Best Sports Shop in Trichy | Jai Sports"
        description="Shop cricket bats, footballs, badminton gear, trophies, medals, fitness equipment and team uniforms at Jai Sports, a local sports goods store on Madurai Road, Trichy."
        keywords={[
          'cricket shop in Trichy',
          'football shop Trichy',
          'badminton shop Trichy',
          'sports goods store Tiruchirappalli',
          'sports equipment for schools Trichy',
        ]}
      />
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
