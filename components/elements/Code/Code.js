import React, { useEffect } from 'react';
import Prism  from 'prismjs';
import PropTypes from 'prop-types';

export default function Code({ languageType, code, height }) {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <pre className={`h-[${height}px] overflow-auto rounded-lg bg-black p-4 ring-2 ring-black lg:h-[${height}px]`}>
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
