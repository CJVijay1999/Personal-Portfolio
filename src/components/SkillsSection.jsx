import { useState } from "react";
import { cn } from "../lib/utils";
const skills = [
  // Front-End
  { name: "HTML/CSS", level: "90", category: "Front-End" },
  { name: "JavaScript", level: "70", category: "Front-End" },
  { name: "React", level: "70", category: "Front-End" },
  { name: "Tailwind", level: "70", category: "Front-End" },

  // Back-End
  { name: "Node.js", level: "60", category: "Back-End" },
  { name: "Express.js", level: "60", category: "Back-End" },
  { name: "MongoDB", level: "60", category: "Back-End" },

  // Tools
  { name: "Git/GitHub", level: "85", category: "Tools" },
  { name: "VS Code", level: "90", category: "Tools" },
  { name: "Terminal", level: "62", category: "Tools" },
];



const categories = ["all", "Front-End", "Back-End", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="relative py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-white"
                  : "text-gray-600",
                "hover:bg-primary hover:text-white"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              <div
                className="h-2 bg-primary rounded-full origin-left animate-[grow_1.5s ease-in-out]"
                style={{ width: skill.level + "%" }}
              />
              </div>
              <div className="text-right mt-1">
                <span className="text-muted-foreground text-sm">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
