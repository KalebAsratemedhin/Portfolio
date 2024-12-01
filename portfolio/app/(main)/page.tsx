import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/FeaturedProjects";
import HeroSection from "../components/HeroSection";
import ScrollWatcher from "../components/ScrollWatcher";
import Services from "../components/Services";
import Skills from "../components/Skills";

export default function Home() {
  return (
    

      <div className="bg-gray-100">
        <ScrollWatcher />
        <HeroSection /> 
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </div>

  );
}

