import { createContext, useRef } from "react";

import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";

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
        <Contact />
      </ScrollContext.Provider>
      <Footer />
      <Toaster
        toastOptions={{
          error: { duration: 2000, style: { backgroundColor: "#e5e7eb" } },
          success: { duration: 3000, style: { backgroundColor: "#e5e7eb" } },
        }}
      />
    </>
  );
}

export default App;
