import React from 'react';
import '../styles/globals.css';
import BaseLayouts from '../components/layouts/BaseLayouts';
import PropTypes  from 'prop-types';

const EnterWind = ({ Component, pageProps }) => {
  return (
    <BaseLayouts>
      <Component {...pageProps} />
    </BaseLayouts>
  );
};

export default EnterWind;

EnterWind.defaultProps = {
  Component: null,
  pageProps: {},
};

EnterWind.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};
