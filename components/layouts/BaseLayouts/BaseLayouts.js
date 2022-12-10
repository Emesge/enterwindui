import React from 'react';
import Footer from '../../elements/Footer';
import Navbar from '../../elements/Navbar';
import PropTypes from 'prop-types';

export default function BaseLayouts({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

BaseLayouts.defaultProps = {
  children: null
};

BaseLayouts.propTypes = {
  children: PropTypes.node
};
