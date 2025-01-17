import About from "./Components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./Components/Projects";
import { createContext, useRef } from "react";
import Skills from "./Components/Skills";

export const ScrollContext = createContext({});
function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const ScrollValues = {
    aboutRef,
    skillsRef,
    projectsRef,
    contactRef,
  };
  return (
    <>
      <ScrollContext.Provider value={ScrollValues}>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </ScrollContext.Provider>
    </>
  );
}

export default App;
