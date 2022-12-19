import React, { useEffect } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';

export default function Code({ languageType, code, height }) {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <pre className={`h-[${height}px] w-full overflow-auto border border-slate-700 lg:h-[${height}px]`} style={{ margin: '0px' }}>
      <code className={`language-${languageType}`}>{code}</code>
    </pre>
  );
}

Code.defaultProps = {
  code: '',
  height: 400,
  languageType: '',
};

Code.propTypes = {
  code: PropTypes.string,
  height: PropTypes.number,
  languageType: PropTypes.oneOf(['html', 'js'])
};
