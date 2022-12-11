import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ children }) {
  return (
    <h4 className="font-bold text-lg my-3">{children}</h4>
  );
}

Header.propTypes = {
  children: PropTypes.node
};
Header.defaultProps = {
  children: null
};
