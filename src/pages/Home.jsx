import Navbar from "@/components/Navbar";
import StarBackground from "@/components/StarBackground";
import HeroSection from "@sections/HeroSection";
import SkillsSection from "@sections/SkillsSection";
import ProjectsSection from "@sections/ProjectsSection";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
