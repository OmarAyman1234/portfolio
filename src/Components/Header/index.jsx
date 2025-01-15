import { useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("");

  const handleNavIconClick = (section) => {
    setActiveLink(section);
  };

  const [dropDown, setDropDown] = useState(false);

  const handleNavMenuIcon = () => {
    setDropDown(!dropDown);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex flex-col bg-gray-900 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex h-20 items-center justify-between px-6 sm:px-10">
        <p className="text-center text-xl font-extrabold text-gray-100 xl:text-2xl">
          Omar Ayman
        </p>
        <button
          className={`menu-icon ${dropDown ? "text-white" : ""} text-xl text-gray-300 hover:text-white sm:hidden`}
          onClick={handleNavMenuIcon}
        >
          &#9776;
        </button>
      </div>
      <div
        className={`nav-dropdown ${dropDown ? "h-9 opacity-100" : "h-0 opacity-0"} flex items-center justify-between px-6 text-xl text-gray-100 transition-all duration-300 sm:h-20 sm:pr-10 sm:text-2xl sm:opacity-100 xl:text-3xl`}
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
