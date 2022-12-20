import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ children, className }) {
  return (
    <h4 className={`${className} font-medium lg:text-lg`}>{children}</h4>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
Header.defaultProps = {
  children: null,
  className: '',
};
