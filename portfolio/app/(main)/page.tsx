'use client'
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/FeaturedProjects";
import HeroSection from "../components/HeroSection";
import ScrollWatcher from "../components/ScrollWatcher";
import Services from "../components/Services";
import Skills from "../components/Skills";
import ExperienceAndEducation from "../components/ExperienceAndEducation";

export default function Home() {
  return (
    <div className="relative bg-bgPrimary">
      <ScrollWatcher />
      <HeroSection /> 
      <About />
      <ExperienceAndEducation />
      <Projects />
      <Skills />
      <Services />
      <Contact />
    </div>
  );
}

