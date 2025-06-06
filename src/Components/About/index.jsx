import { useContext } from "react";
import { ScrollContext } from "../../App";
function About() {
  const { aboutRef, projectsRef } = useContext(ScrollContext);
  return (
    <section id="about" ref={aboutRef} className="section-container">
      <h1 className="section-title">ABOUT ME</h1>
      <div className="w-3/4">
        <p className="mb-5 text-left font-semibold">
          I am a web developer with <span className="font-bold">1+ year</span>{" "}
          of experience. I started with front-end development, but I am now
          focused on back-end development.
        </p>
        <p className="mb-5 text-left font-semibold">
          In 2022, my journey with web development started by learning the
          basics of HTML and designing simple static pages.
        </p>
        <p className="mb-5 text-left font-semibold">
          In 2024, my real journey with web development started with a project
          with my colleagues by building a simple phone store.
        </p>
        <p className="mb-5 text-left font-semibold">
          After that, I started building and collaborating in other projects as
          you will see in the{" "}
          <span
            onClick={() => {
              projectsRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="cursor-pointer text-acc1 underline duration-150 hover:text-blue-700"
          >
            projects
          </span>{" "}
          section.
        </p>
      </div>
    </section>
  );
}

export default About;
