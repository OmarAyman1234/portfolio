import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [isVisible, setIsVisible] = useState(false); //modify height and opacity
  const [dropDown, setDropDown] = useState(false); //modify display

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
        <p className="text-primary text-center text-xl font-extrabold xl:text-2xl">
          Omar Ayman
        </p>
        <button
          className={`menu-icon ${dropDown ? "text-white" : ""} hover:text-primary text-xl text-gray-300 sm:hidden`}
          onClick={handleNavMenuIcon}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div
        className={`nav-dropdown ${dropDown ? "flex" : "hidden"} ${isVisible ? "h-9 opacity-100" : "h-0 opacity-0"} text-primary items-center justify-between px-6 text-xl transition-all duration-300 sm:flex sm:h-20 sm:pr-10 sm:text-2xl sm:opacity-100 xl:text-3xl`}
      >
        <a
          href="#about"
          className={`nav-link ${activeLink === "about" ? "active text-white" : ""}`}
          onClick={() => {
            handleNavIconClick("about");
          }}
        >
          About
        </a>
        <a
          href="#skills"
          className={`nav-link ${activeLink === "skills" ? "active text-white" : ""}`}
          onClick={() => {
            handleNavIconClick("skills");
          }}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={`nav-link ${activeLink === "projects" ? "active text-white" : ""}`}
          onClick={() => {
            handleNavIconClick("projects");
          }}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`nav-link ${activeLink === "contact" ? "active text-white" : ""}`}
          onClick={() => {
            handleNavIconClick("contact");
          }}
        >
          Contact
        </a>
      </div>
    </header>
  );
}
export default Header;
