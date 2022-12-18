import React from 'react';
import PropTypes  from 'prop-types';

export default function Card({ children }) {
  return (
    <div
      className="relative block p-6 bg-white shadow lg:my-8 dark:bg-slate-800 rounded-xl"
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
