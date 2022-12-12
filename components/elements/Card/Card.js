import React from 'react';
import PropTypes  from 'prop-types';

export default function Card({ children }) {
  return (
    <div
      className="relative block rounded-xl border border-gray-200 p-8 shadow-sm my-8"
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
