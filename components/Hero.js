const Hero = () => {
  return (
    <section>
      <div
        className="max-w-screen-xl px-4 py-32 mx-auto lg:flex lg:h-screen lg:items-center"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Free Tailwind Components for
            <strong className="ml-2 font-extrabold text-sky-400">
              Sat-set
            </strong> Developer
          </h1>

          <p className="mt-4 sm:text-xl sm:leading-relaxed text-slate-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
            tenetur fuga ducimus numquam ea!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              className="block w-full px-12 py-3 text-sm font-medium text-white transition duration-300 rounded-full shadow bg-sky-400 hover:bg-sky-500 focus:outline-none focus:ring active:bg-sky-400 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full px-12 py-3 text-sm font-medium rounded-full shadow text-sky-400 hover:text-sky-500 focus:outline-none focus:ring active:text-sky-400 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;