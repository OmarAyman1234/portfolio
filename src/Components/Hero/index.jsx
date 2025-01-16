function Hero() {
  return (
    <section className="from-acc1 to-acc2 text-primary flex min-h-svh flex-col items-center justify-evenly bg-gradient-to-r px-4 py-2">
      <div>
        <h1 className="mb-6 text-center font-mono text-5xl font-extrabold lg:text-6xl">
          Hello, I am <span className="animate-colorText">Omar Ayman</span>!
        </h1>
        <p className="text-secondary text-center text-2xl lg:text-3xl">
          A passionate web developer.
        </p>
      </div>
      <a
        href="#about"
        className="hover:text-acc1 hover:bg-primary rounded-lg border-2 border-white px-20 py-3 font-mono text-lg font-bold duration-150 lg:text-xl"
      >
        Explore
      </a>
    </section>
  );
}

export default Hero;
