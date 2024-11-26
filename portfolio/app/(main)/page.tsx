import CTASection from "../components/CTASection";
import FeaturedProjects from "../components/FeaturedProjects";
import HeroSection from "../components/HeroSection";
import ServicesOverview from "../components/ServicesOverview";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    

      <div className="bg-gray-100">
        <HeroSection />
        <ServicesOverview />
        <FeaturedProjects />
        <Testimonials />
        <CTASection />
      </div>

      
    // </div>
  );
}

