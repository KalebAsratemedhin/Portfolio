import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/FeaturedProjects";
import HeroSection from "../components/HeroSection";
import ScrollWatcher from "../components/ScrollWatcher";
import Skills from "../components/Skills";
import TechSkills from "../components/TechSkills";

export default function Home() {
  return (
    

      <div className="bg-gray-100">
        <ScrollWatcher />
        <HeroSection /> 
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

  );
}

