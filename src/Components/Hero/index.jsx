import { useContext } from "react";
import { ScrollContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
function Hero() {
  const { aboutRef } = useContext(ScrollContext);
  return (
    <section className="flex min-h-svh flex-col items-center justify-evenly bg-gradient-to-r from-acc1 to-acc2 px-4 py-2 text-primary">
      <div>
        <h1 className="mb-6 text-center font-mono text-5xl font-extrabold lg:text-6xl">
          Hello, I am <span className="animate-colorText">Omar Ayman</span>!
        </h1>
        <p className="text-center text-2xl text-secondary lg:text-3xl">
          A passionate web developer.
        </p>
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        <button
          onClick={() => {
            aboutRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="w-60 rounded-lg border-2 border-white py-3 font-mono text-lg font-bold duration-150 hover:bg-primary hover:text-acc1 lg:text-xl"
        >
          Explore
        </button>
        <button
          onClick={() => {
            toast("CV is arriving soon ...", {
              icon: "📋",
              duration: 2500,
            });
          }}
          className="w-60 rounded-lg border-2 border-white py-3 font-mono text-lg font-bold duration-150 hover:bg-primary hover:text-acc1 lg:text-xl"
        >
          CV <FontAwesomeIcon className="animate-spin" icon={faSpinner} />
        </button>
      </div>
    </section>
  );
}

export default Hero;
