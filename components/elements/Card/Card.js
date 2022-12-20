import React from 'react';
import PropTypes  from 'prop-types';

export default function Card({ children, className, onClick }) {
  return (
    <div
      className={`relative block p-6 bg-white shadow dark:bg-slate-800 rounded-xl ${className} `}
      onClick={onClick}
    >
      {children}
    </div>

  );
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
Card.defaultProps = {
  children: null,
  className: 'my-6',
  onClick: () => {}
};
