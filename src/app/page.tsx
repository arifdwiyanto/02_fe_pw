import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { PortfolioSection } from "@/components/sections/portfolio";
import { ExperienceSection } from "@/components/sections/experience";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { Navbar } from "@/components/ui/navbar";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
