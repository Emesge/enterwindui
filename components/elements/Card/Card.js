import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ children }) {
  return (
    <div
      className="flex flex-col gap-4 p-4 transition duration-300 bg-white shadow hover:shadow-lg lg:p-6 dark:bg-slate-800 rounded-xl"
    >
      {children}
    </div>

  );
}

Card.propTypes = {
  children: PropTypes.node
};
Card.defaultProps = {
  children: null
};
