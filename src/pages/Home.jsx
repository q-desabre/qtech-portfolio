import Navbar from "@/components/Navbar";
import StarBackground from "@/components/StarBackground";
import HeroSection from "@sections/HeroSection";
import SkillsSection from "@sections/SkillsSection";
import ProjectsSection from "@sections/ProjectsSection";
import ContactSection from "@sections/ContactSection";
import Footer from "@components/Footer";
import { useHeroSkillsScroll } from "@/hooks/useHeroSkillsScroll";

const Home = () => {
  // Use our custom scroll hook for hero-to-skills transition
  useHeroSkillsScroll();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
