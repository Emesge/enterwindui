import React from 'react';
import PropTypes from 'prop-types';

export default function Iframe({ source }) {
  return (
    <iframe className="lg:transition-all"
      key="item"
      loading="lazy"
      srcDoc={source}
    />
  );
}

Iframe.defaultProps = {
  source: '',
};

Iframe.propTypes = {
  source: PropTypes.string,
};
