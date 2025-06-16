import { Code, Briefcase, Gamepad } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (    <section
      id="hero-about"
      className="relative min-h-screen flex flex-col items-center justify-center px-3 xxs:px-4 sm:px-10 pt-20 xxs:pt-16 sm:pt-16 pb-4 sm:pb-0 hero-skills-transition"
    >
      <div
        className="container max-w-5xl 2xl:max-w-7xl mx-auto text-center z-10 p-2 xxs:p-3 sm:p-5 md:p-6"
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
        <div className="flex flex-col items-center space-y-2 sm:space-y-3">
          {" "}
          <h1 className="text-2xl xxs:text-3xl sm:text-5xl md:text-7xl 2xl:text-8xl font-extrabold tracking-tight leading-tight px-1 sm:px-2">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 drop-shadow-lg">
              Quentin Desabre
            </span>
          </h1>{" "}
          <div className="flex flex-col sm:flex-row w-full max-w-5xl px-1 xxs:px-2 sm:px-3 space-y-1 sm:space-y-0">
            <div className="flex-1 flex justify-center">
              <span className="text-sm xxs:text-base sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-cyan-500 whitespace-normal">
                {t("hero.occupations.fullstack")}
              </span>
            </div>
            <div className="flex-1 flex justify-center">
              <span className="text-sm xxs:text-base sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-blue-500 whitespace-normal">
                {t("hero.occupations.gamedev")}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-6 md:mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            <div className="flex flex-col justify-center space-y-3 md:space-y-4 px-2 h-full">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-snug">
                {t("hero.experience.part1")}
                <span className="text-primary font-semibold">
                  {t("hero.experience.years7")}
                </span>
                {t("hero.experience.teaching")}
                <span className="text-primary font-semibold">
                  {t("hero.experience.years3")}
                </span>
                {t("hero.experience.specialization")}
              </p>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-snug">
                {t("hero.current.part1")}
                <span className="text-primary font-semibold">
                  {t("hero.current.role")}
                </span>
                {t("hero.current.part2")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:gap-4 px-2">
              {" "}
              <div className="gradient-border p-2 xxs:p-3 md:p-4 card-hover">
                <div className="flex items-center gap-2 xxs:gap-3 sm:gap-4">
                  <div className="w-8 h-8 xxs:w-9 xxs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/10 shrink-0 flex items-center justify-center">
                    <Code className="h-3 w-3 xxs:h-4 xxs:w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-sm xxs:text-base md:text-lg">
                      {t("hero.skills.webDev.title")}
                    </h4>
                    <p className="hidden md:block text-sm md:text-base text-muted-foreground">
                      {t("hero.skills.webDev.description")}
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="gradient-border p-2 xxs:p-3 md:p-4 card-hover">
                <div className="flex items-center gap-2 xxs:gap-3 sm:gap-4">
                  <div className="w-8 h-8 xxs:w-9 xxs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/10 shrink-0 flex items-center justify-center">
                    <Briefcase className="h-3 w-3 xxs:h-4 xxs:w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-sm xxs:text-base md:text-lg">
                      {t("hero.skills.projectManagement.title")}
                    </h4>{" "}
                    <p className="hidden md:block text-sm md:text-base text-muted-foreground">
                      {t("hero.skills.projectManagement.description")}
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="gradient-border p-2 xxs:p-3 md:p-4 card-hover">
                <div className="flex items-center gap-2 xxs:gap-3 sm:gap-4">
                  <div className="w-8 h-8 xxs:w-9 xxs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/10 shrink-0 flex items-center justify-center">
                    <Gamepad className="h-3 w-3 xxs:h-4 xxs:w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-sm xxs:text-base md:text-lg">
                      {t("hero.skills.gameDev.title")}
                    </h4>{" "}
                    <p className="hidden md:block text-sm md:text-base text-muted-foreground">
                      {t("hero.skills.gameDev.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="pt-4 xxs:pt-6 sm:pt-10 md:pt-12 flex flex-col sm:flex-row justify-center space-y-3 xxs:space-y-4 sm:space-y-0 sm:space-x-8">
          <a
            href="#projects"
            className="min-w-[130px] xxs:min-w-[160px] sm:min-w-[220px] px-4 xxs:px-6 sm:px-10 py-2 xxs:py-3 sm:py-4 text-xs xxs:text-sm sm:text-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
          >
            {t("hero.buttons.exploreWork")}
          </a>
          <a
            href="#contact"
            className="min-w-[130px] xxs:min-w-[160px] sm:min-w-[220px] px-4 xxs:px-6 sm:px-10 py-2 xxs:py-3 sm:py-4 text-xs xxs:text-sm sm:text-lg font-medium text-cyan-500 border border-cyan-500 rounded-lg shadow-lg hover:bg-cyan-500 hover:text-white hover:shadow-xl transition-all duration-300"
          >
            {t("hero.buttons.getInTouch")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
