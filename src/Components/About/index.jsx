import { useContext } from "react";
import { ScrollContext } from "../../App";
function About() {
  const { aboutRef, projectsRef } = useContext(ScrollContext);
  return (
    <section id="about" ref={aboutRef} className="section-container">
      <h1 className="section-title">ABOUT ME</h1>
      <div className="w-3/4">
        <p className="mb-5 text-left font-semibold">
          Software engineer with over one year of experience. Strong academic foundation in Data Structures, Algorithms, and Object-Oriented Programming (OOP). Hands-on experience building secure full-stack applications with modern technologies.        </p>
      </div>
    </section>
  );
}

export default About;
