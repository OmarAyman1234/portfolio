import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function DefaultMailPlatform() {
  return (
    <a href="mailto:omarayman9124@gmail.com" target="_blank">
      <div className="group/envelope relative text-primary">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="cursor-pointer rounded-full p-3 text-4xl text-primary duration-200 group-hover/envelope:bg-gray-600"
        />
        <div className="4 absolute -bottom-7 -left-12 hidden w-44 rounded-md bg-gray-600 px-1 text-center font-bold group-hover/envelope:block sm:-bottom-8 sm:-left-16 sm:w-48 sm:text-lg">
          Default mail platform
        </div>
      </div>
    </a>
  );
}
export default DefaultMailPlatform;
