import Skill from "./Skill";
import { skills } from "../../Data/skills.js";
import { useContext } from "react";
import { ScrollContext } from "../../App.jsx";

function Skills() {
  const { skillsRef } = useContext(ScrollContext);
  return (
    <section id="skills" ref={skillsRef} className="section-container">
      <h1 className="section-title">MY SKILLS</h1>

      {Object.entries(skills).map(([category, skillsArray], categoryIndex) => (
        <div key={categoryIndex} className="mb-4 w-4/5">
          <div className="flex justify-center">
            <h2 className="mb-2 border-b-4 border-acc1 pb-[2px] text-center text-xl font-bold sm:text-2xl">
              {category}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {skillsArray.map((skill, skillIndex) => (
              <Skill
                key={skillIndex}
                name={skill.name}
                img={skill.img}
                borderColor={skill.borderColor}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
