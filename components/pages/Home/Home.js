import React from 'react';

export default function Home() {
  return (
    <div>
      <section>
        <div
          className="max-w-screen-xl px-4 py-32 mx-auto lg:flex lg:min-h-screen lg:items-center"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Free Tailwind Components for
              <strong className="ml-2 font-extrabold text-pink-600">
                Sat-set
              </strong> Developer
            </h1>

            <p className="mt-4 sm:text-xl sm:leading-relaxed text-slate-600 dark:text-slate-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
              tenetur fuga ducimus numquam ea!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                // eslint-disable-next-line max-len
                className="block w-full px-12 py-3 text-sm font-medium text-white uppercase transition duration-300 bg-pink-600 border-2 border-pink-600 shadow rounded-xl hover:border-pink-500 hover:bg-pink-500 focus:outline-none active:bg-pink-400 sm:w-auto focus:ring-pink-700 focus:ring"
                href="#"
              >
                Get Started
              </a>

              <a
                // eslint-disable-next-line max-len
                className="block w-full px-12 py-3 text-sm font-medium text-pink-400 uppercase transition duration-300 border-2 border-pink-400 shadow rounded-xl hover:text-pink-500 hover:border-2 focus:outline-none focus:ring hover:border-pink-500 active:text-pink-900 sm:w-auto focus:ring-pink-500"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
