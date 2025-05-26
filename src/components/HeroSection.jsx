import { ArrowDown } from "lucide-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>{" "}
            <TypeAnimation
              className=" text-primary opacity-0 animate-fade-in-delay-1 font-bold"
              sequence={["CJVijay", 1000]}
            />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4 ">
            I'm a
            <TypeAnimation
              sequence={[
                "Fresher",
                4000,
                "Full Stack Frontend Developer",
                2000,
                "Leaner",
                2000,
                "Dancer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "10px" }}
              repeat={Infinity}
              className="text-primary"
            />{" "}
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-3">
            <a href="#projects" className="cosmic-button">
              View the My projects 
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
