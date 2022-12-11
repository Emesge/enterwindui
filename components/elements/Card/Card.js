import React from 'react';
import PropTypes  from 'prop-types';

export default function Card({ children }) {
  return (
    <div
      className="relative block rounded-xl border border-gray-100 p-8 shadow-xl"
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
