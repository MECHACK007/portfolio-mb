import Hero from "@/app/components/sections/Hero";
import MarqueeBand from "@/app/components/sections/MarqueeBand";
import StatsCounter from "@/app/components/sections/StatsCounter";
import SkillsCircuit from "@/app/components/sections/SkillsCircuit";
import AboutSection from "@/app/components/sections/AboutSection";
import ProjectsCarousel from "@/app/components/sections/ProjectsCarousel";
import TechStackTerminal from "@/app/components/sections/TechStackTerminal";
import TestimonialsBook from "@/app/components/sections/TestimonialsBook";
import FinalCTA from "@/app/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <StatsCounter />
      <SkillsCircuit />
      <AboutSection />
      <ProjectsCarousel />
      <TechStackTerminal />
      <TestimonialsBook />
      <FinalCTA />
    </>
  );
}
