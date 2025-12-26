'use client'
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/FeaturedProjects";
import HeroSection from "../components/HeroSection";
import ScrollWatcher from "../components/ScrollWatcher";
import Services from "../components/Services";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";

export default function Home() {
  return (
    <div className="relative bg-bgPrimary">
      <ScrollWatcher />
      <HeroSection /> 
      <About />
      <WorkExperience />
      <Education />
      <Projects />
      <Skills />
      <Services />
      <Contact />
    </div>
  );
}

