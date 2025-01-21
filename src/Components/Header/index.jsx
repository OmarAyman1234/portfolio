import { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ScrollContext } from "../../App";

function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [isVisible, setIsVisible] = useState(false); //modify height and opacity
  const [dropDown, setDropDown] = useState(false); //modify display
  const { aboutRef, skillsRef, projectsRef, contactRef } =
    useContext(ScrollContext);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Get all sections
      const sections = [
        aboutRef.current,
        skillsRef.current,
        projectsRef.current,
        contactRef.current,
      ];

      const currentSection = sections.find((section) => {
        if (!section) return false;
        const top = section.offsetTop - 235;
        const height = section.offsetHeight + 120;
        return scrollPosition >= top && scrollPosition < top + height;
      });

      if (currentSection) {
        setActiveLink(currentSection.id);
      } else {
        setActiveLink("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavIconClick = (section) => {
    setActiveLink(section);
  };

  const handleNavMenuIcon = () => {
    if (dropDown) {
      setIsVisible(false);
      setTimeout(() => {
        setDropDown(false);
      }, 300);
    } else {
      setDropDown(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex flex-col bg-gray-900 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex h-20 items-center justify-between px-6 sm:px-10">
        <p className="text-center text-2xl font-extrabold text-primary xl:text-3xl">
          Omar Ayman
        </p>
        <button
          className={`menu-icon ${dropDown ? "text-white" : ""} text-xl text-gray-300 hover:text-primary sm:hidden`}
          onClick={handleNavMenuIcon}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div
        className={`nav-dropdown ${dropDown ? "flex" : "hidden"} ${isVisible ? "h-9 opacity-100" : "h-0 opacity-0"} items-center justify-between px-6 text-xl text-primary transition-all duration-300 sm:flex sm:h-20 sm:pr-10 sm:text-2xl sm:opacity-100 xl:text-3xl`}
      >
        <button
          className={`nav-link ${activeLink === "about" ? "active text-white" : ""}`}
          onClick={() => {
            aboutRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            handleNavIconClick("about");
          }}
        >
          About
        </button>
        <button
          className={`nav-link ${activeLink === "skills" ? "active text-white" : ""}`}
          onClick={() => {
            skillsRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            handleNavIconClick("skills");
          }}
        >
          Skills
        </button>
        <button
          className={`nav-link ${activeLink === "projects" ? "active text-white" : ""}`}
          onClick={() => {
            projectsRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            handleNavIconClick("projects");
          }}
        >
          Projects
        </button>
        <button
          className={`nav-link ${activeLink === "contact" ? "active text-white" : ""}`}
          onClick={() => {
            contactRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            handleNavIconClick("contact");
          }}
        >
          Contact
        </button>
      </div>
    </header>
  );
}
export default Header;
