import React from 'react';
import PropTypes  from 'prop-types';

export default function IconButton({ onClick, size, icon, label, type, position }) {
  return (
    <button className="flex flex-row items-center gap-2 hover:text-pink-400" onClick={onClick} type={type}>
      {position === 'left' && icon}
      <span className={`text-${size}`}>{label}</span>
      {position === 'right' && icon}
    </button>
  );
}

IconButton.propTypes = {
  icon : PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
  position : PropTypes.oneOf(['left', 'right']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl' ]),
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

IconButton.defaultProps = {
  icon: null,
  label: '',
  onClick: () => {},
  position: 'right',
  size: 'sm',
  type: 'button'
};
