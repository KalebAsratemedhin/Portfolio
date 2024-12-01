import CTASection from "../components/CTASection";
import FeaturedProjects from "../components/FeaturedProjects";
import HeroSection from "../components/HeroSection";
import ScrollWatcher from "../components/ScrollWatcher";
import ServicesOverview from "../components/ServicesOverview";
import TechSkills from "../components/TechSkills";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    

      <div className="bg-gray-100">
        <ScrollWatcher />
        <HeroSection />
        <ServicesOverview />
        <FeaturedProjects />
        <TechSkills />
        <Testimonials />
        <CTASection />
      </div>

      
    // </div>
  );
}

