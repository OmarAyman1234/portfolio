import { useContext } from "react";
import { ScrollContext } from "../../App";
function About() {
  const { aboutRef } = useContext(ScrollContext);
  return (
    <section
      ref={aboutRef}
      className="mt-28 flex scroll-mt-28 flex-col items-center"
    >
      <h1 className="mb-5 border-b-4 border-r-4 border-acc1 px-3 text-center text-2xl font-extrabold">
        ABOUT ME
      </h1>
      <div className="w-3/4">
        <p className="mb-5 text-left font-semibold">
          I am a web developer with <span>1 year</span> of experience in
          Front-end development, I enjoy building functional responsive
          websites.
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
            onClick={() => {}}
            className="cursor-pointer text-acc1 underline"
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
