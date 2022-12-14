import React from 'react';
import PropTypes from 'prop-types';

export default function Iframe({ source }) {
  return (
    <iframe className="h-auto w-full rounded-lg bg-white ring-2
  ring-black lg:transition-all"
    key="item"
    loading="lazy"
    srcDoc={source}/>
  );
}

Iframe.defaultProps = {
  source: '',
};

Iframe.propTypes = {
  source: PropTypes.string,
};
