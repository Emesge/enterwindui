import React from 'react';
import '../styles/globals.css';
import 'prismjs/themes/prism-okaidia.css';
import BaseLayouts from '../components/layouts/BaseLayouts';
import PropTypes  from 'prop-types';
import Head from 'next/head';

const EnterWind = ({ Component, pageProps }) => {
  return (
    <BaseLayouts>
      <Head>
        <title>Free Tailwind Components for Sat-set Developer | EnterWindUI</title>
      </Head>
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
