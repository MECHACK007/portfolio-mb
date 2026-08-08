import Hero from "@/app/components/sections/Hero";
import StatsCounter from "@/app/components/sections/StatsCounter";
import SkillsCircuit from "@/app/components/sections/SkillsCircuit";
import AboutSection from "@/app/components/sections/AboutSection";
import ExperienceTimeline from "@/app/components/sections/ExperienceTimeline";
import Formation from "@/app/components/sections/Formation";
import ProjectsCarousel from "@/app/components/sections/ProjectsCarousel";
import TechStackTerminal from "@/app/components/sections/TechStackTerminal";
import TestimonialsBook from "@/app/components/sections/TestimonialsBook";
import FinalCTA from "@/app/components/sections/FinalCTA";
import GradientSeparator from "@/app/components/sections/GradientSeparator";

export default function Home() {
  return (
    <>
      <Hero />
      <GradientSeparator />
      <StatsCounter />
      <SkillsCircuit />
      <div className="mx-auto my-12 flex justify-center">
        <div className="h-px w-2/3 rounded bg-black/5" />
      </div>
      <AboutSection />
      <ProjectsCarousel />
      <TechStackTerminal />
      <TestimonialsBook />
      <FinalCTA />
    </>
  );
}