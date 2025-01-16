import { useContext } from "react";
import { ScrollContext } from "../../App";
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
      <button
        onClick={() => {
          aboutRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        className="rounded-lg border-2 border-white px-20 py-3 font-mono text-lg font-bold duration-150 hover:bg-primary hover:text-acc1 lg:text-xl"
      >
        Explore
      </button>
    </section>
  );
}

export default Hero;
