import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = React.createContext({
  setTheme: () => {},
  theme: 'light',
});

export function Theme({ children }) {
  const [theme, setTheme] = useState('light');
  const value = { setTheme, theme };

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
  }, []);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

Theme.defaultProps = {
  children: null,
};

Theme.propTypes = {
  children: PropTypes.node,
};
