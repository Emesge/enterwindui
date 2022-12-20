import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../elements/Card';
import Link from 'next/link';

export default function Components({ componentConfig }) {
  return (
    <section>
      <div className="max-w-screen-xl px-4 mx-auto lg:flex lg:min-h-screen lg:items-start">
        <div className="w-full pt-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold sm:text-4xl">
              Components
            </h1>
            <p className="mt-4 sm:text-xl sm:leading-relaxed text-slate-600 dark:text-slate-400">
              Free Tailwind Components for
              <strong className="ml-2 font-extrabold text-pink-600">
                Sat-set
              </strong> Developer
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-4 gap-y-2">
            {componentConfig.map((item) => (
              <Link href={item.url} key={item.url}>
                <Card
                  className="transition mt-6 my-2 hover:shadow-xl border-sm hover:ring hover:ring-pink-300 hover:border-pink-300 dark:bg-slate-600 dark:text-white"
                >
                  <div className="text-xl font-bold pb-2">{item.name}</div>
                  <span className="py-2 text-md">{item.description}</span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Components.defaultProps = {
  componentConfig: [],
};

Components.propTypes = {
  componentConfig: PropTypes.array,
};
