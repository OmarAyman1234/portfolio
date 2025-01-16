import About from "./Components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { createContext, useRef } from "react";

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
      </ScrollContext.Provider>
    </>
  );
}

export default App;
