// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        SKILLS
      </h2>
      <div className="w-28 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mx-auto mt-3 rounded"></div>
      <p className="text-gray-400 mt-4 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          className="w-full sm:w-[48%] mb-10"
        >
          <div className="bg-gray-900 backdrop-blur-md px-8 py-6 rounded-2xl border border-white shadow-[0_0_30px_2px_rgba(130,69,236,0.35)] hover:shadow-[0_0_40px_4px_rgba(130,69,236,0.5)] transition-all duration-500">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center space-y-2 bg-transparent border-2 border-gray-700 rounded-3xl py-3 px-2 text-center hover:border-purple-500 hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
