import React from 'react';
import PropTypes from 'prop-types';

export default function Iframe({ source }) {
  return (
    <iframe className="w-full h-auto rounded-lg dark:bg-slate-900 bg-slate-50 lg:transition-all"
      key="item"
      loading="lazy"
      srcDoc={source} />
  );
}

Iframe.defaultProps = {
  source: '',
};

Iframe.propTypes = {
  source: PropTypes.string,
};
