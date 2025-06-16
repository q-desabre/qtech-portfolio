import { useState } from "react";
import { cn } from "@/utils/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Vue.js", level: 60, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Express", level: 75, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Backend" },
  { name: "mySQL", level: 65, category: "Backend" },
  { name: "GraphQL", level: 60, category: "Backend" },

  // Software
  { name: "C", level: 90, category: "Software" },
  { name: "C++", level: 90, category: "Software" },
  { name: "C#", level: 50, category: "Software" },
  { name: "Python", level: 80, category: "Software" },
  { name: "Shell", level: 65, category: "Software" },

  // Tools
  { name: "Git/GitHub", level: 95, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "Jenkins", level: 80, category: "Tools" },
  { name: "SVN", level: 80, category: "Tools" },
];

const categories = ["Frontend", "Backend", "Software", "Tools"];

const SkillBubbles = ({ level }) => {
  // Create an array of 10 bubbles to represent skill level
  const bubbles = Array.from({ length: 10 }, (_, i) => {
    // Calculate if this bubble should be filled based on the level
    const shouldFill = (i + 1) * 10 <= level;
    // Calculate if this bubble should be half-filled (for levels ending in 5)
    const shouldHalfFill = !shouldFill && (i + 0.5) * 10 <= level;

    return { filled: shouldFill, halfFilled: shouldHalfFill };
  });

  return (
    <div className="flex items-center justify-center gap-[3px] xxs:gap-1 sm:gap-1.5 mt-2">
      {bubbles.map((bubble, i) => (
        <div
          key={i}
          className={cn(
            "w-1.5 h-1.5 xxs:w-2 xxs:h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors duration-300",
            bubble.filled
              ? "bg-primary"
              : bubble.halfFilled
              ? "bg-gradient-to-r from-primary to-primary/10"
              : "bg-secondary/70"
          )}
        />
      ))}
    </div>
  );
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  // Function to determine skill level text
  const getSkillLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Basic";
  };

  return (
    <section id="skills" className="py-12 md:py-16 px-4 relative bg-secondary/30 z-10 mt-0 sm:mt-2 transition-opacity duration-500">
      <div className="container mx-auto max-w-5xl 2xl:max-w-7xl">
        <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-8 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Mobile Dropdown for Categories */}
        <div className="md:hidden mb-6">
          <select
            className="w-full p-3 bg-card rounded-lg shadow-xs border border-primary/20 text-foreground"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category} className="capitalize">
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Category Tabs */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid - Mobile Friendly with Bubbles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 2xl:gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-2 sm:p-4 md:p-6 rounded-lg shadow-xs hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-wrap justify-between items-center mb-3 gap-2">
                <h3 className="font-semibold text-sm sm:text-base md:text-lg">
                  {skill.name}
                </h3>
                <span
                  className={cn(
                    "text-xs px-1.5 sm:px-2 py-1 rounded-full whitespace-nowrap",
                    skill.level >= 90
                      ? "bg-green-500/20 text-green-500"
                      : skill.level >= 75
                      ? "bg-blue-500/20 text-blue-500"
                      : skill.level >= 60
                      ? "bg-yellow-500/20 text-yellow-500"
                      : "bg-orange-500/20 text-orange-500"
                  )}
                >
                  {getSkillLevelText(skill.level)}
                </span>
              </div>

              {/* Bubble representation of skill level */}
              <SkillBubbles level={skill.level} />

              <div className="flex justify-between mt-2 sm:mt-3 text-[10px] xxs:text-xs md:text-sm text-muted-foreground">
                <span>Beginner</span>
                <span>{skill.level}%</span>
                <span>Expert</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
