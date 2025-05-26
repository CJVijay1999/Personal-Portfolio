import { useState } from "react";
const languages = [
  // Languages
  { name: "English", level: "80", category: "Languages" },
  { name: "Spanish", level: "20", category: "Languages" },
  { name: "Hindi", level: "30", category: "Languages" },
  { name: "Tamil", level: "70", category: "Languages" },
];

export const LanguagesSection = () => {
  return (
    <section id="languages" className="relative py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Languages</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((language, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="text-xl font-bold">{language.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-primary rounded-full origin-left animate-[grow_1.5s ease-in-out]"
                  style={{ width: language.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-muted-foreground text-sm">
                  {language.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
