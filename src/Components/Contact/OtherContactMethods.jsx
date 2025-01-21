import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

function OtherContactMethods() {
  return (
    <>
      <h2 className="section-h2 mt-8">Other Methods</h2>

      <div className="flex w-8/12 flex-col gap-3 xsm:w-[330px]">
        {/* Email Button */}
        <div
          onClick={() => {
            window.open("mailto:omarayman9124@gmail.com");
          }}
          className="flex h-20 w-full cursor-pointer items-center justify-start gap-2 rounded-lg bg-gray-800 px-5 py-1 font-bold text-primary duration-150 hover:scale-[1.02] sm:px-8"
        >
          <div className="icon-iconBg-width-setter flex w-1/3 justify-center">
            <div className="icon-bg flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <FontAwesomeIcon
                icon={faSquareEnvelope}
                className="text-5xl text-gray-800"
              />
            </div>
          </div>
          <p className="flex flex-1 text-start text-xl">Email</p>
        </div>

        {/* LinkedIn Button */}
        <div
          onClick={() => {
            window.open("https://www.linkedin.com/in/omaray/");
          }}
          className="flex h-20 w-full cursor-pointer items-center justify-start gap-2 rounded-lg bg-[#0a66c2] px-5 py-1 font-bold text-primary duration-150 hover:scale-[1.02] hover:bg-[#0955a1] sm:px-8"
        >
          <div className="icon-iconBg-width-setter flex w-1/3 justify-center">
            <div className="icon-bg flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                className="w-10"
                alt="LinkedIn"
              />
            </div>
          </div>
          <p className="flex-1 text-start text-xl">My LinkedIn</p>
        </div>
      </div>
    </>
  );
}
export default OtherContactMethods;
