import { Code, User, Briefcase, Gamepad } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section
      id="hero-about"
      className="relative min-h-[90vh] flex flex-col items-center justify-center p-4 sm:p-6 md:px-4 md:py-16 mt-16 sm:mt-20"
    >
      <div
        className="container max-w-5xl mx-auto text-center z-10 p-4 sm:p-6 md:p-8"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.02)",
          borderRadius: "25px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          transform: "scale(1.01)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.03)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.25)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1.01)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.2)";
        }}
      >
        <div className="flex flex-col items-center space-y-3 sm:space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-tight px-2">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 drop-shadow-lg">
              Quentin Desabre
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row w-full max-w-5xl px-4 space-y-2 sm:space-y-0">
            <div className="flex-1 flex justify-center lg:justify-start lg:pl-2">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-500 whitespace-normal">
                {t('hero.occupations.fullstack')}
              </span>
            </div>
            <div className="flex-1 flex justify-center">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 whitespace-normal">
                {t('hero.occupations.gamedev')}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="text-left space-y-4 md:space-y-6 px-2">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {t('hero.experience.part1')}
                <span className="text-primary font-semibold">
                  {t('hero.experience.years7')}
                </span>
                {t('hero.experience.teaching')}
                <span className="text-primary font-semibold">
                  {t('hero.experience.years3')}
                </span>
                {t('hero.experience.specialization')}
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {t('hero.current.part1')}
                <span className="text-primary font-semibold">
                  {t('hero.current.role')}
                </span>
                {t('hero.current.part2')}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 px-2">
              <div className="gradient-border p-4 md:p-6 card-hover">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 shrink-0 flex items-center justify-center">
                    <Code className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg md:text-xl">
                      {t('hero.skills.webDev.title')}
                    </h4>
                    <p className="text-base md:text-lg text-muted-foreground">
                      {t('hero.skills.webDev.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-4 md:p-6 card-hover">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 shrink-0 flex items-center justify-center">
                    <User className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg md:text-xl">
                      {t('hero.skills.solutions.title')}
                    </h4>
                    <p className="text-base md:text-lg text-muted-foreground">
                      {t('hero.skills.solutions.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-4 md:p-6 card-hover">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 shrink-0 flex items-center justify-center">
                    <Briefcase className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg md:text-xl">
                      {t('hero.skills.projectManagement.title')}
                    </h4>
                    <p className="text-base md:text-lg text-muted-foreground">
                      {t('hero.skills.projectManagement.description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-4 md:p-6 card-hover">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 shrink-0 flex items-center justify-center">
                    <Gamepad className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg md:text-xl">
                      {t('hero.skills.gameDev.title')}
                    </h4>
                    <p className="text-base md:text-lg text-muted-foreground">
                      {t('hero.skills.gameDev.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 md:pt-12 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#projects"
            className="px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
          >
            {t('hero.buttons.exploreWork')}
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-medium text-cyan-500 border border-cyan-500 rounded-lg shadow-lg hover:bg-cyan-500 hover:text-white hover:shadow-xl transition-all duration-300"
          >
            {t('hero.buttons.getInTouch')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
