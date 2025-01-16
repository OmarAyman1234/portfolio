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
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      entry.isIntersecting ? setActiveLink("about") : setActiveLink("");
    });
    observer.observe(aboutRef.current);
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
        <p className="text-center text-xl font-extrabold text-primary xl:text-2xl">
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
            handleNavIconClick("skills");
          }}
        >
          Skills
        </button>
        <button
          className={`nav-link ${activeLink === "projects" ? "active text-white" : ""}`}
          onClick={() => {
            handleNavIconClick("projects");
          }}
        >
          Projects
        </button>
        <button
          className={`nav-link ${activeLink === "contact" ? "active text-white" : ""}`}
          onClick={() => {
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
