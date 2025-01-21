import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div className="mt-20 flex items-center justify-center bg-gray-900 p-5 text-primary">
      <p className="text-xl font-semibold sm:text-2xl">
        <span className="text-sm font-normal sm:text-base">
          &copy; {new Date().getFullYear()}
        </span>{" "}
        Omar Ayman
      </p>
      <FontAwesomeIcon
        onClick={() => {
          window.open("https://github.com/OmarAyman1234/");
        }}
        className="ml-5 cursor-pointer text-3xl hover:text-gray-300"
        icon={faGithub}
      />
      <FontAwesomeIcon
        onClick={() => {
          window.open("https://www.linkedin.com/in/omaray/");
        }}
        className="ml-5 cursor-pointer text-3xl hover:text-gray-300"
        icon={faLinkedin}
      />
    </div>
  );
}
export default Footer;
