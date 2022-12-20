import React from 'react';
import PropTypes from 'prop-types';

export default function Iframe({ source }) {
  return (
    <iframe className="min-h-[300px] lg:transition-all"
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
