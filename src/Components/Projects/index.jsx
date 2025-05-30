import { useContext } from "react";
import { projects } from "../../Data/projects.js";
import Project from "./Project";
import { ScrollContext } from "../../App";

function Projects() {
  const { projectsRef } = useContext(ScrollContext);
  return (
    <section id="projects" ref={projectsRef} className="section-container">
      <h1 className="section-title">MY PROJECTS</h1>

      {Object.entries(projects).map(
        ([category, projectsArray], categoryIndex) => (
          <div key={categoryIndex} className="mb-4">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <h2 className="mb-2 border-b-4 border-acc1 pb-[2px] text-center text-xl font-bold sm:text-2xl">
                  {category}
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {projectsArray.map((project, projectIndex) => (
                  <Project
                    key={projectIndex}
                    previewImg={project.previewImg}
                    name={project.name}
                    includedSkills={project.includedSkills}
                    description={project.description}
                    sourceCode={project.sourceCode}
                    demo={project.demo}
                  />
                ))}
              </div>
            </div>
          </div>
        ),
      )}
    </section>
  );
}

export default Projects;
